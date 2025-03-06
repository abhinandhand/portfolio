import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // extends: ['../ui'],
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  css: ['~~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-03-02',

  vite: {
    plugins: [tailwindcss()],
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
        indent: 2,
      },
    },
  },
});
