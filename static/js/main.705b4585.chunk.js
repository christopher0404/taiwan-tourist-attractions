(this["webpackJsonptaiwan-tourist-attractions"]=this["webpackJsonptaiwan-tourist-attractions"]||[]).push([[0],{31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(21),i=n.n(o),r=(n(31),n(13)),s=n(7),u=n(16),j=n(2),l=n(8),h=Object(c.createContext)("All"),b=n(17),p=n.n(b),O=n(22),d=n(26);function x(){var e=(new Date).toGMTString(),t=new d.a("SHA-1","TEXT");t.setHMACKey("9OMUYT4YKIsedjuod5EZ5m4Zoeo","TEXT"),t.update("x-date: ".concat(e));var n=t.getHMAC("B64");return{Authorization:'hmac username="'.concat("f9cf2d2287ff4dd699af5d3e239e148a",'", algorithm="hmac-sha1", headers="x-date", signature="').concat(n,'"'),"X-Date":e,"Accept-Encoding":"gzip"}}var v,m,g,C,f,y,S="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",T=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t?"".concat(S,"/").concat(t):"".concat(S),e.next=4,fetch("".concat(n,"?$format=JSON&$top=").concat(30),{headers:{authorization:x()}});case 4:return c=e.sent,e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),w=n(1),A=l.a.li(v||(v=Object(s.a)(["\n  margin-bottom: 2rem;\n"]))),D=l.a.h3(m||(m=Object(s.a)(["\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n"]))),M=l.a.p(g||(g=Object(s.a)(["\n  font-size: 1rem;\n"])));function z(e){var t=e.name,n=e.description;return Object(w.jsxs)(A,{children:[Object(w.jsx)(D,{children:t}),Object(w.jsx)(M,{children:n})]})}function E(e){var t=e.value,n=e.onChange;return Object(w.jsxs)("select",{value:t,onChange:n,children:[Object(w.jsx)("option",{value:"All",children:"\u5168\u90e8\u7e23\u5e02"}),Object(w.jsx)("option",{value:"Taipei",children:"\u81fa\u5317\u5e02"}),Object(w.jsx)("option",{value:"NewTaipei",children:"\u65b0\u5317\u5e02"}),Object(w.jsx)("option",{value:"Taoyuan",children:"\u6843\u5712\u5e02"}),Object(w.jsx)("option",{value:"Taichung",children:"\u81fa\u4e2d\u5e02"}),Object(w.jsx)("option",{value:"Tainan",children:"\u81fa\u5357\u5e02"}),Object(w.jsx)("option",{value:"Kaohsiung",children:"\u9ad8\u96c4\u5e02"}),Object(w.jsx)("option",{value:"Keelung",children:"\u57fa\u9686\u5e02"}),Object(w.jsx)("option",{value:"Hsinchu",children:"\u65b0\u7af9\u5e02"}),Object(w.jsx)("option",{value:"HsinchuCounty",children:"\u65b0\u7af9\u7e23"}),Object(w.jsx)("option",{value:"MiaoliCounty",children:"\u82d7\u6817\u7e23"}),Object(w.jsx)("option",{value:"ChanghuaCounty",children:"\u5f70\u5316\u7e23"}),Object(w.jsx)("option",{value:"NantouCounty",children:"\u5357\u6295\u7e23"}),Object(w.jsx)("option",{value:"YunlinCounty",children:"\u96f2\u6797\u7e23"}),Object(w.jsx)("option",{value:"ChiayiCounty",children:"\u5609\u7fa9\u7e23"}),Object(w.jsx)("option",{value:"Chiayi",children:"\u5609\u7fa9\u5e02"}),Object(w.jsx)("option",{value:"PingtungCounty",children:"\u5c4f\u6771\u7e23"}),Object(w.jsx)("option",{value:"YilanCounty",children:"\u5b9c\u862d\u7e23"}),Object(w.jsx)("option",{value:"HualienCounty",children:"\u82b1\u84ee\u7e23"}),Object(w.jsx)("option",{value:"TaitungCounty",children:"\u81fa\u6771\u7e23"}),Object(w.jsx)("option",{value:"KinmenCounty",children:"\u91d1\u9580\u7e23"}),Object(w.jsx)("option",{value:"PenghuCounty",children:"\u6f8e\u6e56\u7e23"}),Object(w.jsx)("option",{value:"LienchiangCounty",children:"\u9023\u6c5f\u7e23"})]})}var H=l.a.h1(C||(C=Object(s.a)(["\n  margin-bottom: 2rem;\n  font-size: 2rem;\n"]))),K=l.a.nav(f||(f=Object(s.a)(["\n  margin-bottom: 2rem;\n"]))),N=l.a.ul(y||(y=Object(s.a)([""])));var P,Y=function(){var e=Object(j.g)(),t=Object(j.h)().city,n=Object(c.useContext)(h),a=n.currentCity,o=n.setCurrentCity,i=Object(c.useState)([]),s=Object(r.a)(i,2),u=s[0],l=s[1];return Object(c.useEffect)((function(){o(t||"All"),T(t).then((function(e){return l(e)}))}),[t,o]),console.log("cityParam",t),console.log("currentCity",a),console.log("scenicSpots",u),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H,{children:"\u53f0\u7063\u89c0\u5149\u666f\u9ede"}),Object(w.jsx)(K,{children:Object(w.jsx)(E,{value:t||"All",onChange:function(t){var n=t.target.value;e.push("/scenicSpot/".concat(n))}})}),Object(w.jsx)(N,{children:u.map((function(e){return Object(w.jsx)(z,{name:e.Name,description:e.Description?e.Description:e.DescriptionDetail},e.ID)}))})]})},k=l.a.div(P||(P=Object(s.a)(["\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 3rem 1.5rem;\n"])));var I=function(){var e=Object(c.useState)("All"),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(w.jsx)(h.Provider,{value:{currentCity:n,setCurrentCity:a},children:Object(w.jsx)(k,{children:Object(w.jsx)(u.a,{children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.a,{exact:!0,from:"/",to:"/scenicSpot"}),Object(w.jsx)(j.a,{exact:!0,from:"/scenicSpot/All",to:"/scenicSpot"}),Object(w.jsx)(j.b,{exact:!0,path:"/scenicSpot",component:Y}),Object(w.jsx)(j.b,{path:"/scenicSpot/:city",component:Y})]})})})})};i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(I,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.705b4585.chunk.js.map