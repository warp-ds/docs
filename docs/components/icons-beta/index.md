<script setup>
import Overview from './overview.md';
import Styling from './styling.md';
import Dev from './code.md';
import Accessibility from './accessibility.md';
import React from './react.md';
import data from './data.json';
import { mapFrameworkStatuses } from '../utils.js';
</script>

# Icons - BETA

::: tip 📣 Note
This component is still in a beta phase, and you might encounter bugs when using it.
If you encounter anything, please report it to the WARP team: [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV)
:::

{{ data.description }}

<tabs-content variant="main">
  <template #Overview>
    <overview />
  </template>
  <template #Styling>
    <styling />
  </template>
  <template #Code>
    <dev />
  </template>
  <template #Accessibility>
    <accessibility />
  </template>
</tabs-content>

<component-questions />