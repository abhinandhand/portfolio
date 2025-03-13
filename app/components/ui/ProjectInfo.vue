<template>
  <div
    class="absolutue row-start-2 col-span-full md:row-start-1 z-10 shadow-lg rounded-md p-8 pt-4 bg-theme"
  >
    <span class="inline-block text-lg mb-3 text-primary-5">{{ project.id }}.</span>
    <a
      class="no-underline"
      href=""
    >
      <h3
        class="!text-lg mb-6 leading-normal !uppercase cursor-pointer text-grey-1 hover:text-primary-brand transition-all duration-300"
      >
        {{ project.title }}
      </h3>
    </a>
    <p class="text-grey-3">
      {{ project.description }}
    </p>

    <p class="text-grey-3">
      {{ project?.description2 }}
    </p>

    <p class="text-grey-3">
      {{ project?.description3 }}
    </p>
    <div class="mb-4">
      <ul>
        <li
          v-for="tech in project.stack"
          :key="tech"
          class="text-grey-5 bg-grey-9 text-sm rounded-md m-1 px-2 py-1 uppercase inline-block"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
    <ul class="flex flex-row items-center gap-2 mt-8">
      <li
        v-for="(link, key) in project.links"
        :key="key"
        class=""
      >
        <NuxtLink
          :key="key"
          :to="link"
          target="_blank"
          class="transition-colors duration-300 hover:text-primary-brand cursor-pointer"
        >
          <GitHubSvg
            v-if="key == 'github'"
            class="w-6 h-6"
          ></GitHubSvg>
          <LiveDemoSvg
            v-else
            class="w-6 h-6"
          ></LiveDemoSvg>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import GitHubSvg from '~/assets/icons/svg/GitHubSvg.vue';
import LiveDemoSvg from '~/assets/icons/svg/LiveDemoSvg.vue';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss"></style>
