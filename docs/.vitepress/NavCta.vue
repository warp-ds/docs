<script setup>
// "Get started" call to action in the header (desktop) and in the mobile nav screen.
import { withBase } from 'vitepress';

defineProps({ screen: { type: Boolean, default: false } });
</script>

<template>
  <a :href="withBase('/get-started/')" class="nav-cta" :class="{ screen }">Get started</a>
</template>

<style scoped>
.nav-cta {
  display: none;
  margin-left: 16px;
  padding: 6px 14px;
  border-radius: var(--warp-radius-s);
  background: var(--vp-c-brand-1);
  box-shadow: var(--warp-shadow-1);
  color: var(--vp-c-white);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color var(--warp-duration) var(--warp-ease),
    transform var(--warp-duration) var(--warp-ease);
}

.nav-cta:hover {
  background: var(--vp-c-brand-2);
}

.nav-cta:active {
  transform: translateY(1px);
}

/* dark: the solid brand red (brand-1 is lifted for text and would be too light behind white text) */
html.dark .nav-cta {
  background: var(--vp-c-brand-3);
  color: #ffffff;
}

html.dark .nav-cta:hover {
  background: #d24a40;
}

.nav-cta:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .nav-cta:not(.screen) {
    display: inline-block;
  }
}

.nav-cta.screen {
  display: block;
  margin: 24px 0 0;
  text-align: center;
}
</style>
