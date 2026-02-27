<script setup>
import { ref } from 'vue';

const showRight = ref(false);
const showBottom = ref(false);
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Tooltip on hover/focus</h3>
      <w-attention tooltip placement="right" :show="showRight">
        <w-button
          slot="target"
          variant="utility"
          @mouseenter="showRight = true"
          @mouseleave="showRight = false"
          @focus="showRight = true"
          @blur="showRight = false"
        >
          Hover or focus me
        </w-button>
        <span slot="message">I'm a tooltip on right</span>
      </w-attention>
    </div>
    <div>
      <h3 class="t4">Tooltip on bottom</h3>
      <w-attention tooltip placement="bottom" :show="showBottom">
        <w-button
          slot="target"
          variant="utility"
          @mouseenter="showBottom = true"
          @mouseleave="showBottom = false"
          @focus="showBottom = true"
          @blur="showBottom = false"
        >
          Hover or focus me
        </w-button>
        <span slot="message">I'm a tooltip on bottom</span>
      </w-attention>
    </div>
  </div>
</template>
