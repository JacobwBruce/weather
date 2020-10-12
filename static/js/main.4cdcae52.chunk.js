(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(e,a,t){e.exports=t(45)},21:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),o=t.n(c),l=(t(21),t(3)),s=t.n(l),i=t(15),m=t(2),u=t(4),p=t.n(u),h=(t(40),t(41),function(e){var a=e.weather,t=new Date,n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],c=t.toDateString().slice(0,3);8===a.daily.length&&a.daily.shift();var o=a.daily.map((function(e){return r.a.createElement("div",{className:"Dashboard-day-container",key:e.dt},r.a.createElement("span",null,(a=e.dt,new Date(1e3*a).toDateString().slice(0,3))),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:""}),r.a.createElement("span",null,Math.round(e.temp.day),"\xb0"));var a}));return r.a.createElement("div",{className:"Dashboard"},r.a.createElement("h1",{className:"Dashboard-date"},c," ",t.getDate()," ",r.a.createElement("br",null)," ",n),r.a.createElement("div",{className:"Dashboard-temperature-container"},r.a.createElement("h1",{className:"Dashboard-temperature ".concat(a.current.weather[0].main)},Math.round(a.current.temp),"\xb0"),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a.current.weather[0].icon,"@4x.png"),alt:""})),r.a.createElement("div",{className:"Dashboard-weekly-container"},o))}),d=(t(42),function(){return r.a.createElement("div",{className:"Welcome"},r.a.createElement("h1",{className:"Welcome-message"},"Welcome! Start by typing a city up above"))}),E=(t(43),function(e){var a=e.errorMessage;return r.a.createElement("div",{className:"Error"},r.a.createElement("h4",null,"Oops! There was a problem, perhaps you miss-spelled the location or it is not a valid location in the"," ",r.a.createElement("a",{target:"_blank",href:"https://openweathermap.org/api",rel:"noopener noreferrer"},"API")),r.a.createElement("h4",{className:"Error-message"},a.toString()))}),g=(t(44),function(){return r.a.createElement("div",{className:"Loading"},r.a.createElement("div",{id:"loader-wrapper"},r.a.createElement("div",{id:"loader"}),r.a.createElement("div",{className:"loader-section section-left"}),r.a.createElement("div",{className:"loader-section section-right"})))});var v=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(r.a.createElement(d,null)),l=Object(m.a)(o,2),u=l[0],v=l[1],f=Object(n.useState)(null),b=Object(m.a)(f,2),w=b[0],N=b[1],y=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,c,o,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),v(r.a.createElement(g,null)),e.prev=2,e.next=5,p.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&APPID=").concat("b83e8d4f30056e82f2091a19863c246e"));case 5:return n=e.sent.data.coord,c=n.lat,o=n.lon,e.next=10,p.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(c,"&lon=").concat(o,"&units=metric&appid=").concat("b83e8d4f30056e82f2091a19863c246e"));case 10:l=e.sent,i=l.data,N("".concat(i.current.weather[0].main,"-image")),v(r.a.createElement(h,{weather:i})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),v(r.a.createElement(E,{errorMessage:e.t0}));case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App-container"},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{onSubmit:y},r.a.createElement("input",{type:"text",className:"search",value:t,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn-search fas fa-search"}))),u),r.a.createElement("div",{className:"image ".concat(w||"no-image")})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.4cdcae52.chunk.js.map