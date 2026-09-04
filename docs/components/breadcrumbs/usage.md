# Breadcrumbs - Usage

Breadcrumbs help users understand and move through a product's information hierarchy. Keep them secondary to the product's primary navigation.

<ComponentsStatus />

## When to use breadcrumbs

Use breadcrumbs when:

- content has more than two meaningful hierarchy levels;
- users may arrive on a deep page without navigating through its parents;
- moving to a parent level is a common task.

Do not use breadcrumbs to represent browsing history, filters, tabs, or progress through a multi-step task. For peer content use [Tabs](/components/tabs/overview.md), and for task progress use [Steps](/components/steps/overview.md).

<div class="grid gap-16 grid-cols-1 md:grid-cols-2 my-24">

<DoDont type="do">

![A breadcrumb with stable hierarchy levels: Motor, Cars, and Electric cars.](/components/breadcrumbs/DoDonts/usage-hierarchy-do.png)

Use stable levels from the information architecture.

</DoDont>

<DoDont type="dont">

![A breadcrumb using Search, Results, and Saved, which describes browsing history rather than hierarchy.](/components/breadcrumbs/DoDonts/usage-hierarchy-dont.png)

Don't use transient actions or browsing history as hierarchy levels.

</DoDont>

</div>

## Behaviour

In Elements, compose breadcrumbs from `w-breadcrumb-item` elements. The component inserts a non-interactive slash between items and warns during development if more than one item is current, if the current item is not last, or if modern items are mixed with the legacy child API.

All parent items are links to their respective destinations. Pointer users select a link normally. Keyboard users move between links with <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd>, then follow the focused link with <kbd>Enter</kbd>. The current page and separators are not interactive.

Do not mix `w-breadcrumb-item` with direct anchors or spans in the same Elements breadcrumb.

## Current page

When the current page is included, place it last and render it as non-interactive text. This distinguishes the user's location from the available navigation and avoids a link that reloads the same page.

In Elements, set `current-page` on the final `w-breadcrumb-item` and omit `href`. In React and Vue, use a non-link child with `aria-current="page"`.

The current page can be omitted when the page heading immediately below the trail already identifies the location. In that case, the final breadcrumb must link to the nearest parent.

<div class="grid gap-16 grid-cols-1 md:grid-cols-2 my-24">

<DoDont type="do">

![A breadcrumb where Oslo is the final current-page text and is not a link.](/components/breadcrumbs/DoDonts/usage-current-page-do.png)

Show the current page as the final non-interactive item.

</DoDont>

<DoDont type="dont">

![A breadcrumb where Oslo is styled as a link to the page the user is already viewing.](/components/breadcrumbs/DoDonts/usage-current-page-dont.png)

Don't link the current page back to itself.

</DoDont>

</div>

## Content guidelines

- Start with the highest useful parent and move deeper through the hierarchy.
- Use the destination's page or section name for each link.
- Keep labels concise, specific, and consistent with the destination heading.
- Do not add slash characters; the component provides them.
- Avoid duplicating levels or adding categories that users cannot visit.

## Responsive layouts and overflow

The component does not collapse items or truncate labels automatically. Products must decide which hierarchy levels remain useful at each breakpoint.

When the full trail does not fit, preserve the nearest parent and the current page. Remove intermediate levels before shortening meaningful labels. If the current page is omitted, keep the nearest parent as a link and let the page heading identify the current location.

Avoid allowing long trails to wrap into several lines. Test the actual content at narrow widths and with text enlarged. If labels must be visually shortened, keep enough text to distinguish the destination and preserve its full accessible name.

<div class="grid gap-16 grid-cols-1 md:grid-cols-2 my-24">

<DoDont type="do">

![A compact breadcrumb showing the nearest parent, Cars, followed by the current page, Electric cars.](/components/breadcrumbs/DoDonts/usage-responsive-do.png)

Prioritise the nearest parent and current page when space is limited.

</DoDont>

<DoDont type="dont">

![A long breadcrumb squeezed into a narrow layout and wrapping over several lines.](/components/breadcrumbs/DoDonts/usage-responsive-dont.png)

Don't squeeze a long trail into a narrow layout and let it wrap repeatedly.

</DoDont>

</div>

## Placement

Place breadcrumbs near the top-left of the content area, below the header and primary navigation but above the page heading and main content. Keep their position consistent between related pages.

<div class="grid gap-32 grid-cols-1 md:grid-cols-2 items-start">

::: image-block
![Breadcrumbs placed below the desktop header and above the page content.](/components/breadcrumbs/breadcrumbs-usage-placement-desktop-example.svg)
:::

::: image-block
![Breadcrumbs placed below the mobile header and above the page content.](/components/breadcrumbs/breadcrumbs-usage-placement-mobile-example.svg)
:::

</div>

<component-questions />
