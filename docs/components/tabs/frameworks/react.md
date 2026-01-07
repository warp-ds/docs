# Tabs - Frameworks
Tabs are used to group content, allowing users to navigate views without.

<ComponentsStatus />

## React

<FrameworkTabs />

### Import

You can import the component like so:
```js
import { Tab, Tabs, TabPanel } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Tab, Tabs, TabPanel } from '@warp-ds/react/components/tabs';

```

### Syntax
The following example demonstrates how the `Tabs`, `Tab` and `TabPanel` components can be used to switch between panels.

```jsx
<>
  <Tabs>
    <Tab label="Tab 1" name="one" isActive />
    <Tab label="Tab 2" name="two" />
    <Tab label="Tab 3" name="three" />
  </Tabs>
  <div>
    <TabPanel name="one">Tab one selected!</TabPanel>
    <TabPanel name="two">Tab two selected!</TabPanel>
    <TabPanel name="three">Tab three selected!</TabPanel>
  </div>
</>
```

#### Tabs with left icons

```js
function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d= /* string */
        fill="#474445"
      />
    </svg>
  );

  return (
    <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
    </Tabs>
  );
}
```
#### Tabs with icons over the label

```js
function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d= /* ... */
        fill="#474445"
      />
    </svg>
  );

  return (
    <Tabs>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
    </Tabs>
  );
}
```

### Technical details
You can set the active tab in one of two ways:
1. By passing the name of the active Tab to the Tabs component using the `active` attribute.
2. By setting `isActive` on the active Tab. The first Tab is active by default if you don't specify an active Tab.

::: warning Warning
It is important that all children of Tabs are Tab components.
:::

### Props - Tabs
#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | Element[] |  | The Tabs within the container |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| active | string |  | Used to set the name of the Tab that should be active on mount. Defaults to the first tab if not present and isActive is not set on any Tab |
| className | string |  | Additional CSS class for the container |
| style | any |  | Additional CSS styles for the container |

#### Events

| Name | Description |
| --- | --- |
| onChange | (name: string) => void |

### Props - Tab
#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler |
| label | any |  | The label of the tab item |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| isActive | boolean |  | Used to set which tab should be active on mount. Defaults to the first tab if not present |
| over | boolean | false | Set the over prop to true if you need to move icons to above the tab label |
| className | string |  | Additional CSS class for the container |
| style | any |  | Additional CSS styles for the Tab |

#### Events

| Name | Description |
| --- | --- |
| setActive | (name: string) |
| onChange | (name: string) => void |

### Props - TabPanel
#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode |  | The content of the tab panel. |
| name | string |  | Tab name identifier - This value should be the same as the `name` prop of the corresponding Tab component. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| hidden | boolean |  | Show/hide panel manually (in server-side rendering). |