<script setup>
import { ref } from 'vue';

const popoverRef = ref(null);
const isOpen = ref(false);

const togglePopover = () => {
  isOpen.value = !isOpen.value;
  if (popoverRef.value) {
    popoverRef.value.show = isOpen.value;
  }
};
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Click to toggle popover</h3>
      <w-attention ref="popoverRef" popover placement="right-start">
        <w-button slot="target" variant="utility" @click="togglePopover" :aria-expanded="isOpen">
          Open popover
        </w-button>
        <div slot="message">
          <h3 class="h4">Heading</h3>
          <p>Text goes in this box and is responsive so that if more text is written, the box grows in size</p>
        </div>
      </w-attention>
    </div>
  </div>
</template>
