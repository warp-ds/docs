# Radio buttons - Vue

Radio buttons let users choose one value from a compact row of button-shaped options.

<ComponentsStatus />

## Vue

<FrameworkTabs />

### Import and example

Use `wToggle` with `radio-button`, a group label and an array of choices.

```vue
<script setup>
import { ref } from 'vue';
import { wToggle } from '@warp-ds/vue';

const rentalPeriod = ref('week');
const periods = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
];
</script>

<template>
  <w-toggle
    id="rental-period"
    radio-button
    v-model="rentalPeriod"
    label="Rental period"
    :toggles="periods"
  />
</template>
```

### Selection

`v-model` holds one option's value, such as `'week'`. Selecting another option replaces that value. Use `ref(null)` when the question must start without an answer.

Give every option a distinct value. If you supply an `id`, make it unique to that group: the component derives its shared input name from the group ID. Option attributes are passed to their individual inputs, so do not override `name` in a way that splits the group.

### Size and width

Use `small` for the compact size. `equal-width` fills the available container width and distributes spare space between the options. Labels still affect their widths, so the options are not necessarily identical in width.

### Props

| Name | Type | Purpose |
| --- | --- | --- |
| `radio-button` | `boolean` | Enables the button-shaped Radio variant. |
| `toggles` | `array` | Required. Objects with a `label` and a `value`; additional attributes are passed to each option. |
| `v-model` | Option value | The selected value. |
| `id` | `string` | Group identifier; generated when omitted. |
| `label` | `string` | Visible group legend. Supply it to name the question. |
| `small` | `boolean` | Uses the compact size when set; otherwise the regular size. |
| `equal-width` | `boolean` | Fills the container when set; otherwise the group fits its content. |
| `disabled` | `boolean` | Disables the native inputs. Individual option attributes can override it. |
| `invalid` | `boolean` | Marks the field invalid and shows its error message. |
| `hint` | `string` | Supporting text associated with the group. |
| `required` | `boolean` or validation function | Adds required validation through `w-field`. |
| `rules` | `array` | Validation functions; defaults to an empty array. |
| `optional` | `boolean` | Adds the localised optional text to the label. |

### Validation

`w-toggle` uses `w-field` validation. Set `required` for a mandatory question and use `rules` for more specific checks. Each rule receives the current value and returns `true` or an object such as `{ valid: false, hint: 'Choose a delivery method' }`.

Validation runs when an option loses focus and can be collected and triggered through `w-form`. The field exposes required and invalid states on its fieldset and connects supporting text and errors to the group. This is field validation, not the browser's native `required` validation on each radio input.

### Accessibility considerations

In Vue 2.3.0, disabled inputs cannot be activated, but the button-shaped labels lack a dedicated disabled visual treatment. Prefer standard [Radio](/components/radio/frameworks/vue.md) when users need to see which options are unavailable. Standard Radio is also the alternative when forced-colours support is required.

Keep the label visible and preserve the native keyboard interaction. See [Accessibility](/components/radio-buttons/accessibility.md) for naming, validation and testing guidance.

<component-questions />
