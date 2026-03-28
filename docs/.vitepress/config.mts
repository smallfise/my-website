import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Qinxiaoyu的个人网站",
  description: "博客与想法",
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '想法', link: '/thoughts/' },
    ],

    sidebar: {
      '/blog/': [
        {
          text: '博客文章',
          items: [
            { text: '欢迎', link: '/blog/' },
          ]
        }
      ],
      '/thoughts/': [
        {
          text: '想法',
          items: [
            { text: '全部想法', link: '/thoughts/' },
          ]
        }
      ]
    },

    socialLinks: [],

    footer: {
      message: '用 VitePress 构建',
      copyright: 'Copyright © 2026'
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '语言'
  }
})
