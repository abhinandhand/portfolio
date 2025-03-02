<template>
  <div>
    <h1>Hello World</h1>
    <p>
      My first

      Vue 3 app
    </p>

    <button
      class="mt-4 px-4 py-2 bg-blue-500"
      @click="increment"
    >
      Clicked

      {{ count }} times
    </button>
    <ui-button />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
const increment = () => {
  count.value++;
};
</script>
