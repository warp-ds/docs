
## Syntax

```kotlin example
@Composable
fun WarpModal(
    modifier: Modifier = Modifier,
    title: String,
    body: String,
    onDismiss: () -> Unit,
    dismissOnClickOutside: Boolean = true,
    dismissOnBackPress: Boolean = true,
    subtitle: String? = null,
    primaryButtonText: String? = null,
    onPrimaryButtonClick: (() -> Unit)? = null,
    secondaryButtonText: String? = null,
    onSecondaryButtonClick: (() -> Unit)? = null,
    showCloseIcon: Boolean = false
)
```

## Visual options
The default style for the modal requires a title and a body text.
The buttons displayed are WarpButtons using Primary and Secondary style.

### Subtitle

It's possible to add an optional subtitle.

```kotlin example
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "Some important text here, not too long, not too short.",
        subtitle = "Warp",
        primaryButtonText = "Meow",
        onPrimaryButtonClick = { openModal = false },
        secondaryButtonText = "Nope",
        onSecondaryButtonClick = { openModal = false }
    )
}
```

### Single button

It's possible to just show one button.

```kotlin example
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "Wow such button. Much click.",
        subtitle = "Warp",
        primaryButtonText = "Meow",
        onPrimaryButtonClick = { openModal = false }
    )
}
```


### No buttons

It's possible to show a modal without buttons. In this case it is recommended to show the close icon.

```kotlin example
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "No buttons variant",  
        onDismiss = { openModal = false },
        showCloseIcon = true
    )
}
```


### Parameters

<api-table type=android component="Modal" />

