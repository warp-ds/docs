> Layout

# Aspect Ratio

Utilities for controlling the aspect ratio of an element.

## Quick reference

::: warning Warning
  Known problem: the shortcuts `aspect-ratio`, `aspect-square`, `aspect-video` are not working as intended.
:::

| Class               | Description                                |
|---------------------|--------------------------------------------|
| `aspect-ratio`      | `aspect-ratio: auto`                       |
| `aspect-square`     | `aspect-ratio: 1/1`                        |
| `aspect-video`      | `aspect-ratio: 16/9`                       |
| `aspect-1/1`        | Sets the aspect ratio to 1:1               |
| `aspect-4/3`        | Sets the aspect ratio to 4:3               |
| `aspect-16/9`       | Sets the aspect ratio to 16:9              |
| `aspect-2/1`        | Sets the aspect ratio to 2:1               |
| `aspect-{fraction}` | Sets the aspect ratio to any \{fraction\}  |

> Available values <br />
> `{fraction}`: _Any fraction is valid - e.g. `1/5`_

::: tip Note
Aspect ratio support is currently provided via the [padding-bottom](https://css-tricks.com/aspect-ratio-boxes/) fallback method.
The built-in `aspect-ratio` property is not yet well supported.
:::

## Basic usage

### Setting the aspect ratio
Use the aspect-{ratio} utilities to set the desired aspect ratio of an element.

<width-controller>
  <example-container>
    <div class="flex justify-center aspect-2/1 rounded relative overflow-hidden">
      <img src="/images/50s-scientists.jpg" class="object-cover" alt="AI generated picture of 1950s scientists working on a warp drive" />
    </div>
  </example-container>
</width-controller>

```html
<div class="aspect-2/1">
  <img class="object-cover" src="..." alt="..." />
</div>
```

<width-controller>
  <example-container>
    <div class="flex justify-center aspect-1/1 rounded-4">
      <img src="/images/50s-scientists.jpg" class="object-cover" alt="AI generated picture of 1950s scientists working on a warp drive" />
    </div>
  </example-container>
</width-controller>

```html
<div class="aspect-1/1">
  <img class="object-cover" src="..." alt="..." />
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:aspect-1/1` to apply the `aspect-16/9` utility at only medium screen sizes and above.

```html
<iframe class="w-full aspect-16/9 md:aspect-1/1" src="..."></iframe>
```