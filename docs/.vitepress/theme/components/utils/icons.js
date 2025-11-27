/**
 * Simple Icons fetching utility with caching.
 * Fetches SVG path data from the Simple Icons CDN.
 */

import { ref } from 'vue';

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

/** CDN base URL for Simple Icons */
const SIMPLE_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons';

/** Maps framework/icon keys to Simple Icons filenames */
const ICON_FILENAME_MAP = {
  // React variants
  react: 'react',
  'react 19': 'react',
  react19: 'react',
  'react-beta': 'react',
  // Vue variants
  vue: 'vuedotjs',
  'vue.js': 'vuedotjs',
  vuedotjs: 'vuedotjs',
  // Mobile
  android: 'android',
  apple: 'apple',
  ios: 'apple',
  // Web Components
  webcomponents: 'webcomponentsdotorg',
  webcomponentsdotorg: 'webcomponentsdotorg',
  elements: 'webcomponentsdotorg',
};

// ─────────────────────────────────────────────────────────────────────────────
// Cache
// ─────────────────────────────────────────────────────────────────────────────

/** Global cache for fetched icon paths */
const iconCache = new Map();

// ─────────────────────────────────────────────────────────────────────────────
// Functions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Map an icon key to its Simple Icons filename.
 * @param {string} key - Icon key (e.g., "react", "vue", "ios")
 * @returns {string} Filename or empty string if not mapped
 */
export function getIconFilename(key) {
  const k = String(key || '')
    .toLowerCase()
    .trim();
  return ICON_FILENAME_MAP[k] || '';
}

/**
 * Fetch the SVG path data for a Simple Icon.
 * Results are cached globally.
 *
 * @param {string} key - Icon key (e.g., "react", "vue", "ios")
 * @returns {Promise<string | null>} SVG path 'd' attribute or null
 */
export async function fetchIconPath(key) {
  const filename = getIconFilename(key);
  if (!filename) return null;

  // Check cache first
  if (iconCache.has(filename)) {
    return iconCache.get(filename);
  }

  try {
    const res = await fetch(`${SIMPLE_ICONS_CDN}/${filename}.svg`);
    if (!res.ok) return null;

    const svg = await res.text();
    const match = svg.match(/<path[^>]*d="([^"]+)"/i);
    const pathData = match?.[1] ?? null;

    if (pathData) {
      iconCache.set(filename, pathData);
    }

    return pathData;
  } catch {
    return null;
  }
}

/**
 * Fetch multiple icons at once.
 * @param {string[]} keys - Array of icon keys
 * @returns {Promise<Record<string, string>>} Map of key → path data
 */
export async function fetchMultipleIcons(keys) {
  const results = {};
  const promises = keys.map(async (key) => {
    const path = await fetchIconPath(key);
    if (path) results[key] = path;
  });
  await Promise.all(promises);
  return results;
}

/**
 * Composable for loading an icon reactively.
 * @param {() => string} getKey - Getter function for the icon key
 * @returns {{ iconPath: import('vue').Ref<string | null>, refresh: () => Promise<void> }}
 */
export function useIcon(getKey) {
  const iconPath = ref(null);

  async function refresh() {
    const key = getKey();
    iconPath.value = await fetchIconPath(key);
  }

  return { iconPath, refresh };
}

/**
 * Clear the icon cache (useful for testing).
 */
export function clearIconCache() {
  iconCache.clear();
}
