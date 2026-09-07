# Radio buttons - Overview

Radio buttons let users choose one value from a compact row of button-shaped options.

See also [Radio](/components/radio/overview.md), [Button group](/components/button-group/overview.md), and [Tabs](/components/tabs/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<radiobuttons-example />

## General

Use Radio buttons for a few short choices that users benefit from seeing together, such as a rental period or a seller type. The selected option stays highlighted. Choosing another option replaces the previous value.

These controls have the selection behaviour of [Radio](/components/radio/overview.md), with a stronger visual treatment. The connected shape makes the options read as one set. Each option answers the same question; selecting it does not perform a separate action.

Use [Button group](/components/button-group/overview.md) when composing a group of buttons or other controls. Use [Tabs](/components/tabs/overview.md) to navigate between content panels. A similar appearance does not make those interactions interchangeable.

## Sizes

### Regular

<div class="grid grid-cols-1 sm:grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/radio-buttons/radio-buttons-variants-regular.svg" alt="Regular Radio buttons labelled Rental period, with Week selected between Day and Month." />
  </div>
  <div class="py-16">

Use the regular size for most forms and filters. Keep the same size throughout a group so every option has the same visual importance.

  </div>
</div>

### Small

<div class="grid grid-cols-1 sm:grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/radio-buttons/radio-buttons-variants-small.svg" alt="Small Radio buttons showing the same rental-period choices with a more compact height." />
  </div>
  <div class="py-16">

Use the small size in compact interfaces where the labels remain readable and the targets are easy to operate. Check the control at the text sizes and input methods your product supports.

  </div>
</div>

## Width

::: image-block
![The rental-period group stretched across the available space.](/components/radio-buttons/overview-equal-width.svg)
:::

By default, the group fits its content. The width option stretches the group across its container and distributes spare space between the options. Labels still need enough room to remain readable; stretching the group does not solve a lack of space.

## Anatomy

::: image-block
![Numbered Radio buttons anatomy showing the group label, an option label, and the selected option.](/components/radio-buttons/overview-anatomy.svg)
:::

1. **Group label**: States the question that the options answer.
2. **Option label**: Names one possible answer and forms the visible selection target.
3. **Selected option**: Shows the current answer. Only one option can be selected in a group.

## Names in React and Vue

The framework APIs use different names for the same concepts:

| Concept | React | Vue |
| --- | --- | --- |
| Radio buttons | `Toggle` with `type="radio-button"` | `w-toggle` with `radio-button` |
| Group label | `title` | `label` |
| Options | `options` | `toggles` |
| Current selection | `selected` | `v-model` |
| Small size | `small` | `small` |
| Fill available width | `equalWidth` | `equal-width` |

See the [React](/components/radio-buttons/frameworks/react.md) and [Vue](/components/radio-buttons/frameworks/vue.md) pages for implementation details.

<component-questions />
