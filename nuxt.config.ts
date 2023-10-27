// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    // Private keys are only available on the server
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,

    // Public keys that are exposed to the client
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },
});
