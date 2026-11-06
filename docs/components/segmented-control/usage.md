# Segmented control - Usage

A segmented control is a native-styled control for switching between a small number of views.

See also [Tabs](/components/tabs/overview.md), [Notification badge](/components/notification-badge/overview.md).

<ComponentsStatus />

## Guidelines

- Use a short, clear title for each segment. Segments scroll when they do not fit, but short titles keep them all visible.
- Keep the number of segments small. Use the segmented control only for a few options.
- Show one view per segment, and keep the selected segment in step with the view on screen.
- Use a badge on a segment only when that segment has new or unread content. Clear it once the user has seen the content.
- Use the same badge style for every segment in one control.

### When to use

- To filter a list, for example "All", "Unread" and "Flagged".
- To switch between two or three views of the same content.
- To show new or unread content in one of the views, using badges.

### When not to use

- To move between sections of a page. Use [Tabs](/components/tabs/overview.md).
- For a long list of options. Use a menu or a list instead.
- For an action, such as "Delete" or "Share". A segmented control changes the view, it does not perform an action.

## Behaviour

### Selection

- Tapping a segment selects it and tells the app which segment was chosen.
- The app owns the selection. In SwiftUI it is a binding to the selected identifier. In UIKit the delegate reports each change.

### Scrolling

- When the segments are wider than the control, the control scrolls horizontally.

### Badges

- A segment with no badge (`nil`) shows no badge.
- A badge of `0` shows a dot.
- A badge from 1 to 99 shows the count. Higher counts show as "99+".
- The badge style applies to every segment. On iOS 26 and later it follows the `badgeType` you set. Before iOS 26, badges are always red.

### Appearance by iOS version

- iOS 26 and later: the system segmented control with Liquid Glass.
- iOS 18 to 25: a custom tab strip. It looks different from iOS 26 but has the same behaviour.

<component-questions />
