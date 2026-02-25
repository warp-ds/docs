<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Default Date Picker</h3>
      <w-datepicker label="Select date"></w-datepicker>
    </div>
    <div>
      <h3 class="h4">With pre-selected date</h3>
      <w-datepicker label="Birthday" value="2000-01-15"></w-datepicker>
    </div>
    <div>
      <h3 class="h4">Norwegian locale</h3>
      <w-datepicker label="Velg dato" lang="nb"></w-datepicker>
    </div>
  </div>
</template>
