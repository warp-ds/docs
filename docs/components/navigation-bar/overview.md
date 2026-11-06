# Navigation bar - Overview

A navigation bar sits at the top of a screen. It shows the screen title, a back button and the actions for the screen. Warp styles the native iOS navigation bar with Warp colours, typography and icons.

See also [Tab bar](/components/tab-bar/overview.md).

<ComponentsStatus />

## General

The navigation bar is the native platform bar, styled by Warp. It contains:

- **Title:** the name of the current screen, as a standard or large title.
- **Back button:** returns to the previous screen. Warp uses its own chevron icon on iOS 26 and later.
- **Bar buttons:** actions for the screen, in a default or primary style.

On iOS 26 and later the bar uses Liquid Glass: the background is transparent and content scrolls underneath it. On earlier versions the bar has an opaque Warp background.

## When to use

- At the top of every screen in a navigation stack, to show where the user is and how to go back.
- To give access to one or two actions for the current screen, such as "Save" or "Close".

## When not to use

- Switching between the main sections of an app. Use the [Tab bar](/components/tab-bar/overview.md) instead.
- Many actions. Group secondary actions in a [Menu](/components/menu/overview.md).

<component-questions />
