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
    /// Info message. Example: Generic information
    case info
    /// Neutral message without icon. Example: Generic information
    case neutral
    /// Neutral message with custom icon. Example: Generic information with custom icon
    case neutralIcon(Warp.Icon)
}
```

The `.neutralIcon` variant allows you to provide a custom `Warp.Icon`:

```swift example
Warp.Snackbar(
    type: .neutralIcon(.bag),
    title: "Item added to your bag",
    isPresented: $showSnackbar
)

.warpSnackbar(
    type: .neutralIcon(.heart),
    title: "Added to favorites",
    action: Warp.Snackbar.Action(title: "View") {
        showFavorites()
    },
    isPresented: $showSnackbar
)
```

### Auto dismiss duration option - default: short

```swift example
enum Warp.Snackbar.Duration {
    /// Short duration, typically used for quick feedback messages.
    /// Default is 4 seconds.
    case short
    /// Long duration, typically used for more significant messages that require user attention.
    /// Default is 10 seconds.
    case long
    /// Infinite duration, typically used for messages that require user interaction to dismiss.
    case infinite
    /// Custom duration time interval
    case custom(interval: TimeInterval)
}
```

> **Note:** When an action button is provided (either `action` or `longAction`), a minimum duration of `.long` (10 seconds) is enforced to give users adequate time to read the message and tap the action button.

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
| type | Warp.SnackbarType |  | The visual style of the snackbar. Use one of the predefined `SnackbarType` values: `.positive`, `.warning`, `.negative`, `.info`, `.neutral`, or `.neutralIcon(Warp.Icon)` |
| title | String |  | The message text to display in the snackbar |
| isPresented | Binding Bool |  | A binding to control the visibility of the snackbar |

#### Optional props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| action | Warp.Snackbar.Action? | nil | An inline action button displayed next to the message |
| longAction | Warp.Snackbar.Action? | nil | An action button displayed below the message for longer action titles |
| duration | Warp.Snackbar.Duration | .short | How long the snackbar remains visible. Use one of the predefined `Duration` values: `.short` (4s), `.long` (10s), `.infinite`, or `.custom(interval:)`. When an action is provided, minimum `.long` (10s) is enforced |
| showCloseButton | Bool | true | Whether to show a close button on the snackbar |

<component-questions />
