(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(e,t,c){e.exports={container:"Home_container__2Nk4W",loader:"Home_loader__3v0IQ",movies:"Home_movies__2Tepf"}},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(16),a=c.n(i),s=c(5),o=c(2),j=c(6),l=c.n(j),m=c(10),u=c(7),d=c(1);var b=function(){var e=Object(o.f)().id,t=Object(n.useState)(!0),c=Object(u.a)(t,2),r=c[0],i=c[1],a=Object(n.useState)(),s=Object(u.a)(a,2),j=s[0],b=s[1],_=function(){var t=Object(m.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,b(c.data.movie),i(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){_()}),[]),Object(d.jsx)("div",{children:r?Object(d.jsx)("h1",{children:"Loading..."}):Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:j.medium_cover_image,alt:j.title}),Object(d.jsx)("h2",{children:j.title}),Object(d.jsxs)("p",{children:["\uac1c\ubd09\uc5f0\ub3c4 : ",j.year," \ud3c9\uc810 : ",j.rating," \u2b50"]}),Object(d.jsxs)("p",{children:["\uc601\ud654\uc124\uba85 : ",j.summary]}),Object(d.jsx)("ul",{children:j.genres.map((function(e){return Object(d.jsx)("li",{children:e},e)}))}),Object(d.jsx)("p",{children:j.torrents[0].url?Object(d.jsx)("a",{href:j.torrents[0].url,target:"_blank",children:" \ud1a0\ub80c\ud2b8 \ub2e4\uc6b4\ub85c\ub4dc "}):null}),Object(d.jsx)("p",{children:j.yt_trailer_code?Object(d.jsx)("a",{href:"https://youtu.be/".concat(j.yt_trailer_code),target:"_blank",children:" \uc720\ud29c\ube0c \ud2b8\ub808\uc77c\ub7ec "}):null})]})})},_=c(8),v=c.n(_);var h=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.year,i=e.summary,a=e.genres;return Object(d.jsxs)("div",{className:v.a.movie,children:[Object(d.jsx)(s.b,{to:"/movie/".concat(t),children:Object(d.jsx)("img",{src:c,alt:n,className:v.a.movie__img})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:v.a.movie_title,children:Object(d.jsx)(s.b,{to:"/movie/".concat(t),children:n})}),Object(d.jsx)("h3",{className:v.a.movie_year,children:r}),Object(d.jsx)("p",{children:i.length>235?"".concat(i.slice(0,235),"..."):i}),Object(d.jsx)("ul",{className:v.a.movie_genres,children:a.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})]})]})},O=c(11),x=c.n(O);var p=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),a=Object(u.a)(i,2),s=a[0],o=a[1],j=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[]),Object(d.jsx)("div",{className:x.a.container,children:c?Object(d.jsx)("div",{className:x.a.loader,children:Object(d.jsx)("span",{children:"Loading..."})}):Object(d.jsx)("div",{className:x.a.movies,children:s.map((function(e){return Object(d.jsx)(h,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var f=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/abot-us",children:Object(d.jsx)("h1",{children:"Hello"})}),Object(d.jsx)(o.a,{path:"/movie/:id",children:Object(d.jsx)(b,{})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(p,{})})]})})};c(33);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))},8:function(e,t,c){e.exports={movie:"Movie_movie__2zuhI",movie__img:"Movie_movie__img__2d07c",movie__title:"Movie_movie__title__1NE9o",movie__year:"Movie_movie__year__2rnuK",movie__genres:"Movie_movie__genres__2h1G3"}}},[[34,1,2]]]);
//# sourceMappingURL=main.9e2f97a6.chunk.js.map