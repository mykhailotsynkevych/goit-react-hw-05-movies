"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{5651:function(t,e,n){n.d(e,{Pg:function(){return p},S8:function(){return v},V0:function(){return l},kq:function(){return d},rj:function(){return u}});var r=n(5861),a=n(7757),i=n.n(a),s=n(4569),o=n.n(s);o().defaults.baseURL="https://api.themoviedb.org/3/";var c="7636cf9d603a531a6043a00a518eaa9c",u=function(){return o().get("trending/movie/day?",{params:{api_key:c}}).then((function(t){return t.data}))},l=function(t){return o().get("search/movie?",{params:{query:t,api_key:c}}).then((function(t){return t.data}))},f="https://api.themoviedb.org/3/";function m(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(i().mark((function t(){var e,n,r,a=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(e,n);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function p(t){return m("".concat(f,"/movie/").concat(t,"?api_key=").concat(c,"&language=en-US"))}function v(t){return m("".concat(f,"/movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"))}function d(t){return m("".concat(f,"/movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US"))}},9155:function(t,e,n){n.d(e,{Z:function(){return o}});var r={filmsList:"MoviesList_filmsList__elvRO",filmsItempPoster:"MoviesList_filmsItempPoster__WnsnI",filmsItemLink:"MoviesList_filmsItemLink__iTHls"},a=n(501),i=n(6871),s=n(184),o=function(t){var e=t.searchMovieResult;console.log(e);var n=(0,i.TH)();return(0,s.jsx)("ul",{className:r.filmsList,children:e.map((function(t){return(0,s.jsx)("li",{className:r.filmsItem,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:n},className:r.filmsItemLink,children:(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title,width:"220",className:r.filmsItempPoster})})},t.id)}))})}},4510:function(t,e,n){n.d(e,{Z:function(){return i}});var r="PageHeading_title__1wPIF",a=n(184);function i(t){var e=t.text;return(0,a.jsx)("h1",{className:r,children:e})}},4797:function(t,e,n){n.r(e);var r=n(885),a=n(4510),i=n(9155),s=n(2791),o=n(5651),c=n(501),u=n(184);e.default=function(){var t=(0,s.useState)(""),e=(0,r.Z)(t,2),n=e[0],l=e[1],f=(0,s.useState)([]),m=(0,r.Z)(f,2),h=m[0],p=m[1],v=(0,c.lr)(),d=(0,r.Z)(v,2),g=d[0],_=d[1],x=g.get("movie");return(0,s.useEffect)((function(){x&&(0,o.V0)(x).then((function(t){var e=t.results;return p(e)})).catch((function(t){return console.log(t)}))}),[x]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{text:"Movies"}),(0,u.jsxs)("form",{className:"SearchForm",onSubmit:function(t){t.preventDefault(),""!==n.trim()?(_({movie:n}),l("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441.")},children:[(0,u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(t){l(t.target.value)},value:n}),(0,u.jsx)("button",{type:"submit",className:"SearchForm-button",children:(0,u.jsx)("span",{style:{fontSize:30},children:"\u26b2"})})]}),x&&(0,u.jsx)(i.Z,{searchMovieResult:h})]})}}}]);
//# sourceMappingURL=797.7a968bcd.chunk.js.map