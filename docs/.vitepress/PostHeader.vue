<script setup>
// Header of a What's new post (about/whats-new/<year>/*.md, doc-before slot): the publication date, and the
// frontmatter title as the H1 when the post doesn't start with one (config.js sets `postHasTitle`).
import { useData } from 'vitepress';
import { computed } from 'vue';

const { frontmatter, page } = useData();

const post = computed(() => (/^about\/whats-new\/\d{4}\//.test(page.value.relativePath) ? frontmatter.value : null));
const date = computed(() => (post.value?.date ? new Date(post.value.date) : null));

// UTC, so the server render and the browser agree on the day (no hydration mismatch)
const formatted = computed(() =>
  date.value?.toLocaleDateString('en-GB', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }),
);
</script>

<template>
  <header v-if="post" class="post-header">
    <time v-if="date" class="post-date" :datetime="date.toISOString().slice(0, 10)">{{ formatted }}</time>
    <h1 v-if="!post.postHasTitle && post.title" class="post-title">{{ post.title }}</h1>
  </header>
</template>

<style scoped>
.post-header {
  margin-bottom: var(--warp-space-6);
}

.post-date {
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: var(--vp-c-text-2);
}

/* same as a doc page H1 (VitePress .vp-doc h1) */
.post-title {
  margin: var(--warp-space-2) 0 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .post-title {
    font-size: 32px;
  }
}
</style>
