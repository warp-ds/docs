<script setup>
  import data from './data.json';
  import Android from './android.md';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Range Slider

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Examples
<ThemeSwitcher />
<rangeslider-example />

## Usage


<component-design-guidelines name="Warp - Components / Range Slider" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23902&mode=design" />


<component-questions />

## Frameworks

<tabs-content>
  <template #android>
    <android />
  </template>
</tabs-content>
