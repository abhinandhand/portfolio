<template>
  <NuxtLink
    class="border-2 border-transparent rounded-lg w-fit inline-block shadow cursor-pointer text-sm font-bold tracking-[var(--spacing)] py-1.5 px-3 uppercase transition-all duration-300 ease-linear"
    :to="to"
    :class="typeClasses"
  >
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value),
  },
  label: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
});

const typeClasses = computed(() => {
  return props.type === 'primary'
    ? 'bg-primary-brand hover:bg-primary-7'
    : 'bg-grey-6 hover:bg-grey-7 text-white';
});
</script>
