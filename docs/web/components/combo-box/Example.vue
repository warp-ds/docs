<script setup>
import { onMounted, ref } from 'vue';

const comboboxRef = ref(null);
const selectedValue = ref('');

const cities = [
  { value: 'Oslo' },
  { value: 'Bergen' },
  { value: 'Trondheim' },
  { value: 'Stavanger' },
  { value: 'Kristiansand' },
  { value: 'Drammen' },
  { value: 'Tromsø' },
  { value: 'Fredrikstad' },
];

onMounted(() => {
  if (comboboxRef.value) {
    comboboxRef.value.options = cities;
  }
});

const handleSelect = (event) => {
  selectedValue.value = event.detail.value;
};
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="h4">Default</h3>
      <w-combobox
        ref="comboboxRef"
        label="City"
        placeholder="Search for a city..."
        @select="handleSelect"
      ></w-combobox>
      <p v-if="selectedValue" class="mt-8 text-sm">Selected: {{ selectedValue }}</p>
    </div>
  </div>
</template>
