# Badge - Frameworks

Badges are used to highlight a relevant piece of information, like status or category.

<ComponentsStatus />

## Elements

<FrameworkTabs />

<ThemeSwitcher />

### Variants

#### Neutral
<style-isolate><w-badge variant="neutral">Badge text</w-badge></style-isolate>

```html
<w-badge variant="neutral">Badge text</w-badge>
```

#### Info
<style-isolate><w-badge variant="info">Badge text</w-badge></style-isolate>

```html
<w-badge variant="info">Badge text</w-badge>
```

#### Positive
<style-isolate><w-badge variant="positive">Badge text</w-badge></style-isolate>

```html
<w-badge variant="positive">Badge text</w-badge>
```

#### Warning
<style-isolate><w-badge variant="warning">Badge text</w-badge></style-isolate>

```html
<w-badge variant="warning">Badge text</w-badge>
```

#### Negative
<style-isolate><w-badge variant="negative">Badge text</w-badge></style-isolate>

```html
<w-badge variant="negative">Badge text</w-badge>
```

#### Disabled
<style-isolate><w-badge variant="disabled">Badge text</w-badge></style-isolate>

```html
<w-badge variant="disabled">Badge text</w-badge>
```

#### Price
<style-isolate><w-badge variant="price">Badge text</w-badge></style-isolate>

```html
<w-badge variant="price">Badge text</w-badge>
```

#### Sponsored
<style-isolate><w-badge variant="sponsored">Badge text</w-badge></style-isolate>

```html
<w-badge variant="sponsored">Badge text</w-badge>
```

#### Positioned
<style-isolate><div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
  <w-badge variant="price" position="top-right">Badge</w-badge>
</div></style-isolate>

```html
<div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
  <w-badge variant="price" position="top-right">Badge</w-badge>
</div>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored'` | 'neutral' |  |
| position | `'top-left', 'top-right', 'bottom-right', 'bottom-left'` | undefined | Used for absolute positioning of the badge within a container |

<component-questions />