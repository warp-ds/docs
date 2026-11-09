# Notification badge - Overview

A notification badge is a dot or a count signalling new or unread items. It tells the user that something is waiting for them without describing what it is.

See also [Badge](/components/badge/overview.md), [Segmented control](/components/segmented-control/overview.md).

<ComponentsStatus />

## General

A notification badge is a small, coloured marker placed on or beside the item it describes. It shows either a solid dot, meaning something is new, or a number, meaning how many items are waiting. It is not a label: use [Badge](/components/badge/overview.md) to show status or category.

The notification badge is also used inside the Segmented control and the Tab bar, to flag a segment or tab that has new content.

Three properties define the component:

- **Signal only**: the badge marks that something is new or unread. It does not say what the item is. Use text next to it for that.
- **Capped count**: counts above the maximum (99 by default) show as "99+", so the badge stays small.
- **Two styles**: the default style is red, for notifications. The primary style is blue, for a highlight that follows the brand's primary colour.

<component-questions />
