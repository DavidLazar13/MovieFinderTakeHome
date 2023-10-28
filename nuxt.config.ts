// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ['store/**', 'composables/**/', 'components/**'],
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'vue3-carousel-nuxt'],
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      API_URL: process.env.API_URL,
    },
  },
});
