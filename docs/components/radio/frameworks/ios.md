# Radio - Frameworks
Radios allow users to select a single option from a list.

## iOS

<FrameworkTabs 
  :tabs="[
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="iOS" 
/>

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selectedOption | Binding Option |  | A binding to the currently selected option. This will provide `isSelected` of `Radio`. |
| options | [Option] |  | The array of options that conform to `RadioOption`. This will provide `label` and optional `extraContent` of `Radio`. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | String? | nil | An optional text label for the `Radio` button. |
| action | `@escaping () -> Void` |  | A optional closure that is executed when the `Radio` is tapped. This can be mapped into the `onSelection` on `RadioGroup` |
| title | String? | nil | An optional title for the `RadioGroup`. |
| helpText | String? | nil | An optional help text displayed below the `RadioGroup`. |
| style | Warp.RadioStyle | .default | The style of the `RadioGroup` which will be passed to the style of each `Radio`. Use one of the predefined `RadioStyle` values: `.default`, `.error`, or `.disabled` |
| axis | Axis.Set | .vertical | Determines whether the list of radios is aligned vertically or horizontally. Use one of the predefined `Axis` values: `.horizontal`, or `.vertical`. |
| onSelection | `((Option, Option) -> Void)?` | nil | A closure that will be triggered when an option is selected, providing the old and newly selected options. |
| extraContent | AnyView? | nil | An optional view that will be displayed beside the label. This is only for `Radio` and can be passed from the `Options` in `RadioGroup`. |