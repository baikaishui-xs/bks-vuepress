(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{940:function(n,e,t){"use strict";t.r(e);var o=t(15),a=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("（1）父组件 向 子组件 传递数据\n使用步骤：\n1、父组件通过 v-bind 将数据传递给子组件\n2、子组件通过 props 接收父组件传递过来的数据\n3、使用 setup 参数将数据传递到 setup 中")]),n._v(" "),t("p",[n._v("--父组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h1>父组件</h1>\n    <p>'+n._s(n.money)+"</p>\n    <hr>\n    <Son :money=\"money\" />  // 1、父组件通过 v-bind 将数据传递给子组件\n  </div>\n</template>\n<script>\n  import { ref } from 'vue'\n  import Son from './Son.vue'\n  export default {\n    name: 'App',\n    components: {\n      Son\n    },\n    setup () {\n      const money = ref(100)\n      return { money }\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("-- 子组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h1>子组件</h1>\n    <p>'+n._s(n.money)+"</p>\n  </div>\n</template>\n<script>\n  import { onMounted } from 'vue'\n  export default {\n    name: 'Son',\n    props: {  // 2、子组件通过 props 接收父组件传递过来的数据\n      money: {\n        type: Number,\n        default: 0\n      }\n    },\n    setup (props) {  // 3、使用 setup 参数将数据传递到 setup 中\n      console.log(props.money)\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("（2）子组件 向 父组件 传递数据\n使用步骤：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("子组件：\n  1、解构 emit 方法\n  2、定义一个方法，第一个参数传递自定义事件名\n  3、将这个方法 return 出去\n\n父组件：\n  4、绑定自定义事件\n  5、使用自定义事件中的 参数，接收子组件传递过来的数据\n")])])]),t("p",[n._v("-- 子组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h1>子组件</h1>\n    <p>'+n._s(n.money)+"</p>\n    <button @click=\"changeMoney\">花50元</button>\n  </div>\n</template>\n<script>\n  import { onMounted } from 'vue'\n  export default {\n    name: 'Son',\n    setup (props, {emit}) {  // 1、解构 emit 方法\n        const changeMoney = () => {  // 2、定义一个方法，第一个参数传递自定义事件名\n          emit('change-money', 50)\n        }\n      return {changeMoney}  // 3、将这个方法 return 出去\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("-- 父组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h1>父组件</h1>\n    <p>'+n._s(n.money)+"</p>\n    <hr>\n\n    // <Son :money=\"money\" @change-money=\"updateMoney\" />  // 4、绑定自定义事件\n    <Son v-money:money=\"money\" />  // 简写\n\n  </div>\n</template>\n<script>\n  import { ref } from 'vue'\n  import Son from './Son.vue'\n  export default {\n    name: 'App',\n    components: {\n      Son\n    },\n    setup () {\n      const money = ref(100)\n      const updateMoney = (newMoney) => {  5、使用自定义事件中的参数，接收子组件传递过来的数据\n        money.value = newMoney\n      }\n      return { money , updateMoney}\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("（3）父组件 和 子组件 的双向数据同步\n使用步骤：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("子组件：\n  1、解构 emit 方法\n  2、定义一个方法， 调用 emit，第一个参数传递 update:数据\n  3、将这个方法 return 出去\n\n父组件：\n  4、使用 update:数据 绑定自定义事件\n  5、使用自定义事件中的参数，接收子组件传递过来的数据\n")])])]),t("p",[n._v("-- 子组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h1>子组件</h1>\n    <p>'+n._s(n.money)+"</p>\n    <button @click=\"changeMoney\">花50元</button>\n  </div>\n</template>\n<script>\n  import { onMounted } from 'vue'\n  export default {\n    name: 'Son',\n    setup (props, {emit}) {  // 1、解构 emit 方法\n        const changeMoney = () => {  // 2、定义一个方法， 调用 emit，第一个参数传递 update:数据 \n          emit('update:money', 50)\n        }\n      return {changeMoney}  // 3、将这个方法 return 出去\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("-- 父组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h1>父组件</h1>\n    <p>'+n._s(n.money)+"</p>\n    <hr>\n    <Son :money=\"money\" @update:money=\"updateMoney\" />  // 4、使用 update:数据 绑定自定义事件\n  </div>\n</template>\n<script>\n  import { ref } from 'vue'\n  import Son from './Son.vue'\n  export default {\n    name: 'App',\n    components: {\n      Son\n    },\n    setup () {\n      const money = ref(100)\n      const updateMoney = (newMoney) => {  5、使用自定义事件中的参数，接收子组件传递过来的数据\n        money.value = newMoney\n      }\n      return { money , updateMoney}\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("（4）后代组件 之间的数据共享\n原理：provide、inject\n使用步骤：\n1-1、使用 provide 方法将数据共享给后代组件\n1-2、使用 inject 方法接收祖先组件提供的数据\n特性：后代组件不能直接修改共享的数据，应该遵循单项数据流原则，也就是谁定义谁修改原则，如果有后代组件要修改共享数据的需求，应该通知祖先组件，让祖先组件取修改\n使用步骤：\n父组件：\n2-1、定义修改共享数据的方法\n2-2、将这个方法共享出去\n后代组件：\n2-3、接收方法\n2-4、调用方法")]),n._v(" "),t("p",[n._v("-- 父组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h1>父组件 '+n._s(n.money)+" <button @click=\"money=1000\">发钱</button></h1>\n    <hr>\n    <Son />\n  </div>\n</template>\n<script>\n  import { provide, ref } from 'vue'\n  import Son from './Son.vue'\n  export default {\n    name: 'App',\n    components: {\n      Son\n    },\n    setup () {\n      const money = ref(100)\n      const changeMoney = (saleMoney) => {  // 2-1、定义修改共享数据的方法\n        console.log('changeMoney',saleMoney)\n        money.value = money.value - saleMoney\n      }\n\n      // 语法：provide('标识符', 共享的数据) \n      provide('money', money)  // 1-1、使用 provide 方法将数据共享给后代组件\n      provide('changeMoney', changeMoney)  // 2-2、将这个方法共享出去\n\n      return { money }\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("-- 子组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h2>子组件 '+n._s(n.money)+"</h2>\n    <hr>\n    <GrandSon />\n  </div>\n</template>\n<script>\n  import { inject } from 'vue'\n  import GrandSon from './GrandSon.vue'\n  export default {\n    name: 'Son',\n    components: {\n      GrandSon\n    },\n    setup () {\n      const money = inject('money')  // 1-2、使用 inject 方法接收祖先组件提供的数据\n      return { money }\n    }\n  }\n<\/script>\n")])])]),t("p",[n._v("-- 后代组件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<template>\n  <div class="container">\n    <h3>孙组件 '+n._s(n.money)+" <button @click=\"fn\">消费20</button></h3>  // 2-4、调用方法\n  </div>\n</template>\n<script>\n  import { inject } from 'vue'\n  export default {\n    name: 'GrandSon',\n    setup () {\n      const money = inject('money')  // 1-2、使用 inject 方法接收祖先组件提供的数据\n      const changeMoney = inject('changeMoney')  // 2-3、接收方法\n      const fn = () => {\n        changeMoney(20)\n      }\n      return {money, fn}\n    }\n  }\n<\/script>")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);