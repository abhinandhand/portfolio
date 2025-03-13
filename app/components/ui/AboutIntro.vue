<template>
  <section class="px-8 py-18 bg-grey-10">
    <div
      class="max-w-6xl mx-auto grid md:grid-rows-none md:grid-rows-2 md:grid-cols-2 gap-x-12 gap-y-8"
    >
      <article
        class="relative flex justify-self-center md:before:content-[''] md:before:absolute md:before:border-4 md:before:border-primary-5 md:before:rounded-md md:before:h-full md:before:w-full md:before:right-[2rem] md:before:top-[2rem]"
      >
        <img
          src="/profile-photo.jpg"
          class="max-h-[30rem] max-w-[25rem] object-cover relative rounded-md"
        />
      </article>
      <article class="flex flex-col justify-center w-full sm:p-10 md:p-0">
        <h2>About</h2>
        <UiUnderline color="bg-primary-brand" />

        <p class="text-grey-5 mt-4">
          I am a developer by curiosity with a keen interest in technology.
          Beside challenging myself, I love learning new technologies and
          languages.
        </p>

        <p class="text-grey-5 mt-4">
          Starting as a full-time software developer, I have a strong foundation
          in web development and a genuine passion for creating scalable and
          maintainable solutions. I possess a product-oriented mindset and
          empathy for customers and have extensive experience working with both
          front-end and back-end technologies. Throughout my carrear have looked
          towards automating manual tasks like testing, deployment and
          monitoring. I am currently working in Amsterdam, Netherlands
          specializes in full-stack development.
        </p>

        <UiLink
          label="Learn More"
          type="primary"
          to="/contact"
        />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
