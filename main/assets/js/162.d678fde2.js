(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{725:function(e,c,t){"use strict";t.r(c);var o=t(1),s=Object(o.a)({},(function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"migrating-from-v4-to-v5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-v4-to-v5"}},[e._v("#")]),e._v(" Migrating from v4 to v5")]),e._v(" "),t("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),t("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#chains"}},[e._v("Chains")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#ibc-apps"}},[e._v("IBC Apps")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#relayers"}},[e._v("Relayers")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#ibc-light-clients"}},[e._v("IBC Light Clients")])])]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL3Y0IC0mZ3Q7IGdpdGh1Yi5jb20vY29zbW9zL2liYy1nby92NQo="}}),e._v(" "),t("h2",{attrs:{id:"chains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),t("h3",{attrs:{id:"ante-decorator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ante-decorator"}},[e._v("#")]),e._v(" Ante decorator")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("AnteDecorator")]),e._v(" type in "),t("code",[e._v("core/ante")]),e._v(" has been renamed to "),t("code",[e._v("RedundantRelayDecorator")]),e._v(" (and the corresponding constructor function to "),t("code",[e._v("NewRedundantRelayDecorator")]),e._v("). Therefore in the function that creates the instance of the "),t("code",[e._v("sdk.AnteHandler")]),e._v(" type (e.g. "),t("code",[e._v("NewAnteHandler")]),e._v(") the change would be like this:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdBbnRlSGFuZGxlcihvcHRpb25zIEhhbmRsZXJPcHRpb25zKSAoc2RrLkFudGVIYW5kbGVyLCBlcnJvcikgewogIC8vIHBhcmFtZXRlciB2YWxpZGF0aW9uCgogIGFudGVEZWNvcmF0b3JzIDo9IFtdc2RrLkFudGVEZWNvcmF0b3J7CiAgICAvLyBvdGhlciBhbnRlIGRlY29yYXRvcnMKLSAgIGliY2FudGUuTmV3QW50ZURlY29yYXRvcihvcHRzLklCQ2tlZXBlciksCisgICBpYmNhbnRlLk5ld1JlZHVuZGFudFJlbGF5RGVjb3JhdG9yKG9wdGlvbnMuSUJDS2VlcGVyKSwKICB9CgogIHJldHVybiBzZGsuQ2hhaW5BbnRlRGVjb3JhdG9ycyhhbnRlRGVjb3JhdG9ycy4uLiksIG5pbAp9Cg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("AnteDecorator")]),e._v(" was actually renamed twice, but in "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1820",target:"_blank",rel:"noopener noreferrer"}},[e._v("this PR"),t("OutboundLink")],1),e._v(" you can see the changes made for the final rename.")]),e._v(" "),t("h2",{attrs:{id:"ibc-apps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),t("h3",{attrs:{id:"core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[e._v("#")]),e._v(" Core")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("key")]),e._v(" parameter of the "),t("code",[e._v("NewKeeper")]),e._v(" function in "),t("code",[e._v("modules/core/keeper")]),e._v(" is now of type "),t("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),t("code",[e._v("storetypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZSwKICAgc3Rha2luZ0tlZXBlciBjbGllbnR0eXBlcy5TdGFraW5nS2VlcGVyLCAKICAgdXBncmFkZUtlZXBlciBjbGllbnR0eXBlcy5VcGdyYWRlS2VlcGVyLAogICBzY29wZWRLZWVwZXIgY2FwYWJpbGl0eWtlZXBlci5TY29wZWRLZWVwZXIsCikgKktlZXBlcgo="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),t("code",[e._v("modules/core")]),e._v(" has been removed.")]),e._v(" "),t("h3",{attrs:{id:"ics03-connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics03-connection"}},[e._v("#")]),e._v(" ICS03 - Connection")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("key")]),e._v(" parameter of the "),t("code",[e._v("NewKeeper")]),e._v(" function in "),t("code",[e._v("modules/core/03-connection/keeper")]),e._v(" is now of type "),t("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),t("code",[e._v("storetypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZSwgCiAgIGNrIHR5cGVzLkNsaWVudEtlZXBlcgopIEtlZXBlcgo="}}),e._v(" "),t("h3",{attrs:{id:"ics04-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics04-channel"}},[e._v("#")]),e._v(" ICS04 - Channel")]),e._v(" "),t("p",[e._v("The function "),t("code",[e._v("NewPacketId")]),e._v(" in "),t("code",[e._v("modules/core/04-channel/types")]),e._v(" has been renamed to "),t("code",[e._v("NewPacketID")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"LSAgZnVuYyBOZXdQYWNrZXRJZCgKKyAgZnVuYyBOZXdQYWNrZXRJRCgKICBwb3J0SUQsIAogIGNoYW5uZWxJRCBzdHJpbmcsIAogIHNlcSB1aW50NjQKKSBQYWNrZXRJZCAK"}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("key")]),e._v(" parameter of the "),t("code",[e._v("NewKeeper")]),e._v(" function in "),t("code",[e._v("modules/core/04-channel/keeper")]),e._v(" is now of type "),t("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),t("code",[e._v("storetypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIGNsaWVudEtlZXBlciB0eXBlcy5DbGllbnRLZWVwZXIsCiAgIGNvbm5lY3Rpb25LZWVwZXIgdHlwZXMuQ29ubmVjdGlvbktlZXBlciwKICAgcG9ydEtlZXBlciB0eXBlcy5Qb3J0S2VlcGVyLCAKICAgc2NvcGVkS2VlcGVyIGNhcGFiaWxpdHlrZWVwZXIuU2NvcGVkS2VlcGVyLAopIEtlZXBlciAK"}}),e._v(" "),t("h3",{attrs:{id:"ics20-transfer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics20-transfer"}},[e._v("#")]),e._v(" ICS20 - Transfer")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("key")]),e._v(" parameter of the "),t("code",[e._v("NewKeeper")]),e._v(" function in "),t("code",[e._v("modules/apps/transfer/keeper")]),e._v(" is now of type "),t("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),t("code",[e._v("storetypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksIAogICBwYXJhbVNwYWNlIHBhcmFtdHlwZXMuU3Vic3BhY2UsCiAgIGljczRXcmFwcGVyIHR5cGVzLklDUzRXcmFwcGVyLCAKICAgY2hhbm5lbEtlZXBlciB0eXBlcy5DaGFubmVsS2VlcGVyLAogICBwb3J0S2VlcGVyIHR5cGVzLlBvcnRLZWVwZXIsCiAgIGF1dGhLZWVwZXIgdHlwZXMuQWNjb3VudEtlZXBlciwKICAgYmFua0tlZXBlciB0eXBlcy5CYW5rS2VlcGVyLAogICBzY29wZWRLZWVwZXIgY2FwYWJpbGl0eWtlZXBlci5TY29wZWRLZWVwZXIsCikgS2VlcGVyCg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("amount")]),e._v(" parameter of function "),t("code",[e._v("GetTransferCoin")]),e._v(" in "),t("code",[e._v("modules/apps/transfer/types")]),e._v(" is now of type "),t("code",[e._v("math.Int")]),e._v(" ("),t("code",[e._v('"cosmossdk.io/math"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBHZXRUcmFuc2ZlckNvaW4oCiAgIHBvcnRJRCwgY2hhbm5lbElELCBiYXNlRGVub20gc3RyaW5nLAotICBhbW91bnQgc2RrLkludAorICBhbW91bnQgbWF0aC5JbnQKKSBzZGsuQ29pbgo="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),t("code",[e._v("modules/apps/transfer")]),e._v(" has been removed.")]),e._v(" "),t("h3",{attrs:{id:"ics27-interchain-accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics27-interchain-accounts"}},[e._v("#")]),e._v(" ICS27 - Interchain Accounts")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("key")]),e._v(" and "),t("code",[e._v("msgRouter")]),e._v(" parameters of the "),t("code",[e._v("NewKeeper")]),e._v(" functions in")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("modules/apps/27-interchain-accounts/controller/keeper")])]),e._v(" "),t("li",[e._v("and "),t("code",[e._v("modules/apps/27-interchain-accounts/host/keeper")])])]),e._v(" "),t("p",[e._v("have changed type. The "),t("code",[e._v("key")]),e._v(" parameter is now of type "),t("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),t("code",[e._v("storetypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("), and the "),t("code",[e._v("msgRouter")]),e._v(" parameter is now of type "),t("code",[e._v("*icatypes.MessageRouter")]),e._v(" (where "),t("code",[e._v("icatypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/ibc-go/v5/modules/apps/27-interchain-accounts/types"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gTmV3S2VlcGVyIGNyZWF0ZXMgYSBuZXcgaW50ZXJjaGFpbiBhY2NvdW50cyBjb250cm9sbGVyIEtlZXBlciBpbnN0YW5jZQpmdW5jIE5ld0tlZXBlcigKICAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLAotICBrZXkgc2RrLlN0b3JlS2V5LAorICBrZXkgc3RvcmV0eXBlcy5TdG9yZUtleSwKICAgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAogICBpY3M0V3JhcHBlciBpY2F0eXBlcy5JQ1M0V3JhcHBlciwKICAgY2hhbm5lbEtlZXBlciBpY2F0eXBlcy5DaGFubmVsS2VlcGVyLAogICBwb3J0S2VlcGVyIGljYXR5cGVzLlBvcnRLZWVwZXIsCiAgIHNjb3BlZEtlZXBlciBjYXBhYmlsaXR5a2VlcGVyLlNjb3BlZEtlZXBlciwKLSAgbXNnUm91dGVyICpiYXNlYXBwLk1zZ1NlcnZpY2VSb3V0ZXIsCisgIG1zZ1JvdXRlciAqaWNhdHlwZXMuTWVzc2FnZVJvdXRlciwKKSBLZWVwZXIgIAo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gTmV3S2VlcGVyIGNyZWF0ZXMgYSBuZXcgaW50ZXJjaGFpbiBhY2NvdW50cyBob3N0IEtlZXBlciBpbnN0YW5jZQpmdW5jIE5ld0tlZXBlcigKICAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLAotICBrZXkgc2RrLlN0b3JlS2V5LAorICBrZXkgc3RvcmV0eXBlcy5TdG9yZUtleSwKICAgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAogICBjaGFubmVsS2VlcGVyIGljYXR5cGVzLkNoYW5uZWxLZWVwZXIsCiAgIHBvcnRLZWVwZXIgaWNhdHlwZXMuUG9ydEtlZXBlciwKICAgYWNjb3VudEtlZXBlciBpY2F0eXBlcy5BY2NvdW50S2VlcGVyLAogICBzY29wZWRLZWVwZXIgY2FwYWJpbGl0eWtlZXBlci5TY29wZWRLZWVwZXIsCi0gIG1zZ1JvdXRlciAqYmFzZWFwcC5Nc2dTZXJ2aWNlUm91dGVyLAorICBtc2dSb3V0ZXIgKmljYXR5cGVzLk1lc3NhZ2VSb3V0ZXIsCikgS2VlcGVyIAo="}}),e._v(" "),t("p",[e._v("The new "),t("code",[e._v("MessageRouter")]),e._v(" interface is defined as:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNZXNzYWdlUm91dGVyIGludGVyZmFjZSB7CiAgSGFuZGxlcihtc2cgc2RrLk1zZykgYmFzZWFwcC5Nc2dTZXJ2aWNlSGFuZGxlcgp9Cg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),t("code",[e._v("modules/apps/27-interchain-accounts")]),e._v(" has been removed.")]),e._v(" "),t("p",[e._v("An additional parameter, "),t("code",[e._v("ics4Wrapper")]),e._v(" has been added to the "),t("code",[e._v("host")]),e._v(" submodule "),t("code",[e._v("NewKeeper")]),e._v(" function in "),t("code",[e._v("modules/apps/27-interchain-accounts/host/keeper")]),e._v(".\nThis allows the "),t("code",[e._v("host")]),e._v(" submodule to correctly unwrap the channel version for channel reopening handshakes in the "),t("code",[e._v("OnChanOpenTry")]),e._v(" callback.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywgCiAgIGtleSBzdG9yZXR5cGVzLlN0b3JlS2V5LCAKICAgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAorICBpY3M0V3JhcHBlciBpY2F0eXBlcy5JQ1M0V3JhcHBlciwKICAgY2hhbm5lbEtlZXBlciBpY2F0eXBlcy5DaGFubmVsS2VlcGVyLCAKICAgcG9ydEtlZXBlciBpY2F0eXBlcy5Qb3J0S2VlcGVyLAogICBhY2NvdW50S2VlcGVyIGljYXR5cGVzLkFjY291bnRLZWVwZXIsIAogICBzY29wZWRLZWVwZXIgaWNhdHlwZXMuU2NvcGVkS2VlcGVyLCAKICAgbXNnUm91dGVyIGljYXR5cGVzLk1lc3NhZ2VSb3V0ZXIsCikgS2VlcGVyCg=="}}),e._v(" "),t("h4",{attrs:{id:"cosmos-sdk-message-handler-responses-in-packet-acknowledgement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk-message-handler-responses-in-packet-acknowledgement"}},[e._v("#")]),e._v(" Cosmos SDK message handler responses in packet acknowledgement")]),e._v(" "),t("p",[e._v("The construction of the transaction response of a message execution on the host chain has changed. The "),t("code",[e._v("Data")]),e._v(" field in the "),t("code",[e._v("sdk.TxMsgData")]),e._v(" has been deprecated and since Cosmos SDK 0.46 the "),t("code",[e._v("MsgResponses")]),e._v(" field contains the message handler responses packed into "),t("code",[e._v("Any")]),e._v("s.")]),e._v(" "),t("p",[e._v("For chains on Cosmos SDK 0.45 and below, the message response was constructed like this:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHhNc2dEYXRhIDo9ICZhbXA7c2RrLlR4TXNnRGF0YXsKICBEYXRhOiBtYWtlKFtdKnNkay5Nc2dEYXRhLCBsZW4obXNncykpLAp9Cgpmb3IgaSwgbXNnIDo9IHJhbmdlIG1zZ3MgewogIC8vIG1lc3NhZ2UgdmFsaWRhdGlvbgoKICBtc2dSZXNwb25zZSwgZXJyIDo9IGsuZXhlY3V0ZU1zZyhjYWNoZUN0eCwgbXNnKQogIC8vIHJldHVybiBpZiBlcnIgIT0gbmlsCgogIHR4TXNnRGF0YS5EYXRhW2ldID0gJmFtcDtzZGsuTXNnRGF0YXsKICAgIE1zZ1R5cGU6IHNkay5Nc2dUeXBlVVJMKG1zZyksCiAgICBEYXRhOiAgICBtc2dSZXNwb25zZSwKICB9Cn0KCi8vIGVtaXQgZXZlbnRzCgp0eFJlc3BvbnNlLCBlcnIgOj0gcHJvdG8uTWFyc2hhbCh0eE1zZ0RhdGEpCi8vIHJldHVybiBpZiBlcnIgIT0gbmlsCgpyZXR1cm4gdHhSZXNwb25zZSwgbmlsCg=="}}),e._v(" "),t("p",[e._v("And for chains on Cosmos SDK 0.46 and above, it is now done like this:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHhNc2dEYXRhIDo9ICZhbXA7c2RrLlR4TXNnRGF0YXsKICBNc2dSZXNwb25zZXM6IG1ha2UoW10qY29kZWN0eXBlcy5BbnksIGxlbihtc2dzKSksCn0KCmZvciBpLCBtc2cgOj0gcmFuZ2UgbXNncyB7CiAgLy8gbWVzc2FnZSB2YWxpZGF0aW9uCgogIHByb3RvQW55LCBlcnIgOj0gay5leGVjdXRlTXNnKGNhY2hlQ3R4LCBtc2cpCiAgLy8gcmV0dXJuIGlmIGVyciAhPSBuaWwKCiAgdHhNc2dEYXRhLk1zZ1Jlc3BvbnNlc1tpXSA9IHByb3RvQW55Cn0KCi8vIGVtaXQgZXZlbnRzCgp0eFJlc3BvbnNlLCBlcnIgOj0gcHJvdG8uTWFyc2hhbCh0eE1zZ0RhdGEpCi8vIHJldHVybiBpZiBlcnIgIT0gbmlsCgpyZXR1cm4gdHhSZXNwb25zZSwgbmlsCg=="}}),e._v(" "),t("p",[e._v("When handling the acknowledgement in the "),t("code",[e._v("OnAcknowledgementPacket")]),e._v(" callback of a custom ICA controller module, then depending on whether "),t("code",[e._v("txMsgData.Data")]),e._v(" is empty or not, the logic to handle the message handler response will be different. "),t("strong",[e._v("Only controller chains on Cosmos SDK 0.46 or above will be able to write the logic needed to handle the response from a host chain on Cosmos SDK 0.46 or above.")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIGFjayBjaGFubmVsdHlwZXMuQWNrbm93bGVkZ2VtZW50CmlmIGVyciA6PSBjaGFubmVsdHlwZXMuU3ViTW9kdWxlQ2RjLlVubWFyc2hhbEpTT04oYWNrbm93bGVkZ2VtZW50LCAmYW1wO2Fjayk7IGVyciAhPSBuaWwgewogIHJldHVybiBlcnIKfQoKdmFyIHR4TXNnRGF0YSBzZGsuVHhNc2dEYXRhCmlmIGVyciA6PSBwcm90by5Vbm1hcnNoYWwoYWNrLkdldFJlc3VsdCgpLCB0eE1zZ0RhdGEpOyBlcnIgIT0gbmlsIHsKICByZXR1cm4gZXJyCn0KCnN3aXRjaCBsZW4odHhNc2dEYXRhLkRhdGEpIHsKY2FzZSAwOiAvLyBmb3IgU0RLIDAuNDYgYW5kIGFib3ZlCiAgZm9yIF8sIG1zZ1Jlc3BvbnNlIDo9IHJhbmdlIHR4TXNnRGF0YS5Nc2dSZXNwb25zZXMgewogICAgLy8gdW5tYXJzaGFsbCBtc2dSZXNwb25zZSBhbmQgZXhlY3V0ZSBsb2dpYyBiYXNlZCBvbiB0aGUgcmVzcG9uc2UgCiAgfQogIHJldHVybiBuaWwKZGVmYXVsdDogLy8gZm9yIFNESyAwLjQ1IGFuZCBiZWxvdwogIGZvciBfLCBtc2dEYXRhIDo9IHJhbmdlIHR4TXNnRGF0YS5EYXRhIHsKICAgIC8vIHVubWFyc2hhbGwgbXNnRGF0YSBhbmQgZXhlY3V0ZSBsb2dpYyBiYXNlZCBvbiB0aGUgcmVzcG9uc2UgCiAgfQp9Cg=="}}),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/architecture/adr-003-ics27-acknowledgement.md/#next-major-version-format"}},[e._v("ADR-03")]),e._v(" for more information or the "),t("RouterLink",{attrs:{to:"/apps/interchain-accounts/auth-modules.html#onacknowledgementpacket"}},[e._v("corrresponding documentation about authentication modules")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"ics29-fee-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics29-fee-middleware"}},[e._v("#")]),e._v(" ICS29 - Fee Middleware")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("key")]),e._v(" parameter of the "),t("code",[e._v("NewKeeper")]),e._v(" function in "),t("code",[e._v("modules/apps/29-fee")]),e._v(" is now of type "),t("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),t("code",[e._v("storetypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKLSAga2V5IHNkay5TdG9yZUtleSwKKyAga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZSwKICAgaWNzNFdyYXBwZXIgdHlwZXMuSUNTNFdyYXBwZXIsCiAgIGNoYW5uZWxLZWVwZXIgdHlwZXMuQ2hhbm5lbEtlZXBlciwKICAgcG9ydEtlZXBlciB0eXBlcy5Qb3J0S2VlcGVyLAogICBhdXRoS2VlcGVyIHR5cGVzLkFjY291bnRLZWVwZXIsCiAgIGJhbmtLZWVwZXIgdHlwZXMuQmFua0tlZXBlciwKKSBLZWVwZXIgCg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),t("code",[e._v("modules/apps/29-fee")]),e._v(" has been removed.")]),e._v(" "),t("h3",{attrs:{id:"ibc-testing-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-testing-package"}},[e._v("#")]),e._v(" IBC testing package")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("MockIBCApp")]),e._v(" type has been renamed to "),t("code",[e._v("IBCApp")]),e._v(" (and the corresponding constructor function to "),t("code",[e._v("NewIBCApp")]),e._v("). This has resulted therefore in:")]),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("IBCApp")]),e._v(" field of the "),t("code",[e._v("*IBCModule")]),e._v(" in "),t("code",[e._v("testing/mock")]),e._v(" to change its type as well to "),t("code",[e._v("*IBCApp")]),e._v(":")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"dHlwZSBJQkNNb2R1bGUgc3RydWN0IHsKICAgYXBwTW9kdWxlICpBcHBNb2R1bGUKLSAgSUJDQXBwICAgICpNb2NrSUJDQXBwIC8vIGJhc2UgYXBwbGljYXRpb24gb2YgYW4gSUJDIG1pZGRsZXdhcmUgc3RhY2sKKyAgSUJDQXBwICAgICpJQkNBcHAgLy8gYmFzZSBhcHBsaWNhdGlvbiBvZiBhbiBJQkMgbWlkZGxld2FyZSBzdGFjawp9Cg=="}}),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("app")]),e._v(" parameter to "),t("code",[e._v("*NewIBCModule")]),e._v(" in "),t("code",[e._v("testing/mock")]),e._v(" to change its type as well to "),t("code",[e._v("*IBCApp")]),e._v(":")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdJQkNNb2R1bGUoCiAgIGFwcE1vZHVsZSAqQXBwTW9kdWxlLAotICBhcHAgKk1vY2tJQkNBcHAKKyAgYXBwICpJQkNBcHAKKSBJQkNNb2R1bGUK"}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("MockEmptyAcknowledgement")]),e._v(" type has been renamed to "),t("code",[e._v("EmptyAcknowledgement")]),e._v(" (and the corresponding constructor function to "),t("code",[e._v("NewEmptyAcknowledgement")]),e._v(").")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("TestingApp")]),e._v(" interface in "),t("code",[e._v("testing")]),e._v(" has gone through some modifications:")]),e._v(" "),t("ul",[t("li",[e._v("The return type of the function "),t("code",[e._v("GetStakingKeeper")]),e._v(" is not the concrete type "),t("code",[e._v("stakingkeeper.Keeper")]),e._v(" anymore (where "),t("code",[e._v("stakingkeeper")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/x/staking/keeper"')]),e._v("), but it has been changed to the interface "),t("code",[e._v("ibctestingtypes.StakingKeeper")]),e._v(" (where "),t("code",[e._v("ibctestingtypes")]),e._v(" is an import alias for "),t("code",[e._v('""github.com/cosmos/ibc-go/v5/testing/types"')]),e._v("). See this "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/2028",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR"),t("OutboundLink")],1),e._v(" for more details. The "),t("code",[e._v("StakingKeeper")]),e._v(" interface is defined as:")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdGFraW5nS2VlcGVyIGludGVyZmFjZSB7CiAgR2V0SGlzdG9yaWNhbEluZm8oY3R4IHNkay5Db250ZXh0LCBoZWlnaHQgaW50NjQpIChzdGFraW5ndHlwZXMuSGlzdG9yaWNhbEluZm8sIGJvb2wpCn0K"}}),e._v(" "),t("ul",[t("li",[e._v("The return type of the function "),t("code",[e._v("LastCommitID")]),e._v(" has changed to "),t("code",[e._v("storetypes.CommitID")]),e._v(" (where "),t("code",[e._v("storetypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v(").")])]),e._v(" "),t("p",[e._v("See the following "),t("code",[e._v("git diff")]),e._v(" for more details:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"dHlwZSBUZXN0aW5nQXBwIGludGVyZmFjZSB7CiAgIGFiY2kuQXBwbGljYXRpb24KICAgCiAgIC8vIGliYy1nbyBhZGRpdGlvbnMKICAgR2V0QmFzZUFwcCgpICpiYXNlYXBwLkJhc2VBcHAKLSAgR2V0U3Rha2luZ0tlZXBlcigpIHN0YWtpbmdrZWVwZXIuS2VlcGVyCisgIEdldFN0YWtpbmdLZWVwZXIoKSBpYmN0ZXN0aW5ndHlwZXMuU3Rha2luZ0tlZXBlcgogICBHZXRJQkNLZWVwZXIoKSAqa2VlcGVyLktlZXBlcgogICBHZXRTY29wZWRJQkNLZWVwZXIoKSBjYXBhYmlsaXR5a2VlcGVyLlNjb3BlZEtlZXBlcgogICBHZXRUeENvbmZpZygpIGNsaWVudC5UeENvbmZpZwoKICAgLy8gSW1wbGVtZW50ZWQgYnkgU2ltQXBwCiAgIEFwcENvZGVjKCkgY29kZWMuQ29kZWMKICAKICAgLy8gSW1wbGVtZW50ZWQgYnkgQmFzZUFwcAotICBMYXN0Q29tbWl0SUQoKSBzZGsuQ29tbWl0SUQKKyAgTGFzdENvbW1pdElEKCkgc3RvcmV0eXBlcy5Db21taXRJRAogICBMYXN0QmxvY2tIZWlnaHQoKSBpbnQ2NAp9Cg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("powerReduction")]),e._v(" parameter of the function "),t("code",[e._v("SetupWithGenesisValSet")]),e._v(" in "),t("code",[e._v("testing")]),e._v(" is now of type "),t("code",[e._v("math.Int")]),e._v(" ("),t("code",[e._v('"cosmossdk.io/math"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBTZXR1cFdpdGhHZW5lc2lzVmFsU2V0KAogICB0ICp0ZXN0aW5nLlQsCiAgIHZhbFNldCAqdG10eXBlcy5WYWxpZGF0b3JTZXQsCiAgIGdlbkFjY3MgW11hdXRodHlwZXMuR2VuZXNpc0FjY291bnQsCiAgIGNoYWluSUQgc3RyaW5nLAotICBwb3dlclJlZHVjdGlvbiBzZGsuSW50LAorICBwb3dlclJlZHVjdGlvbiBtYXRoLkludCwKICAgYmFsYW5jZXMgLi4uYmFua3R5cGVzLkJhbGFuY2UKKSBUZXN0aW5nQXBwCg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("accAmt")]),e._v(" parameter of the functions")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("AddTestAddrsFromPubKeys")]),e._v(" ,")]),e._v(" "),t("li",[t("code",[e._v("AddTestAddrs")])]),e._v(" "),t("li",[e._v("and "),t("code",[e._v("AddTestAddrsIncremental")])])]),e._v(" "),t("p",[e._v("in "),t("code",[e._v("testing/simapp")]),e._v(" are now of type "),t("code",[e._v("math.Int")]),e._v(" ("),t("code",[e._v('"cosmossdk.io/math"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBBZGRUZXN0QWRkcnNGcm9tUHViS2V5cygKICAgYXBwICpTaW1BcHAsCiAgIGN0eCBzZGsuQ29udGV4dCwKICAgcHViS2V5cyBbXWNyeXB0b3R5cGVzLlB1YktleSwKLSAgYWNjQW10IHNkay5JbnQsCisgIGFjY0FtdCBtYXRoLkludAopIApmdW5jIGFkZFRlc3RBZGRycygKICAgYXBwICpTaW1BcHAsCiAgIGN0eCBzZGsuQ29udGV4dCwKICAgYWNjTnVtIGludCwKLSAgYWNjQW10IHNkay5JbnQsCisgIGFjY0FtdCBtYXRoLkludCwKICAgc3RyYXRlZ3kgR2VuZXJhdGVBY2NvdW50U3RyYXRlZ3kKKSBbXXNkay5BY2NBZGRyZXNzCmZ1bmMgQWRkVGVzdEFkZHJzSW5jcmVtZW50YWwoCiAgIGFwcCAqU2ltQXBwLAogICBjdHggc2RrLkNvbnRleHQsCiAgIGFjY051bSBpbnQsCi0gIGFjY0FtdCBzZGsuSW50LAorICBhY2NBbXQgbWF0aC5JbnQKKSBbXXNkay5BY2NBZGRyZXNzCg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("RegisterRESTRoutes")]),e._v(" function in "),t("code",[e._v("testing/mock")]),e._v(" has been removed.")]),e._v(" "),t("h2",{attrs:{id:"relayers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),t("ul",[t("li",[e._v("No relevant changes were made in this release.")])]),e._v(" "),t("h2",{attrs:{id:"ibc-light-clients"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-light-clients"}},[e._v("#")]),e._v(" IBC Light Clients")]),e._v(" "),t("h3",{attrs:{id:"ics02-client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics02-client"}},[e._v("#")]),e._v(" ICS02 - Client")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("key")]),e._v(" parameter of the "),t("code",[e._v("NewKeeper")]),e._v(" function in "),t("code",[e._v("modules/core/02-client/keeper")]),e._v(" is now of type "),t("code",[e._v("storetypes.StoreKey")]),e._v(" (where "),t("code",[e._v("storetypes")]),e._v(" is an import alias for "),t("code",[e._v('"github.com/cosmos/cosmos-sdk/store/types"')]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLAotIGtleSBzZGsuU3RvcmVLZXksCisga2V5IHN0b3JldHlwZXMuU3RvcmVLZXksCiAgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAogIHNrIHR5cGVzLlN0YWtpbmdLZWVwZXIsCiAgdWsgdHlwZXMuVXBncmFkZUtlZXBlcgopIEtlZXBlcgo="}})],1)}),[],!1,null,null,null);c.default=s.exports}}]);