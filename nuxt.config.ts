import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/eslint"],
  css: ["~~/assets/css/main.css"],
  compatibilityDate: "2025-03-02",
});
