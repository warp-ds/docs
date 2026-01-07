# Broadcast - Frameworks
Broadcast automatically fetches broadcast messages for the current (or a given) url.

## iOS

<!-- Insert framework tabs here !-->


### Syntax

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | Text that will be shown in the broadcast |
| broadcastEdge | Warp.BroadcastEdge |  | Edge from where the broadcast is presented. Use one of the predefined `BroadcastEdge` values: `.top`, or `.bottom` |
| isPresented | Binding Bool |  | Binding to a boolean value that allows the broadcast to control dismissal |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| isDismissable | Bool | true | Determines if dismissable by the user or not. Will add a close button. |