<!--
// USAGE
// <do>This is a nice do box</do>
// <do not>This is a nice do not box</do>
// <do imgurl="..." imgalt="Description of image"></do>
// <do darkmode>This is a nice do box with a dark background.</do>
//
// LAYOUT
// We might put these inside a <do-dont-grid></do-dont-grid> for some automagic layout love, or set up any other layout if that is wanted.
// <do-dont-grid><do>Simple example</do></do-dont-grid>
//
// The grid will always try to put do's to the left and dont's to the right. Any combination and number of these can be entered into the grid.
-->

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
  grid-area: dont-figure;
}

.usage-wrapper [part="pill"] {
  grid-area: do-pill;
  margin-bottom: 8px;
}

.second [part="pill"] {
  grid-area: dont-pill;
}

.usage-wrapper figcaption {
  grid-area: do-caption;
}

.second figcaption {
  grid-area: dont-caption;
}
</style>
