<script setup>
</script>

<template>
  <div class="component">
    <h3 class="h4">Horizontal Steps</h3>
    <w-step-indicator horizontal class="mb-32">
      <w-step completed>
        <strong>Step 1</strong>
        <p>The first step</p>
      </w-step>
      <w-step active>
        <strong>Step 2</strong>
        <p>The second step</p>
      </w-step>
      <w-step>
        <strong>Step 3</strong>
        <p>The last step</p>
      </w-step>
    </w-step-indicator>

    <h3 class="h4">Vertical Steps</h3>
    <w-step-indicator class="mb-32">
      <w-step completed>
        <strong>Step 1</strong>
        <p>The first step</p>
      </w-step>
      <w-step active>
        <strong>Step 2</strong>
        <p>The second step</p>
      </w-step>
      <w-step>
        <strong>Step 3</strong>
        <p>The last step</p>
      </w-step>
    </w-step-indicator>

    <h3 class="h4">Vertical Steps (Right aligned)</h3>
    <w-step-indicator right>
      <w-step completed>
        <strong>Step 1</strong>
        <p>The first step</p>
      </w-step>
      <w-step active>
        <strong>Step 2</strong>
        <p>The second step</p>
      </w-step>
      <w-step>
        <strong>Step 3</strong>
        <p>The last step</p>
      </w-step>
    </w-step-indicator>
  </div>
</template>
