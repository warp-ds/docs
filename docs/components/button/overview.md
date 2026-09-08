# Button - Overview

Buttons let users trigger an action, such as saving a form, publishing an ad, or deleting an item.

See also [Button group](/components/button-group/overview.md), [Button pill](/components/button-pill/overview.md), and [Link](/components/link/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <div class="flex flex-wrap gap-16 items-center">
        <w-button variant="primary">Publish ad</w-button>
        <w-button variant="secondary">Save draft</w-button>
        <w-button variant="negative">Delete ad</w-button>
        <w-button variant="negativeQuiet">Remove</w-button>
        <w-button variant="quiet">Skip for now</w-button>
        <w-button variant="utility">Filter</w-button>
        <w-button variant="utilityQuiet">Clear filters</w-button>
        <w-button variant="primary" loading>Publishing ad</w-button>
        <w-button variant="secondary" small>Preview</w-button>
    </div>
    <div class="mt-16 max-w-[400px]">
        <w-button full-width variant="primary">Continue</w-button>
    </div>
</style-isolate>

## General

Use Button for an action that happens in the current context. Its label should describe the result of activating it. Use [Link](/components/link/overview.md) when the destination is another page or location, and [Button group](/components/button-group/overview.md) when related actions need a shared layout.

A Button can contain a text label and an optional leading or trailing icon. Keep a visible label for most actions. For an icon-only action, use [Button pill](/components/button-pill/overview.md) and provide an accessible name.

## Variants

::: image-block
![Rendered Warp Buttons showing primary, secondary, negative, negative quiet, quiet, utility, utility quiet, and overlay variants.](/components/button/overview-variants.png)
:::

Choose a variant from the action's meaning and relative importance:

- **Primary**: The main action in a task or section. Use one primary action within a local decision area.
- **Secondary**: A standard action or an alternative to the primary action. This is the default variant on Web.
- **Quiet**: A low-emphasis action that should remain available without competing with the main action.
- **Negative / critical**: An action with a destructive or difficult-to-reverse outcome, such as deleting an ad.
- **Negative quiet / critical quiet**: A lower-emphasis destructive action.
- **Utility**: A compact tool or view action, such as filtering or sorting.
- **Utility quiet**: A low-emphasis utility action.
- **Overlay**: An action displayed over imagery or other media. Choose the regular or inverted treatment for sufficient contrast with the surface behind it.

Do not choose a variant from colour preference alone. The hierarchy should remain meaningful when colours are unavailable.

### Names per platform

The same concepts use different names across platforms:

| Figma | Web (Elements) | iOS | Android |
| --- | --- | --- | --- |
| Primary | `primary` | `.primary` | `Primary` |
| Secondary | `secondary` | `.secondary` | `Secondary` |
| Quiet | `quiet` | `.quiet` | `Quiet` |
| Critical | `negative` | `.critical` | `Negative` |
| Critical quiet | `negativeQuiet` | `.criticalQuiet` | `NegativeQuiet` |
| Utility | `utility` | `.utility` | `Utility` |
| Utility quiet | `utilityQuiet` | `.utilityQuiet` | `UtilityQuiet` |
| Utility overlay | `overlay`, `overlayInverted`, `overlayQuiet`, or `overlayInvertedQuiet` | `.utilityOverlay` | `UtilityOverlay` |

Web defaults to Secondary, while iOS and Android default to Primary. Set the variant explicitly in shared examples and specifications so the intended hierarchy does not change between platforms.

## States and sizes

::: image-block
![Rendered Warp Buttons showing enabled, loading, disabled, and small treatments.](/components/button/overview-states.png)
:::

- **Enabled**: Available for activation. Pointer hover, press, and keyboard focus provide temporary interaction feedback.
- **Loading**: Shows that an action is in progress. Keep the label specific to the work, prevent duplicate activation, and replace loading with a clear result.
- **Disabled**: Unavailable for activation. Prefer explaining what is missing over leaving users to infer why the action is unavailable.
- **Small**: A compact size for dense layouts. Small is a size, not an interaction state.

Use the default size for most interfaces. Use full width when a narrow layout benefits from a larger, consistent target, not simply to fill spare space.

## Anatomy

::: image-block
![Button anatomy diagram made from a rendered Warp Button, with callouts for the icon, label, and container.](/components/button/overview-anatomy.png)
:::

1. **Icon (optional)**: Reinforces the action. It does not replace a clear label unless the action is universally understood and has an accessible name.
2. **Label**: Describes what will happen. It is the Button's accessible name when rendered as visible text.
3. **Container**: Provides the variant, size, interaction states, and activation target.

<component-questions />
