// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Test Real Factory",
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  },

  css: [
    "@/assets/scss/bootstrap/bootstrap.custom.scss",
    "@/assets/scss/style.scss",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
});
