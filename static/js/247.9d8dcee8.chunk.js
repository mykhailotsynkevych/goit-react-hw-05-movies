"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{5651:function(n,e,t){t.d(e,{Pg:function(){return l},S8:function(){return m},V0:function(){return f},kq:function(){return g},rj:function(){return s}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="7636cf9d603a531a6043a00a518eaa9c",s=function(){return i().get("trending/movie/day?",{params:{api_key:o}}).then((function(n){return n.data}))},f=function(n){return i().get("search/movie?",{params:{query:n,api_key:o}}).then((function(n){return n.data}))},p="https://api.themoviedb.org/3/";function h(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function l(n){return h("".concat(p,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))}function m(n){return h("".concat(p,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))}function g(n){return h("".concat(p,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"))}},1247:function(n,e,t){t.r(e),t.d(e,{default:function(){return o}});var r=t(885),a=t(6871),c=t(2791),u=t(5651),i=t(184);function o(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],o=e[1],s=(0,a.UO)().id;return(0,c.useEffect)((function(){(0,u.S8)(s).then((function(n){return o(n.cast)}))}),[s]),(0,i.jsx)(i.Fragment,{children:t&&(0,i.jsx)("ul",{children:t.map((function(n){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:"",alt:""}),(0,i.jsx)("p",{children:n.original_name}),(0,i.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})})}}}]);
//# sourceMappingURL=247.9d8dcee8.chunk.js.map