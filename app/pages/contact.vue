<template>
  <IllustrationContentSection heading="Contact">
    <template #illustration>
      <HeroContactSvg />
    </template>
    <template #content>
      <p class="text-grey-5 mt-4">
        Let's get to know each other, or just drop me a line.
      </p>

      <p class="text-grey-5 mt-4">
        If you are looking to get a hold of me, you can drop me a message:
        <ul class="p-4">
          <li class="flex items-center gap-3 p-1">
            <EmailSvg />
            <a
              class="text-grey-1 font-bold tracking-[0.25rem] hover:text-primary-brand transition-colors duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:abhinandhan.d@gmail.com"
            >abhinandhan.d@gmail.com</a>
          </li>

          <li class="flex items-center gap-3 p-1">
            <WhatsappSvg />
            <a
              class="text-grey-1 font-bold tracking-[0.25rem] hover:text-primary-brand transition-colors duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+917353980025"
            >+31-644915346</a>
          </li>
        </ul>
      </p>

      <p>You can also reach out to me on any social media below.</p>
    </template>
  </IllustrationContentSection>
</template>

<script setup lang="ts">
import EmailSvg from '~/assets/icons/svg/EmailSvg.vue';
import HeroContactSvg from '~/assets/icons/svg/HeroContactSvg.vue';
import WhatsappSvg from '~/assets/icons/svg/WhatsappSvg.vue';
import IllustrationContentSection from '~/components/ui/IllustrationContentSection.vue';
</script>
