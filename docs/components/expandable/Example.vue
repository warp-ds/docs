<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Default</h3>
      <w-expandable title="I am expandable">
        <p>Expandable contents go here.</p>
      </w-expandable>
    </div>
    <div>
      <h3 class="h4">Expandable box</h3>
      <w-expandable title="I am an expandable box" box>
        <p>Expandable contents go here.</p>
      </w-expandable>
    </div>
    <div>
      <h3 class="h4">Expandable animated box</h3>
      <w-expandable title="I am an animated expandable box" animated box>
        <p>Expandable contents go here.</p>
      </w-expandable>
    </div>
  </div>
</template>
