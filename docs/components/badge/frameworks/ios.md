
### Syntax

```swift example
Warp.Badge(
    text: String,
    icon: Warp.Icon? = nil,
    variant: Warp.BadgeVariant,
    position: Warp.BadgePosition = .default
)
```

```swift example
Warp.Badge(
    text: "Success",
    variant: .success,
    position: .bottomLeft
)
```

There are a variety of variants and positions supported for the badge component:

```swift example
enum Warp.BadgeVariant {
    /// Used to convey general information that isn’t critical.
    case info
    /// Used to communicate success.
    case success
    /// Used to communicate warning.
    case warning
    /// Used to communicate error.
    case negative
    /// Used to communicate disabled.
    case disabled
    /// Used to communicate sponsored.
    case sponsored
    /// Used to communicate neutral.
    case neutral
    /// Used to communicate price.
    case price
}

enum Warp.BadgePosition {
    case `default`
    case topLeft
    case topRight
    case bottomLeft
    case bottomRight
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift exmaple
Warp.Badge(
    text: "Success",
    variant: .success,
    position: .bottomLeft
).uiView
```

### Parameters

<api-table type=iOS component="Badge" />