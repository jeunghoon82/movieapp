(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(e,t,c){e.exports={container:"Home_container__2Nk4W",loader:"Home_loader__3v0IQ",movies:"Home_movies__2Tepf"}},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(17),s=c.n(r),a=c(5),o=c(2),j=c(6),l=c.n(j),m=c(10),d=c(7),u=c(14),v=c(1);var _=function(){var e=Object(o.f)().id,t=Object(u.useState)(!0),c=Object(d.a)(t,2),i=c[0],r=c[1],s=Object(u.useState)(),j=Object(d.a)(s,2),_=j[0],b=j[1],h=function(){var t=Object(m.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,b(c.data.movie),r(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(_),Object(n.useEffect)((function(){h()}),[]),Object(v.jsx)("div",{children:i?Object(v.jsx)("h1",{children:"Loading..."}):Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:_.medium_cover_image,alt:_.title}),Object(v.jsx)("h2",{children:_.title}),Object(v.jsxs)("p",{children:["\uac1c\ubd09\uc5f0\ub3c4 : ",_.year," \ud3c9\uc810 : ",_.rating," \u2b50"]}),Object(v.jsxs)("p",{children:["\uc601\ud654\uc124\uba85 : ",_.description_full]}),Object(v.jsx)("ul",{children:_.genres.map((function(e){return Object(v.jsx)("li",{children:e},e)}))}),Object(v.jsx)("p",{children:_.torrents[0].url}),Object(v.jsx)(a.b,{to:"/",children:"back"})]})})},b=c(8),h=c.n(b);var O=function(e){var t=e.id,c=e.coverImg,n=e.title,i=e.year,r=e.summary,s=e.genres;return Object(v.jsxs)("div",{className:h.a.movie,children:[Object(v.jsx)("img",{src:c,alt:n,className:h.a.movie__img}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:h.a.movie__title,children:Object(v.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(v.jsx)("h3",{className:h.a.movie__year,children:i}),Object(v.jsx)("p",{children:r.length>235?"".concat(r.slice(0,235)," ..."):r}),Object(v.jsx)("ul",{className:h.a.movie__genres,children:s.map((function(e){return Object(v.jsx)("li",{children:e},e)}))})]})]})},x=c(11),p=c.n(x);var f=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),a=s[0],o=s[1],j=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[]),Object(v.jsx)("div",{className:p.a.container,children:c?Object(v.jsx)("div",{className:p.a.loader,children:Object(v.jsx)("span",{children:"Loading..."})}):Object(v.jsx)("div",{className:p.a.movies,children:a.map((function(e){return Object(v.jsx)(O,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var g=function(){return Object(v.jsx)(a.a,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/hello",children:Object(v.jsx)("h1",{children:"Hello"})}),Object(v.jsx)(o.a,{path:"/movie/:id",children:Object(v.jsx)(_,{})}),Object(v.jsx)(o.a,{path:"/",children:Object(v.jsx)(f,{})})]})})};c(34);s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root"))},8:function(e,t,c){e.exports={movie:"Movie_movie__2zuhI",movie__img:"Movie_movie__img__2d07c",movie__title:"Movie_movie__title__1NE9o",movie__year:"Movie_movie__year__2rnuK",movie__genres:"Movie_movie__genres__2h1G3"}}},[[35,1,2]]]);
//# sourceMappingURL=main.c03fbf54.chunk.js.map