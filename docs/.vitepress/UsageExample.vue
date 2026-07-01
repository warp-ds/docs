<script setup>
const props = defineProps({
  second: Boolean,
  imgurl: String,
  imgalt: String,
  darkmode: Boolean,
});
</script>

<template>
  <figure class="usage-wrapper" :class="{ 'second': second }">
    <div
      v-if="imgurl"
      part="image"
      v-bind:class="[darkmode ? 'darkmode' : 'lightmode']"
    >
      <img :src="imgurl" :alt="imgalt" />
    </div>
    <figcaption class="text-body font-bold">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<style lang="scss">
.usage-wrapper {
  display: contents;
}

.usage-wrapper [part="image"] {
  grid-area: first-figure;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: #f1f1f1;
  margin-bottom: 16px;

  img {
    max-width: 80%;
  }

  &.darkmode {
    background-color: #333;
  }
}

.second [part="image"] {
  grid-area: second-figure;
}

.usage-wrapper [part="pill"] {
  grid-area: first-pill;
  margin-bottom: 8px;
}

.second [part="pill"] {
  grid-area: second-pill;
}

.usage-wrapper figcaption {
  grid-area: first-caption;
}

.second figcaption {
  grid-area: second-caption;
}
</style>
