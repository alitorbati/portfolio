(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{31:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var o,a,r,c,i,l=n(0),s=n.n(l),u=n(22),m=n.n(u),f=n(14),h=n(2),p=n(20),d=n(6),g=n(10),b=n(23),E=n.n(b),w=n(11),k=Object(w.a)({"*":{boxSizing:"border-box"},html:{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:["14px","18px"],backgroundColor:"background",color:"foreground",textTransform:"lowercase"},body:{lineHeight:"1.5",minHeight:"100vh"},a:{color:"foreground"},"a:focus-visible":{outline:0,boxShadow:"button"}}),v=Object(d.createGlobalStyle)(o||(o=Object(g.a)(["\n  ","\n  ","\n"])),E.a,k),y=n(9),j=Object(d.default)("span")(a||(a=Object(g.a)(["\n  ","\n  ","\n  ","\n"])),y.a,y.d,y.e),O=Object(d.default)("div")(r||(r=Object(g.a)(["\n  ","\n  ","\n  ","\n"])),y.a,y.d,y.c),x=function(e){return l.createElement("div",null,l.createElement(j,{fontSize:2,fontWeight:700},"Ali Torbati"),l.createElement(O,{marginBottom:3}),l.createElement(j,{fontSize:1,color:"accent"},"My professional focus is on UI Engineering. The intersection of these two subjects is an incredibly expressive, complex and nuanced place to spend my energy and time. It requires both deep and broad knowledge, which is why I find it so rewarding."))},S=d.default.span(c||(c=Object(g.a)(["\n  display: inline-block;\n  width: 100px;\n  height: 1px;\n  position: relative;\n  top: -4px;\n  ","\n"])),Object(w.a)({backgroundColor:"foreground",marginX:2})),B=function(e){var t=l.useState,n=l.useEffect,o=t([]),a=Object(f.a)(o,2),r=a[0],c=a[1];return n((function(){fetch("https://opensheet.elk.sh/1VnD8RJtceCIFPvWzrCOcQCY5eUY5_FO1yOwvGIpCXe8/Sheet1").then((function(e){return e.json()})).then((function(e){c(e)}),(function(e){c([])}))}),[]),l.createElement(l.Fragment,null,r.filter((function(e){return"true"===e.show.toLowerCase()})).map((function(e,t){return l.createElement(O,{key:t,marginBottom:4},l.createElement(j,{as:"a",href:e.href,target:"_blank",fontSize:[1,2],fontWeight:700,style:{position:"sticky",top:0}},e.company),l.createElement(O,{marginBottom:2}),l.createElement(j,null,e.position),l.createElement(O,null,l.createElement(j,null,e.startdate),l.createElement(S,null),l.createElement(j,null,e.enddate)),l.createElement(O,{marginBottom:2}),l.createElement(j,{as:"p",color:"accent"},e.description))})))},W=function(e){var t=l.useState,n=l.useEffect,o=t([]),a=Object(f.a)(o,2),r=a[0],c=a[1];return n((function(){fetch("https://opensheet.elk.sh/12sERGaYvU1ZUsEOnG11LgR8ZQVtLW3zn2Kv8yOOBPyg/Sheet1").then((function(e){return e.json()})).then((function(e){c(e)}),(function(e){c([])}))}),[]),l.createElement(l.Fragment,null,r.filter((function(e){return"true"===e.show.toLowerCase()})).map((function(e,t){return l.createElement(O,{key:t,marginBottom:4},l.createElement(j,{as:"a",href:e.href,target:"_blank",fontSize:[1,2],fontWeight:700,style:{position:"sticky",top:0}},e.title),l.createElement(O,{marginBottom:2}),l.createElement(j,null,e.position),l.createElement(O,{marginBottom:2}),l.createElement(j,{as:"p",color:"accent"},e.description))})))},z=function(e){var t=function(e){return l.createElement(j,{as:"a",href:e.link.href,target:"_blank",fontSize:[1,2],fontWeight:700,style:{position:"sticky",top:0}},e.link.label)};return l.createElement(O,null,l.createElement(O,{as:"ul",marginBottom:3},[{label:"twitter",href:"http://twitter.com/alitorbati"},{label:"github",href:"http://github.com/alitorbati"}].map((function(e){return l.createElement("li",{key:e.href},l.createElement(t,{link:e}))}))),l.createElement(O,{as:"ul"},[{label:"email",href:"mailto:ali.torbati@gmail.com"},{label:"instagram",href:"http://instagram.com/alitorbati"},{label:"linkedin",href:"http://linkedin.com/in/alitorbati"},{label:"behance",href:"http://behance.net/alitorbati"}].map((function(e){return l.createElement("li",{key:e.href},l.createElement(t,{link:e}))}))))},C=n(26),I=Object(d.default)("div")(i||(i=Object(g.a)(["\n  ","\n  ","\n  ","\n"])),y.c,y.b,(function(e){return e.gap?Object(w.a)({gap:Object(C.a)("space.".concat(e.gap),"")(e)}):""})),U=n(21),F={foreground:"#222",background:"white",accent:"#888"},L={foreground:"white",background:"#222",accent:"#888"},M=["2px solid ".concat(F.foreground)],R=["2px solid ".concat(L.foreground)],A={button:"0 0 0 1px ".concat(F.background,", 0 0 0 3px ").concat(F.foreground)},G={button:"0 0 0 1px ".concat(L.background,", 0 0 0 3px ").concat(L.foreground)},T={fontSizes:["1em","2em","3em"],space:[0,5,10,30,60],colors:F,borders:M,shadows:A},_=Object(U.a)(Object(U.a)({},T),{},{colors:L,borders:R,shadows:G}),H=T,J=[{path:"/",label:"home",component:x,exact:!0},{path:"/projects",label:"projects",component:W},{path:"/jobs",label:"jobs",component:B},{path:"/contact",label:"contact",component:z}],P=Object(h.e)((function(e){return l.createElement(l.Fragment,null,J.map((function(t){return l.createElement(j,{key:t.path},l.createElement(p.b,{style:{textDecoration:e.location.pathname===t.path?"line-through":null},to:t.path,key:t.path},t.label))})))})),Y=function(e){var t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?_:H,n=l.useState(t),o=Object(f.a)(n,2),a=o[0],r=o[1];return l.useEffect((function(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?r(_):r(H)}))}),[]),l.createElement(d.ThemeProvider,{theme:a},l.createElement(p.a,null,l.createElement(O,{as:"main",maxWidth:"800px",padding:[3,4]},l.createElement(v,null),l.createElement(O,{as:"header"},l.createElement(O,{as:"nav",marginBottom:4},l.createElement(I,{display:"flex",alignItems:"center",gap:"3"},l.createElement(P,null)))),l.createElement(O,null,J.map((function(e){return l.createElement(h.a,Object.assign({},e,{key:e.path}))}))))))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}m.a.render(s.a.createElement(Y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");D?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.08e906fd.chunk.js.map