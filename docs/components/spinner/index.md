<script setup>
  import iOS from './ios.md';
  import Android from './android.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.description }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

::: warning Native only
For the web implementation of a "spinner", see [CSS - Animation - Spinner](../../foundations/css-classes/animation#spinner).
:::

## Example
<ThemeSwitcher />
<spinner-example />

## Usage

<component-design-guidelines name="Warp - Components / Spinner" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=900-35603&t=jDaOykQhPf30zVST-0" />

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