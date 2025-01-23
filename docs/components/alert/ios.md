
## Syntax

```swift example
Warp.Alert(
    style: Warp.AlertStyle,
    title: String,
    subtitle: String,
    link: ButtonConstructor? = nil,
    primaryButton: ButtonConstructor? = nil,
    secondaryButton: ButtonConstructor? = nil
)
```

ButtonConstructor is a typealias for `(title: String, action: () -> Void)`.

```swift example
Warp.Alert(
    style: .critical,
    title: "This is the critical variant of the alert component",
    subtitle: "With an additional description"
)
```

There are four types of alert styles:

```swift example
enum Warp.AlertStyle {
    /// Used to display messages that provide the user with general information.
    case info
    /// Used to indicate that something is not working as expected or might need attention.
    case warning
    /// Used to indicate a severe problem or error that requires immediate attention.
    case critical
    /// Used to indicate that an action was successful or that a task was completed successfully.
    case success
}
```

It is possible to add an optional link text, primary button and a secondary button or all together.
```swift example
Warp.Alert(
    style: .critical,
    title: "This is the critical variant of the alert component",
    subtitle: "With an additional description",
    link: (title: "Link to more information", action: {}),
    primaryButton: (title: "Button", action: {}),
    secondaryButton: (title: "Button", action: {})
)
```


### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift exmaple
Warp.Alert(
    style: .critical,
    title: "This is the critical variant of the alert component",
    subtitle: "With an additional description"
).uiView
```

### Parameters

<api-table type=iOS component="Alert" />

