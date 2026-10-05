# Dialog - Overview
A dialog is a focused overlay that requests a single decision or a short, critical message before the user continues.

<ComponentsStatus />

::: warning Android only
The basic dialog is currently implemented on Android only. On other platforms, use [Modal](../modal/overview.md).
:::

## General
A dialog interrupts the user, dims the content behind it, and disables interaction until it is dismissed. Use it for high-priority decisions or short, critical messages. Keep the title outcome-oriented, the body a single short sentence, and offer at most two actions.

For flows that span multiple inputs, use a [Full-screen dialog](../full-screen-dialog/overview.md) instead.

## Anatomy

A dialog is composed of:

1. **Icon (optional)** — a Warp icon or an image shown above the title. Centers the title when present.
2. **Title** — a short outcome-oriented headline.
3. **Body** — one short sentence describing the decision.
4. **Actions** — up to two quiet-style buttons: an optional secondary (leading) and an optional primary (trailing).

<component-questions />
