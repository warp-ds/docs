# Tabs - Frameworks
Tabs are used to group content, allowing users to navigate views without leaving the page.

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Usage Notes

The tabs component consists of three custom elements that work together:

- `<w-tabs>` - The container that manages tab state and keyboard navigation
- `<w-tab>` - Individual tab buttons
- `<w-tab-panel>` - Content panels associated with each tab

Each `<w-tab>` has a `for` attribute that matches the `id` of its corresponding `<w-tab-panel>`. The `<w-tabs>` component automatically handles:

- Tab activation and selection indicator
- Keyboard navigation (ArrowLeft/ArrowRight, Home/End)
- ARIA attributes for accessibility
- Showing/hiding the correct panel

### Example

<style-isolate>
  <w-tabs active="one">
    <w-tab for="roald-amundsen">Tab 1</w-tab>
    <w-tab for="fridtjof-nansen">Tab 2</w-tab>
    <w-tab for="tor-heyerdahl">Tab 3</w-tab>
    <w-tab-panel id="roald-amundsen">Tab one selected!</w-tab-panel>
    <w-tab-panel id="fridtjof-nansen">Tab two selected!</w-tab-panel>
    <w-tab-panel id="tor-heyerdahl">Tab three selected!</w-tab-panel>
  </w-tabs>
</style-isolate>

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

### Props - w-tabs

#### Optional Props

| Name   | Type   | Default | Description                                                                 |
| ------ | ------ | ------- | --------------------------------------------------------------------------- |
| active | string | ''      | The `id` of the panel that should be active. Defaults to the first tab if not specified. |

#### Events

| Name   | Description |
| ------ | ----------- |
| change | CustomEvent |

The `change` event is dispatched when the active tab changes. The event includes a `detail.panelId` property containing the `id` of the newly active panel.

#### Active (`active`)

The `id` of the panel that should be active.

Type: `string`

Default: `''` (first tab is active by default)

```html example
<w-tabs active="two">
  <w-tab for="roald-amundsen">Tab 1</w-tab>
  <w-tab for="fridtjof-nansen">Tab 2</w-tab>
  <w-tab for="tor-heyerdahl">Tab 3</w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
  <w-tab-panel id="tor-heyerdahl">Content three</w-tab-panel>
</w-tabs>
```

### Props - w-tab

#### Required Props

| Name | Type   | Description                                                |
| ---- | ------ | ---------------------------------------------------------- |
| for  | string | The `id` of the `<w-tab-panel>` this tab controls.         |

#### Optional Props

| Name   | Type    | Default | Description                                          |
| ------ | ------- | ------- | ---------------------------------------------------- |
| over   | boolean | false   | Display the icon above the label instead of beside it. |

#### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The tab label text.                              |
| icon    | An icon to display alongside or above the label. |

#### For (`for`)

The `id` of the `<w-tab-panel>` this tab controls.

Type: `string`

```html example
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

```html example
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

### Tabs with icons

Icons can be added to tabs using the `icon` slot. By default, icons appear beside the label.

```html example
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

```html example
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

### Props - w-tab-panel

#### Required Props

| Name | Type   | Description                                                       |
| ---- | ------ | ----------------------------------------------------------------- |
| id   | string | The unique identifier for this panel. Must match a tab's `for` attribute. |

#### Slots

| Name    | Description            |
| ------- | ---------------------- |
| default | The panel content.     |

### Events

#### Change (`change`)

Dispatched when the active tab changes.

- Type: `CustomEvent`
- Bubbles: `true`
- Composed: `true`
- Detail: `{ panelId: string }`

```html example
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

### Programmatic control

You can programmatically change the active tab by setting the `active` property:

```html example
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

### Accessibility

The tabs component follows the WAI-ARIA Tabs pattern:

- The tab list has `role="tablist"`
- Each tab button has `role="tab"` with `aria-selected` reflecting its active state
- Each tab button has `aria-controls` pointing to its associated panel
- Each panel has `role="tabpanel"` with `aria-labelledby` pointing to its associated tab
- Keyboard navigation is supported:
  - `ArrowLeft`/`ArrowRight`: Navigate between tabs
  - `Home`: Move to first tab
  - `End`: Move to last tab
