
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

<api-table type=android component="TabRow" />
<api-table type=android component="Tab" />

