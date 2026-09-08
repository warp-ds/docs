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

On web, use [Button group](/components/button-group/overview.md) when composing a group of buttons or other controls. On iOS, the single-selection mode of `Warp.ButtonGroup` provides the Radio buttons interaction. Use [Tabs](/components/tabs/overview.md) to navigate between content panels. A similar appearance does not make those interactions interchangeable.

## Sizes

React and Vue provide regular and small sizes. The iOS counterpart has one built-in size.

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

In React and Vue, the group fits its content by default. The width option stretches the group across its container and distributes spare space between the options. Labels still need enough room to remain readable; stretching the group does not solve a lack of space. The iOS counterpart does not expose this width setting.

## Anatomy

::: image-block
![Numbered Radio buttons anatomy showing the selected option, an option label, and the group container.](/components/radio-buttons/overview-anatomy.svg)
:::

1. **Selected option**: Shows the current answer. Only one option can be selected in a group.
2. **Option label**: Names one possible answer and forms the visible selection target.
3. **Group container**: Connects the options visually so they read as one set.

Place a visible group label above the control to state the question that the options answer.

## Names and availability

Figma calls the connected control **Button group**. For single selection, use the following implementation on each platform:

| Platform | Implementation |
| --- | --- |
| React | [`Toggle` with `type="radio-button"`](/components/radio-buttons/frameworks/react.md) |
| Vue | [`w-toggle` with `radio-button`](/components/radio-buttons/frameworks/vue.md) |
| iOS | [`Warp.ButtonGroup` with `singleSelect: true`](/components/radio-buttons/frameworks/ios.md) |
| Elements and its React 19 wrappers | Provide the circular [Radio](/components/radio/frameworks/elements.md) control, without this button-shaped variant. |
| Android | Provides circular [Radio](/components/radio/frameworks/android.md) controls, without this button-shaped variant. |

The supported implementations use different names for the same concepts:

<div class="overflow-x-auto" tabindex="0" role="region" aria-label="Radio buttons API names by platform">

| Concept | React | Vue | iOS |
| --- | --- | --- | --- |
| Group label | `title` | `label` | Supplied by the surrounding view |
| Options | `options` | `toggles` | `buttons` binding |
| Current selection | Zero or one entry in `selected` | One value in `v-model` | `isSelected` in each tuple, with `singleSelect: true` |
| Small size | `small` | `small` | One built-in size |
| Fill available width | `equalWidth` | `equal-width` | No equivalent setting |

</div>

<component-questions />
