"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[605],{5651:function(e,n,t){t.d(n,{Pg:function(){return f},S8:function(){return x},V0:function(){return l},kq:function(){return v},rj:function(){return u}});var r=t(5861),i=t(7757),a=t.n(i),c=t(4569),s=t.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var o="7636cf9d603a531a6043a00a518eaa9c",u=function(){return s().get("trending/movie/day?",{params:{api_key:o}}).then((function(e){return e.data}))},l=function(e){return s().get("search/movie?",{params:{query:e,api_key:o}}).then((function(e){return e.data}))},d="https://api.themoviedb.org/3/";function h(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function e(){var n,t,r,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return h("".concat(d,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"))}function x(e){return h("".concat(d,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function v(e){return h("".concat(d,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"))}},3605:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r,i=t(885),a=t(6871),c=t(2791),s=t(5651),o=t(501),u={},l=t(168),d=t(9128),h=t(6444),p=t(184),f=(0,h.ZP)(o.rU)(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    color: #2196f3;\n          transform: scale(1.01);\n        text-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%), 0 1px 1px rgb(0 0 0 / 20%);\n  }\n"]))),x=function(e){var n=e.to,t=e.children;return(0,p.jsxs)(f,{to:n,children:[(0,p.jsx)(d.jTe,{size:"24"}),t]})},v=function(){var e,n,t=(0,c.useState)({}),r=(0,i.Z)(t,2),l=r[0],d=r[1],h=(0,a.UO)().id,f=(0,a.TH)(),v=null!==(e=null===(n=f.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,c.useEffect)((function(){(0,s.Pg)(h).then(d)}),[h]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x,{to:v,children:"Back to movies"}),l&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:u.moviePage,children:[l.poster_path&&(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.poster_path),alt:l.title,width:"250"}),(0,p.jsxs)("div",{className:u.movieDiscription,children:[(0,p.jsxs)("h1",{children:[l.title," "]}),l.release_date&&(0,p.jsxs)("h2",{children:["Year: ",l.release_date.slice(0,4)," "]}),(0,p.jsx)("h4",{children:"Overview"}),(0,p.jsx)("p",{children:l.overview}),(0,p.jsx)("h4",{children:"Genres"}),l.genres&&(0,p.jsx)("ul",{children:l.genres.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)("p",{children:e.name})},e.id)}))}),(0,p.jsx)("h4",{children:"Rating"}),l.vote_average&&(0,p.jsxs)("p",{children:[" ",l.vote_average.toFixed(1)," "]})]})]}),(0,p.jsx)("h4",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"cast",state:{from:f},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"reviews",state:{from:f},children:"Reviews"})})]}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading subpage..."}),children:(0,p.jsx)(a.j3,{})})]})]})}}}]);
//# sourceMappingURL=605.43b79c4d.chunk.js.map