> Layout

# Columns

Utilities for controlling the number of columns within an element.

## Quick reference

| Class           | Description     |
|-----------------|-----------------|
| `columns-{n}`   | `columns: {n}`  |
| `columns-auto`  | `columns: auto` |

> Available values <br />
> `{n}`: `1` through `12` <br />

## Basic usage

### Adding based on column count
Use the `columns-{count}` utilities to set the number of columns that should be created for the content within an element.
The column width will be automatically adjusted to accommodate that number.

<example-container>
  <div class="columns-3 gap-x-24">
    <div class="ex-bg--striped ex-bg--fuchsia">
      <div class="relative">
        <img class="w-full mb-24" src="/images/la09.jpg" alt="Ai generated line drawing of warp scientists" />
        <div class="ex-pic-no">1</div>
      </div>
      <div class="relative">
        <div class="aspect-1/1 mb-24">
          <img class="w-full object-cover" src="/images/la01.jpg" alt="Ai generated line drawing of warp related scene">
        </div>
        <div class="ex-pic-no">2</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/images/la02.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="ex-pic-no">3</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/images/la06.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="ex-pic-no">4</div>
      </div>
      <div class="relative">
        <div class="aspect-1/1 mb-24">
          <img class="w-full object-cover" src="/images/la03.jpg" alt="Ai generated line drawing of warp related scene">
        </div>
        <div class="ex-pic-no">5</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/images/la04.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="ex-pic-no">6</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/images/la11.jpg" alt="Ai generated line drawing of warp scientists">
        <div class="ex-pic-no">7</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/images/la05.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="ex-pic-no">8</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/images/la07.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="ex-pic-no">9</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/images/la10.jpg" alt="Ai generated line drawing of warp scientists">
        <div class="ex-pic-no">10</div>
      </div>
      <div class="relative">
        <img class="w-full mb-24" src="/images/la08.jpg" alt="Ai generated line drawing of warp related scene">
        <div class="ex-pic-no">11</div>
      </div>
      <div class="relative">
        <div class="aspect-1/1 mb-24">
          <img class="w-full" src="/images/la12.jpg" alt="Ai generated line drawing of warp scientists">
        </div>
        <div class="ex-pic-no">12</div>
      </div>
    </div>
  </div>
</example-container>

```html{1}
<div class="columns-3 ...">
  <img class="w-full ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  <!-- ... -->
</div>
```

### Setting the column gap
To specify the width between columns, you can use the `gap-x` utilities.

<example-container>
  <div class="columns-3 gap-x-24 ex-bg--striped ex-bg--fuchsia">
    <div class="bg-[--vp-c-bg-soft]">
      <img class="w-full mb-24" src="/images/la09.jpg" alt="Ai generated line drawing of warp scientists">
      <div class="aspect-square object-cover mb-24">
        <img class="w-full" src="/images/la01.jpg" alt="Ai generated line drawing of warp related scene">
      </div>
      <img class="w-full" src="/images/la02.jpg" alt="Ai generated line drawing of warp related scene">
    </div>
    <div class="bg-[--vp-c-bg-soft]">
      <div class="aspect-square object-cover mb-24">
        <img class="w-full" src="/images/la03.jpg" alt="Ai generated line drawing of warp related scene"></div>
      <img class="w-full mb-24" src="/images/la04.jpg" alt="Ai generated line drawing of warp related scene">
      <img class="w-full" src="/images/la11.jpg" alt="Ai generated line drawing of warp scientists">
    </div>
    <div class="bg-[--vp-c-bg-soft]">
      <img class="w-full mb-24" src="/images/la07.jpg" alt="Ai generated line drawing of warp related scene">
      <img class="w-full mb-24" src="/images/la10.jpg" alt="Ai generated line drawing of warp scientists">
      <div class="aspect-square object-cover">
        <img class="w-full" src="/images/la08.jpg" alt="Ai generated line drawing of warp related scene">
      </div>
    </div>
  </div>
</example-container>

```html{1}
<div class="gap-x-24 columns-3 ...">
  <img class="w-full ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off columns value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="columns-[13]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:columns-3` to apply the `columns-3` utility at only medium screen sizes and above.

```html
<div class="columns-2 md:columns-3">
  <!-- ... -->
</div>
```
