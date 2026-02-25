<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Default Page Indicator</h3>
      <w-page-indicator page-count="5" selected-page="1"></w-page-indicator>
    </div>
    <div>
      <h3 class="h4">Middle page selected</h3>
      <w-page-indicator page-count="7" selected-page="4"></w-page-indicator>
    </div>
    <div>
      <h3 class="h4">Last page selected</h3>
      <w-page-indicator page-count="5" selected-page="5"></w-page-indicator>
    </div>
  </div>
</template>
