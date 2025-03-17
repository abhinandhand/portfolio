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
      content:
        'Welcome to Abhinandhan\'s portfolio. Explore my projects, skills, and experience in software development',
    },
    {
      name: 'keywords',
      content:
        'Abhinandhan, frontend developer, portfolio, web development, projects, skills, experience',
    },
    {
      name: 'author',
      content: 'Abhinandhan',
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
