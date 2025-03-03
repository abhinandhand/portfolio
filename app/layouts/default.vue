<template>
  <Fragment>
    <UiHeader />
    <main class="@container/main">
      <div class="max-w-6xl mx-auto">
        <h1>Welcome</h1>
        <slot />
      </div>
    </main>
  </Fragment>
</template>

<style scoped>
button {
  background-color: blue;
  color: white;
}
</style>
