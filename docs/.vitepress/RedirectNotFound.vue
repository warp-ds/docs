<script setup>
// 404 fallback: if the URL is an old docs URL, send the visitor to its new location.
import { useData } from 'vitepress';
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue';
import { onMounted, ref } from 'vue';
import { resolveRedirect } from './redirect-rules.js';

const { site } = useData();
const redirecting = ref(false);

onMounted(async () => {
  const target = await resolveRedirect(window.location.href, site.value.base);
  if (target) {
    redirecting.value = true;
    window.location.replace(target);
  }
});
</script>

<template>
  <p v-if="redirecting" class="redirecting" role="status">Redirecting to the new location…</p>
  <NotFound v-else />
</template>

<style scoped>
.redirecting {
  padding: 64px 24px;
  text-align: center;
  color: var(--vp-c-text-2);
}
</style>
