# Segmented control - Accessibility

A segmented control is a native-styled control for switching between a small number of views.

<ComponentsStatus />

## General

Each segment is a separate element that assistive technology can focus on. Its label is the segment's title. When a segment shows a badge with a count, the count is added to that label, so the badge information is not lost.

Give each segment a clear, short title. The title is what the user hears when they move to the segment.

Do not rely on the badge alone. The title and the selected segment must make sense without it.

## iOS (VoiceOver)

- Each segment is announced by its title, for example "Unread".
- A segment with a badge count above zero is announced with the count after the title, for example "Unread, 3".
- Counts above 99 are announced as "99+", the same as on screen. Unlike the [Notification badge](/components/notification-badge/overview.md), the real count is not announced.
- A dot badge (a count of zero) is not announced.
- Before iOS 26, segments are announced as buttons.

<component-questions />
