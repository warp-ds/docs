### Import

<warp-react-beta-note />

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

<api-table type="react" component="PageIndicator" />
