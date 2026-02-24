<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Default Slider</h3>
      <w-slider label="Volume" min="0" max="100">
        <w-slider-thumb name="volume"></w-slider-thumb>
      </w-slider>
    </div>
    <div>
      <h3 class="h4">Slider with step</h3>
      <w-slider label="Rating" min="0" max="10" step="1">
        <w-slider-thumb name="rating"></w-slider-thumb>
      </w-slider>
    </div>
    <div>
      <h3 class="h4">Slider with suffix</h3>
      <w-slider label="Price" min="0" max="1000" suffix="kr">
        <w-slider-thumb name="price"></w-slider-thumb>
      </w-slider>
    </div>
  </div>
</template>
