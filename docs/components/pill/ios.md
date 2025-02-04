

## Syntax

```swift example
Warp.Pill(
    text: String,
    icon: Warp.Icon? = nil,
    onTap: @escaping () -> Void = {},
    onClose: (() -> Void)? = nil,
    iconContentDescription: String? = nil,
    style: Warp.PillStyle = .filter
)
```
```swift example
Warp.Pill(
    text: "This is a pill"
)
```

## Visual options

There are a variety of variants supported for the pill component:

```swift example
enum Warp.PillStyle {
    /// Used to represent a removable value the user has chosen.
    case filter
    /// Used to represent a proposed/recommended value a user can choose.
    case suggestion
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Pill(
    text: "This is a pill"
).uiView
```

### Parameters

<api-table type=iOS component="Pill" />