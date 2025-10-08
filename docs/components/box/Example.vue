<script setup>
import { wBox } from '@warp-ds/vue';
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Neutral</h3>
      <w-box neutral>
        <p>This is the <strong>neutral</strong> variant of the box element</p>
      </w-box>
    </div>
    <div>
      <h3 class="h4">Info</h3>
      <w-box info>
        <p>This is the <strong>info</strong> variant of the box element</p>
      </w-box>
    </div>
    <div>
      <h3 class="h4">Bordered</h3>
      <w-box bordered>
        <p>This is the <strong>bordered</strong> variant of the box element</p>
      </w-box>
    </div>
  </div>
</template>