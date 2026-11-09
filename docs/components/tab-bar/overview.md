# Tab bar - Overview

A tab bar sits at the bottom of the screen. It lets users switch between the main sections of an app. Warp styles the native iOS tab bar with Warp colours, icons and badges.

See also [Navigation bar](/components/navigation-bar/overview.md).

<ComponentsStatus />

## General

The tab bar is the native platform bar, styled by Warp. Each tab item has:

- **Icon:** tinted with the Warp icon colour, or the selected colour for the active tab.
- **Title:** a short label for the section.
- **Badge (optional):** a count, such as unread messages, or a presence badge that shows that there is something new.

On iOS 26 and later the tab bar uses Liquid Glass. On earlier versions the bar has an opaque Warp background.

## When to use

- To switch between the top-level sections of an app, such as Home, Search, Messages and Profile.
- To show that a section has new content, with a badge.

## When not to use

- For actions, such as "Create" or "Share". Use a [Button](/components/button/overview.md) or the [Navigation bar](/components/navigation-bar/overview.md).
- To switch between views within one screen. Use a [Segmented control](/components/segmented-control/overview.md).

<component-questions />
