

### Syntax

`Checkbox` buttons allow users to select multiple options from a set. `CheckboxGroup` is a customizable component that allows users to create a list of checkboxes where multiple can be selected at any given time.

```swift example
Warp.Checkbox(
    isSelected: Binding<Bool>,
    label: String,
    style: CheckboxStyle = .default,
    extraContent: AnyView? = nil,
    action: @escaping () -> Void
)

Warp.CheckboxGroup(title: String? = nil,
            helpText: String? = nil,
            options: Binding<[Option]>,
            style: CheckboxStyle = .default,
            axis: Axis.Set = .vertical,
            onSelection: ((Option, [Option]) -> Void)? = nil
)
```

```swift example
Warp.Checkbox(
    isSelected: $isSelected,
    label: "Title for this option",
    action: {}
)

Warp.CheckboxGroup(
            title: "Title",
            helpText: "Any descriptive text",
            options: Binding(
                get: {
                    options
                },
                set: { newOptions in
                    options = newOptions
                }
            ),
            onSelection: { latestSelection, options in
                print("Selected: \(latestSelection.title)")
                print("Currently selected options: \(options.map { "\($0.title) is \($0.isSelected.wrappedValue ? "selected" : "not selected")" })")
            }
)
```

`CheckboxGroup` accept a list of `Options` that needs to confirm to `CheckboxOption` protocol.

```swift example
protocol CheckboxOption: Identifiable, Hashable {
    var title: String { get }
    var isSelected: Binding<Bool> { get }
    var extraContent: AnyView? { get }
}
```

There are a variety of styles and orientations supported for the `Checkbox` and `CheckboxGroup` component:

```swift example
enum Warp.CheckboxStyle {
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
Warp.Checkbox(
    isSelected: $isSelected,
    label: "Title for this option",
    action: {}
).uiView
```

### Parameters

<api-table type=iOS component="Checkbox" />