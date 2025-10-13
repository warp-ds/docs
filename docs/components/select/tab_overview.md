A select supports various states (hover, active, filled, disabled, error) and enhances clarity with optional labels, help texts, and icons. It can be used in forms, filters, settings, and anywhere a single-choice dropdown is needed.

Related components: [Text area](../textarea/index.md), [Text field](../textfield/index.md).

## Examples
<ThemeSwitcher />
<select-example />

## Variants 

### Default

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/select/overview-variant-default.svg" alt="Standard select with a label, placeholder, and optional help text below." />
  </div>

  <div>
  Standard select with a label, placeholder, and optional help text below. Use this variant in most cases, when clarity is important, and the field needs context both before (label) and after (help text) user interaction.s on mouse hover.
  </div>
</div>

### Label only

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/select/overview-variant-labelonly.svg" alt="A select with a label above the field, with no help text." />
  </div>

  <div>
  A select with a label above the field, with no help text. Use when space is limited or help text is not necessary. Ideal in short or repeated forms (e.g. settings, profile forms).
  </div>
</div>

### Text field only

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/select/overview-variant-fieldonly.svg" alt="A bare select with only a placeholder inside, and no label or help text." />
  </div>

  <div>
  A bare select with only a placeholder inside, and no label or help text. Use with 
  <strong>extreme caution</strong>. Best suited for one-off interactions, short filters, or embedded in compact UI elements like toolbars, or filters.
  </div>
</div>

### Optional and info tooltip

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/select/overview-variant-optional.svg" alt="A select with an optional label indicator (Optional) and/or an info icon that opens a tooltip." />
  </div>

  <div>
  A select with an optional label indicator (Optional) and/or an info icon that opens a tooltip. Use these when the field is not required, and/or users may need extra clarification on how to fill it in. The Optional label and the info tooltip are
  <strong>independent options</strong>, they can be
  <strong>enabled or disabled separately</strong> depending on the use case.
  </div>
</div>


## Anatomy

::: image-block
![Example of a Select component](/components/select/overview-anatomy.svg)
:::

1. Select label (optional)

2. Select field

3. Optional indicator (optional)

4. Info tooltip (optional)

5. Placeholder

6. Help text (optional)

7. Right dropdown icon
