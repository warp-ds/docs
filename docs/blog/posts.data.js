import { createContentLoader } from 'vitepress';

const base = '/docs';

export default createContentLoader('/blog/posts/**/*.md', {
  includeSrc: true, // include raw markdown source?
  render: true, // include rendered full page HTML?
  excerpt: true, // include excerpt?
  transform(rawData) {
    // map, sort, or filter the raw data as you wish.
    // the final result is what will be shipped to the client.
    return rawData
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
      })
      .map((page) => ({
        ...page,
        url: `${base}${page.url}`,
      }));
  },
});
