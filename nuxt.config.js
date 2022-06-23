export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '《深空之眼》官网',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '由勇仕网络研发的全新小队同屏3D动作手游《深空之眼》，现已开放预约！视骸造成的危机之下，Gaea自检程序冠以神名，进化出名为【修正者】的实体，进入世界位面干涉。玩家将作为修正者组织“深空之眼”的管理员，将和他们一同深入视骸肆虐之地，朝毁灭的命运，竖起抗争的战旗！' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://skzy.ys4fun.com/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    "swiper/css/swiper.css",
    '@/static/css/index.scss',
    'animate.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/bus.js',
    { src: "~/plugins/swiper.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  router: {
    base: '/skzy/',
    resourceHints: false,
    prefetchLinks: false  // 解决首屏加载全部js
  },

  generate: {
    devtools: true,
    routes: ['/article/28', '/article/27', '/article/26']
  }
}
