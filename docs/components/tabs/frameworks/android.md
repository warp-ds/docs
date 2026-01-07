# Tabs - Frameworks
Tabs are used to group content, allowing users to navigate views without.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpTabRow(
    selectedTabIndex: Int,
    modifier: Modifier = Modifier,
    scrollable: Boolean = false,
    tabs: @Composable () -> Unit
){
    @Composable
    fun WarpTab(
        modifier: Modifier = Modifier,
        selected: Boolean,
        onClick: () -> Unit = {},
        text: String,
        icon: WarpIconResource? = null,
        interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
    )
}
```

### Structure
The WarpTabs component consists of WarpTabRow which holds multiple WarpTab objects. The tabs can be either fixed or scrollable. The tabs can show either a title or text together with an icon. The icon is always on the left of the text.

```kotlin example
var selectedTab by remember { mutableStateOf(0) }
WarpTabRow(
    scrollable = true,
    selectedTabIndex = selectedTab
    ) {
            WarpTab(
                selected = selectedTab == 0,
                onClick = { selectedTab = 0 },
                icon = icons.animalPaw,
                text = "Option 1"
            )
            WarpTab(
                selected = selectedTab == 1,
                onClick = { selectedTab = 1 },
                text = "Option 2"
            )
            WarpTab(
                selected = selectedTab == 2,
                onClick = { selectedTab = 2 },
                text = "Option 3"
            )
        }
```



### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| tabs | `@Composable () -> Unit` |  | `WarpTab` objects to display as selectable tabs. |
| selectedTabIndex | Int |  | Index of the currently selected tab. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | The modifier for the TabRow. |
| scrollable | Boolean | false | If set to true, tabs can be scrolled horizontally. |
#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | Title of the tab |
| selected | Boolean |  | If the tab is selected or not |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | WarpIconResource | null | Icon displayed before the title. |
| modifier | Modifier | Modifier | The modifier for the Tab. |
| onClick | `() -> Unit` | {} | The function to be invoked when clicked |
| interactionSource | MutableInteractionSource | MutableInteractionSource | The interaction source to be used for the tab. |

