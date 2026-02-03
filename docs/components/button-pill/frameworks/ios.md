# Button Pill - Frameworks
Button pill allows users to toggle an element to their favourites.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
Warp.ButtonPill(
    type: ButtonPillType,
    selected: Binding<Bool>
)
```
```swift example
Warp.ButtonPill(
    type: .overlay,
    selected: $isSelected
)
```
### Visual options

There are a variety of variants supported for the ButtonPill component:

```swift example
enum Warp.ButtonPillType {
    /// A pill with an overlay appearance.
    case overlay
    /// A pill with a flat appearance.
    case flat
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.ButtonPill(
    type: .overlay,
    selected: $isSelected
).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | Warp.ButtonPillType |  | The type of the button (`flat` or `overlay`). |
| selected | Binding Bool |  | A binding to the selected state of the button. |

<component-questions />