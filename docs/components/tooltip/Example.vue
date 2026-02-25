<script setup>
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Tooltip on hover/focus</h3>
      <w-attention tooltip placement="right">
        <w-button slot="target" variant="utility">Hover or focus me</w-button>
        <span slot="message">I'm a tooltip on right</span>
      </w-attention>
    </div>
    <div>
      <h3 class="t4">Tooltip on bottom</h3>
      <w-attention tooltip placement="bottom">
        <w-button slot="target" variant="utility">Hover or focus me</w-button>
        <span slot="message">I'm a tooltip on bottom</span>
      </w-attention>
    </div>
  </div>
</template>
