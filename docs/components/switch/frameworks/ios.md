# Switch - Usage
The Switch component allows users to toggle between two states.

## iOS

<!-- Insert framework tabs here !-->

### Syntax

```swift
Warp.Switch(
    isOn: Binding<Bool>,
    state: Warp.SwitchState = .default
)
```
```swift
Warp.Switch(isOn: $isOn)
```

### Visual options
There are a variety of variants supported for the Switch component:

```swift
enum Warp.SwitchState {
    case `default`
    case disabled
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Switch(isOn: $isOn).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| isOn | Binding Bool |  | Binding to a Boolean value indicating whether the switch is on or off. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| state | Warp.SwitchState | .default | The state of the switch.  Use one of the predefined `SwitchState` values: `.default`, or `.disabled` |