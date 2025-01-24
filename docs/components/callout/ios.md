

### Syntax

```swift example
Warp.Callout(
    size: CalloutSize = .default,
    type: CalloutType = .inline,
    title: String,
    arrowEdge: Edge = .top
)
```

```swift example
Warp.Callout(title: "This is a Callout")
```

There are a variety of variants and positions supported for the Callout component:

```swift example
enum Warp.CalloutSize {
    case small
    case `default`
}

enum Warp.CalloutType {
    case inline
    case popover(onTapped: (() -> Void)?)
}

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
Warp.Callout(title: "This is a Callout").uiView
```

### Parameters

<api-table type=iOS component="Callout" />