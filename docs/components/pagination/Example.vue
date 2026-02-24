<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Default Pagination</h3>
      <w-pagination base-url="/search?page=" pages="10" current-page="5"></w-pagination>
    </div>
    <div>
      <h3 class="h4">With fewer pages</h3>
      <w-pagination base-url="/search?page=" pages="5" current-page="1"></w-pagination>
    </div>
    <div>
      <h3 class="h4">Many pages with limited visible</h3>
      <w-pagination base-url="/search?page=" pages="50" current-page="25" visible-pages="5"></w-pagination>
    </div>
  </div>
</template>
