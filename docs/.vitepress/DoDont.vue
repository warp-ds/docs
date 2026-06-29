<template>
  <div class="do-dont-grid">
    <slot></slot>
  </div>
</template>

<style>
.do-dont-grid {
  display: grid;
  grid-template:
    "do-figure do-figure"
    "do-pill do-pill"
    "do-caption do-caption"
    "dont-figure dont-figure"
    "dont-pill dont-pill"
    "dont-caption dont-caption" / 50% 50%;
  grid-column-gap: 24px;
  margin-block: 16px;
}

@media (min-width: 480px) {
  .do-dont-grid {
    grid-template:
    "do-figure dont-figure"
    "do-pill dont-pill"
    "do-caption dont-caption" / 50% 50%;
  }
}
</style>
