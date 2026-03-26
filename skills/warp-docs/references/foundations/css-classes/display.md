# Display

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/display

> Layout

Utilities for controlling the display box type of elements.

| Class | Description |
| --- | --- |
| hidden | display: none |
| block | display: block |
| inline-block | display: inline-block |
| inline | display: inline |
| flex | display: flex |
| inline-flex | display: inline-flex |
| table | display: table |
| inline-table | display: inline-table |
| table-caption | display: table-caption |
| table-cell | display: table-cell |
| table-column | display: table-column |
| table-column-group | display: table-column-group |
| table-footer-group | display: table-footer-group |
| table-header-group | display: table-header-group |
| table-row-group | display: table-row-group |
| table-row | display: table-row |
| flow-root | display: flow-root |
| grid | display: grid |
| inline-grid | display: inline-grid |
| contents | display: contents |
| list-item | display: list-item |

Use `inline`, `inline-block`, and `block` to control the flow of text and elements.

```html
<div>
  When controlling the flow of text, using the CSS property
  <span class="inline">display: inline</span>
  will cause the text inside the element to wrap normally.

  While using the property
  <span class="inline-block">display: inline-block</span>
  will wrap the element to prevent the text inside from extending beyond its parent.

  Lastly, using the property
  <span class="block">display: block</span>
  will put the element on its own line and fill its parent.
</div>
```

Use `flow-root` to create a block-level element with its own block formatting context.

```html
  <div class="flow-root ...">
    <div class="my-16 ...">Well, let me tell you something, ...</div>
  </div>
  <div class="flow-root ...">
    <div class="my-16 ...">Sure, go ahead, laugh if you want...</div>
  </div>
```

Use `flex` to create a block-level flex container.

```html
<div class="flex items-center">
  <img src="..." alt="..."/>
  <div>
    <div>Justina Matter</div>
    <span>Warp Scientist</span>
  </div>
</div>
```

#### Inline Flex 

Use `inline-flex` to create an inline flex container that flows with text.

```html
<p>
  Today I spent most of the day researching ways to ...
  <span class="inline-flex items-baseline ...">
    <img src="..." alt="..." class="self-center ..." />
    <span class="...">Kramer</span>
  </span>
  keeps telling me there is no way to make it work, that ...
</p>
```

Use `grid` to create a grid container.

```html
<div class="grid gap-4 grid-cols-3 grid-rows-3">
  <div>01</div>
  <!-- ... -->
  <div>08</div>
</div>
```

#### Inline Grid 

Use `inline-grid` to create a inline grid container.

```html
<span class="inline-grid grid-cols-3 gap-16">
  <span>01</span>
  <!-- ... -->
  <span>06</span>
</span>
<span class="inline-grid grid-cols-3 gap-16">
  <span>01</span>
  <!-- ... -->
  <span>06</span>
</span>
```

Use contents to create a “phantom” container whose children act like direct children of the parent.

```html
<div class="flex ...">
  <div class="flex-1 ...">01</div>
  <div class="contents">
    <div class="flex-1 ...">02</div>
    <div class="flex-1 ...">03</div>
  </div>
  <div class="flex-1 ...">04</div>
</div>
```

Use the `table`, `table-row`, `table-cell`, `table-caption`, `table-column`, `table-column-group`, `table-header-group`, `table-row-group`, and `table-footer-group` utilities to create elements that behave like their respective table elements.

```html
<div class="table w-full ...">
  <div class="table-header-group ...">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">Manic Depression</div>
      <div class="table-cell ...">Jimi Hendrix</div>
      <div class="table-cell ...">1967</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">(Ballad Of) The Hip Death Goddess</div>
      <div class="table-cell ...">Ultimate Spinach</div>
      <div class="table-cell ...">1968</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Sonic Prayer</div>
      <div class="table-cell ...">Earthless</div>
      <div class="table-cell ...">2017</div>
    </div>
  </div>
</div>
```

Use `hidden` to set an element to `display: none` and remove it from the page layout (compare with `.invisible` from the `visibility` documentation).

```html
<div class="...">
  <div class="hidden ...">01</div>
  <div>02</div>
  <div>03</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:inline-flex` to apply the `inline-flex` utility at only medium screen sizes and above.

```html
<div class="flex md:inline-flex">
  <!-- ... -->
</div>
```
