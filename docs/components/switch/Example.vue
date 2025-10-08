<script setup>
import { wField, wSwitch } from '@warp-ds/vue';
import { ref } from 'vue';

const toggle = ref(false);
</script>

<template>
  <div class="component">
    <w-field label="Switch it" #default="{ labelFor }">
      <w-switch v-model="toggle" :id="labelFor" />
    </w-field>
  </div>
</template>