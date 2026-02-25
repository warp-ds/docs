<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Standard with hint</h3>
      <w-textfield label="A label" help-text="A hint"></w-textfield>
    </div>
    <div>
      <h3 class="h4">Optional with placeholder</h3>
      <w-textfield label="A label" placeholder="This is a placeholder"></w-textfield>
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <w-textfield label="A label" disabled></w-textfield>
    </div>
    <div>
      <h3 class="h4">Read Only</h3>
      <w-textfield label="A label" read-only value="This is a readOnly textfield"></w-textfield>
    </div>
    <div>
      <h3 class="h4">Invalid</h3>
      <w-textfield label="A label" invalid required></w-textfield>
    </div>
    <div>
      <h3 class="h4">Suffix + Prefix</h3>
      <w-textfield label="A label">
        <w-affix slot="prefix" label="kr"></w-affix>
        <w-affix slot="suffix" clear aria-label="Clear text"></w-affix>
      </w-textfield>
    </div>
    <div>
      <h3 class="h4">Wider Prefix</h3>
      <w-textfield label="Price in kroner" class="[--w-prefix-width:56px]" placeholder="1 000 000">
        <w-affix slot="prefix" label="kroner"></w-affix>
      </w-textfield>
    </div>
  </div>
</template>
