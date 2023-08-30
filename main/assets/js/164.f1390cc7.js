(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{729:function(e,t,a){"use strict";a.r(t);var o=a(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migrating-from-v7-to-v7-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-v7-to-v7-1"}},[e._v("#")]),e._v(" Migrating from v7 to v7.1")]),e._v(" "),a("p",[e._v("This guide provides instructions for migrating to version "),a("code",[e._v("v7.1.0")]),e._v(" of ibc-go.")]),e._v(" "),a("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#migrating-from-v7-to-v71"}},[e._v("Migrating from v7 to v7.1")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#chains"}},[e._v("Chains")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ibc-apps"}},[e._v("IBC Apps")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#relayers"}},[e._v("Relayers")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ibc-light-clients"}},[e._v("IBC Light Clients")])])])])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated on major version releases.")]),e._v(" "),a("h2",{attrs:{id:"chains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),a("h3",{attrs:{id:"_09-localhost-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_09-localhost-migration"}},[e._v("#")]),e._v(" 09-localhost migration")]),e._v(" "),a("p",[e._v("In the previous release of ibc-go, the localhost "),a("code",[e._v("v1")]),e._v(" light client module was deprecated and removed. The ibc-go "),a("code",[e._v("v7.1.0")]),e._v(" release introduces "),a("code",[e._v("v2")]),e._v(" of the 09-localhost light client module.")]),e._v(" "),a("p",[e._v("An "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/core/module.go#L127-L145",target:"_blank",rel:"noopener noreferrer"}},[e._v("automatic migration handler"),a("OutboundLink")],1),e._v(" is configured in the core IBC module to set the localhost "),a("code",[e._v("ClientState")]),e._v(" and sentinel "),a("code",[e._v("ConnectionEnd")]),e._v(" in state.")]),e._v(" "),a("p",[e._v("In order to use the 09-localhost client chains must update the "),a("code",[e._v("AllowedClients")]),e._v(" parameter in the 02-client submodule of core IBC. This can be configured directly in the application upgrade handler or alternatively updated via the legacy governance parameter change proposal.\nWe "),a("strong",[e._v("strongly")]),e._v(" recommend chains to perform this action so that intra-ledger communication can be carried out using the familiar IBC interfaces.")]),e._v(" "),a("p",[e._v("See the upgrade handler code sample provided below or "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/testing/simapp/upgrades/upgrades.go#L85",target:"_blank",rel:"noopener noreferrer"}},[e._v("follow this link"),a("OutboundLink")],1),e._v(" for the upgrade handler used by the ibc-go simapp.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBDcmVhdGVWN0xvY2FsaG9zdFVwZ3JhZGVIYW5kbGVyKAogIG1tICptb2R1bGUuTWFuYWdlciwKICBjb25maWd1cmF0b3IgbW9kdWxlLkNvbmZpZ3VyYXRvciwKICBjbGllbnRLZWVwZXIgY2xpZW50a2VlcGVyLktlZXBlciwKKSB1cGdyYWRldHlwZXMuVXBncmFkZUhhbmRsZXIgewogIHJldHVybiBmdW5jKGN0eCBzZGsuQ29udGV4dCwgXyB1cGdyYWRldHlwZXMuUGxhbiwgdm0gbW9kdWxlLlZlcnNpb25NYXApIChtb2R1bGUuVmVyc2lvbk1hcCwgZXJyb3IpIHsKICAgIC8vIGV4cGxpY2l0bHkgdXBkYXRlIHRoZSBJQkMgMDItY2xpZW50IHBhcmFtcywgYWRkaW5nIHRoZSBsb2NhbGhvc3QgY2xpZW50IHR5cGUKICAgIHBhcmFtcyA6PSBjbGllbnRLZWVwZXIuR2V0UGFyYW1zKGN0eCkKICAgIHBhcmFtcy5BbGxvd2VkQ2xpZW50cyA9IGFwcGVuZChwYXJhbXMuQWxsb3dlZENsaWVudHMsIGV4cG9ydGVkLkxvY2FsaG9zdCkKICAgIGNsaWVudEtlZXBlci5TZXRQYXJhbXMoY3R4LCBwYXJhbXMpCgogICAgcmV0dXJuIG1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCBjb25maWd1cmF0b3IsIHZtKQogIH0KfQo="}}),e._v(" "),a("h3",{attrs:{id:"transfer-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-migration"}},[e._v("#")]),e._v(" Transfer migration")]),e._v(" "),a("p",[e._v("An "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/apps/transfer/module.go#L111-L113",target:"_blank",rel:"noopener noreferrer"}},[e._v("automatic migration handler"),a("OutboundLink")],1),e._v(" is configured in the transfer module to set the total amount in escrow for all denominations of coins that have been sent out. For each denomination a state entry is added with the total amount of coins in escrow regardless of the channel from which they were transferred.")]),e._v(" "),a("h2",{attrs:{id:"ibc-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])]),e._v(" "),a("h2",{attrs:{id:"relayers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),a("p",[e._v("The event attribute "),a("code",[e._v("packet_connection")]),e._v(" ("),a("code",[e._v("connectiontypes.AttributeKeyConnection")]),e._v(") has been deprecated.\nPlease use the "),a("code",[e._v("connection_id")]),e._v(" attribute ("),a("code",[e._v("connectiontypes.AttributeKeyConnectionID")]),e._v(") which is emitted by all channel events.\nOnly send packet, receive packet, write acknowledgement, and acknowledge packet events used "),a("code",[e._v("packet_connection")]),e._v(" previously.")]),e._v(" "),a("h2",{attrs:{id:"ibc-light-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-light-clients"}},[e._v("#")]),e._v(" IBC Light Clients")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);