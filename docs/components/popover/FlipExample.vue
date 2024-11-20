<script setup>
import { ref } from 'vue'
import { wAttention, wButton } from '@warp-ds/vue'

const popoverTarget = ref(null)
const popoverShowing = ref(false)
</script>

<template>
  <div>
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
      :target-el="popoverTarget ? popoverTarget.$el : null"
      v-model="popoverShowing"
      id="popover-example"
      class="w-1/2">
        <div>
          <h3 class="h4">Heading</h3>
          <p id="popover-bubbletext">Text goes in this box and is responsive so that if more text is written, the box grows in size</p>
        </div>
    </w-attention>
  </div>
</template>