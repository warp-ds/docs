# Tabs

Tabs are used to group content, allowing users to navigate views without.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/tabs/overview), [Usage](https://warp-ds.github.io/docs/components/tabs/usage), [Accessibility](https://warp-ds.github.io/docs/components/tabs/accessibility), [React](https://warp-ds.github.io/docs/components/tabs/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/tabs/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/tabs/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/tabs/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/tabs/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

Tabs are used to group content, allowing users to navigate views without.

## Inline Demo Markup

```html
<w-tabs active="one">
        <w-tab for="one">Tab 1</w-tab>
        <w-tab for="two">Tab 2</w-tab>
        <w-tab for="three">Tab 3</w-tab>
        <w-tab-panel id="one">First tab content</w-tab-panel>
        <w-tab-panel id="two">Second tab content</w-tab-panel>
        <w-tab-panel id="three">Third tab content</w-tab-panel>
    </w-tabs>
```

## Usage

> This page is still in progress in the public docs.

## Accessibility

Tabs are used to group content, allowing users to navigate views without.

Focus management and ARIA attributes are handled automatically.

Warning

The `name` attributes will be used to generate `id` attributes (prefixed with `warp-tab-` and `warp-tabpanel-`), and therefore they must be unique throughout the entire DOM. This is because aria-controls and aria-labelledby rely on id attributes, and they are required for the tabs to be ARIA compliant.

## Frameworks

### React

Tabs are used to group content, allowing users to navigate views without.

You can import the component like so:

```js
import { Tab, Tabs, TabPanel } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Tab, Tabs, TabPanel } from '@warp-ds/react/components/tabs';
```

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

You can set the active tab in one of two ways:

1.  By passing the name of the active Tab to the Tabs component using the `active` attribute.
2.  By setting `isActive` on the active Tab. The first Tab is active by default if you don't specify an active Tab.

Warning

It is important that all children of Tabs are Tab components.

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

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode |  | The content of the tab panel. |
| name | string |  | Tab name identifier - This value should be the same as the name prop of the corresponding Tab component. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| hidden | boolean |  | Show/hide panel manually (in server-side rendering). |

### Vue

Tabs are used to group content, allowing users to navigate views without.

> Use in entire app

```js
import { Tabs } from '@warp-ds/vue';
app.use(Tabs);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wTabs, wTab, wTabConent } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wTabs, wTab, wTabConent } from '@warp-ds/vue/tabs';
```

#### Basic usage 

```html
<w-tabs>
  <w-tab name="one" label="Tab 1" />
  <w-tab name="two" label="Tab 2" />
  <w-tab name="three" label="Tab 3" />
</w-tabs>
```

##### Tabs with icons 

```vue
<script setup>
import { ref } from 'vue';
import { iconSvg } from '/icons';

const selectedTab = ref('one');
</script>

<template>
  <w-tabs v-model="selectedTab">
    <w-tab name="one" label="Tab 1">
      <icon-svg />
    </w-tab>
    <w-tab name="two" label="Tab 2">
      <icon-svg />
    </w-tab>
    <w-tab name="three" label="Tab 3">
      <icon-svg />
    </w-tab>
  </w-tabs>
</template>
```

#### Tabs with panel content 

The following example demonstrates how the `Tabs`, `Tab`, and `TabPanel` components can be used to switch between panels.

```vue
<script setup>
import { wTabs, wTab, wTabPanel } from '@warp-ds/vue';
import { ref } from 'vue';

const selectedTab = ref('one');
</script>

<template>
  <w-tabs v-model="selectedTab">
    <w-tab name="one" label="Tab 1" />
    <w-tab name="two" label="Tab 2" />
    <w-tab name="three" label="Tab 3" />
  </w-tabs>
  <div>
    <w-tab-panel v-if="selectedTab === 'one'" name="one">
      First tab content
    </w-tab-panel>
    <w-tab-panel v-if="selectedTab === 'two'" name="two">
      Second tab content
    </w-tab-panel>
    <w-tab-panel v-if="selectedTab === 'three'" name="three">
      Third tab content
    </w-tab-panel>
  </div>
</template>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | string |  | Name of the active tab (set by the Tab component via the setActive handler) |

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | Tab name identifier. This value will be omitted as the argument to the Tabs setActive handler |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | Interchangeable with the label slot for labelling |

#### Slots 

| Name | Description |
| --- | --- |
| default | Default slot - mainly used for icons |
| label | Label for the tab (renders below default slot) |

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | Tab name identifier - This value should be the same as the name prop of the corresponding Tab component. |

### Elements

Tabs are used to group content, allowing users to navigate views without leaving the page.

The tabs component consists of three custom elements that work together:

-   `<w-tabs>` - The container that manages tab state and keyboard navigation
-   `<w-tab>` - Individual tab buttons
-   `<w-tab-panel>` - Content panels associated with each tab

Each `<w-tab>` has a `for` attribute that matches the `id` of its corresponding `<w-tab-panel>`. The `<w-tabs>` component automatically handles:

-   Tab activation and selection indicator
-   Keyboard navigation (ArrowLeft/ArrowRight, Home/End)
-   ARIA attributes for accessibility
-   Showing/hiding the correct panel

```html
<w-tabs active="one">
  <w-tab for="roald-amundsen">Tab 1</w-tab>
  <w-tab for="fridtjof-nansen">Tab 2</w-tab>
  <w-tab for="tor-heyerdahl">Tab 3</w-tab>
  <w-tab-panel id="roald-amundsen">Tab one selected!</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Tab two selected!</w-tab-panel>
  <w-tab-panel id="tor-heyerdahl">Tab three selected!</w-tab-panel>
</w-tabs>

<script type="module">
  const tabs = document.querySelector('w-tabs');

  tabs.addEventListener('change', (event) => {
    // event.detail = { panelId: string }
    console.log('Active panel:', event.detail.panelId);
  });
</script>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| active | string | '' | The id of the panel that should be active. Defaults to the first tab if not specified. |

#### Events 

| Name | Description |
| --- | --- |
| change | CustomEvent |

The `change` event is dispatched when the active tab changes. The event includes a `detail.panelId` property containing the `id` of the newly active panel.

#### Active (`active`) 

The `id` of the panel that should be active.

Type: `string`

Default: `''` (first tab is active by default)

```html
<w-tabs active="two">
  <w-tab for="roald-amundsen">Tab 1</w-tab>
  <w-tab for="fridtjof-nansen">Tab 2</w-tab>
  <w-tab for="tor-heyerdahl">Tab 3</w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
  <w-tab-panel id="tor-heyerdahl">Content three</w-tab-panel>
</w-tabs>
```

#### Required Props 

| Name | Type | Description |
| --- | --- | --- |
| for | string | The id of the <w-tab-panel> this tab controls. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| over | boolean | false | Display the icon above the label instead of beside it. |

#### Slots 

| Name | Description |
| --- | --- |
| default | The tab label text. |
| icon | An icon to display alongside or above the label. |

#### For (`for`) 

The `id` of the `<w-tab-panel>` this tab controls.

Type: `string`

```html
<w-tabs>
  <w-tab for="panel-a">Tab A</w-tab>
  <w-tab for="panel-b">Tab B</w-tab>
  <w-tab-panel id="panel-a">Panel A content</w-tab-panel>
  <w-tab-panel id="panel-b">Panel B content</w-tab-panel>
</w-tabs>
```

#### Over (`over`) 

Display the icon above the label instead of beside it.

Type: `boolean`

Default: `false`

```html
<w-tabs active="one">
  <w-tab for="roald-amundsen" over>
    <w-icon name="Info" slot="icon" />
    Tab 1
  </w-tab>
  <w-tab for="fridtjof-nansen" over>
    <w-icon name="Success" slot="icon" />
    Tab 2
  </w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
</w-tabs>
```

Icons can be added to tabs using the `icon` slot. By default, icons appear beside the label.

```html
<w-tabs active="one">
  <w-tab for="roald-amundsen">
    <w-icon name="Info" slot="icon" />
    Tab 1
  </w-tab>
  <w-tab for="fridtjof-nansen">
    <w-icon name="Success" slot="icon" />
    Tab 2
  </w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
</w-tabs>
```

Use the `over` attribute to position icons above the label:

```html
<w-tabs active="one">
  <w-tab for="roald-amundsen" over>
    <w-icon name="Info" slot="icon" />
    Tab 1
  </w-tab>
  <w-tab for="fridtjof-nansen" over>
    <w-icon name="Success" slot="icon" />
    Tab 2
  </w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
</w-tabs>
```

#### Required Props 

| Name | Type | Description |
| --- | --- | --- |
| id | string | The unique identifier for this panel. Must match a tab's for attribute. |

#### Slots 

| Name | Description |
| --- | --- |
| default | The panel content. |

#### Change (`change`) 

Dispatched when the active tab changes.

-   Type: `CustomEvent`
-   Bubbles: `true`
-   Composed: `true`
-   Detail: `{ panelId: string }`

```html
<w-tabs id="tabs-change">
  <w-tab for="roald-amundsen">Tab 1</w-tab>
  <w-tab for="fridtjof-nansen">Tab 2</w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
</w-tabs>
<script type="module">
  const tabs = document.querySelector('#tabs-change');
  tabs.addEventListener('change', (e) => {
    console.log('Active panel:', e.detail.panelId);
  });
</script>
```

You can programmatically change the active tab by setting the `active` property:

```html
<w-tabs id="controlled-tabs">
  <w-tab for="roald-amundsen">Tab 1</w-tab>
  <w-tab for="fridtjof-nansen">Tab 2</w-tab>
  <w-tab for="tor-heyerdahl">Tab 3</w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
  <w-tab-panel id="tor-heyerdahl">Content three</w-tab-panel>
</w-tabs>
<script type="module">
  const tabs = document.querySelector('#controlled-tabs');

  // Activate the second tab programmatically
  tabs.active = 'fridtjof-nansen';
</script>
```

The tabs component follows the WAI-ARIA Tabs pattern:

-   The tab list has `role="tablist"`
-   Each tab button has `role="tab"` with `aria-selected` reflecting its active state
-   Each tab button has `aria-controls` pointing to its associated panel
-   Each panel has `role="tabpanel"` with `aria-labelledby` pointing to its associated tab
-   Keyboard navigation is supported:
    -   `ArrowLeft`/`ArrowRight`: Navigate between tabs
    -   `Home`: Move to first tab
    -   `End`: Move to last tab

## Inline Demo Markup

```html
<w-tabs active="one">
    <w-tab for="roald-amundsen">Tab 1</w-tab>
    <w-tab for="fridtjof-nansen">Tab 2</w-tab>
    <w-tab for="tor-heyerdahl">Tab 3</w-tab>
    <w-tab-panel id="roald-amundsen">Tab one selected!</w-tab-panel>
    <w-tab-panel id="fridtjof-nansen">Tab two selected!</w-tab-panel>
    <w-tab-panel id="tor-heyerdahl">Tab three selected!</w-tab-panel>
  </w-tabs>
```

### Android

Tabs are used to group content, allowing users to navigate views without.

```kotlin
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

The WarpTabs component consists of WarpTabRow which holds multiple WarpTab objects. The tabs can be either fixed or scrollable. The tabs can show either a title or text together with an icon. The icon is always on the left of the text.

```kotlin
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

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| tabs | @Composable () -> Unit |  | WarpTab objects to display as selectable tabs. |
| selectedTabIndex | Int |  | Index of the currently selected tab. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | The modifier for the TabRow. |
| scrollable | Boolean | false | If set to true, tabs can be scrolled horizontally. |

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | Title of the tab |
| selected | Boolean |  | If the tab is selected or not |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | WarpIconResource | null | Icon displayed before the title. |
| modifier | Modifier | Modifier | The modifier for the Tab. |
| onClick | () -> Unit | {} | The function to be invoked when clicked |
| interactionSource | MutableInteractionSource | MutableInteractionSource | The interaction source to be used for the tab. |

### iOS

Tabs are used to group content, allowing users to navigate views without.

```swift
Warp.Tabs(
    tabs: [TabItem],
    selectedIndex: Binding<Int>
)

Warp.TabItem(
    title: String,
    icon: Warp.Icon? = nil
)
```

```swift
Warp.Tabs(
    tabs: tabItems,
    selectedIndex: $selectedIndex
)

Warp.TabItem(
    title: "Title",
    icon: .plus
)
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Tabs(
    tabs: tabItems,
    selectedIndex: $selectedIndex
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| tabs | [Warp.TabItem] |  | An array of Warp.TabItem objects to display as selectable tabs. |
| selectedIndex | Binding Int |  | A binding to the index of the currently selected tab. |
