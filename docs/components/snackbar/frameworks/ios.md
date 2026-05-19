# Snackbar - iOS

A Snackbar provides brief feedback messages that overlay content at the bottom of the screen, with optional action buttons.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
Warp.Snackbar(
    type: Warp.SnackbarType,
    title: String,
    duration: Warp.Snackbar.Duration = .short,
    showCloseButton: Bool = true,
    isPresented: Binding<Bool>
)
```

You can create the `Snackbar` yourself or add it as a modifier to your view.

```swift example
Warp.Snackbar(
    type: .positive,
    title: "Item successfully added",
    isPresented: .constant(true)
)

.warpSnackbar(
    type: .positive,
    title: "Item successfully added",
    isPresented: $showSnackbar
)
```

### Visual options

There are a variety of types supported for the snackbar component:

```swift example
enum Warp.SnackbarType {
    /// Positive message. Example: Item added
    case positive
    /// Warning message. Example: Internet disconnected
    case warning
    /// Negative message. Example: Internal server error
    case negative
    /// Neutral message. Example: Generic information
    case neutral
}
```

### Auto dismiss duration option - default: short

```swift example
enum Warp.Snackbar.Duration {
    /// Short duration, typically used for quick feedback messages.
    /// Default is 5 seconds.
    case short
    /// Long duration, typically used for more significant messages that require user attention.
    /// Default is 20 seconds.
    case long
    /// Infinite duration, typically used for messages that require user interaction to dismiss.
    case infinite
    /// Custom duration time interval
    case custom(interval: TimeInterval)
}
```

### Action buttons

The snackbar supports two styles of action buttons: inline and long (stacked below the message).

#### Inline action

Use when the action label is short (e.g., "Undo"):

```swift example
.warpSnackbar(
    type: .negative,
    title: "Item deleted",
    action: Warp.Snackbar.Action(title: "Undo") {
        restoreItem()
    },
    isPresented: $showSnackbar
)
```

#### Long action

Use when the action label is longer and needs to be displayed below the message:

```swift example
.warpSnackbar(
    type: .warning,
    title: "Connection lost",
    longAction: Warp.Snackbar.Action(title: "Retry Connection") {
        reconnect()
    },
    duration: .infinite,
    showCloseButton: true,
    isPresented: $showSnackbar
)
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Snackbar(
    type: .positive,
    title: "Item successfully added",
    isPresented: .constant(true)
).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | Warp.SnackbarType |  | The visual style of the snackbar. Use one of the predefined `SnackbarType` values: `.positive`, `.warning`, `.negative`, or `.neutral` |
| title | String |  | The message text to display in the snackbar |
| isPresented | Binding Bool |  | A binding to control the visibility of the snackbar |

#### Optional props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| action | Warp.Snackbar.Action? | nil | An inline action button displayed next to the message |
| longAction | Warp.Snackbar.Action? | nil | An action button displayed below the message for longer action titles |
| duration | Warp.Snackbar.Duration | .short | How long the snackbar remains visible. Use one of the predefined `Duration` values: `.short` (5s), `.long` (20s), `.infinite`, or `.custom(interval:)` |
| showCloseButton | Bool | true | Whether to show a close button on the snackbar |

<component-questions />
