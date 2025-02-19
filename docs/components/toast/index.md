<script setup>
  import Elements from './elements.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
  import android from './android.md';
</script>

# Toast
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<toast-example />

## Usage

<component-design-guidelines name="Warp - Components / Toast" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23910&mode=design" />

### Accessibility

For accessibility reasons, toasts should never contain interactive elements as interactive elements should always occur in the same location as the action that triggered it. Because of this limitation, we consider the use of toasts to be somewhat of an antipattern and recommend that another approach be found wherever possible. The Warp team will be investigating potentially better approaches for specific use cases in near future. That being said, you are free to use toast so long as you avoid using interactive elements such as links or a close button.

<component-questions />

## Frameworks

<tabs-content>
  <template #elements>
    <elements />
  </template>
  <template #iOS>
    <iOS />
  </template>
  <template #android>
    <android />
  </template>
</tabs-content>
