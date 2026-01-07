# Alert - Frameworks
Alerts show high-signal messages meant to be noticed and prompting users.

<WarpBadge status="Released" framework="Android" />
<WarpBadge status="Released" framework="iOS" />
<WarpBadge status="Released" framework="React-19" />
<WarpBadge status="Released" framework="React" />
<WarpBadge status="Released" framework="Vue" />
<WarpBadge status="Released" framework="Web" />

## Elements

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'React 19', url: './react-19' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="Elements" 
/>

<ThemeSwitcher />

### Variants

#### Info

<style-isolate>
<w-alert variant="info" show>
  <p>This is "info" variant of the alert element</p>
</w-alert>
</style-isolate>

```html
<w-alert variant="info" show>
  <p>This is "info" variant of the alert element</p>
</w-alert>
```

#### Warning

<style-isolate>
<w-alert variant="warning" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
</style-isolate>

```html
<w-alert variant="warning" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

#### Negative

<style-isolate>
<w-alert variant="negative" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
</style-isolate>

```html
<w-alert variant="negative" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

#### Positive

<style-isolate>
<w-alert variant="positive" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
</style-isolate>

```html
<w-alert variant="positive" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

### Accessibility

Use the ARIA live region `role` attribute to provide meaning to the alert
element (defaults to "alert"). If you want to remove the role from the alert and
assign it to its particular child (e.g. title), you can do so by setting `role`
property of the `Alert` component to an empty string and assigning a respective
`role` attribute on the child element. Read more about live region `role`
attribute on
[MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).

#### Alert with "alert" role on a descendant element

<style-isolate>
  <w-alert variant="info" show role="">
    <h3 role="alert" class="t5">
      This is "info" variant of the alert element
    </h3>
    <p>With an additional description</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="info" show role="">
  <h3 role="alert" class="t5">
    This is "info" variant of the alert element
  </h3>
  <p>With an additional description</p>
</w-alert>
```


### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `'negative' \| 'positive' \| 'warning' \| 'info'` | undefined | Variant of the alert |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| show | boolean | false | Controls when the alert shows |
| role | string | alert | ARIA live region "role" attribute value |