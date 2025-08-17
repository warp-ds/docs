

### Syntax

```swift example
Warp.Button(
    title: String,
    leadingIcon: Warp.Icon? = nil,
    trailingIcon: Warp.Icon? = nil,
    action: @escaping () -> Void,
    type: Warp.ButtonType = .primary,
    size: Warp.ButtonSize = .big,
    isEnabled: Bool = true,
    fullWidth: Bool = false,
    isLoading: Bool = false
)
```

```swift example
Warp.Button(title: "Save") { /* Your action goes here */ }
```

### Visual options

There are a variety of different button types and sizes. It also supports disabled or loading state. It can contain a title and leading/trailing icons.

```swift example
enum Warp.ButtonType {
    /// Primary button style, used for the main action on a screen.
    case primary
    /// Secondary button style, typically used for less prominent actions, styled as subtitle or caption buttons.
    case secondary
    /// Quiet button style, used for plain buttons without borders, suitable for actions with minimal emphasis.
    case quiet
    /// Critical button style, used for red alert or destructive actions that require attention.
    case critical
    /// Critical Quiet button style, used for plain red alert or destructive buttons without borders.
    case criticalQuiet
    /// Utility button style, used for supplementary or supporting actions, often with a neutral appearance.
    case utility
    /// Utility Quiet button style, used for plain buttons related to supplementary or supporting actions without borders.
    case utilityQuiet
    /// Utility overlay button style, used for actions that overlay other content, often with a transparent or semi-transparent background.
    case utilityOverlay 
}

enum Warp.ButtonSize {
    case big
    case small
}
```

### Loading/In progress

Used for visual feedback that the action the user triggered is loading.

```swift example
Warp.Button(
    title: "Saving",
    action: {},
    isLoading: true
)
```

### Disabled

Disabled is an anti-pattern and is not supported. There will ALWAYS be users who
don't understand why an element is disabled, or users who can't even see that it
is disabled because of poor lighting conditions or other reasons.

```swift example
Warp.Button(
    title: "Save",
    action: {},
    isEnabled: false
)
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Button(title: "Save") { /* Your action goes here */ }.uiView
```

### Parameters

<api-table type=iOS component="Button" />