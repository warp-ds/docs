<script setup>
  import Android from './android.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<text-example />

## Usage

<component-design-guidelines name="Warp - Components / Text" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=11099-1148&t=ZymxezFIu8VQzAW8-0" />

## Frameworks

<tabs-content>
  <template #android>
    <android />
  </template>
  <template #iOS>
    <iOS />
  </template>
</tabs-content>

<component-questions />