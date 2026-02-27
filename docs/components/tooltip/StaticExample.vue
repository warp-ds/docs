<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <div class="component space-y-32">
    <div>
      <w-attention tooltip placement="right" :show="show">
        <w-button
          slot="target"
          variant="utility"
          aria-describedby="tooltip-bubbletext"
          @mouseenter="show = true"
          @mouseleave="show = false"
          @focus="show = true"
          @blur="show = false"
        >
          Hover over me
        </w-button>
        <p slot="message" id="tooltip-bubbletext">Tooltip</p>
      </w-attention>
    </div>
  </div>
</template>
