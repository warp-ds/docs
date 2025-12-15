
### Syntax

```kotlin example
@Composable
fun WarpState(
    modifier: Modifier = Modifier,
    type: WarpStateType? = null,
    painter: Painter? = null,
    icon: WarpIconResource? = null,
    tintColor: Color? = null,
    imageSize: Dp? = null,
    imageContentDescription: String? = null,
    title: String? = null,
    description: String? = null,
    primaryButtonText: String? = null,
    onPrimaryButtonClicked: () -> Unit = {},
    quietButtonText: String? = null,
    onQuietButtonClicked: () -> Unit = {},
    showLogo: Boolean = false
)
```

### Visual options & Usage
There are pre-defined types of WarpState that can be used out-of-the-box. If no type is provided all the fields will be null and you can customize freely.
Supports illustrations by using the painter property.

```kotlin example
enum class WarpStateType {
    NoSearchResults,
    LoadFailed,
    Loading,
    Login,
    Offline,
    Verify
}

WarpState(
    type = WarpStateType.NoSearchResults,
    onPrimaryButtonClicked = { }
)

WarpState(
    type = WarpStateType.Login,
    onPrimaryButtonClicked = { },
    onQuietButtonClicked = { }
)

//Custom state with icon
WarpState(
    modifier = Modifier.fillMaxSize(),
    title = "Custom title",
    description = "Custom text and custom content.",
    icon = icons.shovel,
    primaryButtonText = "Primary action",
    onPrimaryButtonClicked = { },
    quietButtonText = "Secondary action",
    onQuietButtonClicked = { }
)

//Custom state with illustration
WarpState(
    modifier = Modifier.fillMaxSize(),
    title = "Custom state",
    description = "Custom text and custom content.",
    painter = painterResource(R.drawable.warp_placeholder),
    imageContentDescription = "Placeholder illustration",
    primaryButtonText = "Okay",
    onPrimaryButtonClicked = { },
    quietButtonText = "Retry",
    onQuietButtonClicked = { }
        )
```


### Legacy support
Not supported

### Parameters

<api-table type=android component="State" />
