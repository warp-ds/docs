# Confirmation dialog - iOS

A confirmation dialog presents a set of choices in response to a user-initiated action, using the native iOS action sheet mechanism.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

Apply the `.warpConfirmationDialog()` modifier to any view. The dialog is presented when `isPresented` becomes `true`.

```swift example
someView
    .warpConfirmationDialog(
        title: String,
        message: String? = nil,
        actions: [Warp.ConfirmationDialog.Action],
        isPresented: Binding<Bool>
    )
```

### Basic usage

```swift example
Button("Options") {
    showOptions = true
}
.warpConfirmationDialog(
    title: "Choose an action",
    actions: [
        Warp.ConfirmationDialog.Action(title: "Share") { share() },
        Warp.ConfirmationDialog.Action(title: "Archive") { archive() }
    ],
    isPresented: $showOptions
)
```

### With message

```swift example
Button("Delete") {
    showDeleteConfirmation = true
}
.warpConfirmationDialog(
    title: "Delete photo?",
    message: "This photo will be removed from your library.",
    actions: [
        Warp.ConfirmationDialog.Action(title: "Delete", style: .destructive) { deletePhoto() }
    ],
    isPresented: $showDeleteConfirmation
)
```

A Cancel button is provided automatically by the system. Do not add one manually.

### Action styles

```swift example
enum Warp.ConfirmationDialog.Action.Style {
    /// A standard action button.
    case `default`
    /// A destructive action, displayed in red.
    case destructive
}
```

### Parameters

#### Modifier props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | | The title displayed at the top of the dialog. Names the decision. |
| message | String? | nil | Optional message displayed below the title with additional context. |
| actions | [Warp.ConfirmationDialog.Action] | | The actions to display. The system appends a Cancel button automatically. |
| isPresented | Binding\<Bool\> | | Controls the dialog's visibility. Set to `true` to present, `false` to dismiss. |

#### Warp.ConfirmationDialog.Action

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | | The action button label. Use a verb ("Delete", "Archive", "Share"). |
| style | Style | `.default` | Visual style of the button. Use `.destructive` for irreversible actions. |
| handler | () -> Void | | Closure executed when the action is tapped. |

<component-questions />
