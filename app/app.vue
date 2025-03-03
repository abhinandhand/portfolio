<template>
  <Html class="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>

<script setup lang="ts">
import { NuxtLayout } from "#components";

useHead({
  title: "Abhinandhan Frontend Developer",
  meta: [
    {
      name: "description",
      content: "Community page",
    },
  ],
  script: [
    {
      src: "./theme-toggle.js",
    },
  ],
});
</script>
