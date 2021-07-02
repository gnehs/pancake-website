const title = "蓬蓬鬆餅"
const description = "回過神才發現，思考勝勝可愛的存在意義，已讓我廢寢忘食。深入的探討勝勝可愛，是釐清一切的關鍵。我想，把勝勝可愛的意義想清楚，對各位來說並不是一件壞事。面對如此難題，我們必須設想周全。培根告訴我們，重複言說多半是一種時間上的損失。這不禁令我重新仔細的思考，勝勝好可愛喔。"
const url = "https://cute.gnehs.net/"
const img = "https://cute.gnehs.net/cute.png"
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: title },
      { hid: 'description', name: 'description', content: description },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: img },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: url },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: img },
    ],
    link: [
      { rel: 'icon', href: 'https://cute.gnehs.net/sticker/sticker.jpg' },
      { rel: 'stylesheet', href: 'https://gnehs.github.io/ChatUI/css/ChatUI.css' },
      // Google fonts
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // https://shogo82148.github.io/genjyuugothic-subsets/
      { rel: 'stylesheet', href: 'https://shogo82148.github.io/genjyuugothic-subsets/GenJyuuGothic-P-Heavy/GenJyuuGothic-P-Heavy.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['far']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        },
      ]
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
