# Checkbox

Checkboxes allow users to select one or more options from a number of choices.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/checkbox/overview), [Usage](https://warp-ds.github.io/docs/components/checkbox/usage), [React](https://warp-ds.github.io/docs/components/checkbox/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/checkbox/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/checkbox/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/checkbox/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/checkbox/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

Checkboxes allow users to select one or more options from a number of choices.

## Inline Demo Markup

```html
<div>
        <h3 class="t4">Single Checkbox</h3>
        <w-checkbox name="single" value="yes">Accept terms</w-checkbox>
    </div>
    <div>
        <h3 class="t4">Checkbox Group</h3>
        <w-checkbox-group label="Notification preferences" name="notifications" help-text="Select all that apply">
            <w-checkbox value="email">Email</w-checkbox>
            <w-checkbox value="sms">SMS</w-checkbox>
            <w-checkbox value="push">Push notifications</w-checkbox>
        </w-checkbox-group>
    </div>
    <div>
        <h3 class="t4">Checked by default</h3>
        <w-checkbox checked>Already checked</w-checkbox>
    </div>
    <div>
        <h3 class="t4">Disabled</h3>
        <w-checkbox disabled>Cannot change</w-checkbox>
    </div>
    <div>
        <h3 class="t4">Invalid</h3>
        <w-checkbox invalid>There is a problem</w-checkbox>
    </div>
    <div>
        <h3 class="t4">Indeterminate</h3>
        <w-checkbox indeterminate>Partially selected</w-checkbox>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

Checkboxes allow users to select one or more options from a number of choices.

The toggle component allows you to render checkboxes. All you have to do is specify `type="checkbox"` for the Toggle and let the component handle the rest. Toggle is built to handle both single and multiple options.

You must keep track of state yourself. The state has to be handled differently depending on whether you want to use single or multiple options. See examples below.

You can import the component like so:

```js
import { Toggle } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Toggle } from '@warp-ds/react/components/toggle'
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | "radio" \|"checkbox" \|"radio-button" |  | The type of Toggle |
| title | string |  | The option(s) title |
| invalid | boolean |  | Renders the field in an invalid state. Often paired together with helpText to provide feedback about the error. |
| helpText | string |  | Help text beneath options |
| options | ToggleEntry[] |  | An array of options to render |
| selected | ToggleEntry[] |  | An array of options to be selected / checked (controlled) |
| defaultSelected | ToggleEntry[] |  | An array of options to be selected / checked on mount (uncontrolled) |
| label | string |  | If you only need to render a single option, use this prop instead |
| noVisibleLabel | boolean |  | Whether label should be invisible |
| checked | boolean |  | Whether the single option should be checked (controlled) |
| defaultChecked | boolean |  | Whether the single option should be checked on mount (uncontrolled) |
| indeterminate | boolean |  | Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked. |
| optional | boolean |  | Whether the toggle is optional Appends (optional) to the end of the title for indication |
| className | string |  | Custom classes applied to the wrapping container |
| equalWidth | boolean |  | Will make each option equal width, only applied when "radio-button" type is set |
| small | boolean |  | Whether the elements should be small, only applied when "radio-button" type is set |

```ts
type ToggleEntry = {
  label: string;
  value: unknown;
};
```

When you only want a single option, please use the `label` property over passing a single option to the `options` property. This results in the `onChange` callback function returning a single boolean value indicating the current state of the toggle.

```jsx
function Example() {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <p className="h4">{checked.toString()}</p>
      <Toggle
        type="checkbox"
        label="Apple"
        defaultChecked={checked}
        onChange={(checked) => setChecked(checked)}
      />
    </>
  );
}
```

**Note** the `defaultChecked` property, which is only used to set the default value on component mount (uncontrolled). **It does not** actively pass down the state of the checkbox. Feel free to omit this property if you are not setting the default value of the checkbox or use the `checked` property (controlled) to actively pass down state.

**Note** the `onChange` property returning a boolean value. This is because we're working with a single option. When using the `options` property, as seen in examples below, the option which has been selected is returned on the callback and we must handle this state ourselves.

Let's have a look at using the Toggle with multiple options. As mentioned above, using the `options` property will change the returning value of the `onChange` callback. It will now return the option which was selected.

```jsx
function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Microsoft', value: 'microsoft' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <>
      <p className="h4">{JSON.stringify(selected)}</p>
      <Toggle
        type="checkbox"
        title="Companies"
        defaultSelected={selected}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Microsoft', value: 'microsoft' },
        ]}
        onChange={handleSelect}
      />
    </>
  );
}
```

**Note** the `defaultSelected` property (uncontrolled). Similar to the single option checked property, this will render the passed options as `checked` by default when the component mounts. If you wish to actively pass the state down use the `selected` property instead (controlled).

**Note** the `title` property. This gives you the option to label the options, but is not required.

You can hide the label by passing a `noVisibleLabel` prop to Toggle component.

```jsx
function Example() {
  const [checked, setChecked] = React.useState('No');
  const answer = checked ? 'Yes' : 'No';

  return (
    <>
      <p className="h4">Is checkbox selected? {answer}</p>
      <Toggle
        type="checkbox"
        label={answer}
        defaultChecked={checked}
        onChange={(checked) => setChecked(checked)}
        noVisibleLabel
      />
    </>
  );
}
```

Sometimes we need to indicate that the state of a single checkbox is indeterminate, or "partially checked". The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.

```jsx
function Example() {
  const [selectAllChecked, setSelectAllChecked] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState([
    { label: 'Apple pie', value: 'apple pie' },
    { label: 'Pavlova', value: 'pavlova' },
  ]);

  const options = [
    { label: 'Apple pie', value: 'apple pie' },
    { label: 'Carrot cake', value: 'carrot cake' },
    { label: 'Pavlova', value: 'pavlova' },
  ];

  const handleSelectAll = (checked) => {
    if (checked === false) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
    setSelectAllChecked(checked);
  };

  const handleSelect = (selected) => {
    let updatedSelected = selectedOptions;

    if (selectedOptions.some((option) => option.value === selected.value)) {
      updatedSelected = selectedOptions.filter(
        (option) => option.value !== selected.value,
      );
    } else {
      updatedSelected = [...selectedOptions, selected];
    }

    if (selectedOptions.length === options.length) setSelectAllChecked(false);
    if (updatedSelected.length === options.length) setSelectAllChecked(true);

    setSelectedOptions(updatedSelected);
  };

  return (
    <>
      <Toggle
        onChange={handleSelectAll}
        checked={selectAllChecked}
        type="checkbox"
        label="Select all desserts"
        indeterminate={
          selectedOptions.length > 0 &&
          selectedOptions.length !== options.length
        }
      />
      <Toggle
        title="Favourite desserts"
        type="checkbox"
        selected={selectedOptions}
        options={options}
        onChange={handleSelect}
      />
    </>
  );
}
```

Validation is as easy as passing the property `invalid` with a `helpText` to further explain the error. `helpText` can also be used as an assistance label before an error occurs as long as `invalid` is set to false.

```jsx
function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText="Blue surely isn't amongst your favorites?"
      invalid
      selected={selected}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
```

In the next example, we'll take a closer look at one way to conditionally render error and help messages. You should probably take this a step further and implement your own error handler, but for the sake of the demo we've kept it quite simple.

```jsx
function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText={
        selected.some((e) => e.value === 'blue')
          ? "Blue surely isn't amongst your favorites?"
          : 'Choose your favorite colors'
      }
      invalid={!!selected.some((e) => e.value === 'blue')}
      selected={selected}
      onChange={handleSelect}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
```

### Vue

Checkboxes allow users to select one or more options from a number of choices.

> Use in entire app

```js
import { Forms } from '@warp-ds/vue'
app.use(Forms)
```

> Use in one component and special imports

You can import the component like so:

```js
import { wToggle } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wToggle } from '@warp-ds/vue/toggle';
```

```vue
<w-toggle checkbox v-model="model" label="A label" :toggles="[
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 }
]" />
```

The props documented below have defaults set or are unique to this component, all typical HTML5 attributes are valid props. See Field for additional props.

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| radio | boolean |  |  |
| checkbox | boolean |  |  |
| radio-button | boolean |  |  |
| toggles | array |  | An array of objects. Each object must at least have a value and label attribute. Any other attributes will be transferred directly to the individual toggle |
| invalid | boolean |  | Whether elements should be styled as invalid |
| disabled | boolean |  | Whether elements should be styled as disabled |
| indeterminate | boolean |  | Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked. |
| equal-width | boolean |  | Will make each option equal width, only applied when radio-button is set |
| small | boolean |  | Whether the elements should be small, only applied when radio-button is set |

#### Validating Elements 

Every form element accepts a prop rules which takes an array of functions. These functions will be run in order until one returns an object. If all functions return true the field is considered valid.

```js
[v => v.trim().length > 5 || { valid: false, hint: 'This should be longer' }]
```

The function has one argument, the current value of the form element — and can either return true or an object with attributes described below

| attribute | type | notes |
| --- | --- | --- |
| valid | boolean |  |
| hint | string |  |
| always | boolean |  |

#### Collecting Validation from wForm 

The wForm component registers element descendants at any level, and provides the aggregate validation status.

| prop | type | default | notes |
| --- | --- | --- | --- |
| v-model | boolean |  | True when all descendants are valid |
| v-model:completed | boolean |  | True when all descendants are completed - passing their required rule |
| should-validate | boolean |  | Can be used to instruct all descendants to immediately validate. Note that this will not update if the should-validate logic is updated elsewhere. |
| as | string | form | The DOM element to emit for the wrapper |

#### Programmatic validation 

The wField component can provide access to programmatic validation beyond what wForm's props can. For information on which methods are available, see the documentation on Field.

```html
<w-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</w-field>
```

#### Validation and required Form Elements 

If the form element is marked `required`, a special rule will be inserted before any user-defined rules. The `required` prop can accept a function that will be used as the required-rule.

### Elements

Checkboxes allow users to select one or more options from a number of choices.

The checkbox component is a custom element that provides a single checkbox with built-in form validation and styling support. The checkbox group component adds labeling, help text, and required validation for a set of checkboxes.

-   `<w-checkbox>` - A single checkbox with indeterminate, required, and invalid states
-   `<w-checkbox-group>` - A grouping wrapper that manages labeling, help text, and validation for child checkboxes

The components automatically handle:

-   Form integration and constraint validation
-   Required state handling with validation messages
-   Accessibility attributes and labeling

```html
<w-checkbox name="accept" value="yes">Accept terms</w-checkbox>

<script type="module">
  const checkbox = document.querySelector('w-checkbox');

  checkbox.addEventListener('change', (event) => {
    console.log('Checked:', event.target.checked);
  });
</script>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| checked | boolean | false | Draws the checkbox in a checked state. |
| disabled | boolean | false | Disables the checkbox. |
| indeterminate | boolean | false | Draws the checkbox in an indeterminate state. |
| invalid | boolean | false | Draws the checkbox in an invalid state. |
| name | string | '' | The name of the checkbox, submitted as a name/value pair with form data. |
| required | boolean | false | Makes the checkbox a required field. |
| value | string | 'on' | The value of the checkbox, submitted as a name/value pair with form data. |

#### Events 

| Name | Description |
| --- | --- |
| change | Fired when the checked state changes. |
| invalid | Fired when the checkbox fails validation. |

#### Methods 

| Name | Parameters | Returns | Description |
| --- | --- | --- | --- |
| blur | - | void | Removes focus from the checkbox. |
| checkValidity | - | boolean | Checks whether the checkbox passes constraint validation. |
| click | - | void | Simulates a click on the checkbox. |
| focus | options? | void | Sets focus on the checkbox. |
| reportValidity | - | boolean | Checks validity and shows the browser's validation message if invalid. |
| resetFormControl | - | void | Resets the checkbox to its initial checked state. |

#### Validation Properties 

| Name | Type | Description |
| --- | --- | --- |
| validationMessage | string | Returns the validation message if the checkbox is invalid, otherwise an empty string. |
| validity | ValidityState | Returns the validity state of the checkbox. |

Provide the checkbox label as default slot content.

```html
<w-checkbox name="newsletter" value="yes">Subscribe to updates</w-checkbox>
```

Sets the checkbox to a checked state.

Type: `boolean`

Default: `false`

```html
<w-checkbox checked>Checked by default</w-checkbox>
```

Displays the checkbox in an indeterminate state. Setting `checked` to true clears the indeterminate UI.

Type: `boolean`

Default: `false`

```html
<w-checkbox indeterminate>Partially selected</w-checkbox>
```

#### Required (`required`) 

When set, the checkbox must be checked before form submission.

Type: `boolean`

Default: `false`

```html
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

```html
<w-checkbox invalid>There is a problem</w-checkbox>
```

Disables the checkbox.

Type: `boolean`

Default: `false`

```html
<w-checkbox disabled>Cannot change</w-checkbox>
```

You can programmatically control the checkbox value:

```html
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

Use `<w-checkbox-group>` to label and validate a set of checkboxes together.

```html
<w-checkbox-group label="Notification preferences" name="notifications" help-text="Select all that apply">
  <w-checkbox value="email">Email</w-checkbox>
  <w-checkbox value="sms">SMS</w-checkbox>
  <w-checkbox value="push">Push</w-checkbox>
</w-checkbox-group>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| help-text | string | - | Help text displayed below the group. |
| invalid | boolean | false | Marks the checkbox group as invalid. |
| label | string | - | The group label displayed above the checkboxes. |
| name | string | - | The name applied to child checkboxes when they do not provide one. |
| optional | boolean | false | Whether to show optional text next to the label. |
| required | boolean | false | Makes the checkbox group required. |

#### Events 

| Name | Description |
| --- | --- |
| change | Fired when any child checkbox changes. |
| invalid | Fired when the checkbox group fails validation. |

#### Methods 

| Name | Parameters | Returns | Description |
| --- | --- | --- | --- |
| checkValidity | - | boolean | Checks whether the group passes constraint validation. |
| focus | options? | void | Sets focus on the checkbox group. |
| reportValidity | - | boolean | Checks validity and shows the browser's validation message if invalid. |

A visual label displayed above the checkbox group.

Type: `string`

```html
<w-checkbox-group label="Contact methods">
  <w-checkbox>Email</w-checkbox>
</w-checkbox-group>
```

Displays "Optional" next to the group label to indicate the field is not required.

Type: `boolean`

Default: `false`

```html
<w-checkbox-group label="Contact methods" optional>
  <w-checkbox>Email</w-checkbox>
</w-checkbox-group>
```

Provides additional context below the checkbox group. When the group is required and has no selections, the help text is replaced with a required message.

Type: `string`

```html
<w-checkbox-group label="Contact methods" help-text="Select at least one">
  <w-checkbox>Email</w-checkbox>
  <w-checkbox>Phone</w-checkbox>
</w-checkbox-group>
```

#### Required (`required`) 

When set, at least one checkbox in the group must be checked before form submission.

Type: `boolean`

Default: `false`

```html
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

```html
<w-checkbox-group label="Contact methods" invalid help-text="Choose at least one option">
  <w-checkbox>Email</w-checkbox>
  <w-checkbox>Phone</w-checkbox>
</w-checkbox-group>
```

The checkbox and checkbox group components work with native HTML forms. The group will apply its `name` to any child checkboxes that do not provide one. For form submission, be sure to set `name` on the group or on each checkbox if a group is not being used.

```html
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

* * *

The checkbox exposes a small set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
| --- | --- | --- |
| base | wrapper element | layout adjustments (spacing, alignment) |
| control | checkbox control (box) | minor alignment or sizing tweaks |
| input | native <input type="checkbox"> | focus / outline adjustments |
| label | label content | typography tweaks |

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

* * *

Component tokens act as inputs to the checkbox styling.  
They can be set directly on the component or inherited from a parent container.

```css
.settings-panel {
  --w-c-checkbox-gap: 12px;
}
```

Defaults are defined internally; setting a token is always optional.

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-checkbox-gap | space between control and label | 8px |
| --w-c-checkbox-control-size | width/height of the control | 2rem |
| --w-c-checkbox-radius | border radius of the control | 4px |
| --w-c-checkbox-border-width | border width | 1px |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-checkbox-bg | control background | theme default |
| --w-c-checkbox-border-color | control border color | theme default |
| --w-c-checkbox-bg-checked | background when checked | theme default |
| --w-c-checkbox-border-color-checked | border when checked | theme default |
| --w-c-checkbox-icon-color | icon color | theme default |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-checkbox-border-color-invalid | border color when invalid | theme default |
| --w-c-checkbox-bg-invalid-checked | background when invalid and checked | theme default |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-checkbox-bg-disabled | background when disabled | theme default |
| --w-c-checkbox-border-color-disabled | border when disabled | theme default |
| --w-c-checkbox-bg-disabled-checked | background when disabled and checked | theme default |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-checkbox-outline-width | focus outline width | 2px |
| --w-c-checkbox-outline-color | focus outline color | theme default |
| --w-c-checkbox-outline-offset | focus outline offset | theme default |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-checkbox-transition | transition for control | 150ms cubic-bezier(0.4, 0, 0.2, 1) |

Transitions are automatically disabled when `prefers-reduced-motion: reduce` is active.

* * *

```css
.filters w-checkbox {
  --w-c-checkbox-gap: 4px;
  --w-c-checkbox-control-size: 1.6rem;
}
```

```css
w-checkbox {
  --w-c-checkbox-radius: 9999px;
}
```

```css
.danger-zone w-checkbox {
  --w-c-checkbox-border-color-checked: red;
}
```

* * *

-   Prefer **component tokens** for size, spacing, and state styling
-   Use **parts** only for small, local tweaks
-   Avoid relying on internal class names or selectors
-   If multiple tokens are required to achieve a look, consider whether a new variant or design token is more appropriate

## Inline Demo Markup

```html
<w-checkbox name="accept" value="yes">Accept terms</w-checkbox>
```

```html
<w-checkbox-group label="Notification preferences" name="notifications" help-text="Select all that apply">
    <w-checkbox value="email">Email</w-checkbox>
    <w-checkbox value="sms">SMS</w-checkbox>
    <w-checkbox value="push">Push</w-checkbox>
  </w-checkbox-group>
```

### Android

Checkboxes allow users to select one or more options from a number of choices.

```kotlin
fun WarpCheckbox(
    modifier: Modifier = Modifier,
    label: String,
    extraText: String? = null,
    slot: @Composable (() -> Unit)? = null,
    onCheckedChange: ((Boolean) -> Unit) = {},
    style: WarpCheckboxStyle = WarpCheckboxStyle.Default,
    enabled: Boolean = true,
    checked: Boolean = false,
    isError: Boolean = false
)

fun WarpCheckboxGroup(
    modifier: Modifier = Modifier,
    orientation: Orientation = Orientation.Vertical,
    title: String? = null,
    options: List<String>,
    selectedOptions: List<String>? = null,
    helpText: String? = null,
    enabled: Boolean = true,
    isError: Boolean = false,
    onOptionsSelected: (MutableList<String>) -> Unit
)
```

Currently we support a standalone checkbox and a group. There is support for optional title and help text when using the checkbox group. Supported orientations are Orientation.Vertical and Orientation.Horizontal. Vertical is the default.

```kotlin
WarpCheckbox(
    text = "Check this!",
    onCheckedChange = { }
    )

val checkboxOptions = listOf("Option 1", "Option 2", "Option 3", "Option 4", "Option 5")
val preSelectedOptions = listOf("Option 1", "Option 3")
val onOptionsSelected = remember { mutableListOf(checkboxOptions) }

WarpCheckboxGroup(
    title = "Vertical",
    helpText = "Help text",
    orientation = Orientation.Vertical,
    options = checkboxOptions,
    selectedOptions = preSelectedOptions,
    onOptionsSelected = { onOptionsSelected },
    isError = false
)
```

The default style for the checkbox is WarpCheckboxStyle.Neutral and will be used if nothing is passed in the style param. There are three types of checkbox styles:

```kotlin
WarpCheckboxStyle {
    Neutral,
    Disabled,
    Negative,
}
```

Label is mandatory, but an extraText can be displayed as well if provided. The text style will be body and the color will be text.subtle by default.

```kotlin
WarpCheckbox(
    text = "Check this!",
    extraText = "(Optional)",
    onCheckedChange = { }
    )
```

To display a disabled checkbox - either set the style to WarpCheckboxStyle.Disabled or set enabled to false. Same approach for error state.

```kotlin
WarpCheckbox(
    text = "Check this!",
    style = WarpCheckboxStyle.Disabled,
    onCheckedChange = { }
    )

WarpCheckbox(
    text = "Check this!",
    onCheckedChange = { },
    enabled = false,
    )

WarpCheckbox(
    text = "Error",
    onCheckedChange = { },
    isError = true,
    )
```

It is possible to pass a custom Composable using the slot param. An icon next to the label can simply be displayed as follows:

```kotlin
WarpCheckbox(
    text = "Check this!",
    extraText = "(Optional)",
    onCheckedChange = { },
    slot = {
            Icon(
            imageVector = Icons.Filled.AccountCircle,
            contentDescription = "Content description for the leading icon",
            tint = colors.icon.default
            )
        }
    )
```

To support layouts still written in xml the WarpCheckbox can be used as a custom view. To add functionality, set onCheckChanged listener. Slot composable can be added only programmatically. Horizontal or vertical group is not supported.

```kotlin
var slot: @Composable (() -> Unit)? = null

fun setOnCheckedChangeListener(onCheckedChangeListener: ((Boolean) -> Unit))
```

```xml
<com.schibsted.nmp.warp.components.legacy.WarpCheckboxView
    android:id="@+id/warp_checkbox_disabled_selected"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_margin="@dimen/space2"
    app:checkboxEnabled="true"
    app:checkboxLabel="Selected checkbox"
    app:checkboxExtraText="Extra text"
    app:checked="true"
    app:checkboxIsError="false"
    app:checkboxEnabled="true"
    app:warpCheckboxStyle="neutral" />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed next to the checkbox |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the checkbox |
| onCheckedChange | (Boolean) -> Unit |  | Lambda to be invoked when checked or unchecked |
| style | WarpCheckboxStyle.Neutral WarpCheckboxStyle.Disabled WarpCheckboxStyle.Neutral | WarpCheckboxStyle.Neutral | Sets the appearance of the checkbox |
| enabled | boolean | true | Whether the checkbox is enabled or not |
| checked | boolean | false | Whether the checkbox is checked or not |

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | List |  | The list of texts to be displayed next to the checkboxes |
| onOptionsSelected | (MutableList) -> Unit |  | The lambda to be invoked when clicked on a checkbox. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the checkbox group |
| orientation | Orientation.Vertical Orientation.Horizontal | Orientation.Vertical | Sets the orientation for the checkbox group. Class is found in the androidx.compose.foundation.gestures package |
| title | String | null | The title to be displayed on top of the checkbox group |
| selectedOptions | List | null | The selected options in the checkbox group |
| helpText | String | null | The text displayed below the checkbox group |
| enabled | boolean | true | Whether the checkbox group is enabled or not |
| isError | boolean | false | Shows the checkbox group in error state if true |

### iOS

Checkboxes allow users to select one or more options from a number of choices.

`Checkbox` buttons allow users to select multiple options from a set. `CheckboxGroup` is a customizable component that allows users to create a list of checkboxes where multiple can be selected at any given time.

```swift
Warp.Checkbox(
    isSelected: Binding<Bool>,
    label: String,
    style: CheckboxStyle = .default,
    extraContent: AnyView? = nil,
    action: @escaping () -> Void
)

Warp.CheckboxGroup(
    title: String? = nil,
    helpText: String? = nil,
    options: Binding<[Option]>,
    style: CheckboxStyle = .default,
    axis: Axis.Set = .vertical,
    onSelection: ((Option, [Option]) -> Void)? = nil
)
```

```swift
Warp.Checkbox(
    isSelected: $isSelected,
    label: "Title for this option",
    action: {}
)

Warp.CheckboxGroup(
    title: "Title",
    helpText: "Any descriptive text",
    options: Binding(
        get: {
            options
        },
        set: { newOptions in
            options = newOptions
        }
    ),
    onSelection: { latestSelection, options in
        print("Selected: \(latestSelection.title)")
        print("Currently selected options: \(options.map { "\($0.title) is \($0.isSelected.wrappedValue ? "selected" : "not selected")" })")
    }
)
```

`CheckboxGroup` accept a list of `Options` that needs to confirm to `CheckboxOption` protocol.

```swift
protocol CheckboxOption: Identifiable, Hashable {
    var title: String { get }
    var isSelected: Binding<Bool> { get }
    var extraContent: AnyView? { get }
}
```

There are a variety of styles and orientations supported for the `Checkbox` and `CheckboxGroup` component:

```swift
enum Warp.CheckboxStyle {
    case `default`
    case error
    case disabled
}

enum Axis {
    case horizontal
    case vertical
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Checkbox(
    isSelected: $isSelected,
    label: "Title for this option",
    action: {}
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | Binding |  | The array of options that conform to CheckboxOption. This will provide isSelected, label and optional extraContent of Checkbox. |
| action | @escaping () -> Void |  | A closure that is executed when the checkbox is tapped. This can be mapped into the onSelection on CheckboxGroup |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String? | nil | An optional title for the CheckboxGroup. |
| helpText | String? | nil | An optional help text displayed below the CheckboxGroup. |
| style | Warp.CheckboxStyle | .default | The style of the CheckboxGroup which will be passed to the style of each Checkbox. Use one of the predefined CheckboxStyle values: .default, .error, or .disabled |
| axis | Axis.Set | .vertical | Determines whether the list of checkboxes is aligned vertically or horizontally. Use one of the predefined Axis values: .horizontal, or .vertical. |
| onSelection | ((Option, [Option]) -> Void)? | nil | A closure that will be triggered when an option is selected, providing the latest selected option and the updated list of options. |
| extraContent | AnyView? | nil | An optional view that will be displayed beside the label. This is only for Checkbox and can be passed from the Options in CheckboxGroup. |
