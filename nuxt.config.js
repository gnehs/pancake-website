const title = "蓬蓬鬆餅"
const description = "蓬鬆軟綿的蓬蓬鬆餅，一口咬下軟呼呼，世人都愛的美味鬆餅。"
const url = "https://pancake.gnehs.net/"
const img = "https://pancake.gnehs.net/img/pancake-bg.jpg"
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
      // https://shogo82148.github.io/genjyuugothic-subsets/
      { rel: 'stylesheet', href: 'https://shogo82148.github.io/genjyuugothic-subsets/GenJyuuGothic-P-Heavy/GenJyuuGothic-P-Heavy.css' },
      // https://fonts.google.com/specimen/Noto+Sans+TC
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap' },
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
    }],
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: 'G-PLF79K98B3',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
