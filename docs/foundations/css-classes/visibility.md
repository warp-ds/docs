> Layout

# Visibility

Utilities for controlling the visibility of an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `visible` | `visibility: visible` |
| `invisible` | `visibility: hidden` |

## Basic usage

### Making elements invisible

Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements (compare with `.hidden` from the `display` documentation).

<example-container>
  <div class="grid grid-cols-3 gap-16">
   <div class="ex-box pd-bg-fuchsia-500">01</div>
   <div class="ex-box pd-bg-fuchsia-500 invisible">02</div>
   <div class="ex-box pd-bg-fuchsia-500">03</div>
  </div>
</example-container>

```html{3}
<div class="...">
  <div>01</div>
  <div class="invisible ...">02</div>
  <div>03</div>
</div>
```

<!--

#TODO: Collapse doesnt work

Sidenote:  Visibility: collapse used to have / has(?) so many weird quirks that we might wanna keep it ignored(?).
I think Chrome still treats it = visibility: hidden which makes it kinda useless.
https://caniuse.com/mdn-css_properties_visibility_collapse


### Collapsing elements

Use `collapse` to hide table rows, row groups, columns, and column groups as if they were set to `display: none`, but without impacting the size of other rows and columns.

This makes it possible to dynamically toggle rows and columns without affecting the table layout.

<example-container>
  <h4>Showing all rows</h4>
  <table class="docs-table mb-16">
    <thead>
      <tr>
        <th>#</th>
        <th>Scientist</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Justina Matter</td>
        <td>Warp Scientist</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Narve Hoops</td>
        <td>Warp Scientist</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Dagny Calamity</td>
        <td>Warp Scientist</td>
      </tr>
    </tbody>
  </table>
  <h4>Hiding a row using `collapse`</h4>
  <table class="docs-table mb-16">
    <thead>
      <tr>
        <th>#</th>
        <th>Scientist</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Justina Matter</td>
        <td>Warp Scientist</td>
      </tr>
      <tr class="collapse" style="visibility: collapse;">
        <td>2</td>
        <td>Narve Hoops</td>
        <td>Warp Scientist</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Dagny Calamity</td>
        <td>Warp Scientist</td>
      </tr>
    </tbody>
  </table>
  <h4>Hiding a row using `hidden`</h4>
  <table class="docs-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Scientist</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Justina Matter</td>
        <td>Warp Scientist</td>
      </tr>
      <tr class="hidden">
        <td>2</td>
        <td>Narve Hoops</td>
        <td>Warp Scientist</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Dagny Calamity</td>
        <td>Warp Scientist</td>
      </tr>
    </tbody>
  </table>
</example-container>

```html{15}
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Scientist</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Justina Matter</td>
        <td>Warp Scientist</td>
      </tr>
      <tr class="collapse ...">
        <td>2</td>
        <td>Narve Hoops</td>
        <td>Warp Scientist</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Dagny Calamity</td>
        <td>Warp Scientist</td>
      </tr>
    </tbody>
  </table>
```

-->

### Making elements visible
Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes or other conditionals.

<example-container>
  <div class="grid grid-cols-3 gap-16">
    <div class="s-bg-subtle rounded">
      <div class="ex-box ex-bg--dotted ex-bg--white relative pd-text-slate-500">Invisible <div class="invisible">01</div></div>
    </div>
    <div class="s-bg-subtle rounded">
      <div class="ex-box ex-bg--dotted ex-bg--white relative pd-text-slate-800 group overflow-hidden">
        Hover me
        <div class="absolute inset-0 flex items-center justify-center pd-bg-indigo-500 pd-text-white invisible group-hover:visible">02</div>
      </div>
    </div>
    <div class="s-bg-subtle rounded">
      <div class="ex-box ex-bg--dotted ex-bg--white relative pd-text-slate-500">Invisible <div class="invisible">03</div></div>
    </div>
  </div>
</example-container>

```html{8}
<div>
  <div class="...">
    Invisible
    <div class="invisible">01</div>
  </div>
  <div class="group ...">
    Hover me
    <div class="invisible group-hover:visible ...">02</div>
  </div>
  <div class="...">
    Invisible
    <div class="invisible">02</div>
  </div>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:invisible` to apply the `invisible` utility at only medium screen sizes and above.

```html
<div class="visible md:invisible">
  <!-- ... -->
</div>
```
