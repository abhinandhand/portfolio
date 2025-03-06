<template>
  <label
    class="sm:hidden relative z-40 cursor-pointer px-0 py-4"
    for="mobile-menu"
  >
    <input
      id="mobile-menu"
      v-model="isMenuOpen"
      class="peer hidden"
      type="checkbox"
    />
    <div class="relative z-50 block w-7 h-4 group">
      <div
        class="absolute top-0 left-0 w-full h-[3px] bg-primary-brand transition-transform duration-200 ease-out group-peer-checked:rotate-45 group-peer-checked:top-1/2"
      ></div>
      <div
        class="absolute group-peer-checked:top-2 bottom-0 left-0 w-full h-[3px] bg-primary-brand transition-transform duration-200 ease-out group-peer-checked:-rotate-45 group-peer-checked:bottom-1/2"
      ></div>
    </div>

    <div
      class="fixed mt-20 inset-0 z-40 hidden h-full w-full bg-primary-10 backdrop-blur-sm peer-checked:block"
    >
      &nbsp;
    </div>
    <div
      class="fixed top-20 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
    >
      <div
        class="float-right min-h-full w-full bg-primary-10 px-6 p-5 shadow-2xl"
      >
        <ul>
          <li
            v-for="menu in menus"
            :key="menu.name"
            class="py-4 font-bold"
          >
            <NuxtLink
              :to="menu.to"
              @click="closeMenu"
            >{{
              menu.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
const menus = ref([
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
]);

const isMenuOpen = ref(false);

const toggleBodyScroll = () => {
  if (isMenuOpen.value) {
    document.body.classList.add('overflow-hidden');
  }
  else {
    document.body.classList.remove('overflow-hidden');
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(isMenuOpen, toggleBodyScroll);
</script>
