import { createContentLoader } from 'vitepress';

const base = '/docs';

// Only what the What's new index shows (title, date, excerpt, link): the full posts are not shipped to the browser.
export default createContentLoader('/about/whats-new/*/*.md', {
  excerpt: true,
  transform(rawData) {
    return rawData
      .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
      .map((page) => ({
        url: `${base}${page.url}`,
        excerpt: page.excerpt,
        frontmatter: { title: page.frontmatter.title, date: page.frontmatter.date },
      }));
  },
});
