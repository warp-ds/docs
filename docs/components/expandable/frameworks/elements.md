# Expandable - Frameworks
Expandable is a layout component used for creating content that can be expanded and collapsed.

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Visual options

#### Default

```html
<w-expandable title="I'm expandable">
  <p>with expanded content</p>
</w-expandable>
```

#### Expandable box

```html
<w-expandable title="I'm expandable" box>
  <p>with expanded content</p>
</w-expandable>
```

#### Expandable box with custom title

This can be used if more control over styling is needed than the `title` prop allows

```html
<w-expandable box>
  <div slot="title" class="flex flex-row items-center">
    <w-icon-bag-16></w-icon-bag-16>
    <p class="ml-8 mb-0">This is a title with an icon</p>
  </div>
  <p>with expanded content</p>
</w-expandable>
```

#### With expanded prop

```html
<w-expandable box title="I'm expanded by default" expanded>
  <p>content should be visible</p>
</w-expandable>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| expanded | boolean | false | Controls component's expanded state |
| bleed | boolean |  | Will make the expandable full-width on sm-size |
| box | boolean | false | Will make the expandable a Box |
| animated | boolean | false | Will animate the expansion/collapse |
| no-chevron | boolean | false | Whether to hide the chevron on the button part of the component |
| title | string |  | Component title. Used to display the title value which is always present regardless of whether the component is open or closed. |
| heading-level | number |  | Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element |
| button-class | string |  | Additional CSS classes to include on the button part of the component |
| content-class | string |  | Additional CSS classes to include on the content part of the component |
| as | string | div | The DOM element to emit |
| v-model | boolean |  | Controls the expansion/collapse |
| chevron | boolean | true | Controls chevron visibility |