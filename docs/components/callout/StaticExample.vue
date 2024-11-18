<script setup>
import { ref } from 'vue'
import { wAttention, wButton } from '@warp-ds/vue'

const highlightTarget = ref(null)
const highlightShowing = ref(false)
</script>

<template>
  <div class="component">
    <w-button
      utility
      :aria-expanded="highlightShowing"
      aria-controls="highlight-example"
      aria-details="highlight-bubbletext"
      ref="highlightTarget"
      @click="() => (highlightShowing = !highlightShowing)"
    >
      Open this static highlight!
    </w-button>
    <w-attention
      highlight
      placement="bottom-start"
      :target-el="highlightTarget ? highlightTarget.$el : null"
      v-model="highlightShowing"
      id="highlight-example"
      tabindex="0"
    >
      <p id="highlight-bubbletext">This is a highlight</p>
    </w-attention>
  </div>
</template>