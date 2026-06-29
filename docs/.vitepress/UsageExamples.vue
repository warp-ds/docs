<template>
  <div class="usage-grid">
    <slot></slot>
  </div>
</template>

<style>
.usage-grid {
  display: grid;
  grid-template:
    "first-figure first-figure"
    "first-pill first-pill"
    "first-caption first-caption"
    "second-figure second-figure"
    "second-pill second-pill"
    "second-caption second-caption" / 50% 50%;
  grid-column-gap: 24px;
  margin-block: 16px;
}

@media (min-width: 480px) {
  .usage-grid {
    grid-template:
    "first-figure second-figure"
    "first-pill second-pill"
    "first-caption second-caption" / 50% 50%;
  }
}
</style>
