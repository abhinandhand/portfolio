<template>
  <button
    class="appearance-none bg-transparent border-none p-0 m-0 cursor-pointer transition-all duration-300 ease-linear group"
    @click="toggleTheme"
  >
    <MoonSvg v-if="theme === 'light'" />
    <SunSvg v-if="theme === 'dark'" />
  </button>
</template>

<script setup>
import { useLocalStorage } from '#imports';
import MoonSvg from '~/assets/icons/svg/MoonSvg.vue';
import SunSvg from '~/assets/icons/svg/SunSvg.vue';

const { getLocalStorageItem, setLocalStorageItem } = useLocalStorage();
const theme = useState('theme', () => getLocalStorageItem('theme') || 'light');

const storedTheme = computed(() => {
  const savedTheme = getLocalStorageItem('theme');
  return savedTheme === 'dark' ? 'dark' : 'light';
});

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
  setLocalStorageItem('theme', theme.value);
};

onBeforeMount(() => {
  theme.value = storedTheme.value;
});
</script>

<style lang="scss" scoped></style>
