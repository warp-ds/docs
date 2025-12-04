# Radio

## Android

### Syntax

```kotlin example
fun WarpRadio(
    modifier: Modifier = Modifier,
    label: String,
    selected: Boolean = false,
    isError: Boolean = false,
    enabled: Boolean = true,
    extraText: String? = null,
    slot: @Composable (() -> Unit)? = null,
    onClick: (() -> Unit)? = null,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)

fun WarpRadioGroup(
    modifier: Modifier = Modifier,
    orientation: Orientation = Orientation.Vertical,
    title: String? = null,
    options: List<String>,
    selectedOption: String? = null,
    helpText: String? = null,
    enabled: Boolean = true,
    isError: Boolean = false,
    onOptionSelected: (String) -> Unit
)
```

There is support for standalone radio component as well as a radio group.

```kotlin example
var selected by remember { mutableStateOf(false) }

WarpRadio(
    label = "Radio with extraText",
    selected = selected,
    enabled = true,
    extraText = "(Extra)",
    onClick = { selected = !selected }
    )


val radioOptions = listOf("Option 1", "Option 2", "Option 3", "Option 4", "Option 5")
val (selectedOption, onOptionSelected) = remember { mutableStateOf(radioOptions[0]) }

WarpRadioGroup(
    title = title,
    options = radioOptions,
    orientation = orientation,
    selectedOption = selectedOption,
    enabled = enabled,
    isError = isError,
    onOptionSelected = onOptionSelected,
    helpText = "Required"
    )
```
There is support for optional title and help text when using the radio group. Supported orientations are Orientation.Vertical and Orientation.Horizontal. Vertical is the default.



### Legacy support
To support layouts still written in xml the Radio can be used as a custom view. Adding a composable slot must be done programmatically.
Horizontal or vertical group is not supported.

```kotlin example
var slot: @Composable (() -> Unit)? = null
    set(value) {
        field = value
        disposeComposition()
    }

fun setOnClickListener(onClick: OnClickListener?)
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpRadioView
    android:id="@+id/radio"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginTop="@dimen/space2"
    app:radioSelected="false"
    app:radioIsError="false"
    app:radioExtraText="Extra"
    app:radioEnabled="true"
    app:radioLabel="Radio button" />
```

### Parameters Radio

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | String |  | The text to be displayed next to the radio |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the radio |
| selected | boolean | false | Whether the radio is selected or not |
| isError | boolean | false | Shows the radio in error state if true |
| enabled | boolean | true | Whether the radio is enabled or not |
| extraText | String? | null | The optional text to be displayed next to the label |
| slot | `@Composable (() -> Uni)?` | null | The composable that will be displayed next to the label or extraText if provided |
| onClick | `() -> Unit` | null | The lambda to be invoked when clicked. |
| interactionSource | MutableInteractionSource | MutableInteractionSource | MutableInteractionSource represents a stream of Interactions corresponding to events emitted by a component |

### Parameters Radio Group

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | List |  | The list of texts to be displayed next to the radio buttons |
| onOptionSelected | `(String) -> Unit` |  | The lambda to be invoked when clicked on a radio. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the radio group |
| orientation | Orientation.Vertical   Orientation.Horizontal | Orientation.Vertical | Sets the orientation for the radio group. Class is found in the androidx.compose.foundation.gestures package |
| title | String | null | The title to be displayed on top of the radio group |
| selectedOption | String | null | The selected option in the radio group |
| helpText | String | null | The text displayed below the radio group |
| enabled | boolean | true | Whether the radio group is enabled or not |
| isError | boolean | false | Shows the radio group in error state if true |

