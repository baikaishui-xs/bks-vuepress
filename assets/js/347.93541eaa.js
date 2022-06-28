(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{908:function(s,n,a){"use strict";a.r(n);var t=a(15),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('作用：在封装组件时，将不确定的地方，交由用户自定义\n\n使用步骤：\n    （1）定义 插槽（-- 子组件）\n        <slot name="neirong">我是默认内容</slot>\n\n    （2）在组件中 填充内容（-- 父组件）\n        方法一（推荐）：\n            <Left>\n                <template #neirong>\n                    <p>这是在 Left 组件的内容区域，定义的 p 标签</p>\n                </template>\n            </Left>\n\n        方法二：\n            <Left>\n                <template v-slot:neirong>\n                    <p>这是在 Left 组件的内容区域，定义的 p 标签</p>\n                </template>\n            </Left>\n\n        方法三：\n            <Left>\n                <p slot="neirong">这是在 Left 组件的内容区域，定义的 p 标签</p>\n            </Left>\n\n\n特性：\n    1、Vue 官方规定每个插槽都要有一个自己的名称，如果省略，默认名称为 default\n    2、v-slot 只能放在 <template> 标签 中，并且 <template>标签 不会被渲染到页面中，它只是起到一个包含的作用\n    3、v-slot: 可以简写为 #\n    4、写在插槽里的内容为默认内容，当用户不指定内容时，采用默认内容。官方把这个方法叫做 后备内容\n\n具名插槽（推荐）：带有名字的插槽\n\n例一：用户自定义内容    \n    -- App 组件\n        <template>\n            <div class="app-container">\n\n                // （2）在组件中 填充内容\n                <Left>\n                    <template #neirong>\n                        <p>这是在 Left 组件的内容区域，定义的 p 标签</p>\n                    </template>\n                </Left>\n\n            </div>\n        </template>\n\n    -- Left 组件\n        <template>\n            <div class="left-container">\n                \n                // （1）定义 插槽\n                <slot name="neirong">我是默认内容</slot>\n                \n            </div>\n        </template>\n\n例二：让用户自定义 文章标题、文章内容、文章作者\n\n    -- App 组件\n        <template>\n            <div class="app-container">\n\n                <Article>\n\n                    <template #title>\n                        <h3>一首诗</h3>\n                    </template>\n\n                    <template #content>\n                        <div>\n                            <p>啊，大海，全是水</p>\n                            <p>啊，蜈蚣，全是腿</p>\n                            <p>啊，辣椒，净辣嘴</p>\n                        </div>\n                    </template>\n\n                    <template #author>\n                        <div>作者：彬果锅</div>\n                    </template>\n\n                </Article>\n                \n            </div>\n        </template>\n\n    -- Article 组件\n        <template>\n            <div class="article-container">\n\n                // 文章标题\n                <div class="header-box">\n                    <slot name="title"></slot>\n                </div>\n\n                // 文章内容\n                <div class="content-box">\n                    <slot name="content"></slot>\n                </div>\n\n                // 文章作者\n                <div class="author-box">\n                    <slot name="author"></slot>\n                </div>\n            </div>\n        </template>\n\n作用域插槽\n    概念：带自定义属性的插槽，称为 作用域插槽\n    作用：为用户提供数据\n    使用步骤：\n        （1）在插槽中定义 自定义属性\n        （2）获取插槽中的 自定义属性\n    特性：获取插槽中的自定义，是一个对象\n\n-- App 组件\n    <template>\n        <div class="app-container">\n\n            <Article>\n\n                // （2）获取插槽中的 自定义属性\n\n                // <template #author="scope">\n                // <div>{{ scope }}</div>  // { "msg": "hello vue", "user": { "name": "zs", "age": 20 } }\n\n                // 解构插槽\n                <template #author="{ msg, user }">\n                    <div>{{ msg }}</div>  // "hello vue"\n                    <div>{{ user.name }} </div>  // "zs"\n                </template>\n\n            </Article>\n            \n        </div>\n    </template>\n\n-- Article 组件\n    <template>\n        <div class="article-container">\n            <div class="author-box">\n\n                // （1）在插槽中定义 自定义属性\n                <slot name="author" msg="userinfo" :user="userinfo"></slot>\n\n            </div>\n        </div>\n    </template>\n\n    data() {\n        return {\n            userinfo: {\n                name: \'zs\',\n            }\n        }\n    }\n\n    例子：将渲染的结构，交由用户自定义\n        -- App.vue\n        \n            <div>\n                <my-test>\n                    <template #default="{ msg, info }">\n                        <p>{{ msg }}</p>\n                        <p>{{ info.address }}</p>\n                    </template>\n                </my-test>\n\n                <my-table>\n                    <template #default="{user}">\n                        <td>{{ user.id }}</td>\n                        <td>{{ user.name }}</td>\n                        <td>\n                            <input type="checkbox" :checked="user.state" />\n                        </td>\n                    </template>\n                </my-table>\n            </div>\n\n            import MyTest from \'./MyTest.vue\'\n            import MyTable from \'./MyTable.vue\'\n\n            name: \'MyApp\',\n            components: {\n                MyTest\n            }\n\n        -- MyTable.vue\n\n            <table>\n                <tbody>\n                    <tr v-for="item in list" :key="item.id">\n\n                        // <td>{{ item.id }}</td>\n                        // <td>{{ item.name }}</td>\n                        // <td>{{ item.state }}</td>\n\n                        <slot :user="item"></slot>\n\n                    </tr>\n                </tbody>\n            </table>\n\n            name: \'MyTable\',\n            data() {\n                return {\n                    list: [\n                        { id: 1, name: \'张三\', state: true },\n                        { id: 2, name: \'李四\', state: false },\n                        { id: 3, name: \'赵六\', state: false },\n                    ]\n                }\n            }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br"),a("span",{staticClass:"line-number"},[s._v("153")]),a("br"),a("span",{staticClass:"line-number"},[s._v("154")]),a("br"),a("span",{staticClass:"line-number"},[s._v("155")]),a("br"),a("span",{staticClass:"line-number"},[s._v("156")]),a("br"),a("span",{staticClass:"line-number"},[s._v("157")]),a("br"),a("span",{staticClass:"line-number"},[s._v("158")]),a("br"),a("span",{staticClass:"line-number"},[s._v("159")]),a("br"),a("span",{staticClass:"line-number"},[s._v("160")]),a("br"),a("span",{staticClass:"line-number"},[s._v("161")]),a("br"),a("span",{staticClass:"line-number"},[s._v("162")]),a("br"),a("span",{staticClass:"line-number"},[s._v("163")]),a("br"),a("span",{staticClass:"line-number"},[s._v("164")]),a("br"),a("span",{staticClass:"line-number"},[s._v("165")]),a("br"),a("span",{staticClass:"line-number"},[s._v("166")]),a("br"),a("span",{staticClass:"line-number"},[s._v("167")]),a("br"),a("span",{staticClass:"line-number"},[s._v("168")]),a("br"),a("span",{staticClass:"line-number"},[s._v("169")]),a("br"),a("span",{staticClass:"line-number"},[s._v("170")]),a("br"),a("span",{staticClass:"line-number"},[s._v("171")]),a("br"),a("span",{staticClass:"line-number"},[s._v("172")]),a("br"),a("span",{staticClass:"line-number"},[s._v("173")]),a("br"),a("span",{staticClass:"line-number"},[s._v("174")]),a("br"),a("span",{staticClass:"line-number"},[s._v("175")]),a("br"),a("span",{staticClass:"line-number"},[s._v("176")]),a("br"),a("span",{staticClass:"line-number"},[s._v("177")]),a("br"),a("span",{staticClass:"line-number"},[s._v("178")]),a("br"),a("span",{staticClass:"line-number"},[s._v("179")]),a("br"),a("span",{staticClass:"line-number"},[s._v("180")]),a("br"),a("span",{staticClass:"line-number"},[s._v("181")]),a("br"),a("span",{staticClass:"line-number"},[s._v("182")]),a("br"),a("span",{staticClass:"line-number"},[s._v("183")]),a("br"),a("span",{staticClass:"line-number"},[s._v("184")]),a("br"),a("span",{staticClass:"line-number"},[s._v("185")]),a("br"),a("span",{staticClass:"line-number"},[s._v("186")]),a("br"),a("span",{staticClass:"line-number"},[s._v("187")]),a("br"),a("span",{staticClass:"line-number"},[s._v("188")]),a("br"),a("span",{staticClass:"line-number"},[s._v("189")]),a("br"),a("span",{staticClass:"line-number"},[s._v("190")]),a("br"),a("span",{staticClass:"line-number"},[s._v("191")]),a("br"),a("span",{staticClass:"line-number"},[s._v("192")]),a("br"),a("span",{staticClass:"line-number"},[s._v("193")]),a("br"),a("span",{staticClass:"line-number"},[s._v("194")]),a("br"),a("span",{staticClass:"line-number"},[s._v("195")]),a("br"),a("span",{staticClass:"line-number"},[s._v("196")]),a("br"),a("span",{staticClass:"line-number"},[s._v("197")]),a("br"),a("span",{staticClass:"line-number"},[s._v("198")]),a("br"),a("span",{staticClass:"line-number"},[s._v("199")]),a("br"),a("span",{staticClass:"line-number"},[s._v("200")]),a("br"),a("span",{staticClass:"line-number"},[s._v("201")]),a("br"),a("span",{staticClass:"line-number"},[s._v("202")]),a("br"),a("span",{staticClass:"line-number"},[s._v("203")]),a("br"),a("span",{staticClass:"line-number"},[s._v("204")]),a("br"),a("span",{staticClass:"line-number"},[s._v("205")]),a("br"),a("span",{staticClass:"line-number"},[s._v("206")]),a("br"),a("span",{staticClass:"line-number"},[s._v("207")]),a("br"),a("span",{staticClass:"line-number"},[s._v("208")]),a("br"),a("span",{staticClass:"line-number"},[s._v("209")]),a("br"),a("span",{staticClass:"line-number"},[s._v("210")]),a("br"),a("span",{staticClass:"line-number"},[s._v("211")]),a("br"),a("span",{staticClass:"line-number"},[s._v("212")]),a("br"),a("span",{staticClass:"line-number"},[s._v("213")]),a("br"),a("span",{staticClass:"line-number"},[s._v("214")]),a("br"),a("span",{staticClass:"line-number"},[s._v("215")]),a("br"),a("span",{staticClass:"line-number"},[s._v("216")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);