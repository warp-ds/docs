<script setup>
// Home page (layout: page, so the sidebar is visible from the start — Fluent 2 style).
// Platform numbers come from platform-manifest.json, so they stay current.
import { withBase } from 'vitepress';
import ColorsCard from '../src/colors-card.svg';
import ClassesCard from '../src/css-classes-card.svg';
import FoundationsSVG from '../src/foundations.svg';
import IconsCard from '../src/icons-card.svg';
import PatternsSVG from '../src/patterns.svg';
import TokensCard from '../src/tokens-card.svg';
import HeroSVG from '../src/warp-hero.svg';
import manifest from './platform-manifest.json';

const count = (platform, type) => Object.keys(manifest[platform][type]).length;
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

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

const platforms = [
  { id: 'web', label: 'Web', tech: 'Warp Elements (web components)' },
  { id: 'ios', label: 'iOS', tech: 'SwiftUI' },
  { id: 'android', label: 'Android', tech: 'Jetpack Compose' },
].map((p) => {
  const patterns = count(p.id, 'patterns');
  return {
    ...p,
    summary: [plural(count(p.id, 'components'), 'component'), patterns ? plural(patterns, 'pattern') : null]
      .filter(Boolean)
      .join(' · '),
    href: withBase(`/${p.id}/`),
    links: [
      { text: 'Get started', href: withBase(`/get-started/${p.id}/`) },
      { text: 'Foundation', href: withBase(`/${p.id}/foundations/`) },
      { text: 'Components', href: withBase(`/${p.id}/components/`) },
    ],
  };
});

const shared = [
  {
    title: 'Design Language',
    description: 'The shared foundation: colour, typography, elevation, motion, tokens and more.',
    href: withBase('/design-language/'),
    image: FoundationsSVG,
  },
  {
    title: 'Patterns',
    description: 'Guidelines and recommendations for solving recurring user tasks.',
    href: withBase('/patterns/'),
    image: PatternsSVG,
  },
];

const quickLinks = [
  {
    title: 'CSS classes',
    description: 'Utility-first CSS classes for the web',
    href: withBase('/web/foundations/css-classes/unocss'),
    image: ClassesCard,
  },
  {
    title: 'Icons',
    description: 'Browse the UI icon library',
    href: withBase('/web/components/icons/overview'),
    image: IconsCard,
  },
  {
    title: 'Colors',
    description: 'Background, text and border palettes',
    href: withBase('/web/foundations/css-classes/background-color#quick-reference'),
    image: ColorsCard,
  },
  {
    title: 'Tokens',
    description: 'Design tokens for colour, typography and spacing',
    href: withBase('/design-language/tokens/intro/'),
    image: TokensCard,
  },
];

const collaborate = [
  { text: 'How to contribute', href: withBase('/about/help/authoring-guide/') },
  { text: 'Request a new component', href: withBase('/about/help/requests/new-component/') },
  { text: 'Get help', href: withBase('/about/help/faq/') },
];
</script>

<template>
  <div class="home">
    <section class="hero" aria-labelledby="home-title">
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
        <li v-for="p in platforms" :key="p.id" class="platform">
          <a :href="p.href" class="platform-name">{{ p.label }}</a>
          <p class="platform-tech">{{ p.tech }}</p>
          <p class="platform-summary">{{ p.summary }}</p>
          <ul class="platform-links" :aria-label="`${p.label} sections`">
            <li v-for="l in p.links" :key="l.text">
              <a :href="l.href">{{ l.text }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="section" aria-labelledby="home-shared">
      <h2 id="home-shared" class="section-title">Shared across platforms</h2>
      <ul class="shared">
        <li v-for="s in shared" :key="s.title">
          <a :href="s.href" class="shared-card">
            <component :is="s.image" class="shared-art" aria-hidden="true" />
            <span>
              <span class="shared-title">{{ s.title }}</span>
              <span class="shared-description">{{ s.description }}</span>
            </span>
          </a>
        </li>
      </ul>
    </section>

    <section class="section" aria-labelledby="home-quick">
      <h2 id="home-quick" class="section-title">Quick links</h2>
      <ul class="quick">
        <li v-for="q in quickLinks" :key="q.title">
          <a :href="q.href" class="quick-card">
            <component :is="q.image" class="quick-art" aria-hidden="true" />
            <span class="quick-title">{{ q.title }}</span>
            <span class="quick-description">{{ q.description }}</span>
          </a>
        </li>
      </ul>
    </section>

    <section class="collaborate" aria-labelledby="home-collaborate">
      <div>
        <h2 id="home-collaborate" class="collaborate-title">Help evolve Warp</h2>
        <p>
          Contribute guidance, request a component, or ask a question in
          <a href="https://sch-chat.slack.com/archives/C04P0GYTHPV" target="_blank" rel="noopener">#warp-design-system</a>
          on Slack.
        </p>
      </div>
      <ul class="collaborate-links">
        <li v-for="c in collaborate" :key="c.text">
          <a :href="c.href">{{ c.text }} <span class="vpi-arrow-right arrow" aria-hidden="true" /></a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 24px 96px;
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

/* Hero */
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px 40px;
  padding: 48px 32px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--vp-c-brand-soft), var(--vp-c-bg-soft) 60%);
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.title {
  margin: 0;
  font-size: clamp(56px, 9vw, 112px);
  font-weight: 800;
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
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-2);
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.entry:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.entry-title {
  font-size: 22px;
  font-weight: 700;
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
  color: var(--vp-c-brand-1);
  transform: translateY(-50%);
}

/* Sections */
.section {
  margin-top: 72px;
}

.section-title {
  margin: 0;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.section-lede {
  max-width: 640px;
  margin: 12px 0 0;
  color: var(--vp-c-text-2);
}

/* Platforms */
.platforms {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;
}

.platform {
  padding: 28px 24px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.platform-name {
  display: inline-block;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.platform-name:hover {
  color: var(--vp-c-brand-1);
}

.platform-tech {
  margin: 8px 0 0;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.platform-summary {
  margin: 4px 0 16px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.platform-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.platform-links a {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

.platform-links a:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* Shared */
.shared {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;
}

.shared-card {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: border-color 0.15s ease;
}

.shared-card:hover {
  border-color: var(--vp-c-brand-1);
}

/* native 86px size: vite-svg-loader's SVGO strips viewBox, so these SVGs crop instead of scaling */
.shared-art {
  flex: none;
  width: 86px;
  height: 86px;
}

.shared-title {
  display: block;
  font-size: 20px;
  font-weight: 700;
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
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: border-color 0.15s ease;
}

.quick-card:hover {
  border-color: var(--vp-c-brand-1);
}

.quick-art {
  width: 100%;
  height: 96px;
  margin-bottom: 12px;
}

.quick-title {
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.quick-description {
  margin-top: 4px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

/* Collaborate */
.collaborate {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 72px;
  padding: 32px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.collaborate-title {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.collaborate p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.collaborate p a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.collaborate-links {
  display: grid;
  align-content: center;
}

.collaborate-links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.collaborate-links li:last-child a {
  border-bottom: 0;
}

.collaborate-links a:hover {
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
    padding: 64px 48px;
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
    grid-template-columns: 1.2fr 0.8fr;
    gap: 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .entry,
  .shared-card,
  .quick-card {
    transition: none;
  }

  .entry:hover {
    transform: none;
  }
}
</style>
