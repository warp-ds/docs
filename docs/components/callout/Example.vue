<script setup>
import { ref } from 'vue'
import { wAttention, wBox } from '@warp-ds/vue'

const highlightTarget = ref(null)

const calloutShowing = ref(true)
const highlightShowing = ref(true)
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Callout (displayed inline within content)</h3>
      <div class="flex items-center">
        <w-box neutral aria-details="callout-bubbletext" tabindex="0">
          I am a box full of info
        </w-box>
        <w-attention
          callout
          placement="right"
          v-model="calloutShowing"
          class="ml-8"
          tabindex="0"
        >
          <p id="callout-bubbletext">This is a callout</p>
        </w-attention>
      </div>
    </div>
    <div>
      <h3 class="t4">Highlight (elevated above content with shadow)</h3>
      <div class="flex items-center">
        <w-box neutral aria-details="highlight-bubbletext" ref="highlightTarget" tabindex="0">
          I am a box full of info
        </w-box>
        <w-attention
          highlight
          placement="right"
          v-model="highlightShowing"
          :target-el="highlightTarget ? highlightTarget.$el : null"
          tabindex="0"
        >
          <p id="highlight-bubbletext">This is a highlight</p>
        </w-attention>
      </div>
    </div>
  </div>
</template>