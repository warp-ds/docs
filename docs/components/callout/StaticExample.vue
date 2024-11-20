<script setup>
import { ref } from 'vue'
import { wAttention, wButton } from '@warp-ds/vue'

const highlightTarget = ref(null)
const highlightShowing = ref(false)
</script>

<template>
  <div>
    <w-button
      utility
      :aria-expanded="highlightShowing"
      aria-controls="highlight-example"
      aria-details="highlight-bubbletext"
      ref="highlightTarget"
      @click="highlightShowing = !highlightShowing"
    >
      Open this static highlight (popover type)!
    </w-button>
    <w-attention
      highlight
      placement="bottom"
      can-close
      @dismiss="highlightShowing = false"
      :target-el="highlightTarget ? highlightTarget.$el : null"
      v-model="highlightShowing"
      id="highlight-example">
      <p id="highlight-bubbletext">Callout</p>
    </w-attention>
  </div>
</template>