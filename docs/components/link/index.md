<script setup>
  import Android from './android.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Link
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<link-example />

## Usage

<component-design-guidelines name="Warp - Components / Link" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=11099-1148&t=ZymxezFIu8VQzAW8-0" />

<component-questions />

## Frameworks

<tabs-content>
  <template #android>
    <android />
  </template>
</tabs-content>
