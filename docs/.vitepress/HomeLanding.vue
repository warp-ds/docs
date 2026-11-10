<script setup>
// Home page (layout: page, so the sidebar is visible from the start — Fluent 2 style).
// Platform numbers come from platform-manifest.json, so they stay current.
import { useData, withBase } from 'vitepress';
import { computed } from 'vue';
import HeroSVG from '../src/warp-hero.svg';
import CardIcon from './CardIcon.vue';
import manifest from './platform-manifest.json';
import WayglimBackground from './WayglimBackground.vue';

// The Wayglim engine composites over one flat colour; render it over pure white (light) or pure black (dark)
// and let the blend mode on .hero-bg (multiply / screen) drop that colour, so only the light lands on the hero's
// own gradient. Changing the theme remounts the background with the other colour.
const { isDark } = useData();
// maxPixelRatio 1: the light is soft and blurred, so a 1x canvas looks the same as 2x on high-density screens
// (compared side by side) while the GPU draws a quarter of the pixels.
const wayglimSettings = computed(() => ({ background: isDark.value ? [0, 0, 0] : [1, 1, 1], maxPixelRatio: 1 }));

const count = (platform, type) => Object.keys(manifest[platform][type]).length;

const entries = [
  {
    title: 'Design',
    description: 'Get access to the Warp Figma libraries and design for every brand.',
    href: withBase('/get-started/design/'),
  },
  {
    title: 'Develop',
    description: 'Install Warp for Web, iOS or Android and start building.',
    href: withBase('/get-started/'),
  },
];

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

// one card per platform; the whole card links to the platform overview (the sidebar takes it from there)
const platforms = [
  { id: 'web', label: 'Web', tech: 'Warp Elements (web components)', icon: 'webcomponentsdotorg' },
  { id: 'ios', label: 'iOS', tech: 'SwiftUI', icon: 'apple' },
  { id: 'android', label: 'Android', tech: 'Jetpack Compose', icon: 'android' },
].map((p) => {
  const patterns = count(p.id, 'patterns');
  return {
    ...p,
    href: withBase(`/${p.id}/`),
    meta: [plural(count(p.id, 'components'), 'component'), patterns ? plural(patterns, 'pattern') : null]
      .filter(Boolean)
      .join(' · '),
  };
});

const shared = [
  {
    title: 'Design Language',
    description: 'The shared foundation: colour, typography, elevation, motion, tokens and more.',
    href: withBase('/design-language/'),
    icon: 'language',
  },
  {
    title: 'Patterns',
    description: 'Guidelines and recommendations for solving recurring user tasks.',
    href: withBase('/patterns/'),
    icon: 'patterns',
  },
];

const quickLinks = [
  {
    title: 'CSS classes',
    description: 'Utility-first CSS classes for the web',
    href: withBase('/web/foundations/css-classes/unocss'),
    icon: 'code',
  },
  {
    title: 'Icons',
    description: 'Browse the UI icon library',
    href: withBase('/web/components/icons/overview'),
    icon: 'icons',
  },
  {
    title: 'Colors',
    description: 'Background, text and border palettes',
    href: withBase('/web/foundations/css-classes/background-color#quick-reference'),
    icon: 'droplet',
  },
  {
    title: 'Tokens',
    description: 'Design tokens for colour, typography and spacing',
    href: withBase('/design-language/tokens/intro/'),
    icon: 'tokens',
  },
];

const SLACK = 'https://sch-chat.slack.com/archives/C04P0GYTHPV';

const collaborate = [
  {
    text: 'Contribute guidance',
    description: 'Improve a page or write a new one with the authoring guide.',
    href: withBase('/about/help/authoring-guide/'),
    icon: 'edit',
  },
  {
    text: 'Request a component',
    description: 'Tell us what is missing and what your team needs it for.',
    href: withBase('/about/help/requests/new-component/'),
    icon: 'request',
  },
  {
    text: 'Get help',
    description: 'Find answers in the FAQ, or reach the Warp team.',
    href: withBase('/about/help/faq/'),
    icon: 'help',
  },
];
</script>

<template>
  <div class="home">
    <section class="hero" aria-labelledby="home-title">
      <WayglimBackground class="hero-bg" :settings="wayglimSettings" />
      <div class="hero-text">
        <p class="eyebrow">Welcome to</p>
        <h1 id="home-title" class="title">Warp</h1>
        <p class="tagline">Vend's design system. Design, build and ship coherent experiences across Web, iOS and Android.</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <HeroSVG class="hero-svg" />
      </div>
      <ul class="entries">
        <li v-for="e in entries" :key="e.title">
          <a :href="e.href" class="entry">
            <span class="entry-title">{{ e.title }}</span>
            <span class="entry-description">{{ e.description }}</span>
            <span class="vpi-arrow-right arrow" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>

    <section class="section" aria-labelledby="home-platforms">
      <h2 id="home-platforms" class="section-title">Platforms</h2>
      <p class="section-lede">Each platform has its own foundation, components and patterns, documented on its own schedule.</p>
      <ul class="platforms">
        <li v-for="p in platforms" :key="p.id">
          <a :href="p.href" class="platform">
            <span class="tile-icon platform-icon" aria-hidden="true">
              <svg :data-src="`https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${p.icon}.svg`" fill="currentColor" />
            </span>
            <h3 class="platform-name">{{ p.label }}</h3>
            <span class="platform-tech">{{ p.tech }}</span>
            <span class="platform-meta">{{ p.meta }}</span>
            <span class="vpi-arrow-right platform-arrow" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>

    <section class="section" aria-labelledby="home-shared">
      <h2 id="home-shared" class="section-title">Shared across platforms</h2>
      <ul class="shared">
        <li v-for="s in shared" :key="s.title">
          <a :href="s.href" class="shared-card">
            <span class="tile-icon"><CardIcon :name="s.icon" /></span>
            <span>
              <span class="shared-title">{{ s.title }}</span>
              <span class="shared-description">{{ s.description }}</span>
            </span>
            <span class="vpi-arrow-right card-arrow" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>

    <section class="section" aria-labelledby="home-quick">
      <h2 id="home-quick" class="section-title">Quick links</h2>
      <ul class="quick">
        <li v-for="q in quickLinks" :key="q.title">
          <a :href="q.href" class="quick-card">
            <span class="tile-icon quick-icon"><CardIcon :name="q.icon" /></span>
            <span class="quick-title">{{ q.title }}</span>
            <span class="quick-description">{{ q.description }}</span>
            <span class="vpi-arrow-right card-arrow" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>

    <section class="collaborate" aria-labelledby="home-collaborate">
      <div class="collaborate-intro">
        <p class="eyebrow">Built together</p>
        <h2 id="home-collaborate" class="collaborate-title">Help evolve Warp</h2>
        <p class="collaborate-text">
          Warp grows with the teams that use it. Every guideline, component request and question makes it better
          for everyone.
        </p>
        <a :href="SLACK" target="_blank" rel="noopener" class="slack">
          <img :src="withBase('/slack-icon.svg')" alt="" width="20" height="20" />
          <span>Ask in <strong>#warp-design-system</strong></span>
          <span class="visually-hidden">(Slack, opens in a new tab)</span>
        </a>
      </div>
      <ul class="collaborate-cards">
        <li v-for="c in collaborate" :key="c.text">
          <a :href="c.href" class="collaborate-card">
            <span class="tile-icon"><CardIcon :name="c.icon" /></span>
            <span class="collaborate-card-text">
              <span class="collaborate-card-title">{{ c.text }}</span>
              <span class="collaborate-card-description">{{ c.description }}</span>
            </span>
            <span class="vpi-arrow-right collaborate-arrow" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
/* The hero runs the full width of the content area; every other section keeps the 1280px reading width */
.home {
  padding: 0 24px 96px;
}

.home > :not(.hero) {
  max-width: 1280px;
  margin-inline: auto;
}

@media (min-width: 960px) {
  .home {
    padding: 0 48px 128px;
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
  border-radius: 8px;
}

/* Hero: full width (it cancels the page's side padding), a vertical gradient from the page colour to a slightly
   deeper one, and the interactive Wayglim light (WayglimBackground.vue) on top of it, behind the content */
.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 0 -24px;
  padding: 88px 24px 72px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: linear-gradient(180deg, #ffffff 0%, #ececef 100%);
}

html.dark .hero {
  background: linear-gradient(180deg, #08090c 0%, #101218 100%);
}

/* the engine draws over white / black; these blends drop that colour and keep the light */
.hero-bg {
  mix-blend-mode: multiply;
}

html.dark .hero-bg {
  mix-blend-mode: screen;
}

.hero > .hero-text,
.hero > .hero-art,
.hero > .entries {
  position: relative;
  z-index: 1;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.title {
  margin: 0;
  font-size: clamp(56px, 9vw, 112px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--vp-c-text-1);
}

.tagline {
  max-width: 560px;
  margin: 20px 0 0;
  font-size: 20px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.hero-art {
  display: none;
}

.hero-svg {
  width: 100%;
  max-width: 360px;
  height: auto;
}

.entries {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.entry {
  position: relative;
  display: grid;
  gap: 4px;
  height: 100%;
  padding: 24px 56px 24px 24px;
  border: 1px solid var(--warp-card-border);
  border-radius: var(--warp-card-radius);
  background: var(--vp-c-bg);
  transition: border-color var(--warp-duration) var(--warp-ease), box-shadow var(--warp-duration) var(--warp-ease);
}

.entry-title {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.entry-description {
  color: var(--vp-c-text-2);
}

.arrow {
  width: 16px;
  height: 16px;
}

.entry .arrow {
  position: absolute;
  right: 24px;
  top: 50%;
  color: var(--vp-c-text-3);
  transform: translateY(-50%);
}

/* Every card on the home page has the same hover as the site's card pattern (.dc-card in custom.css):
   flat, the border turns brand red, and the arrow turns brand and nudges right */
.entry:hover,
.platform:hover,
.shared-card:hover,
.quick-card:hover,
.collaborate-card:hover {
  border-color: var(--warp-card-border-hover);
}

.card-arrow {
  position: absolute;
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-3);
  transition: color var(--warp-duration) var(--warp-ease), transform var(--warp-duration) var(--warp-ease);
}

.shared-card .card-arrow {
  top: 50%;
  right: 24px;
  margin-top: -8px;
}

.quick-card .card-arrow {
  /* centred on the icon tile, like the platform cards */
  top: 40px;
  right: 24px;
}

.entry:hover .arrow,
.shared-card:hover .card-arrow,
.quick-card:hover .card-arrow,
.collaborate-card:hover .collaborate-arrow {
  color: var(--vp-c-brand-1);
}

.shared-card:hover .card-arrow,
.quick-card:hover .card-arrow {
  transform: translateX(3px);
}

/* Sections */
.section {
  margin-top: var(--warp-space-16);
}

/* same as a doc page H1 (VitePress .vp-doc h1): 28px, 32px from 768px */
.section-title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 32px;
  }
}

.section-lede {
  max-width: 640px;
  margin: var(--warp-space-2) 0 0;
  color: var(--vp-c-text-2);
}

/* Platforms: one card per platform, the whole card is the link */
.platforms {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;
}

.platform {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--warp-card-padding);
  border: 1px solid var(--warp-card-border);
  border-radius: var(--warp-card-radius);
  background: var(--vp-c-bg);
  transition: border-color var(--warp-duration) var(--warp-ease), box-shadow var(--warp-duration) var(--warp-ease);
}

/* Icon tile: the same on every home card (platforms, shared, quick links, collaborate) */
.tile-icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--warp-card-icon-radius);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  transition: background-color var(--warp-duration) var(--warp-ease), color var(--warp-duration) var(--warp-ease);
}

.tile-icon svg {
  width: 24px;
  height: 24px;
}

.platform:hover .tile-icon,
.shared-card:hover .tile-icon,
.quick-card:hover .tile-icon,
.collaborate-card:hover .tile-icon {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}

.platform-icon,
.quick-icon {
  margin-bottom: 20px;
}

.platform-name {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.platform-tech {
  margin-top: 4px;
  color: var(--vp-c-text-2);
}

.platform-meta {
  margin-top: auto;
  padding-top: 24px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-3);
}

.platform-arrow {
  position: absolute;
  top: 40px;
  right: 24px;
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-3);
  transition: color var(--warp-duration) var(--warp-ease), transform var(--warp-duration) var(--warp-ease);
}

.platform:hover .platform-arrow {
  color: var(--vp-c-brand-1);
  transform: translateX(3px);
}

/* Shared */
.shared {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;
}

.shared-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
  padding: 24px 56px 24px 24px;
  border: 1px solid var(--warp-card-border);
  border-radius: var(--warp-card-radius);
  background: var(--vp-c-bg);
  transition: border-color var(--warp-duration) var(--warp-ease), box-shadow var(--warp-duration) var(--warp-ease);
}

.shared-title {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.shared-description {
  display: block;
  margin-top: 4px;
  color: var(--vp-c-text-2);
}

/* Quick links */
.quick {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.quick-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--warp-card-padding);
  border: 1px solid var(--warp-card-border);
  border-radius: var(--warp-card-radius);
  background: var(--vp-c-bg);
  transition: border-color var(--warp-duration) var(--warp-ease), box-shadow var(--warp-duration) var(--warp-ease);
}

.quick-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.quick-description {
  margin-top: 4px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

/* Collaborate: shares the hero's idea (a neutral gradient lit by Warp red) but not its elements. No streak, no
   grain: a smooth red glow sits in the bottom-right corner and fine concentric orbit lines spread from it,
   echoing the orbits around the planet in the hero artwork. The base gradient runs the other way (grey to
   white). Pure CSS. */
.collaborate {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-top: var(--warp-space-16);
  padding: 40px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--warp-radius-xl);
  background:
    radial-gradient(circle at 100% 100%, rgba(229, 22, 18, 0.26), rgba(229, 22, 18, 0.08) 32%, transparent 58%),
    linear-gradient(180deg, #ececef 0%, #ffffff 100%);
  overflow: hidden;
  isolation: isolate;
}

html.dark .collaborate {
  background:
    radial-gradient(circle at 100% 100%, rgba(229, 22, 18, 0.34), rgba(229, 22, 18, 0.1) 32%, transparent 58%),
    linear-gradient(180deg, #101218 0%, #08090c 100%);
}

/* orbit lines around the glow, fading out with distance */
.collaborate::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: repeating-radial-gradient(
    circle at 100% 100%,
    transparent 0 55px,
    rgba(229, 22, 18, 0.2) 55px 56px
  );
  -webkit-mask-image: radial-gradient(circle at 100% 100%, #000 10%, transparent 72%);
  mask-image: radial-gradient(circle at 100% 100%, #000 10%, transparent 72%);
  pointer-events: none;
}

html.dark .collaborate::before {
  background: repeating-radial-gradient(
    circle at 100% 100%,
    transparent 0 55px,
    rgba(255, 92, 82, 0.22) 55px 56px
  );
}

.collaborate-intro {
  align-self: center;
}

.collaborate-title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .collaborate-title {
    font-size: 32px;
  }
}

.collaborate-text {
  max-width: 440px;
  margin: 16px 0 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.slack {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  padding: 12px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-weight: 500;
  transition: border-color var(--warp-duration) var(--warp-ease), box-shadow var(--warp-duration) var(--warp-ease);
}

.slack:hover {
  border-color: var(--warp-card-border-hover);
}

.slack:focus-visible {
  border-radius: 999px;
}

.collaborate-cards {
  display: grid;
  gap: 12px;
}

.collaborate-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: var(--warp-space-4) var(--warp-space-6) var(--warp-space-4) var(--warp-space-4);
  border: 1px solid var(--warp-card-border);
  border-radius: var(--warp-card-radius);
  background: var(--vp-c-bg);
  transition: border-color var(--warp-duration) var(--warp-ease), box-shadow var(--warp-duration) var(--warp-ease);
}

.collaborate-card-text {
  flex: 1;
}

.collaborate-card-title {
  display: block;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.collaborate-card-description {
  display: block;
  margin-top: 2px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.collaborate-arrow {
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-3);
}

.collaborate-card:hover .collaborate-arrow {
  color: var(--vp-c-brand-1);
}

@media (min-width: 640px) {
  .entries {
    grid-template-columns: repeat(2, 1fr);
  }

  .quick {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 960px) {
  .hero {
    grid-template-columns: 1.3fr 1fr;
    align-content: center;
    gap: 56px 40px;
    min-height: 680px;
    margin: 0 -48px;
    /* content lines up with the 1280px column of the sections below */
    padding: 144px max(48px, calc((100% + 96px - 1280px) / 2)) 128px;
  }

  .hero-art {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .entries {
    grid-column: 1 / -1;
  }

  .platforms {
    grid-template-columns: repeat(3, 1fr);
  }

  .shared {
    grid-template-columns: repeat(2, 1fr);
  }

  .collaborate {
    grid-template-columns: 1fr 1fr;
    gap: var(--warp-space-12);
    padding: var(--warp-space-12);
  }
}

@media (prefers-reduced-motion: reduce) {
  .entry,
  .platform,
  .tile-icon,
  .platform-arrow,
  .shared-card,
  .quick-card,
  .slack,
  .collaborate-card,
  .card-arrow {
    transition: none;
  }

  .platform:hover .platform-arrow,
  .shared-card:hover .card-arrow,
  .quick-card:hover .card-arrow {
    transform: none;
  }
}
</style>
