(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{434:function(t,e,n){"use strict";n.r(e);var a=n(435),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e.default=i.a},435:function(t,e){new Vue({el:"#app",data:{flag:!1,type:"A"}})},563:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("html",{attrs:{lang:"en"}},[n("head",[n("meta",{attrs:{charset:"UTF-8"}}),t._v(" "),n("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"IE=edge"}}),t._v(" "),n("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),t._v(" "),n("title",[t._v("Document")])]),t._v(" "),n("body",[n("div",{attrs:{id:"app"}},[t.flag?n("p",[t._v("这是被 v-if 控制的元素")]):t._e(),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('\x3c!-- （2）v-show\n    作用：隐藏元素\n    原理：使用 display 来控制\n    应用场景：频繁切换元素的显示和隐藏时，性能更好\n--\x3e\n<p v-show="flag">这是被 v-show 控制的元素</p>\n\n<hr>\n')])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("<div v-if=\"type === 'A'\">优秀</div>\n<div v-else-if=\"type === 'B'\">良好</div>\n<div v-else-if=\"type === 'C'\">一般</div>\n<div v-else>差</div>\n")])])])])])])])},i=[]},574:function(t,e,n){"use strict";n.r(e);var a=n(563),i=n(434);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(15),v=Object(s.a)(i.default,a.a,a.b,!1,null,null,null);e.default=v.exports}}]);