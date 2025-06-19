<script setup>
  import React from './react.md';
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

<component-design-guidelines name="Warp - Components / Page indicator" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/branch/5VhDenFoNQFag7sjurrkVQ/WARP---Components?node-id=24975-5642&t=QMfAx1S5Uvo3jkM3-0" />

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
   <react />
  </template>
  <template #iOS>
    <iOS />
  </template>
</tabs-content>
