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

### CSS Customization

Customize the checkbox using shadow parts and CSS custom properties.

#### Shadow Parts

| Part      | Description                              |
| --------- | ---------------------------------------- |
| base      | Wrapper label element.                   |
| control   | Visible checkbox control.                |
| input     | Native checkbox input (visually hidden). |
| label     | Slotted label text.                      |

```css example
w-checkbox::part(control) {
  border-radius: 6px;
}

w-checkbox::part(label) {
  font-weight: 600;
}
```

#### CSS Custom Properties

| Name                                  | Description |
| ------------------------------------- | ----------- |
| --w-c-checkbox-label-font-size        | Label font size. |
| --w-c-checkbox-label-line-height      | Label line height. |
| --w-c-checkbox-control-size           | Size of the checkbox control. |
| --w-c-checkbox-gap                    | Space between control and label. |
| --w-c-checkbox-radius                 | Border radius of the control. |
| --w-c-checkbox-border-width           | Border width of the control. |
| --w-c-checkbox-bg                     | Default background color. |
| --w-c-checkbox-border-color           | Default border color. |
| --w-c-checkbox-icon-color             | Icon color for checked/indeterminate states. |
| --w-c-checkbox-bg-checked             | Background color when checked/indeterminate. |
| --w-c-checkbox-border-color-checked   | Border color when checked/indeterminate. |
| --w-c-checkbox-checked-icon           | Background image used for the checked icon. |
| --w-c-checkbox-border-color-invalid   | Border color when invalid. |
| --w-c-checkbox-bg-invalid-checked     | Background color when invalid and checked/indeterminate. |
| --w-c-checkbox-bg-disabled            | Background color when disabled. |
| --w-c-checkbox-border-color-disabled  | Border color when disabled. |
| --w-c-checkbox-bg-disabled-checked    | Background color when disabled and checked/indeterminate. |
| --w-c-checkbox-outline-width          | Focus outline width. |
| --w-c-checkbox-outline-color          | Focus outline color. |
| --w-c-checkbox-outline-offset         | Focus outline offset. |
| --w-c-checkbox-transition             | Transition applied to the control. |

<component-questions />
