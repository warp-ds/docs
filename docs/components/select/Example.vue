<script setup>
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Standard with hint and disabled first option</h3>
      <w-select label="A label" hint="A hint" always>
        <option disabled selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Optional</h3>
      <w-select optional label="A useful and informative label">
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <w-select disabled label="Disabled select">
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Invalid</h3>
      <w-select invalid label="Invalid select" always>
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Readonly</h3>
      <w-select read-only label="Readonly select">
        <option disabled selected value="">You can't pick anything</option>
      </w-select>
    </div>
  </div>
</template>
