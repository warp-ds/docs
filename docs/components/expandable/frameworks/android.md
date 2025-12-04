# Expandable

## Android

### Syntax

```kotlin example
@Composable
fun WarpExpandable(
    modifier: Modifier = Modifier,
    title: String,
    initiallyExpanded: Boolean = false,
    type: WarpExpandableType = WarpExpandableType.Default,
    expandedContent: @Composable () -> Unit,
)
```

### Visual options
Can be shown in these styles. Both can be shown either collapsed or expanded to begin with.

```kotlin example
enum class WarpExpandableType {
    Default,
    Box
}
```

### Default

The default style for the expandable is just title with the icon button. The expanded content is a @Composable.

```kotlin example
WarpExpandable(
    title = "Title"
) {
    WarpText("Expandable content")
}
```

### Boxed

Boxed style will show the expandable in a WarpBox with neutral style & gray background. 

```kotlin example
WarpExpandable(
    title = "Title",
    type = WarpExpandableType.Box,
    initiallyExpanded = false
) {
    WarpText("Expandable content")
}
```

### Legacy support
Not supported

### Parameters

<api-table type=android component="Expandable" />
