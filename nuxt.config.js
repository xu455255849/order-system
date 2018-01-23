module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/css/reset.css', lang: 'css' },
    { src: '~assets/css/main.less', lang: 'less' }
  ],
  plugins: [
    { src: '~plugins/flexible.js', ssr: false }
  ],
  loading: { color: '#3B8070' },
  cache: true,
  build: {
    vendor: ['axios']
    /*
     ** Run ESLINT on save
     */
 /*   extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
  }
}
