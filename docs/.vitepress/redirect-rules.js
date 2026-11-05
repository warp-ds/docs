// Shared redirect helpers (client + build). The map lives in ./redirects.json:
// keys are old clean URLs (without base), values are new clean URLs.

/** Old URL shapes that may have a redirect. Keeps the map out of the bundle for normal navigation. */
export const OLD_URL_PREFIX =
  /^\/(components|patterns|blog|help|collaborate|pre-migrating|get-started\/(designers|developers|mission-values-principles)|foundations\/(css-classes|customization|font-weights|keyboard|dark-mode\/(elements|react)))(\/|$)/;

/**
 * Turn a pathname into a map key: strip base, `.html` and a trailing `index`.
 * @param {string} pathname
 * @param {string} base e.g. '/docs/'
 */
export function normalizePath(pathname, base = '/') {
  let p = pathname;
  try {
    p = decodeURI(p);
  } catch {
    // keep the raw path
  }
  if (base !== '/' && p.startsWith(base)) p = `/${p.slice(base.length)}`;
  else if (`${p}/` === base) p = '/';
  p = p.replace(/\.html$/, '');
  if (p.endsWith('/index')) p = p.slice(0, -'index'.length);
  return p;
}

/** Look a key up, tolerating a missing or extra trailing slash. */
export function lookupRedirect(map, key) {
  if (map[key]) return map[key];
  if (key.endsWith('/')) return map[key.slice(0, -1)] ?? null;
  return map[`${key}/`] ?? null;
}

/**
 * Client-side: resolve an href (with base) to the redirect target href, or null.
 * The map is loaded lazily, only for URLs that look old.
 */
export async function resolveRedirect(href, base) {
  const url = new URL(href, window.location.origin);
  const key = normalizePath(url.pathname, base);
  if (!OLD_URL_PREFIX.test(key)) return null;
  const { default: map } = await import('./redirects.json');
  const target = lookupRedirect(map, key);
  return target ? `${base.replace(/\/$/, '')}${target}${url.search}${url.hash}` : null;
}
