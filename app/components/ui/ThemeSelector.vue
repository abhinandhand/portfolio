<template>
  <button
    class="appearance-none bg-transparent border-none p-0 m-0 cursor-pointer transition-all duration-300 ease-linear group"
    @click="toggleTheme"
  >
    <SunSvg v-if="theme === 'dark'" />
    <MoonSvg v-else />
  </button>
</template>

<script setup>
import { useState } from '#imports';
import MoonSvg from '~/assets/icons/svg/MoonSvg.vue';
import SunSvg from '~/assets/icons/svg/SunSvg.vue';

const theme = useState('theme', () => localStorage.getItem('theme') || 'light');

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
  localStorage.setItem('theme', theme.value);
};
</script>

<style lang="scss" scoped></style>
