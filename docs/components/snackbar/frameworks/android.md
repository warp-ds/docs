# Snackbar - Android

A Snackbar shows brief user feedback messages that overlay content, with an optional action such as Undo.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpSnackbar(
    snackbarData: SnackbarData,
    modifier: Modifier = Modifier,
    actionPlacement: WarpSnackbarActionPlacement = WarpSnackbarActionPlacement.Auto
)
```

### Visual options

The Snackbar component is used together with `SnackbarHost` and `SnackbarHostState` to display brief messages at the bottom of the screen. Messages are configured using `WarpSnackbarVisuals`, which supports different types (Positive, Negative, Warning, Info, Neutral) with corresponding icons.

### Basic usage

Set up a `SnackbarHostState` and `SnackbarHost` within your scaffold:

```kotlin example
val snackbarHostState = remember { SnackbarHostState() }
val scope = rememberCoroutineScope()

WarpScaffold(
    snackbarHost = {
        SnackbarHost(hostState = snackbarHostState) { data ->
            WarpSnackbar(snackbarData = data)
        }
    }
) {
    // Your content
    WarpButton(
        text = "Show snackbar",
        onClick = {
            scope.launch {
                snackbarHostState.showSnackbar(
                    WarpSnackbarVisuals(
                        message = "This is a message"
                    )
                )
            }
        }
    )
}
```

### Snackbar types

Use different types to indicate the nature of the message:

```kotlin example
// Positive - for success messages
WarpSnackbarVisuals(
    message = "Item saved successfully",
    type = WarpSnackbarType.Positive
)

// Negative - for errors
WarpSnackbarVisuals(
    message = "Failed to delete item",
    type = WarpSnackbarType.Negative
)

// Warning - for warnings
WarpSnackbarVisuals(
    message = "Connection unstable",
    type = WarpSnackbarType.Warning
)

// Info - for informational messages
WarpSnackbarVisuals(
    message = "New version available",
    type = WarpSnackbarType.Info
)

// Neutral - default, no specific state
WarpSnackbarVisuals(
    message = "Settings updated",
    type = WarpSnackbarType.Neutral()
)
```

### With action button

Add an action button and handle the user's response:

```kotlin example
scope.launch {
    val result = snackbarHostState.showSnackbar(
        WarpSnackbarVisuals(
            message = "Item deleted",
            actionLabel = "Undo",
            duration = SnackbarDuration.Long
        )
    )
    when (result) {
        SnackbarResult.ActionPerformed -> {
            // User clicked the action button
            restoreItem()
        }
        SnackbarResult.Dismissed -> {
            // Snackbar was dismissed
        }
    }
}
```

**Note:** Snackbars with an action button cannot use `SnackbarDuration.Short` - use `Long` or `Indefinite` instead.

### Duration options

Control how long the snackbar is displayed:

```kotlin example
// Short duration (4 seconds) - default for messages without actions
WarpSnackbarVisuals(
    message = "Quick message",
    duration = SnackbarDuration.Short
)

// Long duration (10 seconds) - default for messages with actions
WarpSnackbarVisuals(
    message = "Processing complete",
    duration = SnackbarDuration.Long
)

// Indefinite - stays until dismissed or action is clicked
WarpSnackbarVisuals(
    message = "Review required",
    actionLabel = "Review",
    duration = SnackbarDuration.Indefinite
)
```

**Note:** `Indefinite` snackbars must have either a dismiss action (X button) or an action button to allow the user to dismiss them.

### Dismiss action

By default, snackbars include a dismiss button (X icon). You can disable it:

```kotlin example
WarpSnackbarVisuals(
    message = "Auto-save enabled",
    withDismissAction = false,
    duration = SnackbarDuration.Short
)
```

### Action button placement

By default (`WarpSnackbarActionPlacement.Auto`), action buttons are automatically placed on a new line when the action text is 10 or more characters. You can override this for edge cases:

```kotlin example
WarpScaffold(
    snackbarHost = {
        SnackbarHost(hostState = snackbarHostState) { data ->
            // Force action button on same line even for long text
            WarpSnackbar(
                snackbarData = data,
                actionPlacement = WarpSnackbarActionPlacement.Inline
            )
        }
    }
) {
    // Your content
}

// Or force action button on new line even for short text
WarpSnackbar(
    snackbarData = data,
    actionPlacement = WarpSnackbarActionPlacement.NewLine
)
```

Available placement options:
- `Auto` (default) - Automatically places action on new line when text is ≥10 characters
- `Inline` - Always places action on the same line as the message
- `NewLine` - Always places action on a new line below the message

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| snackbarData | SnackbarData |  | Data about the snackbar. Use `WarpSnackbarVisuals` to configure the message, type, actions, and duration |

#### Optional props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the snackbar |
| actionPlacement | WarpSnackbarActionPlacement | WarpSnackbarActionPlacement.Auto | Controls action button placement: Auto (based on text length), Inline (always same line), or NewLine (always new line) |

#### WarpSnackbarVisuals parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | String |  | The message to display (required, cannot be blank) |
| type | WarpSnackbarType | WarpSnackbarType.Neutral() | The type of snackbar: Positive, Negative, Warning, Info, or Neutral |
| actionLabel | String? | null | Optional label for the action button |
| withDismissAction | Boolean | true | Whether to show the dismiss (X) button |
| duration | SnackbarDuration | Short (or Long if actionLabel is set) | How long to display: Short, Long, or Indefinite |

<component-questions />
