(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{894:function(t,s,o){"use strict";o.r(s);var n=o(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("解决：\n1、每个组件中都要导入 axios，导致代码臃肿的 问题\n2、每次发请求都要填写完整的请求路径，导致代码不利于后期维护 的问题")]),t._v(" "),o("p",[t._v("使用步骤：\n（1）导入 axios\n（2）配置请求根路径\n（3）将 axios 挂载到 Vue 的自定义属性中\n（4）通过 this.$http 使用 axios")]),t._v(" "),o("p",[t._v("-- main.js\nimport axios from 'axios'  // （1）导入 axios\naxios.defaults.baseURL = 'https://www.escook.cn'  // （2）配置请求根路劲\nVue.prototype.$http = axios  // （3）将 axios 挂载到 Vue 的自定义属性中")]),t._v(" "),o("p",[t._v("-- 组件\nthis.$http.get('/users')  // （4）通过 this.$http 使用 axios")])])}),[],!1,null,null,null);s.default=e.exports}}]);