(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(t,e,s){},11:function(t,e,s){},12:function(t,e,s){"use strict";s.r(e);var c=s(0),n=s(1),a=s.n(n),i=s(4),b=s.n(i),r=(s(10),s(2));s(11);function o(t){return Object(c.jsxs)("div",{className:"btn-box",children:[0===t.status?Object(c.jsx)("button",{className:"stopwatch-btn stopwatch-btn-black",onClick:t.start,children:"Start"}):"",1===t.status?Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"stopwatch-btn stopwatch-btn-black",onClick:t.pause,children:"Pause"}),Object(c.jsx)("button",{className:"stopwatch-btn stopwatch-btn-black",onClick:t.reset,children:"Reset"})]}):"",2===t.status?Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"stopwatch-btn stopwatch-btn-black",onClick:t.resume,children:"Resume"}),Object(c.jsx)("button",{className:"stopwatch-btn stopwatch-btn-black",onClick:t.reset,children:"Reset"})]}):""]})}function l(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:t.time.h>=10?t.time.h:"0"+t.time.h}),":",Object(c.jsx)("span",{children:t.time.m>=10?t.time.m:"0"+t.time.m}),":",Object(c.jsx)("span",{children:t.time.s>=10?t.time.s:"0"+t.time.s})]})}var j=function(){var t=Object(n.useState)({s:0,m:0,h:0}),e=Object(r.a)(t,2),s=e[0],a=e[1],i=Object(n.useState)({}),b=Object(r.a)(i,2),j=b[0],u=b[1],h=Object(n.useState)(0),m=Object(r.a)(h,2),d=m[0],p=m[1],O=function(){k(),p(1),u(setInterval(k,1e3))},x=s.s,f=s.m,v=s.h,k=function(){return 60===f&&(v++,f=0),60===x&&(f++,x=0),x++,a({s:x,m:f,h:v})};return Object(c.jsx)("div",{className:"main-section",children:Object(c.jsx)("div",{className:"clock-holder",children:Object(c.jsxs)("div",{className:"stopwatch",children:[Object(c.jsx)(l,{time:s}),Object(c.jsx)(o,{status:d,resume:function(){return O()},reset:function(){clearInterval(j),p(0),a({s:0,m:0,h:0})},pause:function(){clearInterval(j),p(2)},start:O})]})})})},u=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(e){var s=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;s(t),c(t),n(t),a(t),i(t)}))};b.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),u()}},[[12,1,2]]]);
//# sourceMappingURL=main.22fe1c61.chunk.js.map