(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{696:function(e,a,l){"use strict";l.r(a);var c=l(1),t=Object(c.a)({},(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"create-a-custom-ibc-middleware"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-ibc-middleware"}},[e._v("#")]),e._v(" Create a custom IBC middleware")]),e._v(" "),l("p",[e._v("IBC middleware will wrap over an underlying IBC application (a base application or downstream middleware) and sits between core IBC and the base application.")]),e._v(" "),l("p",[e._v("The interfaces a middleware must implement are found "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(".")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWlkZGxld2FyZSBpbXBsZW1lbnRzIHRoZSBJQ1MyNiBNb2R1bGUgaW50ZXJmYWNlCnR5cGUgTWlkZGxld2FyZSBpbnRlcmZhY2UgewogIElCQ01vZHVsZSAvLyBtaWRkbGV3YXJlIGhhcyBhY2NjZXNzIHRvIGFuIHVuZGVybHlpbmcgYXBwbGljYXRpb24gd2hpY2ggbWF5IGJlIHdyYXBwZWQgYnkgbW9yZSBtaWRkbGV3YXJlCiAgSUNTNFdyYXBwZXIgLy8gbWlkZGxld2FyZSBoYXMgYWNjZXNzIHRvIElDUzRXcmFwcGVyIHdoaWNoIG1heSBiZSBjb3JlIElCQyBDaGFubmVsIEhhbmRsZXIgb3IgYSBoaWdoZXItbGV2ZWwgbWlkZGxld2FyZSB0aGF0IHdyYXBzIHRoaXMgbWlkZGxld2FyZS4KfQo="}}),e._v(" "),l("p",[e._v("An "),l("code",[e._v("IBCMiddleware")]),e._v(" struct implementing the "),l("code",[e._v("Middleware")]),e._v(" interface, can be defined with its constructor as follows:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQCB4L21vZHVsZV9uYW1lL2liY19taWRkbGV3YXJlLmdvCgovLyBJQkNNaWRkbGV3YXJlIGltcGxlbWVudHMgdGhlIElDUzI2IGNhbGxiYWNrcyBhbmQgSUNTNFdyYXBwZXIgZm9yIHRoZSBmZWUgbWlkZGxld2FyZSBnaXZlbiB0aGUKLy8gZmVlIGtlZXBlciBhbmQgdGhlIHVuZGVybHlpbmcgYXBwbGljYXRpb24uCnR5cGUgSUJDTWlkZGxld2FyZSBzdHJ1Y3QgewogIGFwcCAgICBwb3J0dHlwZXMuSUJDTW9kdWxlCiAga2VlcGVyIGtlZXBlci5LZWVwZXIKfQoKLy8gTmV3SUJDTWlkZGxld2FyZSBjcmVhdGVzIGEgbmV3IElCQ01pZGRsd2FyZSBnaXZlbiB0aGUga2VlcGVyIGFuZCB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uCmZ1bmMgTmV3SUJDTWlkZGxld2FyZShhcHAgcG9ydHR5cGVzLklCQ01vZHVsZSwgayBrZWVwZXIuS2VlcGVyKSBJQkNNaWRkbGV3YXJlIHsKICByZXR1cm4gSUJDTWlkZGxld2FyZXsKICAgIGFwcDogICAgYXBwLAogICAga2VlcGVyOiBrLAogIH0KfQo="}}),e._v(" "),l("h2",{attrs:{id:"implement-ibcmodule-interface"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#implement-ibcmodule-interface"}},[e._v("#")]),e._v(" Implement "),l("code",[e._v("IBCModule")]),e._v(" interface")]),e._v(" "),l("p",[l("code",[e._v("IBCMiddleware")]),e._v(" is a struct that implements the "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go#L14-L107",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-26 "),l("code",[e._v("IBCModule")]),e._v(" interface ("),l("code",[e._v("porttypes.IBCModule")]),e._v(")"),l("OutboundLink")],1),e._v(". It is recommended to separate these callbacks into a separate file "),l("code",[e._v("ibc_middleware.go")]),e._v(".")]),e._v(" "),l("blockquote",[l("p",[e._v("Note how this is analogous to implementing the same interfaces for IBC applications that act as base applications.")])]),e._v(" "),l("p",[e._v("As will be mentioned in the "),l("RouterLink",{attrs:{to:"/ibc/middleware/integration.html"}},[e._v("integration section")]),e._v(", this struct should be different than the struct that implements "),l("code",[e._v("AppModule")]),e._v(" in case the middleware maintains its own internal state and processes separate SDK messages.")],1),e._v(" "),l("p",[e._v("The middleware must have access to the underlying application, and be called before it during all ICS-26 callbacks. It may execute custom logic during these callbacks, and then call the underlying application's callback.")]),e._v(" "),l("blockquote",[l("p",[e._v("Middleware "),l("strong",[e._v("may")]),e._v(" choose not to call the underlying application's callback at all. Though these should generally be limited to error cases.")])]),e._v(" "),l("p",[e._v("The "),l("code",[e._v("IBCModule")]),e._v(" interface consists of the channel handshake callbacks and packet callbacks. Most of the custom logic will be performed in the packet callbacks, in the case of the channel handshake callbacks, introducing the middleware requires consideration to the version negotiation and passing of capabilities.")]),e._v(" "),l("h3",{attrs:{id:"channel-handshake-callbacks"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#channel-handshake-callbacks"}},[e._v("#")]),e._v(" Channel handshake callbacks")]),e._v(" "),l("h4",{attrs:{id:"version-negotiation"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#version-negotiation"}},[e._v("#")]),e._v(" Version negotiation")]),e._v(" "),l("p",[e._v("In the case where the IBC middleware expects to speak to a compatible IBC middleware on the counterparty chain, they must use the channel handshake to negotiate the middleware version without interfering in the version negotiation of the underlying application.")]),e._v(" "),l("p",[e._v("Middleware accomplishes this by formatting the version in a JSON-encoded string containing the middleware version and the application version. The application version may as well be a JSON-encoded string, possibly including further middleware and app versions, if the application stack consists of multiple milddlewares wrapping a base application. The format of the version is specified in ICS-30 as the following:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90OyZsdDttaWRkbGV3YXJlX3ZlcnNpb25fa2V5Jmd0OyZxdW90OzogJnF1b3Q7Jmx0O21pZGRsZXdhcmVfdmVyc2lvbl92YWx1ZSZndDsmcXVvdDssCiAgJnF1b3Q7YXBwX3ZlcnNpb24mcXVvdDs6ICZxdW90OyZsdDthcHBsaWNhdGlvbl92ZXJzaW9uX3ZhbHVlJmd0OyZxdW90Owp9Cg=="}}),e._v(" "),l("p",[e._v("The "),l("code",[e._v("<middleware_version_key>")]),e._v(" key in the JSON struct should be replaced by the actual name of the key for the corresponding middleware (e.g. "),l("code",[e._v("fee_version")]),e._v(").")]),e._v(" "),l("p",[e._v("During the handshake callbacks, the middleware can unmarshal the version string and retrieve the middleware and application versions. It can do its negotiation logic on "),l("code",[e._v("<middleware_version_value>")]),e._v(", and pass the "),l("code",[e._v("<application_version_value>")]),e._v(" to the underlying application.")]),e._v(" "),l("blockquote",[l("p",[l("strong",[e._v("NOTE")]),e._v(": Middleware that does not need to negotiate with a counterparty middleware on the remote stack will not implement the version unmarshalling and negotiation, and will simply perform its own custom logic on the callbacks without relying on the counterparty behaving similarly.")])]),e._v(" "),l("h4",{attrs:{id:"onchanopeninit"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#onchanopeninit"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnChanOpenInit")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuT3BlbkluaXQoCiAgY3R4IHNkay5Db250ZXh0LAogIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICBjb25uZWN0aW9uSG9wcyBbXXN0cmluZywKICBwb3J0SUQgc3RyaW5nLAogIGNoYW5uZWxJRCBzdHJpbmcsCiAgY2hhbm5lbENhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgdmVyc2lvbiBzdHJpbmcsCikgKHN0cmluZywgZXJyb3IpIHsKICBpZiB2ZXJzaW9uICE9ICZxdW90OyZxdW90OyB7CiAgICAvLyB0cnkgdG8gdW5tYXJzaGFsIEpTT04tZW5jb2RlZCB2ZXJzaW9uIHN0cmluZyBhbmQgcGFzcwogICAgLy8gdGhlIGFwcC1zcGVjaWZpYyB2ZXJzaW9uIHRvIGFwcCBjYWxsYmFjay4KICAgIC8vIG90aGVyd2lzZSwgcGFzcyB2ZXJzaW9uIGRpcmVjdGx5IHRvIGFwcCBjYWxsYmFjay4KICAgIG1ldGFkYXRhLCBlcnIgOj0gVW5tYXJzaGFsKHZlcnNpb24pCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgLy8gU2luY2UgaXQgaXMgdmFsaWQgZm9yIGZlZSB2ZXJzaW9uIHRvIG5vdCBiZSBzcGVjaWZpZWQsCiAgICAgIC8vIHRoZSBhYm92ZSBtaWRkbGV3YXJlIHZlcnNpb24gbWF5IGJlIGZvciBhbm90aGVyIG1pZGRsZXdhcmUuCiAgICAgIC8vIFBhc3MgdGhlIGVudGlyZSB2ZXJzaW9uIHN0cmluZyBvbnRvIHRoZSB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uLgogICAgICByZXR1cm4gaW0uYXBwLk9uQ2hhbk9wZW5Jbml0KAogICAgICAgIGN0eCwKICAgICAgICBvcmRlciwKICAgICAgICBjb25uZWN0aW9uSG9wcywKICAgICAgICBwb3J0SUQsCiAgICAgICAgY2hhbm5lbElELAogICAgICAgIGNoYW5uZWxDYXAsCiAgICAgICAgY291bnRlcnBhcnR5LAogICAgICAgIHZlcnNpb24sCiAgICAgICkKICAgIH0KICAgIGVsc2UgewogICAgICBtZXRhZGF0YSA9IHsKICAgICAgICAvLyBzZXQgbWlkZGxld2FyZSB2ZXJzaW9uIHRvIGRlZmF1bHQgdmFsdWUKICAgICAgICBNaWRkbGV3YXJlVmVyc2lvbjogZGVmYXVsdE1pZGRsZXdhcmVWZXJzaW9uLAogICAgICAgIC8vIGFsbG93IGFwcGxpY2F0aW9uIHRvIHJldHVybiBpdHMgZGVmYXVsdCB2ZXJzaW9uCiAgICAgICAgQXBwVmVyc2lvbjogJnF1b3Q7JnF1b3Q7LAogICAgICB9CiAgICB9CiAgfQoKICBkb0N1c3RvbUxvZ2ljKCkKCiAgLy8gaWYgdGhlIHZlcnNpb24gc3RyaW5nIGlzIGVtcHR5LCBPbkNoYW5PcGVuSW5pdCBpcyBleHBlY3RlZCB0byByZXR1cm4KICAvLyBhIGRlZmF1bHQgdmVyc2lvbiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2ZXJzaW9uKHMpIGl0IHN1cHBvcnRzCiAgYXBwVmVyc2lvbiwgZXJyIDo9IGltLmFwcC5PbkNoYW5PcGVuSW5pdCgKICAgIGN0eCwKICAgIG9yZGVyLAogICAgY29ubmVjdGlvbkhvcHMsCiAgICAgICAgcG9ydElELAogICAgICAgIGNoYW5uZWxJRCwKICAgICAgICBjaGFubmVsQ2FwLAogICAgICAgIGNvdW50ZXJwYXJ0eSwKICAgICAgICBtZXRhZGF0YS5BcHBWZXJzaW9uLCAvLyBub3RlIHdlIG9ubHkgcGFzcyBhcHAgdmVyc2lvbiBoZXJlCiAgICApCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgIC8vIFNpbmNlIGl0IGlzIHZhbGlkIGZvciBmZWUgdmVyc2lvbiB0byBub3QgYmUgc3BlY2lmaWVkLAogICAgLy8gdGhlIGFib3ZlIG1pZGRsZXdhcmUgdmVyc2lvbiBtYXkgYmUgZm9yIGFub3RoZXIgbWlkZGxld2FyZS4KICAgIC8vIFBhc3MgdGhlIGVudGlyZSB2ZXJzaW9uIHN0cmluZyBvbnRvIHRoZSB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uLgogICAgcmV0dXJuIGltLmFwcC5PbkNoYW5PcGVuSW5pdCgKICAgICAgY3R4LAogICAgICBvcmRlciwKICAgICAgY29ubmVjdGlvbkhvcHMsCiAgICAgIHBvcnRJRCwKICAgICAgY2hhbm5lbElELAogICAgICBjaGFubmVsQ2FwLAogICAgICBjb3VudGVycGFydHksCiAgICAgIHZlcnNpb24sCiAgICApCiAgfQogIGVsc2UgewogICAgbWV0YWRhdGEgPSB7CiAgICAgIC8vIHNldCBtaWRkbGV3YXJlIHZlcnNpb24gdG8gZGVmYXVsdCB2YWx1ZQogICAgICBNaWRkbGV3YXJlVmVyc2lvbjogZGVmYXVsdE1pZGRsZXdhcmVWZXJzaW9uLAogICAgICAvLyBhbGxvdyBhcHBsaWNhdGlvbiB0byByZXR1cm4gaXRzIGRlZmF1bHQgdmVyc2lvbgogICAgICBBcHBWZXJzaW9uOiAmcXVvdDsmcXVvdDssCiAgICB9CiAgfQoKICBkb0N1c3RvbUxvZ2ljKCkKCiAgLy8gaWYgdGhlIHZlcnNpb24gc3RyaW5nIGlzIGVtcHR5LCBPbkNoYW5PcGVuSW5pdCBpcyBleHBlY3RlZCB0byByZXR1cm4KICAvLyBhIGRlZmF1bHQgdmVyc2lvbiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2ZXJzaW9uKHMpIGl0IHN1cHBvcnRzCiAgYXBwVmVyc2lvbiwgZXJyIDo9IGltLmFwcC5PbkNoYW5PcGVuSW5pdCgKICAgIGN0eCwKICAgIG9yZGVyLAogICAgY29ubmVjdGlvbkhvcHMsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQsCiAgICBjaGFubmVsQ2FwLAogICAgY291bnRlcnBhcnR5LAogICAgbWV0YWRhdGEuQXBwVmVyc2lvbiwgLy8gbm90ZSB3ZSBvbmx5IHBhc3MgYXBwIHZlcnNpb24gaGVyZQogICkKICBpZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGVycgogIH0KCiAgdmVyc2lvbiA6PSBjb25zdHJ1Y3RWZXJzaW9uKG1ldGFkYXRhLk1pZGRsZXdhcmVWZXJzaW9uLCBhcHBWZXJzaW9uKQoKICByZXR1cm4gdmVyc2lvbiwgbmlsCn0K"}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L36-L83",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h4",{attrs:{id:"onchanopentry"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#onchanopentry"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnChanOpenTry")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuT3BlblRyeSgKICBjdHggc2RrLkNvbnRleHQsCiAgb3JkZXIgY2hhbm5lbHR5cGVzLk9yZGVyLAogIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAogIGNoYW5uZWxDYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogIGNvdW50ZXJwYXJ0eSBjaGFubmVsdHlwZXMuQ291bnRlcnBhcnR5LAogIGNvdW50ZXJwYXJ0eVZlcnNpb24gc3RyaW5nLAopIChzdHJpbmcsIGVycm9yKSB7CiAgLy8gdHJ5IHRvIHVubWFyc2hhbCBKU09OLWVuY29kZWQgdmVyc2lvbiBzdHJpbmcgYW5kIHBhc3MKICAvLyB0aGUgYXBwLXNwZWNpZmljIHZlcnNpb24gdG8gYXBwIGNhbGxiYWNrLgogIC8vIG90aGVyd2lzZSwgcGFzcyB2ZXJzaW9uIGRpcmVjdGx5IHRvIGFwcCBjYWxsYmFjay4KICBjcE1ldGFkYXRhLCBlcnIgOj0gVW5tYXJzaGFsKGNvdW50ZXJwYXJ0eVZlcnNpb24pCiAgaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gYXBwLk9uQ2hhbk9wZW5UcnkoCiAgICAgIGN0eCwKICAgICAgb3JkZXIsCiAgICAgIGNvbm5lY3Rpb25Ib3BzLAogICAgICBwb3J0SUQsCiAgICAgIGNoYW5uZWxJRCwKICAgICAgY2hhbm5lbENhcCwKICAgICAgY291bnRlcnBhcnR5LAogICAgICBjb3VudGVycGFydHlWZXJzaW9uLAogICAgKQogIH0KCiAgZG9DdXN0b21Mb2dpYygpCgogIC8vIENhbGwgdGhlIHVuZGVybHlpbmcgYXBwbGljYXRpb24ncyBPbkNoYW5PcGVuVHJ5IGNhbGxiYWNrLgogIC8vIFRoZSB0cnkgY2FsbGJhY2sgbXVzdCBzZWxlY3QgdGhlIGZpbmFsIGFwcC1zcGVjaWZpYyB2ZXJzaW9uIHN0cmluZyBhbmQgcmV0dXJuIGl0LgogIGFwcFZlcnNpb24sIGVyciA6PSBhcHAuT25DaGFuT3BlblRyeSgKICAgIGN0eCwKICAgIG9yZGVyLAogICAgY29ubmVjdGlvbkhvcHMsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQsCiAgICBjaGFubmVsQ2FwLAogICAgY291bnRlcnBhcnR5LAogICAgY3BNZXRhZGF0YS5BcHBWZXJzaW9uLCAvLyBub3RlIHdlIG9ubHkgcGFzcyBjb3VudGVycGFydHkgYXBwIHZlcnNpb24gaGVyZQogICkKICBpZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGVycgogIH0KCiAgLy8gbmVnb3RpYXRlIGZpbmFsIG1pZGRsZXdhcmUgdmVyc2lvbgogIG1pZGRsZXdhcmVWZXJzaW9uIDo9IG5lZ290aWF0ZU1pZGRsZXdhcmVWZXJzaW9uKGNwTWV0YWRhdGEuTWlkZGxld2FyZVZlcnNpb24pCiAgdmVyc2lvbiA6PSBjb25zdHJ1Y3RWZXJzaW9uKG1pZGRsZXdhcmVWZXJzaW9uLCBhcHBWZXJzaW9uKQoKICByZXR1cm4gdmVyc2lvbiwgbmlsCn0K"}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L88-L125",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h4",{attrs:{id:"onchanopenack"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#onchanopenack"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnChanOpenAck")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuT3BlbkFjaygKICBjdHggc2RrLkNvbnRleHQsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCiAgY291bnRlcnBhcnR5Q2hhbm5lbElEIHN0cmluZywKICBjb3VudGVycGFydHlWZXJzaW9uIHN0cmluZywKKSBlcnJvciB7CiAgLy8gdHJ5IHRvIHVubWFyc2hhbCBKU09OLWVuY29kZWQgdmVyc2lvbiBzdHJpbmcgYW5kIHBhc3MKICAvLyB0aGUgYXBwLXNwZWNpZmljIHZlcnNpb24gdG8gYXBwIGNhbGxiYWNrLgogIC8vIG90aGVyd2lzZSwgcGFzcyB2ZXJzaW9uIGRpcmVjdGx5IHRvIGFwcCBjYWxsYmFjay4KICBjcE1ldGFkYXRhLCBlcnIgPSBVbm1hcnNoYWxKU09OKGNvdW50ZXJwYXJ0eVZlcnNpb24pCiAgaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gYXBwLk9uQ2hhbk9wZW5BY2soY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCwgY291bnRlcnBhcnR5Q2hhbm5lbElELCBjb3VudGVycGFydHlWZXJzaW9uKQogIH0KCiAgaWYgIWlzQ29tcGF0aWJsZShjcE1ldGFkYXRhLk1pZGRsZXdhcmVWZXJzaW9uKSB7CiAgICByZXR1cm4gZXJyb3IKICB9CiAgZG9DdXN0b21Mb2dpYygpCgogIC8vIGNhbGwgdGhlIHVuZGVybHlpbmcgYXBwbGljYXRpb24ncyBPbkNoYW5PcGVuVHJ5IGNhbGxiYWNrCiAgcmV0dXJuIGFwcC5PbkNoYW5PcGVuQWNrKGN0eCwgcG9ydElELCBjaGFubmVsSUQsIGNvdW50ZXJwYXJ0eUNoYW5uZWxJRCwgY3BNZXRhZGF0YS5BcHBWZXJzaW9uKQp9Cg=="}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L128-L153",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(") an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h4",{attrs:{id:"onchanopenconfirm"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#onchanopenconfirm"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnChanOpenConfirm")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5PcGVuQ29uZmlybSgKICBjdHggc2RrLkNvbnRleHQsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCikgZXJyb3IgewogIGRvQ3VzdG9tTG9naWMoKQoKICByZXR1cm4gYXBwLk9uQ2hhbk9wZW5Db25maXJtKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCn0K"}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L156-L163",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h4",{attrs:{id:"onchancloseinit"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#onchancloseinit"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnChanCloseInit")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5DbG9zZUluaXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICBkb0N1c3RvbUxvZ2ljKCkKCiAgcmV0dXJuIGFwcC5PbkNoYW5DbG9zZUluaXQoY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKfQo="}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L166-L188",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h4",{attrs:{id:"onchancloseconfirm"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#onchancloseconfirm"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnChanCloseConfirm")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5DbG9zZUNvbmZpcm0oCiAgY3R4IHNkay5Db250ZXh0LAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICBkb0N1c3RvbUxvZ2ljKCkKCiAgcmV0dXJuIGFwcC5PbkNoYW5DbG9zZUNvbmZpcm0oY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKfQo="}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L191-L213",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h4",{attrs:{id:"capabilities"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),l("p",[e._v("The middleware should simply pass the capability in the callback arguments along to the underlying application so that it may be claimed by the base application. The base application will then pass the capability up the stack in order to authenticate an outgoing packet/acknowledgement, which you can check in the "),l("RouterLink",{attrs:{to:"/ibc/middleware/develop.html#ics-4-wrappers"}},[l("code",[e._v("ICS4Wrapper")]),e._v(" section")]),e._v(".")],1),e._v(" "),l("p",[e._v("In the case where the middleware wishes to send a packet or acknowledgment without the involvement of the underlying application, it should be given access to the same "),l("code",[e._v("scopedKeeper")]),e._v(" as the base application so that it can retrieve the capabilities by itself.")]),e._v(" "),l("h3",{attrs:{id:"packet-callbacks"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#packet-callbacks"}},[e._v("#")]),e._v(" Packet callbacks")]),e._v(" "),l("p",[e._v("The packet callbacks just like the handshake callbacks wrap the application's packet callbacks. The packet callbacks are where the middleware performs most of its custom logic. The middleware may read the packet flow data and perform some additional packet handling, or it may modify the incoming data before it reaches the underlying application. This enables a wide degree of usecases, as a simple base application like token-transfer can be transformed for a variety of usecases by combining it with custom middleware.")]),e._v(" "),l("h4",{attrs:{id:"onrecvpacket"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#onrecvpacket"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnRecvPacket")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25SZWN2UGFja2V0KAogIGN0eCBzZGsuQ29udGV4dCwKICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGliY2V4cG9ydGVkLkFja25vd2xlZGdlbWVudCB7CiAgZG9DdXN0b21Mb2dpYyhwYWNrZXQpCgogIGFjayA6PSBhcHAuT25SZWN2UGFja2V0KGN0eCwgcGFja2V0LCByZWxheWVyKQoKICBkb0N1c3RvbUxvZ2ljKGFjaykgLy8gbWlkZGxld2FyZSBtYXkgbW9kaWZ5IG91dGdvaW5nIGFjawogICAgCiAgcmV0dXJuIGFjawp9Cg=="}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L217-L238",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h4",{attrs:{id:"onacknowledgementpacket"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#onacknowledgementpacket"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnAcknowledgementPacket")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25BY2tub3dsZWRnZW1lbnRQYWNrZXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LAogIGFja25vd2xlZGdlbWVudCBbXWJ5dGUsCiAgcmVsYXllciBzZGsuQWNjQWRkcmVzcywKKSBlcnJvciB7CiAgZG9DdXN0b21Mb2dpYyhwYWNrZXQsIGFjaykKCiAgcmV0dXJuIGFwcC5PbkFja25vd2xlZGdlbWVudFBhY2tldChjdHgsIHBhY2tldCwgYWNrLCByZWxheWVyKQp9Cg=="}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L242-L293",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h4",{attrs:{id:"ontimeoutpacket"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#ontimeoutpacket"}},[e._v("#")]),e._v(" "),l("code",[e._v("OnTimeoutPacket")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25UaW1lb3V0UGFja2V0KAogIGN0eCBzZGsuQ29udGV4dCwKICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGVycm9yIHsKICBkb0N1c3RvbUxvZ2ljKHBhY2tldCkKCiAgcmV0dXJuIGFwcC5PblRpbWVvdXRQYWNrZXQoY3R4LCBwYWNrZXQsIHJlbGF5ZXIpCn0K"}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L297-L335",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h2",{attrs:{id:"ics-04-wrappers"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#ics-04-wrappers"}},[e._v("#")]),e._v(" ICS-04 wrappers")]),e._v(" "),l("p",[e._v("Middleware must also wrap ICS-04 so that any communication from the application to the "),l("code",[e._v("channelKeeper")]),e._v(" goes through the middleware first. Similar to the packet callbacks, the middleware may modify outgoing acknowledgements and packets in any way it wishes.")]),e._v(" "),l("p",[e._v("To ensure optimal generalisability, the "),l("code",[e._v("ICS4Wrapper")]),e._v(" abstraction serves to abstract away whether a middleware is the topmost middleware (and thus directly caling into the ICS-04 "),l("code",[e._v("channelKeeper")]),e._v(") or itself being wrapped by another middleware.")]),e._v(" "),l("p",[e._v("Remember that middleware can be stateful or stateless. When defining the stateful middleware's keeper, the "),l("code",[e._v("ics4Wrapper")]),e._v(" field is included. Then the appropriate keeper can be passed when instantiating the middleware's keeper in "),l("code",[e._v("app.go")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBLZWVwZXIgc3RydWN0IHsKICBzdG9yZUtleSBzdG9yZXR5cGVzLlN0b3JlS2V5CiAgY2RjICAgICAgY29kZWMuQmluYXJ5Q29kZWMKCiAgaWNzNFdyYXBwZXIgICBwb3J0dHlwZXMuSUNTNFdyYXBwZXIKICBjaGFubmVsS2VlcGVyIHR5cGVzLkNoYW5uZWxLZWVwZXIKICBwb3J0S2VlcGVyICAgIHR5cGVzLlBvcnRLZWVwZXIKICAuLi4KfQo="}}),e._v(" "),l("p",[e._v("For stateless middleware, the "),l("code",[e._v("ics4Wrapper")]),e._v(" can be passed on directly without having to instantiate a keeper struct for the middleware.")]),e._v(" "),l("p",[l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go#L110-L133",target:"_blank",rel:"noopener noreferrer"}},[e._v("The interface"),l("OutboundLink")],1),e._v(" looks as follows:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVGhpcyBpcyBpbXBsZW1lbnRlZCBieSBJQ1M0IGFuZCBhbGwgbWlkZGxld2FyZSB0aGF0IGFyZSB3cmFwcGluZyBiYXNlIGFwcGxpY2F0aW9uLgovLyBUaGUgYmFzZSBhcHBsaWNhdGlvbiB3aWxsIGNhbGwgYHNlbmRQYWNrZXRgIG9yIGB3cml0ZUFja25vd2xlZGdlbWVudGAgb2YgdGhlIG1pZGRsZXdhcmUgZGlyZWN0bHkgYWJvdmUgdGhlbQovLyB3aGljaCB3aWxsIGNhbGwgdGhlIG5leHQgbWlkZGxld2FyZSB1bnRpbCBpdCByZWFjaGVzIHRoZSBjb3JlIElCQyBoYW5kbGVyLgp0eXBlIElDUzRXcmFwcGVyIGludGVyZmFjZSB7CiAgU2VuZFBhY2tldCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgc291cmNlUG9ydCBzdHJpbmcsCiAgICBzb3VyY2VDaGFubmVsIHN0cmluZywKICAgIHRpbWVvdXRIZWlnaHQgY2xpZW50dHlwZXMuSGVpZ2h0LAogICAgdGltZW91dFRpbWVzdGFtcCB1aW50NjQsCiAgICBkYXRhIFtdYnl0ZSwKICApIChzZXF1ZW5jZSB1aW50NjQsIGVyciBlcnJvcikKCiAgV3JpdGVBY2tub3dsZWRnZW1lbnQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBjaGFuQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICAgIHBhY2tldCBleHBvcnRlZC5QYWNrZXRJLAogICAgYWNrIGV4cG9ydGVkLkFja25vd2xlZGdlbWVudCwKICApIGVycm9yCgogIEdldEFwcFZlcnNpb24oCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAogICkgKHN0cmluZywgYm9vbCkKfQo="}}),e._v(" "),l("p",[e._v("⚠️ In the following paragraphs, the methods are presented in pseudo code which has been kept general, not stating whether the middleware is stateful or stateless. Remember that when the middleware is stateful, "),l("code",[e._v("ics4Wrapper")]),e._v(" can be accessed through the keeper.")]),e._v(" "),l("p",[e._v("Check out the references provided for an actual implementation to clarify, where the "),l("code",[e._v("ics4Wrapper")]),e._v(" methods in "),l("code",[e._v("ibc_middleware.go")]),e._v(" simply call the equivalent keeper methods where the actual logic resides.")]),e._v(" "),l("h3",{attrs:{id:"sendpacket"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sendpacket"}},[e._v("#")]),e._v(" "),l("code",[e._v("SendPacket")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTZW5kUGFja2V0KAogIGN0eCBzZGsuQ29udGV4dCwKICBjaGFuQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICBzb3VyY2VQb3J0IHN0cmluZywKICBzb3VyY2VDaGFubmVsIHN0cmluZywKICB0aW1lb3V0SGVpZ2h0IGNsaWVudHR5cGVzLkhlaWdodCwKICB0aW1lb3V0VGltZXN0YW1wIHVpbnQ2NCwKICBhcHBEYXRhIFtdYnl0ZSwKKSAodWludDY0LCBlcnJvcikgewogIC8vIG1pZGRsZXdhcmUgbWF5IG1vZGlmeSBkYXRhCiAgZGF0YSA9IGRvQ3VzdG9tTG9naWMoYXBwRGF0YSkKCiAgcmV0dXJuIGljczRXcmFwcGVyLlNlbmRQYWNrZXQoCiAgICBjdHgsIAogICAgY2hhbkNhcCwgCiAgICBzb3VyY2VQb3J0LCAKICAgIHNvdXJjZUNoYW5uZWwsIAogICAgdGltZW91dEhlaWdodCwgCiAgICB0aW1lb3V0VGltZXN0YW1wLCAKICAgIGRhdGEsCiAgKQp9Cg=="}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L17-L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this function for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h3",{attrs:{id:"writeacknowledgement"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#writeacknowledgement"}},[e._v("#")]),e._v(" "),l("code",[e._v("WriteAcknowledgement")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gb25seSBjYWxsZWQgZm9yIGFzeW5jIGFja3MKZnVuYyBXcml0ZUFja25vd2xlZGdlbWVudCgKICBjdHggc2RrLkNvbnRleHQsCiAgY2hhbkNhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgcGFja2V0IGV4cG9ydGVkLlBhY2tldEksCiAgYWNrIGV4cG9ydGVkLkFja25vd2xlZGdlbWVudCwKKSBlcnJvciB7CiAgLy8gbWlkZGxld2FyZSBtYXkgbW9kaWZ5IGFja25vd2xlZGdlbWVudAogIGFja19ieXRlcyA9IGRvQ3VzdG9tTG9naWMoYWNrKQoKICByZXR1cm4gaWNzNFdyYXBwZXIuV3JpdGVBY2tub3dsZWRnZW1lbnQocGFja2V0LCBhY2tfYnl0ZXMpCn0K"}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L31-L55",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this function for the ICS-29 Fee Middleware module.")]),e._v(" "),l("h3",{attrs:{id:"getappversion"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#getappversion"}},[e._v("#")]),e._v(" "),l("code",[e._v("GetAppVersion")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gbWlkZGxld2FyZSBtdXN0IHJldHVybiB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbiB2ZXJzaW9uCmZ1bmMgR2V0QXBwVmVyc2lvbigKICBjdHggc2RrLkNvbnRleHQsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCikgKHN0cmluZywgYm9vbCkgewogIHZlcnNpb24sIGZvdW5kIDo9IGljczRXcmFwcGVyLkdldEFwcFZlcnNpb24oY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKICBpZiAhZm91bmQgewogICAgcmV0dXJuICZxdW90OyZxdW90OywgZmFsc2UKICB9CgogIGlmICFNaWRkbGV3YXJlRW5hYmxlZCB7CiAgICByZXR1cm4gdmVyc2lvbiwgdHJ1ZQogIH0KCiAgLy8gdW53cmFwIGNoYW5uZWwgdmVyc2lvbgogIG1ldGFkYXRhLCBlcnIgOj0gVW5tYXJzaGFsKHZlcnNpb24pCiAgaWYgZXJyICE9IG5pbCB7CiAgICBwYW5pYyhmbXQuRXJyb2YoJnF1b3Q7dW5hYmxlIHRvIHVubWFyc2hhbCB2ZXJzaW9uOiAldyZxdW90OywgZXJyKSkKICB9CgogIHJldHVybiBtZXRhZGF0YS5BcHBWZXJzaW9uLCB0cnVlCn0K"}}),e._v(" "),l("p",[e._v("See "),l("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L58-L74",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),l("OutboundLink")],1),e._v(" an example implementation of this function for the ICS-29 Fee Middleware module.")])],1)}),[],!1,null,null,null);a.default=t.exports}}]);