<script setup>
import { wTextarea } from '@warp-ds/vue/forms';
import { ref } from 'vue';

const model = ref('');
const readOnlyText = 'This is a readOnly textarea';
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Standard with hint</h3>
      <w-textarea v-model="model" label="A label" hint="A hint" />
    </div>
    <div>
      <h3 class="h4">Optional</h3>
      <w-textarea v-model="model" label="A label" optional />
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <w-textarea label="A label" disabled />
    </div>
    <div>
      <h3 class="h4">Read Only</h3>
      <w-textarea label="A label" v-model="readOnlyText" readOnly />
    </div>
    <div>
      <h3 class="h4">Invalid</h3>
      <w-textarea label="A label" invalid required />
    </div>
  </div>
</template>