> Typography

# List Style Type

Utilities for controlling the bullet/number style of a list.

## Quick reference

| Class | Description |
|-------|-------------|
| `list-none` | `list-style-type: none` |
| `list-disc` | `list-style-type: disc` |
| `list-decimal` | `list-style-type: decimal` |
| `list-checked` | `.list-checked > li {   position:  relative   padding-left:  1.5em } .list-checked > li: : before {   content:  ""   position:  absolute   left:  0   width:  1em   height:  1.2em   background:  no-repeat 50%/contain var(--w-icon-list-checked) }` |

## Basic usage

### Setting the list style type
To create bulleted, checked or numeric lists, use the `list-disc`, `list-checked` and `list-decimal` utilities.

<example-container>
  <div class="ex-inner-box max-w-full flex flex-col gap-16">
    <div>
      <strong>list-disc</strong>
      <ul class="list-disc list-inside">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and man-made devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <strong>list-decimal</strong>
      <ul class="list-decimal list-inside">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and man-made devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <strong>list-checked</strong>
      <ul class="list-checked list-inside">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and man-made devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <strong>list-none</strong>
      <ul class="list-none">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and man-made devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
  </div>
</example-container>

```html
<ul class="list-disc ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-decimal ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-checked ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-none ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
```