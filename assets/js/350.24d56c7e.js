(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{912:function(n,e,t){"use strict";t.r(e);var o=t(15),r=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("作用：操作路由\n下载：npm i vue-router@3.5.2 -S\n特性：3.x版本只能在 vue2 中使用")]),n._v(" "),t("p",[n._v("路由高亮：\n作用：当前路由链接的对应组件高亮\n特性：如果开发者没有自定义路由高亮的 class 类，则默认使用 router-link-active 类")]),n._v(" "),t("p",[n._v("方法一：使用默认的高亮 class 类\n特性：被激活的路由链接，默认会添加一个叫做 router-link-active 的类名。开发者可以使用此类名选择器，为激活的路由链接设置高亮的样式\n-- index.css（全局样式表）\n.router-link-active {\nbackground-color: red;\ncolor: white;\nfont-weight: bold;\n}")]),n._v(" "),t("p",[n._v("方法二：自定义路由高亮的 class 类\n特性：在创建路由的实例对象时，开发者可以基于 linkActiveClass 属性，自定义路由链接被激活时所应用的类名\n语法：linkActiveClass: '自定义类名'\n-- router.js\nconst router = createRouter({\nlinkActiveClass: 'active-router',\n)}")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("  -- index.css（全局样式表）\n  .active-router {\n      background-color: blue;\n      color: white;\n      font-weight: bold;\n  }\n")])])]),t("p",[n._v("提示：当勾选 vue-cli 的路由功能时，会自动配置以下功能，无需手动配置\n配置：\n1、在 src 目录下新建 router 目录，并新建 index.js 路由模块")]),n._v(" "),t("p",[n._v("2、配置 index.js")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// （1）导入 Vue 和 VueRouter 包\nimport Vue from 'vue'\nimport VueRouter from 'vue-router'\n\n// （2）调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件\n// Vue.use() 作用：为 Vue 安装插件\nVue.use(VueRouter)\n\n// （3）创建路由的实例对象\nconst router = new VueRouter()\n\n// （4）向外共享路由的实例对象\nexport default router\n")])])]),t("p",[n._v("3、配置 main.js")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// （1）导入路由模块，拿到路由实例对象\n// 简写：如果只导入一个目录，默认会去这个目录下导入 index.js\n// import router from '@/router/index.js'\nimport router from '@/router'\n\n// （2）将路由模块挂载到 new Vue 中的 router 属性\nnew Vue({\n  render: h => h(App),\n\n  // 属性名 和 属性值 一样可以简写\n  // router: router\n  router\n}).$mount('#app')\n")])])]),t("p",[n._v("需求：点击 路由链接，显示对应的组件\n-- App 组件\n"),[t("div",{staticClass:"app-container"})]],2),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('    // （1）为点击的路由链接，设置 Hash 值\n\n    // <a href="#/home">首页</a>\n    // <a href="#/movie">电影</a>\n    // <a href="#/about">关于</a>\n\n    // 优化：使用 router-link 来替代 a 标签\n    // router-link 标签：定义路由链接\n    <router-link to="/home>首页</router-link>\n    <router-link to="/movie>电影</router-link>\n    <router-link to="/about>关于</router-link>\n\n    <hr />\n\n    // （2）定义 组件占位符\n    // router-view\n      // 作用：占位符，给组件占位置的\n      // 特性：是由 vue-router 提供的\n    <router-view></router-view>\n\n  </div>\n</template>\n')])])]),t("p",[n._v("-- index.js（路由模块）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// （3）导入组件\nimport Home from '@/components/Home.vue'\nimport Movie from '@/components/Movie.vue'\nimport About from '@/components/About.vue'\n\n// （4）创建路由实例对象，并定义路由规则\nconst router = new VueRouter({\n  // routes 作用：定义 hash地址 与 组件 之间的对应关系\n  routes: [\n    // routes 里面的每一项被称为 路由规则。路由规则匹配成功，则展示对应的组件\n    { path: '/home', component: Home },\n    { path: '/movie', component: Movie },\n    { path: '/about', component: About },\n  ]\n})\n")])])]),t("p",[n._v("路由重定向\n路由重定向：用户在访问 地址A 的时候，强制用户跳转到 地址C ，从而展示特定的组件页面\n解决：页面加载完毕后，默认访问的是 #/ 的 Hash地址 的问题\n解决方法：为 / 地址添加一个路由规则，使用 redirect 跳转到指定路由地址中\n// redirect：跳转到指定路由地址（路由重定向）\n{ path: '/', redirect: '/home' },")]),n._v(" "),t("p",[n._v("嵌套路由\n嵌套路由：通过路由实现组件的嵌套展示\n可以理解为：router-view 里嵌套 router-link 和 router-view 就是嵌套路由")]),n._v(" "),t("p",[n._v("-- App 组件\n"),[t("div",{staticClass:"app-container"},[n._v('\n<router-link to="/home>首页'),n._v('\n<router-link to="/movie>电影'),n._v('\n<router-link to="/about>关于'),n._v(" "),t("hr"),n._v(" "),t("router-view")],1)]],2),n._v(" "),t("p",[n._v("-- About 组件\n"),[t("div",{staticClass:"about-container"})]],2),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('    // （1）为点击的路由链接，设置 Hash 值\n    <router-link to="/about/tab1">tab1</router-link>\n    <router-link to="/about/tab2">tab2</router-link>\n    <hr />\n\n    // （2）定义 组件占位符\n    <router-view></router-view>\n\n  </div>\n</template>\n')])])]),t("p",[n._v("-- index.js（路由模块）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// （3）导入组件\nimport Tab1 from '@/components/Tab1.vue'\nimport Tab2 from '@/components/Tab2.vue'\n\n// （4）在父级路由规则中的 children 节点中定义子路由规则\nconst router = new VueRouter({\n  routes: [\n    { \n      path: '/about',\n      component: About,\n\n      // （5）路由重定向\n      redirect: '/about/tab1',\n\n      children: [\n\n        // （5）默认子路由\n        // 默认子路由：children 数组中，某个路由规则的 path 为空字符串，则这条规则为 默认子路由。目的和 路由重定向一样，都是在访问 / 路由地址时，跳转到指定路由地址中\n        // { path: 'tab1', component: Tab1 },\n        { path: '', component: Tab1 },\n        { path: 'tab2', component: Tab2 }\n      ]\n    }\n  ]\n})\n")])])]),t("p",[n._v("动态路由匹配\n作用：提高路由规则的复用性\n使用方法：把 Hash地址 中可变的部分定义为参数项\n语法：:占位符\n获取 参数项（路径参数）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("方法一：$route.params 对象\n  $route.params.参数项\n\n方法二（推荐）：props\n  // （1）定义 props\n  props: ['mid']      \n  // （2）开启 props\n  { path: '/movie/:mid', component: Movie, props: true }\n")])])]),t("p",[n._v('查询参数：在 Hash地址 中 ? 后面的参数\n获取 查询参数：$route.query    // { name: "zs, age: "20" }')]),n._v(" "),t("p",[n._v("获取 完整地址：$route.fullPath    // /movie/2?name=zs&age=20")]),n._v(" "),t("p",[n._v("获取 路径：$route.path    // /movie/2")]),n._v(" "),t("p",[n._v("需求：点击 路由链接，获取对应电影的详情")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("<router-link to=\"/movie/1\">电影1</router-link>\n<router-link to=\"/movie/2?name=zs age=20\">雷神</router-link>\n<router-link to=\"/movie/3\">电影3</router-link>\n\n-- App 组件\n\n  传统方法：\n    缺点：如果有一万个路由链接，就要设置一万个路由规则，导致路由规则的复用性差\n\n    { path: '/movie/1', component: Movie }\n    { path: '/movie/2', component: Movie }\n    { path: '/movie/3', component: Movie }\n\n  动态路由匹配方法：\n    { path: '/movie/:id', component: Movie }\n\n-- index.js\n  routes: [\n    { path: '/movie/:mid', component: Movie, props: true }\n  ]\n\n-- Movie 组件\n  <template>\n    <div class=\"movie-container\">\n      // <h3>Movie 组件 --- "+n._s(n.$route.params.mid)+"</h3>\n    </div>\n  </template>\n\n  <script>\n    props: ['mid']\n  <\/script>\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);