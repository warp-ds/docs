<script setup>
import { wAlert } from '@warp-ds/vue';
import { ref } from 'vue';

const showAlert = ref(true);
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Info</h3>
      <w-alert v-model="showAlert" info title="This is the info variant of the alert element" role="status">
        <p>I am an excellent message for the user.</p>
      </w-alert>
    </div>
    <div>
      <h3 class="h4">Positive</h3>
      <w-alert v-model="showAlert" positive title="This is the positive variant of the alert element" role="status">
        <p>With an additional description</p>
      </w-alert>
    </div>
    <div>
      <h3 class="h4">Negative</h3>
      <w-alert v-model="showAlert" negative title="This is the negative variant of the alert element">
        <p>With an additional description</p>
      </w-alert>
    </div>
    <div>
      <h3 class="h4">Warning</h3>
      <w-alert v-model="showAlert" warning title="This is the warning variant of the alert element">
        <p>With an additional description</p>
      </w-alert>
    </div>
  </div>
</template>