// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: ['@nuxtjs/i18n', '@nuxt/fonts'],

  i18n: {
    // locales: [
    //   { code: 'en', language: 'en-US' },
    //   { code: 'ja', language: 'ja-JP' }
    // ],
    locales: [
      {
        code: 'en',
        file: 'en-US.ts'
      },
      {
        code: 'ja',
        file: 'ja-JP.ts'
      },
    ],
    lazy: true,
    defaultLocale: 'en',
  }
})