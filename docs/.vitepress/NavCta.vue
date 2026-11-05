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
  border-radius: 6px;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  white-space: nowrap;
}

.nav-cta:hover {
  background: var(--vp-c-brand-2);
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
