

### Syntax

```kotlin example
@Composable
fun WarpPageIndicator(
    modifier: Modifier = Modifier,
    pageCount: Int,
    currentPage: Int = 0
)
```
### Usage

Basic usage for the page indicator. Should ideally be used together with a pager. Use a PagerState to indicate the page count and current page.

```kotlin example
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceEvenly
    ) {
        val pagerState = rememberPagerState(pageCount = {5})
        HorizontalPager(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.height(400.dp).fillMaxWidth(),
            state = pagerState,
        ) { page ->
            WarpText(
                modifier = Modifier.padding(dimensions.space2),
                text = "Your pager content here! Page: ${page + 1}",
            )
        }
        WarpPageIndicator(
            pageCount = pagerState.pageCount,
            currentPage = pagerState.currentPage
        )
    }
```



### Parameters

<api-table type=android component="PageIndicator" />