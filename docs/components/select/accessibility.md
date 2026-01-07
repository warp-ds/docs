# Select - Accessibility
A select is a form input component that lets users choose one option from a predefined list.

<ComponentsStatus />

## General
If a visible label isn't specified, an **aria-label** should be provided to the Select for accessibility. If the field is labeled by a separate element, an **aria-labelledby** prop should be provided using the id of the labeling element instead.

<br/>

- Always provide a visible label (do not rely on placeholder alone).
- Do not rely on color alone for interaction feedback (e.g. error states).
- Interaction patterns should follow platform-native expectations (e.g. tap zones, keyboard navigation, etc) and must not block accessibility tools.
- Dropdown must be announced by screen readers.

<component-questions />