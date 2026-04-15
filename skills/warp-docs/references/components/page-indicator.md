# Page indicator

A page indicator shows the total amount of pages (or images) and the current page using dots.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/page-indicator/overview), [Usage](https://warp-ds.github.io/docs/components/page-indicator/usage), [Accessibility](https://warp-ds.github.io/docs/components/page-indicator/accessibility), [React 19](https://warp-ds.github.io/docs/components/page-indicator/frameworks/react-19), [Elements](https://warp-ds.github.io/docs/components/page-indicator/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/page-indicator/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/page-indicator/frameworks/ios)

**Framework support:** Android, Elements, iOS, React 19

## Overview

A page indicator shows the total amount of pages (or images) and the current page using dots.

Page indicators help users understand that there are more images, or pages, available to scroll through, that are currently hidden from view.

![Anatomy of a page indicator component with four circular dots in a horizontal row. The first dot is filled in blue, indicating the active page. The remaining three dots are light gray, indicating inactive pages. Two numbered callouts are present: (1) points to the active page indicator, and (2) highlights one of the inactive indicators.](https://warp-ds.github.io/docs/components/pageindicator/pageindicator-anatomy.svg)

1.  Active dot
2.  Inactive dot

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Default Page Indicator</h3>
        <w-page-indicator page-count="5" selected-page="1"></w-page-indicator>
    </div>
    <div>
        <h3 class="h4">Middle page selected</h3>
        <w-page-indicator page-count="7" selected-page="4"></w-page-indicator>
    </div>
    <div>
        <h3 class="h4">Last page selected</h3>
        <w-page-indicator page-count="5" selected-page="5"></w-page-indicator>
    </div>
```

## Usage

A page indicator shows the total amount of pages (or images) and the current page using dots.

Page indicators are usually used in image carousels, and supported by carousel controls that give the user power to navigate through the carousel of images.

**Use page indicators when:**

-   You have one or more images, or pages, you want to show, but don’t have space to show them all at once.
-   When you want to clearly illustrate how many images, or pages, are available.

**When using page indicators:**

-   The number of dots varies depending on the number of pages.
-   Although there is no maximum limit to the amount of dots you can use, don’t display too many.
-   The aim of page indicators is to give users’ a quick overview of how many pages, or images, there are to be viewed, so using more than 8 dots is too hard to count at a glance.

-   Individual indicator dots have two states: active and inactive
-   Should only show one active dot at a time
-   Should always be centred-aligned at the bottom of the view or window within their parent container (eg. 24px padding between the page indicator and the bottom of the parent container).
-   Should not be interactive, meaning they cannot be clicked or used as a shortcut to specific pages/images (so no focus state is necessary).
-   Have varying number of dots depending on the number of pages.
-   Center a page control at the bottom of the view or window. To ensure people always know where to find a page control, centre it horizontally and position it near the bottom of the view.

See Figma: [Warp - Components / Page indicator](https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/branch/5VhDenFoNQFag7sjurrkVQ/WARP---Components?node-id=24975-5642&t=QMfAx1S5Uvo3jkM3-0)

You can place the page indicator inside or outside the content. We recommend you leave a margin of 16px when placing it outside the image and 12px when using it inside. You can adjust this margin if necessary.  
  
The page indicator should always be horizontally centred within its parent container.

![Page indicator placed inside the content container with 12px right margin](https://warp-ds.github.io/docs/components/pageindicator/placement-inside.svg)![Page indicator placed outside the content container with 24px margin](https://warp-ds.github.io/docs/components/pageindicator/placement-outside.svg)

The width is automatically adjusted according to the numbers of dots. The height of the component is fixed and should not be changed.

## Accessibility

A page indicator shows the total amount of pages (or images) and the current page using dots.

When using page indicators, be mindful of the background colour that will be used behind them. If there is a chance the contrast between the indicators and the background is too low, then place the indicators below, and outside of the content container.

## Frameworks

### React 19

A page indicator shows the total amount of pages (or images) and the current page using dots.

[Android](https://warp-ds.github.io/docs/components/page-indicator/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/page-indicator/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/page-indicator/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/page-indicator/frameworks/react-19)

You can import the component like so:

```js
import { PageIndicator } from "@warp-ds/components/react/pageindicator";
```

```js
<PageIndicator pageCount={5} selectedPage={1} />
```

You can apply custom styling to align the component and add padding as needed:

```js
<PageIndicator
  pageCount={5}
  selectedPage={1}
  style={{ paddingBottom: "12px", alignSelf: "end" }}
/>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pageCount | number |  | The total number of pages. |
| selectedPage | number |  | Currently selected page. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | CSSProperties |  | CSS styles to inline on the component container. |

### Elements

A page indicator shows the total amount of pages (or images) and the current page using dots.

[Android](https://warp-ds.github.io/docs/components/page-indicator/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/page-indicator/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/page-indicator/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/page-indicator/frameworks/react-19)

```js
<w-page-indicator page-count="5" selected-page="1"></w-page-indicator>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pageCount | number |  | The total number of pages. |
| selectedPage | number |  | Currently selected page. |

## Inline Demo Markup

```html
<w-page-indicator page-count="5" selected-page="1"></w-page-indicator>
```

### Android

A page indicator shows the total amount of pages (or images) and the current page using dots.

[Android](https://warp-ds.github.io/docs/components/page-indicator/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/page-indicator/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/page-indicator/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/page-indicator/frameworks/react-19)

```kotlin
@Composable
fun WarpPageIndicator(
    modifier: Modifier = Modifier,
    pageCount: Int,
    currentPage: Int = 0
)
```

Basic usage for the page indicator. Should ideally be used together with a pager. Use a PagerState to indicate the page count and current page.

```kotlin
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

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pageCount | Int |  | Number of dots to be displayed |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the page indicator |
| currentPage | Int | 0 | Current dot to be selected |

### iOS

A page indicator shows the total amount of pages (or images) and the current page using dots.

[Android](https://warp-ds.github.io/docs/components/page-indicator/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/page-indicator/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/page-indicator/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/page-indicator/frameworks/react-19)

```swift
Warp.PageIndicator(
    pageCount: Int,
    selectedPage: Binding<Int> = .constant(0)
)
```

```swift
Warp.PageIndicator(pageCount: 5)
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.PageIndicator(pageCount: 5).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pageCount | Int |  | The total number of pages. |
| selectedPage | Binding Int |  | Binding to an integer representing the currently selected page. |
