<script setup>
  import { wButton } from '@warp-ds/vue';
  import IconShare16 from '@warp-ds/icons/vue/share-16';
</script>

<template>
  <div class="component flex flex-wrap gap-16">
    <w-button primary>Primary</w-button>
    <w-button primary loading>Loading</w-button>
    <w-button utility>Utility</w-button>
    <w-button>Secondary</w-button>
    <w-button secondary quiet>Secondary Quiet</w-button>
    <w-button negative>Negative</w-button>
    <w-button negative quiet>Negative Quiet</w-button>
    <w-button utility quiet><icon-share-16 /></w-button>
    <w-button link>Link</w-button>
    <w-button full-width primary>Primary full width</w-button>
  </div>
</template>
