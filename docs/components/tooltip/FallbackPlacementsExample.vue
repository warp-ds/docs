<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <div class="component">
    <div>
      <w-attention
        tooltip
        placement="right"
        flip
        cross-axis
        :fallback-placements="['top']"
        :show="show"
      >
        <w-button
          slot="target"
          variant="utility"
          aria-describedby="tooltip-bubbletext"
          @mouseenter="show = true"
          @mouseleave="show = false"
          @focus="show = true"
          @blur="show = false"
        >
          Hover me to trigger this dynamic tooltip!
        </w-button>
        <p slot="message" id="tooltip-bubbletext">Tooltip</p>
      </w-attention>
    </div>
  </div>
</template>
