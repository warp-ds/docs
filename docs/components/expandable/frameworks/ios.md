# Expandable

## iOS

### Syntax

```swift example
// If you need a `Expandable` with a custom view use this
Warp.Expandable(
        style: Warp.ExpandableStyle,
        title: String,
        @ViewBuilder expandableView: () -> Content,
        isAnimated: Bool = true,
        isExpanded: Bool = false
)

// If you need a `Expandable` with a simple String use this instead
Warp.Expandable(
        style: Warp.ExpandableStyle,
        title: String,
        subtitle: String,
        isAnimated: Bool = true,
        isExpanded: Bool = false
)
```

```swift example
Warp.Expandable(
        style: .box,
        title: "Title",
        subtitle: "SubTitle"
)
```

### Visual options

```swift example
enum Warp.ExpandableStyle {
    /// Basic expandable component with clear background.
    case `default`
    /// Expandable component with a boxed layout. Round corners
    case box
    /// Expandable component with a boxed layout. Square corners
    case boxBleed
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Expandable(
        style: .box,
        title: "Title",
        subtitle: "SubTitle"
).uiView
```

### Parameters

<api-table type=iOS component="Expandable" />
