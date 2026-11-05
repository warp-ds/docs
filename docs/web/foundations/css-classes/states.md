> Core Concepts

# Handling Hover, Focus and Other States

Using utilities to style elements on hover, focus, and more.

## Basic usage

Every utility class in Warp can be applied conditionally by adding a modifier to the beginning of the class name that describes the condition you want to target.

For example, to apply the `p-16` class (padding:16px) on the sm breakpoint (from 480px and up), use the `sm:p-16` class.

## Modifier support

Warp includes modifiers for just about everything you’ll ever need, including:

- Pseudo-classes, like `:hover`, `:focus`, `:first-child`, and `:required`
- Pseudo-elements, like `::before`, `::after`, `::placeholder`, and `::selection`
- Media and feature queries, like responsive breakpoints, dark mode, and prefers-reduced-motion
- Attribute selectors, like `[open]`

## Quick reference

| Class                | Description                                                    |
|----------------------|----------------------------------------------------------------|
| `hover:`             | `&:hover`                                                      |
| `focus:`             | `&:focus`                                                      |
| `focus-within:`      | `&:focus-within`                                               |
| `focus-visible:`     | `&:focus-visible`                                              |
| `active:`            | `&:active`                                                     |
| `visited:`           | `&:visited`                                                    |
| `target:`            | `&:target`                                                     |
| `first:`             | `&:first-child`                                                |
| `last:`              | `&:last-child`                                                 |
| `only:`              | `&:only-child`                                                 |
| `odd:`               | `&:nth-child(odd)`                                             |
| `even:`              | `&:nth-child(even)`                                            |
| `first-of-type:`     | `&:first-of-type`                                              |
| `last-of-type:`      | `&:last-of-type`                                               |
| ~~`only-of-type:`~~  | (unsupported) `&:only-of-type`                                 |
| `empty:`             | `&:empty`                                                      |
| `disabled:`          | `&:disabled`                                                   |
| `enabled:`           | `&:enabled`                                                    |
| `checked:`           | `&:checked`                                                    |
| `indeterminate:`     | `&:indeterminate`                                              |
| `default:`           | `&:default`                                                    |
| `required:`          | `&:required`                                                   |
| `valid:`             | `&:valid`                                                      |
| `invalid:`           | `&:invalid`                                                    |
| `in-range:`          | `&:in-range`                                                   |
| `out-of-range:`      | `&:out-of-range`                                               |
| `placeholder-shown:` | `&:placeholder-shown`                                          |
| `autofill:`          | `&:autofill`                                                   |
| `read-only:`         | `&:read-only`                                                  |
| `before:`            | `&::before`                                                    |
| `after:`             | `&::after`                                                     |
| `first-letter:`      | `&::first-letter`                                              |
| `first-line:`        | `&::first-line`                                                |
| `marker:`            | `&::marker`                                                    |
| `selection:`         | `&::selection`                                                 |
| `file:`              | `&::file-selector-button`                                      |
| `backdrop:`          | `&::backdrop`                                                  |
| `placeholder:`       | `&::placeholder`                                               |
| `sm:`                | `@media (min-width: 480px)`                                    |
| `md:`                | `@media (min-width: 768px)`                                    |
| `lg:`                | `@media (min-width: 990px)`                                    |
| `xl:`                | `@media (min-width: 1330px)`                                   |
| ~~`dark:`~~          | (unsupported) `@media (prefers-color-scheme: dark)`            |
| ~~`portrait:`~~      | (unsupported) `@media (orientation: portrait)`                 |
| ~~`landscape:`~~     | (unsupported) `@media (orientation: landscape)`                |
| ~~`motion-safe:`~~   | (unsupported) `@media (prefers-reduced-motion: no-preference)` |
| ~~`motion-reduce:`~~ | (unsupported) `@media (prefers-reduced-motion: reduce)`        |
| ~~`contrast-more:`~~ | (unsupported) `@media (prefers-contrast: more)`                |
| ~~`contrast-less:`~~ | (unsupported) `@media (prefers-contrast: less)`                |
| ~~`print:`~~         | (unsupported) `@media print`                                   |
| ~~`supports-[…]:`~~  | (unsupported) `@supports (…)`                                  |
| ~~`aria-checked:`~~  | (unsupported) `&[aria-checked=“true”]`                         |
| ~~`aria-disabled:`~~ | (unsupported) `&[aria-disabled=“true”]`                        |
| ~~`aria-expanded:`~~ | (unsupported) `&[aria-expanded=“true”]`                        |
| ~~`aria-hidden:`~~   | (unsupported) `&[aria-hidden=“true”]`                          |
| ~~`aria-pressed:`~~  | (unsupported) `&[aria-pressed=“true”]`                         |
| ~~`aria-readonly:`~~ | (unsupported) `&[aria-readonly=“true”]`                        |
| ~~`aria-required:`~~ | (unsupported) `&[aria-required=“true”]`                        |
| ~~`aria-selected:`~~ | (unsupported) `&[aria-selected=“true”]`                        |
| ~~`aria-[…]:`~~      | (unsupported) `&[aria-…]`                                      |
| ~~`data-[…]:`~~      | (unsupported) `&[data-…]`                                      |
| `open:`              | `&[open]`                                                      |

## Pseudo-classes

### Hover, focus, and active
Style elements on hover, focus, and active using the `hover`, `focus`, and `active` modifiers.

```html
<div class="s-bg-positive hover:s-bg-positive-hover"></div>
```

Warp also includes modifiers for other interactive states like `:visited`, `:focus-within`, `:focus-visible`, and more.

### First, last, odd, and even
Style an element when it is the first-child or last-child using the `first` and `last` modifiers.

```html
<ul role="list" class="p-8 ...">
    <!-- Remove top/bottom padding when first/last child -->
    <li class="flex py-8 first:pt-0 last:pb-0 ...">...</li>
    <!-- ... -->
</ul>
```

You can also style an element when it’s an odd or even child using the `odd` and `even` modifiers

```html
<table>
  <!-- ... -->
  <tbody>
      <!-- Use a white background for odd rows, and subtle for even rows -->
      <tr class="odd:bg-white even:bg-subtle">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
      <!-- ... -->
  </tbody>
</table>
```

Warp also includes modifiers for other structural pseudo-classes like `:only-child`, `:first-of-type`, `:empty`, and more.

### Form states
Style form elements in different states using modifiers like `required`, `invalid`, and `disabled`.

```html
<input
  type="text"
  value="stellar"
  disabled
  class="
    w-full
    bg-white
    border
    s-border
    focus:s-border-focus
    disabled:s-border-disabled
    invalid:s-border-invalid
"/>
```

Warp also includes modifiers for other form states like `:read-only`, `:indeterminate`, `:checked`, and more.

We should always use the Warp components for form elements if possible, they handle state styling internally by Warp automagic.


## Pseudo-elements

### Before and after
Style the ::before and ::after pseudo-elements using the `before` and `after` modifiers.

```html
  <span class="after:ml-16 ..."></span>
```

It’s worth noting that you don’t really need `::before` and `::after` pseudo-elements for most things in Warp projects — it’s usually simpler to just use a real HTML element.

### Placeholder text
Style the placeholder text of any input or textarea using the `placeholder` modifier.

```html
  <input class="placeholder:s-text-placeholder ... " placeholder="Search for anything..." type="text" name="dingbat"/>
```

### File input buttons
Style the button in file inputs using the file modifier.

```html
<input type="file" class="file:mr-16 ... "/>
```

### List markers
Style the counters or bullets in lists using the marker modifier.

<example-container>
  <div class="ex-inner-box">
    <ul class="list-disc list-inside s-text mb-0">
      <li>Default disc</li>
      <li class="marker:s-text-negative">Negative disc</li>
      <li class="marker:s-text-positive">Positive disc</li>
    </ul>
  </div>
</example-container>

```html
<ul class="list-disc list-inside ...">
  <li>Default disc</li>
  <li class="marker:s-text-negative">Negative disc</li>
  <li class="marker:s-text-positive">Positive disc</li>
</ul>
```

### Highlighted text
Style the active text selection using the selection modifier.

<example-container>
  <div class="ex-inner-box s-text max-w-full selection:s-bg-positive">
    Space and time are two fundamental concepts that have captivated human imagination for centuries.
    Space is the vast expanse that surrounds us, both on Earth and beyond, including galaxies, stars, and planets.
    Time, on the other hand, is the dimension that dictates the order and duration of events in the universe.
    The relationship between space and time is intricately linked through the concept of spacetime, which emerged from Einstein's theory of relativity.
    Spacetime is a four-dimensional concept that merges the three dimensions of space with the fourth dimension of time to form a space-time continuum.
    It is a fundamental concept in modern physics and our understanding of the universe.
  </div>
</example-container>

```html
<div class="selection:s-bg-positive">
  Space and time are two fundamental concepts...
</div>
```

### Dialog backdrops
Style the backdrop of a native `<dialog>` element using the `backdrop` modifier.

```html
<dialog class="backdrop:opacity-25 ...">
  <form method="dialog">
    <!-- ... -->
  </form>
</dialog>
```

If you’re using native `<dialog>` elements in your project, you may also want to read about styling `open/closed` states using the `open` modifier.

## Media and feature queries

### responsive breakpoints
To style an element at a specific breakpoint, use responsive modifiers like `md` and `lg`.

For example, this will render a 3-column grid on mobile, a 4-column grid on medium-width screens,
and a 6-column grid on large-width screens.

```html
<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
  <!-- ... -->
</div>
```

### Prefers reduced motion
The `prefers-reduced-motion` media query tells you if the user has requested that you minimize non-essential motion.

Use the `motion-reduce` modifier to conditionally add styles when the user has requested reduced motion.

```html
<button type="button" disabled>
  <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24"><!-- ... --></svg>
  Processing...
</button>
```

Warp also includes a `motion-safe` modifier that only adds styles when the user has not requested reduced motion.
This can be useful when using the `motion-reduce` helper would mean having to “undo” a lot of styles.
