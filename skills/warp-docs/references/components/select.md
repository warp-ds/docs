# Select

A select is a form input component that lets users choose one option from a predefined list.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/select/overview), [Usage](https://warp-ds.github.io/docs/components/select/usage), [Accessibility](https://warp-ds.github.io/docs/components/select/accessibility), [React](https://warp-ds.github.io/docs/components/select/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/select/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/select/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/select/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/select/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

A select is a form input component that lets users choose one option from a predefined list.

A select supports various states (hover, active, filled, disabled, error) and enhances clarity with optional labels, help texts, and icons. It can be used in forms, filters, settings, and anywhere a single-choice dropdown is needed.

Related components: [Text area](https://warp-ds.github.io/docs/components/text-area/overview), [Text field](https://warp-ds.github.io/docs/components/text-field/overview).

![Standard select with a label, placeholder, and optional help text below.](https://warp-ds.github.io/docs/components/select/overview-variant-default.svg)

Standard select with a label, placeholder, and optional help text below. Use this variant in most cases, when clarity is important, and the field needs context both before (label) and after (help text) user interaction.s on mouse hover.

![A select with a label above the field, with no help text.](https://warp-ds.github.io/docs/components/select/overview-variant-labelonly.svg)

A select with a label above the field, with no help text. Use when space is limited or help text is not necessary. Ideal in short or repeated forms (e.g. settings, profile forms).

![A bare select with only a placeholder inside, and no label or help text.](https://warp-ds.github.io/docs/components/select/overview-variant-fieldonly.svg)

A bare select with only a placeholder inside, and no label or help text. Use with **extreme caution**. Best suited for one-off interactions, short filters, or embedded in compact UI elements like toolbars, or filters.

![A select with an optional label indicator (Optional) and/or an info icon that opens a tooltip.](https://warp-ds.github.io/docs/components/select/overview-variant-optional.svg)

A select with an optional label indicator (Optional) and/or an info icon that opens a tooltip. Use these when the field is not required, and/or users may need extra clarification on how to fill it in. The Optional label and the info tooltip are **independent options**, they can be **enabled or disabled separately** depending on the use case.

![Example of a Select component](https://warp-ds.github.io/docs/components/select/overview-anatomy.svg)

1.  Select label (optional)
    
2.  Select field
    
3.  Optional indicator (optional)
    
4.  Info tooltip (optional)
    
5.  Placeholder
    
6.  Help text (optional)
    
7.  Right dropdown icon

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Standard with hint and disabled first option</h3>
        <w-select label="A label" hint="A hint" always>
            <option disabled selected value="">Pick something</option>
            <option value="foo">Foo</option>
            <option value="bar">Bar</option>
        </w-select>
    </div>
    <div>
        <h3 class="h4">Optional</h3>
        <w-select optional label="A useful and informative label">
            <option selected value="">Pick something</option>
            <option value="foo">Foo</option>
            <option value="bar">Bar</option>
        </w-select>
    </div>
    <div>
        <h3 class="h4">Disabled</h3>
        <w-select disabled label="Disabled select">
            <option selected value="">Pick something</option>
            <option value="foo">Foo</option>
            <option value="bar">Bar</option>
        </w-select>
    </div>
    <div>
        <h3 class="h4">Invalid</h3>
        <w-select invalid label="Invalid select" always>
            <option selected value="">Pick something</option>
            <option value="foo">Foo</option>
            <option value="bar">Bar</option>
        </w-select>
    </div>
    <div>
        <h3 class="h4">Readonly</h3>
        <w-select read-only label="Readonly select">
            <option disabled selected value="">You can't pick anything</option>
        </w-select>
    </div>
```

## Usage

A select is a form input component that lets users choose one option from a predefined list.

-   When you need to let users choose one or more options from a predefined list, typically by triggering a native or custom dropdown.
-   When you want to standardize input and reduce errors from free text.
-   When you need to reflect selection clearly in forms, filters, or configuration flows.

-   **If users need to enter custom values:** use [Text area](https://warp-ds.github.io/docs/components/text-area/overview) component.
-   **If users need to select multiple values:** use [Checkbox](https://warp-ds.github.io/docs/components/checkbox/overview) component.

-   Placeholder text is shown when the field is empty.
-   Clicking or pressing the select field opens a list of options.
-   Dropdown icon is always present to indicate interactivity.
-   Error state overrides help text.
-   Optional tooltip appears on hover/focus of info icon.
-   Read-only disables interactions, but keeps visual clarity.
-   Select supports keyboard navigation.

Select supports full keyboard and pointer interaction across platforms. Users can focus the field via tab or click, open and navigate the dropdown using arrow keys, and select an option with Enter or click.

All interactive elements inside the Select, such as the dropdown icon, optional tooltip, or action icons, must be keyboard-accessible and support focus states.

-   Use a select label to clearly describe the purpose of the input, don’t rely on placeholder alone.
-   Keep select label text short and concise.
-   Use placeholder text to provide brief instructions for the expected select. Since placeholders disappear once a value is chosen, avoid placing critical guidance there.
-   Use help text for short instructions, clarification, or consequences of the choice, keep it visible and concise.
-   Error messages should be short, specific, and action-oriented.

![Empty select with placeholder](https://warp-ds.github.io/docs/components/select/usage-states-default.svg)

Empty select with placeholder.

![Select border highlights on mouse hover.](https://warp-ds.github.io/docs/components/select/usage-states-hover.svg)

Select border highlights on mouse hover.

![Select is focused and ready for text input.](https://warp-ds.github.io/docs/components/select/usage-states-active.svg)

Select is focused and ready for text input.

![Select contains user selection.](https://warp-ds.github.io/docs/components/select/usage-states-filled.svg)

Select contains user selection.

![Select cannot be interacted with, grayed out visually.](https://warp-ds.github.io/docs/components/select/usage-states-disabled.svg)

Select cannot be interacted with, grayed out visually.

![Validation failed — shows red border and message below (help text).](https://warp-ds.github.io/docs/components/select/usage-states-error.svg)

Validation failed — shows red border and message below (help text).

![Select is focused but still in error state.](https://warp-ds.github.io/docs/components/select/usage-states-erroractive.svg)

Select is focused but still in error state.

![Content is visible but not selectable.](https://warp-ds.github.io/docs/components/select/usage-states-readonly.svg)

Content is visible but not selectable.

## Accessibility

A select is a form input component that lets users choose one option from a predefined list.

If a visible label isn't specified, an **aria-label** should be provided to the Select for accessibility. If the field is labeled by a separate element, an **aria-labelledby** prop should be provided using the id of the labeling element instead.

  

-   Always provide a visible label (do not rely on placeholder alone).
-   Do not rely on color alone for interaction feedback (e.g. error states).
-   Interaction patterns should follow platform-native expectations (e.g. tap zones, keyboard navigation, etc) and must not block accessibility tools.
-   Dropdown must be announced by screen readers.

## Frameworks

### React

A select is a form input component that lets users choose one option from a predefined list.

You can import the component like so:

```js
import { Select } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Select } from '@warp-ds/react/components/select';
```

```jsx
<Select label="Berries">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | string |  | The element's unique identifier. See MDN. |
| name | string |  | The name of the input element, used when submitting an HTML form. See MDN. |
| defaultValue | string & (string\|number\|readonly string[]) |  | The default value (uncontrolled). |
| value | string |  | The current value (controlled). |
| label | ReactNode |  | The content to display as the label. |
| optional | boolean |  | Mark label to indicate that this select is optional. |
| hint | ReactNode |  | The content to display as the hint. |
| always | boolean |  | Whether to always show hint. |
| invalid | boolean |  | Renders the field in an invalid state. Often paired together with hint to provide feedback about the error. |
| disabled | boolean |  | Whether the input is disabled. |
| readOnly | boolean |  | Whether the input can be selected but not changed by the user. |
| required | boolean |  | Whether user input is required on the input before form submission. |
| children | ReactNode |  | The option elements to populate the select with. |
| className | string |  | Additional classes to include. |
| style | CSSProperties |  | Additional CSS styles for the container. |
| autoFocus | boolean |  | Whether the element should receive focus on render. |

#### Value 

An initial, uncontrolled, value can be provided using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

```jsx
function Example() {
  let [value, setValue] = React.useState('c');

  return (
    <div className="flex flex-col space-y-32">
      <Select label="Berries (uncontrolled)">
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>

      <Select
        label="Berries (controlled)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
    </div>
  );
}
```

#### Labelling 

A visual label should be provided for the Select using the `label` prop.

#### Optional 

Add the `optional` prop to indicate that the select is not required.

```jsx
<Select label="Berries" optional>
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

#### Hint text 

Selects can provide additional context with `hint` if the label and placeholder aren't enough. You can force the hint text to always display by setting the `always` prop.

```jsx
<Select label="Berries" hint="We'll make jam of your selection" always>
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

Selects can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `invalid` prop to display it as invalid.

`invalid` is often paired with `hint` to provide feedback to the user about the error.

```jsx
<Select label="Berries" invalid hint="The wrong selection gets you berried">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

Using disabled is considered an anti-pattern and is therefore not supported. There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives.

### Vue

A select is a form input component that lets users choose one option from a predefined list.

> Use in entire app

```js
import { Forms } from '@warp-ds/vue'
app.use(Forms)
```

> Use in one component and special imports

You can import the component like so:

```js
import { wSelect } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wSelect } from '@warp-ds/vue/select';
```

```vue
<w-select v-model="model" label="A label">
  <option disabled selected value="">Pick something</option>
  <option value="foo">Foo</option>
</w-select>
```

All typical HTML5 attributes are valid props for select.

Below are some additional props documented.

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | The content to display as the label |
| hint | string |  | The string can contain HTML. |
| invalid | boolean |  | Renders the field in an invalid state. Often paired with hint to provide feedback about the error. |
| label-level | number |  | Usable on toggles, will make the emitted legend element into a heading for accessibility. |
| optional | string |  | Mark label to indicate that this input is optional. |
| read-only | string |  | Whether the input can be selected but not changed by the user. |

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

A select is a form input component that lets users choose one option from a predefined list.

```js
<w-select label="A label">
  <option value='Foo' selected>Foo</option>
  <option value='Bar'>Bar</option>
</w-select>
```

#### Labelling 

A visual label should be provided for the w-select using the `label` prop.

#### Auto-focus 

The select component will be focused on render when the `auto-focus` prop is true.

```js
<w-select label="A label" auto-focus>
  <option value='Foo' selected>Foo</option>
  <option value='Bar'>Bar</option>
</w-select>
```

#### Invalid 

Renders the field in an invalid state.

```js
<w-select label="A label" invalid always>
  <option value='Foo' >Foo</option>
  <option value='Bar'>Bar</option>
</w-select>
```

#### Optional 

Add the `optional` prop to indicate that the select is not required.

```js
<w-select label="A label" optional always>
  <option value='Foo' selected>Foo</option>
  <option value='Bar'>Bar</option>
</w-select>
```

#### Hint text 

w-select can provide additional context with `hint` if the label and placeholder aren't enough. You can force the hint text to always display by setting the `always` prop.

```js
<w-select label="A label" hint="This is a hint" always>
  <option value="Foo">Foo</option>
  <option value="Bar">Bar</option>
</w-select>
```

w-select can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `invalid` prop to display it as invalid.

`invalid` is often paired with `hint` to provide feedback to the user about the error.

```js
<w-select label="A label" invalid hint="Wrong choice" always>
  <option value="Foo">Foo</option>
  <option value="Bar">Bar</option>
</w-select>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| auto-focus | boolean | false | Whether the element should receive focus on render. |
| invalid | boolean | false | Renders the field in an invalid state. Often paired together with hint to provide feedback about the error. |
| always | boolean |  | Whether to always show hint. |
| hint | string |  | The content to display as the hint. |
| label | string |  | The content to display as the label. |
| name | string |  | The name of the select element, used when submitting an HTML form. |
| optional | boolean |  | Mark label to indicate that this input is optional. |
| disabled | boolean |  | Whether the input is disabled. |
| read-only | boolean |  | Whether the input can be selected but not changed by the user. |

The w-select component triggers the custom `change` event, on the element level, when the dropdown select element changes value.

When using the element in Lit, you can listen to the event in the standard way:

```js
html`<w-select label="Berries" auto-focus @change=${e => handleChange(e)}>`
```

The selected dropdown value is available on the `detail` field of the event (event.detail).

To use the event in other frameworks, such as Svelte, an event handler must be added manually:

```js
selectElement.addEventListener('change', e => handleChange(e))
```

In Svelte, the element can be accessed using query selection or using bind (see [bind:this](https://svelte.dev/docs/svelte/bind#bind:this)).

### Android

A select is a form input component that lets users choose one option from a predefined list.

```kotlin
@Composable
fun WarpSelect(
    modifier: Modifier = Modifier,
    value: String,
    onValueChange: (String) -> Unit,
    label: String? = null,
    optionalLabel: String? = null,
    enabled: Boolean = true,
    placeholderText: String? = null,
    helpText: String? = null,
    items: List<String>? = null,
    readOnly: Boolean = false,
    expanded: Boolean = false,
    isError: Boolean = false
)
```

The Select component will show a dropdown list of String values which need to be provided with the items param. The chosen value will be returned in the onValueChange callback.

```kotlin
var choice by remember { mutableStateOf("") }
WarpSelect(
    modifier = Modifier.padding(bottom = dimensions.space3),
    value = choice,
    onValueChange = { choice = it },
    label = "Label",
    placeholderText = "Select an option",
    items = listOf("One", "Two", "Three", "Four", "Five", "Six"),
    helpText = "Help text"
)
```

Select can be displayed as read-only, disabled and in error mode

```kotlin
var choice by remember { mutableStateOf("One") }
WarpSelect(
    modifier = Modifier.padding(bottom = dimensions.space3),
    value = choice,
    onValueChange = { choice = it },
    label = "Label",
    optionalLabel = "Optional",
    placeholderText = "Select an option",
    items = listOf("One", "Two", "Three", "Four", "Five", "Six"),
    helpText = "Help text",
    readOnly = true,
    isError = true,
    enabled = false
)
```

Not supported

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | String |  | The text displayed currently in the select component |
| onValueChange | (String) -> Unit |  | Lambda to be invoked when input value changes |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the select component |
| label | String | null | The text to display as the label above the select component |
| optionalLabel | String | null | The text to display next to the label above the select component |
| enabled | Boolean | true | Sets the select component in disabled mode when false |
| readOnly | Boolean | false | Sets the select component in read-only mode |
| placeholderText | String | null | Text hint that occupies the select component when it is empty |
| helpText | String | null | The text to display as the help text below the select component |
| isError | Boolean | false | Renders the select component in an invalid state |
| items | List? | null | The list of strings displayed in the select component menu |

### iOS

A select is a form input component that lets users choose one option from a predefined list.

```swift
Warp.Select(
    selectedOption: Binding<Warp.Select.SelectorOption?>,
    options: [Warp.Select.SelectorOption],
    placeholder: String = "",
    title: String = "",
    additionalInformation: String? = nil,
    tooltipInfoAction: (() -> Void)? = nil,
    style: Warp.TextFieldStyle = .default,
    helpText: String? = nil
)
```

```swift
Warp.Select(
    selectedOption: $selectedOption,
    options: options,
    placeholder: "Select an option",
    title: "Select Option",
    additionalInformation: "Additional info",
    tooltipInfoAction: { /* Show popover with additional detail */ },
    style: .default,
    helpText: "This field is required."
)
```

Warning: The options array should not be empty to ensure proper functionality.

By default Warp components return a SwiftUI View but a UIKit UIView is available as well:

```swift
Warp.Select(
    selectedOption: $selectedOption,
    options: options
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selectedOption | Binding |  | Binding to the currently selected option. |
| options | [Warp.Select.SelectorOption] |  | Array of options to display in the select dropdown. Should not be empty. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placeholder | String | "" | Placeholder text shown when no option is selected. |
| title | String | "" | Label text displayed above the select field. |
| additionalInformation | String? | nil | Optional additional information displayed next to the label. |
| style | Warp.TextFieldStyle | .default | Visual style of the select field (default, disabled, readOnly, error). |
| helpText | String? | nil | Optional help text displayed below the select field. |
