<script setup>
  import Overview from './overview.md';
  import Usage from './usage.md';
  import Dev from './code.md';
  import Accessibility from './accessibility.md';
  import data from './data.json';
</script>

# Toast

{{ data.description }}

<tabs-content variant="main">
  <template #Overview>
    <overview />
  </template>
  <template #Usage>
    <usage />
  </template>
  <template #Code>
    <dev />
  </template>
  <template #Accessibility>
    <accessibility />
  </template>
</tabs-content>

<component-questions />