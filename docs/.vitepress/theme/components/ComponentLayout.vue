<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

import Footer from '../../Footer.vue'
import ComponentDoc from './ComponentDoc.vue'

const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <!-- keep your existing footer slot -->
    <template #layout-bottom>
      <Footer />
    </template>

    <!-- only for pages that opt in -->
    <template v-if="frontmatter.layout === 'component'" #doc-before>
      <ComponentDoc />
    </template>
  </DefaultTheme.Layout>
</template>
