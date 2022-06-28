(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{926:function(n,e,p){"use strict";p.r(e);var t=p(15),s=Object(t.a)({},(function(){var n=this,e=n.$createElement,p=n._self._c||e;return p("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[p("p",[n._v("作用：快速搭建基于 Vue 的 SPA")]),n._v(" "),p("p",[n._v("特性：\n1、仅支持 Vue3.x\n2、运行速度 块")]),n._v(" "),p("p",[n._v("缺点：\n1、默认安装的插件比较少，很多插件都需要手动配置（只推荐在学习时使用，项目中还是推荐使用 vue-cli）")]),n._v(" "),p("p",[n._v("使用步骤：\n1、创建项目：npm init vite-app 项目名称\n2、跳转到该工作目录：cd code1\n3、安装包依赖：npm i\n4、打包：npm run dev")]),n._v(" "),p("p",[n._v("命令行提示：\nNetwork: http://10.211.55.4:3000/   // 局域网 访问地址\nLoacl: http://localhost:3000/       // 本机  访问地址（推荐）（浏览器输入该地址查看项目是否创建成功）")]),n._v(" "),p("p",[n._v("项目目录结构：\nnode_modules    // 存放 第三方包\npublic          // 存放 静态资源\nsrc             // 存放 项目源代码\napi         // 存放 可复用的 api 接口【手动创建】\nassets      // 存放 静态资源（CSS样式表、fonts、图片资源）\ncomponents  // 存放 组件\nApp.vue     // 项目 根组件\nindex.css   // 项目 全局样式文件\nmain.js     // 项目 入口文件（主要职责：创建 vue 应用）\n.browserslistrc // 很少用，也不知道是啥\n.eslintrc.js    // ESLint 配置文件\n.gitignore      // 忽略清单\nbabel.config.js // babel 配置文件\npackage.json    // 包管理配置文件")]),n._v(" "),p("p",[n._v("科普：在前端工程化项目组，Vue 要做的事情很单纯，通过 main.js 把 App.vue 渲染到 index.html 的指定区域中")]),n._v(" "),p("p",[n._v("将组件中的模板结构渲染到页面中（vite 已经自动配置以下四个步骤）\n-- main.js")]),n._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",[p("code",[n._v("（1）按需导入 Vue 中的 createApp 函数\n  import { createApp } from 'vue'\n\n（2）导入要渲染的组件\n  import App from './App.vue'\n\n（3）创建单页面应用程序实例，并渲染指定组件\n  const app = createApp(App)\n\n（4）将单页面应用程序挂载到容器中\n  app.mount('#app')")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);