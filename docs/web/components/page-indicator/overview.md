# Page indicator - Overview
A page indicator shows the total amount of pages (or images) and the current page using dots.

<ComponentsStatus />

## General
Page indicators help users understand that there are more images, or pages, available to scroll through, that are currently hidden from view.

## Example

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">Default Page Indicator</h3>
        <w-page-indicator page-count="5" selected-page="1"></w-page-indicator>
    </div>
    <div>
        <h3 class="h4">Middle page selected</h3>
        <w-page-indicator page-count="7" selected-page="4"></w-page-indicator>
    </div>
    <div>
        <h3 class="h4">Last page selected</h3>
        <w-page-indicator page-count="5" selected-page="5"></w-page-indicator>
    </div>
</style-isolate>

## Anatomy

::: image-block
![Anatomy of a page indicator component with four circular dots in a horizontal row. The first dot is filled in blue, indicating the active page. The remaining three dots are light gray, indicating inactive pages. Two numbered callouts are present: (1) points to the active page indicator, and (2) highlights one of the inactive indicators.](/components/pageindicator/pageindicator-anatomy.svg)
:::

1. Active dot
2. Inactive dot

<component-questions />
