<script setup>
import { ref } from 'vue'
import { wAttention, wButton } from '@warp-ds/vue'
import IconInfo16 from '@warp-ds/icons/vue/info-16'

const popoverTarget = ref(null)
const popoverIconTarget = ref(null)

const popoverShowing = ref(false)
const popoverIconTargetShowing = ref(false)
</script>

<template>
  <div class="component space-y-32">
    <div>
      <w-button
        utility
        :aria-expanded="popoverShowing"
        aria-controls="popover-example"
        aria-details="popover-bubbletext"
        ref="popoverTarget"
        @click="() => (popoverShowing = !popoverShowing)"
      >
        Open popover
      </w-button>
      <w-attention
        popover
        placement="right-start"
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
  </div>
</template>