# Range slider - Frameworks
Range sliders allow users to adjust minimum and maximum numeric values within a given range.

<ComponentsStatus />

## iOS

<FrameworkTabs />

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| range | `Binding>` |  | A binding to the current selected range of the slider. |
| bounds | ClosedRange |  | The minimum and maximum values for the slider. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| step | Double | 1.0 | The increment by which the slider value should change. |
| showTooltips | Bool | true | Whether to show tooltips above the thumbs. |
| showRange | Bool | false | Whether to show min/max range indicators. |
| enabled | Bool | true | Whether the slider is enabled or disabled. |
| selectedItems | Binding |  | For discrete sliders: a binding to the currently selected items from the list. T must conform to LosslessStringConvertible & Equatable. |
| items | Array |  | For discrete sliders: an array of items to choose from. T must conform to LosslessStringConvertible & Equatable. |
| valueFormat | `(T) -> String` | nil | For discrete sliders: a closure that formats the displayed value. Defaults to a simple string conversion. |

<component-questions />