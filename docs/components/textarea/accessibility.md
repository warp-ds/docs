# Text area - Accessibility
A text area allows users to input extended text content that covers multiple lines.

## General
If a visible label isn't specified, an **aria-label** must be provided to the text field for accessibility. If the field is labeled by a separate element, an **aria-labelledby** prop must be provided using the id of the labeling element instead.

- Always provide a visible label (do not rely on placeholder alone)
- Do not rely on color alone for interaction feedback (e.g. error states)
- Interaction patterns should follow platform-native expectations (e.g. tap zones, keyboard navigation, etc) and must not block accessibility tools.

<component-questions />