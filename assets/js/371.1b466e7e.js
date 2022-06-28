(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{933:function(n,e,t){"use strict";t.r(e);var o=t(15),s=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("Option API（选项 API）（Vue 2.x）\n代码风格：将功能代码写在指定位置中\n缺点：\n1、功能代码分散\n2、阅读性差\n2、维护性差\n如：实现累加功能\n1、在 data 中声明数据\n2、在 methods 声明方法\n3、将上面两步组合在一起才可以完成\n特性：如果是小功能这样写没问题，但如果是个复杂的功能，会有很多的数据很方法，如果还这样写是非常分散的")]),n._v(" "),t("p",[n._v("mixins\n作用：功能封装（复用）\n缺点：数据、方法覆盖的概率很大，不好维护\n如：将 a.js 和 b.js 引入到 html 里，如果这两个 js 文件中有相同的变量和方法，就会导致覆盖")]),n._v(" "),t("p",[n._v("Compositon API（组合式 API）（Vue 3.x）\n代码风格：一个功能的代码组织在一起（包含数据，函数...）\n作用：解决 option API 和 mixins 的缺点")]),n._v(" "),t("p",[n._v("在组件中实现以两个功能：\n功能一：鼠标移动显示坐标\n功能二：点击按钮递增")]),n._v(" "),t("p",[n._v("Option API 风格：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <div>鼠标位置：</div>\n    <div>X轴：'+n._s(n.x)+"</div>\n    <div>Y轴："+n._s(n.y)+"</div>\n    <hr>\n    <div>"+n._s(n.count)+" <button @click=\"add()\">自增</button></div>  \n  </div>\n</template>\n<script>\n  export default {\n    name: 'App',\n    data () {\n      return {\n        x: 0,\n        y: 0,\n        count: 0\n      }\n    },\n    mounted() {\n      document.addEventListener('mousemove', this.move)\n    },\n    methods: {\n      move(e) {\n        this.x = e.pageX\n        this.y = e.pageY\n      },\n      add () {\n        this.count++\n      }    \n    },\n    destroyed() {\n      document.removeEventListener('mousemove', this.move)\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("Compositon API 风格：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <div>鼠标位置：</div>\n    <div>X轴：'+n._s(n.x)+"</div>\n    <div>Y轴："+n._s(n.y)+"</div>\n    <hr>\n    <div>"+n._s(n.count)+" <button @click=\"add()\">自增</button></div>  \n  </div>\n</template>\n<script>\n  import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue'\n\n  export default {\n    name: 'App',\n    setup () {\n\n      // 累加功能\n      const count = ref(0)\n      const add = () => {\n        count.value ++ \n      }\n\n      // 鼠标移动功能\n      const mouse = reactive({\n        x: 0,\n        y: 0\n      })\n      const move = e => {\n        mouse.x = e.pageX\n        mouse.y = e.pageY\n      }\n      onMounted(()=>{\n        document.addEventListener('mousemove',move)\n      })\n      onUnmounted(()=>{\n        document.removeEventListener('mousemove',move)\n      })\n\n      // ...功能\n\n      // 返回数据\n      return {\n        ...toRefs(mouse),\n        count,\n        add\n      }\n    }\n  }\n<\/script>")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);