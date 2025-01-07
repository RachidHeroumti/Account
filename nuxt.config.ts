// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@pinia/nuxt'],
  alias: {
    '@': '/<rootDir>', // Points to the root of the project
    '~': '/<rootDir>', // Also points to the root of the project
  },
})