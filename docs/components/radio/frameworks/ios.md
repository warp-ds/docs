# Radio

## iOS

### Syntax

`Radio` buttons allow users to select one option from a set. `RadioGroup` is a customizable component that allows users to create a list of radios where one can be selected at any given time.

```swift example
Warp.Radio(
    isSelected: Bool,
    label: String?,
    style: RadioStyle = .default,
    extraContent: AnyView? = nil,
    action: @escaping () -> Void = {}
)

Warp.RadioGroup(
    title: String? = nil,
    helpText: String? = nil,
    selectedOption: Binding<Option>,
    options: [Option],
    style: RadioStyle = .default,
    axis: Axis.Set = .vertical,
    onSelection: ((Option, Option) -> Void)? = nil
)
```

```swift example
Warp.Radio(
    isSelected: $isSelected
)

Warp.RadioGroup(
    title: "Title",
    helpText: "Any descriptive text",
    selectedOption: $selectedOption,
    options: options,
    onSelection: { oldSelection, newSelection in
        print("Changed from \(oldSelection.title) to \(newSelection.title)")
    }
)
```

`RadioGroup` accept a list of `Options` that needs to confirm to `RadioOption` protocol.

```swift example
protocol RadioOption: Identifiable, Hashable {
    var title: String { get }
    var extraContent: AnyView? { get }
}
```

There are a variety of styles and orientations supported for the `Radio` and `RadioGroup` component:

```swift example
enum Warp.RadioStyle {
    case `default`
    case error
    case disabled
}

enum Axis {
    case horizontal
    case vertical
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Radio(
    isSelected: $isSelected
).uiView
```

### Parameters

<api-table type=iOS component="Radio" />