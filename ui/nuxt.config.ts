// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", ["nuxt-ssr-lit", { litElementPrefix: ["ui-"] }]],
  eslint: {
    config: {
      stylistic: {
        semi: true,
        indent: 2,
      },
    },
  },
});
