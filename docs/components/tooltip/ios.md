

### Syntax

```swift example
Warp.Tooltip(
    title: String,
    arrowEdge: Edge = .top
)
```

```swift example
Warp.Tooltip(title: "This is a Tooltip")
```

## Visual options

There are a variety of positions supported for the `Tooltip` component:

```swift example
enum Edge {
    case top
    case leading
    case bottom
    case trailing
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Tooltip(title: "This is a Tooltip").uiView
```

### Parameters

<api-table type=iOS component="Tooltip" />