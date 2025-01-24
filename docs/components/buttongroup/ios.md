

## Syntax

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

## Visual options

ButtonGroup can be multi select or single select.

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.ButtonGroup(buttons: $buttons, singleSelect: true) { updatedButtons in
    print("Updated button states:", updatedButtons)
}.uiView
```

### Parameters

<api-table type=iOS component="ButtonGroup" />