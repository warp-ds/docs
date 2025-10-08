<script setup>
import { wAttention, wBox } from '@warp-ds/vue';
import { ref } from 'vue';

const popoverTypeTarget = ref(null);

const inlineTypeShowing = ref(true);
const popoverTypeShowing = ref(true);
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Inline type</h3>
      <div class="flex items-center">
        <w-box neutral aria-details="inline-type-bubbletext">
          I am a box full of info
        </w-box>
        <w-attention
          callout
          placement="right"
          v-model="inlineTypeShowing"
          class="ml-8">
          <p id="inline-type-bubbletext">Callout</p>
        </w-attention>
      </div>
    </div>
    <div>
      <h3 class="t4">Popover type</h3>
      <div class="flex items-center">
        <w-box neutral aria-details="popover-type-bubbletext" ref="popoverTypeTarget">
          I am a box full of info
        </w-box>
        <w-attention
          highlight
          placement="right"
          can-close
          v-model="popoverTypeShowing"
          :target-el="popoverTypeTarget ? popoverTypeTarget.$el : null">
          <p id="popover-type-bubbletext">Callout</p>
        </w-attention>
      </div>
    </div>
  </div>
</template>