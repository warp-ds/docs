// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

/** Canonical framework order for consistent display */
export const FRAMEWORK_ORDER = ['react', 'react19', 'vue', 'elements', 'android', 'ios'];

/** Set of allowed framework keys */
export const ALLOWED_FRAMEWORK_KEYS = new Set(FRAMEWORK_ORDER);

/** Valid status values */
export const VALID_STATUSES = ['released', 'beta', 'developing', 'planned', 'deprecated', 'unsupported'];

/** Statuses considered "available" for filtering */
export const AVAILABLE_STATUSES = new Set(['released', 'beta', 'developing']);

/** Framework display names (canonical labels) */
export const FRAMEWORK_LABELS = {
  react: 'React',
  react19: 'React 19',
  vue: 'Vue',
  elements: 'Elements',
  android: 'Android',
  ios: 'iOS',
};

/** Canonical label list for UI display */
export const CANONICAL_LABEL_LIST = ['React', 'React 19', 'Vue', 'Elements', 'Android', 'iOS'];

/** Maps Simple Icons keys to framework keys */
export const SIMPLE_ICON_KEYS = {
  react: 'react',
  react19: 'react',
  vue: 'vuedotjs',
  elements: 'webcomponentsdotorg',
  android: 'android',
  ios: 'apple',
};

// ─────────────────────────────────────────────────────────────────────────────
// Canonicalization
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Normalize a raw framework name to a canonical object.
 * @param {string} name - Raw framework name (e.g., "React 19", "react-beta", "iOS")
 * @returns {{ key: string, label: string, file: string, icon: string } | null}
 */
export function canonicalizeFramework(name) {
  const n = String(name || '')
    .toLowerCase()
    .trim();

  // React 19 variants
  if (n === 'react 19' || n === 'react19' || n === 'react-beta' || n === 'react beta') {
    return { key: 'react19', label: 'React 19', file: 'react-19', icon: 'react' };
  }
  // React (classic)
  if (n === 'react') {
    return { key: 'react', label: 'React', file: 'react', icon: 'react' };
  }
  // Vue
  if (n === 'vue' || n === 'vue.js' || n === 'vuedotjs') {
    return { key: 'vue', label: 'Vue', file: 'vue', icon: 'vue' };
  }
  // Elements / Web Components
  if (n === 'elements' || n === 'webcomponents' || n === 'webcomponentsdotorg') {
    return { key: 'elements', label: 'Elements', file: 'elements', icon: 'webcomponents' };
  }
  // Android
  if (n === 'android') {
    return { key: 'android', label: 'Android', file: 'android', icon: 'android' };
  }
  // iOS
  if (n === 'ios' || n === 'apple') {
    return { key: 'ios', label: 'iOS', file: 'ios', icon: 'apple' };
  }

  return null;
}

/**
 * Get the canonical label for a framework name.
 * @param {string} name - Raw framework name
 * @returns {string | null} Canonical label or null if unknown
 */
export function getFrameworkLabel(name) {
  const canonical = canonicalizeFramework(name);
  return canonical?.label ?? null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Status Normalization
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Normalize a status string to a valid status value.
 * @param {string} status - Raw status value
 * @param {Object} options
 * @param {string} [options.fallback='unsupported'] - Fallback for invalid values
 * @param {boolean} [options.allowEmpty=false] - If true, returns '' for empty input
 * @returns {string} Normalized status
 */
export function normalizeStatus(status, { fallback = 'unsupported', allowEmpty = false } = {}) {
  const v = String(status || '')
    .toLowerCase()
    .trim();

  if (!v && allowEmpty) return '';
  if (VALID_STATUSES.includes(v)) return v;

  return fallback;
}

/**
 * Check if a status is considered "available" (released, beta, or developing).
 * @param {string} status - Status value
 * @returns {boolean}
 */
export function isStatusAvailable(status) {
  return AVAILABLE_STATUSES.has(normalizeStatus(status));
}

// ─────────────────────────────────────────────────────────────────────────────
// Sorting
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Sort frameworks by canonical order.
 * @template T
 * @param {T[]} items - Array of items with a `key` property
 * @param {string} [keyProp='key'] - Property name containing the framework key
 * @returns {T[]} Sorted array (new array, original unchanged)
 */
export function sortByFrameworkOrder(items, keyProp = 'key') {
  const orderIndex = new Map(FRAMEWORK_ORDER.map((k, i) => [k, i]));
  return items.slice().sort((a, b) => {
    const ai = orderIndex.get(a[keyProp]) ?? 999;
    const bi = orderIndex.get(b[keyProp]) ?? 999;
    return ai - bi;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Path Utilities
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Extract component slug from a file path.
 * @param {string} path - File path like "/components/button/index.md"
 * @returns {string} Slug like "button"
 */
export function extractSlugFromPath(path) {
  const normalized = String(path).replace(/\\/g, '/');
  const match = normalized.match(/\/components\/([^/]+)\/index\.md$/);
  return match?.[1] ?? normalized;
}

/**
 * Normalize a file path (convert backslashes to forward slashes).
 * @param {string} path
 * @returns {string}
 */
export function normalizePath(path) {
  return String(path).replace(/\\/g, '/');
}

/**
 * Get the filename from a path.
 * @param {string} path
 * @returns {string}
 */
export function getFileName(path) {
  return normalizePath(path).split('/').pop() || '';
}
