package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	capabilitytypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	"github.com/cosmos/cosmos-sdk/x/nft"

	"github.com/cosmos/cosmos-sdk/x/auth/types"
	channeltypes "github.com/cosmos/ibc-go/v4/modules/core/04-channel/types"
	ibcexported "github.com/cosmos/ibc-go/v4/modules/core/exported"
)

// NFTKeeper defines the expected nft keeper
type NFTKeeper interface {
	SaveClass(ctx sdk.Context, class nft.Class) error
	Mint(ctx sdk.Context, token nft.NFT, receiver sdk.AccAddress) error
	Transfer(ctx sdk.Context, classID string, nftID string, receiver sdk.AccAddress) error
	Burn(ctx sdk.Context, classID string, nftID string) error

	GetOwner(ctx sdk.Context, classID string, nftID string) sdk.AccAddress
	HasClass(ctx sdk.Context, classID string) bool
	GetClass(ctx sdk.Context, classID string) (nft.Class, bool)
	GetNFT(ctx sdk.Context, classID, nftID string) (nft.NFT, bool)
}

// ICS4Wrapper defines the expected ICS4Wrapper for middleware
type ICS4Wrapper interface {
	SendPacket(ctx sdk.Context, channelCap *capabilitytypes.Capability, packet ibcexported.PacketI) error
}

// ChannelKeeper defines the expected IBC channel keeper
type ChannelKeeper interface {
	GetChannel(ctx sdk.Context, srcPort, srcChan string) (channel channeltypes.Channel, found bool)
	GetNextSequenceSend(ctx sdk.Context, portID, channelID string) (uint64, bool)
}

// PortKeeper defines the expected IBC port keeper
type PortKeeper interface {
	BindPort(ctx sdk.Context, portID string) *capabilitytypes.Capability
}

// AccountKeeper defines the contract required for account APIs.
type AccountKeeper interface {
	NewAccountWithAddress(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Set an account in the store.
	SetAccount(sdk.Context, types.AccountI)
	HasAccount(ctx sdk.Context, addr sdk.AccAddress) bool
	GetModuleAddress(name string) sdk.AccAddress
}
