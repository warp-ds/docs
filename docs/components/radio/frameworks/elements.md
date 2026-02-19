# Radio - Frameworks
Radios allow users to select a single option from a list of choices.

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Usage Notes

The radio component is a custom element that provides a single radio with built-in form validation and styling support. The radio group component adds labeling, help text, and required validation for a set of radios.

- `<w-radio>` - A single radio with required and invalid states
- `<w-radio-group>` - A grouping wrapper that manages labeling, help text, roving keyboard focus, and validation for child radios

The components automatically handle:

- Form integration and constraint validation
- Required state handling with validation messages
- Accessibility attributes, keyboard interaction, and labeling

### Example

<style-isolate>
  <w-radio name="plan" value="basic">Basic plan</w-radio>
</style-isolate>

```html
<w-radio name="plan" value="basic">Basic plan</w-radio>

<script type="module">
  const radio = document.querySelector('w-radio');

  radio.addEventListener('change', (event) => {
    console.log('Checked:', event.target.checked);
  });
</script>
```

### Props

#### Optional Props

| Name     | Type    | Default | Description                                                                 |
| -------- | ------- | ------- | --------------------------------------------------------------------------- |
| checked  | boolean | false   | Draws the radio in a checked state.                                         |
| disabled | boolean | false   | Disables the radio.                                                         |
| invalid  | boolean | false   | Draws the radio in an invalid state.                                        |
| name     | string  | ''      | The name of the radio, submitted as a name/value pair with form data.       |
| required | boolean | false   | Makes the radio a required field.                                           |
| value    | string  | 'on'    | The value of the radio, submitted as a name/value pair with form data.      |

#### Events

| Name    | Description                                  |
| ------- | -------------------------------------------- |
| change  | Fired when the checked state changes.        |
| invalid | Fired when the radio fails validation.       |

#### Methods

| Name             | Parameters | Returns | Description                                                             |
| ---------------- | ---------- | ------- | ----------------------------------------------------------------------- |
| blur             | -          | void    | Removes focus from the radio.                                           |
| checkValidity    | -          | boolean | Checks whether the radio passes constraint validation.                  |
| click            | -          | void    | Simulates a click on the radio.                                         |
| focus            | options?   | void    | Sets focus on the radio.                                                |
| reportValidity   | -          | boolean | Checks validity and shows validation UI behavior if invalid.            |
| resetFormControl | -          | void    | Resets the radio to its initial checked state.                          |

#### Validation Properties

| Name              | Type          | Description                                                                        |
| ----------------- | ------------- | ---------------------------------------------------------------------------------- |
| validationMessage | string        | Returns the validation message if the radio is invalid, otherwise an empty string. |
| validity          | ValidityState | Returns the validity state of the radio.                                           |

### Label (slot)

Provide the radio label as default slot content.

```html example
<w-radio name="contact" value="email">Email</w-radio>
```

### Checked (`checked`)

Sets the radio to a checked state.

Type: `boolean`

Default: `false`

```html example
<w-radio checked name="plan" value="pro">Pro plan</w-radio>
```

### Validation

#### Required (`required`)

When set, the radio must be checked before form submission.

Type: `boolean`

Default: `false`

```html example
<form id="radio-form">
  <w-radio name="terms" required>I agree to the terms</w-radio>
  <w-button type="submit" style="margin-top: 8px;">Submit</w-button>
</form>
<script type="module">
  const form = document.querySelector('#radio-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const radio = form.querySelector('w-radio');
    if (radio.reportValidity()) {
      console.log('Form is valid!');
    }
  });
</script>
```

#### Invalid (`invalid`)

Renders the radio in an invalid state. This is useful for external validation flows.

Type: `boolean`

Default: `false`

```html example
<w-radio invalid>There is a problem</w-radio>
```

### Disabled (`disabled`)

Disables the radio.

Type: `boolean`

Default: `false`

```html example
<w-radio disabled>Cannot change</w-radio>
```

### Programmatic Control

You can programmatically control the radio value:

```html example
<w-radio id="controlled-radio" name="choice" value="one">Controlled radio</w-radio>
<w-button id="check-radio" style="margin-top: 8px;">Check</w-button>
<script type="module">
  const radio = document.querySelector('#controlled-radio');
  const button = document.querySelector('#check-radio');

  button.addEventListener('click', () => {
    radio.checked = true;
  });
</script>
```

### Radio Group

Use `<w-radio-group>` to label and validate a set of radios together.

### Group Example

<style-isolate>
  <w-radio-group label="Notification preference" name="notification" help-text="Select one option">
    <w-radio value="email">Email</w-radio>
    <w-radio value="sms">SMS</w-radio>
    <w-radio value="push">Push</w-radio>
  </w-radio-group>
</style-isolate>

```html
<w-radio-group label="Notification preference" name="notification" help-text="Select one option">
  <w-radio value="email">Email</w-radio>
  <w-radio value="sms">SMS</w-radio>
  <w-radio value="push">Push</w-radio>
</w-radio-group>
```

### Group Props

#### Optional Props

| Name      | Type    | Default | Description                                                                 |
| --------- | ------- | ------- | --------------------------------------------------------------------------- |
| disabled  | boolean | false   | Disables the radio group and all child radios.                              |
| help-text | string  | -       | Help text displayed below the group.                                        |
| invalid   | boolean | false   | Marks the radio group as invalid.                                           |
| label     | string  | -       | The group label displayed above the radios.                                 |
| name      | string  | -       | The name applied to child radios when they do not provide one.              |
| optional  | boolean | false   | Whether to show optional text next to the label.                            |
| required  | boolean | false   | Makes the radio group required.                                             |

#### Events

| Name    | Description                                    |
| ------- | ---------------------------------------------- |
| change  | Fired when the selected child radio changes.   |
| invalid | Fired when the radio group fails validation.   |

#### Methods

| Name           | Parameters | Returns | Description                                                     |
| -------------- | ---------- | ------- | --------------------------------------------------------------- |
| checkValidity  | -          | boolean | Checks whether the group passes constraint validation.          |
| focus          | options?   | void    | Sets focus on the selected radio or first enabled radio.        |
| reportValidity | -          | boolean | Checks validity and shows validation UI behavior if invalid.    |

### Group Label (`label`)

A visual label displayed above the radio group.

Type: `string`

```html example
<w-radio-group label="Preferred contact">
  <w-radio>Email</w-radio>
</w-radio-group>
```

### Optional (`optional`)

Displays "Optional" next to the group label to indicate the field is not required.

Type: `boolean`

Default: `false`

```html example
<w-radio-group label="Preferred contact" optional>
  <w-radio>Email</w-radio>
</w-radio-group>
```

### Help Text (`help-text`)

Provides additional context below the radio group. When the group is required and no option is selected after interaction, the help text is replaced with a required message.

Type: `string`

```html example
<w-radio-group label="Preferred contact" help-text="Choose one">
  <w-radio>Email</w-radio>
  <w-radio>Phone</w-radio>
</w-radio-group>
```

### Group Validation

#### Required (`required`)

When set, one radio in the group must be selected before form submission.

Type: `boolean`

Default: `false`

```html example
<form id="radio-group-form">
  <w-radio-group label="Preferred contact" name="contact" required>
    <w-radio value="email">Email</w-radio>
    <w-radio value="phone">Phone</w-radio>
  </w-radio-group>
  <w-button type="submit" style="margin-top: 8px;">Submit</w-button>
</form>
<script type="module">
  const form = document.querySelector('#radio-group-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const group = form.querySelector('w-radio-group');
    if (group.reportValidity()) {
      console.log('Form is valid!');
    }
  });
</script>
```

#### Invalid (`invalid`)

Marks the group and all child radios as invalid.

Type: `boolean`

Default: `false`

```html example
<w-radio-group label="Preferred contact" invalid help-text="Please select an option">
  <w-radio>Email</w-radio>
  <w-radio>Phone</w-radio>
</w-radio-group>
```

### Form Integration

The radio and radio group components work with native HTML forms.

- Standalone radios with the same `name` behave like native radio groups (only one can be selected).
- Inside `<w-radio-group>`, the group handles validation and applies its `name` to child radios that do not provide one.
- The group itself does not submit a value; checked child radios submit values.

```html example
<form id="group-form">
  <w-radio-group label="Shipping" name="shipping">
    <w-radio value="standard">Standard</w-radio>
    <w-radio value="express">Express</w-radio>
  </w-radio-group>
  <w-button type="submit" style="margin-top: 8px;">Submit</w-button>
</form>
<script type="module">
  const form = document.querySelector('#group-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    console.log('Selected:', data.get('shipping'));
  });
</script>
```

# Styling API

This section documents the supported styling hooks for `<w-radio>`.

Use these hooks to customize appearance without relying on internal structure or selectors.

---

## Parts

The radio exposes a small set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
|---|---|---|
| `control` | radio control (circle) | minor alignment or sizing tweaks |
| `label` | label content | typography tweaks |

Example:

```css
w-radio::part(label) {
  font-weight: 600;
}

w-radio::part(control) {
  margin-top: 1px;
}
```

Parts are intended as an **escape hatch**.
Prefer component tokens for anything state‑ or size‑related.

---

## Component tokens (`--w-c-radio-*`)

Component tokens act as inputs to the radio styling.
They can be set directly on the component or inherited from a parent container.

```css
.settings-panel {
  --w-c-radio-gap: 12px;
}
```

Defaults are defined internally; setting a token is always optional.

---

### Layout & size

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-gap` | space between control and label | `8px` |
| `--w-c-radio-size` | width/height of the control | `2rem` |
| `--w-c-radio-radius` | border radius of the control | `50%` |
| `--w-c-radio-border-width` | border width | `1px` |
| `--w-c-radio-checked-border-width` | border width when checked | `0.6rem` |

---

### Colors

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-bg` | control background | theme default |
| `--w-c-radio-border-color` | control border color | theme default |
| `--w-c-radio-border-color-checked` | border color when checked | theme default |
| `--w-c-radio-label-color` | label text color | `currentColor` |

---

### Invalid state

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-border-color-invalid` | border color when invalid | theme default |

---

### Disabled state

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-bg-disabled` | background when disabled | theme default |
| `--w-c-radio-border-color-disabled` | border when disabled | theme default |
| `--w-c-radio-label-color-disabled` | label color when disabled | theme default |
| `--w-c-radio-cursor-disabled` | cursor when disabled | `not-allowed` |

---

### Typography

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-label-font-size` | label font size | theme default |
| `--w-c-radio-label-line-height` | label line height | theme default |

---

### Focus

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-outline-width` | focus outline width | `2px` |
| `--w-c-radio-outline-color` | focus outline color | theme default |
| `--w-c-radio-outline-offset` | focus outline offset | theme default |

---

### Interaction

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-cursor` | cursor in enabled state | `pointer` |

---

### Motion

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-transition` | transition for control | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |

Transitions are automatically disabled when `prefers-reduced-motion: reduce` is active.

---

## Examples

### Compact radio

```css
.filters w-radio {
  --w-c-radio-gap: 4px;
  --w-c-radio-size: 1.6rem;
}
```

### Emphasized checked state

```css
w-radio {
  --w-c-radio-border-color-checked: var(--w-s-color-border-selected);
  --w-c-radio-checked-border-width: 0.7rem;
}
```

### Contextual invalid color (advanced)

```css
.danger-zone w-radio {
  --w-c-radio-border-color-invalid: red;
}
```

---

## Guidelines

- Prefer **component tokens** for size, spacing, and state styling
- Use **parts** only for small, local tweaks
- Avoid relying on internal class names or selectors
- If multiple tokens are required to achieve a look, consider whether a new variant or design token is more appropriate
