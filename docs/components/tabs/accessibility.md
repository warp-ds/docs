# Tabs - Accessibility
Tabs are used to group content, allowing users to navigate views without.

<ComponentsStatus />

## General
Focus management and ARIA attributes are handled automatically.

::: warning Warning
The `name` attributes will be used to generate `id` attributes (prefixed with `warp-tab-` and `warp-tabpanel-`), and therefore they must be unique throughout the entire DOM.
This is because aria-controls and aria-labelledby rely on id attributes, and they are required for the tabs to be ARIA compliant.
:::

<component-questions />