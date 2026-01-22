# Text area - Overview
A text area allows users to input extended text content that covers multiple lines.

<ComponentsStatus />

## General
A text area is used to capture extended user input, such as messages, item descriptions, comments, or reviews. Unlike the Text field component, Text area offers a more spacious input experience.

Related components: [Text field](../text-field/overview.md).

## Examples
<ThemeSwitcher />
<textarea-example />

## Variants

### Default

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/overview-variants-default.svg" alt="Default text area with label, placeholder and help text" />
  </div>

  <div>
  Input with a label, placeholder, and help text below. Useful for most cases, when clarity is important and the field needs context (Label) and guidance (Help text).
  </div>
</div>

### Label only 

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/overview-variants-label_only.svg" alt="Text area with label only" />
  </div>

  <div>
  Input with a label above the text area and no help text. Useful for compact layouts or when additional guidance isn’t required. Common in short or repeated forms (e.g. settings, profile forms).
  </div>
</div>

### Text area only 

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/overview-variants-text_area_only.svg" alt="Text area with label only" />
  </div>

  <div>
  A bare input with only a placeholder inside, and no label or help text. Use with <b>extreme caution</b>. Best suited for one-off interactions.
  </div>
</div>

### Optional

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/overview-variants-optional.svg" alt="Text area with label, followed by optional tag" />
  </div>

  <div>
  Input with an optional label, indicating that user input is not required. Useful in longer forms where not all fields must be filled out.
  </div>
</div>

### Info tooltip

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/overview-variants-info_tooltip.svg" alt="Text area with label, followed by info icon" />
  </div>

  <div>
  Input with an info icon that opens a tooltip. Useful when users may need additional context or guidance on how to fill out the area.
  </div>
</div>

## Anatomy

:::image-block
![Anatomy illustration, 1-6](/components/textarea/overview-anatomy.svg)
:::

1. Input label 
2. Optional indicator (optional)
3. Info tooltip icon (optional)
4. Input area
5. Resize handle
6. Help text (optional)

<component-questions />