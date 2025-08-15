### Syntax

```swift example
Warp.Slider(
    value: Binding<Double>,
    range: ClosedRange<Double>,
    step: Double = 1.0,
    onEditingChanged: ((Double) -> Void)? = nil
)
```

```swift example
Warp.Slider(
    value: $sliderValue,
    range: 0.0...100.0,
    step: 1.0
)
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Slider(
    value: $sliderValue,
    range: 0.0...100.0,
    step: 1.0
).uiView
```

### Parameters

<api-table type=iOS component="Slider" />