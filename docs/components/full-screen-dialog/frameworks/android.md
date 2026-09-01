# Full-screen dialog - Android
A full-screen dialog covers the entire screen with a top navigation bar and a content area, hosting a series of related inputs or tasks.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpFullScreenDialog(
    title: String,
    onDismiss: () -> Unit,
    modifier: Modifier = Modifier,
    dismissOnBackPress: Boolean = true,
    actionText: String? = null,
    onActionClick: (() -> Unit)? = null,
    content: @Composable ColumnScope.() -> Unit,
)
```

`WarpFullScreenDialog` renders a Material 3 full-screen dialog: a top bar with a leading close icon, the title, an optional trailing action, and a content column below.

### Basic usage
The content lambda runs inside a `ColumnScope`, so children stack vertically. The dialog owns the top bar — put form fields, text, or any other Warp composables inside the content slot.

```kotlin example
var showDialog by remember { mutableStateOf(false) }

WarpButton(
    text = "New event",
    onClick = { showDialog = true },
)

if (showDialog) {
    var title by rememberSaveable { mutableStateOf("") }
    var notes by rememberSaveable { mutableStateOf("") }

    WarpFullScreenDialog(
        title = "New event",
        onDismiss = { showDialog = false },
        actionText = "Save",
        onActionClick = { showDialog = false },
    ) {
        WarpText(
            text = "Full-screen dialogs are used for a series of tasks such as creating a calendar entry with a title, date, location, and time.",
            style = WarpTextStyle.Body,
            modifier = Modifier.padding(bottom = dimensions.space3),
        )
        WarpTextField(
            value = title,
            onValueChange = { title = it },
            modifier = Modifier
                .fillMaxWidth()
                .padding(bottom = dimensions.space2),
            label = "Event title",
            placeholderText = "Team offsite",
        )
        WarpTextField(
            value = notes,
            onValueChange = { notes = it },
            modifier = Modifier.fillMaxWidth(),
            label = "Notes",
            placeholderText = "Add any extra details",
        )
    }
}
```

### Without an action
Omit `actionText` and `onActionClick` when the flow does not need a confirmation button — for example, a viewer or an inspector where the user just closes when they are done.

```kotlin example
if (showDialog) {
    WarpFullScreenDialog(
        title = "Details",
        onDismiss = { showDialog = false },
    ) {
        WarpText(
            text = "Read-only content — the user dismisses via the close icon.",
            style = WarpTextStyle.Body,
        )
    }
}
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The title shown next to the close icon. |
| onDismiss | `() -> Unit` |  | Invoked when the dialog is dismissed (close icon or back press). |
| content | `@Composable ColumnScope.() -> Unit` |  | Slot for the body of the dialog. Rendered inside a column with content padding. |

#### Optional props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier applied to the dialog surface. |
| dismissOnBackPress | Boolean | true | Whether pressing back dismisses the dialog. |
| actionText | String? | null | Label for the trailing confirmation action. When null, no action is shown. |
| onActionClick | `(() -> Unit)?` | null | Callback for the trailing action. Required when `actionText` is set. |

<component-questions />
