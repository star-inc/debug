(function(e){function t(t){for(var n,u,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={index:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container"},[r("md-app",{attrs:{"md-waterfall":""}},[r("md-app-toolbar",{staticClass:"md-large md-primary"},[r("Index")],1)],1)],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"index md-toolbar-row md-toolbar-offset"},[r("span",{staticClass:"md-display-1"},[e._v("Your IP Address: "+e._s(e.ip_addr))])])},c=[],i=r("1da1"),s=(r("96cf"),r("bc3a")),d=r.n(s),l={name:"Index",data:function(){return{ip_addr:null}},methods:{getIP:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://restapi.starinc.xyz/basic/ip");case 2:return t=e.sent,e.abrupt("return",t.data.data.ip_addr);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getIP();case 2:e.ip_addr=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},p=l,f=(r("8671"),r("2877")),b=Object(f["a"])(p,u,c,!1,null,"6a9e7022",null),m=b.exports,v={name:"App",components:{Index:m}},h=v,g=(r("f41d"),Object(f["a"])(h,a,o,!1,null,"1a041d26",null)),y=g.exports,w=r("9c30");r("51de"),r("bb87");n["default"].use(w["MdApp"]),n["default"].use(w["MdToolbar"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(y)}}).$mount("#app")},"5d13":function(e,t,r){},8671:function(e,t,r){"use strict";r("cc06")},cc06:function(e,t,r){},f41d:function(e,t,r){"use strict";r("5d13")}});
//# sourceMappingURL=index.cfd50caf.js.map