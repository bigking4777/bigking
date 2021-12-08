module.exports = {
    title: 'Yang Tao',  // 设置网站标题
    base : '/bigking/',
    theme: 'reco',
    themeConfig : {
      type: 'blog',
      authorAvatar: '/hero.jpg',
      logo: '/hero.jpg',
      nav : [
          { text: 'About Me', link: '/pages/' },
          { text: '组件库', link: '/components/home' },
          { text: '游戏', link: '/game/' },
      ],
      sidebar: {
        "/components/":[
          {
            title: "快速启动！",
            collapsable: true,
            path: "home",
          },
          {
            title: "优惠券",
            collapsable: true,
            path: "ticket",
          },
          {
            title: "奇怪的按钮",
            collapsable: true,
            path: "btn",
          },
          {
            title: "我跟ui有仇之仪表盘",
            collapsable: true,
            path: "Dashboard",
          },
          {
            title: "移动的方块",
            collapsable: true,
            path: "DragBox",
          },
        ]
      },
      blogConfig: {
        socialLinks: [     // 信息栏展示社交信息
          { icon: 'reco-blog', link: 'https://www.yuque.com/gebixiaojingang' },
          { icon: 'reco-npm', link: 'https://www.npmjs.com/~ytbigking' }
        ]
      },
      friendLink: [
        {
          title: '语雀',
          desc: '一些日常以及遇到的坑',
          logo: "https://gw.alipayobjects.com/mdn/prod_resource/afts/img/A*FsnmRIiTfe0AAAAAAAAAAABkARQnAQ",
          link: 'https://www.yuque.com/gebixiaojingang'
        }
        // ...
      ]
    }
  }
  
