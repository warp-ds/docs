# Checkbox - Frameworks
Checkboxes allow users to select one or more options from a number of choices.

## iOS

<FrameworkTabs 
  :tabs="[
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' },
    { name: 'Web', url: './web' }
  ]" 
  activeTab="iOS" 
/>

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

Warp.CheckboxGroup(
    title: String? = nil,
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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | Binding |  | The array of options that conform to `CheckboxOption`. This will provide `isSelected`, `label` and optional `extraContent` of `Checkbox`. |
| action | `@escaping () -> Void` |  | A closure that is executed when the `checkbox` is tapped. This can be mapped into the `onSelection` on `CheckboxGroup` |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String? | nil | An optional title for the `CheckboxGroup`. |
| helpText | String? | nil | An optional help text displayed below the `CheckboxGroup`. |
| style | Warp.CheckboxStyle | .default | The style of the `CheckboxGroup` which will be passed to the style of each `Checkbox`. Use one of the predefined `CheckboxStyle` values: `.default`, `.error`, or `.disabled` |
| axis | Axis.Set | .vertical | Determines whether the list of checkboxes is aligned vertically or horizontally. Use one of the predefined `Axis` values: `.horizontal`, or `.vertical`. |
| onSelection | `((Option, [Option]) -> Void)?` | nil | A closure that will be triggered when an option is selected, providing the latest selected option and the updated list of options. |
| extraContent | AnyView? | nil | An optional view that will be displayed beside the label. This is only for `Checkbox` and can be passed from the `Options` in `CheckboxGroup`. |