<template>
  <div
    :class="color"
    class="h-1 mb-2 ml-0 w-20"
  ></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  color: {
    type: String,
    default: 'bg-primary-5',
  },
});
</script>
