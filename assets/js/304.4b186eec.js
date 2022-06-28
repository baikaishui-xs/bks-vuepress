(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{867:function(n,t,e){"use strict";e.r(t);var a=e(15),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("知识点：直角坐标系中的通用配置项")]),n._v("\n<!DOCTYPE html>\n"),e("html",{attrs:{lang:"en"}},[e("head",[e("meta",{attrs:{charset:"UTF-8"}}),n._v(" "),e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),n._v(" "),e("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"ie=edge"}}),n._v(" "),e("title",[n._v("Document")]),n._v(" "),e("script",{attrs:{src:"lib/echarts.min.js"}})]),n._v(" "),e("body",[e("div",{staticStyle:{width:"600px",height:"400px"}}),n._v(" "),e("script",[n._v("\n    var mCharts = echarts.init(document.querySelector(\"div\"))\n    var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强']\n    var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]\n    var option = {\n      dataZoom: [  // 区域缩放（筛选类目）\n        {\n          type: slider,  // 类型：slider（滑块）inside（内置，依靠鼠标滚轮或者双指缩放）\n          xAxisIndex: 0  // 显示 x 轴上的区域缩放\n        },\n        {\n          type: slider,\n          yAxisIndex: 0  // 显示 y 轴上的区域缩放\n          start: 0,  // 区域缩放默认 起始值\n          end: 80,  // 区域缩放默认 结束值\n        }\n      ]\n      toolbox: {\n        feature: {\n          dataZoom: {}  // 显示区域缩放工具（筛选类目）\n        }\n      }\n      grid: { // 坐标轴容器\n        show: true, // 显示边框\n        borderWidth: 10, // 边框宽度\n        borderColor: 'red', // 边框颜色\n        left: 120, // 图表距离左边的距离\n        top: 120, // 图表距离上边的距离\n        width: 300, // 图表宽度\n        height: 150 // 图表高度\n      },\n      xAxis: {\n        type: 'category',  // 类目轴（特性：该类型必须通过 data 设置类目数据）\n        data: xDataArr,\n        position: 'top'  // x 轴的显示位置（默认在下边）\n      },\n      yAxis: {\n        type: 'value',  // 数值轴（特性：自动从系列中读取数据）\n        position: 'right'  // y 轴的显示位置（默认在左边）\n      },\n      series: [\n        {\n          name: '语文',\n          type: 'bar',\n          markPoint: {\n            data: [\n              {\n                type: 'max', name: '最大值'\n              },{\n                type: 'min', name: '最小值'\n              }\n            ]\n          },\n          markLine: {\n            data: [\n              {\n                type: 'average', name: '平均值'\n              }\n            ]\n          },\n          label: {\n            show: true,\n            rotate: 60,\n            position: 'top'\n          },\n          barWidth: '30%',\n          data: yDataArr\n        }\n      ]\n    }\n    mCharts.setOption(option)\n  ")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);