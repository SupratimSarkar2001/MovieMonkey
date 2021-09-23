(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(22),i=c.n(n),l=(c(31),c(10)),r=c.n(l),d=c(23),o=c(3),j=c(4),m=(c(33),c(0));var b,x,u=function(e){var t=e.movie,c=t.Title,a=t.Year,s=t.imdbID,n=t.Type,i=t.Poster;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"card my-3",children:[Object(m.jsx)("img",{src:i,className:"card-img-top",alt:c}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:c}),Object(m.jsxs)("p",{className:"card-text",children:["Year: ",a]}),Object(m.jsxs)("p",{className:"card-text",children:["Type: ",n]}),Object(m.jsx)("href",{className:"btn btn-success",onClick:function(){e.onMovieSelect(s),window.scrollTo({top:0,behavior:"smooth"})},children:"Details"})]})]})})},v=c(5),h=c.n(v),O=c(6),p=O.a.div(b||(b=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 20px 30px;\n  justify-content: center;\n  border-bottom: 1px solid lightgray;\n"]))),N=function(e){var t=Object(a.useState)(),c=Object(o.a)(t,2),s=c[0],n=c[1],i=e.selectedMovie;return Object(a.useEffect)((function(){h.a.get("https://www.omdbapi.com/?i=".concat(i,"&apikey=").concat(f)).then((function(e){return n(e.data)}))}),[i]),Object(m.jsx)(p,{children:s?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"card mb-3",children:Object(m.jsxs)("div",{className:"row g-0",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("img",{src:null===s||void 0===s?void 0:s.Poster,className:"img-fluid rounded-start",alt:null===s||void 0===s?void 0:s.Title})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:null===s||void 0===s?void 0:s.Title}),Object(m.jsx)("p",{className:"card-text",children:null===s||void 0===s?void 0:s.Plot}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.Actors})}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.Director})}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.Language})}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.Released})}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.Genre})}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.Runtime})}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.imdbRating})})]})})]})})}):"Loading..."})},f="f5981354",g=O.a.img(x||(x=Object(j.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 150px;\n  opacity: 50%;\n"])));var w=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(o.a)(n,2),l=i[0],j=i[1],b=Object(a.useState)(),x=Object(o.a)(b,2),v=x[0],O=x[1],p=Object(a.useState)(),w=Object(o.a)(p,2),y=w[0],S=w[1],k=function(){var e=Object(d.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.omdbapi.com/?s=".concat(t,"&apikey=").concat(f));case 2:c=e.sent,j(c.data.Search);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("href",{className:"navbar-brand",children:"MovieMonk"}),Object(m.jsx)("form",{className:"d-flex",children:Object(m.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search",value:c,onChange:function(e){O(""),clearTimeout(y),s(e.target.value);var t=setTimeout((function(){return k(e.target.value)}),500);S(t)},"aria-label":"Search"})})]})})}),v&&Object(m.jsx)(N,{selectedMovie:v,onMovieSelect:O}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:(null===l||void 0===l?void 0:l.length)?l.map((function(e,t){return Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(u,{movie:e,onMovieSelect:O},t)})})):Object(m.jsxs)("div",{className:"container col-4 d-flex justify-content-center text-center",children:["   ",Object(m.jsx)(g,{src:"/react-movie-app/images.png"})]})})})]})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.5f5b2729.chunk.js.map