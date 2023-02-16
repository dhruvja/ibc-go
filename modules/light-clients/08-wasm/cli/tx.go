package cli

import (
	"os"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	wasm "github.com/cosmos/ibc-go/v7/modules/light-clients/08-wasm"
	"github.com/spf13/cobra"
)

// NewPushNewWasmCodeCmd returns the command to create a PushNewWasmCode transaction
func NewPushNewWasmCodeCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "push-wasm [wasm-file]",
		Short: "Reads wasm code from the file and creates push transaction",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			fileName := args[0]

			code, err := os.ReadFile(fileName)
			if err != nil {
				return err
			}

			msg := &wasm.MsgPushNewWasmCode{
				Code:   code,
				Signer: clientCtx.GetFromAddress().String(),
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
