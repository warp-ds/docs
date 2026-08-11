# Box - Overview

Box is a layout component used for separating content areas on a page. It groups related information inside a subtle surface so users can tell where one block of content ends and the next begins.

See also [Alert](/components/alert/overview.md), [Card](/components/card/overview.md), and [Callout](/components/callout/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">Neutral</h3>
        <w-box neutral>
            <p>This is the <strong>neutral</strong> variant of the box element</p>
        </w-box>
    </div>
    <div>
        <h3 class="h4">Info</h3>
        <w-box info>
            <p>This is the <strong>info</strong> variant of the box element</p>
        </w-box>
    </div>
    <div>
        <h3 class="h4">Bordered</h3>
        <w-box bordered>
            <p>This is the <strong>bordered</strong> variant of the box element</p>
        </w-box>
    </div>
    <div>
        <h3 class="h4">With heading, text, link and button</h3>
        <w-box info>
            <h4 class="h4 mb-8">Delivery options</h4>
            <p class="mb-8">Choose how you want to receive your order. Delivery times are estimates and may vary by location.</p>
            <p class="mb-8"><a href="#">Read about delivery</a></p>
            <w-button variant="secondary" small>Change address</w-button>
        </w-box>
    </div>
    <div>
        <h3 class="h4">Bleed</h3>
        <p class="mb-8">On small screens the box stretches edge to edge. Resize the window to see the effect.</p>
        <w-box neutral bleed>
            <p>This box uses <strong>bleed</strong> to go full-width on small screens</p>
        </w-box>
    </div>
</style-isolate>

## General

Box is a passive container. It does not interrupt the user, it does not carry a status, and it is not clickable as a whole. Its job is to visually separate a chunk of content from the rest of the page so the page becomes easier to scan.

Because Box is a container, everything meaningful lives inside it. Any content is allowed on web: text, headings, lists, links, buttons, or other components. On iOS and Android the component also offers a structured layout with predefined slots for an icon, heading, body text, link, and button — see the framework pages for details.

Box is available in three types: **Neutral**, **Info**, and **Bordered**. The types are mutually exclusive — pick one. On web the variant is opt-in, so a box with no variant set renders padding and corner radius but no surface colour. Always set a variant explicitly.

## Variants

### Neutral

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/box/box-variants-neutral.svg" alt="Neutral box with an icon, heading, body text, link, and a secondary button on a light grey surface." />
  </div>
  <div class="py-16">

Use the neutral variant to group information that separates itself from other elements in a page layout.

Choose neutral when the content is generic and not necessarily tied to the main focus of the page — for example a summary block, a set of terms, or supporting details. It is the default in Figma and on the native platforms, and the safest choice when you are unsure.

  </div>
</div>

### Info

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/box/box-variants-info.svg" alt="Info box with an icon, heading, body text, link, and a secondary button on a light blue surface." />
  </div>
  <div class="py-16">

Use the info variant to highlight content that is related or relevant to the main focus of the page.

Info differs from an [Alert](/components/alert/overview.md) with the info variant. An alert is contextual and prompts the user to act on something that just happened. An info box is persistent page content that happens to deserve a little more attention.

  </div>
</div>

### Bordered

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/box/box-variants-bordered.svg" alt="Bordered box with an icon, heading, body text, link, and a secondary button on a white surface with a grey border." />
  </div>
  <div class="py-16">

Use the bordered variant on coloured or low-contrast backgrounds, where a neutral or info box would not read as a separate surface.

It also works as an alternative way to group information on a page that already uses several neutral boxes and needs visual variation.

  </div>
</div>

## Anatomy

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/box/box-variants-info.svg" alt="Box anatomy showing the container, icon, heading, body text, link, and button." />
  </div>
  <div class="py-16">

1. **Container**: The surface that holds the content. Carries the background, optional border, and corner radius that define the variant.
2. **Icon (optional)**: Reinforces the topic of the box. Decorative in most cases — do not use it as the only carrier of meaning.
3. **Heading (optional)**: Names the group of content. Keep it short and descriptive.
4. **Body text (optional)**: The main content of the box.
5. **Link (optional)**: Takes the user to related content elsewhere.
6. **Button (optional)**: A single supporting action. Use a secondary or utility button — the box is never the primary action on a page.

  </div>
</div>

_Note: a labelled anatomy diagram with numbered callouts is not yet available in Figma. The illustration above shows the info variant with all optional parts enabled._

## All variants

::: image-block
![The three box types side by side: neutral, info, and bordered.](/components/box/box-all-variants.svg)
:::

<component-questions />
