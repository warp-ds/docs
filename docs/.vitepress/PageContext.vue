<script setup>
// Context row above the H1 of every doc page:
//  - left: breadcrumb back to the section ("Web / Components")
//  - right: one switch for "this page elsewhere", the same control wherever it appears:
//      component/pattern pages: Web | iOS | Android (platforms without the item are shown as unavailable)
//      Design Language topics and the platform foundation pages linked to them (`designLanguage:`
//      frontmatter, collected into platform-manifest.json): Design Language | Web | iOS | Android
//    A platform with several pages for one topic opens a small menu.
import { useData, useRoute, withBase } from 'vitepress';
import { computed, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue';
import { equivalentUrl, PLATFORMS, usePlatform } from './composables/platform.js';
import manifest from './platform-manifest.json';

const { page, frontmatter } = useData();
const route = useRoute();
const { current, routePlatform } = usePlatform();
const menuId = useId();

const pageUrl = computed(() => {
  const p = page.value.relativePath.replace(/\.md$/, '');
  return p === 'index' ? '/' : p.endsWith('/index') ? `/${p.slice(0, -'index'.length)}` : `/${p}`;
});
const normalize = (url) => url.replace(/\/index$/, '/').replace(/\.html$/, '');

const SECTIONS = {
  components: { label: 'Components', path: 'components/' },
  foundations: { label: 'Foundation', path: 'foundations/' },
  patterns: { label: 'Patterns', path: 'patterns/' },
};

const crumbs = computed(() => {
  const url = pageUrl.value;
  const out = [];
  const add = (label, href) => {
    if (normalize(href) !== url) out.push({ label, href: withBase(href) });
  };
  const platform = PLATFORMS.find((p) => url.startsWith(`/${p.id}/`));
  if (platform) {
    add(platform.label, `/${platform.id}/`);
    const section = SECTIONS[url.split('/')[2]];
    if (section) add(section.label, `/${platform.id}/${section.path}`);
  } else if (url.startsWith('/design-language/')) add('Design Language', '/design-language/');
  else if (url.startsWith('/get-started/')) add('Get started', '/get-started/');
  else if (url.startsWith('/about/')) {
    add('About Warp', '/about/');
    if (url.startsWith('/about/whats-new/')) add("What's new", '/about/whats-new/');
  }
  return out;
});

const platformItems = (linksFor) =>
  PLATFORMS.map((p) => {
    const links = linksFor(p.id);
    return { id: p.id, label: p.label, links, current: p.id === routePlatform.value };
  });

const items = computed(() => {
  const c = current.value;
  // component and pattern pages
  if (c?.type) {
    return platformItems((id) =>
      manifest[id]?.[c.type]?.[c.name] ? [{ href: withBase(equivalentUrl(c, id)), current: id === c.platform }] : [],
    );
  }
  // Design Language topics and their platform pages
  const isShared = pageUrl.value.startsWith('/design-language/');
  const hub = isShared ? pageUrl.value : frontmatter.value.designLanguage;
  const related = (typeof hub === 'string' && manifest.designLanguage?.[hub]) || [];
  if (!related.length) return [];
  return [
    { id: 'shared', label: 'Design Language', current: isShared, links: [{ href: withBase(hub), current: isShared }] },
    ...platformItems((id) =>
      related
        .filter((l) => l.platform === id)
        .map((l) => ({ href: withBase(l.url), title: l.title, current: normalize(l.url) === pageUrl.value })),
    ),
  ];
});

const ariaLabel = computed(() => (items.value[0]?.id === 'shared' ? 'Shared and platform guidance' : 'Platforms'));

// menu for a platform with several pages on one topic
const open = ref(null);
const root = ref(null);
const close = () => {
  open.value = null;
};
const toggle = (id) => {
  open.value = open.value === id ? null : id;
};
const onDocumentClick = (event) => {
  if (open.value && !root.value?.contains(event.target)) close();
};
const onKeydown = (event) => {
  if (event.key === 'Escape' && open.value) {
    root.value?.querySelector(`[aria-controls="${menuId}-${open.value}"]`)?.focus();
    close();
  }
};
watch(() => route.path, close);
onMounted(() => document.addEventListener('click', onDocumentClick));
onBeforeUnmount(() => document.removeEventListener('click', onDocumentClick));
</script>

<template>
  <div v-if="crumbs.length || items.length" ref="root" class="page-context" @keydown="onKeydown">
    <nav v-if="crumbs.length" class="crumbs" aria-label="Breadcrumb">
      <ol>
        <li v-for="c in crumbs" :key="c.href">
          <a :href="c.href">{{ c.label }}</a>
        </li>
      </ol>
    </nav>
    <nav v-if="items.length" class="switch" :aria-label="ariaLabel">
      <ul>
        <li v-for="item in items" :key="item.id">
          <!-- unavailable -->
          <span v-if="!item.links.length" class="seg unavailable" :title="`Not documented for ${item.label}`"
            >{{ item.label }}<span class="visually-hidden"> (not documented)</span></span
          >
          <!-- one page: plain link, or the current page -->
          <a
            v-else-if="item.links.length === 1"
            :href="item.links[0].href"
            class="seg"
            :class="{ current: item.current }"
            :aria-current="item.links[0].current ? 'page' : undefined"
            >{{ item.label }}</a
          >
          <!-- several pages: disclosure menu -->
          <template v-else>
            <button
              type="button"
              class="seg"
              :class="{ current: item.current }"
              :aria-expanded="open === item.id ? 'true' : 'false'"
              :aria-controls="`${menuId}-${item.id}`"
              @click="toggle(item.id)"
            >
              {{ item.label }}<span class="vpi-chevron-down caret" aria-hidden="true" />
            </button>
            <ul v-show="open === item.id" :id="`${menuId}-${item.id}`" class="menu">
              <li v-for="l in item.links" :key="l.href">
                <a :href="l.href" :aria-current="l.current ? 'page' : undefined">{{ l.title }}</a>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.page-context {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 16px;
  min-height: 32px;
  margin-bottom: 16px;
  font-size: 13px;
  line-height: 20px;
}

ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Breadcrumb */
.crumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.crumbs li + li::before {
  content: '/';
  margin: 0 8px;
  color: var(--vp-c-text-3);
}

.crumbs a {
  color: var(--vp-c-text-2);
  font-weight: 500;
  text-decoration: none;
}

.crumbs a:hover {
  color: var(--vp-c-brand-1);
}

/* Switch: a segmented control; same look for platforms and for Design Language <-> platform pages */
.switch {
  max-width: 100%;
}

@media (min-width: 640px) {
  .switch {
    margin-left: auto;
  }
}

.switch > ul {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 2px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.switch > ul > li {
  position: relative;
}

.seg {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 28px;
  padding: 0 12px;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  font: inherit;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
}

a.seg:hover,
button.seg:hover {
  color: var(--vp-c-text-1);
}

.seg.current {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 0 0 1px var(--vp-c-divider), 0 1px 2px rgba(0, 0, 0, 0.06);
}

.seg.unavailable {
  color: var(--vp-c-text-3);
  cursor: not-allowed;
}

.caret {
  width: 12px;
  height: 12px;
}

.seg:focus-visible,
.crumbs a:focus-visible,
.menu a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}

.menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 20;
  min-width: 220px;
  padding: 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-3);
}

.menu a {
  display: block;
  padding: 6px 10px;
  border-radius: 6px;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.menu a:hover {
  background: var(--vp-c-bg-soft);
}

.menu a[aria-current='page'] {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>
