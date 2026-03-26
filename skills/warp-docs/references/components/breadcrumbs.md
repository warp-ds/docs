# Breadcrumbs

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/breadcrumbs/overview), [Usage](https://warp-ds.github.io/docs/components/breadcrumbs/usage), [Styling](https://warp-ds.github.io/docs/components/breadcrumbs/styling), [Accessibility](https://warp-ds.github.io/docs/components/breadcrumbs/accessibility), [React](https://warp-ds.github.io/docs/components/breadcrumbs/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/breadcrumbs/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/breadcrumbs/frameworks/elements)

**Framework support:** Elements, React, Vue

## Overview

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

![Example showing the anatomy of a breadcrumbs component. The breadcrumbs are a horizontal collection of text links, separated by a "/", that represent different pages within a site that are directly connected to one another within a site structure.](https://warp-ds.github.io/docs/components/breadcrumbs/breadcrumbs-anatomy.svg)

**1\. Path/level**: The section or page within the app, usually a link.

**2\. Separator**: A forward slash symbol (“/”) positioned between each item in the list. It provides visual distinction between individual links (or crumbs) using the same font as the rest of the breadcrumbs.

**3\. Current page**: This is the last item in the breadcrumbs and shows the current page the user is on. It uses default text, and should not be a clickable link.

Breadcrumbs expect their component children to be the link "crumbs" that make up the navigation structure. The component will interject a separator between the crumbs.

## Inline Demo Markup

```html
<w-breadcrumbs>
        <a href="/url/1">Page 1</a>
        <a href="/url/2">Page 2</a>
        <span aria-current="page">Current Page</span>
    </w-breadcrumbs>
```

## Usage

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

Breadcrumbs are effective in products that have a large amount of content organised in a hierarchy of more than two levels. They use little space but still provide context for the user’s place in the navigation hierarchy.

Breadcrumbs should always be treated as secondary and should never entirely replace the primary navigation.

All pages in the breadcrumb component should be interactive (except the current page) and link to their respective pages.

#### Mouse 

Users can trigger an item by clicking on a breadcrumb page link. The separators between page links are not interactive.

#### Keyboard 

Users can navigate between breadcrumb links by pressing tab and shift-tab. Users can trigger a breadcrumb link by pressing Enter while the link has focus.

Breadcrumbs are placed in the top left portion of the page. They sit underneath the header and navigation, but above the page title and content.  
 

**Desktop example**

![Example showing an example of breadcrumbs in a desktop website. The example shows a the logo and top bar navigation, with the breadcrumbs underneath, and part of an image carousel.](https://warp-ds.github.io/docs/components/breadcrumbs/breadcrumbs-usage-placement-desktop-example.svg)

**Mobile example**

![Example showing an example of breadcrumbs in mobile website. The example shows a the logo and top bar navigation, with the breadcrumbs underneath, and part of an image carousel.](https://warp-ds.github.io/docs/components/breadcrumbs/breadcrumbs-usage-placement-mobile-example.svg)

#### Page link 

-   Each page link should be short and clearly reflect the location or entity it links to.
-   Start with the highest level parent page and move deeper into the information architecture as the breadcrumb trail progresses.
-   If the current page is included in a breadcrumb trail, it is always the last text listed and is not an interactive link.
-   Each breadcrumb path is separated by a “/”, which should use the same font as the other breadcrumbs, but using a default text style (not an interactive link style).

The breadcrumb component should always aim to display as many crumbs (items) as possible to give users a clear view of their current position within the marketplace's hierarchy. However, when space is limited, the component should adapt:

#### Reduce number of crumbs on smaller viewports 

When the screen isn’t wide enough to display the full breadcrumb path, we only show the last two crumbs (items) in the breadcrumb trail. This helps the user get a better understanding of where they are within the site structure, and allows them the opportunity to go one level up within the site structure to explore more.

#### Text truncation for long item labels 

If the breadcrumb item labels are too long to fit on smaller screens, we:

-   Use truncation to shorten the amount of visible text.
-   When truncating text, use an ellipsis (...) at the end of the last label.

![Example showing an annotated example of a breadcrumbs component, highlighting how truncation of text looks like.](https://warp-ds.github.io/docs/components/breadcrumbs/breadcrumbs-usage-overflow-content.svg)

**1\. Not truncated** - the first path does not get truncated.  
**2\. Truncated** - the last path does gets truncated.

## Styling

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

![Example showing an annotated example of a breadcrumbs component. There are three annotations: 1. highlighting the page name, 2. Highlighting the separator,  and 3. highlighting the current page.](https://warp-ds.github.io/docs/components/breadcrumbs/breadcrumbs-anatomy.svg)

#### 1\. Page name 

**Text style:** Body  
**Color:** semantic/color/text/default

#### 2\. Separator 

**Text style:** Body  
**Color:** semantic/color/text/default

#### 3\. Current page 

**Text style:** Body  
**Color:** semantic/color/text/link

![Example showing an annotated example of a breadcrumbs component. There are three annotations: 1. highlighting the page name, 2. Highlighting the separator,  and 3. highlighting the current page.](https://warp-ds.github.io/docs/components/breadcrumbs/breadcrumbs-code-layout-and-spacing.svg)

## Accessibility

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

Breadcrumbs should have a label that identifies the structure as a breadcrumb trail to screen readers.

It is recommended that the crumb for the current page has the `aria-current="page"` attribute set. Usually this is the last crumb in the trail.

## Frameworks

### React

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

You can import the component like so:

```js
import { Breadcrumbs } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Breadcrumbs } from '@warp-ds/react/components/breadcrumbs';
```

```js
<Breadcrumbs>
  <a href="/url/1">Page 1</a>
  <a href="/url/2">Page 2</a>
  <span aria-current="page">Current Page</span>
</Breadcrumbs>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string | Her er du | Defines a string value that labels the affix element. |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |

### Vue

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

> Use in entire app

```js
import { Breadcrumbs } from '@warp-ds/vue';
app.use(Breadcrumbs);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wBreadcrumbs } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wBreadcrumbs } from '@warp-ds/vue/breadcrumbs';
```

```vue
<w-breadcrumbs>
  <a href="/url/1">Page 1</a>
  <a href="/url/2">Page 2</a>
  <span aria-current="page">Current Page</span>
</w-breadcrumbs>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string | Her er du | Defines a string value that labels the current element. |

### Elements

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

```html
<w-breadcrumbs>
  <a href="/url/1">Page 1</a>
  <a href="/url/2">Page 2</a>
  <span aria-current="page">Current Page</a>
</w-breadcrumbs>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string | Her er du | Defines a string value that labels the current element. |
