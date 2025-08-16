<script setup>
  import Elements from './elements.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

Uses toast apis under the hood.

**N.B.** Broadcast should only be included once per page to avoid duplicate broadcast messages being displayed. The preferred method for including broadcast is to use the [broadcast-podlet](https://github.schibsted.io/finn/broadcast-podlet) provided by the communication team.

## Example

See the [toast component](/components/toast/) for examples, as `broadcast` utilizes it to display messages.

## Usage

<component-design-guidelines name="Warp - Components / Broadcast" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=253-14893&mode=design" />

## Frameworks

<tabs-content>
  <template #elements>
    <elements />
  </template>
  <template #iOS>
    <iOS />
  </template>
</tabs-content>

<component-questions />