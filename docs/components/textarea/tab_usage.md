## Guidelines

### When to use

- For detailed or open-ended input, like comments, feedback, descriptions, or messages.

### When not to use

- **For short input**: Use [Text field](../textfield/index.md) instead.

### Behaviour

- Placeholder text is shown when the field is empty.
- Height can be set to auto-grow with content or have a fixed height with scrolling inside.
- Can be manually resized using the resize handle.
- Error state overrides help text.
- Optional tooltip appears on hover/focus of the info icon.
- Read-only disables keyboard input but keeps visual clarity.
- Field supports keyboard navigation.

### Interaction

Text areas support keyboard and pointer interaction across platforms. Users can focus the field via tab or click, enter and edit text, and navigate using arrow keys. 

The Info tooltip must be keyboard accessible and support the focus state.

The resize handle can be used with pointer interaction to change the text area content view.

### Content guidelines

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
    <img src="/components/textarea/usage-states-default.svg" alt="Default text area with label, placeholder and help text" />
  </div>

  <div>
  Empty area with placeholder text.
  </div>
</div>

### Hover

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/usage-states-hover.svg" alt="Default text area with hover state" />
  </div>

  <div>
  Area border highlights on mouse hover.
  </div>
</div>

### Active

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/usage-states-active.svg" alt="Default text area with active state" />
  </div>

  <div>
  Area is focused and ready for text input.
  </div>
</div>

### Filled

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/usage-states-filled.svg" alt="Default text area with filled state" />
  </div>

  <div>
  Text contains input.
  </div>
</div>

### Disabled

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/usage-states-disabled.svg" alt="Default text area with disabled state" />
  </div>

  <div>
  Area cannot be interacted with, grayed out visually.
  </div>
</div>

### Error

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/usage-states-error.svg" alt="Default text area with error state" />
  </div>

  <div>
  Failed input validation.
  </div>
</div>

### Error active

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/usage-states-error_active.svg" alt="Default text area with active error state" />
  </div>

  <div>
  Area is focused but still in error state.
  </div>
</div>

### Read Only

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/textarea/usage-states-read_only.svg" alt="Default text area with read-only state" />
  </div>

  <div>
  Text is visible but not editable.
  </div>
</div>