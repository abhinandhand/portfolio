<template>
  <div class="@container/profile bg-primary-10">
    <div class="max-w-6xl mx-auto min-h-custom flex">
      <article
        class="flex min-h-custom flex-col justify-center items-left w-full px-20 -translate-y-20"
      >
        <div class="bg-primary-5 h-1 mb-5 ml-0 w-20"></div>
        <h1>I'm Abhi</h1>
        <h4 class="text-grey-5">
          Frontend Developer at Rabobank
        </h4>
      </article>
      <article class="hidden md:block w-full px-20">
        Logo
      </article>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.min-h-custom {
  @apply min-h-[calc(100vh-5rem)];
}
</style>
