
## Syntax

```kotlin example
@Composable
fun WarpPopover(
    modifier: Modifier = Modifier,
    title: String,
    body: String,
    state: WarpPopoverState,
    edge: Edge = Edge.Top,
    horizontalOffset: Dp = 0.dp,
    verticalOffset: Dp = 0.dp,
    inline: Boolean = false,
    dismissPopoverOnClickOutside: Boolean = true,
    onDismiss: () -> Unit = {},
    anchorView: @Composable (() -> Unit)? = null,
)
```

## Visual options 
The popover will be displayed as a popup and its arrow will be pointing towards the center of the anchor view, the edge - direction in which the popover will be pointing - must be provided as a param. It is also possible to place the popover as you wish by setting the inline param to true.


```kotlin example
val topState = remember { WarpPopoverState(false) }

WarpPopover(
    modifier = Modifier.padding(horizontal = dimensions.space1),
    state = topState,
    title = "Top Popover",
    body = "Top Popover body text",
    edge = Edge.Top
) {
    WarpButton(
        text = "Top Popover",
        onClick = { topState.isVisible = !topState.isVisible })
}

```

### Usage

Use the WarpPopoverState class to toggle between show & hide.
Use the Edge class to choose the arrow direction.
When using the inline Popover, no anchor is needed, you place the Popover as any Composable.

```kotlin example

class WarpPopoverState(isVisible: Boolean = false) {
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

<api-table type=android component="Popover" />

