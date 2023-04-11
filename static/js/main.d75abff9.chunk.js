(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(7),l=c(2),d=c(5),i=c.n(d),o=c(1),r=c.n(o),j=(c(14),c(15),c(8)),u=c(3),b=c.n(u);function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=c(0),O=function(e){var t=e.todos,c=e.setUser,s=e.setSelectedTodoId,a=function(e,t){var a;s(t),(a=e,h("/users/".concat(a))).then((function(e){c(Object(j.a)({},e))}))};return Object(m.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{className:"fas fa-check"})})}),Object(m.jsx)("th",{children:"Title"}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){return Object(m.jsxs)("tr",{"data-cy":"todo",className:"todo",children:[Object(m.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(m.jsx)("td",{className:"is-vcentered",children:Object(m.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(m.jsx)("i",{className:"fas fa-check"})})}):Object(m.jsx)("td",{className:"is-vcentered"}),Object(m.jsx)("td",{className:"is-vcentered is-expanded",children:Object(m.jsx)("p",{className:b()({"has-text-success":e.completed,"has-text-danger":!1===e.completed}),children:e.title})}),Object(m.jsx)("td",{className:"has-text-right is-vcentered",children:Object(m.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e.userId,e.id)},children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},x=function(e){var t=e.searchQueryTodo,c=e.handleFilterTodos,s=e.setFilteredTodos,a=Object(o.useState)(""),n=Object(l.a)(a,2),d=n[0],i=n[1];return Object(m.jsxs)("form",{className:"field has-addons",children:[Object(m.jsx)("p",{className:"control",children:Object(m.jsx)("span",{className:"select",children:Object(m.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return c(e.target.value)},children:[Object(m.jsx)("option",{value:"all",children:"All"}),Object(m.jsx)("option",{value:"active",children:"Active"}),Object(m.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(m.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(m.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:d,onChange:function(e){i(e.target.value);var c=t.filter((function(t){return t.title.toLowerCase().includes(e.target.value.trim().toLowerCase())}));s(c)}}),Object(m.jsx)("span",{className:"icon is-left",children:Object(m.jsx)("i",{className:"fas fa-magnifying-glass"})}),0!==d.trim().length&&Object(m.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(m.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i("")}})})]})]})},f=(c(17),function(){return Object(m.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(m.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.user,c=e.setUser,s=e.todos,a=e.selectedTodoId,n=s.find((function(e){return e.id===a}))||null;return Object(m.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(m.jsx)("div",{className:"modal-background"}),n?Object(m.jsxs)("div",{className:"modal-card",children:[Object(m.jsxs)("header",{className:"modal-card-head",children:[Object(m.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===n||void 0===n?void 0:n.id]}),Object(m.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c({id:0,name:"",email:"",phone:""})}})]}),Object(m.jsxs)("div",{className:"modal-card-body",children:[Object(m.jsx)("p",{className:"block","data-cy":"modal-title",children:null===n||void 0===n?void 0:n.title}),Object(m.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(m.jsx)("strong",{className:b()({"has-text-success":null===n||void 0===n?void 0:n.completed,"has-text-danger":!1===(null===n||void 0===n?void 0:n.completed)}),children:null!==n&&void 0!==n&&n.completed?"Done":"Planned"})," by ",Object(m.jsx)("a",{href:"mailto:".concat(t.email),children:t.name})]})]})]}):Object(m.jsx)(f,{})]})},v=r.a.memo((function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)([]),d=Object(l.a)(a,2),r=d[0],j=d[1],u=Object(o.useState)(null),b=Object(l.a)(u,2),v=b[0],N=b[1],y=Object(o.useState)([]),g=Object(l.a)(y,2),k=g[0],T=g[1],S=Object(o.useState)({id:0,name:"",email:"",phone:""}),w=Object(l.a)(S,2),C=w[0],I=w[1],F=Object(o.useState)(!1),_=Object(l.a)(F,2),L=_[0],U=_[1];Object(o.useEffect)((function(){h("/todos").then((function(e){s(e),j(e),U(!0)}))}),[]);var B=function(){var e=Object(n.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],e.t0=t,e.next="active"===e.t0?4:"completed"===e.t0?6:8;break;case 4:return s=c.filter((function(e){return!e.completed})),e.abrupt("break",9);case 6:return s=c.filter((function(e){return e.completed})),e.abrupt("break",9);case 8:s=c;case 9:return e.next=11,j(s);case 11:T(s);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h1",{className:"title",children:"Todos:"}),Object(m.jsx)("div",{className:"block",children:Object(m.jsx)(x,{searchQueryTodo:k,handleFilterTodos:B,setFilteredTodos:j})}),Object(m.jsxs)("div",{className:"block",children:[!L&&Object(m.jsx)(f,{}),Object(m.jsx)(O,{todos:r,setUser:I,setSelectedTodoId:N})]})]})})}),0!==C.id?Object(m.jsx)(p,{user:C,todos:r,setUser:I,selectedTodoId:v}):""]})}));a.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d75abff9.chunk.js.map