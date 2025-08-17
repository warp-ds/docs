
### Syntax

```kotlin example
@Composable
fun WarpBadge(
    modifier: Modifier = Modifier,
    text: String,
    style: WarpBadgeStyle = WarpBadgeStyle.Neutral,
    alignmentStyle: WarpBadgeAlignment = WarpBadgeAlignment.None,
    icon: WarpIconResource? = null
)
```

The default style for the badge is Neutral. 

```kotlin example
WarpBadge(
    text = "Success",
    style = WarpBadgeStyle.Success,
    alignment = Alignment.BottomStart
    )
```

There are a variety of styles and alignments supported for the badge component:

```kotlin example
WarpBadgeStyle {
    Info,
    Success,
    Warning,
    Error,
    Disabled,
    Neutral,
    Sponsored,
    Price
}

WarpBadgeAlignment {
    None,
    TopStart,
    TopEnd,
    BottomStart,
    BottomEnd
}
```


### Legacy support
To support layouts still written in xml the WarpBadge can be used as a custom view.

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpBadgeView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Warp badge!"
    app:alignmentStyle="topEnd"
    app:warpBadgeStyle="sponsored" />
```

### Parameters

<api-table type=android component="Badge" />
