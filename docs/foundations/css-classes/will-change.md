> Interactivity

# Will Change

Utilities for optimizing upcoming animations of elements that are expected to change.

::: warning Partially Unsupported
Some of this functionality is not yet supported! If you need this, reach out to us on [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Quick reference

<qr-table />

## Basic usage

::: danger Warning
The `will-change` property is intended to be used as a last resort when dealing with known performance problems. Avoid using these utilities too much, or simply in anticipation of performance issues, as it could actually cause the page to be less performant.
:::

### Optimizing with will change
Use `will-change-transform` to optimize an element that’s expected to change in the near future by instructing the browser to prepare the necessary animation before it actually begins.

```html
<div class="overflow-auto will-change-transform">
  <!-- ... -->
</div>
```

It’s recommended that you apply these utilities just before an element changes, and then remove it shortly after it finishes using will-change-auto.
