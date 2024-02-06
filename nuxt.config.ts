// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/css/main.scss"],
  primevue: {
    options: {
      unstyled: true,
    },
    components: {
      include: ["Dropdown", "InputText"],
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
