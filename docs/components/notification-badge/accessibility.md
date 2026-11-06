# Notification badge - Accessibility

A notification badge is a dot or a count signalling new or unread items.

<ComponentsStatus />

## General

The badge is decorative for screen readers: it is hidden from assistive technology, so the information it carries must be given to the element it belongs to. Each platform provides a value for this purpose. Set it on the item the badge marks, such as a row, tab or button.

The value is localised and describes the badge in words, for example "3 unread" or "new notification". For counts it uses the real number even when the badge shows "99+", so a user hears "150 unread" while the screen shows "99+".

Do not rely on colour alone. The badge's meaning must also be available through the value on the host element.

## iOS (VoiceOver)

- The badge is hidden from VoiceOver. VoiceOver reads only the element it is attached to.
- Read the value from the badge and set it on the host element, for example `.accessibilityValue(badge.accessibilityValue ?? "")`.
- A count of zero or less has no value, so nothing is added to the host element.
- Keep the host's label short and specific, such as "Messages". The value then tells the user what the badge means.

<component-questions />
