<script setup>
  import Elements from './elements.md';
  import React from './react.md';
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

From an accessibility perspective, toasts should never contain interactive elements, as these should always appear in the same location as the action that triggered them. Additionally, auto-clearing toasts based on a timeout violate WCAG 2 SC 2.2.1, unless the information they contain is either redundant (i.e. also available elsewhere in a persistent manner) or insignificant to all people. You are also advised to avoid putting information in a toast that cannot be re-accessed in any other way due to the impermanent nature of the current toast implementation.

Because of these limitations, we consider the use of toasts to be somewhat of an anti-pattern, and recommend exploring alternative approaches wherever possible. That said, you may still use toasts, as long as you avoid interactive elements like links or close buttons.

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
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
