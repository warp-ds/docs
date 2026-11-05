<script setup>
// Shown on pages copied from the Web docs that still need a platform review (frontmatter `seeded: true`).
import { useData, withBase } from 'vitepress';
import { computed } from 'vue';
import { PLATFORMS, parsePlatformPath } from './composables/platform.js';

const { frontmatter, page } = useData();
const info = computed(() => {
  if (!frontmatter.value.seeded) return null;
  const current = parsePlatformPath(page.value.relativePath);
  const label = PLATFORMS.find((p) => p.id === current?.platform)?.label ?? 'this platform';
  return { label, from: frontmatter.value.seededFrom };
});
</script>

<template>
  <div v-if="info" class="custom-block warning seeded-notice" role="note">
    <p class="custom-block-title">Pending {{ info.label }} review</p>
    <p>
      This page was copied from the
      <a v-if="info.from" :href="withBase(info.from)">Web documentation</a><template v-else>Web documentation</template>
      and has not yet been checked against the {{ info.label }} implementation.
    </p>
  </div>
</template>
