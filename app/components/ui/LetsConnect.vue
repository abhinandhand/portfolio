<template>
  <section
    id="lets-connect"
    class="grid place-items-center my-20 min-h-[40vh] pt-40 pb-20 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:opacity-70 after:-z-10"
  >
    <video
      playsinline
      autoplay
      muted
      loop
      class="absolute top-0 left-0 w-full h-full object-cover -z-10"
      controls
      poster="/connect-fallback.jpeg"
    >
      <source src="/connect.mp4" type="video/mp4" />
      Sorry, your browser does not support embedded videos
    </video>

    <div class="video-banner bg-primary-10 pt-12 px-20 py-48 text-center">
      <div class="mb-8 text-center">
        <h2>let's get in touch</h2>
        <UiUnderline class="ml-auto mr-auto" />
      </div>
      <p class="max-w-md text-grey-5 mb-5">
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>

      <UiLink label="contact me" to="/contact" />
    </div>
    <div class=""></div>
  </section>
</template>

<style scoped>
#lets-connect {
  clip-path: polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%);
}
.video-banner {
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0 75%);
}
</style>
