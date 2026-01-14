# Slider - Frameworks
Sliders allow users to adjust a numeric value within a given range.

<ComponentsStatus />

## iOS

<FrameworkTabs />

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | Binding Double |  | Binding value to update the slider value |
| range | ClosedRange Double |  | Defines the range for the slider |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| step | Double | 1.0 | The increment by which the slider value should change. |
| showTooltips | Bool | true | Whether to show tooltips above the thumbs. |
| showRange | Bool | false | Whether to show min/max range indicators. |
| enabled | Bool | true | Whether the slider is enabled or disabled. |
| valueFormatter | `(Double) -> String` | nil | A closure that formats the displayed value. Defaults to a simple string conversion. |
| onEditingChanged | `((Double) -> Void)?` | nil | A closure that is called when the slider's thumb is released, passing the final value as an argument. |
| selectedItem | Binding (where T: LosslessStringConvertible & Equatable) | — | For discrete sliders: a binding to the currently selected item from the list. |
| items | Array (where T: LosslessStringConvertible & Equatable) | — | For discrete sliders: an array of items to choose from. |

<component-questions />