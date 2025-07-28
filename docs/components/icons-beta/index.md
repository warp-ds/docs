<script setup>
import Overview from './overview.md';
import Styling from './styling.md';
import Dev from './code.md';
import Accessibility from './accessibility.md';
import data from './data.json';
import { mapFrameworkStatuses } from '../utils.js';
</script>

# Icons - BETA

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