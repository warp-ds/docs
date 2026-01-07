# Spinner - Frameworks
A spinner informs users about the loading of content.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift
Warp.Spinner(
    size: SpinnerSize = .default,
    duration: CGFloat = 1,
    lineWidth: CGFloat = 3
)
```
```swift
Warp.Spinner(size: .large)
```

### Visual options
There are a variety of variants supported for the Spinner component:

```swift
enum Warp.SpinnerSize {        
    case small
    case `default`
    case large
    case custom(Double)
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Spinner(size: .large).uiView
```

### Parameters

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | Warp.SpinnerSize | .default | Size of the `Spinner`. Use one of the predefined `SpinnerSize` values: `.small`, `.default`, `.large`, or `.custom`. |
| duration | CGFloat | 1 | Duration of Spinner animation |
| lineWidth | CGFloat | 3 | The thickness of the `Spinner` |