# Pagination

Pagination is used to split up long datasets into multiple 'pages'.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/pagination/overview), [Usage](https://warp-ds.github.io/docs/components/pagination/usage), [Accessibility](https://warp-ds.github.io/docs/components/pagination/accessibility), [React](https://warp-ds.github.io/docs/components/pagination/frameworks/react), [Elements](https://warp-ds.github.io/docs/components/pagination/frameworks/elements)

**Framework support:** Elements, React

## Overview

Pagination is used to split up long datasets into multiple 'pages'.

Pagination is used on various listing pages. It's typically found at the end of search result pages, My Ads, Favorite lists, or anywhere a long list of items are divided up and presented to users over multiple pages. Since pagination is a fairly basic and familiar feature, it's reasonable to expect that users would benefit from a consistent design and behaviour. Consistency reduces cognitive load, which in turn leads to less frustrated and more happy users.

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Default Pagination</h3>
        <w-pagination base-url="/search?page=" pages="10" current-page="5"></w-pagination>
    </div>
    <div>
        <h3 class="h4">With fewer pages</h3>
        <w-pagination base-url="/search?page=" pages="5" current-page="1"></w-pagination>
    </div>
    <div>
        <h3 class="h4">Many pages with limited visible</h3>
        <w-pagination base-url="/search?page=" pages="50" current-page="25" visible-pages="5"></w-pagination>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Accessibility

Pagination is used to split up long datasets into multiple 'pages'.

The current page is indicated by aria-current="page". There is a screen reader only Heading that reads `Pages` in each locale. The buttons are anchor tags marked with role="button".

The component is fully accessible.

## Frameworks

### React

Pagination is used to split up long datasets into multiple 'pages'.

[Elements](https://warp-ds.github.io/docs/components/pagination/frameworks/elements)[React](https://warp-ds.github.io/docs/components/pagination/frameworks/react)

You can import the component like so:

```js
import { Pagination } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Pagination } from '@warp-ds/react/components/pagination'
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| createHref | (page: number) => string |  | Function that returns the href for a given page |
| currentPage | number |  | The current page number. Adjusted so its never below 1, and never above lastPage. |
| lastPage | number |  | The number of the last page. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component container. |
| onChange | (page: number) => void |  | Handler that is called with the page number to navigate to. event.preventDefault is called for you. Fallbacks to default browser behavior if undefined. |
| numPages | number |  | The number of pages to show in the pagination. |

```jsx
function PaginationExample() {
    const [currentPage, setCurrentPage] = useState(0);

    return <Pagination
        currentPage={currentPage}
        lastPage={10}
        createHref={(page) => `?page=${page}`}
        onChange={(page) => setCurrentPage(page)}
    />;
}
```

### Elements

Pagination allows users to navigate through multiple pages of content by providing navigation controls with page numbers and directional arrows.

[Elements](https://warp-ds.github.io/docs/components/pagination/frameworks/elements)[React](https://warp-ds.github.io/docs/components/pagination/frameworks/react)

```html
<w-pagination base-url="/search?page=" pages="5" current-page="1"></w-pagination>
```

#### Required Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| base-url | string |  | The base URL used to construct page links. The page number is appended to this URL. |
| pages | number |  | The total number of pages. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| current-page | number | 1 | The currently selected page number. |
| visible-pages | number | 7 | The maximum number of page links to display at once. |

| Name | Description |
| --- | --- |
| page-click | CustomEvent fired when a page link is clicked. |

The `page-click` event is dispatched when any page link is clicked. The event includes a `detail.clickedPage` property containing the page number as a string.

```html
<w-pagination
  base-url="/search?page="
  pages="10"
  current-page="5">
</w-pagination>

<script type="module">
  const pagination = document.querySelector('w-pagination');

  pagination.addEventListener('page-click', (event) => {
    event.preventDefault();
    // event.detail = { clickedPage: string }
    console.log('Do something with the clicked page after preventing default navigation:', event.detail.clickedPage);
  });
</script>
```

The base URL used to construct page links. The page number is appended to this URL.

Type: `string`

```html
<w-pagination base-url="/products?page=" pages="5" current-page="1"></w-pagination>
```

The currently selected page number.

Type: `number`

Default: `1`

```html
<w-pagination base-url="/search?page=" pages="7" current-page="4"></w-pagination>
```

The maximum number of page links to display at once. When the total number of pages exceeds this value, the component shows a window of pages centered around the current page.

Type: `number`

Default: `7`

```html
<w-pagination base-url="/search?page=" pages="50" current-page="25" visible-pages="5"></w-pagination>
```

The pagination component automatically shows/hides navigation buttons based on the current page:

-   **First page button** (double chevron): Shown when current page is greater than 2
-   **Previous page button** (single chevron): Shown when current page is greater than 1
-   **Next page button** (single chevron): Shown when current page is less than total pages

On mobile devices, the page numbers are hidden and replaced with a "Page X" label for a cleaner interface.

You can programmatically change the current page by setting the `current-page` attribute or property:

```html
<w-pagination id="controlled-pagination" base-url="/search?page=" pages="10" current-page="1"></w-pagination>
<script type="module">
  const pagination = document.querySelector('#controlled-pagination');

  // Change to page 5 programmatically
  pagination.setAttribute('current-page', '5');
</script>
```

## Inline Demo Markup

```html
<w-pagination base-url="/search?page=" pages="5" current-page="1"></w-pagination>
```
