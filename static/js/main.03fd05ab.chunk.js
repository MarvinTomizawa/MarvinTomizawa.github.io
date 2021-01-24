(this["webpackJsonpcurriculo-marvin"]=this["webpackJsonpcurriculo-marvin"]||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),o=t.n(i),c=t(24),a=t.n(c),u=t(18),s=t(6),h=t(8),d=t(10),l=t(9),b=t(11),j=t(12),f={primary:"#368DBC",primaryAccent:"#60DAFB",secondary:"#8DC1E4",secondaryAccent:"#90A8BB",text:"white",body:"#1F232A",mobileBreakingPoint:"750px"},m=function(n){return Object(u.a)({},n)};function p(){var n=Object(j.a)(['\n  * {\n    box-sizing: border-box;\n    /* font-family: "Montserrat", sans-serif; */\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n  }\n  \n  body {\n    background-color: ',";\n    color: ",";\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  #root{\n    height: 100%;\n    width: 100%;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  "]);return p=function(){return n},n}var O=Object(b.b)(p(),(function(n){var e=n.theme;return m(e).body}),(function(n){var e=n.theme;return m(e).text})),v=t(17),x=t(2),y=function(n){Object(d.a)(t,n);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(r.jsx)("main",{children:Object(r.jsx)("h1",{children:"Sobre"})})}}]),t}(i.Component),g=function(n){Object(d.a)(t,n);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(r.jsx)("main",{children:Object(r.jsx)("h1",{children:"Home"})})}}]),t}(i.Component),w=function(n){Object(d.a)(t,n);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(r.jsx)("main",{children:Object(r.jsx)("h1",{children:"NotFound"})})}}]),t}(i.Component);function k(){var n=Object(j.a)(["\n  padding-right: 1rem;\n  font-family: cursive;\n  a {\n    color: ",";\n    &:hover {\n      border-bottom: 2px solid ",";\n    }\n  }\n"]);return k=function(){return n},n}function C(){var n=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n\n  @media(min-width: ","){\n    justify-content: flex-end;\n  }\n"]);return C=function(){return n},n}function B(){var n=Object(j.a)(["\n  font-family: Pacifico, cursive;\n  color: ",";\n"]);return B=function(){return n},n}function F(){var n=Object(j.a)(["\n  align-items: center;\n  background-color: ",";\n  display: flex;\n  height:18%;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n  width: 100%;\n  \n  @media (min-width: ",") {\n    flex-direction: row;\n    height:12%;\n    nav {\n      min-width: 400px;  \n      width: 40%;\n    }\n  }\n"]);return F=function(){return n},n}var S=b.c.header(F(),(function(n){var e=n.theme;return m(e).primary}),(function(n){var e=n.theme;return m(e).mobileBreakingPoint})),P=b.c.h1(B(),(function(n){var e=n.theme;return m(e).text})),A=b.c.ul(C(),(function(n){var e=n.theme;return m(e).mobileBreakingPoint})),M=b.c.li(k(),(function(n){var e=n.theme;return m(e).text}),(function(n){var e=n.theme;return m(e).primary})),D=function(n){Object(d.a)(t,n);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(r.jsxs)(S,{children:[Object(r.jsx)(P,{children:"Marvin Tomizawa"}),Object(r.jsx)("nav",{children:Object(r.jsx)(A,{children:this.mapLinks()})})]})}},{key:"mapLinks",value:function(){return this.props.routes.filter((function(n){return n.show})).map((function(n,e){return Object(r.jsx)(M,{children:Object(r.jsx)(v.b,{to:n.path,children:n.description})},e)}))}}]),t}(i.PureComponent),H=function n(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];Object(s.a)(this,n),this.path=void 0,this.description=void 0,this.component=void 0,this.exact=void 0,this.show=void 0,this.path=e,this.description=t,this.component=r,this.exact=i,this.show=o},E=function(){return Object(r.jsx)("h1",{children:"Contato"})},L=function(){return Object(r.jsx)("h1",{children:"Experiencia"})},N=function(){return Object(r.jsx)("h1",{children:"Habilidades"})},z=function(n){Object(d.a)(t,n);var e=Object(l.a)(t);function t(){var n;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).routes=[new H("/","Home",g,!0),new H("/sobre","Sobre",y),new H("/experiencia","Experiencia",L),new H("/habilidades","Habildades",N),new H("/contato","Contato",E),new H("*","NotFound",w,!1,!1)],n}return Object(h.a)(t,[{key:"render",value:function(){return Object(r.jsxs)(b.a,{theme:Object(u.a)({},f),children:[Object(r.jsx)(O,{}),Object(r.jsxs)(v.a,{children:[Object(r.jsx)(D,{routes:this.routes}),Object(r.jsx)(x.c,{children:this.mapRoutes()})]})]})}},{key:"mapRoutes",value:function(){return this.routes.map((function(n,e){return Object(r.jsx)(x.a,{path:n.path,exact:n.exact,component:n.component},e)}))}}]),t}(o.a.Component),I=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),o(n),c(n)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root")),I()}},[[39,1,2]]]);
//# sourceMappingURL=main.03fd05ab.chunk.js.map