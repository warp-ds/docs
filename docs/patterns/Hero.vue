<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">What's new in WARP</h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>


<style>
h2.subtitle {
  font-size: 1.6rem;
  border-top: none;
}
</style>