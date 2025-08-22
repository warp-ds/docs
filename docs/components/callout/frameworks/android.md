
### Syntax

```kotlin example
@Composable
fun WarpCallout(
    text: String,
    state: CalloutState,
    size: CalloutSize = CalloutSize.Default,
    type: CalloutType = CalloutType.Popover,
    inlineModifier: Modifier = Modifier,
    horizontalOffset: Dp = 0.dp,
    verticalOffset: Dp = 0.dp,
    edge: Edge = Edge.Top,
    closable: Boolean = false,
    dismissPopoverOnClickOutside: Boolean = true,
    onDismiss: () -> Unit,
    paddingOffset: Dp? = null,
    anchorView: @Composable (() -> Unit)? = null,
)

```
Basic WarpCallout with a Button anchor:
```kotlin example
val state = remember { CalloutState(false) }

WarpCallout(
    text = "This is a callout",
    state = state,
    onDismiss = { state.isVisible = false },
) {
    WarpButton(
        text = "Show callout",
        onClick = {
            state.isVisible = !state.isVisible
        }
    )
}
```

The callout supports small and default size as well as inline or popup type:

```kotlin example
enum class CalloutType {
    Popover,
    Inline
}

enum class CalloutSize {
    Small,
    Default
}
```

There are four types of edges - the direction in which the arrow will point - available.
If not specified the default will be Edge.Top

```kotlin example
enum class Edge {
    Top,
    Bottom,
    Leading,
    Trailing
}
```
To show/hide the callout you should pass a CalloutState and then toggle the boolean inside the onDismiss and anchor interaction method.

When using the CalloutType.Popover, you can adjust margins by using horizontalOffset and/or verticalOffset, which are 0.dp by default.

The callout accepts an anchor view that will be used to determine the position of the callout. If you use CalloutType.Popover it will automatically place itself pointing to the anchor view depending on the direction of the edge. To correctly display the arrow when the callout cannot be centered, please provide paddingOffset for the parent layout.
To add anchor content:
```kotlin example
val state = remember { CalloutState(false) }

WarpCallout(
    text = "This is a callout",
    edge = Edge.Leading,
    state = state,
    type = CalloutType.Popover,
    horizontalOffset = 8.dp,
    verticalOffset = 8.dp
    size = CalloutSize.Default,
    closable = false,
    paddingOffset = 8.dp,
    onDismiss = { state.isVisible = false },
) {
    WarpButton (
        text = "Show callout",
        onClick = {
            state.isVisible = !state.isVisible
        }
    )
}
```

When using the CalloutType.Inline variant, then use the inlineModifier param to adjust padding.

```kotlin example
val state = remember { CalloutState(false) }

WarpCallout(
    text = "This is a callout",
    state = state,
    type = CalloutType.Inline,
    inlineModifier = Modifier.padding(8.dp),
    edge = Edge.Leading,
    size = CalloutSize.Small,
    closable = true,
    onDismiss = { state.isVisible = false },
) {
    WarpButton(
        text = "Inline",
        onClick = {
            state.isVisible = !state.isVisible
        }
    )
}
```


### Legacy support
To support layouts still written in xml the WarpCallout can be used as a custom view. To add functionality to the onDismiss funtion, set a click listener.
To provide an anchor view you need to set it programmatically as it acceps a @Composable () -> Unit param.

```kotlin example
fun setOnDismissClickListener(onClick: OnClickListener?)
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpCalloutView
android:id="@+id/callout1"
android:layout_width="wrap_content"
android:layout_height="wrap_content"
app:calloutEdge="leading"
app:calloutIsClosable="false"
app:calloutIsVisible="false"
app:calloutSize="small"
app:calloutText="This is the callout text"
app:calloutType="popover"
app:calloutVerticalOffset="0"
app:calloutHorizontalOffset="0" />
```

### Parameters

<api-table type=android component="Callout" />