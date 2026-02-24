<script setup>
</script>

<template>
  <div class="component space-y-24">
    <div>
      <h3 class="t4">Default</h3>
      <w-badge variant="neutral">Rendered as neutral variant as default</w-badge>
    </div>
    <div>
      <h3 class="h4">Variants</h3>
      <ul class="flex flex-wrap gap-16">
        <w-badge variant="neutral">neutral</w-badge>
        <w-badge variant="info">info</w-badge>
        <w-badge variant="positive">positive</w-badge>
        <w-badge variant="warning">warning</w-badge>
        <w-badge variant="negative">negative</w-badge>
        <w-badge variant="disabled">disabled</w-badge>
        <w-badge variant="price">price</w-badge>
        <w-badge variant="sponsored">sponsored</w-badge>
      </ul>
    </div>
    <div>
      <h3 class="t4">Positioning</h3>
      <div class="relative border border-0 rounded overflow-hidden h-96">
        <img class="w-full h-96 rounded-8 object-cover" src="/images/profile1.jpg" />
        <w-badge variant="price" position="top-left">position: top-left</w-badge>
        <w-badge variant="price" position="top-right">position: top-right</w-badge>
        <w-badge variant="price" position="bottom-left">position: bottom-left</w-badge>
        <w-badge variant="price" position="bottom-right">position: bottom-right</w-badge>
      </div>
    </div>
  </div>
</template>
