# Select - Frameworks
A select is a form input component that lets users choose one option from a predefined list.

## Android

<!-- Insert framework tabs here !-->

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | String |  | The text displayed currently in the select component |
| onValueChange | `(String) -> Unit` |  | Lambda to be invoked when input value changes |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the select component |
| label | String | null | The text to display as the label above the select component |
| optionalLabel | String | null | The text to display next to the label above the select component |
| enabled | Boolean | true | Sets the select component in disabled mode when false |
| readOnly | Boolean | false | Sets the select component in read-only mode |
| placeholderText | String | null | Text hint that occupies the select component when it is empty |
| helpText | String | null | The text to display as the help text below the select component |
| isError | Boolean | false | Renders the select component in an invalid state |
| items | List? | null | The list of strings displayed in the select component menu |