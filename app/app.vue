<template>
  <Html class="bg-bg-primary"/>
    <NuxtPage/>
</template>

<script setup lang="ts">

useHead({
  title: 'Abhinandhan Frontend Developer',
  meta: [
    {
      name: 'description',
      content: 'Community page'
    }
  ],
  script:[{
    src: './theme-toggle.js'
  }]
})

</script>
