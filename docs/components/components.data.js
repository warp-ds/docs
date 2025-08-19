import { createContentLoader } from 'vitepress'

export default createContentLoader('components/**/index.md', {
  transform(pages) {
    return pages
      .map((p) => ({
        url: p.url,
        title: p.frontmatter && p.frontmatter.title,
        summary: (p.frontmatter && (p.frontmatter.summary ?? p.frontmatter.description)),
        description: p.frontmatter && p.frontmatter.description,
        category: p.frontmatter && p.frontmatter.category,
        placeholder: p.frontmatter && p.frontmatter.placeholder,
        frameworks: p.frontmatter && p.frontmatter.frameworks
      }))
      .filter((x) => !!x.title)
      .sort((a, b) => a.title.localeCompare(b.title))
  }
})
