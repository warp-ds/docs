# Switch

The Switch component allows users to toggle between two states.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/switch/overview), [Usage](https://warp-ds.github.io/docs/components/switch/usage), [React](https://warp-ds.github.io/docs/components/switch/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/switch/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/switch/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/switch/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/switch/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

The Switch component allows users to toggle between two states.

## Inline Demo Markup

```html
<div class="flex items-center gap-8">
        <label for="switch-example">Switch it</label>
        <w-switch id="switch-example" name="toggle"></w-switch>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

The Switch component allows users to toggle between two states.

You can import the component like so:

```js
import { Switch } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Switch } from '@warp-ds/react/components/switch';
```

```js
  <Switch
    value={value}
    onClick={() => setValue(!value)}
    aria-label="Toggle switch"
  />
```

The Switch needs either `aria-label` or `aria-labelledby` to be accessible to screen readers.

#### Disabled property 

There is no visual styling to a disabled button. It is recommended to display a message to the user, for example a modal or toast, stating why the user cannot toggle the switch.

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | boolean |  | The value of the switch. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | false | The unique identifier. |
| aria-label | string | false | Defines a string value that labels the current element. Must be set if aria-labelledby is not defined. |
| aria-labelledby | string |  | Identifies the element (or elements) that labels the current element. Must be set if aria-label is not defined. |
| disabled | boolean | false | Whether the switch is disabled. |

#### Events 

| Name | Description |
| --- | --- |
| onClick | () => void |

### Vue

The Switch component allows users to toggle between two states.

> Use in entire app

```js
import { Switch } from '@warp-ds/vue';
app.use(Switch);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wSwitch } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wSwitch } from '@warp-ds/vue/switch';
```

```vue
<w-switch v-model="model" />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean | false | The value of the switch. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | false | The unique identifier. |
| disabled | boolean | false | Whether the switch is disabled. |

### Elements

The Switch component allows users to toggle between two states.

`<w-switch>` is a form-associated toggle component.

-   It reflects its `name`, `value`, `checked`, and `disabled` properties to attributes.
-   It dispatches a bubbling `change` `CustomEvent` when toggled (when not disabled).
-   When used in a form, the control submits `value` only when `checked` is `true` (otherwise it submits nothing).

```html
<w-switch id="demo-switch" name="marketing" value="yes"></w-switch>

<script>
  const el = document.querySelector('#demo-switch');
  el.addEventListener('change', (event) => {
    // event.detail = { checked: boolean, value: string | null }
    console.log('changed', event.detail);
  });
</script>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | Name used when submitting an HTML form. |
| value | string |  | Value submitted when the switch is checked. |
| checked | boolean | false | Whether the switch is on (checked). |
| disabled | boolean | false | Whether the switch is disabled. |

#### Events 

| Name | Description |
| --- | --- |
| change | (event: CustomEvent) => void |

#### Name (`name`) 

Name used when submitting an HTML form.

Default: `''`

```html
<form>
  <w-switch name="notifications" value="on"></w-switch>
  <button type="submit">Submit</button>
</form>
```

#### Value (`value`) 

Value submitted when the switch is checked.

Default: `''`

Notes:

-   The component reports `null` as the value in the `change` event when `value` is an empty string.

```html
<w-switch value="enabled"></w-switch>
```

#### Checked (`checked`) 

Whether the switch is on (checked).

Default: `false`

```html
<w-switch checked></w-switch>
```

#### Disabled (`disabled`) 

Whether the switch is disabled.

Default: `false`

```html
<w-switch disabled></w-switch>
<w-switch checked disabled></w-switch>
```

#### Change (`change`) 

Dispatched when the switch toggles (only when not disabled).

-   Type: `CustomEvent`
-   Bubbles: `true`
-   Composed: `true`
-   Detail: `{ checked: boolean; value: string | null }`

```html
<w-switch id="switch-events" value="yes"></w-switch>
<script>
  const el = document.querySelector('#switch-events');
  el.addEventListener('change', (e) => {
    console.log('checked:', e.detail.checked);
    console.log('value:', e.detail.value);
  });
</script>
```

The internal control is rendered as a native `button` with `role="switch"` and `aria-checked` / `aria-disabled`.

## Inline Demo Markup

```html
<w-switch id="demo-switch" name="marketing" value="yes"></w-switch>
```

```html
<form>
  <w-switch name="notifications" value="on"></w-switch>
  <button type="submit">Submit</button>
</form>
```

### Android

The Switch component allows users to toggle between two states.

```kotlin
fun WarpSwitch(
    modifier: Modifier = Modifier,
    checked: Boolean = false,
    onCheckedChange: ((Boolean) -> Unit) = { },
    enabled: Boolean = true,
    contentDescr: String? = null
)
```

The switch has only two appearances - default or disabled

```kotlin
var checked by remember { mutableStateOf(true) }
WarpSwitch(
    checked = checked,
    onCheckedChange = { checked = it }
    )
```

To display a disabled switch - set enabled to false

```kotlin
var checked by remember { mutableStateOf(true) }

WarpSwitch(
    checked = checked,
    onCheckedChange = { checked = it },
    enabled = false
    )
```

To support layouts still written in xml the WarpSwitch can be used as a custom view. To add functionality, set onCheckedChanged listener.

```kotlin
fun setOnCheckedChangeListener(onCheckedChangeListener: ((Boolean) -> Unit))
```

```xml
<com.schibsted.nmp.warp.components.legacy.WarpSwitchView
    android:id="@+id/warp_switch"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_margin="@dimen/space2"
    app:switchChecked="true"
    app:switchEnabled="true"
     />
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the switch |
| onCheckedChange | (Boolean) -> Unit |  | Lambda to be invoked when checked or unchecked |
| enabled | boolean | true | Whether the switch is enabled or not |
| checked | boolean | false | Whether the switch is on or off |
| contentDescr | String | null | The a11y text for screenreaders |

### iOS

The Switch component allows users to toggle between two states.

```swift
Warp.Switch(
    isOn: Binding<Bool>,
    state: Warp.SwitchState = .default
)
```

```swift
Warp.Switch(isOn: $isOn)
```

There are a variety of variants supported for the Switch component:

```swift
enum Warp.SwitchState {
    case `default`
    case disabled
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Switch(isOn: $isOn).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| isOn | Binding Bool |  | Binding to a Boolean value indicating whether the switch is on or off. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| state | Warp.SwitchState | .default | The state of the switch. Use one of the predefined SwitchState values: .default, or .disabled |
