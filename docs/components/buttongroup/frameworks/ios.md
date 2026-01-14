# Button group - Frameworks
Button group is a grouping concept for buttons.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
Warp.ButtonGroup(
    buttons: Binding<[(title: String, isSelected: Bool)]>,
    singleSelect: Bool = false,
    onSelectionChange: (([(String, Bool)]) -> Void)? = nil
)
```

```swift example
Warp.ButtonGroup(buttons: $buttons, singleSelect: true) { updatedButtons in
    print("Updated button states:", updatedButtons)
}
```

### Visual options

ButtonGroup can be multi select or single select.

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.ButtonGroup(buttons: $buttons, singleSelect: true) { updatedButtons in
    print("Updated button states:", updatedButtons)
}.uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| buttons | Binding |  | A binding to an array of tuples representing each button's title and selection state. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| singleSelect | Bool | false | Specifies the selection behavior. If `true`, only one button can be selected at a time. If `false`, multiple buttons can be selected. |
| onSelectionChange | `(([(String, Bool)]) -> Void)?` | nil | An optional closure that receives the updated button array whenever the selection changes. |

<component-questions />