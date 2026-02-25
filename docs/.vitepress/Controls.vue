<script setup>
defineProps({ x: Boolean, y: Boolean });
</script>

<template>
  <w-box neutral :class="{ 'space-y-24': y, 'space-x-24': x }">
    <slot />
  </w-box>
</template>
