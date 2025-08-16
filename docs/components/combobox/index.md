<script setup>
  import React from './react.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

A combo box is the combination of an `<input type="text"/>` and a list.
The list is designed to help the user arrive at a value, but the value does not necessarily have to come from that list.
Don't think of it like a `<select/>`, but more of an input with some suggestions.
You can, however, validate that the value comes from the list, that's up to your app.

## Example

![Combobox](/components/combobox.png)

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
</tabs-content>

<component-questions />