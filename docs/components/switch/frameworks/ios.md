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

<api-table type=iOS component="Switch" />