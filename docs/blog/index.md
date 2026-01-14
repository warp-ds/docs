 <script setup>
  import Hero from './Hero.vue'
  import ArticleCard from './ArticleCard.vue'

  import { data } from './posts.data.js'
</script>

<Hero subtitle="This section is updated regularly with new content to help you stay up to date with the latest roadmap updates, releases, and articles from the WARP Design System team." />

<div v-for="(article, index) in data" :key="index" class="pt-20">
  <ArticleCard :title="article.frontmatter.title" :excerpt="article.excerpt" :href="article.url" :date="article.frontmatter.date" />
</div>

<style scoped>
.pt-20 {
  padding-top: 2rem;
}
</style>
