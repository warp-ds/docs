// This runs at build-time so we can include icon names in the static HTML,
// to help enable scraping by search providers and AI agents.
// See https://vitepress.dev/guide/data-loading to learn more.

const eikonsBaseUrl = 'https://assets.finn.no/pkg/eikons/v1';

export default {
  async load() {
    const response = await fetch(eikonsBaseUrl);
    const data = await response.json();

    return data?.files
      .map((file) => file?.pathname)
      .filter((path) => path?.startsWith('/en/') && path?.endsWith('.svg'))
      .map((path) => path?.replace('/en/', '')?.replace('.svg', ''))
      .sort();
  },
};
