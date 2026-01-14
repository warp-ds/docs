# Slider - Frameworks
Sliders allow users to adjust a numeric value within a given range.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpSlider(
    modifier: Modifier = Modifier,
    value: Float = 0f,
    onValueChange: (Float) -> Unit,
    valueRange: ClosedFloatingPointRange<Float> = 0f..1f,
    enabled: Boolean = true,
    onValueChangeFinished: (() -> Unit)? = null,
    showRange: Boolean = false,
    rangeStartText: String? = null,
    rangeEndText: String? = null,
    showTooltip: Boolean = true,
    formattedTooltipText: String? = null,
    @IntRange(from = 0) steps: Int = 0,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)
```
### General functionality
The slider accepts a range of floats as values and returns the selected value in the onValueChange method.
Basic usage example:

```kotlin example
var value by remember { mutableFloatStateOf(33f) }
val values = 0f..100f
        
WarpSlider(
    value = value,
    onValueChange = { value = it },
    valueRange = values,
    )
```

### Visual options
The slider can show a tooltip with the currently selected value above the thumb when dragging. You can pass a custom formatted text to be shown on the tooltip, but if not provided the values toString() method will be used. It can also show indicators below the track showing the total possible range of values. It's possible to pass a custom range starting and/or ending text. If nothing is passed, the values toString() method will be used.


```kotlin example
WarpSlider(
    modifier = Modifier.padding(horizontal = dimensions.space2),
    value = value,
    onValueChange = { value = it },
    valueRange = values,
    showRange = true,
    rangeStartText = values.start.roundToInt().toString(),
    rangeEndText = values.endInclusive.roundToInt().toString(),
    showTooltip = true,
    formattedTooltipText = "${value.roundToInt()}"
)
```

### Legacy support

Not supported.


### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| onValueChange | `(Float) -> Unit` |  | The function to be invoked when a value is selected |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the slider |
| value | Float | 0f | The pre-selected value |
| valueRange | ClosedFloatingPointRange | 0f..1f | The value range |
| enabled | Boolean | true | Disables the slider if false |
| onValueChangeFinished | `(() -> Unit)` | null | The function to be invoked when value selection is done |
| rangeStartText | String? | null, but if showRange is true, it will be the first value of the range using its toString() method | The string displayed as starting value |
| rangeEndText | String? | null, but if showRange is true, it will be the last value of the range using its toString() method | The string displayed as end value |
| formattedTooltipText | String? | null, but if showTooltip is true, it will be the current value of the slider using its toString() method | The string displayed in the tooltip |
| showTooltip | Boolean | true | Whether to show the tooltip with the current value when dragging |
| showRange | Boolean | false | Whether to show range indicators below the slider |
| steps | @IntRange(from = 0) | 0 | Amount of steps that the slider can snap to |
| interactionSource | MutableInteractionSource | MutableInteractionSource | The interaction source to be used for the start thumb |