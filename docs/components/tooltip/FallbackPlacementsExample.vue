<script setup>
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
      >
        <w-button
          slot="target"
          variant="utility"
          aria-describedby="tooltip-bubbletext"
        >
          Hover me to trigger this dynamic tooltip!
        </w-button>
        <p slot="message" id="tooltip-bubbletext">Tooltip</p>
      </w-attention>
    </div>
  </div>
</template>
