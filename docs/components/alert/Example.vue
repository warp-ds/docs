<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Info</h3>
      <w-alert variant="info" show role="status">
        <p>This is the info variant of the alert element</p>
      </w-alert>
    </div>
    <div>
      <h3 class="h4">Positive</h3>
      <w-alert variant="positive" show role="status">
        <p>With an additional description</p>
      </w-alert>
    </div>
    <div>
      <h3 class="h4">Negative</h3>
      <w-alert variant="negative" show>
        <p>With an additional description</p>
      </w-alert>
    </div>
    <div>
      <h3 class="h4">Warning</h3>
      <w-alert variant="warning" show>
        <p>With an additional description</p>
      </w-alert>
    </div>
  </div>
</template>
