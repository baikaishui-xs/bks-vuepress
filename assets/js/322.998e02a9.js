(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{885:function(e,n,t){"use strict";t.r(n);var s=t(15),m=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("介绍：一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库")]),e._v(" "),t("p",[e._v("作用：\b传统网站开发中，要想将页面设计的非常漂亮，需要自己设计和编写样式，这样会导致工作量的增加，而 Element-UI 提供了现成的组件库，很好的解决了这个问题")]),e._v(" "),t("p",[e._v("科普：\nA端：开发界面（开发者）\nB端：商家界面（面向公司内部的客户、后端）\nC端：用户界面（面向客户、浏览器端、APP）")]),e._v(" "),t("p",[e._v("应用场景：B端（因为C端有专门的UI设计师，所以更适合B端）")]),e._v(" "),t("p",[e._v("vue2 的项目使用旧版的 Element UI（https://element.eleme.cn/#/zh-CN）\nvue3 的项目使用新版的 Element Plus（https://element-plus.gitee.io/#/zh-CN）")]),e._v(" "),t("p",[e._v("下载：npm i element-ui -S")]),e._v(" "),t("p",[e._v("自定义主题（在线主题编辑器：https://element.eleme.cn/#/zh-CN/component/custom-theme）\n不需要自己手动调，交给 UI 设计师调整往后在下载使用即可")]),e._v(" "),t("p",[e._v("使用步骤：")]),e._v(" "),t("p",[e._v("引入方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('完整引入：操作简单，但是会额外引入一些用不到的组件，导致项目体积过大\n  使用步骤：\n    （1）完整引入 element ui 组件（-- main.js）\n      import ElementUI from \'element-ui\'\n\n    （2）导入 element-ui 组件的样式（-- main.js）\n      import \'element-ui/lib/theme-chalk/index.css\'\n\n    （3）把 Element 注册为 vue 的插件（-- main.js）\n      Vue.use(ElementUI)\n\n按需引入：只会引入用到的组件，但是打包的时候还是会把整个包打进来，能起到优化项目体积的目的（推荐）\n  配置：\n    （1）下载\n      npm i babel-plugin-component -D\n\n    （2）在 babel.config.js 中新增 plugins 节点，并配置以下代码\n      module.exports = {\n        "presets": [\n          \'@vue/cli-plugin-babel/preset\'  // 预制了很多插件\n        ],\n        "plugins": [\n          [\n            "component",\n            {\n              "libraryName": "element-ui",  // UI 框架名称\n              "styleLibraryName": "theme-chalk"  // 样式库\n            }\n          ]\n        ]\n      }\n')])])]),t("p",[e._v("使用步骤：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("方法一：直接使用（组件）（局部使用）\n  （1）按需导入 element ui 组件\n    import { Message } from 'element-ui'\n  \n  （2）使用组件\n    Message.warning('商品至少保留一件')\n\n方法二：（全局使用）（方法）\n  （1）引入需要的组件（-- main.js）\n    import { Message } from 'element-ui'\n\n  （2）挂载到 vue 原型上（-- main.js）\n    Vue.prototype.$message = Message\n\n  （3）使用（-- 组件）\n    this.$message.success('删除成功')\n    \n    特性：在 main.js 中应使用 Message.success('删除成功')\n\n方法三：（全局使用）（标签）\n  （1）引入需要的组件（-- main.js）\n    import { Button } from 'element-ui'\n\n  （2）注册组件（-- main.js）\n    语法：Vue.component(全局注册的名称, 全局注册的组件)\n    // Vue.component(Button.name, Button)\n    简写：\n      Vue.use(Button)\n\n  （3）使用（-- 组件）\n    <el-Button>按钮</el-button>\n")])])]),t("p",[e._v("封装 element ui 组件的导入注册\n解决：element ui 组件的导入注册放在 main.js 里导致该文件代码凌乱的问题\n\b使用步骤：\n完整导入：\n在 src 目录下新建 element-ui/index.js 模块，添加以下代码\nimport ElementUI from 'element-ui'\nimport 'element-ui/lib/theme-chalk/index.css'")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("按需导入：\n  （1）在 src 目录下新建 element-ui/index.js 模块\n\n  （2）添加以下代码\n  ```js\n  import Vue from 'vue'\n  import { Button, Input  } from 'element-ui'\n\n  Vue.use(Button)\n  Vue.use(Input)\n  ```\n\n  （3）导入 element-ui 模块（-- main.js）\n  ```js\n  // 封装后的 element-ui 模块\n  import '@/element-ui' \n  ```")])])])])}),[],!1,null,null,null);n.default=m.exports}}]);