<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Standard with hint</h3>
      <w-textarea label="A label" help-text="A hint"></w-textarea>
    </div>
    <div>
      <h3 class="h4">Optional</h3>
      <w-textarea label="A label" optional></w-textarea>
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <w-textarea label="A label" disabled></w-textarea>
    </div>
    <div>
      <h3 class="h4">Read Only</h3>
      <w-textarea label="A label" readonly value="This is a readOnly textarea"></w-textarea>
    </div>
    <div>
      <h3 class="h4">Invalid</h3>
      <w-textarea label="A label" invalid required></w-textarea>
    </div>
  </div>
</template>
