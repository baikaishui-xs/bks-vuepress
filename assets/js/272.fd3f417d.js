(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{835:function(n,a,p){"use strict";p.r(a);var e=p(15),s=Object(e.a)({},(function(){var n=this,a=n.$createElement,p=n._self._c||a;return p("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[p("p",[n._v("概念：分包指的是把一个完整的小程序项目，按照需求划分为不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载")]),n._v(" "),p("p",[n._v("作用：\n（1）提高小程序首次加载的速度\n（2）在多团队共同开发时可以更好的解耦协作")]),n._v(" "),p("p",[n._v("分包后，小程序项目由 1 个主包 + 多个分包组成\n主包：一般只包含项目的启动页面或 TabBar 页面、以及所有分包都需要用到的一些公共资源\n分包：只包含和当前分包有关的页面和私有资源")]),n._v(" "),p("p",[n._v("引用原则：\n（1）主包无法引用分包内的私有资源\n（2）分包之间不能相互引用私有资源\n（3）分包可以引用主包内的公共资源")]),n._v(" "),p("p",[n._v("加载规则\n（1）小程序启动时，默认加载主包\n- tabBar 页面需要放到主包中")]),n._v(" "),p("p",[n._v("（2）当进入分包内某个页面时，会加载对应分包\n- 非 tabBar 页面可以按照功能的不同，划分为不同的分包之后，进行按需下载")]),n._v(" "),p("p",[n._v("体积限制\n（1）整个小程序所有分包大小不能超过16M（主包 + 所有分包）\n（2）单个分包/主包大小不能超过 2M")]),n._v(" "),p("p",[n._v("查看分包体积：微信开发者工具 → 详情 → 本地代码")]),n._v(" "),p("p",[n._v('配置（-- app.json）\n{\n// 主包的所有页面\n"pages": [\n"pages/index",\n"pages/logs"\n],\n// 定义分包\n"subpackages": [\n// 分包一\n{\n// 分包根目录\n"root": "packaggeA",\n// 分包的别名\n"name": "pack1",\n// 当前分包下，所有页面的相对存放路径\n"pages": [\n"pages/cat/cat",\n"pages/dog/dog"\n]\n},\n// 分包二\n{\n"root": "packageB",\n"pages": [\n"pages/apple/apple",\n"pages/banana/banana"\n]\n}\n]\n}')]),n._v(" "),p("p",[n._v("使用步骤\n（1）新建分包（-- 根目录/subpkg 目录）")]),n._v(" "),p("p",[n._v('（2）配置 subPackages 节点（-- pages.json）\n// 分包配置项\n"subPackages": [\n{\n// 分包根目录\n"root": "subpkg",')]),n._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",[p("code",[n._v('    // 当前分包中的页面\n    "pages": []\n  }\n]\n')])])]),p("p",[n._v("（3）新建分包页面\n右键 subpkg 目录 → 新建页面\n1、定义页面名字\n2、选择模板：使用 scss 的页面\n3、选择小程序分包：subpkg\n4、创建")]),n._v(" "),p("p",[n._v("独立分包\n概念：默认情况下小程序只能通过主包来进入其它分包，而独立分包不需要加载主包，就可以直接进入")]),n._v(" "),p("p",[n._v("引用原则：独立分包中不能引用主包内的公共资源")]),n._v(" "),p("p",[n._v('配置：\n为分包添加 "independent": true 字段')]),n._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",[p("code",[n._v('例：\n  {\n    "root": "packageB",\n    "pages": [\n      "pages/apple/apple",\n      "pages/banana/banana"\n    ],\n    "independent": true\n  }\n')])])]),p("p",[n._v("分包预下载\n概念：进入指定页面时，由框架自动预下载可能需要的分包，从而提升进入后续分包页面时的启动速度")]),n._v(" "),p("p",[n._v("配置（-- app.json）")]),n._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",[p("code",[n._v('// 分包预下载规则\n"preloadRule": {\n\n  // 触发分包预下载的页面路径\n  "pages/contact/contact": {\n\n    // 在指定网络模式下进行预下载（wifi：默认。仅 wifi）（all：不限网络）\n    "network": "all",\n\n    // 进入页面后，预下载哪些分包。通过 root 或 name 指定预下载分包\n    "packages": ["pkgA"]\n  }\n}\n')])])]),p("p",[n._v("下载限制：同一个分包中的预下载大小限额为 2M，超过则会失效")])])}),[],!1,null,null,null);a.default=s.exports}}]);