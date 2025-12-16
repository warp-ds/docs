<script setup>
import { withBase, useData } from 'vitepress';
import { computed, ref } from 'vue';
import {
  CANONICAL_LABEL_LIST,
  getFrameworkLabel,
  isStatusAvailable,
  normalizeStatus,
} from './utils/frameworks.js';
import { extractFrontmatter } from './utils/frontmatter.js';

const { page } = useData();

/* ────────────────────────────────────────────────────────────
   Determine whether we are in /components/ or /patterns/
   ──────────────────────────────────────────────────────────── */
const currentSection = computed(() => {
  const rel = page.value.relativePath || '';
  if (rel.startsWith('patterns/')) return 'patterns';
  return 'components';
});

const kindLabel = computed(() =>
  currentSection.value === 'patterns' ? 'patterns' : 'components',
);

/* ────────────────────────────────────────────────────────────
   Load index.md + placeholder.svg from both components & patterns
   ──────────────────────────────────────────────────────────── */
const mdModules = {
  ...import.meta.glob('../../../components/*/index.md', { eager: true }),
  ...import.meta.glob('../../../patterns/*/index.md', { eager: true }),
};

const svgModules = {
  ...import.meta.glob('../../../components/*/placeholder.svg', { eager: true, import: 'default' }),
  ...import.meta.glob('../../../patterns/*/placeholder.svg', { eager: true, import: 'default' }),
};

/* ────────────────────────────────────────────────────────────
   Section + slug parsing
   ──────────────────────────────────────────────────────────── */
function parseSectionAndSlugFromIndex(p) {
  const s = String(p).replace(/\\/g, '/');
  const m = s.match(/\/(components|patterns)\/([^/]+)\/index\.md$/);
  return m ? { section: m[1], slug: m[2] } : { section: null, slug: s };
}

function parseSectionAndSlugFromSvg(p) {
  const s = String(p).replace(/\\/g, '/');
  const m = s.match(/\/(components|patterns)\/([^/]+)\/placeholder\.svg$/);
  return m ? { section: m[1], slug: m[2] } : { section: null, slug: s };
}

/* ────────────────────────────────────────────────────────────
   Map placeholder SVGs to section/slug
   ──────────────────────────────────────────────────────────── */
const placeholderByKey = (() => {
  const map = Object.create(null);
  for (const [key, mod] of Object.entries(svgModules)) {
    const { section, slug } = parseSectionAndSlugFromSvg(key);
    if (!section || !slug) continue;
    map[`${section}/${slug}`] = mod;
  }
  return map;
})();

/* CANONICAL is now provided by main-branch utils */
const CANONICAL = new Set(CANONICAL_LABEL_LIST);

/* ────────────────────────────────────────────────────────────
   Build combined list of items (components + patterns)
   ──────────────────────────────────────────────────────────── */
const allItems = Object.entries(mdModules)
  .map(([key, mod]) => {
    const { section, slug } = parseSectionAndSlugFromIndex(key);
    if (!section || !slug) return null;
    if (slug.startsWith('_') || slug.startsWith('.')) return null;

    const fm = extractFrontmatter(mod) || {};
    const raw = Array.isArray(fm.frameworks) ? fm.frameworks : [];

    const frameworks = raw
      .map((f) => ({
        name: getFrameworkLabel(f?.name),
        status: normalizeStatus(f?.status),
      }))
      .filter((f) => f.name && CANONICAL.has(f.name) && isStatusAvailable(f.status));

    if (frameworks.length === 0) return null;

    const title = fm.title || slug;
    const description = fm.description || '';
    const category = fm.category || 'Uncategorized';
    const svgComponent = placeholderByKey[`${section}/${slug}`] || null;

    return {
      section,
      slug,
      title,
      description,
      category,
      frameworks,
      svgComponent,
      href: withBase(`/${section}/${slug}/`),
      placeholder: { label: fm?.placeholder?.label || title },
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.title.localeCompare(b.title));

/* ────────────────────────────────────────────────────────────
   UI filters
   ──────────────────────────────────────────────────────────── */
const q = ref('');
const picked = ref([]);

const allFrameworks = computed(() => CANONICAL_LABEL_LIST.slice());

const filtered = computed(() => {
  const query = q.value.trim().toLowerCase();
  const sel = picked.value.map((v) => String(v).toLowerCase());
  const section = currentSection.value;

  return allItems.filter((it) => {
    if (it.section !== section) return false;

    const textOk =
      !query ||
      it.title.toLowerCase().includes(query) ||
      it.description.toLowerCase().includes(query);

    const fwNames = it.frameworks.map((f) => f.name.toLowerCase());
    const fwOk = sel.length === 0 || sel.some((s) => fwNames.includes(s));

    return textOk && fwOk;
  });
});

function toggleFramework(name) {
  const i = picked.value.indexOf(name);
  if (i >= 0) picked.value.splice(i, 1);
  else picked.value.push(name);
}

function showAll() {
  picked.value = [];
}
</script>
