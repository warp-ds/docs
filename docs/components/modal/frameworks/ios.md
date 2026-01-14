# Modal - Frameworks
A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

<ComponentsStatus />

## iOS

<FrameworkTabs />

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The main title text to be displayed. |
| bodyText | String |  | The main body text content of the modal. |
| isPresented | Binding Bool |  | A binding to control the visibility of the modal. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| subtitle | String? | nil | An optional subtitle text to provide additional context or information. |
| primaryButton | `(title: String, action: () -> Void)?` | nil | An optional provider for defining the primary button. |
| secondaryButton | `(title: String, action: () -> Void)?` | nil | An optional provider for defining the secondary button. |
| hasCloseButton | Bool | false | A Boolean value indicating whether a close button should be shown. |
| dismissOnClickOutside | Bool | true | Determines whether the component should be dismissed when the user clicks outside of it. |
| onDismiss | `(() -> Void)?` | nil | Action to be executed when the Modal is dismissed, either by pressing the Close button or by clicking outside the Modal. |

<component-questions />