# Alert - Elements

Alert is an inline component used for displaying different types of messages.

<ComponentsStatus />

<FrameworkTabs />

<ThemeSwitcher />

## Accessibility

For accessibility reasons, an alert should appear close to the element that triggered it.

Use the ARIA live region `role` attribute to provide meaning to the alert
element (defaults to "alert").

If you want to remove the role from the alert and
assign it to its particular child (e.g. title), you can do so by setting `role`
property of the `Alert` component to an empty string and assigning a respective
`role` attribute on the child element.

<style-isolate>
  <w-alert variant="info" show role="">
    <h3 role="alert" class="t5">
      This is an alert styled as an information box
    </h3>
    <p>In this example only the title has the role of alert. All alerts can have a description.</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="info" show role="">
  <h3 role="alert" class="t5">This is an alert styled as an information box</h3>
  <p>In this example only the title has the role of alert. All alerts can have a description.</p>
</w-alert>
```

Read more about live region `role`
attribute on [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).

## Examples

### Info

<style-isolate>
  <w-alert variant="info" show>
    <p>This is an alert styled as an information box</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="info" show>
  <p>This is an alert styled as an information box</p>
</w-alert>
```

### Warning

<style-isolate>
<w-alert variant="warning" show>
  <p>This is an alert styled as an warning box</p>
</w-alert>
</style-isolate>

```html
<w-alert variant="warning" show>
  <p>This is an alert styled as an warning box</p>
</w-alert>
```

### Negative

<style-isolate>
<w-alert variant="negative" show>
  <p>This is an alert styled as a red box signifying something negative can or has happened</p>
</w-alert>
</style-isolate>

```html
<w-alert variant="negative" show>
  <p>This is an alert styled as a red box signifying something negative can or has happened</p>
</w-alert>
```

### Positive

<style-isolate>
  <w-alert variant="positive" show>
    <p>This is an alert styled as a green box signifying success or something else positive</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="positive" show>
  <p>This is an alert styled as a green box signifying success or something else positive</p>
</w-alert>
```



## API

<!--generated-api-docs-->

### Props

#### Required props

| Name    | Type                                              | Default   | Description          |
| ------- | ------------------------------------------------- | --------- | -------------------- |
| variant | `'negative' \| 'positive' \| 'warning' \| 'info'` | undefined | Variant of the alert |

#### Optional Props

| Name | Type    | Default | Description                             |
| ---- | ------- | ------- | --------------------------------------- |
| show | boolean | false   | Controls when the alert shows           |
| role | string  | alert   | ARIA live region "role" attribute value |

<!--/generated-api-docs-->

<component-questions />
