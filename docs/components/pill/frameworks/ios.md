# Pill - Frameworks
Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

## iOS

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="iOS" 
/>

### Syntax

```swift example
Warp.Pill(
    text: String,
    icon: Warp.Icon? = nil,
    onTap: @escaping () -> Void = {},
    onClose: (() -> Void)? = nil,
    iconContentDescription: String? = nil,
    style: Warp.PillStyle = .filter
)
```
```swift example
Warp.Pill(
    text: "This is a pill"
)
```

### Visual options

There are a variety of variants supported for the pill component:

```swift example
enum Warp.PillStyle {
    /// Used to represent a removable value the user has chosen.
    case filter
    /// Used to represent a proposed/recommended value a user can choose.
    case suggestion
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Pill(
    text: "This is a pill"
).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed on the pill |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | Warp.Icon? | nil | Pill icon. If you provide `onClose` then the Pill will have a close button instead of this icon. |
| onTap | `() -> Void` | {} | The action that will trigger on pill tap. |
| onClose | `(() -> Void)?` | nil | If added will show a close button and replace any provided icon, and the action will trigger on pill close. |
| iconContentDescription | String? | nil | The content description of the icon. Used for accessibility purposes. If not provided and we have `onClose` the default accessibility text is `Close` and for the `Warp.Icon` it is the accessibility of the icon. |
| style | Warp.PillStyle | .filter | The style of the pill (`.filter`, `.suggestion`) |