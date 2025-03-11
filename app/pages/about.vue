<template>
  <IllustrationContentSection heading="About Me">
    <template #illustration>
      <HeroWorkingSvg />
    </template>
    <template #content>
      <p class="text-grey-5 mt-4">
        I do not fear computers. I fear the lack of them.
      </p>

      <p class="text-grey-5 mt-4">
        I am a developer with a keen interest in technology. Beside challenging
        myself, I love learning new technologies and languages.
      </p>

      <p>
        I completed my bachelor's degree in <i>Computer Communication</i> from
        NMAM Institute of Technology, Nitte.
      </p>
      <div class="mt-5">
        <UiLink
          label="Resume"
          type="primary"
          to="/contact"
        />
      </div>
    </template>
  </IllustrationContentSection>
</template>

<script setup lang="ts">
import HeroWorkingSvg from '~/assets/icons/svg/HeroWorkingSvg.vue';
import IllustrationContentSection from '~/components/ui/IllustrationContentSection.vue';
</script>
