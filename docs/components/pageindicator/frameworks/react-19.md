# Page indicator - Frameworks
A page indicator shows the total amount of pages (or images) and the current page using dots.

## React 19

<FrameworkTabs 
  :tabs="[
    { name: 'React 19', url: './react-19' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' },
  ]" 
  activeTab="React 19" 
/>

### Import

You can import the component like so:

```js
import { PageIndicator } from "@warp-ds/components/react/pageindicator";
```

### Syntax

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

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pageCount | number |  | The total number of pages. |
| selectedPage | number |  | Currently selected page. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | CSSProperties |  | CSS styles to inline on the component container. |