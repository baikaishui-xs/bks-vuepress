(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{876:function(n,t,e){"use strict";e.r(t);var r=e(15),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("知识点：颜色渐变")]),n._v(" "),e("p",[n._v("（1）线性渐变\n（2）径向渐变")]),n._v("\n<!DOCTYPE html>\n"),e("html",{attrs:{lang:"en"}},[e("head",[e("meta",{attrs:{charset:"UTF-8"}}),n._v(" "),e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),n._v(" "),e("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"ie=edge"}}),n._v(" "),e("title",[n._v("Document")]),n._v(" "),e("script",{attrs:{src:"lib/echarts.min.js"}})]),n._v(" "),e("body",[e("div",{staticStyle:{width:"600px",height:"400px"}}),n._v(" "),e("script",[n._v("\n    var mCharts = echarts.init(document.querySelector(\"div\"))\n    var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强']\n    var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]\n    var option = {\n      xAxis: {\n        type: 'category',\n        data: xDataArr\n      },\n      yAxis: {\n        type: 'value'\n      },\n      series: [\n        {\n          type: 'bar',\n          data: yDataArr,\n          itemStyle: {\n\x3c!--beforebegin--\x3e<div class=\"language- extra-class\">\x3c!--afterbegin--\x3e<pre><code>        // color: {\n        //   type: 'linear', // 线性渐变\n        //   x: 0,\n        //   y: 0,\n        //   x2: 0,\n        //   y2: 1,\n        //   colorStops:[\n        //     {\n        //       offset: 0, color: 'red' // 0% 处的颜色为红色\n        //     },\n        //     {\n        //       offset: 1, color: 'blue' // 100% 处的颜色为蓝\n        //     }\n        //   ]\n        // }\n\n        color: {\n          type: 'radial', // 径向渐变\n          x: 0.5,  // 半径\n          y: 0.5,\n          r: 0.5,\n          colorStops: [\n            {\n              offset: 0, color: 'red' // 0% 处的颜色为红色\n            },\n            {\n              offset: 1, color: 'blue' // 100% 处的颜色为蓝\n            }\n          ]\n        }\n\n      }\n    }\n  ]\n}\nmCharts.setOption(option)\n</code></pre>\n\x3c!--beforeend--\x3e</div>\x3c!--afterend--\x3e  ")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);