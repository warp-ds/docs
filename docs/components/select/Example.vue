<script setup>
import { wSelect } from '@warp-ds/vue';
import { ref } from 'vue';

const selectModel1 = ref('');
const selectModel2 = ref('');
const selectModel3 = ref('');
const selectModel4 = ref('');
const selectModel5 = ref('');
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Standard with hint and disabled first option</h3>
      <w-select label="A label" hint="A hint" v-model="selectModel1" >
        <option disabled selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Optional</h3>
      <w-select optional v-model="selectModel2" label="A useful and informative label">
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <w-select :disabled="true" v-model="selectModel3" label="Disabled select">
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Invalid</h3>
      <w-select required invalid v-model="selectModel4" label="Invalid select">
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Readonly</h3>
      <w-select read-only v-model="selectModel5" label="Readonly select">
        <option disabled selected value="">You can't pick anything</option>
      </w-select>
    </div>
  </div>
</template>