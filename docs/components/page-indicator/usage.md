# Page indicator - Usage

Page indicators help people understand their position within a short, ordered sequence.

<ComponentsStatus />

## Guidelines

### When to use

- Use for a carousel, pager, or short flow where only one item is visible at a time.
- Use when showing the total and current position helps people understand that more content is available.
- Keep the sequence ordered and stable so each dot continues to represent the same position.

### When not to use

- Do not show a Page indicator for a single item.
- Do not use it for a long or unordered collection.
- Do not use it when people need to jump directly to an indexed page. Use [Pagination](/components/pagination/overview.md).
- Do not use the indicator as a replacement for carousel or pager controls.

## Page count

A short row can be understood as a pattern at a glance. Beyond eight dots, the total and current position become difficult to count, especially at narrow widths or high zoom. For a longer sequence, show a numeric position such as “3 of 12” or choose a navigation pattern that supports the full collection.

<DoDont>
<Do imgurl="/docs/components/pageindicator/DoDonts/usage-scannable-count-do.svg" imgalt="A carousel uses five Page indicator dots in a short, scannable row.">

Keep the number of dots short enough to count at a glance.

**Why**: A compact row communicates both the total and current position without demanding careful counting.

</Do>
<Do not imgurl="/docs/components/pageindicator/DoDonts/usage-scannable-count-dont.svg" imgalt="A carousel uses twelve Page indicator dots in a long, crowded row.">

Show a dot for every item in a long collection.

**Why**: A long row is hard to count, takes up space, and makes small position changes difficult to recognise.

</Do>
</DoDont>

## Behaviour and navigation

Keep the Page indicator synchronised with every way the content can move: previous and next controls, swipe or drag gestures, keyboard commands, and programmatic changes.

The indicator communicates position; the surrounding carousel or pager provides navigation. Web and Android indicators are passive. iOS dots can update the selected page when tapped, but they should still be supplementary to controls that are easy to find, operate, and understand.

<DoDont>
<Do imgurl="/docs/components/pageindicator/DoDonts/usage-navigation-do.svg" imgalt="A carousel provides visible previous and next controls as well as a passive Page indicator.">

Provide clear carousel controls and use the Page indicator as supporting status.

**Why**: Dedicated controls are easier to discover and can provide appropriate keyboard, touch, and assistive-technology behaviour.

</Do>
<Do not imgurl="/docs/components/pageindicator/DoDonts/usage-navigation-dont.svg" imgalt="A carousel provides only tiny Page indicator dots, with a pointer trying to use one as navigation.">

Make the dots the only way to move through the sequence.

**Why**: The visible dots are too small to serve as the sole navigation target and are passive on Web and Android.

</Do>
</DoDont>

## Placement

Place the Page indicator inside or directly below the content it describes. Keep it horizontally centred within the carousel or pager so its location remains predictable as the content changes.

- **Inside the content**: Leave 12px between the indicator and the bottom edge.
- **Outside the content**: Leave 24px between the content and the indicator.

<div class="flex flex-col gap-20 w-full md:flex-row">
  <div class="w-full md:w-1/2">
    <img src="/components/pageindicator/placement-inside.svg" alt="Page indicator centred inside the content container with 12px bottom spacing." />
  </div>
  <div class="w-full md:w-1/2">
    <img src="/components/pageindicator/placement-outside.svg" alt="Page indicator centred below the content container with 24px spacing." />
  </div>
</div>

When content changes underneath the indicator, verify every image or surface. If either the active or inactive dots can disappear against the background, place the indicator outside the content on a stable surface.

<DoDont>
<Do imgurl="/docs/components/pageindicator/DoDonts/usage-contrast-do.svg" imgalt="A Page indicator sits below an image on a plain surface where active and inactive dots are clear.">

Place the indicator outside the content when that gives every dot reliable contrast.

**Why**: A stable surface keeps the current position visible across the whole sequence.

</Do>
<Do not imgurl="/docs/components/pageindicator/DoDonts/usage-contrast-dont.svg" imgalt="A Page indicator sits over an image where the inactive dots blend into the background.">

Place the indicator over content that makes some dots disappear.

**Why**: Variable imagery can hide the inactive dots and make the total impossible to understand.

</Do>
</DoDont>

<component-design-guidelines name="Warp - Components / Page indicator" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components?node-id=816-35117" />

## Sizing and alignment

Use the component's standard 10px dots and 8px gap. Its width adjusts to the number of pages; do not stretch the row or change its height.

Centre the complete row rather than the active dot. The row should stay in the same position while the selected state moves from one dot to another.

<component-questions />
