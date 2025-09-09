It supports a wide range of behaviours, labels, icons, prefixes/suffixes, tooltips, and error handling to support various use cases and accessibility needs. Text fields are a fundamental element of forms and search experiences across the product ecosystem.

Related components: [Text area](../textarea/index.md), [Select](../select/index.md).

## Examples
<ThemeSwitcher />
<textfield-example />

## Variants

### Default

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variant-default.svg" alt="Default text field with label, placeholder and help text" />
  </div>

  <div>
  Standard input with a label, hint (placeholder), and optional help text below. Use this variant in most cases, when clarity is important, and the field needs context both before (label) and after (help text) user interaction.
  </div>
</div>

### Label only 

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variant-labelonly.svg" alt="Text field with label only" />
  </div>

  <div>
  An input with a label above the field, no help text. When space is limited or help text is not necessary. Ideal in short or repeated forms (e.g. settings, profile forms).
  </div>
</div>

### Text field only

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variant-fieldonly.svg" alt="Text field only" />
  </div>

  <div>
  A bare input with only a placeholder inside, and no label or help text. Use with <b>extreme caution</b>. Best suited for one-off interactions, short filters, or embedded in UI elements like search bar, toolbars, etc.
  </div>
</div>

### Optional and info tooltip

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variant-optional.svg" alt="Text field with label, followed by optional text and info icon, and help text" />
  </div>

  <div>
  An input field with an optional label indicator (Optional) and/or an info icon that opens a tooltip. Use these when the field is not required, and/or users may need extra clarification on how to fill it in. The Optional label and the info tooltip are <b>independent options</b>, they can be <b>enabled or disabled separately</b> depending on the use case.
  </div>
</div>

### Suffix and prefix

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variant-affixes.svg" alt="Text field with label, help text and affixes in the text field" />
  </div>

  <div>
  Visual indicators inside the input field, before (prefix) or after (suffix) the user-entered value: e.g. kr, kg, %. These help users understand the expected format or unit of input. Prefix and Suffix can be used <b>independently</b>, together, or not at all, they are <b>not tied to each other</b>.
  </div>
</div>

### Icon left and right

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/overview-variant-icons.svg" alt="Text field with label, help text and icon affixes in the text field" />
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
5. Hint (placeholder)
6. Left icon (optional)
7. Right icon (optional)
8. Suffix (optional)
9. Prefix (optional)
10. Help text (optional)