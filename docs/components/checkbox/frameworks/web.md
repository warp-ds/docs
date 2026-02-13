# Checkbox - Frameworks
Checkboxes allow users to select one or more options from a number of choices.

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Usage Notes

The checkbox component is a custom element that provides a single checkbox with built-in form validation and styling support. The checkbox group component adds labeling, help text, and required validation for a set of checkboxes.

- `<w-checkbox>` - A single checkbox with indeterminate, required, and invalid states
- `<w-checkbox-group>` - A grouping wrapper that manages labeling, help text, and validation for child checkboxes

The components automatically handle:

- Form integration and constraint validation
- Required state handling with validation messages
- Accessibility attributes and labeling

### Example

<style-isolate>
  <w-checkbox name="accept" value="yes">Accept terms</w-checkbox>
</style-isolate>

```html
<w-checkbox name="accept" value="yes">Accept terms</w-checkbox>

<script type="module">
  const checkbox = document.querySelector('w-checkbox');

  checkbox.addEventListener('change', (event) => {
    console.log('Checked:', event.target.checked);
  });
</script>
```

### Props

#### Optional Props

| Name           | Type    | Default | Description                                                                 |
| -------------- | ------- | ------- | --------------------------------------------------------------------------- |
| checked        | boolean | false   | Draws the checkbox in a checked state.                                      |
| disabled       | boolean | false   | Disables the checkbox.                                                      |
| indeterminate  | boolean | false   | Draws the checkbox in an indeterminate state.                               |
| invalid        | boolean | false   | Draws the checkbox in an invalid state.                                     |
| name           | string  | ''      | The name of the checkbox, submitted as a name/value pair with form data.    |
| required       | boolean | false   | Makes the checkbox a required field.                                        |
| value          | string  | 'on'    | The value of the checkbox, submitted as a name/value pair with form data.   |

#### Events

| Name    | Description                                        |
| ------- | -------------------------------------------------- |
| change  | Fired when the checked state changes.              |
| invalid | Fired when the checkbox fails validation.          |

#### Methods

| Name             | Parameters | Returns | Description                                                    |
| ---------------- | ---------- | ------- | -------------------------------------------------------------- |
| blur             | -          | void    | Removes focus from the checkbox.                               |
| checkValidity    | -          | boolean | Checks whether the checkbox passes constraint validation.      |
| click            | -          | void    | Simulates a click on the checkbox.                             |
| focus            | options?   | void    | Sets focus on the checkbox.                                    |
| reportValidity   | -          | boolean | Checks validity and shows the browser's validation message if invalid. |
| resetFormControl | -          | void    | Resets the checkbox to its initial checked state.              |

#### Validation Properties

| Name              | Type          | Description                                                   |
| ----------------- | ------------- | ------------------------------------------------------------- |
| validationMessage | string        | Returns the validation message if the checkbox is invalid, otherwise an empty string. |
| validity          | ValidityState | Returns the validity state of the checkbox.                   |

### Label (slot)

Provide the checkbox label as default slot content.

```html example
<w-checkbox name="newsletter" value="yes">Subscribe to updates</w-checkbox>
```

### Checked (`checked`)

Sets the checkbox to a checked state.

Type: `boolean`

Default: `false`

```html example
<w-checkbox checked>Checked by default</w-checkbox>
```

### Indeterminate (`indeterminate`)

Displays the checkbox in an indeterminate state. Setting `checked` to true clears the indeterminate UI.

Type: `boolean`

Default: `false`

```html example
<w-checkbox indeterminate>Partially selected</w-checkbox>
```

### Validation

#### Required (`required`)

When set, the checkbox must be checked before form submission.

Type: `boolean`

Default: `false`

```html example
<form id="checkbox-form">
  <w-checkbox name="terms" required>I agree to the terms</w-checkbox>
  <w-button type="submit" style="margin-top: 8px;">Submit</w-button>
</form>
<script type="module">
  const form = document.querySelector('#checkbox-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const checkbox = form.querySelector('w-checkbox');
    if (checkbox.reportValidity()) {
      console.log('Form is valid!');
    }
  });
</script>
```

#### Invalid (`invalid`)

Renders the checkbox in an invalid state. This is useful for external validation flows.

Type: `boolean`

Default: `false`

```html example
<w-checkbox invalid>There is a problem</w-checkbox>
```

### Disabled (`disabled`)

Disables the checkbox.

Type: `boolean`

Default: `false`

```html example
<w-checkbox disabled>Cannot change</w-checkbox>
```

### Programmatic Control

You can programmatically control the checkbox value:

```html example
<w-checkbox id="controlled-checkbox">Controlled checkbox</w-checkbox>
<w-button id="toggle-checkbox" style="margin-top: 8px;">Toggle</w-button>
<script type="module">
  const checkbox = document.querySelector('#controlled-checkbox');
  const button = document.querySelector('#toggle-checkbox');

  button.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
  });
</script>
```

### Checkbox Group

Use `<w-checkbox-group>` to label and validate a set of checkboxes together.

### Group Example

<style-isolate>
  <w-checkbox-group label="Notification preferences" name="notifications" help-text="Select all that apply">
    <w-checkbox value="email">Email</w-checkbox>
    <w-checkbox value="sms">SMS</w-checkbox>
    <w-checkbox value="push">Push</w-checkbox>
  </w-checkbox-group>
</style-isolate>

```html
<w-checkbox-group label="Notification preferences" name="notifications" help-text="Select all that apply">
  <w-checkbox value="email">Email</w-checkbox>
  <w-checkbox value="sms">SMS</w-checkbox>
  <w-checkbox value="push">Push</w-checkbox>
</w-checkbox-group>
```

### Group Props

#### Optional Props

| Name      | Type    | Default | Description                                                                 |
| --------- | ------- | ------- | --------------------------------------------------------------------------- |
| help-text | string  | -       | Help text displayed below the group.                                        |
| invalid   | boolean | false   | Marks the checkbox group as invalid.                                        |
| label     | string  | -       | The group label displayed above the checkboxes.                             |
| name      | string  | -       | The name applied to child checkboxes when they do not provide one.          |
| optional  | boolean | false   | Whether to show optional text next to the label.                            |
| required  | boolean | false   | Makes the checkbox group required.                                          |

#### Events

| Name    | Description                                        |
| ------- | -------------------------------------------------- |
| change  | Fired when any child checkbox changes.             |
| invalid | Fired when the checkbox group fails validation.    |

#### Methods

| Name           | Parameters | Returns | Description                                                    |
| -------------- | ---------- | ------- | -------------------------------------------------------------- |
| checkValidity  | -          | boolean | Checks whether the group passes constraint validation.         |
| focus          | options?   | void    | Sets focus on the checkbox group.                              |
| reportValidity | -          | boolean | Checks validity and shows the browser's validation message if invalid. |

### Group Label (`label`)

A visual label displayed above the checkbox group.

Type: `string`

```html example
<w-checkbox-group label="Contact methods">
  <w-checkbox>Email</w-checkbox>
</w-checkbox-group>
```

### Optional (`optional`)

Displays "Optional" next to the group label to indicate the field is not required.

Type: `boolean`

Default: `false`

```html example
<w-checkbox-group label="Contact methods" optional>
  <w-checkbox>Email</w-checkbox>
</w-checkbox-group>
```

### Help Text (`help-text`)

Provides additional context below the checkbox group. When the group is required and has no selections, the help text is replaced with a required message.

Type: `string`

```html example
<w-checkbox-group label="Contact methods" help-text="Select at least one">
  <w-checkbox>Email</w-checkbox>
  <w-checkbox>Phone</w-checkbox>
</w-checkbox-group>
```

### Group Validation

#### Required (`required`)

When set, at least one checkbox in the group must be checked before form submission.

Type: `boolean`

Default: `false`

```html example
<form id="checkbox-group-form">
  <w-checkbox-group label="Contact methods" name="contact" required>
    <w-checkbox value="email">Email</w-checkbox>
    <w-checkbox value="phone">Phone</w-checkbox>
  </w-checkbox-group>
  <w-button type="submit" style="margin-top: 8px;">Submit</w-button>
</form>
<script type="module">
  const form = document.querySelector('#checkbox-group-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const group = form.querySelector('w-checkbox-group');
    if (group.reportValidity()) {
      console.log('Form is valid!');
    }
  });
</script>
```

#### Invalid (`invalid`)

Marks the group and all child checkboxes as invalid.

Type: `boolean`

Default: `false`

```html example
<w-checkbox-group label="Contact methods" invalid help-text="Choose at least one option">
  <w-checkbox>Email</w-checkbox>
  <w-checkbox>Phone</w-checkbox>
</w-checkbox-group>
```

### Form Integration

The checkbox and checkbox group components work with native HTML forms. The group will apply its `name` to any child checkboxes that do not provide one. For form submission, be sure to set `name` on the group or on each checkbox if a group is not being used.

```html example
<form id="group-form">
  <w-checkbox-group label="Preferences" name="preferences">
    <w-checkbox value="news">News</w-checkbox>
    <w-checkbox value="updates">Product updates</w-checkbox>
  </w-checkbox-group>
  <w-button type="submit" style="margin-top: 8px;">Submit</w-button>
</form>
<script type="module">
  const form = document.querySelector('#group-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    console.log('Selected:', data.getAll('preferences'));
  });
</script>
```

# Styling API

This section documents the supported styling hooks for `<w-checkbox>`.

Use these hooks can be used to customize appearance without relying on internal structure or selectors.

---

## Parts

The checkbox exposes a small set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
|---|---|---|
| `base` | wrapper element | layout adjustments (spacing, alignment) |
| `control` | checkbox control (box) | minor alignment or sizing tweaks |
| `input` | native `<input type="checkbox">` | focus / outline adjustments |
| `label` | label content | typography tweaks |

Example:

```css
w-checkbox::part(label) {
  font-weight: 600;
}

w-checkbox::part(control) {
  margin-top: 1px;
}
```

Parts are intended as an **escape hatch**.  
Prefer component tokens for anything state‑ or size‑related.

---

## Component tokens (`--w-c-checkbox-*`)

Component tokens act as inputs to the checkbox styling.  
They can be set directly on the component or inherited from a parent container.

```css
.settings-panel {
  --w-c-checkbox-gap: 12px;
}
```

Defaults are defined internally; setting a token is always optional.

---

### Layout & size

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-gap` | space between control and label | `8px` |
| `--w-c-checkbox-control-size` | width/height of the control | `2rem` |
| `--w-c-checkbox-radius` | border radius of the control | `4px` |
| `--w-c-checkbox-border-width` | border width | `1px` |

---

### Colors

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-bg` | control background | theme default |
| `--w-c-checkbox-border-color` | control border color | theme default |
| `--w-c-checkbox-bg-checked` | background when checked | theme default |
| `--w-c-checkbox-border-color-checked` | border when checked | theme default |
| `--w-c-checkbox-icon-color` | icon color | theme default |

---

### Invalid state

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-border-color-invalid` | border color when invalid | theme default |
| `--w-c-checkbox-bg-invalid-checked` | background when invalid and checked | theme default |

---

### Disabled state

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-bg-disabled` | background when disabled | theme default |
| `--w-c-checkbox-border-color-disabled` | border when disabled | theme default |
| `--w-c-checkbox-bg-disabled-checked` | background when disabled and checked | theme default |

---

### Focus

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-outline-width` | focus outline width | `2px` |
| `--w-c-checkbox-outline-color` | focus outline color | theme default |
| `--w-c-checkbox-outline-offset` | focus outline offset | theme default |

---

### Motion

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-transition` | transition for control | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |

Transitions are automatically disabled when `prefers-reduced-motion: reduce` is active.

---

## Examples

### Compact checkbox

```css
.filters w-checkbox {
  --w-c-checkbox-gap: 4px;
  --w-c-checkbox-control-size: 1.6rem;
}
```

### Rounded checkbox

```css
w-checkbox {
  --w-c-checkbox-radius: 9999px;
}
```

### Contextual color override (advanced)

```css
.danger-zone w-checkbox {
  --w-c-checkbox-border-color-checked: red;
}
```

---

## Guidelines

- Prefer **component tokens** for size, spacing, and state styling
- Use **parts** only for small, local tweaks
- Avoid relying on internal class names or selectors
- If multiple tokens are required to achieve a look, consider whether a new variant or design token is more appropriate
