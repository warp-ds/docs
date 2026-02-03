# Text field - Overview
A text field is a single-line input component used for entering and editing textual data.

<ComponentsStatus />

## General
It supports a wide range of behaviours, labels, icons, prefixes/suffixes, tooltips, and error handling to support various use cases and accessibility needs. Text fields are a fundamental element of forms and search experiences across the product ecosystem.

Related components: [Text area](../text-area/overview.md), [Select](../select/overview.md).

## Examples
<ThemeSwitcher />
<textfield-example />

## Variants

### Default

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variants-default.svg" alt="Default text field with label, placeholder and help text" />
  </div>

  <div>
  Standard input with a label, placeholder, and optional help text below. Use this variant in most cases, when clarity is important, and the field needs context both before (Label) and after (Help text) user interaction.
  </div>
</div>

### Label only 

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variants-label_only.svg" alt="Text field with label only" />
  </div>

  <div>
  An input with a label above the field and no help text. Use when space is limited or help text is not necessary. Ideal in short or repeated forms (e.g. settings, profile forms).
  </div>
</div>

### Text field only

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variants-text_field_only.svg" alt="Text field only" />
  </div>

  <div>
  A bare input with only a placeholder inside, and no label or help text. Use with <b>extreme caution</b>. Best suited for one-off interactions, short filters, or embedded in UI elements like search bar, toolbars, etc.
  </div>
</div>

### Optional

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variants-optional.svg" alt="Text field with label, followed by optional text and info icon, and help text" />
  </div>

  <div>
  An input field with an optional label indicator (Optional). Use this variant when the field is not required. The Optional label and the Info tooltip are <b>independent options</b>, they can be <b>enabled or disabled separately</b> depending on the use case.
  </div>
</div>

### Info tooltip

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variants-info_tooltip.svg" alt="Text field with label, followed by optional text and info icon, and help text" />
  </div>

  <div>
  An input field with an info icon that opens a tooltip. Use this variant when users may need extra clarification on how to fill it in. The Optional label and the Info tooltip are <b>independent options</b>, they can be <b>enabled or disabled separately</b> depending on the use case.
  </div>
</div>

### Suffix and prefix

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variants-affixes.svg" alt="Text field with label, help text and affixes in the text field" />
  </div>

  <div>
  Visual indicators inside the input field, before (prefix) or after (suffix) the user-entered value: e.g. <code>kr</code>, <code>kg</code>, <code>%</code>. These help users understand the expected format or unit of input. Prefix and Suffix can be used <b>independently</b>, <b>together</b>, or <b>not at all</b>, they are <b>not tied to each other</b>.
  </div>
</div>

### Icon left and right

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variants-icon.svg" alt="Text field with label, help text and icon affixes in the text field" />
  </div>

  <div>
  Icons placed inside the input field on the left, right, or both sides. Provides visual affordance or quick actions related to the field. Left and Right icons are <b>separate, independent options</b>, that’s possible to use either one, both, or none <b>based on need</b>.
  </div>
</div>

## Anatomy

:::image-block
![Anatomy illustration, 1-7](/components/textfield/overview-anatomy-1.svg)
<br />
![Anatomy illustration, 8-10](/components/textfield/overview-anatomy-2.svg)
:::

1. Input label (optional)
2. Input field 
3. Optional indicator (optional)
4. Info tooltip (optional)
5. Placeholder
6. Left icon (optional)
7. Right icon (optional)
8. Suffix (optional)
9. Prefix (optional)
10. Help text (optional)

<component-questions />