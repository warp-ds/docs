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

<api-table type=android component="Radio" />

### Parameters Radio Group

<api-table type=android component="RadioGroup" />

