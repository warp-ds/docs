<script setup>
// "Pending review" notice for pages a platform team has not reviewed yet:
// - frontmatter `seeded: true`: copied from the Web docs, not yet checked against the platform implementation;
// - frontmatter `pendingReview: true`: written from the platform source code, not yet reviewed by the platform team.
// Component/pattern pages render it below their header (ComponentsStatus, `in-header`), so the header
// stays identical across tabs; other pages render it above the H1 (doc-before slot).
import { useData, withBase } from 'vitepress';
import { computed } from 'vue';
import { PLATFORMS, parsePlatformPath } from './composables/platform.js';

const SOURCE_REPOS = { web: 'warp-ds/elements', ios: 'warp-ios', android: 'warp-android' };

const props = defineProps({ inHeader: { type: Boolean, default: false } });
const { frontmatter, page } = useData();
const info = computed(() => {
  const fm = frontmatter.value;
  if (!fm.seeded && !fm.pendingReview) return null;
  const current = parsePlatformPath(page.value.relativePath);
  if (Boolean(current?.type) !== props.inHeader) return null;
  const label = PLATFORMS.find((p) => p.id === current?.platform)?.label ?? 'this platform';
  return {
    label,
    kind: fm.seeded ? 'seeded' : 'source',
    from: fm.seededFrom,
    repo: SOURCE_REPOS[current?.platform] ?? 'the platform source code',
  };
});
</script>

<template>
  <div v-if="info" class="custom-block warning seeded-notice" role="note">
    <p class="custom-block-title">Pending {{ info.label }} review</p>
    <p v-if="info.kind === 'seeded'">
      This page was copied from the
      <a v-if="info.from" :href="withBase(info.from)">Web documentation</a><template v-else>Web documentation</template>
      and has not yet been checked against the {{ info.label }} implementation.
    </p>
    <p v-else>
      This page was written from the {{ info.repo }} source code and has not yet been reviewed by the
      {{ info.label }} team.
    </p>
  </div>
</template>
