<script setup>
import { ref } from 'vue';

const highlightShowing = ref(false);
</script>

<template>
  <div>
    <w-attention
      highlight
      placement="bottom"
      can-close
      :show="highlightShowing"
      @close="highlightShowing = false"
      id="highlight-example">
      <w-button
        slot="target"
        variant="utility"
        :aria-expanded="highlightShowing"
        aria-controls="highlight-example"
        @click="highlightShowing = !highlightShowing"
      >
        Open this static highlight (popover type)!
      </w-button>
      <p slot="message" id="highlight-bubbletext">Callout</p>
    </w-attention>
  </div>
</template>