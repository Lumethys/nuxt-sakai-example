// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@primevue/nuxt-module',
  ],

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
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

  css: ['assets/styles/tailwind.css', 'assets/styles/base.css'],

  primevue: {
    options: {
      theme: 'none'
    }
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})