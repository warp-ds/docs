

### Syntax

```swift example
Warp.ButtonPill(
    type: ButtonPillType,
    selected: Binding<Bool>
)
```
```swift example
Warp.ButtonPill(
    type: .overlay,
    selected: $isSelected
)
```
### Visual options

There are a variety of variants supported for the ButtonPill component:

```swift example
enum Warp.ButtonPillType {
    /// A pill with an overlay appearance.
    case overlay
    /// A pill with a flat appearance.
    case flat
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.ButtonPill(
    type: .overlay,
    selected: $isSelected
).uiView
```

### Parameters

<api-table type=iOS component="ButtonPill" />