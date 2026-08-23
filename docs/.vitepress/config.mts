import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// 配置文件的目录是 <站点根>/.vitepress，内容目录在它上一级的 <dir>/。
// 用 import.meta.url 定位，跟运行时 cwd 无关——本地是项目根、Cloudflare 是 docs/，两种都能对。
const configDir = dirname(fileURLToPath(import.meta.url))

// 自动收集某目录下的 Markdown 文章，用首行 H1 作为侧边栏标题。
// 以后只要往 blog/ 下丢一个 .md 文件，侧边栏就会自动出现，不用再手动改这里。
function articlesFrom(dir: string) {
  const dirPath = join(configDir, '..', dir)

  return readdirSync(dirPath)
    .filter((f) => f.endsWith('.md') && f !== 'index.md') // 排除目录首页
    .map((f) => {
      const slug = f.replace(/\.md$/, '')
      const raw = readFileSync(join(dirPath, f), 'utf-8')
      const title = raw.match(/^#\s+(.+?)\s*$/m)?.[1] ?? slug
      return { text: title, link: `/${dir}/${slug}` }
    })
    .sort((a, b) => a.link.localeCompare(b.link))
}

export default defineConfig({
  title: "Qinxiaoyu的个人网站",
  description: "博客与想法",
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '想法', link: '/thoughts/' },
      { text: '知识库', link: '/notes/' },
    ],

    sidebar: {
      '/blog/': [
        {
          text: '博客文章',
          items: articlesFrom('blog'),
        }
      ],
      '/thoughts/': [
        {
          text: '想法',
          items: [
            { text: '全部想法', link: '/thoughts/' },
          ]
        }
      ],
      '/notes/': [
        {
          text: '知识库',
          items: [
            { text: '全部知识', link: '/notes/' },
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
