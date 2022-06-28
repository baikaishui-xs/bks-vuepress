(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{882:function(t,e,n){"use strict";n.r(e);var a=n(15),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("知识点：交互API-全局 echarts 对象")]),t._v(" "),n("p",[t._v("文档：https://echarts.apache.org/zh/api.html#echarts")]),t._v(" "),n("p",[t._v("全局 echarts 对象：引入 echarts.js 文件后就可以直接使用")]),t._v(" "),n("ul",[n("li",[t._v("\binit(得到 echarts 实例对象, 使用主题)")]),t._v(" "),n("li",[t._v("registerTheme(主题名, 配置自定义主题)")]),t._v(" "),n("li",[t._v("registerMap('标识符', json 数据)  // 注册地图数据")]),t._v(" "),n("li",[t._v("connect([图表, 图表, ...])  // 关联多个图表（作用：1、下载图表时自动拼接关联的图表  2、刷新按钮  3、重置按钮  4、提示框劳动  5、图例选择  6、数据范围修改 等）")])]),t._v("\n<!DOCTYPE html>\n"),n("html",{attrs:{lang:"en"}},[n("head",[n("meta",{attrs:{charset:"UTF-8"}}),t._v(" "),n("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),t._v(" "),n("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"ie=edge"}}),t._v(" "),n("title",[t._v("Document")]),t._v(" "),n("script",{attrs:{src:"lib/echarts.min.js"}}),t._v(" "),n("script",{attrs:{src:"theme/itcast.js"}}),t._v(" "),n("script",{attrs:{src:"lib/jquery.min.js"}})]),t._v(" "),n("body",[n("div",{staticStyle:{width:"600px",height:"400px",border:"1px solid red"}}),t._v(" "),n("div",{staticStyle:{width:"600px",height:"400px",border:"1px solid green"},attrs:{id:"div1"}}),t._v(" "),n("script",[t._v("\n    var mCharts = echarts.init(document.querySelector(\"div\"), 'itcast')\n    var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强']\n    var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]\n    var option = {\n      toolbox: {\n        feature: {\n          saveAsImage: {}\n        }\n      },\n      xAxis: {\n        type: 'category',\n        data: xDataArr\n      },\n      yAxis: {\n        type: 'value'\n      },\n      series: [\n        {\n          type: 'bar',\n          data: yDataArr,\n          markPoint: {\n            data: [\n              {\n                type: 'max', name: '最大值'\n              },\n              {\n                type: 'min', name: '最小值'\n              }\n            ]\n          },\n          markLine: {\n            data: [\n              {\n                type: 'average', name: '平均值'\n              }\n            ]\n          },\n          label: {\n            show: true,\n            rotate: 60\n          },\n          barWidth: '30%'\n        }\n      ]\n    }\n    mCharts.setOption(option)\n\x3c!--beforebegin--\x3e<div class=\"language- extra-class\">\x3c!--afterbegin--\x3e<pre><code>var mCharts2 = echarts.init(document.querySelector('#div1'))\n$.get('json/map/china.json', function(ret){\n  echarts.registerMap('aa', ret)\n  var option2 = {\n    geo: {\n      type: 'map',\n      map: 'aa'\n    }\n  }\n  mCharts2.setOption(option2)\n  // echarts.connect([mCharts, mCharts2]) // 将柱状图和地图关联起来\n})\n</code></pre>\n\x3c!--beforeend--\x3e</div>\x3c!--afterend--\x3e  ")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);