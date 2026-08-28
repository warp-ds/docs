# Alert - iOS
Alerts show high-signal messages meant to be noticed and prompting users.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.AlertStyle |  | The visual style of the alert, which dictates its colors, icons, and overall appearance.  Use one of the predefined `AlertStyle` values: `.info`, `.warning`, `.critical`, or `.success`. |
| title | String |  | The primary text displayed at the top of the alert, used to capture the user's attention. |
| subtitle | String |  | Additional information displayed below the title, used to provide further context to the alert. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| link | `(title: String, action: () -> Void)?` | nil | An optional tuple containing the title and action for a clickable link that appears below the subtitle. |
| primaryButton | `(title: String, action: () -> Void)?` | nil | An optional tuple containing the title and action for a primary button. |
| secondaryButton | `(title: String, action: () -> Void)?` | nil | An optional tuple containing the title and action for a secondary button. |

## Alert dialog

An alert dialog presents critical information and requires an explicit response from the user, using the native iOS alert mechanism.

### Syntax

Apply the `.warpAlert()` modifier to any view. The dialog is presented when `isPresented` becomes `true`.

```swift example
// Without embedded content
someView
    .warpAlert(
        title: String,
        message: String? = nil,
        actions: [Warp.AlertDialog.Action],
        isPresented: Binding<Bool>
    )

// With embedded content (e.g. TextField)
someView
    .warpAlert(
        title: String,
        message: String? = nil,
        actions: [Warp.AlertDialog.Action],
        isPresented: Binding<Bool>
    ) {
        // SwiftUI views rendered above the action buttons
    }
```

### Basic usage

```swift example
Button("Delete account") {
    showDeleteAlert = true
}
.warpAlert(
    title: "Delete account?",
    message: "This action cannot be undone. All your data will be permanently removed.",
    actions: [
        Warp.AlertDialog.Action(title: "Delete", style: .destructive) { deleteAccount() },
        Warp.AlertDialog.Action(title: "Cancel", style: .cancel) { }
    ],
    isPresented: $showDeleteAlert
)
```

### With embedded content

Use the content trailing closure to embed input controls (e.g. `TextField`, `SecureField`) above the action buttons. This is appropriate for rename flows, PIN entry, or short confirmation phrases.

```swift example
Button("Rename item") {
    showRenameAlert = true
}
.warpAlert(
    title: "Rename item",
    actions: [
        Warp.AlertDialog.Action(title: "Save") { saveNewName() },
        Warp.AlertDialog.Action(title: "Cancel", style: .cancel) { }
    ],
    isPresented: $showRenameAlert
) {
    TextField("Name", text: $newName)
}
```

### Action styles

```swift example
enum Warp.AlertDialog.Action.Style {
    /// A standard action button.
    case `default`
    /// A destructive action, displayed in red.
    case destructive
    /// A cancel action, displayed prominently by the system.
    case cancel
}
```

Always include a `.cancel` action. Without it, users have no safe exit from the dialog.

### Parameters

#### Modifier props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | | The title displayed at the top of the dialog. |
| message | String? | nil | Optional message displayed below the title. |
| actions | [Warp.AlertDialog.Action] | | The actions to display as buttons. |
| isPresented | Binding\<Bool\> | | Controls the dialog's visibility. |
| content | @ViewBuilder | EmptyView | Optional SwiftUI views (e.g. TextField) rendered above the action buttons. |

#### Warp.AlertDialog.Action

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | | The button label. Use a verb ("Delete", "Save", "Cancel"). |
| style | Style | `.default` | Visual style. Use `.destructive` for irreversible actions, `.cancel` for the dismiss action. |
| handler | () -> Void | | Closure executed when the action is tapped. |

<component-questions />