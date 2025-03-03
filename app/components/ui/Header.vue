<template>
  <nav class="bg-bg-primary text-text-primary p-4">
    <div class="@container/nav max-w-6xl mx-auto flex justify-between">
      <div class="flex items-center">
        <NuxtLink to="/">
          <LogoSvg />
        </NuxtLink>
      </div>

      <ul class="flex gap-8 items-center">
        <li v-for="menu in menus" :key="menu.name">
          <NuxtLink
            :to="menu.to"
            :class="[
              'tracking-[.25rem] font-bold capitalize transition-all duration-300 hover:text-primary-light cursor-pointer',
              $route.path === menu.to
                ? 'text-primary-light'
                : 'text-text-primary',
            ]"
          >
            {{ menu.name }}
          </NuxtLink>
        </li>
        <li><ThemeSelector /></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import ThemeSelector from './ThemeSelector.vue';
import LogoSvg from '~/assets/icons/svg/LogoSvg.vue';

const menus = ref([
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
]);
</script>

<style lang="scss" scoped></style>
