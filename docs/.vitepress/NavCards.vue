<script setup>
// Grid of navigation cards: the one card pattern for overview pages (styles: theme/custom.css, `.dc-*`).
// Usage in markdown, with the items in frontmatter:
//   cards:
//     - title: Tokens
//       text: Colour, spacing and typography tokens.
//       href: /design-language/tokens/intro/
//       icon: tokens          # optional, see CardIcon.vue
//       logo: apple           # optional instead of icon: a simple-icons slug
//       meta: 6 topics        # optional, pinned to the bottom
//       disabled: true        # optional: rendered as a muted card, not a link
//   <NavCards :items="$frontmatter.cards" />
//   <NavCards :items="$frontmatter.related" variant="row" />
import { withBase } from 'vitepress';
import { computed } from 'vue';
import CardIcon from './CardIcon.vue';

const props = defineProps({
  items: { type: Array, required: true },
  columns: { type: Number, default: 2, validator: (v) => [2, 3].includes(v) },
  variant: { type: String, default: 'card', validator: (v) => ['card', 'row'].includes(v) },
});

const isExternal = (href) => /^https?:\/\//.test(href);

const cards = computed(() =>
  props.items.map((item) => ({
    ...item,
    href: item.disabled || !item.href ? undefined : isExternal(item.href) ? item.href : withBase(item.href),
    external: item.href && isExternal(item.href),
  })),
);
</script>

<template>
  <ul class="dc-grid" :class="`dc-grid--${columns}`">
    <li v-for="c in cards" :key="c.title">
      <component
        :is="c.href ? 'a' : 'div'"
        :href="c.href"
        :target="c.external ? '_blank' : undefined"
        :rel="c.external ? 'noopener' : undefined"
        class="dc-card"
        :class="{ 'dc-card--row': variant === 'row', 'dc-card--disabled': !c.href }"
      >
        <span v-if="c.logo" class="dc-card__icon dc-card__icon--logo" aria-hidden="true">
          <svg :data-src="`https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${c.logo}.svg`" fill="currentColor" />
        </span>
        <span v-else-if="c.icon" class="dc-card__icon"><CardIcon :name="c.icon" /></span>
        <span class="nav-card-body">
          <span class="dc-card__title">{{ c.title }}</span>
          <span v-if="c.text" class="dc-card__text">{{ c.text }}</span>
        </span>
        <span v-if="c.meta && variant === 'card'" class="dc-card__meta">{{ c.meta }}</span>
        <span v-if="c.external" class="visually-hidden">(opens in a new tab)</span>
        <span v-if="c.href" class="vpi-arrow-right dc-card__arrow" aria-hidden="true" />
      </component>
    </li>
  </ul>
</template>

<style scoped>
.dc-card--row .nav-card-body {
  flex: 1;
  min-width: 0;
}
</style>
