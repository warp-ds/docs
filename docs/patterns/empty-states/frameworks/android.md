# Empty states - Frameworks

Empty states are used to fill spaces when no content can be shown to the user, or is temporarily empty due to the nature of the feature.

<ComponentsStatus />

## Android

<FrameworkTabs />

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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the state component |
| type | WarpStateType.NoSearchResults   WarpStateType.LoadFailed   WarpStateType.Offline   WarpStateType.Login   WarpStateType.Verify   WarpStateType.Loading | null | Pre-defined type of the state |
| painter | Painter | null | Painter for the illustration of the state component |
| icon | WarpIconResource | null | Icon for the state component |
| tintColor | Color | null | Icon color for the state component |
| imageSize | Dp | null | Image size |
| imageContentDescription | String | null | Content description of the illustration |
| title | String | null | Title to be displayed in the state |
| description | String | null | Description text to be displayed in the state |
| primaryButtonText | String | null | Text to be displayed on the primary button |
| onPrimaryButtonClicked | `() -> Unit` | null | Action when primary button is clicked |
| quietButtonText | String | null | Text to be displayed on the quiet button |
| onQuietButtonClicked | `() -> Unit` | null | Action when quiet button is clicked |
| showLogo | Boolean | false | Toggle to show the Vend Logo |

<component-questions />