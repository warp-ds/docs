---
title: '@warp-ds v2 - Stable releases'
date: 2024-08-20
---

Stable releases with DBA changes for web are now available.

---

# How to Update Your Web Apps for DBA

### Packages to Install from NPM

| Package Name        | Version        |
|---------------------|----------------|
| `@warp-ds/css`      | `2.0.0`        |
| `@warp-ds/uno`      | `2.0.0`        |
| `@warp-ds/react`    | `2.0.1`        |
| `@warp-ds/vue`      | `2.1.1`        |
| `@warp-ds/elements` | `2.0.1`        |
| `@warp-ds/icons`    | `2.1.0`        |

If you have already followed the [previous instructions for the DBA beta changes](https://warp-ds.github.io/tech-docs/blog/posts/2024/warp-2-0) and have disabled EIK import mapping for `react`, `vue` & `elements`, you can now enable it the following way:

#### Import mapping

- Elements

Be sure to include the Lit import map first.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://assets.finn.no",
	"import-map": [
		"https://assets.finn.no/map/lit/v3",
		"https://assets.finn.no/map/warp/v2"
	]
}
```

- Vue

Be sure to include the Vue import map first.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://assets.finn.no",
	"import-map": [
		"https://assets.finn.no/map/vue/v3",
		"https://assets.finn.no/map/warp/v2"
	]
}
```

- React

Be sure to include the React import map first.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://assets.finn.no",
	"import-map": [
		"https://assets.finn.no/map/react/v18",
		"https://assets.finn.no/map/warp/v2"
	]
}
```

While we no longer officially support React v17, in order to buy yourself time to migrate to React v18, you can add the Warp legacy map for interrim support.
When React v19 is released, React v17 support will be dropped entirely.
Map order is important.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://assets.finn.no",
	"import-map": [
		"https://assets.finn.no/map/react/v17",
		"https://assets.finn.no/map/warp/v2",
		"https://assets.finn.no/map/warp-legacy/v2"
	]
}
```

For further instructions on how to migrate from v1 to v2, please follow [these instructions](https://warp-ds.github.io/tech-docs/blog/posts/2024/warp-2-0#migrating-from-v1-to-v2).

## Breaking changes
### @warp-ds/react 2.0.1
[Changelog for @warp-ds/react 2.0.1](https://github.com/warp-ds/react/releases/tag/v2.0.1)

[Changelog for @warp-ds/react 2.0.0](https://github.com/warp-ds/react/releases/tag/v2.0.0)


The following properties have been removed:

| Component  | Property               | Note                              |
|------------|------------------------|-----------------------------------|
| Badge      | variant `notification` | Removed                           |
| Box        | clickable              | Removed                           |
| Card       | onClick                | Removed                           |
| Expandable | info                   | Removed                           |


### @warp-ds/vue 2.1.1
[Changelog for @warp-ds/vue 2.1.1](https://github.com/warp-ds/vue/releases/tag/v2.1.1)

[Changelog for @warp-ds/vue 2.1.0](https://github.com/warp-ds/vue/releases/tag/v2.1.0)


The following properties/components have been removed:

| Component  | Property               | Note                              |
|------------|------------------------|-----------------------------------|
| Badge      | variant `notification` | Removed                           |
| Box        | clickable              | Removed                           |
| Expandable | info                   | Removed                           |
| Suffix     |                        | Entire component has been removed - use Affix instead |
| Tag        |                        | Entire component has been removed - use Badge instead |

### @warp-ds/elements 2.0.1
[Changelog for @warp-ds/elements 2.0.1](https://github.com/warp-ds/elements/releases/tag/v2.0.1)

[Changelog for @warp-ds/elements 2.0.0](https://github.com/warp-ds/elements/releases/tag/v2.0.0)


The following properties have been removed:

| Component  | Property               | Note                              |
|------------|------------------------|-----------------------------------|
| Badge      | variant `notification` | Removed                           |
| Expandable | info                   | Removed                           |

### @warp-ds/css 2.0.0
[Changelog](https://github.com/warp-ds/css/releases/tag/v2.0.0)

The following exported objects/classes have either been removed or renamed:

::: tip Important Note
If you are using the Warp components correctly, then you should not be affected by the following changes.
:::

| Exported object            | Class name(s)                                                            | Note                                                              |
|----------------------------|--------------------------------------------------------------------------|-------------------------------------------------------------------|
| alert                      | `alert`                                                                  | Renamed to `wrapper`                                              |
| backwardsCompatibleClasses |                                                                          | Entire exported object has been removed                           |
| badge                      | `borderedClickable`, `infoClickable`, `neutralClickable`, `notification` | Removed                                                           |
| box                        | `box`                                                                    | Renamed to `base`                                                 |
| card                       | `card`, `cardShadow`, `cardSelected`, `cardOutline`, `cardUnselected`, `cardOutlineUnselected`, `cardOutlineSelected`, `cardFlat`, `cardFlatUnselected`, `cardFlatSelected`                                                                                      | Removed; `cardUnselected` <br> Renamed: `card` --> `base`, `cardShadow` --> `shadow`, `cardSelected` --> `selected`, `cardOutline` --> `outline`, `cardOutlineUnselected` --> `outlineUnselected`, `cardOutlineSelected` --> `outlineSelected`, `cardFlat` --> `flat`, `cardFlatUnselected` --> `flatUnselected`, `cardFlatSelected` --> `flatSelected`                                                                                                                 |
| combobox                   | `combobox`                                                               | Renamed to `base`,                                                |
| expandable                 | `expandable`, `expandableTitle`, `expandableBox`, `expandableBleed`, `expandableInfo`, `chevronBox`, `elementsTransformChevronDownPart`, `elementsChevronDownExpandPart`, `elementsTransformChevronUpPart`, `elementsChevronUpCollapsePart`, `paddingTop`      | Removed: `expandableTitle`, `expandableInfo`, `chevronBox`, <br> Renamed: `expandable` --> `wrapper`, `expandableBox` --> `box`, `expandableBleed` --> `bleed`, `elementsTransformChevronDownPart` --> `elementsChevronDownTransform`, `elementsChevronDownExpandPart` --> `elementsChevronExpand`, `elementsTransformChevronUpPart` --> `elementsChevronUpTransform`, `elementsChevronUpCollapsePart` --> `elementsChevronCollapse`, `paddingTop` --> `contentWithTitle`                                                                                                                                                          |
| helpText                   | `helpText`, `helpTextColor`, `helpTextColorInvald`, `helpTextValid`, `helpTextInvalid` | Removed: `helpTextValid`, `helpTextInvalid` <br> Renamed: `helpText` --> `base`, `helpTextColor` --> `color`, `helpTextColorInvald` --> `colorInvalid`                                                                                                                                    |
| label                      | `label`, `labelInvalid`                                                  | Removed: `labelInvalid`, Renamed: `label` --> `base`              |
| modal                      | `modal`, `transparentBg`                                                 | Removed: `transparentBg` <br> Renamed: `modal` --> `base`         |
| pill                       | `pill`                                                                   | Renamed to `wrapper`                                              |
| ribbon                     |                                                                          | Entire exported object has been removed and replaced by badge     |
| step                       | `step`, `stepVertical`, `stepVerticalLeft`, `stepVerticalRight`, `stepHorizontal`, `stepDot`, `stepDotVerticalRight`, `stepDotHorizontal`, `stepDotActive`, `stepDotIncomplete`, `stepLine`, `stepLineVertical`, `stepLineVerticalRight`, `stepLineHorizontal`, `stepLineHorizontalRight`, `stepLineHorizontalLeft`, `stepLineIncomplete`, `stepLineComplete`                                                                                      | Renamed: `step` --> `base`, `stepVertical` --> `vertical`, `stepVerticalLeft` --> `alignLeft`, `stepVerticalRight` --> `alignRight`, `stepHorizontal` --> `horizontal`, `stepDot` --> `dot`, `stepDotVerticalRight` --> `dotAlignRight`, `stepDotHorizontal` --> `dotHorizontal`, `stepDotActive` --> `dotActive`, `stepDotIncomplete` --> `dotIncomplete`, `stepLine` --> `line`, `stepLineVertical` --> `lineVertical`, `stepLineVerticalRight` --> `lineAlignRight`, `stepLineHorizontal` --> `lineHorizontal`, `stepLineHorizontalRight` --> `lineHorizontalAlignRight`, `stepLineHorizontalLeft` --> `lineHorizontalAlignLeft`, `stepLineIncomplete` --> `lineIncomplete`, `stepLineComplete` --> `lineComplete`                                                                                                                                                              |
| steps                       | `steps`, `stepsHorizontal`                                              | Renamed: `steps` --> `wrapper`, `stepsHorizontal` --> `horizontal`|
| switchToggle                | `label`, `labelDisabled`, `switch`                                      | Removed: `switch` <br> Renamed: `label` --> `base`, `labelDisabled` --> `disabled`                                                                                                                                                                  |
| tabs                       | `tabContainer`, `wunderbar`, `wrapperUnderlined`                         | Removed: `wrapperUnderlined` <br> Renamed: <br>`tabContainer` --> `wrapper`, `wunderbar` --> `selectionIndicator`|
| tab                         | `tab`, `tabActive`, `iconUnderlinedActive`, `contentUnderlinedActive`   | Removed: `inconUnderlinedActive`, `contentUnderlinedActive` <br> Renamed: `tab` --> `base`, `tabActive` --> `active`                |
| toast                       | `toast`, `icon`                                                         | Renamed: `toast` --> `base`, <br> `icon` --> `iconBase`           |
| toaster                     | `container`, `toaster`                                                  | Renamed: `container` --> `wrapper`, `toaster` --> `base`          |

### @warp-ds/uno 2.0.0
[Changelog](https://github.com/warp-ds/drive/releases/tag/v2.0.0)

::: tip Important Note
From 2.0.0 @warp-ds/uno expects the newest v2 tokens to be in place
:::

The following rules have been changed/removed:

| Rule       | Token                      | Note                                                                                                       |
|------------|----------------------------|------------------------------------------------------------------------------------------------------------|
| focus-ring | `var(--w-s-color-focused)` | Removed deprecated fallback                                                                                |
| internal   |                            | Entire rule has been removed                                                                               |
| slider     |                            | Entire rule has been removed and replaced with arbitrary box-shadow (`shadow-[--token]`) to handle theming |




