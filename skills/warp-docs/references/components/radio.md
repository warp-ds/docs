# Radio

Radios allow users to select a single option from a list.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/radio/overview), [Usage](https://warp-ds.github.io/docs/components/radio/usage), [React](https://warp-ds.github.io/docs/components/radio/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/radio/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/radio/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/radio/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/radio/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

Radios allow users to select a single option from a list.

## Inline Demo Markup

```html
<div>
        <h3 class="t4">Default</h3>
        <w-radio-group label="Radio Group" name="default-radio">
            <w-radio value="1">One</w-radio>
            <w-radio value="2">Two</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="t4">With selection</h3>
        <w-radio-group label="Radio Group" name="selected-radio">
            <w-radio value="1" checked>One (selected)</w-radio>
            <w-radio value="2">Two</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="t4">Disabled</h3>
        <w-radio-group label="Disabled Radio Group" name="disabled-radio">
            <w-radio value="1" disabled>One</w-radio>
            <w-radio value="2" disabled checked>Two (selected)</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="t4">Invalid</h3>
        <w-radio-group label="Invalid Radio Group" name="invalid-radio" invalid>
            <w-radio value="1" checked>One</w-radio>
            <w-radio value="2">Two</w-radio>
        </w-radio-group>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

Radios allow users to select a single option from a list.

The toggle component allows you to render radios. All you have to do is specify `type="radio"` for the Toggle and let the component handle the rest. Toggle is built to handle both single and multiple options.

You must keep track of state yourself. The state has to be handled differently depending on whether you want to use single or multiple options. See examples below.

You can import the component like so:

```js
import { Toggle } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Toggle } from '@warp-ds/react/components/toggle';
```

#### Radio with multiple options 

```ts
type ToggleEntry = {
  label: string;
  value: unknown;
};
```

```jsx
function Example() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <Toggle
      type="radio"
      title="Favorite color"
      helpText="Choose your absolute favorite color"
      options={options}
      onChange={(selected) => console.log(selected)}
    />
  );
}
```

Note the `helpText` property. This gives you the option to further explain the purpose of the toggle and the action to take.

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

Radios allow users to select a single option from a list.

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
<w-toggle radio v-model="model" label="A label" :toggles="[
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

```vue
<w-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</w-field>
```

#### Validation and required Form Elements 

If the form element is marked `required`, a special rule will be inserted before any user-defined rules. The `required` prop can accept a function that will be used as the required-rule.

### Elements

Radios allow users to select a single option from a list of choices.

The radio component is a custom element that provides a single radio with built-in form validation and styling support. The radio group component adds labeling, help text, and required validation for a set of radios.

-   `<w-radio>` - A single radio with required and invalid states
-   `<w-radio-group>` - A grouping wrapper that manages labeling, help text, roving keyboard focus, and validation for child radios

The components automatically handle:

-   Form integration and constraint validation
-   Required state handling with validation messages
-   Accessibility attributes, keyboard interaction, and labeling

```html
<w-radio name="plan" value="basic">Basic plan</w-radio>

<script type="module">
  const radio = document.querySelector('w-radio');

  radio.addEventListener('change', (event) => {
    console.log('Checked:', event.target.checked);
  });
</script>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| checked | boolean | false | Draws the radio in a checked state. |
| disabled | boolean | false | Disables the radio. |
| invalid | boolean | false | Draws the radio in an invalid state. |
| name | string | '' | The name of the radio, submitted as a name/value pair with form data. |
| required | boolean | false | Makes the radio a required field. |
| value | string | 'on' | The value of the radio, submitted as a name/value pair with form data. |

#### Events 

| Name | Description |
| --- | --- |
| change | Fired when the checked state changes. |
| invalid | Fired when the radio fails validation. |

#### Methods 

| Name | Parameters | Returns | Description |
| --- | --- | --- | --- |
| blur | - | void | Removes focus from the radio. |
| checkValidity | - | boolean | Checks whether the radio passes constraint validation. |
| click | - | void | Simulates a click on the radio. |
| focus | options? | void | Sets focus on the radio. |
| reportValidity | - | boolean | Checks validity and shows validation UI behavior if invalid. |
| resetFormControl | - | void | Resets the radio to its initial checked state. |

#### Validation Properties 

| Name | Type | Description |
| --- | --- | --- |
| validationMessage | string | Returns the validation message if the radio is invalid, otherwise an empty string. |
| validity | ValidityState | Returns the validity state of the radio. |

Provide the radio label as default slot content.

```html
<w-radio name="contact" value="email">Email</w-radio>
```

Sets the radio to a checked state.

Type: `boolean`

Default: `false`

```html
<w-radio checked name="plan" value="pro">Pro plan</w-radio>
```

#### Required (`required`) 

When set, the radio must be checked before form submission.

Type: `boolean`

Default: `false`

```html
<form id="radio-form">
  <w-radio name="terms" required value="agree">I agree to the terms</w-radio>
  <w-radio name="terms" required value="disagree">I do not agree to the terms</w-radio>
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

```html
<w-radio invalid>There is a problem</w-radio>
```

Disables the radio.

Type: `boolean`

Default: `false`

```html
<w-radio disabled>Cannot change</w-radio>
```

You can programmatically control the radio value:

```html
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

Use `<w-radio-group>` to label and validate a set of radios together.

```html
<w-radio-group label="Notification preference" name="notification" help-text="Select one option">
  <w-radio value="email">Email</w-radio>
  <w-radio value="sms">SMS</w-radio>
  <w-radio value="push">Push</w-radio>
</w-radio-group>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| disabled | boolean | false | Disables the radio group and all child radios. |
| help-text | string | - | Help text displayed below the group. |
| invalid | boolean | false | Marks the radio group as invalid. |
| label | string | - | The group label displayed above the radios. |
| name | string | - | The name applied to child radios when they do not provide one. |
| optional | boolean | false | Whether to show optional text next to the label. |
| required | boolean | false | Makes the radio group required. |

#### Events 

| Name | Description |
| --- | --- |
| change | Fired when the selected child radio changes. |
| invalid | Fired when the radio group fails validation. |

#### Methods 

| Name | Parameters | Returns | Description |
| --- | --- | --- | --- |
| checkValidity | - | boolean | Checks whether the group passes constraint validation. |
| focus | options? | void | Sets focus on the selected radio or first enabled radio. |
| reportValidity | - | boolean | Checks validity and shows validation UI behavior if invalid. |

A visual label displayed above the radio group.

Type: `string`

```html
<w-radio-group label="Preferred contact">
  <w-radio>Email</w-radio>
</w-radio-group>
```

Displays "Optional" next to the group label to indicate the field is not required.

Type: `boolean`

Default: `false`

```html
<w-radio-group label="Preferred contact" optional>
  <w-radio>Email</w-radio>
</w-radio-group>
```

Provides additional context below the radio group. When the group is required and no option is selected after interaction, the help text is replaced with a required message.

Type: `string`

```html
<w-radio-group label="Preferred contact" help-text="Choose one">
  <w-radio>Email</w-radio>
  <w-radio>Phone</w-radio>
</w-radio-group>
```

#### Required (`required`) 

When set, one radio in the group must be selected before form submission.

Type: `boolean`

Default: `false`

```html
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

```html
<w-radio-group label="Preferred contact" invalid help-text="Please select an option">
  <w-radio>Email</w-radio>
  <w-radio>Phone</w-radio>
</w-radio-group>
```

The radio and radio group components work with native HTML forms.

-   Standalone radios with the same `name` behave like native radio groups (only one can be selected).
-   Inside `<w-radio-group>`, the group handles validation and applies its `name` to child radios that do not provide one.
-   The group itself does not submit a value; checked child radios submit values.

```html
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

* * *

The radio exposes a small set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
| --- | --- | --- |
| control | radio control (circle) | minor alignment or sizing tweaks |
| label | label content | typography tweaks |

Example:

```css
w-radio::part(label) {
  font-weight: 600;
}

w-radio::part(control) {
  margin-top: 1px;
}
```

Parts are intended as an **escape hatch**. Prefer component tokens for anything state‑ or size‑related.

* * *

Component tokens act as inputs to the radio styling. They can be set directly on the component or inherited from a parent container.

```css
.settings-panel {
  --w-c-radio-gap: 12px;
}
```

Defaults are defined internally; setting a token is always optional.

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-radio-gap | space between control and label | 8px |
| --w-c-radio-size | width/height of the control | 2rem |
| --w-c-radio-radius | border radius of the control | 50% |
| --w-c-radio-border-width | border width | 1px |
| --w-c-radio-checked-border-width | border width when checked | 0.6rem |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-radio-bg | control background | theme default |
| --w-c-radio-border-color | control border color | theme default |
| --w-c-radio-border-color-checked | border color when checked | theme default |
| --w-c-radio-label-color | label text color | currentColor |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-radio-border-color-invalid | border color when invalid | theme default |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-radio-bg-disabled | background when disabled | theme default |
| --w-c-radio-border-color-disabled | border when disabled | theme default |
| --w-c-radio-label-color-disabled | label color when disabled | theme default |
| --w-c-radio-cursor-disabled | cursor when disabled | not-allowed |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-radio-label-font-size | label font size | theme default |
| --w-c-radio-label-line-height | label line height | theme default |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-radio-outline-width | focus outline width | 2px |
| --w-c-radio-outline-color | focus outline color | theme default |
| --w-c-radio-outline-offset | focus outline offset | theme default |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-radio-cursor | cursor in enabled state | pointer |

* * *

| Token | Purpose | Default |
| --- | --- | --- |
| --w-c-radio-transition | transition for control | 150ms cubic-bezier(0.4, 0, 0.2, 1) |

Transitions are automatically disabled when `prefers-reduced-motion: reduce` is active.

* * *

```css
.filters w-radio {
  --w-c-radio-gap: 4px;
  --w-c-radio-size: 1.6rem;
}
```

```css
w-radio {
  --w-c-radio-border-color-checked: var(--w-s-color-border-selected);
  --w-c-radio-checked-border-width: 0.7rem;
}
```

```css
.danger-zone w-radio {
  --w-c-radio-border-color-invalid: red;
}
```

* * *

-   Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.
    
-   Prefer **component tokens** for size, spacing, and state styling
    
-   Use **parts** only for small, local tweaks
    
-   Avoid relying on internal class names or selectors

## Inline Demo Markup

```html
<w-radio name="plan" value="basic">Basic plan</w-radio>
```

```html
<w-radio-group label="Notification preference" name="notification" help-text="Select one option">
    <w-radio value="email">Email</w-radio>
    <w-radio value="sms">SMS</w-radio>
    <w-radio value="push">Push</w-radio>
  </w-radio-group>
```

### Android

Radios allow users to select a single option from a list.

```kotlin
fun WarpRadio(
    modifier: Modifier = Modifier,
    label: String,
    selected: Boolean = false,
    isError: Boolean = false,
    enabled: Boolean = true,
    extraText: String? = null,
    slot: @Composable (() -> Unit)? = null,
    onClick: (() -> Unit)? = null,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)

fun WarpRadioGroup(
    modifier: Modifier = Modifier,
    orientation: Orientation = Orientation.Vertical,
    title: String? = null,
    options: List<String>,
    selectedOption: String? = null,
    helpText: String? = null,
    enabled: Boolean = true,
    isError: Boolean = false,
    onOptionSelected: (String) -> Unit
)
```

There is support for standalone radio component as well as a radio group.

```kotlin
var selected by remember { mutableStateOf(false) }

WarpRadio(
    label = "Radio with extraText",
    selected = selected,
    enabled = true,
    extraText = "(Extra)",
    onClick = { selected = !selected }
    )

val radioOptions = listOf("Option 1", "Option 2", "Option 3", "Option 4", "Option 5")
val (selectedOption, onOptionSelected) = remember { mutableStateOf(radioOptions[0]) }

WarpRadioGroup(
    title = title,
    options = radioOptions,
    orientation = orientation,
    selectedOption = selectedOption,
    enabled = enabled,
    isError = isError,
    onOptionSelected = onOptionSelected,
    helpText = "Required"
    )
```

There is support for optional title and help text when using the radio group. Supported orientations are Orientation.Vertical and Orientation.Horizontal. Vertical is the default.

To support layouts still written in xml the Radio can be used as a custom view. Adding a composable slot must be done programmatically. Horizontal or vertical group is not supported.

```kotlin
var slot: @Composable (() -> Unit)? = null
    set(value) {
        field = value
        disposeComposition()
    }

fun setOnClickListener(onClick: OnClickListener?)
```

```xml
<com.schibsted.nmp.warp.components.legacy.WarpRadioView
    android:id="@+id/radio"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginTop="@dimen/space2"
    app:radioSelected="false"
    app:radioIsError="false"
    app:radioExtraText="Extra"
    app:radioEnabled="true"
    app:radioLabel="Radio button" />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | String |  | The text to be displayed next to the radio |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the radio |
| selected | boolean | false | Whether the radio is selected or not |
| isError | boolean | false | Shows the radio in error state if true |
| enabled | boolean | true | Whether the radio is enabled or not |
| extraText | String? | null | The optional text to be displayed next to the label |
| slot | @Composable (() -> Uni)? | null | The composable that will be displayed next to the label or extraText if provided |
| onClick | () -> Unit | null | The lambda to be invoked when clicked. |
| interactionSource | MutableInteractionSource | MutableInteractionSource | MutableInteractionSource represents a stream of Interactions corresponding to events emitted by a component |

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | List |  | The list of texts to be displayed next to the radio buttons |
| onOptionSelected | (String) -> Unit |  | The lambda to be invoked when clicked on a radio. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the radio group |
| orientation | Orientation.Vertical Orientation.Horizontal | Orientation.Vertical | Sets the orientation for the radio group. Class is found in the androidx.compose.foundation.gestures package |
| title | String | null | The title to be displayed on top of the radio group |
| selectedOption | String | null | The selected option in the radio group |
| helpText | String | null | The text displayed below the radio group |
| enabled | boolean | true | Whether the radio group is enabled or not |
| isError | boolean | false | Shows the radio group in error state if true |

### iOS

Radios allow users to select a single option from a list.

`Radio` buttons allow users to select one option from a set. `RadioGroup` is a customizable component that allows users to create a list of radios where one can be selected at any given time.

```swift
Warp.Radio(
    isSelected: Bool,
    label: String?,
    style: RadioStyle = .default,
    extraContent: AnyView? = nil,
    action: @escaping () -> Void = {}
)

Warp.RadioGroup(
    title: String? = nil,
    helpText: String? = nil,
    selectedOption: Binding<Option>,
    options: [Option],
    style: RadioStyle = .default,
    axis: Axis.Set = .vertical,
    onSelection: ((Option, Option) -> Void)? = nil
)
```

```swift
Warp.Radio(
    isSelected: $isSelected
)

Warp.RadioGroup(
    title: "Title",
    helpText: "Any descriptive text",
    selectedOption: $selectedOption,
    options: options,
    onSelection: { oldSelection, newSelection in
        print("Changed from \(oldSelection.title) to \(newSelection.title)")
    }
)
```

`RadioGroup` accept a list of `Options` that needs to confirm to `RadioOption` protocol.

```swift
protocol RadioOption: Identifiable, Hashable {
    var title: String { get }
    var extraContent: AnyView? { get }
}
```

There are a variety of styles and orientations supported for the `Radio` and `RadioGroup` component:

```swift
enum Warp.RadioStyle {
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
Warp.Radio(
    isSelected: $isSelected
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selectedOption | Binding Option |  | A binding to the currently selected option. This will provide isSelected of Radio. |
| options | [Option] |  | The array of options that conform to RadioOption. This will provide label and optional extraContent of Radio. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | String? | nil | An optional text label for the Radio button. |
| action | @escaping () -> Void |  | A optional closure that is executed when the Radio is tapped. This can be mapped into the onSelection on RadioGroup |
| title | String? | nil | An optional title for the RadioGroup. |
| helpText | String? | nil | An optional help text displayed below the RadioGroup. |
| style | Warp.RadioStyle | .default | The style of the RadioGroup which will be passed to the style of each Radio. Use one of the predefined RadioStyle values: .default, .error, or .disabled |
| axis | Axis.Set | .vertical | Determines whether the list of radios is aligned vertically or horizontally. Use one of the predefined Axis values: .horizontal, or .vertical. |
| onSelection | ((Option, Option) -> Void)? | nil | A closure that will be triggered when an option is selected, providing the old and newly selected options. |
| extraContent | AnyView? | nil | An optional view that will be displayed beside the label. This is only for Radio and can be passed from the Options in RadioGroup. |
