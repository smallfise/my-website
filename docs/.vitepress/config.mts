import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的个人网站",
  description: "技术笔记与个人知识库",
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '知识库', link: '/notes/' },
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
      '/notes/': [
        {
          text: '知识库',
          items: [
            { text: '目录', link: '/notes/' },
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
