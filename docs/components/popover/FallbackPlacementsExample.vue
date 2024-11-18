<script setup>
import { ref } from 'vue'
import { wAttention, wButton } from '@warp-ds/vue'

const popoverTarget = ref(null)
const popoverShowing = ref(false)
</script>

<template>
  <div class="component">
    <w-button
      utility
      :aria-expanded="popoverShowing"
      aria-controls="popover-example"
      aria-details="popover-bubbletext"
      ref="popoverTarget"
      @click="() => (popoverShowing = !popoverShowing)"
    >
      Open this dynamic popover!
    </w-button>
    <w-attention
      popover
      placement="bottom"
      flip
      cross-axis
      :fallback-placements="['right', 'top']"
      :target-el="popoverTarget ? popoverTarget.$el : null"
      v-model="popoverShowing"
      id="popover-example"
      tabindex="0"
    >
      <p id="popover-bubbletext">This is a popover</p>
    </w-attention>
  </div>
</template>