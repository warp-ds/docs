### Syntax

#### Using range

```swift example
Warp.Slider(
    value: Binding<Double>,
    range: ClosedRange<Double>,
    step: Double = 1.0,
    showTooltips: Bool = true,
    showRange: Bool = false,
    enabled: Bool = true,
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

#### Using array

```swift example
Warp.Slider(
    selectedItem: Binding<ArrayElement>,
    items: Array<ArrayElement>,
    showTooltips: Bool = true,
    showRange: Bool = false,
    enabled: Bool = true,
    valueFormat: ((ArrayElement) -> String)? = nil
)
```

```swift example
    @State private var selectedItem = "Medium"
    let items = ["Small", "Medium", "Large"]
    Warp.Slider(selectedItem: $selectedItem, items: items)
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