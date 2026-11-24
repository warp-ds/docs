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

A short row can be understood at a glance. When the dots become difficult to count, especially at narrow widths or high zoom, show a numeric position such as “3 of 12” or choose a navigation pattern that supports the full collection.

<DoDont>
<Do imgurl="/docs/components/pageindicator/DoDonts/usage-scannable-count-do.png" imgalt="Featured bike card for City commuter with labelled Previous bike and Next bike controls and a numeric position, 3 of 12.">

For a long sequence, show a numeric position such as “3 of 12”.

**Why**: People can understand their position without counting many dots.

</Do>
<Do not imgurl="/docs/components/pageindicator/DoDonts/usage-scannable-count-dont.png" imgalt="The same City commuter card shows twelve Page indicator dots instead of a numeric position.">

Use a long row of dots that is hard to count.

**Why**: A long row is hard to count, takes up space, and makes small position changes difficult to recognise.

</Do>
</DoDont>

## Behaviour and navigation

Keep the Page indicator synchronised with every way the content can move: previous and next controls, swipe or drag gestures, keyboard commands, and programmatic changes.

The indicator communicates position; the surrounding carousel or pager provides navigation. Web and Android indicators are passive. iOS dots can update the selected page when tapped, but they should still be supplementary to controls that are easy to find, operate, and understand.

<DoDont>
<Do imgurl="/docs/components/pageindicator/DoDonts/usage-navigation-do.png" imgalt="City commuter card with Previous bike and Next bike WARP Buttons above a five-dot Page indicator.">

Provide labelled previous and next controls with the Page indicator.

**Why**: Dedicated controls are easier to discover and can provide appropriate keyboard, touch, and assistive-technology behaviour.

</Do>
<Do not imgurl="/docs/components/pageindicator/DoDonts/usage-navigation-dont.png" imgalt="The same City commuter card shows only a five-dot Page indicator, with no visible previous or next controls.">

Rely on dots as the only visible navigation.

**Why**: The visible dots are too small to serve as the sole navigation target and are passive on Web and Android.

</Do>
</DoDont>

## Placement

Place the Page indicator inside or directly below the content it describes. Keep it horizontally centred within the carousel or pager so its location remains predictable as the content changes.

When content changes underneath the indicator, check every image or surface. Move the indicator outside the content if the dots disappear against it, and verify that both the current and remaining dots are distinguishable on the new surface.

<component-design-guidelines name="Warp - Components / Page indicator" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components?node-id=816-35117" />

## Sizing and alignment

Use 10px dots with an 8px gap on Web, 10pt dots with an 8pt gap on iOS, and 10dp dots with 8dp between them on Android. The component's width adjusts to the number of pages; do not stretch the row or change its height.

Centre the complete row rather than the active dot. The row should stay in the same position while the selected state moves from one dot to another.

<component-questions />
