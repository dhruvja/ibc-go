package types

import (
	"fmt"
	"encoding/json"
	"errors"

	errorsmod "cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	ibcerrors "github.com/cosmos/ibc-go/v7/internal/errors"
	clienttypes "github.com/cosmos/ibc-go/v7/modules/core/02-client/types"
	commitmenttypes "github.com/cosmos/ibc-go/v7/modules/core/23-commitment/types"
	"github.com/cosmos/ibc-go/v7/modules/core/exported"
)

var _ exported.ClientState = (*ClientState)(nil)

// NewClientState creates a new ClientState instance.
func NewClientState(data []byte, codeID []byte, height clienttypes.Height) *ClientState {
	return &ClientState{
		Data:         data,
		CodeId:       codeID,
		LatestHeight: height,
	}
}

// ClientType is wasm.
func (cs ClientState) ClientType() string {
	return exported.Wasm
}

// GetLatestHeight returns latest block height.
func (cs ClientState) GetLatestHeight() exported.Height {
	return cs.LatestHeight
}

// Validate performs a basic validation of the client state fields.
func (cs ClientState) Validate() error {
	if len(cs.Data) == 0 {
		return sdkerrors.Wrap(ErrInvalidData, "data cannot be empty")
	}

	if len(cs.CodeId) == 0 {
		return sdkerrors.Wrap(ErrInvalidCodeId, "code ID cannot be empty")
	}

	return nil
}

type (
	statusPayloadInner struct{}
	statusPayload      struct {
		Status statusPayloadInner `json:"status"`
	}
)

// Status returns the status of the wasm client.
// The client may be:
// - Active: frozen height is zero and client is not expired
// - Frozen: frozen height is not zero
// - Expired: the latest consensus state timestamp + trusting period <= current time
// - Unauthorized: the client type is not registered as an allowed client type
//
// A frozen client will become expired, so the Frozen status
// has higher precedence.
func (cs ClientState) Status(ctx sdk.Context, clientStore sdk.KVStore, _ codec.BinaryCodec) exported.Status {
	status := exported.Unknown
	payload := statusPayload{Status: statusPayloadInner{}}

	encodedData, err := json.Marshal(payload)
	if err != nil {
		return status
	}

	response, err := queryContractWithStore(cs.CodeId, ctx, clientStore, encodedData)
	if err != nil {
		return status
	}
	output := queryResponse{}
	if err := json.Unmarshal(response, &output); err != nil {
		return status
	}

	return output.Status
}

// ZeroCustomFields returns a ClientState that is a copy of the current ClientState
// with all client customizable fields zeroed out
func (cs ClientState) ZeroCustomFields() exported.ClientState {
	return &cs
}

func (c ClientState) GetTimestampAtHeight(
	_ sdk.Context,
	clientStore sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
) (uint64, error) {
	// get consensus state at height from clientStore to check for expiry
	consState, found := GetConsensusState(clientStore, cdc, height)
	if found != nil {
		return 0, sdkerrors.Wrapf(clienttypes.ErrConsensusStateNotFound, "height (%s)", height)
	}
	return consState.GetTimestamp(), nil
}

// Initialize checks that the initial consensus state is an 08-wasm consensus state and
// sets the client state, consensus state in the provided client store.
func (cs ClientState) Initialize(context sdk.Context, marshaler codec.BinaryCodec, clientStore sdk.KVStore, state exported.ConsensusState) error {
	consensusState, ok := state.(*ConsensusState)
	if !ok {
		return sdkerrors.Wrapf(clienttypes.ErrInvalidConsensus, "invalid initial consensus state. expected type: %T, got: %T",
			&ConsensusState{}, state)
	}
	setClientState(clientStore, marshaler, &cs)
	setConsensusState(clientStore, marshaler, consensusState, cs.GetLatestHeight())

	_, err := initContract(cs.CodeId, context, clientStore)
	if err != nil {
		return sdkerrors.Wrapf(ErrUnableToInit, "err: %s", err)
	}
	return nil
}

type (
	verifyMembershipPayloadInner struct {
		Height           exported.Height `json:"height"`
		DelayTimePeriod  uint64          `json:"delay_time_period"`
		DelayBlockPeriod uint64          `json:"delay_block_period"`
		Proof            []byte          `json:"proof"`
		Path             exported.Path   `json:"path"`
		Value            []byte          `json:"value"`
	}
	verifyMembershipPayload struct {
		VerifyMembershipPayloadInner verifyMembershipPayloadInner `json:"verify_membership"`
	}
)

// VerifyMembership is a generic proof verification method which verifies a proof of the existence of a value at a given CommitmentPath at the specified height.
// The caller is expected to construct the full CommitmentPath from a CommitmentPrefix and a standardized path (as defined in ICS 24).
// If a zero proof height is passed in, it will fail to retrieve the associated consensus state.
func (cs ClientState) VerifyMembership(
	ctx sdk.Context,
	clientStore sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	delayTimePeriod uint64,
	delayBlockPeriod uint64,
	proof []byte,
	path exported.Path,
	value []byte,
) error {
	fmt.Println("this is client state height %+v\n", cs.GetLatestHeight())
	fmt.Println("this is proof height %+v\n", height)
	fmt.Println("This is the client store %+v\n", clientStore)
	if cs.GetLatestHeight().LT(height) {
		return errorsmod.Wrapf(
			ibcerrors.ErrInvalidHeight,
			"client state height < proof height (%d < %d), please ensure the client has been updated", cs.GetLatestHeight(), height,
		)
	}

	_, ok := path.(commitmenttypes.MerklePath)
	if !ok {
		return errorsmod.Wrapf(ibcerrors.ErrInvalidType, "expected %T, got %T", commitmenttypes.MerklePath{}, path)
	}

	_, err := GetConsensusState(clientStore, cdc, height)
	if err != nil {
		return errorsmod.Wrap(clienttypes.ErrConsensusStateNotFound, "please ensure the proof was constructed against a height that exists on the client")
	}

	payload := verifyMembershipPayload{
		VerifyMembershipPayloadInner: verifyMembershipPayloadInner{
			Height:           height,
			DelayTimePeriod:  delayTimePeriod,
			DelayBlockPeriod: delayBlockPeriod,
			Proof:            proof,
			Path:             path,
			Value:            value,
		},
	}
	_, err = call[contractResult](payload, &cs, ctx, clientStore)
	return err
}

type (
	verifyNonMembershipPayloadInner struct {
		Height           exported.Height `json:"height"`
		DelayTimePeriod  uint64          `json:"delay_time_period"`
		DelayBlockPeriod uint64          `json:"delay_block_period"`
		Proof            []byte          `json:"proof"`
		Path             exported.Path   `json:"path"`
	}
	verifyNonMembershipPayload struct {
		VerifyNonMembershipPayloadInner verifyNonMembershipPayloadInner `json:"verify_non_membership"`
	}
)

func (cs ClientState) VerifyNonMembership(
	ctx sdk.Context,
	clientStore sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	delayTimePeriod uint64,
	delayBlockPeriod uint64,
	proof []byte,
	path exported.Path,
) error {
	if cs.GetLatestHeight().LT(height) {
		return errorsmod.Wrapf(
			ibcerrors.ErrInvalidHeight,
			"client state height < proof height (%d < %d), please ensure the client has been updated", cs.GetLatestHeight(), height,
		)
	}

	_, ok := path.(commitmenttypes.MerklePath)
	if !ok {
		return errorsmod.Wrapf(ibcerrors.ErrInvalidType, "expected %T, got %T", commitmenttypes.MerklePath{}, path)
	}

	_, err := GetConsensusState(clientStore, cdc, height)
	if err != nil {
		return errorsmod.Wrap(clienttypes.ErrConsensusStateNotFound, "please ensure the proof was constructed against a height that exists on the client")
	}

	payload := verifyNonMembershipPayload{
		VerifyNonMembershipPayloadInner: verifyNonMembershipPayloadInner{
			Height:           height,
			DelayTimePeriod:  delayTimePeriod,
			DelayBlockPeriod: delayBlockPeriod,
			Proof:            proof,
			Path:             path,
		},
	}
	_, err = call[contractResult](payload, &cs, ctx, clientStore)
	return err
}

// / Calls the contract with the given payload and writes the result to `output`
func call[T ContractResult](payload any, cs *ClientState, ctx sdk.Context, clientStore sdk.KVStore) (T, error) {
	var output T
	encodedData, err := json.Marshal(payload)
	if err != nil {
		return output, sdkerrors.Wrapf(ErrUnableToMarshalPayload, "err: %s", err)
	}
	out, err := callContract(cs.CodeId, ctx, clientStore, encodedData)
	if err != nil {
		return output, sdkerrors.Wrapf(ErrUnableToCall, "err: %s", err)
	}
	if err := json.Unmarshal(out.Data, &output); err != nil {
		return output, sdkerrors.Wrapf(ErrUnableToUnmarshalPayload, "err: %s", err)
	}
	if !output.Validate() {
		return output, sdkerrors.Wrapf(errors.New(output.Error()), "error occurred while calling contract with code ID %s", cs.CodeId)
	}
	return output, nil
}
