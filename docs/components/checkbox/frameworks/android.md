# Checkbox - Frameworks
Checkboxes allow users to select one or more options from a number of choices.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
fun WarpCheckbox(
    modifier: Modifier = Modifier,
    label: String,
    extraText: String? = null,
    slot: @Composable (() -> Unit)? = null,
    onCheckedChange: ((Boolean) -> Unit) = {},
    style: WarpCheckboxStyle = WarpCheckboxStyle.Default,
    enabled: Boolean = true,
    checked: Boolean = false,
    isError: Boolean = false
)

fun WarpCheckboxGroup(
    modifier: Modifier = Modifier,
    orientation: Orientation = Orientation.Vertical,
    title: String? = null,
    options: List<String>,
    selectedOptions: List<String>? = null,
    helpText: String? = null,
    enabled: Boolean = true,
    isError: Boolean = false,
    onOptionsSelected: (MutableList<String>) -> Unit
)
```

Currently we support a standalone checkbox and a group. There is support for optional title and help text when using the checkbox group. Supported orientations are Orientation.Vertical and Orientation.Horizontal. Vertical is the default.

```kotlin example
WarpCheckbox(
    text = "Check this!",
    onCheckedChange = { }
    )

val checkboxOptions = listOf("Option 1", "Option 2", "Option 3", "Option 4", "Option 5")
val preSelectedOptions = listOf("Option 1", "Option 3")
val onOptionsSelected = remember { mutableListOf(checkboxOptions) }

WarpCheckboxGroup(
    title = "Vertical",
    helpText = "Help text",
    orientation = Orientation.Vertical,
    options = checkboxOptions,
    selectedOptions = preSelectedOptions,
    onOptionsSelected = { onOptionsSelected },
    isError = false
)
```

The default style for the checkbox is WarpCheckboxStyle.Neutral and will be used if nothing is passed in the style param.
There are three types of checkbox styles:

```kotlin example
WarpCheckboxStyle {
    Neutral,
    Disabled,
    Negative,
}
```

Label is mandatory, but an extraText can be displayed as well if provided. The text style will be body and the color will be text.subtle by default.

```kotlin example
WarpCheckbox(
    text = "Check this!",
    extraText = "(Optional)",
    onCheckedChange = { }
    )
```

To display a disabled checkbox - either set the style to WarpCheckboxStyle.Disabled or set enabled to false. Same approach for error state.

```kotlin example
WarpCheckbox(
    text = "Check this!",
    style = WarpCheckboxStyle.Disabled,
    onCheckedChange = { }
    )

WarpCheckbox(
    text = "Check this!",
    onCheckedChange = { },
    enabled = false,
    )

WarpCheckbox(
    text = "Error",
    onCheckedChange = { },
    isError = true,
    )
```

It is possible to pass a custom Composable using the slot param. An icon next to the label can simply be displayed as follows:

```kotlin example
WarpCheckbox(
    text = "Check this!",
    extraText = "(Optional)",
    onCheckedChange = { },
    slot = {
            Icon(
            imageVector = Icons.Filled.AccountCircle,
            contentDescription = "Content description for the leading icon",
            tint = colors.icon.default
            )
        }
    )
```

### Legacy support
To support layouts still written in xml the WarpCheckbox can be used as a custom view. To add functionality, set onCheckChanged listener. Slot composable can be added only programmatically. Horizontal or vertical group is not supported.

```kotlin example
var slot: @Composable (() -> Unit)? = null

fun setOnCheckedChangeListener(onCheckedChangeListener: ((Boolean) -> Unit))
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpCheckboxView
    android:id="@+id/warp_checkbox_disabled_selected"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_margin="@dimen/space2"
    app:checkboxEnabled="true"
    app:checkboxLabel="Selected checkbox"
    app:checkboxExtraText="Extra text"
    app:checked="true"
    app:checkboxIsError="false"
    app:checkboxEnabled="true"
    app:warpCheckboxStyle="neutral" />
```

### Parameters
### Checkbox

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed next to the checkbox |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the checkbox |
| onCheckedChange | `(Boolean) -> Unit` |  | Lambda to be invoked when checked or unchecked |
| style | WarpCheckboxStyle.Neutral  WarpCheckboxStyle.Disabled  WarpCheckboxStyle.Neutral | WarpCheckboxStyle.Neutral | Sets the appearance of the checkbox |
| enabled | boolean | true | Whether the checkbox is enabled or not |
| checked | boolean | false | Whether the checkbox is checked or not |

### CheckboxGroup

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | List |  | The list of texts to be displayed next to the checkboxes |
| onOptionsSelected | `(MutableList) -> Unit` |  | The lambda to be invoked when clicked on a checkbox. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the checkbox group |
| orientation | Orientation.Vertical   Orientation.Horizontal | Orientation.Vertical | Sets the orientation for the checkbox group. Class is found in the androidx.compose.foundation.gestures package |
| title | String | null | The title to be displayed on top of the checkbox group |
| selectedOptions | List | null | The selected options in the checkbox group |
| helpText | String | null | The text displayed below the checkbox group |
| enabled | boolean | true | Whether the checkbox group is enabled or not |
| isError | boolean | false | Shows the checkbox group in error state if true |

<component-questions />