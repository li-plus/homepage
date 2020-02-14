module.exports = {
  title: 'Li Jiahao',
  description: 'This is my homepage',
  base: '/',
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/post/',
            itemPermalink: '/post/:year/:month/:day/:slug',
          },
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag', 'tags'],
            path: '/tag/',
            layout: 'Tags',
            scopeLayout: 'Tag'
          },
        ],
      }
    ]
  ],
  theme: '@vuepress/blog',
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    nav: [
      {
        text: 'Blogs',
        link: '/post/',
      },
      {
        text: 'Categories',
        link: '/tag/',
      },
      {
        text: 'About',
        link: '/'
      },
      {
        text: 'Github',
        link: 'https://github.com/li-plus/'
      }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/li-plus/'
        },
        {
          type: 'mail',
          link: 'mailto:lijiahao17@mails.tsinghua.edu.cn'
        }
      ],
      copyright: [
        {
          text: 'Powered by VuePress | Copyright © 2020 Li Jiahao',
          link: '/',
        },
      ],
    },
  }
}