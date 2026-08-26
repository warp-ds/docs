# Page indicator - Overview

Page indicators show how many pages or items are in a sequence and which one is currently visible.

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">First page selected</h3>
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

## General

Use a Page indicator to orient people within a short, ordered sequence such as an image carousel, onboarding flow, or pager. The dots are a compact status display: the number of dots represents the total and the highlighted dot represents the current position.

A Page indicator supplements the control that moves the content. Pair it with swipe, scroll, or clearly labelled previous and next controls rather than treating the dots as the only navigation.

Render it only when the sequence contains at least two items. For indexed result pages or a sequence where people need to jump to a specific page, use [Pagination](/components/pagination/overview.md).

## Behaviour

The component grows horizontally as the page count increases and keeps one active dot at a time. The active position must update whenever the surrounding carousel or pager changes.

Figma provides configurations for two to five dots. The platform implementations accept dynamic page counts, but product use should remain short enough to understand at a glance.

Web and Android present the Page indicator as passive status. The iOS component also lets people tap a dot to update the selected page. On every platform, the surrounding carousel or pager remains responsible for moving the content and providing complete navigation.

### Names per platform

The same concepts use different names and index bases across platforms:

<div class="max-w-full overflow-x-auto">
  <table>
    <thead>
      <tr>
        <th>Concept</th>
        <th>Figma</th>
        <th>Web (Elements / React 19)</th>
        <th>iOS</th>
        <th>Android</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Component</td>
        <td>Page indicator</td>
        <td><code>w-page-indicator</code> / <code>PageIndicator</code></td>
        <td><code>Warp.PageIndicator</code></td>
        <td><code>WarpPageIndicator</code></td>
      </tr>
      <tr>
        <td>Total items</td>
        <td><code># Dots</code></td>
        <td><code>pageCount</code></td>
        <td><code>pageCount</code></td>
        <td><code>pageCount</code></td>
      </tr>
      <tr>
        <td>Current item</td>
        <td><code>Active dot</code></td>
        <td><code>selectedPage</code></td>
        <td><code>selectedPage</code></td>
        <td><code>currentPage</code></td>
      </tr>
      <tr>
        <td>Index base</td>
        <td>1-based</td>
        <td>1-based</td>
        <td>0-based</td>
        <td>0-based</td>
      </tr>
    </tbody>
  </table>
</div>

Convert the current position deliberately when sharing state between platforms. For example, the third page is `3` on Web and `2` on iOS and Android.

## Anatomy

::: image-block
![Page indicator anatomy diagram with numbered callouts pointing to the active dot and an inactive dot.](/components/pageindicator/overview-anatomy.svg)
:::

1. **Active dot**: Identifies the page or item currently visible.
2. **Inactive dot**: Represents another page or item in the sequence.

<component-questions />
