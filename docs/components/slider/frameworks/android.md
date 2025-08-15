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
## General functionality
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

## Visual options
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

<api-table type=android component="Slider" />