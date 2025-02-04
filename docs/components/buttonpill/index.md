<script setup>
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Button pill
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<buttonpill-example />

## Usage

<component-design-guidelines name="Warp - Components / Button pill" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components?node-id=1308-38516&p=f&t=UKCCbkFnaNMpE1p5-0" />

<component-questions />

## Frameworks

<tabs-content>
  <template #iOS>
    <iOS />
  </template>
</tabs-content>
