# Expandable - Overview

Expandable is a layout component used for creating content that can be expanded and collapsed. A title stays visible at all times; selecting it shows or hides the content underneath.

See also [Box](/components/box/overview.md), [Tabs](/components/tabs/overview.md), [Modal](/components/modal/overview.md), and [Divider](/components/divider/overview.md).

<ComponentsStatus />

## Examples

<script setup>
import { ref } from 'vue';

// Prototype: variant picker for the live example.
// The example lives inside <style-isolate>, which moves its content into a shadow root,
// so the picker reaches in and sets the variant attribute directly.
// The example's min-height (284px) fits the tallest case, Box with both items open in the
// Tori and Neutral brands (236px), plus 40px above and below (16px wrapper + 24px padding).
const exampleRoot = ref(null);

const onVariantChange = (event) => {
  const variant = event.target.value;
  const root = exampleRoot.value?.shadowRoot;
  if (!root) return;

  for (const expandable of root.querySelectorAll('w-expandable')) {
    expandable.setAttribute('variant', variant);
  }

  // Matches Figma: 8px between items, except Default with divider, where items sit flush.
  const stack = root.querySelector('[data-stack]');
  if (stack) stack.style.gap = variant === 'default-with-divider' ? '0' : '8px';
};
</script>

<ThemeSwitcher />

<div style="max-width: 20rem; margin-top: 16px;">
  <!-- Starting value is set on w-select, not with `selected` on an option: w-select 2.13 resets
       to any option marked `selected` whenever its value changes, so the label would never update. -->
  <w-select label="Variant" value="box" @change="onVariantChange">
    <option value="box">Box</option>
    <option value="box-bleed">Box bleed</option>
    <option value="default">Default</option>
    <option value="default-with-divider">Default with divider</option>
  </w-select>
</div>

<style-isolate ref="exampleRoot">
    <div style="display: flex; justify-content: center; align-items: flex-start; box-sizing: border-box; padding: 24px 0; min-height: 284px;">
        <div data-stack style="width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 8px;">
            <w-expandable title="What does shipping cost?" variant="box">
                <p>Shipping within Norway costs 99 kr. Orders over 1 000 kr ship for free.</p>
            </w-expandable>
            <w-expandable title="Can I return the item?" variant="box">
                <p>You can return the item within 14 days of delivery.</p>
            </w-expandable>
        </div>
    </div>
</style-isolate>

## General

An expandable lets users **choose how much detail they see**. The title tells them what is inside; the content stays out of the way until they ask for it. That makes it useful for secondary information on a busy page — shipping terms, specifications, answers to common questions — where showing everything at once would push the main content down.

Three properties define the component:

- **The title is always visible.** It is the only part users see before they decide to open the expandable, so it has to describe the content on its own.
- **Each expandable is independent.** Opening one does not close the others. Warp has no accordion behaviour that keeps only one section open at a time.
- **It starts collapsed.** You can render it expanded instead — see [Usage](/components/expandable/usage.md#behaviour).

## Anatomy

::: image-block

![Expanded box expandable with four numbered markers: 1 on the container, 2 on the title, 3 on the chevron, and 4 on the content.](/components/expandable/overview-anatomy.svg)

:::

1. **Container**: The surface that holds the expandable. It has a background only in the box types.
2. **Title**: Always visible.
3. **Chevron**: Points down when collapsed and up when expanded.
4. **Content**: Shown only when expanded.

## Variants

### Default

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/expandable/expandable-variants-default.svg" alt="Expanded default expandable: a bold title with an upward chevron beside it, and body text below. No background." />
  </div>
  <div>

A bold title with the chevron right next to it, and no background. Use it inside running content — an article, a product description, a form — where a container would add visual weight the content does not need.

  </div>
</div>

### Default with divider

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/expandable/expandable-variants-default-with-divider.svg" alt="Expanded default-with-divider expandable: a bold title with the chevron on the far right, body text, and a thin grey line underneath." />
  </div>
  <div>

No background, with a thin line separating each expandable from the next and the chevron at the far right. Use it for a stacked list of expandables, such as frequently asked questions.

  </div>
</div>

### Box

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/expandable/expandable-variants-box.svg" alt="Expanded box expandable: a light grey surface with rounded corners, the title on the left, the chevron on the far right, and body text below." />
  </div>
  <div>

A subtle grey surface with rounded corners and a chevron to the far right of the title. Use it when the expandable needs to stand apart from the content around it, such as a single block of extra detail in a page section.

  </div>
</div>

### Box bleed

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/expandable/expandable-variants-box-bleed.svg" alt="Expanded box bleed expandable: the same grey surface as Box, but with square corners." />
  </div>
  <div>

The box surface with square corners, for small screens where the expandable should run edge to edge.

  </div>
</div>

Not every variant is available on every platform. See the platform pages for what each one supports.

<component-questions />
