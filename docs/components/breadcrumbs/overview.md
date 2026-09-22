# Breadcrumbs - Overview

Breadcrumbs are secondary navigation that show a page's position in the information hierarchy. They help users understand where they are and move to a parent level without retracing their steps.

For navigation between peer views, use [Tabs](/components/tabs/overview.md). For progress through a task, use [Steps](/components/steps/overview.md).

<ComponentsStatus />

## Example

<ThemeSwitcher />

<style-isolate>
    <w-breadcrumbs>
        <w-breadcrumb-item href="/url/1">Motor</w-breadcrumb-item>
        <w-breadcrumb-item href="/url/2">Cars</w-breadcrumb-item>
        <w-breadcrumb-item current-page>Electric cars</w-breadcrumb-item>
    </w-breadcrumbs>
</style-isolate>

## General

Use breadcrumbs when the product has a stable hierarchy and users benefit from moving to its parent levels. The trail describes where the current page sits in that hierarchy; it does not show browsing history or progress through a process.

Items are ordered from the broadest parent to the current location. The component adds the separators, so do not include slash characters in item labels.

Breadcrumbs are currently available for web frameworks only.

## Design and implementation

The Figma component has `Levels` variants from one to six and a `Current page` option. These are composition controls, not content rules or an enforced maximum.

| Figma property | Implementation |
| --- | --- |
| `Levels` 1–6 | Add the required number of breadcrumb items in Elements, or children in React and Vue. The implementation does not enforce a six-item limit. |
| `Current page: Yes` | Make the final item the current page. In Elements, use `current-page` and omit `href`. In React and Vue, render the final child as non-interactive text with `aria-current="page"`. |
| `Current page: No` | End the trail at the nearest parent when the current page is intentionally omitted. |

Six levels are available for design flexibility, but shorter trails are easier to scan. Include only levels that help users understand or move through the hierarchy.

## Anatomy

<div class="grid gap-32 grid-cols-1 md:grid-cols-2 items-start">

::: image-block
![Breadcrumb anatomy showing a parent link, slash separator, and current page.](/components/breadcrumbs/breadcrumbs-anatomy.svg)
:::

<div>

1. **Parent link**: The name of a parent page or section. Selecting it moves the user to that level.
2. **Separator**: A slash inserted automatically between items. It is visual only and is not interactive.
3. **Current page**: The user's present location. When included, it is the final item and should not link to itself.

</div>
</div>

<component-questions />
