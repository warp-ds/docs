<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Default Range Slider</h3>
      <w-slider label="Production year" min="1950" max="2025">
        <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
      </w-slider>
    </div>
    <div>
      <h3 class="h4">Open-ended Range Slider</h3>
      <w-slider label="Price range" min="0" max="10000" suffix="kr" open-ended>
        <w-slider-thumb slot="from" name="min-price"></w-slider-thumb>
        <w-slider-thumb slot="to" name="max-price"></w-slider-thumb>
      </w-slider>
    </div>
  </div>
</template>
