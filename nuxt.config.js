import theme from '@nuxt/content-theme-docs'

module.exports = theme({
  target: 'server',

  docs: {
    primaryColor: '#E24F55'
  },
  loading: { color: '#00CD81' },

  telemetry: false,

  build: {
    // You can extend webpack config here
    transpile: ['@nuxt/content-theme-docs'],
  },
})