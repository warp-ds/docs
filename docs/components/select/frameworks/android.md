### Syntax

```kotlin
@Composable
fun WarpSelect(
    modifier: Modifier = Modifier,
    value: String,
    onValueChange: (String) -> Unit,
    label: String? = null,
    optionalLabel: String? = null,
    enabled: Boolean = true,
    placeholderText: String? = null,
    helpText: String? = null,
    items: List<String>? = null,
    readOnly: Boolean = false,
    expanded: Boolean = false,
    isError: Boolean = false
)
```


### Basic usage
The Select component will show a dropdown list of String values which need to be provided with the items param. The chosen value will be returned in the onValueChange callback.
```kotlin
var choice by remember { mutableStateOf("") }
WarpSelect(
    modifier = Modifier.padding(bottom = dimensions.space3),
    value = choice,
    onValueChange = { choice = it },
    label = "Label",
    placeholderText = "Select an option",
    items = listOf("One", "Two", "Three", "Four", "Five", "Six"),
    helpText = "Help text"
)
```

### Visual options
Select can be displayed as read-only, disabled and in error mode
```kotlin
var choice by remember { mutableStateOf("One") }
WarpSelect(
    modifier = Modifier.padding(bottom = dimensions.space3),
    value = choice,
    onValueChange = { choice = it },
    label = "Label",
    optionalLabel = "Optional",
    placeholderText = "Select an option",
    items = listOf("One", "Two", "Three", "Four", "Five", "Six"),
    helpText = "Help text",
    readOnly = true,
    isError = true,
    enabled = false
)
```

### Legacy support
Not supported


### Parameters

<api-table type=android component="Select" />