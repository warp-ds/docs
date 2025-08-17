

### Syntax

```swift example
Warp.Toast(
    style: Warp.ToastStyle,
    title: String,
    toastEdge: Warp.ToastEdge,
    duration: Duration = .short,
    isPresented: Binding<Bool>
)
```

You can create the `Toast` yourself or add it as a modifier to your view.

```swift example
Warp.Toast(
    style: .success,
    title: "This is a toast",
    toastEdge: .top,
    duration: .short,
    isPresented: .constant(true)
)

.warpToast(
    style: .success,
    title: "This is a toast",
    toastEdge: .top,
    duration: .short,
    isPresented: .constant(true)
)
```

### Visual options

There are a variety of variants and positions supported for the toast component:

```swift example
enum Warp.ToastStyle {
    /// Disruptive message describes a critical, fatal error that affects action. Example: Internal server error
    case error
    /// Positive message, which describes successful action. Example: Item added
    case success
    /// Non-critical message, which describes unsuccessful action. Example: Internet disconnected
    case warning
}

enum Warp.ToastEdge {
    case top
    case bottom
}
```

### Auto dismiss duration option - default: short

```swift example
enum Warp.Toast.Duration {
    /// Short duration, typically used for quick feedback messages.
    /// Default is 5 seconds.
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

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Toast(
    style: .success,
    title: "This is a toast",
    toastEdge: .top,
    isPresented: .constant(true)
).uiView
```

### Parameters

<api-table type=iOS component="Toast" />