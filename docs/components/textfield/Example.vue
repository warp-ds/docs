<script setup>
import { wAffix, wTextfield } from '@warp-ds/vue/forms';
import { ref } from 'vue';

const inputModel = ref('');

const handleClear = () => {
  inputModel.value = '';
};
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Standard with hint</h3>
      <w-textfield v-model="inputModel" label="A label" hint="A hint" />
    </div>
    <div>
      <h3 class="h4">Optional with placeholder</h3>
      <w-textfield v-model="inputModel" label="A label" placeholder="This is a placeholder" optional />
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <w-textfield label="A label" disabled />
    </div>
    <div>
      <h3 class="h4">Read Only</h3>
      <w-textfield label="A label" value="This is a readOnly textfield" readOnly />
    </div>
    <div>
      <h3 class="h4">Invalid</h3>
      <w-textfield label="A label" #suffix invalid required v-model="inputModel">
        <w-affix suffix clear aria-label="Clear text" @click="handleClear" />
      </w-textfield>
    </div>
    <div>
      <h3 class="h4">Suffix + Prefix</h3>
      <w-textfield label="A label" v-model="inputModel">
        <template #prefix><w-affix prefix label="kr" /></template>
        <template #suffix><w-affix suffix clear aria-label="Clear text" @click="handleClear" /></template>
      </w-textfield>
    </div>
    <div>
      <h3 class="h4">Wider Prefix</h3>
      <w-textfield label="Price in kroner" v-model="inputModel" class="[--w-prefix-width:56px]" #prefix placeholder="1 000 000">
        <w-affix prefix label="kroner" />
      </w-textfield>
    </div>
  </div>
</template>