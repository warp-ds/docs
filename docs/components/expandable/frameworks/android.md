# Expandable - Frameworks
Expandable is a layout component used for creating content that can be expanded and collapsed.

<ComponentsStatus />

## Android

<FrameworkTabs />

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The title to be displayed in the expandable |
| expandedContent | `@Composable () -> Unit` |  | The content to be shown when expanded |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the expandable |
| initiallyExpanded | Boolean | false | If should show expanded content |
| type | WarpExpandableType.Default   WarpExpandableType.Box | WarpExpandableType.Default | Style of the expandable |
