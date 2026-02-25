<script setup>
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Inline type (callout)</h3>
      <w-attention callout placement="right" show class="flex items-center">
        <div slot="target">
          <w-box neutral>I am a box full of info</w-box>
        </div>
        <span slot="message">Callout message</span>
      </w-attention>
    </div>
    <div>
      <h3 class="t4">Popover type (highlight)</h3>
      <w-attention highlight placement="right" can-close show>
        <w-button slot="target" variant="utility">Target element</w-button>
        <span slot="message">Highlight message that is dismissable</span>
      </w-attention>
    </div>
  </div>
</template>
