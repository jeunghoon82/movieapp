(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(e,t,c){e.exports={container:"Home_container__2Nk4W",loader:"Home_loader__3v0IQ",movies:"Home_movies__2Tepf",navBar:"Home_navBar__3X7Ji"}},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(17),r=c.n(a),s=c(5),j=c(2),o=c(7),l=c.n(o),d=c(12),b=c(6),u=c(8),h=c.n(u),v=c(0);var _=function(){var e=Object(j.e)().id,t=Object(n.useState)(!0),c=Object(b.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)(),o=Object(b.a)(r,2),u=o[0],_=o[1],x=function(){var t=Object(d.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,_(c.data.movie),a(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()}),[]),Object(v.jsx)("div",{class:h.a.detail,children:i?Object(v.jsx)("h1",{children:"Loading..."}):Object(v.jsxs)("div",{class:h.a.detailBox,children:[Object(v.jsx)("img",{src:u.medium_cover_image,alt:u.title}),Object(v.jsx)("h1",{children:u.title}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"\uc601\ud654\uc124\uba85 : "}),Object(v.jsx)("p",{children:u.description_full})]}),Object(v.jsxs)("div",{class:h.a.infoBox,children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("span",{children:["\uac1c\ubd09\uc5f0\ub3c4 : ",u.year]}),Object(v.jsxs)("span",{children:["\u2b50\ud3c9\uc810\u2b50 : ",u.rating]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"\uc7a5\ub974 : "}),Object(v.jsx)("ul",{children:u.genres.map((function(e){return Object(v.jsx)("li",{children:e},e)}))})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"\ub9c1\ud06c : "}),u.torrents[0].url?Object(v.jsx)("a",{href:u.torrents[0].url,target:"_blank",id:h.a.aLink,children:"\ud1a0\ub80c\ud2b8 \ub2e4\uc6b4\ub85c\ub4dc"}):null,u.yt_trailer_code?Object(v.jsx)("a",{href:"https://youtu.be/".concat(u.yt_trailer_code),target:"_blank",id:h.a.aLink,children:"\uc720\ud29c\ube0c \ud2b8\ub808\uc77c\ub7ec"}):null]})]}),Object(v.jsx)("button",{children:Object(v.jsx)(s.b,{to:"/",children:"\u274c"})})]})})},x=c(9),O=c.n(x);var m=function(e){var t=e.id,c=e.coverImg,n=e.title,i=e.year,a=e.summary,r=e.genres;return Object(v.jsxs)("div",{className:O.a.movie,children:[Object(v.jsx)(s.b,{to:"/movie/".concat(t),children:Object(v.jsx)("img",{src:c,alt:n,className:O.a.movie__img})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:O.a.movie_title,children:Object(v.jsx)(s.b,{to:"/movie/".concat(t),children:n})}),Object(v.jsx)("h3",{className:O.a.movie_year,children:i}),Object(v.jsx)("p",{children:a.length>235?"".concat(a.slice(0,235),"..."):a}),Object(v.jsx)("ul",{className:O.a.movie_genres,children:r.map((function(e){return Object(v.jsx)("li",{children:e},e)}))})]})]})},p=c(11),f=c.n(p);var g=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)("9"),r=Object(b.a)(a,2),j=r[0],o=r[1],u=Object(n.useState)([]),h=Object(b.a)(u,2),_=h[0],x=h[1],O=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=".concat(j,"&sort_by=year"));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,x(t.data.movies),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()}),[j]),Object(v.jsx)("div",{className:f.a.container,children:c?Object(v.jsx)("div",{className:f.a.loader,children:Object(v.jsx)("span",{children:"Loading..."})}):Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:f.a.navBar,children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(s.b,{to:"/",children:"home"})}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"\ud3c9\uc810 "}),Object(v.jsxs)("select",{value:j,onChange:function(e){return o(e.target.value),i(!0),j},children:[Object(v.jsx)("option",{value:"9",children:" 9\uc810 "}),Object(v.jsx)("option",{value:"8",children:" 8\uc810 "}),Object(v.jsx)("option",{value:"7",children:" 7\uc810 "}),Object(v.jsx)("option",{value:"6",children:" 6\uc810 "}),Object(v.jsx)("option",{value:"5",children:" 5\uc810 "}),Object(v.jsx)("option",{value:"4",children:" 4\uc810 "})]}),Object(v.jsx)("span",{children:" \uc774\uc0c1"})]})]})}),Object(v.jsx)("div",{className:f.a.movies,children:_.map((function(e){return Object(v.jsx)(m,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})]})})};var y=function(){return Object(v.jsxs)(s.a,{children:[Object(v.jsx)(j.a,{path:"/movie/:id",children:Object(v.jsx)(_,{})}),Object(v.jsx)(j.a,{path:"/",children:Object(v.jsx)(g,{})})]})};c(34);r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root"))},8:function(e,t,c){e.exports={detail:"Detail_detail__1HN9k",aLink:"Detail_aLink__H2XZQ",detailBox:"Detail_detailBox__3_a03",infoBox:"Detail_infoBox__16EPD"}},9:function(e,t,c){e.exports={movie:"Movie_movie__2zuhI",movie__img:"Movie_movie__img__2d07c",movie__title:"Movie_movie__title__1NE9o",movie__year:"Movie_movie__year__2rnuK",movie__genres:"Movie_movie__genres__2h1G3"}}},[[35,1,2]]]);
//# sourceMappingURL=main.66b2fac9.chunk.js.map