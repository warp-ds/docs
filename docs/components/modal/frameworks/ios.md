# Modal 

## iOS

### Syntax

```swift example
Warp.Modal(
    title: String,
    subtitle: String? = nil,
    bodyText: String,
    primaryButton: ButtonConstructor? = nil,
    secondaryButton: ButtonConstructor? = nil,
    hasCloseButton: Bool = false,
    onDismiss: (() -> Void)? = nil,
    isPresented: Binding<Bool>
)
```

ButtonConstructor is a typealias for `(title: String, action: () -> Void)`.

You can create the `Modal` yourself or add it as a modifier to your view.

```swift example
Warp.Modal(
    title: "Modal",
    bodyText: "Body goes here",
    isPresented: $modalIsPresented
)

.warpModal(
    title: "Modal",
    bodyText: "Body goes here",
    dismissOnClickOutside: false,
    isPresented: $modalIsPresented
)
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Modal(
    title: "Modal",
    bodyText: "Body goes here",
    isPresented: $modalIsPresented
).uiView
```

### Parameters

<api-table type=iOS component="Modal" />
