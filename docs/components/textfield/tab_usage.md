## Guidelines

### When to use

- A user needs to input short, single-line information.
- Placed in forms, filters, modals, or toolbars.


### When not to use

- **Multi-line input is needed**: use [Text area](../textarea/index.md) component.
- **Selecting from fixed options**: use [Select](../select/index.md) component.
- **The content is fixed or system-generated**: use a Read-only state.

## Behaviour

- Placeholder text is shown when the field is empty.
- Icons and affixes (prefix/suffix) are non-interactive by default. Icons can optionally be used for actions related to the input content, e.g., clearing the field, toggling password visibility, opening the date picker, etc.
- Icons must clearly indicate their function, in case of interaction, support keyboard navigation and screen reader, and should not interfere with typing or focus behaviour.
- Error state overrides help text.
- Optional tooltip appears on hover/focus of info icon.
- Read-only disables keyboard input but keeps visual clarity.
- Field supports keyboard navigation.

## Interaction

Text field supports full keyboard and pointer interaction across platforms. Users can focus the field via tab or click, enter and edit text, and navigate using arrow keys.

All interactive elements of the text field, such as info tooltip or clear buttons must be keyboard-accessible and support focus states.

## Content guidelines

- Use a input label to clearly describe the purpose of the input, don’t rely on placeholder alone.
- Keep input label text short and concise.
- Use Hint (placeholder) text to provide brief instructions for the expected input. Since placeholder disappear when users start typing, avoid adding critical information.
- Use the help text area for any examples or formatting hints, so that it's visible after the user enters text in the input area. Only use this where clarification is required, and try to avoid overuse.
- Error text should be short, clear, and solution focused.

Visit our Language Specialists [Text input](https://www.astro-contentguide.com/05b2d7be6/p/58387b-text-input) guidance and best practices to ensure clear, consistent communication in all text inputs.

## States

### Default

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/usage-state-default.svg" alt="Default text field with label, placeholder and help text" />
  </div>

  <div>
  Empty field with placeholder.
  </div>
</div>

### Hover

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/usage-state-hover.svg" alt="Default text field with hover state" />
  </div>

  <div>
  Field border highlights on mouse hover.
  </div>
</div>

### Active

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/usage-state-active.svg" alt="Default text field with active state" />
  </div>

  <div>
  Field is focused and ready for text input.
  </div>
</div>

### Filled

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/usage-state-filled.svg" alt="Default text field with filled state" />
  </div>

  <div>
  Field contains user input.
  </div>
</div>

### Disabled

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/usage-state-disabled.svg" alt="Default text field with disabled state" />
  </div>

  <div>
  Field cannot be interacted with, grayed out visually.
  </div>
</div>

### Error

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/usage-state-error.svg" alt="Default text field with error state" />
  </div>

  <div>
  Validation failed — shows red border and message below (help text).
  </div>
</div>

### Error active

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/usage-state-erroractive.svg" alt="Default text field with active error state" />
  </div>

  <div>
  Field is focused but still in error state.
  </div>
</div>

### Read Only

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textfield/usage-state-readonly.svg" alt="Default text field with read-only state" />
  </div>

  <div>
  Text is visible but not editable.
  </div>
</div>