---
title: 'WARP Android release v.0.0.33'
date: 2024-11-06
---

WarpCallout is here!
---

# Warp Android release 0.0.33

## 2024-11-06

### WarpCallout component

WarpCallout now available in Warp android! Can be either a popover or inline, 4 arrow directions available, closable option as well as dynamic placement given an anchor view. More info on the [tech docs site.](https://warp-ds.github.io/docs/components/callout/)

```kotlin example
val state = remember { CalloutState(false) }

WarpCallout(
    text = "This is a callout",
    edge = Edge.Leading,
    state = state,
    type = CalloutType.Popover,
    size = CalloutSize.Default,
    closable = false,
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
```xml
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

### WarpTextField fix

Kudos to Ali Shariat for making a fix that enables the textfield component to accept minLines param. The default value of minLines remains 1. 
```kotlin example
WarpTextField(
    value = text,
    onValueChange = { text = it },
    placeholderText = "A placeholder",
    label = "A label",
    modifier = Modifier.fillMaxWidth(),
    minLines = 3
)
```
