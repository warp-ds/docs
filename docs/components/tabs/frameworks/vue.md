### Import

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

### Syntax

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

### Props - Tabs
<api-table type="vue" component="Tabs" />

### Props - Tab
<api-table type="vue" component="Tab" />

### Props - TabPanel
<api-table type="vue" component="TabPanel" />
