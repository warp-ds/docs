# Divider - Frameworks
A divider creates separation of content.

## Android

<FrameworkTabs 
  :tabs="[
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="Android" 
/>

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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the divider |
| orientation | Orientation.Horizontal   Orientation.Vertical | Orientation.Horizontal | Orientation of the divider |
| dashed | Boolean | false | Style of the divider, solid if false |