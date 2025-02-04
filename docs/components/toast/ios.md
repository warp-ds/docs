

## Syntax

```swift example
Warp.Toast(
    style: Warp.ToastStyle,
    title: String,
    toastEdge: Warp.ToastEdge,
    isPresented: Binding<Bool>
)
```

You can create the `Toast` yourself or add it as a modifier to your view.

```swift example
Warp.Toast(
    style: .success,
    title: "This is a toast",
    toastEdge: .top,
    isPresented: .constant(true)
)

.warpToast(
    style: .success,
    title: "This is a toast",
    toastEdge: .top,
    isPresented: .constant(true)
)
```

## Visual options

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