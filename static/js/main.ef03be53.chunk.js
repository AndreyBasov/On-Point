(this["webpackJsonpon-point"]=this["webpackJsonpon-point"]||[]).push([[0],{10:function(e,s,c){"use strict";c.r(s);var a=c(0),t=c(1),i=c.n(t),r=c(4),l=c.n(r),n=c(3),_=function(e){var s={position:"absolute",top:"".concat(e.y,"%"),left:"".concat(e.x,"%"),height:"".concat(e.size/15,"vw"),width:"".concat(e.size/15,"vw"),transform:"rotate(".concat(e.angle,"deg)"),filter:"blur(".concat(e.blur,"px)")};return Object(a.jsx)("img",{src:"../public/img/ice5.png",style:s,alt:"ice"})},j=function(){return Object(a.jsxs)("div",{className:"page1__transition",children:[Object(a.jsx)("h1",{className:"page1__transition__text",children:"\u041b\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u0432\u043d\u0438\u0437"}),Object(a.jsx)("img",{className:"page1__transition__arrow",src:"/img/arrow.png",alt:"light"})]})},g=function(){var e=Object(t.useState)(50),s=Object(n.a)(e,2),c=s[0],i=s[1];Object(t.useEffect)((function(){var e=document.querySelector(".page1"),s=document.querySelector(".page2"),c=document.querySelector(".page3"),a={root:null,threshold:.05},t=function(e){return function(s){Object(n.a)(s,1)[0].isIntersecting&&(document.querySelector(".navbar").childNodes.forEach((function(e){e.classList.remove("active")})),document.querySelector(".circle".concat(e)).classList.add("active"),window.scrollTo({left:0,top:(e-1)*document.querySelector(".page2").offsetHeight,behavior:"smooth"}))}};new IntersectionObserver(t(1),a).observe(e),new IntersectionObserver(t(2),a).observe(s),new IntersectionObserver(t(3),a).observe(c)}),[]),Object(t.useEffect)((function(){document.querySelector(".slider").style.backgroundImage="linear-gradient(\n      to right,\n      #dff3e3 0%,\n      #dff3e3 ".concat(c,"%,\n      grey ").concat(c,"%,\n      grey 100%\n    )")}),[c]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{className:"navbar__circle circle1 active"}),Object(a.jsx)("div",{className:"navbar__circle circle2"}),Object(a.jsx)("div",{className:"navbar__circle circle3"})]}),Object(a.jsxs)("div",{className:"page1",children:[Object(a.jsx)("img",{className:"background-img",src:"img/page1.jpg",alt:"page1"}),Object(a.jsx)("h1",{className:"page1__text",children:"\u0412\u0441\u0435\u0433\u0434\u0430 \u043b\u0438 \u0446\u0435\u043b\u0438 \u0442\u0435\u0440\u0430\u043f\u0438\u0438 \u0421\u04142 \u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438?"}),Object(a.jsxs)("div",{className:"page1__point1",children:[Object(a.jsx)("h1",{className:"page1__description",children:"\u0413\u0438\u043f\u043e\u0433\u043b\u0438\u043a\u0435\u043c\u0438\u044f"}),Object(a.jsx)("div",{className:"page1__circle page1__circle__circle1"})]}),Object(a.jsxs)("div",{className:"page1__point2",children:[Object(a.jsx)("h1",{className:"page1__description page1__description-2",children:"\u0426\u0435\u043b\u044c \u043f\u043e HbA1c"}),Object(a.jsx)("div",{className:"page1__circle page1__circle__circle2"})]}),Object(a.jsxs)("div",{className:"page1__point3",children:[Object(a.jsx)("h1",{className:"page1__description",children:"\u041e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u044f \u0421\u0414"}),Object(a.jsx)("div",{className:"page1__circle page1__circle__circle3"})]}),Object(a.jsxs)("div",{className:"page1__point4",children:[Object(a.jsx)("h1",{className:"page1__description",children:"\u0421\u0421 \u0440\u0438\u0441\u043a\u0438"}),Object(a.jsx)("div",{className:"page1__circle page1__circle__circle4"})]}),Object(a.jsx)(j,{})]}),Object(a.jsxs)("div",{className:"page2",children:[Object(a.jsx)("img",{className:"background-img",src:"/img/page2.png",alt:"page2"}),Object(a.jsx)("h1",{className:"page2__text",children:"\u041e\u0441\u043d\u043e\u0432\u0430 \u0442\u0435\u0440\u0430\u043f\u0438\u0438 -\u043f\u0430\u0442\u043e\u0433\u0435\u043d\u0435\u0437 \u0421\u04142"}),Object(a.jsx)(_,{x:"9",y:"21",size:"40",blur:"1",angle:"30"}),Object(a.jsx)(_,{x:"20",y:"55",size:"110",blur:"1",angle:"60"}),Object(a.jsx)(_,{x:"90",y:"10",size:"200",blur:"4",angle:"30"}),Object(a.jsx)(_,{x:"80",y:"80",size:"70",blur:"6",angle:"-20"}),Object(a.jsx)(j,{})]}),Object(a.jsxs)("div",{className:"page3",children:[Object(a.jsx)("img",{className:"background-img",src:"/img/page3.jpg",alt:"page3"}),Object(a.jsxs)("div",{style:c>=0&&c<25?{transform:"translateX(0)"}:c>=25&&c<75?{transform:"translateX(-100%)"}:{transform:"translateX(-200%)"},className:"page3__slide",children:[Object(a.jsx)("h2",{className:"page3__slide__text",children:"\u0417\u0432\u0435\u043d\u044c\u044f \u043f\u0430\u0442\u043e\u0433\u0435\u043d\u0435\u0437\u0430 \u0421\u04142"}),Object(a.jsx)("img",{className:"page3__slide__img page3__slide__img1",src:"/img/tab_1.png",alt:"page3"}),Object(a.jsx)(_,{x:"10",y:"65",size:"200",blur:"2",angle:"30"}),Object(a.jsx)(_,{x:"70",y:"30",size:"120",blur:"3",angle:"90"}),Object(a.jsx)(_,{x:"90",y:"15",size:"60",blur:"2",angle:"25"})]}),Object(a.jsxs)("div",{style:c>=0&&c<25?{transform:"translateX(100%)"}:c>=25&&c<75?{transform:"translateX(0)"}:{transform:"translateX(-100%)"},className:"page3__slide page3__slide__2",children:[Object(a.jsx)("h2",{className:"page3__slide__text",children:"\u0421\u043c\u0435\u0440\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0442\u0435\u0442"}),Object(a.jsx)("img",{className:"page3__slide__img page3__slide__img2",src:"/img/tab_2.png",alt:"page3"}),Object(a.jsx)(_,{x:"90",y:"65",size:"200",blur:"4",angle:"30"}),Object(a.jsx)(_,{x:"10",y:"30",size:"120",blur:"1",angle:"90"}),Object(a.jsx)(_,{x:"43",y:"10",size:"60",blur:"1",angle:"25"})]}),Object(a.jsxs)("div",{style:c>=0&&c<25?{transform:"translateX(200%)"}:c>=25&&c<75?{transform:"translateX(100%)"}:{transform:"translateX(0)"},className:"page3__slide page3__slide__3",children:[Object(a.jsx)("h2",{className:"page3__slide__text",children:"\u0417\u0432\u0435\u043d\u044c\u044f \u043f\u0430\u0442\u043e\u0433\u0435\u043d\u0435\u0437\u0430 \u0421\u04142"}),Object(a.jsx)("img",{className:"page3__slide__img page3__slide__img3",src:"/img/tab_3.png",alt:"page3"}),Object(a.jsx)(_,{x:"20",y:"80",size:"200",blur:"2",angle:"0"}),Object(a.jsx)(_,{x:"90",y:"20",size:"120",blur:"1",angle:"90"}),Object(a.jsx)(_,{x:"2",y:"10",size:"40",blur:"0",angle:"25"})]}),Object(a.jsxs)("div",{className:"page3__slide__years",children:[Object(a.jsx)("h2",{className:"page3__slide__years__text",children:"1988"}),Object(a.jsx)("h2",{className:"page3__slide__years__text",children:"2009"}),Object(a.jsx)("h2",{className:"page3__slide__years__text",children:"2016"})]}),Object(a.jsx)("input",{type:"range",min:"1",max:"100",value:c,onChange:function(e){i(e.target.value)},onMouseUp:function(){c>=0&&c<25?i(0):c>=25&&c<75?i(50):c>=75&&c<=100&&i(100)},className:"slider",id:"myRange"})]})]})};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ef03be53.chunk.js.map