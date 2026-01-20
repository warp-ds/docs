# Callout - Frameworks
Callouts are snippets of information, drawing attention to important content.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
Warp.Callout(
    size: CalloutSize = .default,
    type: CalloutType = .inline,
    title: String,
    arrowEdge: Edge = .top,
    arrowOffset: CGFloat? = nil // customizable arrow offset from edge
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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The text to be displayed |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | Warp.CalloutSize | .default | The size of the Callout. Use one of the predefined `CalloutSize` values: `.default`, or `.small`. |
| type | Warp.CalloutType | .inline | The type of the Callout. Use one of the predefined `CalloutType` values: `.inline`, or `.popover`.  Popover accepts an optional onClose action, which will display a close button. |
| arrowEdge | Edge | .top | The direction of the arrow. Use one of the predefined `Edge` values: `.top`, `.leading`, `.bottom`, or `.trailing` |
| arrowOffset | CGFloat? | nil | The offset of the arrow from the edge. If nil, the arrow will be centered. |

<component-questions />