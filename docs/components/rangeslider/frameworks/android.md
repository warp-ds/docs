# Range slider - Frameworks
Range sliders allow users to adjust minimum and maximum numeric values within a given range.

## Android

<FrameworkTabs 
  :tabs="[
    { name: 'React 19', url: './react-19' },
    { name: 'iOS', url: './ios' },
    { name: 'Android', url: './android' },
  ]" 
  activeTab="Android" 
/>

### Syntax

```kotlin example
@Composable
@ExperimentalMaterial3Api
fun WarpRangeSlider(
    modifier: Modifier = Modifier,
    items: List<Any>,
    enabled: Boolean = true,
    initialStartItem: Any? = null,
    initialEndItem: Any? = null,
    onValueChangeFinished: (() -> Unit) = {},
    onLeftValueChanged: ((Any) -> Unit) = {},
    onRightValueChanged: ((Any) -> Unit) = {},
    resetAtStartText: String? = null,
    resetAtEndText: String? = null,
    blockDrag: Boolean = false,
    showTooltips: Boolean = true,
    showRange: Boolean = false,
    startInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    endInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
)
```
### General functionality
The range slider accepts a list of `Any` objects, meaning the values can be anything and will be displayed in the order they are sorted within the list.
The selected value will be returned as a full object in the callback.
Basic usage example:

```kotlin example
val items = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
WarpRangeSlider(
    items = items,
    onRightValueChanged = { },
    onLeftValueChanged = { },
)
```
It is possible to pre-select the range by providing `initialStartItem` or `initialEndItem`. If nothing is provided then the slider will show the full range.
The slider also supports reset values. If provided with `resetAtStartText` and/or `resetAtEndText` the slider will add a `ResetItem` object at the start and/or the end of the list, indicating that the range is being reset. Useful when you need to display values like "Over [value]"
```kotlin example
val items = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
WarpRangeSlider(
    items = items,
    initialStartItem = items[3],
    initialEndItem = items[7],
    onRightValueChanged = { },
    onLeftValueChanged = { },
    resetAtStartText = "Min",
    resetAtEndText = "Max",
)
```
### Visual options
The slider can show tooltips with the currently selected value above the thumbs when dragging. It can also show indicators below the track showing the total possible range of values. 

```kotlin example
val items = listOf(
    "1900",
    "1910",
    "1920",
    "1930",
    "1940",
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
    "2000",
    "2010",
    "2020"
)
WarpRangeSlider(
    items = items,
    onRightValueChanged = { },
    onLeftValueChanged = { },
    showTooltips = true,
    showRange = true
)
```

### Legacy support

Not supported.


### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| items | List |  | The list of values |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the range slider |
| enabled | Boolean | true | Disables the slider if false |
| initialStartItem | Any? | null | The pre-selected start value |
| initialEndItem | Any? | null | The pre-selected end value |
| onValueChangeFinished | `() -> Unit` | {} | The function to be invoked when value selection is done |
| onLeftValueChanged | `(Any) -> Unit` | {} | The function to be invoked when start value is selected |
| onRightValueChanged | `(Any) -> Unit` | {} | The function to be invoked when end value is selected |
| resetAtStartText | String? | null | The string displayed as reset start value |
| resetAtEndText | String? | null | The string displayed as reset end value |
| blockDrag | Boolean | false | Whether to block the drag gesture |
| showTooltips | Boolean | true | Whether to show tooltips with current value when dragging |
| showRange | Boolean | false | Whether to show range indicators below the slider |
| startInteractionSource | MutableInteractionSource | MutableInteractionSource | The interaction source to be used for the start thumb. |
| endInteractionSource | MutableInteractionSource | MutableInteractionSource | The interaction source to be used for the end thumb. |