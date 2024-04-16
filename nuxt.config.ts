export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    'nuxt-primevue',
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs']
      }
    ],
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.scss'],
  primevue: {
    options: {
      unstyled: true
    },
    components: {
      include: ['Dropdown', 'InputText', 'Checkbox', 'InputMask', 'Password', 'Dialog']
    }
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ua', iso: 'uk-UA', file: 'ua.json', name: 'Українська' }
    ]
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL
    }
  },
  imports: {
    dirs: ['stores', 'composables', 'types']
  }
})
