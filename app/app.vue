<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { NuxtLayout } from '#components';

useHead({
  title: 'Abhinandhan Frontend Developer',
  meta: [
    {
      name: 'description',
      content: 'Community page',
    },
  ],
  script: [
    {
      src: './theme-toggle.js',
    },

    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-9VLL0RVHTL',
    },

    {
      src: './gtag.js',
    },
  ],
});
</script>
