<template>
  <div class="component" ref="el"/>
</template>

<script setup>
import {createElement} from 'react'
import {createRoot} from 'react-dom/client'
import {onMounted, ref} from 'vue'
import PageIndicator from './PageIndicator.jsx'

const el = ref()

onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(PageIndicator, {}, null))
})
</script>
