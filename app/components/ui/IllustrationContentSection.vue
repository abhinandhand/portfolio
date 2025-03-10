<template>
  <section class="bg-primary-10 min-h-custom py-16 md:py-20">
    <div
      class="max-w-6xl mx-auto grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-x-12 gap-y-8 md:py-20"
    >
      <article
        class="flex justify-center items-center w-full px-4 transform xs:scale-60 sm:scale-80 lg:scale-90 xl:scale-95"
      >
        <slot name="illustration"></slot>
      </article>
      <article class="flex flex-col justify-center w-full p-10 md:p-0">
        <h2>{{ heading }}</h2>
        <UiUnderline color="bg-primary-brand" />
        <slot name="content"></slot>
        <div class="mt-10">
          <UiSocialActions />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  heading: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.min-h-custom {
  @apply min-h-[calc(100vh-5rem)];
}
</style>
