export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap',
      },
    ],
    script: [{ src: 'https://code.iconify.design/1/1.0.7/iconify.min.js' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main'],

  modules: ['@nuxtjs/style-resources'],

  //You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['~/assets/scss/abstracts/_variables.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '@/plugins/aos.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  /* modules: ['@nuxtjs/style-resources'], */

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return {
          selector: to.hash,
          offset: { x: 0, y: 0 },
          behavior: 'smooth',
        }
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
