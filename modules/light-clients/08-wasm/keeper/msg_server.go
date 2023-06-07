package keeper

import (
	"context"
	"encoding/hex"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v7/modules/core/02-client/types"
	"github.com/cosmos/ibc-go/v7/modules/light-clients/08-wasm/types"
)

var _ types.MsgServer = Keeper{}

// PushNewWasmCode defines a rpc handler method for MsgPushNewWasmCode
func (k Keeper) PushNewWasmCode(goCtx context.Context, msg *types.MsgPushNewWasmCode) (*types.MsgPushNewWasmCodeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	codeID, err := k.storeWasmCode(ctx, msg.Code)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "pushing new wasm code failed")
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			clienttypes.EventTypePushWasmCode,
			sdk.NewAttribute(clienttypes.AttributeKeyWasmCodeID, hex.EncodeToString(codeID)),
		),
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, clienttypes.AttributeValueCategory),
		),
	})

	return &types.MsgPushNewWasmCodeResponse{
		CodeId: codeID,
	}, nil
}
