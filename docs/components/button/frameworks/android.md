# Button

## Android

### Syntax

There are 2 options - button with pre-defined content and custom content. This showcases the pre-defined option with a text and an optional leading or trailing icon.
```kotlin example
@Composable
fun WarpButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    style: WarpButtonStyle = WarpButtonStyle.Primary,
    maxLines: Int = 1,
    loading: Boolean = false,
    @DrawableRes leadingIcon: Int? = null,
    leadingIconContentDescr: String? = null,
    @DrawableRes trailingIcon: Int? = null,
    trailingIconContentDescr: String? = null,
    small: Boolean = false,
    iconModifier: Modifier = Modifier
)

@Composable
fun WarpButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    style: WarpButtonStyle = WarpButtonStyle.Primary,
    maxLines: Int = 1,
    loading: Boolean = false,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    small: Boolean = false
)
```
To add custom content follow this syntax:
```kotlin example
@Composable
fun WarpButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    style: WarpButtonStyle = WarpButtonStyle.Primary,
    loading: Boolean = false,
    small: Boolean = false,
    content: @Composable RowScope.() -> Unit
)
```

### Visual options

The button supports a variety of styles, including a small version for each of these: 
```kotlin example
WarpButtonStyle {
    Primary,
    Secondary,
    Quiet,
    Negative,
    NegativeQuiet,
    Utility,
    UtilityQuiet,
    UtilityOverlay,
}
```

### Primary

The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path. This is the default style.

```kotlin example
WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Primary, 
    text = "Save"
)
```

### Secondary

Secondary buttons are without background, and are often used for secondary actions. Also available as `quiet` style.

```kotlin example
WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Secondary, 
    text = "Save"
)
WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Quiet, 
    text = "Save"
)
```

### Negative

Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button.

```kotlin example
WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Negative, 
    text = "Cancel"
)
```

### Loading/In progress

Used for visual feedback that the action the user triggered is loading.

```kotlin example
var loading by remember { mutableStateOf(false) }
var buttonText by remember { mutableStateOf("Save") }
val onClickAction = { }

WarpButton(
    onClick = onClickAction, 
    style = WarpButtonStyle.Primary, 
    text = buttonText,
    loading = loading
)
```

### Disabled

```kotlin example
var enabled by remember { mutableStateOf(false) }

WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Secondary, 
    text = "Edit",
    enabled = enabled
)
```

### Icon

An optional leading or trailing icon can be displayed at the start of the button text. 
There are 2 options - by supplying a drawable id or by using the WarpIcon component. WarpIcon handles content description for each brand automatically.

```kotlin example
WarpButton(
    onClick = { },
    style = WarpButtonStyle.Secondary,
    text = "With icon",
    leadingIcon = R.drawable.ic_duck,
    leadingIconContentDescr = "Duck icon"
)

WarpButton(
    onClick = { },
    style = WarpButtonStyle.Secondary,
    text = "With icon",
    trailingIcon = R.drawable.clock,
    trailingIconContentDescr = R.string.clock
)

WarpButton(
    onClick = { },
    style = WarpButtonStyle.Secondary,
    text = "With Warp icon",
    leadingIcon = { WarpIcon(icon = icons.clock, size = dimensions.icon.small) }
)
```

### Legacy support
To support layouts still written in xml the WarpButton can be used as a custom view.

```xml example
<com.schibsted.nmp.warp.components.WarpButtonView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:warpButtonStyle="primary"
    app:buttonLeadingIcon="@drawable/duck"
    app:buttonleadingIconContentDescr="@string/duck"
    app:buttonTrailingIcon="@drawable/clock"
    app:buttonTrailingIconContentDescr="@string/clock"
    app:buttonText="Send"
    app:loading="false"
    app:small="false"
    app:enabled="true"/>
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed on the button |
| onClick | `() -> Unit` |  | Lambda to be invoked when clicked |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | WarpButtonStyle.Primary  WarpButtonStyle.Secondary  WarpButtonStyle.Quiet  WarpButtonStyle.Negative  WarpButtonStyle.NegativeQuiet  WarpButtonStyle.Utility  WarpButtonStyle.UtilityQuiet  WarpButtonStyle.UtilityOverlay | WarpButtonStyle.Primary | Controls the appearance of the button |
| enabled | Boolean | true | Sets the button in disabled mode |
| modifier | Modifier | Modifier | Sets the modifier for the button |
| maxLines | Integer | 1 | Limits the lines of the text on the button |
| loading | Boolean | false | Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type |
| leadingIcon | `Int or @Composable () -> Unit` | null | The id of the icon drawable resource or the WarpIcon component to be displayed in the button before the text |
| leadingIconContentDescr | String | null | The content description of the icon |
| trailingIcon | `Int or @Composable () -> Unit` | null | The id of the icon drawable resource or the WarpIcon component to be displayed in the button after the text |
| trailingIconContentDescr | String | null | The content description of the icon |
| small | Boolean | false | Set to show a smaller slimmed version of the button |
| iconModifier | Modifier | Modifier | Sets the modifier for the icon |
