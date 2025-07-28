<script setup>
  import Overview from './overview.md';
  import Usage from './usage.md';
  import Styling from './styling.md';
  import Dev from './code.md';
  import Accessibility from './accessibility.md';
  import data from './data.json';
</script>

# Page indicator - BETA

{{ data.description }}

<tabs-content variant="main">
  <template #Overview>
    <overview />
  </template>
  <template #Usage>
    <usage />
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
