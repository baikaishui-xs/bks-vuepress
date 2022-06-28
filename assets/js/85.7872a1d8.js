(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{648:function(n,e,s){"use strict";s.r(e);var t=s(15),p=Object(t.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("作用：它提供了友好的前端模块化开发支持，以及代码压缩混淆、不用考虑浏览器兼容问题，内部会自动转换成兼容代码、性能优化等强大的功能\n- CSS 高级代码不会转换成兼容代码，但是 CSS 高级代码在低版本浏览器中虽然不能运行，但是并不会报错\n优点：让程序员把工作的重心放到具体功能的实现上，提高了前端开发效率和项目的可维护性。")]),n._v(" "),s("p",[n._v("提示：使用 vue-cli 可以快速搭建 webpack，详见 知识点：vue-cli")]),n._v(" "),s("p",[n._v("特性：由于 webpack 是基于 node.js 开发出来的打包工具，因此在它的配置文件中，支持使用 node.js 相关语法")]),n._v(" "),s("p",[n._v("可以解决以下报错：\nUncaught SyntaxError: Cannot use import statement outside a module\n解：该语法有兼容性问题，无法识别。webpack 可以将不兼容的语法，转换成兼容语法")]),n._v(" "),s("p",[n._v("搭建项目：\n（1）新建用个项目，输入 npm init -y 生成 package.json\n（2）创建 src 目录，用于存放程序员写的源代码")]),n._v(" "),s("p",[n._v("下载：npm install webpack@5.42.1 webpack-cli@4.7.2 -D")]),n._v(" "),s("p",[n._v("开发环境")]),n._v(" "),s("ul",[s("li",[n._v("命令：npm run dev")]),n._v(" "),s("li",[n._v("特性：不打包项目")])]),n._v(" "),s("p",[n._v("生产环境")]),n._v(" "),s("ul",[s("li",[n._v("npm run build")]),n._v(" "),s("li",[n._v("特性：打包项目。将文件打包成 html + js + css")])]),n._v(" "),s("p",[n._v("提示：配置以下操作后，要重新打包，才会生效\n配置 webpack：")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v('（1）在项目根目录创建 webpack.config.js 配置文件，并添加以下配置项\n    module.exports = {\n        // 指定构件模式：development（开发模式：不会 对打包生成的文件进行 代码压缩 和 性能优化，打包速度快）production（生产模式：会 对打包生成的文件进行 代码压缩 和 性能优化，打包速度慢）\n        mode: \'development\'  \n    }\n\n（2）在 package.json 的 scripts 配置项下，新增 dev 脚本如下：\n    "scripts": { // 注册脚本，通过 npm run dev 脚本名 执行脚本\n        "dev": "webpack"\n    }\n\n（3）运行 npm run dev 命令，启动 webpack 进行项目的打包构建\n    - 会自动在项目根目录生成 dist 目录 和 main.js 文件\n')])])]),s("p",[n._v("压缩 main.js 中的代码（压缩后的代码没有 空格 和 注释：\n1、把构件模式改为 production\n2、运行 npm run dev 命令")]),n._v(" "),s("p",[n._v("默认约定：\n默认打包 入口文件 路径  src/index.js\n默认输出 入口文件 路径  dist/main.js")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("-- webpack.config.js\n    修改默认打包 入口文件 路径：\n        1、导入 const path = require('path')\n        2、在 module.exports 里添加以下配置项\n            // entry：指定打包 入口 文件路径\n            entry: path.join(__dirname, './src/index.js')\n\n    修改默认输出入口文件 路径 和 名字：\n        // 将 dist/main.js 改为 bundle.js\n        // 将 main.js 改为 bundle.js\n        1、在 module.exports 里添加以下配置项\n            // output：指定打包 出口 文件\n            output: {\n                path: path.join(__dirname, './dist'),  // 入口文件的存放目录\n                filename: 'bundle.js'  // 输出入口文件路径\n            }\n")])])]),s("p",[n._v('插件：\n（1）webpack-dev-server：\n作用：每保存一次入口文件，就自动执行 npm run dev 命令，并自动刷新浏览器\n下载：npm install webpack-dev-server@3.11.2 -D\n配置：\n在 package.json → scripts → dev 中添加 serve，如下\n"scripts": { // 注册脚本，通过 npm run dev 脚本名 执行脚本\n"dev": "webpack serve"  // server 作用：将生成的文件放到内存中\n}\n使用步骤：\n1、引入项目根目录中的 main.js 到 index.html 中（不能引入 dist/bundle.js，因为进入监听状态后，每次保存操作修改的是内存中的入口文件，不是 dist/bundle.js 的入口文件，这个入口文件在项目根目录是看不到的，webpack-dev-server 把它放到了内存中，因为内存要比物理磁盘的读写速度更快，这样可以更快速的进行读写操作）（输入 npm run dev 后的提示信息也会显示入口文件的所在目录 如：webpack output is served from /，即目录在根目录下）\n'),s("script",{attrs:{src:"/main.js"}})])])}),[],!1,null,null,null);e.default=p.exports}}]);