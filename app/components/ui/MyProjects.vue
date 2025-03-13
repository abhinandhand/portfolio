<template>
  <section class="bg-primary-10 px-8 py-20">
    <div class="">
      <div class="mb-16 text-center">
        <h2
          class="text-grey-1 text-4xl leading-none tracking-[0.25rem] mb-3 capitalize"
        >
          My Projects
        </h2>
        <p class="text-grey-5">
          Latest applications I developed as fun projects and self learning.
        </p>
      </div>
      <div class="max-w-6xl mx-auto">
        <p v-if="status === 'pending'">
          Loading...
        </p>
        <p v-if="status === 'error'">
          Something went wrong. Please try again later.
        </p>
        <template v-if="status === 'success'">
          <div
            v-for="(project, index) in projectsInfo?.projects"
            :key="project.id"
            class="project-item"
          >
            <article class="grid grid-cols-12 items-center relative">
              <div
                class="row-start-1 col-span-full h-[18rem] sm:h-[32rem] py-8 sm:pt-16 sm:py-0 px-8 sm:px-16 bg-gradient-to-bl from-primary-6 to-gradient-1 rounded-md shadow-lg"
                :class="
                  index % 2 === 0
                    ? 'md:col-start-1 md:col-span-8'
                    : 'md:col-start-5 md:col-span-8'
                "
              >
                <!-- <h1>Image</h1> -->
                <img
                  :alt="project.title"
                  :src="project.image"
                  class="w-full h-full hover:opacity-100 object-fill"
                />
              </div>
              <UiProjectInfo
                :project="project"
                :class="
                  index % 2 === 0
                    ? 'md:col-start-5 md:col-span-8'
                    : 'md:col-start-1 md:col-span-8'
                "
              />
            </article>
          </div>
          <!-- {{ data.projects }} -->
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const { status, data: projectsInfo } = await useFetch('/projects.json', {
  lazy: true,
  server: false,
});
</script>

<style scoped>
.project-item:not(:last-child) {
  margin-bottom: 4rem;
}
</style>
