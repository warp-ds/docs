# Tooltip - Frameworks
A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpTooltip(
    modifier: Modifier = Modifier,
    state: WarpTooltipState,
    text: String,
    edge: Edge = Edge.Top,
    horizontalOffset: Dp = 0.dp,
    verticalOffset: Dp = 0.dp,
    inline: Boolean = false,
    anchorView: @Composable (() -> Unit)? = null,
)
```

### Visual options 
The tooltip will be displayed as a popup and it's arrow will be pointing towards the center of the anchor view, the edge - direction in which the tooltip will be pointing - must be provided as a param. It is also possible to place the tooltip as you wish by setting the inline param to true.


```kotlin example
val topState = remember { WarpTooltipState(false) }

WarpTooltip(
    modifier = Modifier.padding(horizontal = dimensions.space1),
    state = topState,
    text = "Top",
    edge = Edge.Top
) {
    WarpButton(
        text = "Top Tooltip",
        onClick = { topState.isVisible = !topState.isVisible })
}

```

### Usage

Use the WarpTooltipState class to toggle between show & hide.
Use the Edge class to choose the arrow direction.
When using the inline Tooltip, no anchor is needed, you place the Tooltip as any Composable.

```kotlin example

class WarpTooltipState(isVisible: Boolean = false) {
    var isVisible: Boolean by mutableStateOf(isVisible)
}

enum class Edge {
    Top,
    Bottom,
    Leading,
    Trailing
}

```



### Legacy support
Not supported

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed in the tooltip |
| state | WarpTooltipState |  | The state of the tooltip. If visible or not |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the tooltip |
| edge | Edge.Top   Edge.Bottom   Edge.Leading   Edge.Trailing | Edge.Top | Edge that determines the direction of the arrow |
| horizontalOffset | Dp | 0.dp | Horizontal offset for the tooltip |
| verticalOffset | Dp | 0.dp | Vertical offset for the tooltip |
| inline | Boolean | false | Shows the tooltip as a standalone inline view |
| anchorView | `@Composable () -> Unit` | null | The anchor which the tooltip points to |
