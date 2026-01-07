# Tooltip - Frameworks
A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

## iOS

<!-- Insert framework tabs here !-->

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

### Visual options

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The text to be displayed |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| arrowEdge | Edge | .top | The direction of the arrow.  Use one of the predefined `Edge` values: `.top`, `.leading`, `.bottom`, or `.trailing` |