(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{880:function(n,t,e){"use strict";e.r(t);var a=e(15),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("知识点：增量动画")]),n._v(" "),e("p",[n._v("增量动画（数据发送变化时）")]),n._v(" "),e("p",[n._v("使用方法：在操作数据时，加上 mCharts.setOption(option)")]),n._v("\n<!DOCTYPE html>\n"),e("html",{attrs:{lang:"en"}},[e("head",[e("meta",{attrs:{charset:"UTF-8"}}),n._v(" "),e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),n._v(" "),e("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"ie=edge"}}),n._v(" "),e("title",[n._v("Document")]),n._v(" "),e("script",{attrs:{src:"lib/echarts.min.js"}})]),n._v(" "),e("body",[e("div",{staticStyle:{width:"600px",height:"400px"}}),n._v(" "),e("button",{attrs:{id:"modify"}},[n._v("修改数据")]),n._v(" "),e("button",{attrs:{id:"add"}},[n._v("增加数据")]),n._v(" "),e("script",[n._v("\n    var mCharts = echarts.init(document.querySelector(\"div\"))\n    var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强']\n    var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]\n    var option = {\n      xAxis: {\n        type: 'category',\n        data: xDataArr\n      },\n      yAxis: {\n        type: 'value'\n      },\n      series: [\n        {\n          type: 'bar',\n          data: yDataArr,\n          markPoint: {\n            data: [\n              {\n                type: 'max', name: '最大值'\n              },\n              {\n                type: 'min', name: '最小值'\n              }\n            ]\n          },\n          markLine: {\n            data: [\n              {\n                type: 'average', name: '平均值'\n              }\n            ]\n          },\n          label: {\n            show: true,\n            rotate: 60\n          },\n          barWidth: '30%'\n        }\n      ]\n    }\n    mCharts.setOption(option)\n\x3c!--beforebegin--\x3e<div class=\"language- extra-class\">\x3c!--afterbegin--\x3e<pre><code>var btnModify = document.querySelector('#modify')\nbtnModify.onclick = function () {\n  var newYDataArr = [68, 32, 99, 77, 94, 80, 72, 86]\n  var option = {\n    series: [\n      {\n        data: newYDataArr  // 修改数据\n      }\n    ]\n  }\n  mCharts.setOption(option)\n}\nvar btnAdd = document.querySelector('#add')\nbtnAdd.onclick = function(){\n  xDataArr.push('小明')\n  yDataArr.push(90)\n  var option = {\n    xAxis: {\n      data: xDataArr  // 修改数据\n    },\n    series: [\n      {\n        data: yDataArr  // 修改数据\n      }\n    ]\n  }\n  mCharts.setOption(option)  // 在操作数据时，加上 mCharts.setOption(option) \n}\n</code></pre>\n\x3c!--beforeend--\x3e</div>\x3c!--afterend--\x3e  ")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);