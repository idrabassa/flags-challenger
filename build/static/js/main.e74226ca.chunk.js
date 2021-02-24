(this["webpackJsonpbase-typescript-appt"]=this["webpackJsonpbase-typescript-appt"]||[]).push([[0],{37:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),s=t(22),r=t.n(s),i=(t(37),t(23)),o=t(6),l=t(13),d=t(14),j=t(28),b=t(29),u=t(17),h=t.n(u),O=t(24),x=t(2),m=a.a.createContext(),f="https://restcountries.eu/rest/v2/all".concat(""),p=function(e){var n=e.children,t=Object(c.useState)(!0),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),d=l[0],j=l[1],b=Object(c.useState)([]),u=Object(o.a)(b,2),p=u[0],g=u[1],v=Object(c.useState)([]),k=Object(o.a)(v,2),N=k[0],w=k[1],C=Object(c.useState)([]),D=Object(o.a)(C,2),S=D[0],y=(D[1],function(){var e=Object(O.a)(h.a.mark((function e(){var n,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f);case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,w(t),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());function M(e){L()}Object(c.useEffect)((function(){y(),R(),window.matchMedia("(prefers-color-scheme:dark)").addListener(M)}),[d]);var L=function(){j(!d),d?document.body.classList.remove("dark-mode"):document.body.classList.add("dark-mode");d.toString;window.localStorage.setItem("bg","exe")},R=function(){var e=[];return N.map((function(n,t){var c={id:t,alphaCode:n.alpha3Code,nameC:n.name};e.push(c)})),e};return Object(x.jsx)(m.Provider,{value:{borders:S,loading:s,flags:N,data:p,isDarkMode:d,getBorders:R,setDarkMode:L,setOffDarkMode:function(){L(!1)},setNewData:function(e){g(e)}},children:n})},g=function(){return Object(c.useContext)(m)},v=t(9);var k=function(){return Object(x.jsx)("div",{children:"is Loading ..."})};var N,w=function(e){var n=e.flags,t=g(),c=t.isDarkMode;return t.loading?Object(x.jsx)(k,{}):n.map((function(e,n){return Object(x.jsx)(v.b,{to:"/flags-challenger/section/sectionflag/".concat(e.name),children:Object(x.jsxs)("div",{className:"flag ".concat(c?"dark-mode":""),children:[Object(x.jsx)("img",{src:e.flag,alt:e.name}),Object(x.jsxs)("div",{className:"flag-info",children:[Object(x.jsx)("h3",{children:e.name}),Object(x.jsxs)("p",{children:["Population: ",e.population]}),Object(x.jsxs)("p",{children:["Region: ",e.region]}),Object(x.jsxs)("p",{children:["Capital: ",e.capital]})]})]})},n)}))},C=d.a.div(N||(N=Object(l.a)(["\nmargin-top: 40px;\n\n"])));var D=function(){var e=g(),n=e.isDarkMode,t=e.flags,a=e.loading,s=Object(c.useState)([t]),r=Object(o.a)(s,2),i=r[0],l=r[1],d=Object(c.useState)(!1),u=Object(o.a)(d,2),h=u[0],O=u[1],m=Object(c.useState)("Filter by Region"),f=Object(o.a)(m,2),p=f[0],v=f[1],N=function(e){if("Filter by Region"===e)console.log("entre aqui"),l(t);else{var n=t.filter((function(n){return n.region===e}));l(n)}};return Object(c.useEffect)((function(){l(t)}),[t]),a?Object(x.jsx)(k,{}):Object(x.jsxs)(C,{className:"flags-section container ".concat(n?"dark-mode":""),children:[Object(x.jsxs)("div",{className:"searcher-menu ".concat(n?"dark-mode":""),children:[Object(x.jsxs)("div",{className:"search ".concat(n?"dark-mode":""),children:[Object(x.jsx)("button",{children:Object(x.jsx)(j.a,{})}),Object(x.jsx)("input",{type:"text",placeholder:"Search for a country...",onChange:function(e){return function(e){var n=e.target.value;if(""===n||void 0===n)v("Filter by Region"),l(t);else{var c=i.filter((function(e){return e.name.toLowerCase().includes(n)}));l(c)}}(e)}})]}),Object(x.jsx)("div",{className:"filter ".concat(n?"dark-mode":""),onClick:function(e){var n=e.target.textContent;""!==n&&(console.log(n),v(n),N(n)),O(!h),e.preventDefault()},children:Object(x.jsxs)("ul",{className:"select ".concat(h?"view":""),children:[Object(x.jsx)("li",{className:"default",children:Object(x.jsxs)("button",{className:"option1 ".concat(n?"dark-mode":""),children:[Object(x.jsx)("p",{children:p}),Object(x.jsx)(b.a,{})]})}),Object(x.jsxs)("ul",{className:n?"dark-mode":"",children:[Object(x.jsx)("li",{children:"Africa"}),Object(x.jsx)("li",{children:"Americas"}),Object(x.jsx)("li",{children:"Asia"}),Object(x.jsx)("li",{children:"Europe"}),Object(x.jsx)("li",{children:"Oceania"})]})]})})]}),Object(x.jsx)("div",{className:"flags-container container ".concat(n?"dark-mode":""),children:Object(x.jsx)(w,{flags:i})})]})},S=t(30);var y=function(){var e=g().isDarkMode;return Object(x.jsxs)("div",{className:"not-found-page ".concat(e?"dark-mode":""),children:[Object(x.jsx)("h1",{children:"OOPS!!"}),Object(x.jsx)("h1",{children:"ERROR 404"}),Object(x.jsx)(S.a,{}),Object(x.jsx)("h1",{children:"PAGE NOT FOUND"}),Object(x.jsx)(v.b,{to:"/",className:"btn ".concat(e?"dark-mode":""),children:"Click here to go Home Page"})]})},M=t(3),L=t(31);var R,E=function(){var e=Object(M.f)().name,n=Object(c.useState)({}),t=Object(o.a)(n,2),a=t[0],s=t[1],r=g(),i=r.isDarkMode,l=r.flags,d=(r.borders,r.getBorders),j=Object(c.useState)({}),b=Object(o.a)(j,2);return b[0],b[1],Object(c.useEffect)((function(){var n=l.find((function(n){return n.name===e}));s(n)}),[l,e]),void 0===a||a==={}?Object(x.jsx)(y,{}):(console.log(d()),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)(v.b,{className:"btn back ".concat(i?"dark-mode":""),to:"/flags-challenger/section",children:[Object(x.jsx)(L.a,{}),Object(x.jsx)("p",{children:"Back"})]}),Object(x.jsxs)("div",{className:"specify-flag-info ".concat(i?"dark-mode":""),children:[Object(x.jsx)("img",{className:"preview",src:a.flag,alt:e}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsxs)("div",{className:"info-upper",children:[Object(x.jsx)("h1",{className:"title-name",children:e}),Object(x.jsxs)("div",{className:"sections",children:[Object(x.jsxs)("div",{className:"info-section1",children:[Object(x.jsxs)("p",{children:["Native Name: ",a.nativeName]}),Object(x.jsxs)("p",{children:["Population: ",a.population]}),Object(x.jsxs)("p",{children:["Region: ",a.region]}),Object(x.jsxs)("p",{children:["Sub Region: ",a.Subregion]}),Object(x.jsxs)("p",{children:["Capital: ",a.capital]})]}),Object(x.jsxs)("div",{className:"info-section2",children:[Object(x.jsxs)("p",{children:["Top Level Domain:",void 0===a.topLevelDomain?"undefined":a.topLevelDomain.map((function(e,n){return a.topLevelDomain.length>1&&n<a.topLevelDomain.length-1?(console.log(n),"".concat(e,",")):e}))]}),Object(x.jsxs)("p",{children:["Currencies:",void 0===a.currencies?"undefined":a.currencies.map((function(e,n){return a.currencies.length>1&&n<a.currencies.length-1?"".concat(e.name,","):e.name}))]}),Object(x.jsxs)("p",{children:["Languages:",void 0===a.languages?"undefined":a.languages.map((function(e,n){return a.languages.length>1&&n<a.languages.length-1?"".concat(e.name,","):e.name}))]})]})]})]}),Object(x.jsxs)("div",{className:"info-downner",children:[Object(x.jsx)("p",{children:"Border Countries:"}),Object(x.jsx)("div",{className:"border-countries",children:void 0===a.borders?"undefined":a.borders.map((function(e){return d().map((function(n,t){if(e===n.alphaCode)return Object(x.jsx)(v.b,{to:"/flags-challenger/section/sectionflag/".concat(n.nameC),className:"btn countries ".concat(i?"dark-mode":""),children:Object(x.jsx)("p",{children:n.nameC.split(" ",1)})},t)}))}))})]})]})]})]}))},P=t(32),B=d.a.nav(R||(R=Object(l.a)(["\n      \n      background-color: var(--clr-white-text-dark-mode-elements-ligth-mode);\n      height: 80px;\n      box-shadow: var(--light-shadow);\n      \n      p{\n        margin-left: 5px;\n      }\n       .container{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        height: 100%;\n      }\n      \n       div button{\n        border: none;\n        background: none;\n        display: flex;\n        align-items: center;\n        cursor:pointer;\n      }\n      &.dark-mode{\n        background-color: var(--clr-dark-blue-elements-dark-mode);\n        color: var(--clr-white-text-dark-mode-elements-ligth-mode);\n      }\n      &.dark-mode div button{\n        color: var(--clr-white-text-dark-mode-elements-ligth-mode);\n      }\n      @media screen and (min-width: 355px) {}\n\n"])));var A=function(){var e=g(),n=e.setDarkMode,t=e.isDarkMode;return Object(x.jsx)(B,{className:"navbar ".concat(t?"dark-mode":""),children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"Where in the world?"}),Object(x.jsxs)("button",{id:"dark-mode",onClick:n,children:[Object(x.jsx)(P.a,{}),Object(x.jsx)("p",{children:"Dark Mode"})]})]})})};var F=function(){return Object(x.jsx)(v.a,{children:Object(x.jsxs)(M.c,{children:[Object(x.jsxs)(M.a,{exact:!0,path:"/",children:[Object(x.jsx)(A,{}),Object(x.jsx)(D,{})]}),Object(x.jsxs)(M.a,{exact:!0,path:"/flags-challenger",children:[Object(x.jsx)(A,{}),Object(x.jsx)(D,{})]}),Object(x.jsxs)(M.a,{exact:!0,path:"/flags-challenger/section",children:[Object(x.jsx)(A,{}),Object(x.jsx)(D,{})]}),Object(x.jsxs)(M.a,Object(i.a)({path:"/flags-challenger/section/sectionflag/:name",children:Object(x.jsx)(E,{})},"children",[Object(x.jsx)(A,{}),Object(x.jsx)(E,{})])),Object(x.jsx)(M.a,{path:"*",children:Object(x.jsx)(y,{})})]})})};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(p,{children:Object(x.jsx)(F,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.e74226ca.chunk.js.map