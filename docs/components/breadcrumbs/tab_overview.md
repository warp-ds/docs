## Overview 
Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step. 


## Example
<ThemeSwitcher />
<breadcrumbs-example />

## Anatomy

::: image-block
![Example showing the anatomy of a breadcrumbs component. The breadcrumbs are a horizontal collection of text links, separated by a "/", that represent different pages within a site that are directly connected to one another within a site structure.](/components/breadcrumbs/breadcrumbs-anatomy.svg)
:::

**1. Path/level**: The section or page within the app, usually a link.

**2. Separator**: A forward slash symbol (“/”) positioned between each item in the list. It provides visual distinction between individual links (or crumbs) using the same font as the rest of the breadcrumbs. 

**3. Current page**: This is the last item in the breadcrumbs and shows the current page the user is on. It uses default text, and should not be a clickable link. 

## Content

Breadcrumbs expect their component children to be the link "crumbs" that make up the navigation structure.
The component will interject a separator between the crumbs.


<component-design-guidelines name="Warp - Components / Breadcrumbs" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=17-139&mode=design" />