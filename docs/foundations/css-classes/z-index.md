---
title: Z-Index
description: Utilities for controlling the stack order of an element in Warp UnoCSS.
---

# Z-Index

Utilities for controlling the stack order of an element.

## Quick reference

| Class       | Description           |
|-------------|-----------------------|
| `z-{index}` | `z-index: {index}`    |

> Available values <br />
> `{index}`: `0`, `10`, `20`, `30`, `40`, `50` , `auto`

Warp uses a **limited z-index scale** to ensure consistent layering across the design system.
This helps prevent overlap bugs, “z-index wars,” and unpredictable UI behavior.

---

## The NMP and the z-index

For the site to behave in a predictable way, we follow a strict scheme when it comes to z-index.
The z-index should be kept within these semantic layers:

| Layer | Class | Description |
|--------|--------|-------------|
| Modals & overlays | `z-30` | Elements meant to lay on top of everything else |
| Header | `z-20` | Sticky headers, navigation bars, and similar fixed elements |
| Content | `z-10` | The rest of the content including cards and dropdowns |
| Base | `z-0` | Normal stacking order |
| Auto | `z-auto` | Uses browser’s default stacking behavior |

> **Keep it minimal.** Everything should fit within these defined layers unless a strong reason exists to expand.
> For special cases, consider creating a local stacking context rather than increasing the z-index.

---

## Basic usage

### Setting the z-index

Control the stack order (or three-dimensional positioning) of an element in Warp, regardless of order it has been displayed, using the `z-{index}` utilities.

<example-container>
  <div class="flex justify-center -space-x-24">
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-pink-500">01</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-fuchsia-500 pd-shadow-md">02</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-purple-500 pd-shadow-md">03</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-violet-500 pd-shadow-md z-30">04</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-indigo-500 pd-shadow-md z-20">05</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-blue-500 pd-shadow-md z-10">06</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-cyan-500 pd-shadow-md z-0">07</div>
  </div>
</example-container>

```html
<div class="z-30 ...">Modal</div>
<div class="z-20 ...">Header</div>
<div class="z-10 ...">Content</div>
<div class="z-0 ...">Base</div>
```

---

## Practical Examples

### Sticky Header and Dropdown

```html
<nav class="sticky z-20 top-0 ..."> ... </nav>
<main class="z-10 relative ...">
  <div class="z-20 ...">Dropdown (Above content but scrolls with content and goes underneath the sticky top)</div>
</main>
```
The header (`z-20`) stays above content (`z-10`),
and dropdowns inside the content area can layer correctly without jumping above global headers.

---

## Understanding Stacking Contexts

A **stacking context** is an isolated rendering layer created by certain CSS properties such as:

- `position` with non-static value (`relative`, `absolute`, `fixed`, `sticky`)
- `z-index` (when used with position)
- `opacity` < 1
- `transform`, `filter`, or `perspective`
- `isolation: isolate`
- `will-change` or `mix-blend-mode`

Each context manages its own z-index order — values do not cross between contexts.

### Creating Controlled Stacking Contexts

```css
.container {
  position: relative;
  z-index: 0; /* establishes new stacking context */
}
```

Then, inside that context, smaller z-index values can be used safely:

```html
<div class="container z-0">
  <div class="dropdown z-10">Dropdown within local context</div>
</div>
```

### Why Warp Limits Arbitrary z-index Values

Allowing arbitrary z-index values quickly leads to conflicts between teams and components.
Warp’s strict layering system ensures:

- Predictable behavior across frameworks and components
- Visual consistency across modals, headers, and dropdowns
- Isolation-friendly stacking without magic numbers

If unique stacking is needed, create a new stacking context instead of raising z-index globally.

---

## References

- [MDN: Understanding z-index and stacking contexts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [CSS Tricks: What No One Told You About Z-Index](https://css-tricks.com/what-no-one-told-you-about-z-index/)
- [Chrome: CSS Stacking Context Inspector](https://chromewebstore.google.com/detail/css-stacking-context-insp/apjeljpachdcjkgnamgppgfkmddadcki)

---

> **Remember:** In Warp, consistency often have to beat flexibility.
> The fewer z-index values we have and need, the fewer layering issues we will have.
