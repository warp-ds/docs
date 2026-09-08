# Radio buttons - React

Radio buttons let users choose one value from a compact row of button-shaped options.

<ComponentsStatus />

## React

<FrameworkTabs />

### Import and example

Use `Toggle` from `@warp-ds/react` with `type="radio-button"`.

```jsx
import { useState } from 'react';
import { Toggle } from '@warp-ds/react';

const periods = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
];

export default function RentalPeriod() {
  const [selected, setSelected] = useState([periods[1]]);

  return (
    <Toggle
      type="radio-button"
      title="Rental period"
      options={periods}
      selected={selected}
      onChange={(entry) => setSelected([entry])}
    />
  );
}
```

### Selection

`selected` is an array because `Toggle` also supports Checkbox. For Radio buttons, keep that array empty or give it exactly one entry. Replace the entry on each change; do not append options or remove the selected option when it is activated again.

Use `useState([])` when the question must start without an answer. For an uncontrolled group, use `defaultSelected` instead of `selected`, and use `onChange` to receive the chosen entry.

### Size and width

Use `small` for the compact size. `equalWidth` fills the available container width and distributes spare space between the options. The labels still affect their widths, so the options are not necessarily identical in width.

### Props

These props apply to a group of button-shaped Radio options. Each option has a `label` (`React.ReactNode`) and a `value` (`unknown`). Give every option a distinct value.

| Name | Type | Purpose |
| --- | --- | --- |
| `type` | `"radio-button"` | Required. Selects the button-shaped Radio variant. |
| `options` | `ToggleEntry[]` | The choices in display order. |
| `title` | `string` | The visible group legend. Supply it to name the question. |
| `selected` | `ToggleEntry[]` | Controlled selection: zero or one entry. |
| `defaultSelected` | `ToggleEntry[]` | Initial uncontrolled selection: zero or one entry. |
| `onChange` | `(entry) => void` | Required. Receives the chosen entry for this group. |
| `small` | `boolean` | Uses the compact size when set; otherwise the regular size. |
| `equalWidth` | `boolean` | Fills the container when set; otherwise the group fits its content. |
| `invalid` | `boolean` | Exposes the invalid state. Pair it with an explanatory `helpText`. |
| `helpText` | `string` | Supporting text or an error message beneath the group. |
| `optional` | `boolean` | Adds the localised optional text to the title. It does not enforce validation. |
| `className` | `string` | Classes on the container around the options. |

### Validation and submission

Validate the selected entry in application state. `Toggle` has no `required` prop and does not expose native or ARIA required semantics. Include “(required)” in the visible title when an answer is mandatory, then use `invalid` and `helpText` to explain a missing answer. When submission fails, focus the relevant group or provide an error summary linking to it.

Submit `selected[0].value` from application state after validation. In React 2.3.0, `Toggle` does not pass `option.value` to the native input: native `FormData` contains `"on"` under the generated input name instead of the chosen option value.

### Accessibility considerations

In React 2.3.0, `disabled` is ignored for `type="radio-button"`. Use standard [Radio](/components/radio/frameworks/react.md) when the flow needs unavailable options. The button-shaped style also lacks a reliable selected cue in forced-colours mode; use standard Radio when that support is required.

Keep the group label visible and preserve the native keyboard interaction. See [Accessibility](/components/radio-buttons/accessibility.md) for naming, validation and testing guidance.

<component-questions />
