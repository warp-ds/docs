<script setup>
import { toast } from '@warp-ds/elements/toast';

const showSuccess = () => {
  console.log('showing success toast');
  toast('Operation completed successfully', { type: 'success' });
};

const showWarning = () => {
  toast('Please review before continuing', { type: 'warning' });
};

const showError = () => {
  toast('Something went wrong', { type: 'error' });
};
</script>

<template>
  <div class="component">
    <div class="flex gap-10 flex-wrap">
      <w-button variant="utility" @click="showSuccess">Show success toast</w-button>
      <w-button variant="utility" @click="showWarning">Show warning toast</w-button>
      <w-button variant="utility" @click="showError">Show error toast</w-button>
    </div>
  </div>
</template>
