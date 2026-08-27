# Alert dialog - iOS

An alert dialog presents critical information and requires an explicit response from the user, using the native iOS alert mechanism.

<ComponentsStatus />

## iOS

<FrameworkTabs />

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
