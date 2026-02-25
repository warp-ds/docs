<script setup>
</script>

<template>
  <div class="component space-y-32">
    <div>
      <w-attention tooltip placement="right">
        <w-button
          slot="target"
          variant="utility"
          aria-describedby="tooltip-bubbletext"
        >
          Hover over me
        </w-button>
        <p slot="message" id="tooltip-bubbletext">Tooltip</p>
      </w-attention>
    </div>
  </div>
</template>
