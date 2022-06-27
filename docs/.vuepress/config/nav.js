module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端",
    link: "/web/",
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {
        text: '基础知识',
        items: [
          { text: 'HTML', link: '/note/HTML/' },
          { text: 'CSS' , link: '/note/CSS/' },
          { text: 'JS' , link: '/note/JS/' },
          { text: 'WebAPI' , link: '/note/WebAPI/' },
          { text: '移动 web 开发' , link: '/note/mobileWeb/' },
          { text: '原生微信小程序' , link: '/note/wx/' },
        ],
      },
      {
        text: '框架',
        items: [
          { text: 'vue2', link: '/note/vue2/' },
          { text: 'vue3' , link: '/note/vue3/' },
          { text: 'vue-element-admin' , link: '/note/vue-element-admin/' },
          { text: 'uni-app' , link: '/note/uni-app/' },
        ],
      },
      {
        text: '库',
        items: [
          { text: 'JQuery', link: '/note/JQuery/' },
          { text: 'EChart' , link: '/note/EChart/' },
          { text: 'Element-ui' , link: '/note/Element-ui/' },
        ],
      },
      {
        text: '其它',
        items: [
          { text: '其它', link: '/note/other/' },
          { text: '报错分析', link: '/note/errorAnalysis/' },
          { text: '编码规范', link: '/note/codingSpecification/' },
          { text: '部署', link: '/note/deployment/' },
          { text: '远程仓库', link: '/note/remoteStore/' },
          { text: 'api 工厂', link: '/note/apiFactory/' },
          { text: 'SASS', link: '/note/SASS/' },
          { text: 'VuePress', link: '/note/VuePress/' },
          { text: 'webpack', link: '/note/webpack/' },
        ],
      }
    ],
  },
  { text: "时间线", link: "/archives/" },
  { text: "关于", link: "/about/" },
];
