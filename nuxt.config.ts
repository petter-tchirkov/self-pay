// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    '@vite-pwa/nuxt',
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
      include: ['Dropdown', 'InputText', 'Checkbox', 'InputMask', 'Password']
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
  }
})
