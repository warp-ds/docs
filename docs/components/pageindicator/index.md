<script setup>
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Page indicator
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<pageindicator-example />

## Usage

<component-design-guidelines name="Warp - Components / Page indicator" link="https://www.figma.com/design/nkiRpuVu6XRfvY96BA80H8/Component-overview?node-id=367-18940&p=f&t=Sp9OWTDAuwDSHNxB-0" />

<component-questions />

## Frameworks

<tabs-content>
  <template #iOS>
    <iOS />
  </template>
</tabs-content>
