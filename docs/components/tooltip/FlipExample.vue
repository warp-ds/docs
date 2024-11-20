<script setup>
import { ref } from 'vue'
import { wAttention, wButton } from '@warp-ds/vue'

const tooltipTarget = ref(null)
const tooltipShowing = ref(false)
</script>

<template>
  <div class="component space-y-32">
    <div>
      <w-button
        utility
        ref="tooltipTarget"
        aria-describedby="tooltip-bubbletext"
        aria-expanded="true"
        @mouseenter="tooltipShowing = true; target = $refs.tooltipTarget"
        @mouseleave="tooltipShowing = false"
        @keydown.escape="tooltipShowing = false"
        @focus="tooltipShowing = true"
        @blur="tooltipShowing = false"
      >
        Hover over me
      </w-button>
      <w-attention
        tooltip
        placement="top"
        flip
        :target-el="tooltipTarget ? tooltipTarget.$el : null"
        v-model="tooltipShowing"
      >
        <p id="tooltip-bubbletext">This is a tooltip</p>
      </w-attention>
    </div>
  </div>
</template>
