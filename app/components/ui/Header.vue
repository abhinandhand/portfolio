<template>
  <header class="bg-primary-10 p-4">
    <nav class="@container/nav max-w-6xl mx-auto flex justify-between">
      <div class="flex items-center">
        <NuxtLink
          to="/"
          class="cursor-pointer"
        ><LogoSvg /></NuxtLink>
      </div>

      <ul class="flex gap-8 items-center z-100">
        <li
          v-for="menu in menus"
          :key="menu.name"
          class="hidden sm:block cursor-pointer"
        >
          <NuxtLink
            :to="menu.to"
            class="tracking-[.25rem] font-bold capitalize transition-all duration-300 hover:text-primary-brand cursor-pointer"
            :class="{ 'text-primary-brand': $route.path === menu.to }"
          >
            {{ menu.name }}
          </NuxtLink>
        </li>
        <li class="flex transform scale-110 sm:scale-100">
          <UiThemeSelector />
        </li>

        <UiMobileMenu />
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { NuxtLink } from '#components';
import LogoSvg from '~/assets/icons/svg/LogoSvg.vue';

const menus = ref([
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
]);
</script>

<style lang="scss" scoped></style>
