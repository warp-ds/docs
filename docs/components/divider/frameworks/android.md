### Syntax

```kotlin
@Composable
fun WarpDivider(
    modifier: Modifier = Modifier,
    orientation: Orientation = Orientation.Horizontal,
    dashed: Boolean = false
)
```


### Visual options
Warp supports horizontal and vertical dividers. The divider can also be either solid or dashed.
```kotlin
WarpDivider() // Basic usage, will fill width of parent
WarpDivider(
    modifier = Modifier.padding(dimensions.space2),
    orientation = Orientation.Vertical,
    dashed = true
)
```

### Legacy support
Not supported


### Parameters

<api-table type=android component="Divider" />