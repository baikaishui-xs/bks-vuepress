(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{798:function(t,s,v){"use strict";v.r(s);var a=v(15),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"flex-弹性布局-上"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-弹性布局-上"}},[t._v("#")]),t._v(" flex 弹性布局（上）")]),t._v(" "),v("p",[v("strong",[t._v("作用：")]),t._v(" 更加方便的控制元素的 位置（垂直居中、水平居中） 和 排列方式")]),t._v(" "),v("p",[v("strong",[t._v("解决：")]),t._v(" 传统布局繁琐的问题")]),t._v(" "),v("p",[v("strong",[t._v("特性：")]),t._v("\n1、子元素的 float、clear、vertical-align 属性将失效\n2、子元素默认一行显示\n3、当子元素的宽度总和超过父元素时，子元素的宽度会被压缩\n"),v("strong",[t._v("解决方法：")]),t._v(" 给一个盒子设置宽度、其它盒子使用 flex: 1")]),t._v(" "),v("p",[v("strong",[t._v("提示：")]),t._v(" 在不考虑兼容的情况下，推荐 PC 端使用")]),t._v(" "),v("p",[v("strong",[t._v("使用步骤：")]),t._v(" 定义 display: flex")]),t._v(" "),v("h2",{attrs:{id:"一、父元素属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、父元素属性"}},[t._v("#")]),t._v(" 一、父元素属性")]),t._v(" "),v("p",[v("strong",[t._v("说明：")]),t._v(" 第一个属性都为默认值")]),t._v(" "),v("h3",{attrs:{id:"一-主轴子元素-排列方向"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-主轴子元素-排列方向"}},[t._v("#")]),t._v(" （一）主轴子元素 排列方向")]),t._v(" "),v("p",[v("strong",[t._v("语法：")]),t._v(" "),v("code",[t._v("flex-direction")])]),t._v(" "),v("p",[v("strong",[t._v("值：")])]),t._v(" "),v("ol",[v("li",[t._v("row：从左到右")]),t._v(" "),v("li",[t._v("row-reverse：从右到左")]),t._v(" "),v("li",[t._v("column：从上到下")]),t._v(" "),v("li",[t._v("column-reverse：从下到上")])]),t._v(" "),v("h3",{attrs:{id:"二-主轴子元素-排列方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二-主轴子元素-排列方式"}},[t._v("#")]),t._v(" （二）主轴子元素 排列方式")]),t._v(" "),v("p",[v("strong",[t._v("语法：")]),t._v(" "),v("code",[t._v("justify-content")])]),t._v(" "),v("p",[v("strong",[t._v("值：")])]),t._v(" "),v("ol",[v("li",[t._v("flex-start：从上到下/从左到右")]),t._v(" "),v("li",[t._v("flex-end：从下到上/从右到左")]),t._v(" "),v("li",[t._v("center：垂直居中 水平居中")]),t._v(" "),v("li",[t._v("space-around：平分剩余空间")]),t._v(" "),v("li",[t._v("space-between：先两边贴边 再平分剩余空间")])]),t._v(" "),v("h3",{attrs:{id:"三-侧轴子元素-排列方式-单行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三-侧轴子元素-排列方式-单行"}},[t._v("#")]),t._v(" （三）侧轴子元素 排列方式（单行）")]),t._v(" "),v("p",[v("strong",[t._v("语法：")]),t._v(" "),v("code",[t._v("align-items")])]),t._v(" "),v("p",[v("strong",[t._v("值：")])]),t._v(" "),v("ol",[v("li",[t._v("stretch：拉伸")]),t._v(" "),v("li",[t._v("flex-start：从上到下/从左到右")]),t._v(" "),v("li",[t._v("flex-end：从下到上/从右到左")]),t._v(" "),v("li",[t._v("center：垂直居中 水平居中")]),t._v(" "),v("li",[t._v("baseline：以第一个元素文字的基线对齐")])]),t._v(" "),v("h3",{attrs:{id:"四-侧轴子元素-排列方式-多行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四-侧轴子元素-排列方式-多行"}},[t._v("#")]),t._v(" （四）侧轴子元素 排列方式（多行）")]),t._v(" "),v("p",[v("strong",[t._v("语法：")]),t._v(" "),v("code",[t._v("align-content")])]),t._v(" "),v("p",[v("strong",[t._v("值：")])]),t._v(" "),v("ol",[v("li",[t._v("flex-start：从上到下/从左到右")]),t._v(" "),v("li",[t._v("flex-end：从下到上/从右到左")]),t._v(" "),v("li",[t._v("center：垂直居中 水平居中")]),t._v(" "),v("li",[t._v("space-around：平分剩余空间")]),t._v(" "),v("li",[t._v("space-between：先两边贴边 再平分剩余空间")]),t._v(" "),v("li",[t._v("stretch：子元素高度平分父元素高度")])]),t._v(" "),v("h3",{attrs:{id:"五-子元素是否自动换行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五-子元素是否自动换行"}},[t._v("#")]),t._v(" （五）子元素是否自动换行")]),t._v(" "),v("p",[v("strong",[t._v("语法：")]),t._v(" "),v("code",[t._v("flex-wrap")])]),t._v(" "),v("p",[v("strong",[t._v("值：")])]),t._v(" "),v("ol",[v("li",[t._v("nowrap：不换行")]),t._v(" "),v("li",[t._v("wrap：自动换行")]),t._v(" "),v("li",[t._v("wrap-reverse：自动换行，第一行在最下面，从下往上排列")])]),t._v(" "),v("h3",{attrs:{id:"六-主轴方向-和-子元素是否换行-的复合写法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六-主轴方向-和-子元素是否换行-的复合写法"}},[t._v("#")]),t._v(" （六）主轴方向 和 子元素是否换行 的复合写法")]),t._v(" "),v("p",[v("strong",[t._v("语法：")]),t._v(" "),v("code",[t._v("flex-flow")])]),t._v(" "),v("p",[v("strong",[t._v("参数一：")]),t._v(" 主轴方向\n"),v("strong",[t._v("参数二：")]),t._v(" 子元素是否换行")]),t._v(" "),v("h3",{attrs:{id:"效果"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[t._v("#")]),t._v(" 效果：")]),t._v("\n<!DOCTYPE html>\n"),v("html",{attrs:{lang:"zh-CN"}},[v("head",[v("meta",{attrs:{charset:"UTF-8"}}),t._v(" "),v("meta",{attrs:{name:"viewport",content:"width=device-width initial-scale=1 maximum-scale=1 minimum-scale=1 user-scalable=no"}}),t._v(" "),v("title",[t._v("Document")]),t._v(" "),v("style",[t._v("\n      .span {\n        width: 150px;\n        height: 100px;\n        color: #fff;\n        background-color: purple;\n      }\n      .div {\n        display: flex;\n        width: 800px;\n        height: 300px;\n        margin-bottom: 10px;\n        background-color: pink;\n      }\n      .demo1 {\n        justify-content: space-between;\n        align-items: center;\n      }\n      .demo2 {\n        flex-wrap: wrap;\n        justify-content: space-between;\n      }\n    ")])]),t._v(" "),v("body",[v("div",{staticClass:"div demo1"},[v("span",{staticClass:"span"},[t._v("1")]),t._v(" "),v("span",{staticClass:"span"},[t._v("2")]),t._v(" "),v("span",{staticClass:"span"},[t._v("3")]),t._v(" "),v("span",{staticClass:"span"},[t._v("4")])]),t._v(" "),v("div",{staticClass:"div demo2"},[v("span",{staticClass:"span"},[t._v("1")]),t._v(" "),v("span",{staticClass:"span"},[t._v("2")]),t._v(" "),v("span",{staticClass:"span"},[t._v("3")]),t._v(" "),v("span",{staticClass:"span"},[t._v("4")]),t._v(" "),v("span",{staticClass:"span"},[t._v("5")]),t._v(" "),v("span",{staticClass:"span"},[t._v("6")]),t._v(" "),v("span",{staticClass:"span"},[t._v("7")]),t._v(" "),v("span",{staticClass:"span"},[t._v("8")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);