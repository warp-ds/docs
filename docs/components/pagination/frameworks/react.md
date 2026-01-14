# Pagination - Frameworks
Pagination is used to split up long datasets into multiple 'pages'.

<ComponentsStatus />

## React

<FrameworkTabs />

### Import

You can import the component like so:
```js
import { Pagination } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Pagination } from '@warp-ds/react/components/pagination'

```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| createHref | `(page: number) => string` |  | Function that returns the href for a given page |
| currentPage | number |  | The current page number. Adjusted so its never below `1`, and never above `lastPage`. |
| lastPage | number |  | The number of the last page. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component container. |
| onChange | `(page: number) => void` |  | Handler that is called with the page number to navigate to. `event.preventDefault` is called for you. Fallbacks to default browser behavior if undefined. |
| numPages | number |  | The number of pages to show in the pagination. |

### Example

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