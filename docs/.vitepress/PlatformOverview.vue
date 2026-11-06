<script setup>
// Card grid for a platform overview page (/web/, /ios/, /android/): where to go next on this platform,
// then the shared sections. Counts come from platform-manifest.json, so they stay current.
// Usage in markdown: <PlatformOverview platform="ios" />
import { withBase } from 'vitepress';
import { computed } from 'vue';
import manifest from './platform-manifest.json';
import { webFoundationItems } from './sidebar/web-foundation-items.js';

const props = defineProps({
  platform: { type: String, required: true, validator: (v) => ['web', 'ios', 'android'].includes(v) },
});

const LABELS = { web: 'Web', ios: 'iOS', android: 'Android' };

const COPY = {
  web: {
    start: 'Install Warp Elements, then set up styles, fonts and the brand theme.',
    foundation: 'CSS classes, customization, dark mode, keyboard support and font weights.',
    components: 'Overview, usage, code and accessibility for every web component.',
  },
  ios: {
    start: 'Add the Warp Swift package to your app and set the brand theme.',
    foundation: 'Theming, tokens, typography, spacing, shape and elevation in SwiftUI.',
    components: 'Design and code guidance for every SwiftUI component.',
  },
  android: {
    start: 'Add the Warp library to your app and set the brand theme.',
    foundation: 'Theming, tokens, typography and elevation in Jetpack Compose.',
    components: 'Design and code guidance for every Compose component.',
  },
};

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

const cards = computed(() => {
  const p = props.platform;
  const data = manifest[p];
  const copy = COPY[p];
  const components = Object.keys(data.components).length;
  const patterns = Object.keys(data.patterns).length;
  // Web foundation pages are hand-ordered in the sidebar, not in the manifest
  const foundations = p === 'web' ? webFoundationItems.length : (data.foundations?.length ?? 0);
  return [
    { icon: 'start', title: 'Get started', text: copy.start, href: `/get-started/${p}/` },
    {
      icon: 'foundation',
      title: 'Foundation',
      text: copy.foundation,
      href: `/${p}/foundations/`,
      meta: foundations ? plural(foundations, 'topic') : null,
    },
    {
      icon: 'components',
      title: 'Components',
      text: copy.components,
      href: `/${p}/components/`,
      meta: plural(components, 'component'),
    },
    // always shown so every platform has the same four cards; disabled (not a link) until documented
    patterns
      ? {
          icon: 'patterns',
          title: 'Patterns',
          text: 'Guidance for recurring user tasks, built from Warp components.',
          href: `/${p}/patterns/`,
          meta: plural(patterns, 'pattern'),
        }
      : {
          icon: 'patterns',
          title: 'Patterns',
          text: `Guidance for recurring user tasks. None documented for ${LABELS[p]} yet.`,
          meta: 'Not available yet',
          disabled: true,
        },
  ].map((c) => ({ ...c, href: c.href && withBase(c.href) }));
});

const shared = computed(() =>
  [
    {
      icon: 'language',
      title: 'Design Language',
      text: 'Colour, typography, elevation, motion and tokens, shared by every platform.',
      href: '/design-language/',
    },
    {
      icon: 'coverage',
      title: 'Platform coverage',
      text: `Which components exist on ${LABELS[props.platform]} and on the other platforms.`,
      href: '/about/platform-coverage',
    },
  ].map((c) => ({ ...c, href: withBase(c.href) })),
);
</script>

<template>
  <div class="platform-overview">
    <ul class="cards">
      <li v-for="c in cards" :key="c.title">
        <component :is="c.disabled ? 'div' : 'a'" :href="c.href" class="card" :class="{ disabled: c.disabled }">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <template v-if="c.icon === 'start'">
                <circle cx="12" cy="12" r="9" />
                <path d="M10 8.5 15 12l-5 3.5Z" />
              </template>
              <template v-else-if="c.icon === 'foundation'">
                <path d="M12 3 3 7.5l9 4.5 9-4.5Z" />
                <path d="m3 12 9 4.5 9-4.5" />
                <path d="m3 16.5 9 4.5 9-4.5" />
              </template>
              <template v-else-if="c.icon === 'components'">
                <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
                <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
                <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
                <rect x="13.5" y="13.5" width="7" height="7" rx="3.5" />
              </template>
              <template v-else>
                <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
                <path d="M3.5 9h17M9.5 9v11.5" />
              </template>
            </svg>
          </span>
          <span class="title">{{ c.title }}</span>
          <span class="text">{{ c.text }}</span>
          <span v-if="c.meta" class="meta">{{ c.meta }}</span>
          <span v-if="!c.disabled" class="vpi-arrow-right arrow" aria-hidden="true" />
        </component>
      </li>
    </ul>

    <h2 id="shared-across-platforms" class="shared-title" tabindex="-1">Shared across platforms</h2>
    <ul class="shared">
      <li v-for="s in shared" :key="s.title">
        <a :href="s.href" class="shared-card">
          <span class="shared-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <template v-if="s.icon === 'language'">
                <path d="M12 3a9 9 0 1 0 0 18c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.7 1.7-1.7h2.1A4.5 4.5 0 0 0 21 10.7C21 6.4 17 3 12 3Z" />
                <circle cx="7.5" cy="11.5" r="1" />
                <circle cx="10" cy="7.5" r="1" />
                <circle cx="14.5" cy="7.5" r="1" />
              </template>
              <template v-else>
                <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
              </template>
            </svg>
          </span>
          <span>
            <span class="title">{{ s.title }}</span>
            <span class="text">{{ s.text }}</span>
          </span>
          <span class="vpi-arrow-right arrow" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.platform-overview {
  margin-top: 32px;
}

/* class selectors so these win over .vp-doc ul / li / a */
.cards,
.shared {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cards > li,
.shared > li {
  margin: 0;
}

.card,
.shared-card {
  font-weight: 400;
  color: inherit;
  text-decoration: none;
}

.card:focus-visible,
.shared-card:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

/* Platform cards */
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-3);
  transform: translateY(-2px);
}

.icon,
.shared-icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  transition: background-color 0.15s ease, color 0.15s ease;
}

.icon {
  margin-bottom: 20px;
}

.icon svg,
.shared-icon svg {
  width: 22px;
  height: 22px;
}

/* Disabled: not a link, muted, no hover */
.card.disabled {
  border-style: dashed;
  background: var(--vp-c-bg-alt);
  cursor: default;
}

.card.disabled:hover {
  border-color: var(--vp-c-divider);
  box-shadow: none;
  transform: none;
}

.card.disabled .icon,
.card.disabled:hover .icon {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-3);
}

.card.disabled .title,
.card.disabled .text {
  color: var(--vp-c-text-3);
}

.card:not(.disabled):hover .icon,
.shared-card:hover .shared-icon {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.title {
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.text {
  display: block;
  margin-top: 6px;
  font-size: 15px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.meta {
  margin-top: auto;
  padding-top: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-3);
}

.arrow {
  width: 18px;
  height: 18px;
  color: var(--vp-c-text-3);
  transition: color 0.15s ease, transform 0.15s ease;
}

.card .arrow {
  position: absolute;
  top: 36px;
  right: 24px;
}

.card:hover .arrow,
.shared-card:hover .arrow {
  color: var(--vp-c-brand-1);
  transform: translateX(4px);
}

/* Shared sections: compact horizontal cards on a soft surface */
.shared-title {
  margin: 48px 0 16px;
  padding: 0;
  border: 0;
  font-size: 20px;
}

.shared {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 640px) {
  .shared {
    grid-template-columns: repeat(2, 1fr);
  }
}

.shared-card {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  padding: 16px 20px 16px 16px;
  border: 1px solid transparent;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.15s ease;
}

.shared-card:hover {
  border-color: var(--vp-c-brand-1);
}

.shared-card > span:nth-child(2) {
  flex: 1;
}

.shared-card .text {
  margin-top: 2px;
  font-size: 14px;
}

.shared-card .title {
  font-size: 16px;
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .icon,
  .shared-icon,
  .shared-card,
  .arrow {
    transition: none;
  }

  .card:hover,
  .card:hover .arrow,
  .shared-card:hover .arrow {
    transform: none;
  }
}
</style>
