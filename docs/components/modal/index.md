<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Elements from './elements.md';
  import Android from './android.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<modal-example />

## Overview
A modal overlays the page and prevents interaction with the underlying UI until the user completes an action (for example, confirm, cancel, or provide required input). This interruption is useful for time-sensitive or high-impact decisions, but it can be disruptive if overused. When a modal is necessary, keep content concise, make the primary action clear, offer a safe dismiss option, and avoid stacking multiple modals.

## Usage
<component-design-guidelines name="Warp - Components / Modal" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=354-18223&mode=design" />

### Accessibility
Modal needs either aria-label or aria-labelledby to be accessible to screen readers.

All dialogs must have a title. Titles appear in bold at the top of the dialog and use a few words to convey the outcome of what will happen if a user continues with an action. Use the property title for this.

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #elements>
    <elements />
  </template>
    <template #android>
    <android />
  </template>
    <template #iOS>
    <iOS />
  </template>
</tabs-content>