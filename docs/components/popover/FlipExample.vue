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
      placement="bottom-start"
      flip
      :target-el="popoverTarget ? popoverTarget.$el : null"
      v-model="popoverShowing"
      id="popover-example">
      <p id="popover-bubbletext">This is a popover</p>
    </w-attention>
  </div>
</template>