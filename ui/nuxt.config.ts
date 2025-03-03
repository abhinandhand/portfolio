import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', ['nuxt-ssr-lit', { litElementPrefix: ['ui-'] }]],
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
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
