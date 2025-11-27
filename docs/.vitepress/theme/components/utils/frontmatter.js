/**
 * Utilities for working with VitePress frontmatter.
 */

/**
 * Extract frontmatter from a module loaded via import.meta.glob.
 * Handles various module formats that VitePress/Vite may produce.
 *
 * @param {any} mod - Module object from import.meta.glob
 * @returns {Record<string, any> | null} Frontmatter object or null
 */
export function extractFrontmatter(mod) {
  if (!mod || typeof mod !== 'object') return null;

  // Direct frontmatter property
  if (mod.frontmatter && typeof mod.frontmatter === 'object') {
    return mod.frontmatter;
  }

  // Nested in default export
  if (mod.default && typeof mod.default === 'object') {
    if (mod.default.frontmatter) {
      return mod.default.frontmatter;
    }
    if (mod.default.__pageData?.frontmatter) {
      return mod.default.__pageData.frontmatter;
    }
  }

  // __pageData format
  if (mod.__pageData?.frontmatter) {
    return mod.__pageData.frontmatter;
  }

  return null;
}

/**
 * Get frameworks array from frontmatter, with fallback to empty array.
 * @param {Record<string, any>} frontmatter
 * @returns {Array<{ name?: string, status?: string, reason?: string }>}
 */
export function getFrameworksFromFrontmatter(frontmatter) {
  if (!frontmatter) return [];
  return Array.isArray(frontmatter.frameworks) ? frontmatter.frameworks : [];
}
