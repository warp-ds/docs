<script setup>
import { ref } from 'vue'
import { wAttention, wBox, wButton } from '@warp-ds/vue'
import IconInfo16 from '@warp-ds/icons/vue/info-16'

const popoverTarget = ref(null)
const popoverIconTarget = ref(null)

const popoverShowing = ref(false)
const popoverIconTargetShowing = ref(false)
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Popover</h3>
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
        placement="right"
        flip
        cross-axis
        :fallback-placements="['left', 'bottom', 'top']"
        :target-el="popoverTarget ? popoverTarget.$el : null"
        v-model="popoverShowing"
        id="popover-example"
        tabindex="0"
      >
        <p id="popover-bubbletext">This is a popover</p>
      </w-attention>
    </div>
    <div>
      <h3 class="t4">Popover with icon as target element</h3>
      <w-button
        :aria-expanded="popoverIconTargetShowing"
        aria-controls="popover-icon-target-example"
        type="button"
        utility
        quiet
        ref="popoverIconTarget"
        @click="() => (popoverIconTargetShowing = !popoverIconTargetShowing)"
      >
        <icon-info16 />
      </w-button>
        <w-attention
          popover
          placement="right-end"
          :distance="-6"
          :skidding="8"
          :target-el="popoverIconTarget ? popoverIconTarget.$el : null"
          v-model="popoverIconTargetShowing"
          tabindex="0"
        >
          <p>Hello Warp!</p>
        </w-attention>
    </div>
  </div>
</template>