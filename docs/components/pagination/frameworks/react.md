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

<api-table type=react component="Pagination" />

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