(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[34],{170:function(e,t,a){e.exports={warpper:"index_warpper__2qmKD",edit:"index_edit__3apM5",avatar:"index_avatar__WkUDv"}},171:function(e,t,a){},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(15),c=a(174),r=a(169),s=a(0),i=a.n(s),u=a(175),o=a(173),p=a.n(o),h=a(170),j=a.n(h),b=a(26),d=a.n(b),l=a(41);var f=a(12);function x(e){var t=e.path;return t?Object(f.jsxs)("div",{className:j.a.warpper,children:[Object(f.jsxs)("a",{className:j.a.edit,href:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(t.replace(/^\//,"")),target:"__blank",children:[Object(f.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"14",height:"14",fill:"#757575",children:[Object(f.jsx)("path",{d:"M837.818182 0H186.181818C134.981818 0 93.090909 41.890909 93.090909 93.090909v837.818182c0 51.2 41.890909 93.090909 93.090909 93.090909h651.636364c51.2 0 93.090909-41.890909 93.090909-93.090909V93.090909c0-51.2-41.890909-93.090909-93.090909-93.090909z m46.545454 912.290909c0 37.236364-27.927273 65.163636-65.163636 65.163636H204.8c-37.236364 0-65.163636-27.927273-65.163636-65.163636V111.709091C139.636364 74.472727 167.563636 46.545455 204.8 46.545455h614.4c37.236364 0 65.163636 27.927273 65.163636 65.163636v800.581818z"}),Object(f.jsx)("path",{d:"M256 139.636364h418.909091c13.963636 0 23.272727 9.309091 23.272727 23.272727s-9.309091 23.272727-23.272727 23.272727h-418.909091c-13.963636 0-23.272727-9.309091-23.272727-23.272727s9.309091-23.272727 23.272727-23.272727zM256 279.272727h279.272727c13.963636 0 23.272727 9.309091 23.272728 23.272728s-9.309091 23.272727-23.272728 23.272727h-279.272727c-13.963636 0-23.272727-9.309091-23.272727-23.272727s9.309091-23.272727 23.272727-23.272728zM256 418.909091h139.636364c13.963636 0 23.272727 9.309091 23.272727 23.272727s-9.309091 23.272727-23.272727 23.272727h-139.636364c-13.963636 0-23.272727-9.309091-23.272727-23.272727s9.309091-23.272727 23.272727-23.272727z"}),Object(f.jsx)("path",{d:"M256 581.818182m-23.272727 0a23.272727 23.272727 0 1 0 46.545454 0 23.272727 23.272727 0 1 0-46.545454 0Z"}),Object(f.jsx)("path",{d:"M721.454545 558.545455h46.545455c13.963636 0 23.272727 9.309091 23.272727 23.272727s-9.309091 23.272727-23.272727 23.272727h-46.545455c-13.963636 0-23.272727-9.309091-23.272727-23.272727s9.309091-23.272727 23.272727-23.272727z"}),Object(f.jsx)("path",{d:"M404.945455 768l-102.4-97.745455L781.963636 190.836364c27.927273-27.927273 69.818182-27.927273 97.745455 0s27.927273 69.818182 0 97.745454"}),Object(f.jsx)("path",{d:"M339.781818 833.163636l-116.363636 18.618182 18.618182-116.363636 32.581818-32.581818L372.363636 800.581818"})]}),"\u5728 GitHub \u4e0a\u7f16\u8bd1\u6b64\u9875"]}),Object(f.jsx)(v,{path:t})]}):null}function v(e){var t=e.path,a=function(e,t){var a=i.a.useState(null),n=Object(r.a)(a,2),c=n[0],s=n[1],u=i.a.useState(null),o=Object(r.a)(u,2),p=o[0],h=o[1];return i.a.useEffect((function(){!function(){var a=Object(l.a)(d.a.mark((function a(){var n,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e,t);case 3:return n=a.sent,a.next=6,n.json();case 6:c=a.sent,s(c),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),h(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}()()}),[]),{response:c,error:p}}("https://proapi.azurewebsites.net/doc/getAvatarList?filename=".concat(t.replace(/^\//,""),"&owner=uiwjs&repo=react-native-uiw"));return a.response?Object(f.jsx)("span",{className:j.a.avatar,children:a.response.map((function(e,t){return Object(f.jsx)("a",{href:"https://github.com/".concat(e.username),target:"__blank",children:Object(f.jsx)("img",{src:e.url,alt:e.username})},t)}))}):Object(f.jsx)("span",{className:j.a.avatar,children:"Loading..."})}var O=a(171),w=a.n(O),m=["inline","node","noPreview","noScroll","bgWhite","noCode","codePen","codeSandbox"];function g(e){var t=e.renderPage,a=e.path,i=e.style,o=Object(s.useState)(""),h=Object(r.a)(o,2),j=h[0],b=h[1],d=Object(s.useState)(""),l=Object(r.a)(d,2),v=l[0],O=l[1];return Object(s.useEffect)((function(){t&&(O(""),t().then((function(e){b(e)})).catch((function(){O("\u9875\u9762\u52a0\u8f7d\u5931\u8d25\uff01\u8bf7\u5237\u65b0\u9875\u9762")})))}),[]),v?Object(f.jsxs)("div",{className:w.a.warpper,style:i,children:[v,Object(f.jsx)(x,{path:a})]}):Object(f.jsxs)("div",{className:w.a.warpper,style:i,children:[Object(f.jsx)(u.a,{source:j,rehypePlugins:[[p.a,{properties:"attr"}]],components:{code:function(e){e.inline,e.node,e.noPreview,e.noScroll,e.bgWhite,e.noCode,e.codePen,e.codeSandbox;var t=Object(c.a)(e,m);return Object(f.jsx)("code",Object(n.a)({},t))}}}),Object(f.jsx)(x,{path:a})]})}},772:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(26),c=a.n(n),r=a(41),s=a(172),i=a(12);function u(e){return Object(i.jsx)(s.a,{path:"/packages/core/src/Typography/README.md",renderPage:Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(69).then(a.bind(null,737));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}}),e)})))})}}}]);
//# sourceMappingURL=34.b189cdc0.chunk.js.map