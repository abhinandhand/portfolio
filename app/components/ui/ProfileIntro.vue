<template>
  <div class="@container/profile bg-primary-10">
    <div class="max-w-6xl mx-auto min-h-custom flex px-12 sm:px-20">
      <article class="flex min-h-custom flex-col justify-center w-full">
        <UiUnderline color="bg-primary-brand" />
        <h1>I'm Abhi</h1>
        <h4 class="text-grey-5">
          Frontend <span class="xs:hidden">Dev</span>
          <span class="hidden xs:inline-block">Developer</span> By Curiosity
        </h4>

        <div class="mt-5">
          <UiLink
            label="Contact Me"
            type="primary"
            to="/contact"
          />
        </div>

        <div class="mt-10">
          <UiSocialActions />
        </div>
      </article>
      <article
        class="hidden md:flex justify-center items-center w-full px-20 transform sm:scale-80 lg:scale-90 xl:scale-110"
      >
        <HeroHelloSvg />
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroHelloSvg from '~/assets/icons/svg/HeroHelloSvg.vue';
</script>

<style scoped>
.min-h-custom {
  @apply min-h-[calc(100vh-5rem)];
}
</style>
