<script setup>
import React from './react.md';
import data from './data.json';
import { mapFrameworkStatuses } from '../utils.js';
</script>

# Date picker - BETA

This component is still in a beta phase, and you might encounter bugs when using it.
If you encounter anything, please report it to the WARP team: [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV)

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />


## Example
<ThemeSwitcher />
<datepicker-example />

## Usage

<component-design-guidelines name="Warp - Components / Date Picker" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components?node-id=811-34489&p=f&t=THsJDUzpG6Gtjf2A-0" />

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
</tabs-content>
