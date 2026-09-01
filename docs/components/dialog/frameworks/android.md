# Dialog - Android
A dialog is a focused overlay that requests a single decision or a short, critical message before the user continues.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpDialog(
    title: String,
    body: String,
    onDismiss: () -> Unit,
    modifier: Modifier = Modifier,
    icon: WarpDialogIcon? = null,
    primaryButtonText: String? = null,
    onPrimaryButtonClick: (() -> Unit)? = null,
    secondaryButtonText: String? = null,
    onSecondaryButtonClick: (() -> Unit)? = null,
    dismissOnClickOutside: Boolean = true,
    dismissOnBackPress: Boolean = true,
)
```

### Basic usage
Show and dismiss the dialog by hoisting a boolean state.

```kotlin example
var showDialog by remember { mutableStateOf(false) }

WarpButton(
    text = "Delete item",
    onClick = { showDialog = true },
)

if (showDialog) {
    WarpDialog(
        title = "Delete this item?",
        body = "This action cannot be undone.",
        primaryButtonText = "Delete",
        onPrimaryButtonClick = { showDialog = false },
        secondaryButtonText = "Cancel",
        onSecondaryButtonClick = { showDialog = false },
        onDismiss = { showDialog = false },
    )
}
```

### Single button
Omit the secondary action for a simple acknowledgement.

```kotlin example
if (showDialog) {
    WarpDialog(
        title = "Message sent",
        body = "Your reply has been delivered.",
        primaryButtonText = "Got it",
        onPrimaryButtonClick = { showDialog = false },
        onDismiss = { showDialog = false },
    )
}
```

### With an icon
Pass a `WarpDialogIcon.Icon` to render a Warp icon above the title. Per the M3 spec the title is centered when an icon is present.

```kotlin example
if (showDialog) {
    WarpDialog(
        title = "Add to favorites?",
        body = "You can find favorites in your profile.",
        icon = WarpDialogIcon.Icon(icons.starEmpty),
        primaryButtonText = "Confirm",
        onPrimaryButtonClick = { showDialog = false },
        secondaryButtonText = "Cancel",
        onSecondaryButtonClick = { showDialog = false },
        onDismiss = { showDialog = false },
    )
}
```

### With an image
Pass a `WarpDialogIcon.Image` with any `Painter` — from `painterResource(...)`, `rememberVectorPainter(...)`, or `BitmapPainter(...)`.

```kotlin example
if (showDialog) {
    WarpDialog(
        title = "Welcome to FINN",
        body = "A description should be a short, complete sentence.",
        icon = WarpDialogIcon.Image(
            painter = painterResource(R.drawable.finn_logo),
            contentDescription = "FINN logo",
        ),
        primaryButtonText = "Continue",
        onPrimaryButtonClick = { showDialog = false },
        secondaryButtonText = "Not now",
        onSecondaryButtonClick = { showDialog = false },
        onDismiss = { showDialog = false },
    )
}
```

### Icon slot API
The icon slot accepts either a Warp icon or an image.

```kotlin example
sealed interface WarpDialogIcon {
    class Icon(val icon: WarpIconResource) : WarpDialogIcon
    class Image(
        val painter: Painter,
        val contentDescription: String?,
        val contentScale: ContentScale = ContentScale.Fit,
    ) : WarpDialogIcon
}
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The title shown at the top of the dialog. |
| body | String |  | The supporting text below the title. |
| onDismiss | `() -> Unit` |  | Invoked when the dialog is dismissed (scrim tap, back press, or one of the action buttons). |

#### Optional props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier applied to the dialog. |
| icon | WarpDialogIcon? | null | Optional icon or image above the title. Centers the title when set. |
| primaryButtonText | String? | null | Label for the trailing (primary) action. |
| onPrimaryButtonClick | `(() -> Unit)?` | null | Callback for the primary action. |
| secondaryButtonText | String? | null | Label for the leading (secondary) action. |
| onSecondaryButtonClick | `(() -> Unit)?` | null | Callback for the secondary action. |
| dismissOnClickOutside | Boolean | true | Whether tapping the scrim dismisses the dialog. |
| dismissOnBackPress | Boolean | true | Whether pressing back dismisses the dialog. |

<component-questions />
