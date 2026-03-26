# Button Group

Button group is a grouping concept for buttons.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/button-group/overview), [Usage](https://warp-ds.github.io/docs/components/button-group/usage), [Vue](https://warp-ds.github.io/docs/components/button-group/frameworks/vue), [iOS](https://warp-ds.github.io/docs/components/button-group/frameworks/ios)

**Framework support:** iOS, Vue

## Overview

Button group is a grouping concept for buttons.

This component is only supported in Warp Vue at the moment. For a React equivalent that serves a similar purpose, use the `Toggle` in [RadioButtons](https://warp-ds.github.io/docs/components/radio-buttons/overview).

## Usage

> This page is still in progress in the public docs.

## Frameworks

### Vue

Button group is a grouping concept for buttons.

> Use in entire app

```js
import { ButtonGroup } from '@warp-ds/vue';
app.use(ButtonGroup);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wButtonGroup, wButtonGroupItem } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wButtonGroup, wButtonGroupItem } from '@warp-ds/vue/button-group';
```

```vue
  <w-button-group>
    <w-button-group-item :selected="props.selected">
      <w-clickable label radio v-model="radioModel" value="foo">Foo</w-clickable>
    </w-button-group-item>
    <w-button-group-item :selected="active('Radio') && radioModel === 'bar'">
      <w-clickable label radio v-model="radioModel" value="bar">Bar</w-clickable>
    </w-button-group-item>
    <w-button-group-item :selected="active('Radio') && radioModel === 'baz'">
      <w-clickable label radio v-model="radioModel" value="baz">Baz</w-clickable>
    </w-button-group-item>
  </w-button-group>
```

#### ButtonGroup props 

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| outlined | boolean |  | Outlines the button-group |
| raised | boolean |  | Adds shadow to the button-group |
| vertical | boolean |  | Changes the orientation to vertical |

#### Slots 

| Name | Description |
| --- | --- |
| default | where all the buttons go |

#### ButtonGroupItem props 

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selected | boolean |  | Used to give the item a selected appearance - e.g. when used with toggles |

#### Slots 

| Name | Description |
| --- | --- |
| default | button content |

### iOS

Button group is a grouping concept for buttons.

```swift
Warp.ButtonGroup(
    buttons: Binding<[(title: String, isSelected: Bool)]>,
    singleSelect: Bool = false,
    onSelectionChange: (([(String, Bool)]) -> Void)? = nil
)
```

```swift
Warp.ButtonGroup(buttons: $buttons, singleSelect: true) { updatedButtons in
    print("Updated button states:", updatedButtons)
}
```

ButtonGroup can be multi select or single select.

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.ButtonGroup(buttons: $buttons, singleSelect: true) { updatedButtons in
    print("Updated button states:", updatedButtons)
}.uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| buttons | Binding |  | A binding to an array of tuples representing each button's title and selection state. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| singleSelect | Bool | false | Specifies the selection behavior. If true, only one button can be selected at a time. If false, multiple buttons can be selected. |
| onSelectionChange | (([(String, Bool)]) -> Void)? | nil | An optional closure that receives the updated button array whenever the selection changes. |
