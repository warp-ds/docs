### Syntax

```swift
Warp.Spinner(
    size: SpinnerSize = .default,
    duration: CGFloat = 1,
    lineWidth: CGFloat = 3
)
```
```swift
Warp.Spinner(size: .large)
```

### Visual options
There are a variety of variants supported for the Spinner component:

```swift
enum Warp.SpinnerSize {        
    case small
    case `default`
    case large
    case custom(Double)
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Spinner(size: .large).uiView
```

### Parameters

<api-table type=iOS component="Spinner" />