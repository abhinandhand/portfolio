<template>
  <div class="flex space-x-8 sm:space-x-10">
    <NuxtLink
      v-for="social in socialLinks"
      :key="social.name"
      :to="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 hover:text-gray-900 transition-colors duration-300"
    >
      <component
        :is="social.icon"
        class="w-6 h-6"
        :class="isFooter ? 'text-primary-brand hover:text-white' : ''"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import LinkedInSvg from '~/assets/icons/svg/LinkedInSvg.vue';
import TwitterSvg from '~/assets/icons/svg/TwitterSvg.vue';
import GitHubSvg from '~/assets/icons/svg/GitHubSvg.vue';
import FacebookSvg from '~/assets/icons/svg/FacebookSvg.vue';
import InstagramSvg from '~/assets/icons/svg/InstagramSvg.vue';

defineProps({
  isFooter: {
    type: Boolean,
    default: false,
  },
});

const socialLinks = computed(() => [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-profile',
    icon: LinkedInSvg,
  },
  { name: 'GitHub', url: 'https://github.com/your-profile', icon: GitHubSvg },
  {
    name: 'Twitter',
    url: 'https://twitter.com/your-profile',
    icon: TwitterSvg,
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/your-profile',
    icon: FacebookSvg,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/your-profile',
    icon: InstagramSvg,
  },
]);
</script>
