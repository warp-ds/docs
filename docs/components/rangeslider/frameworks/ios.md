# Range slider

## iOS

### Syntax

#### Using range

```swift example
Warp.RangeSlider(
    range: Binding<ClosedRange<Double>>,
    bounds: ClosedRange<Double>,
    step: Double = 1.0,
    showTooltips: Bool = true,
    showRange: Bool = false,
    enabled: Bool = true,
)
```

**Example:**

```swift example
@State private var selectedRange: ClosedRange<Double> = 20.0...80.0

Warp.RangeSlider(
    range: $selectedRange,
    bounds: 0.0...100.0,
    step: 1.0
)
```

#### Using array

```swift example
Warp.RangeSlider(
    selectedItems: Binding<[ArrayElement]>,
    items: [ArrayElement],
    showTooltips: Bool = true,
    showRange: Bool = false,
    enabled: Bool = true,
    valueFormat: ((ArrayElement) -> String)? = nil
)
```

**Example:**

```swift example
@State private var selectedSizes: [String] = ["Medium", "Large"]
let sizes = ["Small", "Medium", "Large"]

Warp.RangeSlider(
    selectedItems: $selectedSizes,
    items: sizes
)
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.RangeSlider(
    range: $selectedRange,
    bounds: 0.0...100.0,
    step: 1.0
).uiView
```

<api-table type=iOS component="RangeSlider" />