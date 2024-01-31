// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // ... options
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Vince Linise - développeur et designer graphique',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Développeur web et mobile, UI/UX, brand & motion designer' }
      ]
    }
  },
})
