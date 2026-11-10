---
title: What's new
---

<script setup>
import ArticleCard from './ArticleCard.vue'
import { data } from './posts.data.js'
</script>

# What's new in WARP

Release notes, roadmap updates and articles from the WARP Design System team.

<ul class="dc-grid">
  <li v-for="article in data" :key="article.url">
    <ArticleCard :title="article.frontmatter.title" :excerpt="article.excerpt" :href="article.url" :date="article.frontmatter.date" />
  </li>
</ul>
