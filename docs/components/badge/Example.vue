<script setup>
import { wBadge } from '@warp-ds/vue';

const badgeVariants = ['neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored'];
const badgePositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
</script>

<template>
  <div class="component space-y-24">
    <div>
      <h3 class="t4">Default</h3>
      <w-badge>Rendered as neutral variant as default</w-badge>
    </div>
    <div>
      <h3 class="h4">Variants</h3>
      <ul class="flex flex-wrap gap-16">
        <w-badge v-for="variant in badgeVariants" :key="variant" as="li" :variant="variant">{{ variant }}</w-badge>
      </ul>
    </div>
    <div>
      <h3 class="t4">Positioning</h3>
      <div class="relative border border-0 rounded overflow-hidden h-96">
        <img class="w-full h-96 rounded-8 object-cover" src="/images/profile1.jpg" />
        <w-badge v-for="position in badgePositions" :key="position" variant="price" :position="position">position: {{ position }}</w-badge>
      </div>
    </div>
  </div>
</template>
