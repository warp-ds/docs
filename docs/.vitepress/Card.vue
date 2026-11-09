<!--
// USAGE
// <card>This is a nice card</card>
// <card imgurl="..." imgalt="Description of image"></card>
// LAYOUT
// We might put these inside a <cards></cards> for some automagic layout love, or set up any other layout if that is wanted.
// <cards>
//   <card>1</card>
//   <card>2</card>
//   <card>3</card>
// </cards>
-->

<template>
  <article class="docs-card">
    <slot></slot>
  </article>
</template>

<style scoped>
/* legacy content card: the site's flat card pattern (tokens in theme/custom.css) */
.docs-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--warp-card-border);
  border-radius: var(--warp-card-radius);
  background: var(--vp-c-bg);
  transition:
    border-color var(--warp-duration) var(--warp-ease),
    box-shadow var(--warp-duration) var(--warp-ease);
}

.docs-card:hover,
.docs-card:focus-within {
  border-color: var(--warp-card-border-hover);
}
</style>
