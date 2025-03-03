<template>
  <nav class="bg-bg-primary text-text-primary p-4">
    <div class="@container/nav flex justify-between items-center">
      <div class="flex items-center">
        <LogoSvg />
      </div>
      <ul class="flex">
        <li class="bg-grey-dark hover:bg-primary-light">
          Home page
        </li>
        <li>About</li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import LogoSvg from '~/assets/icons/svg/LogoSvg.vue';
</script>

<style lang="scss" scoped></style>
