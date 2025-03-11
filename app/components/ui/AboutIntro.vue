<template>
  <section class="py-8 md:py-0">
    <div
      class="max-w-6xl mx-auto grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-x-12 gap-y-8 md:py-8"
    >
      <article
        class="relative flex justify-self-center md:before:content-[''] md:before:absolute md:before:border-4 md:before:border-primary-5 md:before:rounded-md md:before:h-full md:before:w-full md:before:right-[2rem] md:before:top-[2rem]"
      >
        <img
          src="/profile-photo.jpg"
          class="max-h-[30rem] max-w-[25rem] object-cover relative rounded-md"
        />
      </article>
      <article class="flex flex-col justify-center w-full p-10 md:p-0">
        <h2>About</h2>
        <UiUnderline color="bg-primary-brand" />

        <p class="text-grey-5 mt-4">
          I am a developer by curiosity with a keen interest in technology.
          Beside challenging myself, I love learning new technologies and
          languages.
        </p>

        <p class="text-grey-5 mt-4">
          An experienced and skilled Engineer with over 8 years of experience in
          crafting user-friendly web applications. Specialized in web
          development with a strong passion for building highly scalable and
          maintainable web solutions. Possess a product-oriented mindset and
          empathy for customers. Proficient in JavaScript ecosystem, with a
          shift-left testing mindset and proven ability to collaborate
          effectively with cross-functional teams to deliver reliable optimised
          software solutions. Seeking career advancement with an esteemed
          organization to deliver quality software and exceptional user
          experience, ultimately contributing to company growth.
        </p>

        <UiLink label="Learn More" type="primary" to="/contact" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
