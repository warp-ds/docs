<script setup>
// One post on the What's new index, in the site's card pattern (theme/custom.css `.dc-card`).
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  excerpt: { type: String, default: '' },
  date: { type: String, required: true },
  href: { type: String, required: true },
});

// The whole card is a link, so links inside the excerpt become plain text (a link inside a link is
// invalid HTML: the browser splits it and hydration fails)
const excerptHtml = computed(() => props.excerpt.replace(/<\/?a\b[^>]*>/g, ''));

// UTC, so the server render and the browser agree on the day (no hydration mismatch)
const formatted = computed(() =>
  new Date(props.date).toLocaleDateString('en-GB', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }),
);
</script>

<template>
  <a :href="href" class="dc-card">
    <span class="dc-card__meta article-date"><time :datetime="date">{{ formatted }}</time></span>
    <span class="dc-card__title article-title">{{ title }}</span>
    <!-- excerpt is rendered markdown (block content), so a div, not a span -->
    <div v-if="excerpt" class="dc-card__text article-excerpt" v-html="excerptHtml" />
    <span class="vpi-arrow-right dc-card__arrow" aria-hidden="true" />
  </a>
</template>

<style scoped>
/* date above the title in a list of posts */
.article-date {
  margin: 0 0 var(--warp-space-1);
  padding: 0;
}

.article-title {
  font-size: 18px;
}

.article-excerpt :deep(p) {
  margin: 0;
  line-height: 1.55;
}
</style>
