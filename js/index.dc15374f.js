(function(t){function e(e){for(var r,o,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={index:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"13fd":function(t,e,n){},"1b5d":function(t,e,n){},"1fe7":function(t,e,n){},"21eb":function(t,e,n){"use strict";n("6b32")},"506a":function(t,e,n){"use strict";n("1fe7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("table",[t._m(0),n("tbody",[n("tr",[n("td"),n("td",{attrs:{rowspan:t.functions.length+1}},[0===t.active?n("browser"):t._e(),1===t.active?n("UUIDv4"):t._e(),2===t.active?n("unix-timestamp"):t._e(),3===t.active?n("qr-code-generator"):t._e()],1)]),t._l(t.functions,(function(e,r){return n("tr",{key:r},[n("td",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.view(r)}}},[t._v(t._s(e))])])])})),t._m(1)],2)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v(" Type ")]),n("td",[t._v(" Function ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{attrs:{colspan:"2"}},[t._v(" Source Code: "),n("a",{attrs:{href:"https://github.com/star-inc/tools"}},[t._v("Github Repository")]),t._v(" Maintainer: "),n("a",{attrs:{href:"https://security.starinc.xyz/"}},[t._v("Star Inc. Security Department")])])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("IP Address: "+t._s(t.ip_addr))]),n("li",[t._v("User-Agent: "+t._s(t.userAgent))])])},c=[],u=n("1da1"),s=(n("96cf"),n("bc3a")),l=n.n(s),p={name:"Browser",data:function(){return{ip_addr:null}},computed:{userAgent:function(){return window.navigator?navigator.userAgent:"Unsupported"}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://restapi.starinc.xyz/basic/ip");case 3:n=e.sent,t.ip_addr=n.data.data.ip_addr,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.ip_addr="Unavailable",console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},f=p,d=(n("21eb"),n("2877")),v=Object(d["a"])(f,o,c,!1,null,"32185f5a",null),m=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",[t._v("UUID v4: "+t._s(t.uuid))])]),n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.refresh}},[t._v("refresh")])])},_=[],b=n("11c1"),w={name:"UUIDv4",data:function(){return{uuid:null}},methods:{refresh:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.uuid=b["v4"].v4();case 1:case"end":return e.stop()}}),e)})))()}},created:function(){this.refresh()}},g=w,x=(n("a782"),Object(d["a"])(g,h,_,!1,null,"7fe4cfc0",null)),y=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Local: "+t._s(t.localTimestamp))]),n("li",[t._v("Remote: "+t._s(t.remoteTimestamp))])])},O=[],U={name:"UnixTimestamp",data:function(){return{remoteTimestamp:null}},computed:{localTimestamp:function(){return Math.round((new Date).getTime()/1e3)}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://restapi.starinc.xyz/basic/now");case 3:n=e.sent,t.remoteTimestamp=n.data.data.posix,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.remoteTimestamp="Unavailable",console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},T=U,k=(n("aa0d"),Object(d["a"])(T,j,O,!1,null,"5556cc17",null)),R=k.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{type:"text"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),n("div",[n("img",{directives:[{name:"show",rawName:"v-show",value:t.image,expression:"image"}],attrs:{src:t.image,alt:"instance.value"}})])])},D=[],I=n("c4a7"),S=n.n(I),$={name:"QrCodeGenerator",data:function(){return{instance:new S.a,image:null,input:""}},watch:{input:function(){this.instance.value=this.input,this.image=this.instance.toDataURL()}}},E=$,A=(n("506a"),Object(d["a"])(E,P,D,!1,null,"6aed599e",null)),C=A.exports,M={name:"App",components:{Browser:m,UUIDv4:y,UnixTimestamp:R,QrCodeGenerator:C},data:function(){return{active:0,functions:["Browser","UUID v4","Unix Timestamp","QR Code Generator"]}},methods:{view:function(t){this.active=t,window.location.hash="#".concat(this.active)}},created:function(){if(window.location.hash){var t=parseInt(window.location.hash.substring(1));this.active=t&&t<this.functions.length?t:0}window.location.hash="#".concat(this.active)}},G=M,z=(n("ba71"),Object(d["a"])(G,a,i,!1,null,"080a0f09",null)),B=z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(B)}}).$mount("#app")},6084:function(t,e,n){},"6b32":function(t,e,n){},a782:function(t,e,n){"use strict";n("1b5d")},aa0d:function(t,e,n){"use strict";n("13fd")},ba71:function(t,e,n){"use strict";n("6084")}});
//# sourceMappingURL=index.dc15374f.js.map