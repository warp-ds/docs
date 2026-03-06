> Backgrounds

# Background Attachment

Utilities for controlling how a background image behaves when scrolling.

## Quick reference

| Class | Description |
|-------|-------------|
| `bg-fixed` | `background-attachment: fixed` |
| `bg-local` | `background-attachment: local` |
| `bg-scroll` | `background-attachment: scroll` |

## Basic usage

### Fixed
Use `bg-fixed` to fix the background image relative to the viewport.

<example-container class="bg-fixed bg-[url(../../images/office-warping.png)] overflow-hidden h-[240] overflow-y-scroll overscroll-contain">
  <div class="s-bg/80 ex-inner-box s-text max-w-[400]">
    <h3>The science</h3>
    <p class="pd-text-sm">March 9th, 2023 · 14 min read</p>
    <p>General Relativity states that space and time are fused and that nothing can travel faster than the speed of light. General relativity also describes how mass and energy warp spacetime – hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many space-faring heroes worry about “getting stuck in” or “falling into” a gravity well.</p>
    <p>In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.</p>
  </div>
</example-container>

```html
<div class="bg-fixed ..."></div>
```

### Local
Use `bg-local` to scroll the background image with the container and the viewport.

<example-container class="bg-local bg-[url(../../images/office-warping.png)] overflow-hidden h-[240] overflow-y-scroll overscroll-contain">
  <div class="s-bg/80 ex-inner-box s-text max-w-[400]">
    <h3>The science</h3>
    <p class="pd-text-sm">March 9th, 2023 · 14 min read</p>
    <p>General Relativity states that space and time are fused and that nothing can travel faster than the speed of light. General relativity also describes how mass and energy warp spacetime – hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many space-faring heroes worry about “getting stuck in” or “falling into” a gravity well.</p>
    <p>In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.</p>
  </div>
</example-container>

```html
<div class="bg-local ..."></div>
```

### Scroll
Use `bg-scroll` to scroll the background image with the viewport, but not with the container.

<example-container class="bg-scroll bg-[url(../../images/office-warping.png)] overflow-hidden h-[240] overflow-y-scroll overscroll-contain">
  <div class="s-bg/80 ex-inner-box s-text max-w-[400]">
    <h3>The science</h3>
    <p class="pd-text-sm">March 9th, 2023 · 14 min read</p>
    <p>General Relativity states that space and time are fused and that nothing can travel faster than the speed of light. General relativity also describes how mass and energy warp spacetime – hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many space-faring heroes worry about “getting stuck in” or “falling into” a gravity well.</p>
    <p>In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.</p>
  </div>
</example-container>

```html
<div class="bg-scroll ..."></div>
```
