(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(e,t,n){e.exports={container:"Home_container__2Nk4W",loader:"Home_loader__3v0IQ",movies:"Home_movies__2Tepf"}},17:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(18),s=n.n(r),a=n(5),o=n(2),j=n(6),m=n.n(j),u=n(10),l=n(7),b=n(14),d=n(1);var v=function(){var e=Object(o.e)().id,t=Object(b.useState)(!0),n=Object(l.a)(t,2),i=n[0],r=n[1],s=Object(b.useState)(),j=Object(l.a)(s,2),v=j[0],_=j[1],h=function(){var t=Object(u.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,_(n.data.movie),r(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(v),Object(c.useEffect)((function(){h()}),[]),Object(d.jsx)("div",{children:i?Object(d.jsx)("h1",{children:"Loading..."}):Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:v.medium_cover_image,alt:v.title}),Object(d.jsx)("h2",{children:v.title}),Object(d.jsxs)("p",{children:["\uac1c\ubd09\uc5f0\ub3c4 : ",v.year," \ud3c9\uc810 : ",v.rating," \u2b50"]}),Object(d.jsxs)("p",{children:["\uc601\ud654\uc124\uba85 : ",v.description_full]}),Object(d.jsx)("ul",{children:v.genres.map((function(e){return Object(d.jsx)("li",{children:e},e)}))}),Object(d.jsx)("p",{children:v.torrents[0].url}),Object(d.jsx)(a.b,{to:"/",children:"back"})]})})},_=n(8),h=n.n(_);var O=function(e){var t=e.id,n=e.coverImg,c=e.title,i=e.year,r=e.summary,s=e.genres;return Object(d.jsxs)("div",{className:h.a.movie,children:[Object(d.jsx)("img",{src:n,alt:c,className:h.a.movie__img}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:h.a.movie__title,children:Object(d.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(d.jsx)("h3",{className:h.a.movie__year,children:i}),Object(d.jsx)("p",{children:r.length>235?"".concat(r.slice(0,235)," ..."):r}),Object(d.jsx)("ul",{className:h.a.movie__genres,children:s.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})]})]})},x=n(11),p=n.n(x);var f=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),a=s[0],o=s[1],j=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(d.jsx)("div",{className:p.a.container,children:n?Object(d.jsx)("div",{className:p.a.loader,children:Object(d.jsx)("span",{children:"Loading..."})}):Object(d.jsx)("div",{className:p.a.movies,children:a.map((function(e){return Object(d.jsx)(O,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var g=function(){return Object(d.jsx)("div",{className:"about__container",children:Object(d.jsx)("span",{children:"About this page"})})};var y=function(){return Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)(a.b,{to:"/",children:"Home"}),Object(d.jsx)(a.b,{to:"/about",children:"About"})]})};n(17);var N=function(){return Object(d.jsxs)(a.a,{children:[Object(d.jsx)(y,{}),Object(d.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(d.jsx)(o.a,{path:"/about",component:g}),Object(d.jsx)(o.a,{path:"/movie/:id",component:v})]})};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={movie:"Movie_movie__2zuhI",movie__img:"Movie_movie__img__2d07c",movie__title:"Movie_movie__title__1NE9o",movie__year:"Movie_movie__year__2rnuK",movie__genres:"Movie_movie__genres__2h1G3"}}},[[35,1,2]]]);
//# sourceMappingURL=main.1d072813.chunk.js.map