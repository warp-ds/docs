<script setup>
import { ref } from 'vue';

const popoverShowing = ref(false);
</script>

<template>
  <div>
    <w-attention
      popover
      placement="bottom"
      flip
      cross-axis
      :show="popoverShowing"
      id="popover-example"
      class="w-1/2">
      <w-button
        slot="target"
        variant="utility"
        :aria-expanded="popoverShowing"
        aria-controls="popover-example"
        @click="popoverShowing = !popoverShowing"
      >
        Open this dynamic popover!
      </w-button>
      <div slot="message">
        <h3 class="h4">Heading</h3>
        <p id="popover-bubbletext">Text goes in this box and is responsive so that if more text is written, the box grows in size</p>
      </div>
    </w-attention>
  </div>
</template>
