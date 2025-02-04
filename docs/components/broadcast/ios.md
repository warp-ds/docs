
## Syntax

```swift example
Warp.Broadcast(
    text: String,
    broadcastEdge: Warp.BroadcastEdge,
    isDismissable: Bool = true,
    isPresented: Binding<Bool>
)
```

You can create the `Broadcast` yourself or add it as a modifier to your view.

```swift example
Warp.Broadcast(
    text: "Broadcast",
    broadcastEdge: .top,
    isPresented: $broadcastIsPresented
)

.warpBroadcast(
    text: "Here's a broadcast located at the bottom edge",
    edge: .bottom,
    isDismissable: false,
    isPresented: $broadcastIsPresented
)
```

There are a variety of positions supported for the broadcast component:

```swift example
enum Warp.BroadcastEdge {
    case top
    case bottom
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Broadcast(
    text: "Broadcast",
    broadcastEdge: .top,
    isPresented: $broadcastIsPresented
).uiView
```

### Parameters

<api-table type=iOS component="Broadcast" />