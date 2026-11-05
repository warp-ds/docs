// Platform state for the navigation shell.
// Source of truth: the URL (/web|ios|android/...). On shared pages: the last choice
// (localStorage), defaulting to Web. SSR always renders Web; the stored value is applied after mount.
import { useData, useRouter, withBase } from 'vitepress';
import { computed, onMounted, ref, watch } from 'vue';
import manifest from '../platform-manifest.json';
import { PLATFORMS } from '../sidebar/platform.js';

export { PLATFORMS };
const STORAGE_KEY = 'warp-docs-platform';
const DEFAULT_PLATFORM = 'web';
const isPlatform = (id) => PLATFORMS.some((p) => p.id === id);

// shared across all component instances
const stored = ref(DEFAULT_PLATFORM);
let restored = false;

/** Parse a source-relative path like 'ios/components/button/code.md'. */
export function parsePlatformPath(relativePath) {
  const m = relativePath.match(/^(web|ios|android)\/(?:(components|patterns)\/([^/]+)\/([^/]+)\.md|.*)$/);
  if (!m) return null;
  const [, platform, type, name, page] = m;
  const foundation = relativePath.match(/^(?:web|ios|android)\/foundations\/(.+?)(?:\/index)?\.md$/)?.[1];
  return { platform, type, name, page, foundation: foundation === 'index' ? '' : foundation };
}

/** Best equivalent URL (without base) on another platform. */
export function equivalentUrl(current, target) {
  if (current?.foundation !== undefined) {
    const hasPage = manifest[target]?.foundations?.some((f) => f.slug === current.foundation);
    if (current.foundation && hasPage) return `/${target}/foundations/${current.foundation}`;
    const hasFoundation = target === 'web' || manifest[target]?.foundations?.length;
    return hasFoundation ? `/${target}/foundations/` : `/${target}/`;
  }
  if (!current?.type) return `/${target}/`;
  const { type, name } = current;
  const page = current.page.startsWith('code-') ? 'code' : current.page;
  const entry = manifest[target]?.[type]?.[name];
  if (!entry) return `/${target}/${type}/`;
  if (entry.pages.includes(page)) return `/${target}/${type}/${name}/${page}`;
  return `/${target}/${type}/${name}/${entry.pages.includes('overview') ? 'overview' : entry.pages[0]}`;
}

export function usePlatform() {
  const { page } = useData();
  const router = useRouter();
  const current = computed(() => parsePlatformPath(page.value.relativePath));
  const routePlatform = computed(() => current.value?.platform ?? null);
  const selectedPlatform = computed(() => routePlatform.value ?? stored.value);

  const save = (id) => {
    stored.value = id;
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // storage unavailable (private mode); keep in memory
    }
  };

  onMounted(() => {
    if (!restored) {
      restored = true;
      try {
        const value = localStorage.getItem(STORAGE_KEY);
        if (isPlatform(value)) stored.value = value;
      } catch {
        // ignore
      }
    }
  });

  watch(
    routePlatform,
    (id) => {
      if (id && typeof window !== 'undefined') save(id);
    },
    { immediate: true },
  );

  /** Switch platform: navigates on platform pages, swaps the tree on shared pages. */
  function selectPlatform(id) {
    if (!isPlatform(id)) return;
    if (routePlatform.value) {
      if (id !== routePlatform.value) router.go(withBase(equivalentUrl(current.value, id)));
    } else save(id);
  }

  return { current, routePlatform, selectedPlatform, selectPlatform };
}
