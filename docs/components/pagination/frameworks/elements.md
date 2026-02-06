# Pagination - Frameworks
Pagination allows users to navigate through multiple pages of content by providing navigation controls with page numbers and directional arrows.

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Syntax

<style-isolate>
<w-pagination base-url="/search?page=" pages="5" current-page="1"></w-pagination>
</style-isolate>

```html
<w-pagination base-url="/search?page=" pages="5" current-page="1"></w-pagination>
```

### Props

#### Required Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| base-url | string | | The base URL used to construct page links. The page number is appended to this URL. |
| pages | number | | The total number of pages. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| current-page | number | 1 | The currently selected page number. |
| visible-pages | number | 7 | The maximum number of page links to display at once. |

### Events

| Name | Description |
| --- | --- |
| page-click | CustomEvent fired when a page link is clicked. |

The `page-click` event is dispatched when any page link is clicked. The event includes a `detail.clickedPage` property containing the page number as a string.

### Example

```html example
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

### Base URL (`base-url`)

The base URL used to construct page links. The page number is appended to this URL.

Type: `string`

```html example
<w-pagination base-url="/products?page=" pages="5" current-page="1"></w-pagination>
```

### Current Page (`current-page`)

The currently selected page number.

Type: `number`

Default: `1`

```html example
<w-pagination base-url="/search?page=" pages="7" current-page="4"></w-pagination>
```

### Visible Pages (`visible-pages`)

The maximum number of page links to display at once. When the total number of pages exceeds this value, the component shows a window of pages centered around the current page.

Type: `number`

Default: `7`

```html example
<w-pagination base-url="/search?page=" pages="50" current-page="25" visible-pages="5"></w-pagination>
```

### Navigation Behavior

The pagination component automatically shows/hides navigation buttons based on the current page:

- **First page button** (double chevron): Shown when current page is greater than 2
- **Previous page button** (single chevron): Shown when current page is greater than 1
- **Next page button** (single chevron): Shown when current page is less than total pages

On mobile devices, the page numbers are hidden and replaced with a "Page X" label for a cleaner interface.

### Programmatic Control

You can programmatically change the current page by setting the `current-page` attribute or property:

```html example
<w-pagination id="controlled-pagination" base-url="/search?page=" pages="10" current-page="1"></w-pagination>
<script type="module">
  const pagination = document.querySelector('#controlled-pagination');

  // Change to page 5 programmatically
  pagination.setAttribute('current-page', '5');
</script>
```

<component-questions />
