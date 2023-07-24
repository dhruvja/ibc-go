package keeper

import (
	"bytes"
	"context"
	"fmt"
	"sort"
	"strings"

	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	utils "github.com/cosmos/ibc-go/v7/modules/core/02-client/client/utils"
	"github.com/cosmos/ibc-go/v7/modules/core/02-client/types"
	host "github.com/cosmos/ibc-go/v7/modules/core/24-host"
	"github.com/cosmos/ibc-go/v7/modules/core/exported"
	wasmtypes "github.com/cosmos/ibc-go/v7/modules/light-clients/08-wasm/types"
)

var _ types.QueryServer = Keeper{}

// ClientState implements the Query/ClientState gRPC method
func (q Keeper) ClientState(c context.Context, req *types.QueryClientStateRequest) (*types.QueryClientStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	if err := host.ClientIdentifierValidator(req.ClientId); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ctx := sdk.UnwrapSDKContext(c)
	clientState, found := q.GetClientState(ctx, req.ClientId)
	if !found {
		return nil, status.Error(
			codes.NotFound,
			sdkerrors.Wrap(types.ErrClientNotFound, req.ClientId).Error(),
		)
	}

	any, err := types.PackClientState(clientState)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	utils.MaybeDecodeWasmData(q.cdc, any)

	proofHeight := types.GetSelfHeight(ctx)
	maybeDecodeWasmData(q.cdc, any)
	fmt.Println("plssss")

	return &types.QueryClientStateResponse{
		ClientState: any,
		ProofHeight: proofHeight,
	}, nil
}

// ClientStates implements the Query/ClientStates gRPC method
func (q Keeper) ClientStates(c context.Context, req *types.QueryClientStatesRequest) (*types.QueryClientStatesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	ctx := sdk.UnwrapSDKContext(c)

	clientStates := types.IdentifiedClientStates{}
	store := prefix.NewStore(ctx.KVStore(q.storeKey), host.KeyClientStorePrefix)

	pageRes, err := query.FilteredPaginate(store, req.Pagination, func(key, value []byte, accumulate bool) (bool, error) {
		// filter any metadata stored under client state key
		keySplit := strings.Split(string(key), "/")
		if keySplit[len(keySplit)-1] != "clientState" {
			return false, nil
		}

		clientState, err := q.UnmarshalClientState(value)
		if err != nil {
			return false, err
		}

		clientID := keySplit[1]
		if err := host.ClientIdentifierValidator(clientID); err != nil {
			return false, err
		}

		identifiedClient := types.NewIdentifiedClientState(clientID, clientState)

		utils.MaybeDecodeWasmData(q.cdc, identifiedClient.ClientState)

		clientStates = append(clientStates, identifiedClient)
		return true, nil
	})
	if err != nil {
		return nil, err
	}

	sort.Sort(clientStates)

	return &types.QueryClientStatesResponse{
		ClientStates: clientStates,
		Pagination:   pageRes,
	}, nil
}

// ConsensusState implements the Query/ConsensusState gRPC method
func (q Keeper) ConsensusState(c context.Context, req *types.QueryConsensusStateRequest) (*types.QueryConsensusStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	if err := host.ClientIdentifierValidator(req.ClientId); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ctx := sdk.UnwrapSDKContext(c)

	var (
		consensusState exported.ConsensusState
		found          bool
	)

	height := types.NewHeight(req.RevisionNumber, req.RevisionHeight)
	if req.LatestHeight {
		consensusState, found = q.GetLatestClientConsensusState(ctx, req.ClientId)
	} else {
		if req.RevisionHeight == 0 {
			return nil, status.Error(codes.InvalidArgument, "consensus state height cannot be 0")
		}

		consensusState, found = q.GetClientConsensusState(ctx, req.ClientId, height)
	}

	if !found {
		return nil, status.Error(
			codes.NotFound,
			sdkerrors.Wrapf(types.ErrConsensusStateNotFound, "client-id: %s, height: %s", req.ClientId, height).Error(),
		)
	}

	any, err := types.PackConsensusState(consensusState)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	utils.MaybeDecodeWasmData(q.cdc, any)

	proofHeight := types.GetSelfHeight(ctx)
	return &types.QueryConsensusStateResponse{
		ConsensusState: any,
		ProofHeight:    proofHeight,
	}, nil
}

// ConsensusStates implements the Query/ConsensusStates gRPC method
func (q Keeper) ConsensusStates(c context.Context, req *types.QueryConsensusStatesRequest) (*types.QueryConsensusStatesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	if err := host.ClientIdentifierValidator(req.ClientId); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ctx := sdk.UnwrapSDKContext(c)

	consensusStates := []types.ConsensusStateWithHeight{}
	store := prefix.NewStore(ctx.KVStore(q.storeKey), host.FullClientKey(req.ClientId, []byte(fmt.Sprintf("%s/", host.KeyConsensusStatePrefix))))

	pageRes, err := query.FilteredPaginate(store, req.Pagination, func(key, value []byte, accumulate bool) (bool, error) {
		// filter any metadata stored under consensus state key
		if bytes.Contains(key, []byte("/")) {
			return false, nil
		}

		height, err := types.ParseHeight(string(key))
		if err != nil {
			return false, err
		}

		consensusState, err := q.UnmarshalConsensusState(value)
		if err != nil {
			return false, err
		}

		consensusStateWithHeight := types.NewConsensusStateWithHeight(height, consensusState)

		utils.MaybeDecodeWasmData(q.cdc, consensusStateWithHeight.ConsensusState)

		consensusStates = append(consensusStates, consensusStateWithHeight)
		return true, nil
	})
	if err != nil {
		return nil, err
	}

	return &types.QueryConsensusStatesResponse{
		ConsensusStates: consensusStates,
		Pagination:      pageRes,
	}, nil
}

// ConsensusStateHeights implements the Query/ConsensusStateHeights gRPC method
func (q Keeper) ConsensusStateHeights(c context.Context, req *types.QueryConsensusStateHeightsRequest) (*types.QueryConsensusStateHeightsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	if err := host.ClientIdentifierValidator(req.ClientId); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ctx := sdk.UnwrapSDKContext(c)

	var consensusStateHeights []types.Height
	store := prefix.NewStore(ctx.KVStore(q.storeKey), host.FullClientKey(req.ClientId, []byte(fmt.Sprintf("%s/", host.KeyConsensusStatePrefix))))

	pageRes, err := query.FilteredPaginate(store, req.Pagination, func(key, _ []byte, accumulate bool) (bool, error) {
		// filter any metadata stored under consensus state key
		if bytes.Contains(key, []byte("/")) {
			return false, nil
		}

		height, err := types.ParseHeight(string(key))
		if err != nil {
			return false, err
		}

		consensusStateHeights = append(consensusStateHeights, height)
		return true, nil
	})
	if err != nil {
		return nil, err
	}

	return &types.QueryConsensusStateHeightsResponse{
		ConsensusStateHeights: consensusStateHeights,
		Pagination:            pageRes,
	}, nil
}

// ClientStatus implements the Query/ClientStatus gRPC method
func (q Keeper) ClientStatus(c context.Context, req *types.QueryClientStatusRequest) (*types.QueryClientStatusResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	if err := host.ClientIdentifierValidator(req.ClientId); err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}

	ctx := sdk.UnwrapSDKContext(c)
	clientState, found := q.GetClientState(ctx, req.ClientId)
	if !found {
		return nil, status.Error(
			codes.NotFound,
			sdkerrors.Wrap(types.ErrClientNotFound, req.ClientId).Error(),
		)
	}

	status := q.GetClientStatus(ctx, clientState, req.ClientId)

	return &types.QueryClientStatusResponse{
		Status: status.String(),
	}, nil
}

// ClientParams implements the Query/ClientParams gRPC method
func (q Keeper) ClientParams(c context.Context, _ *types.QueryClientParamsRequest) (*types.QueryClientParamsResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	params := q.GetParams(ctx)

	return &types.QueryClientParamsResponse{
		Params: &params,
	}, nil
}

// UpgradedClientState implements the Query/UpgradedClientState gRPC method
func (q Keeper) UpgradedClientState(c context.Context, req *types.QueryUpgradedClientStateRequest) (*types.QueryUpgradedClientStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	ctx := sdk.UnwrapSDKContext(c)

	plan, found := q.GetUpgradePlan(ctx)
	if !found {
		return nil, status.Error(
			codes.NotFound, "upgrade plan not found",
		)
	}

	bz, found := q.GetUpgradedClient(ctx, plan.Height)
	if !found {
		return nil, status.Error(codes.NotFound, types.ErrClientNotFound.Error())
	}

	clientState, err := types.UnmarshalClientState(q.cdc, bz)
	if err != nil {
		return nil, status.Error(
			codes.Internal, err.Error(),
		)
	}

	any, err := types.PackClientState(clientState)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryUpgradedClientStateResponse{
		UpgradedClientState: any,
	}, nil
}

// UpgradedConsensusState implements the Query/UpgradedConsensusState gRPC method
func (q Keeper) UpgradedConsensusState(c context.Context, req *types.QueryUpgradedConsensusStateRequest) (*types.QueryUpgradedConsensusStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "empty request")
	}

	ctx := sdk.UnwrapSDKContext(c)

	bz, found := q.GetUpgradedConsensusState(ctx, ctx.BlockHeight())
	if !found {
		return nil, status.Errorf(codes.NotFound, "%s, height %d", types.ErrConsensusStateNotFound.Error(), ctx.BlockHeight())
	}

	consensusState, err := types.UnmarshalConsensusState(q.cdc, bz)
	if err != nil {
		return nil, status.Error(
			codes.Internal, err.Error(),
		)
	}

	any, err := types.PackConsensusState(consensusState)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryUpgradedConsensusStateResponse{
		UpgradedConsensusState: any,
	}, nil
}

func maybeDecodeWasmData(cdc codec.BinaryCodec, any *codectypes.Any) {
	switch any.TypeUrl {
	case "/ibc.lightclients.wasm.v1.ClientState":
		fmt.Println("decoding")
		var state wasmtypes.ClientState
		err := cdc.Unmarshal(any.Value, &state)
		if err == nil {
			fmt.Println("??")
			var innerAny codectypes.Any
			err = cdc.Unmarshal(state.Data, &innerAny)
			if err == nil {
				fmt.Println("here??")
				state.XInner = &wasmtypes.ClientState_Inner{Inner: &innerAny}
				bts, err := state.Marshal()
				if err == nil {
					any.Value = bts
				}
			}
		}
	case "/ibc.lightclients.wasm.v1.ConsensusState":
		fmt.Println("never??")
		var state wasmtypes.ConsensusState
		err := cdc.Unmarshal(any.Value, &state)
		if err == nil {
			var innerAny codectypes.Any
			err = cdc.Unmarshal(state.Data, &innerAny)
			if err == nil {
				state.XInner = &wasmtypes.ConsensusState_Inner{Inner: &innerAny}
				bts, err := state.Marshal()
				if err == nil {
					any.Value = bts
				}
			}
		}
	}
}
