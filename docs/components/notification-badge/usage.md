# Notification badge - Usage

A notification badge is a dot or a count signalling new or unread items.

See also [Badge](/components/badge/overview.md), [Segmented control](/components/segmented-control/overview.md).

<ComponentsStatus />

## Guidelines

- Use a dot when you only need to show that something is new. Use a count when the number of items matters.
- Keep the default maximum of 99. Larger numbers make the badge wide and rarely help the user.
- Place the badge on, or next to, the item it describes. Keep it clear of the item's text.
- Use the default red style for notifications. Use the blue `.primary` style for a highlight that fits the brand's primary colour. Choose one style per context and use it consistently.
- Clear the badge once the user has seen the items. A badge that never clears loses its meaning.
- Never use a badge for status or category labels. Use [Badge](/components/badge/overview.md) instead.

### When to use

- To show that a list item, menu entry or tab has new content, such as a new message or an unread update.
- To show how many unread items are waiting, when the user can view and clear them.
- On a segment of a [Segmented control](/components/segmented-control/overview.md) that holds new content.

### When not to use

- For status or category labels such as "Success" or "Draft". Use [Badge](/components/badge/overview.md).
- For errors or warnings that need a response. Use [Alert](/components/alert/overview.md).
- To show that there are no items. A count of zero or less shows nothing, so the absence of a badge does not mean "none".

## Behaviour

### Content

- A dot is a solid marker with no number.
- A count shows the number. Counts of zero or less show nothing: the badge is removed from the layout.
- Counts above the maximum show as "99+" by default. Single digits always draw as a circle.
- A maximum below 1 is clamped to 1.

### Sizes

- `.medium` (default) is a 16×16 pt dot, with a 24 pt high count.
- `.small` is a 10×10 pt dot, with a 16 pt high count. Use it where space is tight.

### Styles

- `.default` is red and uses the notification background token.
- `.primary` is blue and uses the primary background token.

### Text size

Counts scale with the user's Dynamic Type setting, up to the accessibility 1 size.

<component-questions />
