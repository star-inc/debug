(function(e){function t(t){for(var r,i,u=t[0],o=t[1],c=t[2],p=0,v=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(v.length)v.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={index:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fb4":function(e,t,n){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},1495:function(e,t,n){},"1b64":function(e,t,n){"use strict";n("474a")},"1bb1":function(e,t,n){"use strict";n("bf28")},2:function(e,t){},"2f04":function(e,t,n){},3:function(e,t){},"343d":function(e,t,n){"use strict";n("f2e6")},"3a47":function(e,t,n){"use strict";n("b801")},"3e4a":function(e,t,n){"use strict";n("a9e4")},4:function(e,t){},"474a":function(e,t,n){},"487c":function(e,t,n){"use strict";n("6907")},"4c7d":function(e,t,n){"use strict";n("b997")},5:function(e,t){},"523e":function(e,t,n){},"52b4":function(e,t,n){"use strict";n("bf09")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("table",[e._m(0),n("tbody",[n("tr",[n("td"),n("td",{attrs:{rowspan:e.functions.length+1}},[0===e.active?n("browser"):e._e(),1===e.active?n("UUIDv4"):e._e(),2===e.active?n("unix-timestamp"):e._e(),3===e.active?n("qr-code-generator"):e._e(),4===e.active?n("qr-code-scanner"):e._e(),5===e.active?n("google-dns-query"):e._e(),6===e.active?n("cloudflare-dns-query"):e._e(),7===e.active?n("opendns-dns-query"):e._e(),8===e.active?n("legacy-dns-query"):e._e(),9===e.active?n("whois"):e._e(),10===e.active?n("view-source"):e._e(),11===e.active?n("IPGeo"):e._e(),12===e.active?n("hash"):e._e(),13===e.active?n("base64"):e._e(),14===e.active?n("base64-url"):e._e()],1)]),e._l(e.functions,(function(t,r){return n("tr",{key:r},[n("td",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.view(r)}}},[e._v(e._s(t))])])])})),e._m(1)],2)])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("td",[e._v(" Type ")]),n("td",[e._v(" Function ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",{attrs:{colspan:"2"}},[e._v(" Source Code: "),n("a",{attrs:{href:"https://github.com/star-inc/tools"}},[e._v("Github Repository")]),e._v(" Maintainer: "),n("a",{attrs:{href:"https://security.starinc.xyz/"}},[e._v("Star Inc. Security Department")])])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("IP Address: "),n("code",[e._v(e._s(e.ip_addr))])]),n("li",[e._v("User-Agent: "),n("code",[e._v(e._s(e.userAgent))])])])},u=[],o=n("1da1"),c=(n("96cf"),n("bc3a")),l=n.n(c),p={name:"Browser",data:function(){return{ip_addr:null}},computed:{userAgent:function(){return window.navigator?navigator.userAgent:"Unsupported"}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("https://restapi.starinc.xyz/basic/ip");case 3:n=t.sent,e.ip_addr=n.data.data.ip_addr,t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),e.ip_addr="Unavailable",console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},v=p,d=(n("3e4a"),n("2877")),f=Object(d["a"])(v,i,u,!1,null,"58c21e41",null),m=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",[n("li",[e._v("UUID v4: "),n("code",[e._v(e._s(e.uuid))])])]),n("a",{attrs:{href:"javascript:void(0)"},on:{click:e.refresh}},[e._v("refresh")])])},_=[],b=n("11c1"),g={name:"UUIDv4",data:function(){return{uuid:null}},methods:{refresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.uuid=b["v4"].v4();case 1:case"end":return t.stop()}}),t)})))()}},created:function(){this.refresh()}},y=g,w=(n("8756"),Object(d["a"])(y,h,_,!1,null,"79cef09d",null)),x=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Local: "),n("code",[e._v(e._s(e.localTimestamp))])]),n("li",[e._v("Remote: "),n("code",[e._v(e._s(e.remoteTimestamp))])])])},A=[],O={name:"UnixTimestamp",data:function(){return{remoteTimestamp:null}},computed:{localTimestamp:function(){return Math.round((new Date).getTime()/1e3)}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("https://restapi.starinc.xyz/basic/now");case 3:n=t.sent,e.remoteTimestamp=n.data.data.posix,t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),e.remoteTimestamp="Unavailable",console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},N=O,S=(n("d48a"),Object(d["a"])(N,k,A,!1,null,"dc44ffbe",null)),j=S.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})]),e._m(0),n("div",[n("img",{directives:[{name:"show",rawName:"v-show",value:e.image,expression:"image"}],attrs:{src:e.image,alt:"instance.value"}})])])},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(" Special thanks: "),n("a",{attrs:{href:"https://github.com/neocotic/qrious"}},[e._v("neocotic/QRious")]),e._v(" provides the fast QR Code generation library. ")])}],R=n("c4a7"),E=n.n(R),C={name:"QrCodeGenerator",data:function(){return{instance:new E.a,image:null,input:""}},watch:{input:function(){this.instance.value=this.input,this.image=this.instance.toDataURL()}}},T=C,I=(n("3a47"),Object(d["a"])(T,D,P,!1,null,"2b42c6c6",null)),$=I.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[e._v(" Not ready ")])])}],M=(n("a77f"),{}),G=Object(d["a"])(M,L,U,!1,null,"0a9aedf2",null),Q=G.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{attrs:{disabled:e.latch,action:"#",method:"post"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),n("input",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}})]),e._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v(" "+e._s(e.result)+" ")]),!e.error&&e.results.length?n("ul",[e._v(" Answers: "),e._l(e.results,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(t.data)+" ")])}))],2):e._e()])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v(" Special thanks: "),n("a",{attrs:{href:"https://dns.google"}},[e._v("Google Public DNS")]),e._v(" provides JSON API of DoH service for querying. ")]),n("br"),n("span",[e._v(" Get more powerful tools by Google, please visit to "),n("a",{attrs:{href:"https://toolbox.googleapps.com"}},[e._v("Google Admin Toolbox")]),e._v(". ")])])}],H="https://dns.google/resolve?name=",F={name:"GoogleDnsQuery",data:function(){return{input:"",results:[],latch:!1,error:!1}},methods:{submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.input){t.next=2;break}return t.abrupt("return");case 2:return e.latch=!0,t.prev=3,t.next=6,l.a.get(H+e.input);case 6:n=t.sent,e.results=200===n.status?n.data.Answer:"failed",e.error=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](3),e.error=!0,e.results="unavailable",console.error(t.t0);case 16:e.latch=!1;case 17:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},K=F,Y=(n("52b4"),Object(d["a"])(K,q,B,!1,null,"39272590",null)),X=Y.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{attrs:{disabled:e.latch,action:"#",method:"post"}},[n("label",[e._v(" Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.name,expression:"input.name"}],attrs:{type:"text"},domProps:{value:e.input.name},on:{input:function(t){t.target.composing||e.$set(e.input,"name",t.target.value)}}})]),n("label",[e._v(" Type: "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.input.type,expression:"input.type"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.input,"type",t.target.multiple?n:n[0])}}},e._l(e.dnsTypes.resource,(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v(" "+e._s(r)+" ")])})),0)]),n("label",[e._v(" DO: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.do,expression:"input.do"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.input.do)?e._i(e.input.do,null)>-1:e.input.do},on:{change:function(t){var n=e.input.do,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);r.checked?i<0&&e.$set(e.input,"do",n.concat([s])):i>-1&&e.$set(e.input,"do",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.input,"do",a)}}})]),n("label",[e._v(" CD: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.cd,expression:"input.cd"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.input.cd)?e._i(e.input.cd,null)>-1:e.input.cd},on:{change:function(t){var n=e.input.cd,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);r.checked?i<0&&e.$set(e.input,"cd",n.concat([s])):i>-1&&e.$set(e.input,"cd",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.input,"cd",a)}}})]),n("input",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}})]),e._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v(" "+e._s(e.result)+" ")]),!e.error&&e.result?n("div",[e.showList&&Array.isArray(e.result.Answer)?n("ul",[e._v(" Answers List: "),e._l(e.result.Answer,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(t.data)+" ")])}))],2):n("div",[e._v(" Raw Answers: "),n("code",[e._v(" "+e._s(e.result)+" ")])])]):e._e()])},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v(" More details: "),n("a",{attrs:{href:"https://developers.cloudflare.com/1.1.1.1/dns-over-https/json-format"}},[e._v(" Cloudflare DoH JSON API documents ")])]),n("br"),n("span",[e._v(" Special thanks: "),n("a",{attrs:{href:"https://cloudflare.com"}},[e._v("Cloudflare")]),e._v(" provides us the high-reliability CDN and the JSON API of DoH service for querying. ")])])}],V=(n("b0c0"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),n("caad"),n("2532"),n("7018")),W="https://cloudflare-dns.com/dns-query?",Z={name:"CloudflareDnsQuery",data:function(){return{input:{name:"",type:"A",do:!0,cd:!1},result:null,latch:!1,listTypes:["A","AAAA"],showList:!0,dnsTypes:V,error:!1}},methods:{submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.input.name){t.next=2;break}return t.abrupt("return");case 2:return e.latch=!0,t.prev=3,n={},Object.assign(n,e.input),n.do=n.do.toString(),n.cd=n.cd.toString(),r=new URLSearchParams(n),t.next=11,l.a.get(W+r.toString(),{headers:{accept:"application/dns-json"}});case 11:a=t.sent,e.result=200===a.status?a.data:"failed",e.showList=e.listTypes.includes(e.input.type),e.error=!1,t.next=22;break;case 17:t.prev=17,t.t0=t["catch"](3),e.error=!0,e.result="unavailable",console.error(t.t0);case 22:e.latch=!1;case 23:case"end":return t.stop()}}),t,null,[[3,17]])})))()}}},ee=Z,te=(n("6ec5"),Object(d["a"])(ee,J,z,!1,null,"6e041fc2",null)),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{attrs:{disabled:e.latch,action:"#",method:"post"}},[n("label",[e._v(" Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.name,expression:"input.name"}],attrs:{type:"text"},domProps:{value:e.input.name},on:{input:function(t){t.target.composing||e.$set(e.input,"name",t.target.value)}}})]),n("label",[e._v(" Type: "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.input.type,expression:"input.type"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.input,"type",t.target.multiple?n:n[0])}}},e._l(e.dnsTypes.resource,(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v(" "+e._s(r)+" ")])})),0)]),n("input",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}})]),e._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v(" "+e._s(e.result)+" ")]),!e.error&&e.result?n("div",[e.showList&&Array.isArray(e.result.Answer)?n("ul",[e._v(" Answers List: "),e._l(e.result.Answer,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(t.data)+" ")])}))],2):n("div",[e._v(" Raw Answers: "),n("code",[e._v(" "+e._s(e.result)+" ")])])]):e._e()])},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(" Special thanks: "),n("a",{attrs:{href:"https://opendns.com"}},[e._v("OpenDNS")]),e._v(" provides the JSON API of DoH service for querying. ")])}],se="https://cloudflare-dns.com/dns-query?",ie={name:"OpendnsDnsQuery",data:function(){return{input:{name:"",type:"A"},result:null,latch:!1,listTypes:["A","AAAA"],showList:!0,dnsTypes:V,error:!1}},methods:{submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.input.name){t.next=2;break}return t.abrupt("return");case 2:return e.latch=!0,t.prev=3,n=new URLSearchParams(e.input),t.next=7,l.a.get(se+n.toString(),{headers:{accept:"application/dns-json"}});case 7:r=t.sent,e.result=200===r.status?r.data:"failed",e.showList=e.listTypes.includes(e.input.type),e.error=!1,t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](3),e.error=!0,e.result="unavailable",console.error(t.t0);case 18:e.latch=!1;case 19:case"end":return t.stop()}}),t,null,[[3,13]])})))()}}},ue=ie,oe=(n("ee0a"),Object(d["a"])(ue,re,ae,!1,null,"0ee56c23",null)),ce=oe.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{attrs:{disabled:e.latch,action:"#",method:"post"}},[n("label",[e._v(" Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.name,expression:"input.name"}],attrs:{type:"text"},domProps:{value:e.input.name},on:{input:function(t){t.target.composing||e.$set(e.input,"name",t.target.value)}}})]),n("label",[e._v(" Type: "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.input.type,expression:"input.type"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.input,"type",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"domain"}},[e._v("Domain")]),n("option",{attrs:{value:"ip_addr"}},[e._v("IP Address")])])]),n("input",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}})]),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.result,expression:"result"}]},[n("li",[n("code",[e._v(e._s(e.result))])])])])},pe=[],ve=(n("99af"),{name:"LegacyDnsQuery",data:function(){return{input:{name:"",type:"domain"},result:null,latch:!1}},methods:{submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.input.name){t.next=2;break}return t.abrupt("return");case 2:return e.latch=!0,t.prev=3,t.next=6,l.a.get("https://restapi.starinc.xyz/basic/nslookup?".concat(e.input.type,"=").concat(e.input.name));case 6:n=t.sent,e.result=n.data.data,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](3),500===t.t0.response.status?e.result="failed":e.result="unavailable",console.error(t.t0);case 14:e.latch=!1;case 15:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}}),de=ve,fe=(n("343d"),Object(d["a"])(de,le,pe,!1,null,"6eb19f39",null)),me=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{attrs:{disabled:e.latch,action:"#",method:"post"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),n("input",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v(" "+e._s(e.result)+" ")]),!e.error&&e.result?n("ul",[n("li",[e._v("Available: "+e._s(e.result.available?"Yes":"No"))]),n("li",[e._v("Dataset:"),n("br"),n("code",[e._v(e._s(e.result.lookup))])]),n("li",[e._v("Source:"),n("br"),n("code",[e._v(e._s(e.result.info))])])]):e._e()])},_e=[],be={name:"Whois",data:function(){return{input:"",result:null,latch:!1,error:!1}},methods:{submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.input){t.next=2;break}return t.abrupt("return");case 2:return e.latch=!0,t.prev=3,t.next=6,l.a.get("https://restapi.starinc.xyz/basic/whois?domain=".concat(e.input));case 6:n=t.sent,e.result=n.data.data,e.error=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](3),e.error=!0,500===t.t0.response.status?e.result="failed":e.result="unavailable",console.error(t.t0);case 16:e.latch=!1;case 17:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},ge=be,ye=(n("a33c"),Object(d["a"])(ge,he,_e,!1,null,"fc466808",null)),we=ye.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{attrs:{disabled:e.latch,action:"#",method:"post"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),n("input",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}})]),e._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.result,expression:"result"}]},[n("code",[e._v(e._s(e.result))])])])},ke=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(" Special thanks: "),n("a",{attrs:{href:"https://allorigins.win"}},[e._v("allOrigins")]),e._v(" provides the fast CORS Proxy. ")])}],Ae="https://api.allorigins.win/get?url=",Oe={name:"ViewSource",data:function(){return{input:"",result:null,latch:!1}},methods:{submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.input){t.next=2;break}return t.abrupt("return");case 2:return e.latch=!0,t.prev=3,t.next=6,l.a.get(Ae+e.input);case 6:n=t.sent,e.result=200===n.status?n.data.contents:"failed",null===n.data.contents&&(e.result="(Empty result, may the host you requested is not found.)"),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](3),e.result="unavailable",console.error(t.t0);case 15:e.latch=!1;case 16:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},Ne=Oe,Se=(n("856e"),Object(d["a"])(Ne,xe,ke,!1,null,"2e1819d1",null)),je=Se.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{attrs:{disabled:e.latch,action:"#",method:"post"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),n("input",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v(" "+e._s(e.result)+" ")]),!e.error&&e.result?n("div",[n("ul",[n("li",[e._v("Continent: "+e._s(e.result.continent.names.en))]),n("li",[e._v("Country: "+e._s(e.result.country.names.en))]),n("li",[e._v("Registered Country: "+e._s(e.result.registered_country.names.en))]),n("li",[e._v("City: "+e._s(e.result.city.names.en))])]),n("div",[e._v(" Raw Data: "),n("code",[e._v(" "+e._s(e.result)+" ")])])]):e._e()])},Pe=[],Re={name:"IPGeo",data:function(){return{input:"",result:null,latch:!1,error:!1}},methods:{submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.input){t.next=2;break}return t.abrupt("return");case 2:return e.latch=!0,t.prev=3,t.next=6,l.a.get("https://restapi.starinc.xyz/basic/ip/geo?ip_addr=".concat(e.input));case 6:n=t.sent,e.result=n.data.data,e.error=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](3),e.error=!0,500===t.t0.response.status?e.result="failed":e.result="unavailable",console.error(t.t0);case 16:e.latch=!1;case 17:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},Ee=Re,Ce=(n("1bb1"),Object(d["a"])(Ee,De,Pe,!1,null,"074bb472",null)),Te=Ce.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})]),e._m(0),n("ul",e._l(e.values,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(r)),n("br"),n("code",[e._v(e._s(t))])])})),0)])},$e=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(" Special thanks: "),n("a",{attrs:{href:"https://github.com/emn178"}},[e._v("emn178")]),e._v(" provides the fast hash libraries. ")])}],Le=n("fdea"),Ue=n.n(Le),Me=n("62e5"),Ge=n.n(Me),Qe=n("8237"),qe=n.n(Qe),Be=n("938d"),He=n("6199"),Fe=n.n(He),Ke=n("6c27"),Ye=n("ccc2"),Xe=n("1c55"),Je={name:"Hash",data:function(){return{input:"",values:{}}},watch:{input:function(){this.values.md2=Ue()(this.input),this.values.crc16=Object(Be["crc16"])(this.input),this.values.crc32=Object(Be["crc32"])(this.input),this.values.md4=Ge()(this.input),this.values.md5=qe()(this.input),this.values.sha1=Fe()(this.input),this.values.sha224=Object(Ke["sha224"])(this.input),this.values.sha256=Object(Ke["sha256"])(this.input),this.values.sha384=Object(Ye["sha384"])(this.input),this.values.sha512=Object(Ye["sha512"])(this.input),this.values.sha3_224=Object(Xe["sha3_224"])(this.input),this.values.sha3_256=Object(Xe["sha3_256"])(this.input),this.values.sha3_384=Object(Xe["sha3_384"])(this.input),this.values.sha3_512=Object(Xe["sha3_512"])(this.input),this.values.keccak224=Object(Xe["keccak224"])(this.input),this.values.keccak256=Object(Xe["keccak256"])(this.input),this.values.keccak384=Object(Xe["keccak384"])(this.input),this.values.keccak512=Object(Xe["keccak512"])(this.input)}}},ze=Je,Ve=(n("487c"),Object(d["a"])(ze,Ie,$e,!1,null,"7cda244f",null)),We=Ve.exports,Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})]),e._m(0),n("ul",[n("li",[e._v("Encode:"),n("br"),n("code",[e._v(e._s(e.results.encode))])]),n("li",[e._v("Decode:"),n("br"),n("code",[e._v(e._s(e.results.decode))])])])])},et=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(" Special thanks: "),n("a",{attrs:{href:"https://github.com/neocotic/qrious"}},[e._v("neocotic/QRious")]),e._v(" provides the fast QR Code generation library. ")])}],tt=n("e762"),nt={name:"Base64",data:function(){return{input:"",results:{encode:"",decode:""}}},watch:{input:function(){this.results.encode=Object(tt["b"])(this.input),this.results.decode=Object(tt["a"])(this.input)}}},rt=nt,at=(n("1b64"),Object(d["a"])(rt,Ze,et,!1,null,"6998cd62",null)),st=at.exports,it=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})]),e._m(0),n("ul",[n("li",[e._v("Encode:"),n("br"),n("code",[e._v(e._s(e.results.encode))])]),n("li",[e._v("Decode:"),n("br"),n("code",[e._v(e._s(e.results.decode))])])])])},ut=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(" Special thanks: "),n("a",{attrs:{href:"https://github.com/neocotic/qrious"}},[e._v("neocotic/QRious")]),e._v(" provides the fast QR Code generation library. ")])}],ot={name:"Base64Url",data:function(){return{input:"",results:{encode:"",decode:""}}},watch:{input:function(){this.results.encode=Object(tt["c"])(this.input),this.results.decode=Object(tt["a"])(this.input)}}},ct=ot,lt=(n("4c7d"),Object(d["a"])(ct,it,ut,!1,null,"820ac7d0",null)),pt=lt.exports,vt={name:"App",components:{Browser:m,UUIDv4:x,UnixTimestamp:j,QrCodeGenerator:$,QrCodeScanner:Q,GoogleDnsQuery:X,CloudflareDnsQuery:ne,OpendnsDnsQuery:ce,LegacyDnsQuery:me,Whois:we,ViewSource:je,IPGeo:Te,Hash:We,Base64:st,Base64Url:pt},data:function(){return{active:0,functions:["Browser","UUID v4","Unix Timestamp","QR Code Generator","QR Code Scanner","Google DNS Query (Nslookup)","Cloudflare DNS Query (Nslookup)","OpenDNS DNS Query (Nslookup)","Legacy Dns Query (Nslookup)","Whois","View Source","IP Geolocation","Hash","Base64","Base64 URL"]}},methods:{view:function(e){this.active=e,window.location.hash="#".concat(this.active)}},created:function(){if(window.location.hash){var e=parseInt(window.location.hash.substring(1));this.active=e&&e<this.functions.length?e:0}window.location.hash="#".concat(this.active)}},dt=vt,ft=(n("8f1d"),Object(d["a"])(dt,a,s,!1,null,"31688d08",null)),mt=ft.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(mt)}}).$mount("#app")},"5da9":function(e,t,n){},6:function(e,t){},6907:function(e,t,n){},"6ec5":function(e,t,n){"use strict";n("523e")},7:function(e,t){},7018:function(e){e.exports=JSON.parse('{"resource":{"A":1,"AAAA":28,"AFSDB":18,"APL":42,"CAA":257,"CDNSKEY":60,"CDS":59,"CERT":37,"CNAME":5,"CSYNC":62,"DHCID":49,"DLV":32769,"DNAME":39,"DNSKEY":48,"DS":43,"EUI48":108,"EUI64":109,"HINFO":13,"HIP":55,"IPSECKEY":45,"KEY":25,"KX":36,"LOC":29,"MX":15,"NAPTR":35,"NS":2,"NSEC":47,"NSEC3":50,"NSEC3PARAM":51,"OPENPGPKEY":61,"PTR":12,"RRSIG":46,"RP":17,"SIG":24,"SMIMEA":53,"SOA":6,"SRV":33,"SSHFP":44,"TA":32768,"TKEY":249,"TLSA":52,"TSIG":250,"TXT":16,"URI":256,"ZONEMD":63,"SVCB":64,"HTTPS":65},"obsolete":{"MD":3,"MF":4,"MAILA":254,"MB":7,"MG":8,"MR":9,"MINFO":14,"MAILB":253,"WKS":11,"NB":32,"NBSTAT":33,"NULL":10,"A6":38,"NXT":30,"KEY":25,"SIG":24,"HINFO":13,"RP":17,"X25":19,"ISDN":20,"RT":21,"NSAP":22,"NSAP-PTR":23,"PX":26,"EID":31,"NIMLOC":32,"ATMA":34,"APL":42,"SINK":40,"GPOS":27,"UINFO":100,"UID":101,"GID":102,"UNSPEC":103,"SPF":99,"NINFO":56,"RKEY":57,"TALINK":58,"NID":104,"L32":105,"L64":106,"LP":107,"DOA":259},"other":{"*":255,"AXFR":252,"IXFR":251,"OPT":41}}')},8:function(e,t){},"856e":function(e,t,n){"use strict";n("5da9")},8756:function(e,t,n){"use strict";n("8b22")},"8b22":function(e,t,n){},"8d96":function(e,t,n){},"8f1d":function(e,t,n){"use strict";n("2f04")},9:function(e,t){},a33c:function(e,t,n){"use strict";n("1495")},a77f:function(e,t,n){"use strict";n("e8a5")},a9e4:function(e,t,n){},b801:function(e,t,n){},b997:function(e,t,n){},bf09:function(e,t,n){},bf28:function(e,t,n){},d48a:function(e,t,n){"use strict";n("8d96")},e8a5:function(e,t,n){},ee0a:function(e,t,n){"use strict";n("0fb4")},f2e6:function(e,t,n){}});
//# sourceMappingURL=index.f3c8e243.js.map