# Segmented control - Overview

A segmented control is a native-styled control for switching between a small number of views. The user taps one segment, and the view for that segment is shown.

See also [Tabs](/components/tabs/overview.md), [Notification badge](/components/notification-badge/overview.md).

<ComponentsStatus />

## General

A segmented control shows its options side by side, in one bar. It is used to change what the current screen shows, for example to filter a list or switch between two views of the same content. Exactly one segment is selected at a time.

Each segment can show an optional [Notification badge](/components/notification-badge/overview.md) to flag new or unread content.

To move between sections of a page, use [Tabs](/components/tabs/overview.md) instead.

Three properties define the component:

- **Native styling**: on iOS 26 and later the control uses the system segmented control with Liquid Glass. On earlier versions it uses a custom tab strip, so the same API works on every supported iOS version.
- **Scrollable**: when the segments do not fit the available width, the control scrolls horizontally.
- **Badges**: each segment can show a notification badge, using a dot or a count.

<component-questions />
