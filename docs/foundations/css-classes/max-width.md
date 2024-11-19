> Sizing

# Max-Width

Utilities for setting the maximum width of an element.

## Quick reference

| Class                    | Description                             |
|--------------------------|-----------------------------------------|
| `max-w-none`             | `max-width: none`                       |
| `max-w-full`             | `max-width: 100%`                       |
| `max-w-min`              | `max-width: min-content`                |
| `max-w-max`              | `max-width: max-content`                |
| `max-w-fit`              | `max-width: fit-content`                |
| `max-w-prose`            | `max-width: 65ch`                       |
| `max-w-{size}`           | `max-width: {size}`                     |
| `max-w-{fraction}`       | `max-width: {fraction}`                 |
| ~~`max-w-{breakpoint}`~~ | `max-width: {breakpoint}` (Unsupported) |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />
> `{fraction}`: _Any fraction is valid - e.g. `1/5`_<br/>
> `{breakpoint}`: `sm`, `md`, `lg`

::: warning `max-w-{breakpoint}` not yet supported
This functionality is not yet supported! If you need this, reach out to us on [#smp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Basic usage

### Setting the maximum width
Set the maximum width of an element using the `max-w-{size}` utilities.

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--blue flex justify-center">
      <section class="ex-box pd-bg-white max-w-[300]">
        <img src="/images/20s-scientists.jpg" class="h-128 w-128 rounded-full" alt="AI generated picture of 1920s scientists working on a warp drive" />
        <p class="pd-text-slate-900 pl-16">AI generated picture of warp scientists from the 1920s</p>
      </section>
    </div>
  </example-container>
</width-controller>

```html
<div class="max-w-[300] ...">
  <!-- ... -->
</div>
```

<!-- TODO: Unsupported
### Constraining to your breakpoints
The `max-w-screen-{breakpoint}` classes can be used to give an element a max-width matching a specific breakpoint.

```html
<div class="max-w-screen-md"></div>
```
-->

### Arbitrary values
If you need to use a one-off `max-width` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="max-w-[50]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:max-w-lg` to apply the `max-w-lg` utility at only medium screen sizes and above.

```html
<div class="max-w-sm md:max-w-lg">
  <!-- ... -->
</div>
```
