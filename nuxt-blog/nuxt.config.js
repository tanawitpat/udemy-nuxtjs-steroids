export default {
  mode: 'universal', // universal
  /*
   ** Headers of the page
   */
  head: {
    title: "Tanawit's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My cool web development blog :)'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff', height: '4px', duration: 5000 }, // Change to false if no progress-bar needed
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/core-component.js', '~plugins/date-filter.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxtjs-steriods.firebaseio.com',
    fbAPIKey: 'AIzaSyDB1F0jJTLKRKfnOMgC33R4G7x2C6QxpTs'
  },
  router: {
    // base: '/my-app/',
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    // }
    middleware: 'log'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
