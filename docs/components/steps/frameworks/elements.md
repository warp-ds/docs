# Steps - Frameworks
The steps component is built to handle user journeys, showing progress.

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Usage Notes

The steps component consists of two custom elements that work together:

- `<w-step-indicator>` - The container that manages step layout and orientation
- `<w-step>` - Individual step items within the indicator

Each `<w-step>` can be marked as `active` or `completed` to indicate progress. The `<w-step-indicator>` component automatically handles:

- Vertical and horizontal layouts
- Left and right alignment (for vertical layout)
- Visual connecting lines between steps
- ARIA attributes for accessibility

### Example

<style-isolate>
  <w-step-indicator>
    <w-step completed>
      <h4>Step one</h4>
      <p>This step is completed</p>
    </w-step>
    <w-step active>
      <h4>Step two</h4>
      <p>This is the current step</p>
    </w-step>
    <w-step>
      <h4>Step three</h4>
      <p>This step is upcoming</p>
    </w-step>
  </w-step-indicator>
</style-isolate>

```html
<w-step-indicator>
  <w-step completed>
    <h4>Step one</h4>
    <p>This step is completed</p>
  </w-step>
  <w-step active>
    <h4>Step two</h4>
    <p>This is the current step</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>This step is upcoming</p>
  </w-step>
</w-step-indicator>

<script type="module">
  // Update step states programmatically
  const steps = document.querySelectorAll('w-step');

  // Mark a step as completed
  steps[0].completed = true;

  // Mark a step as active
  steps[1].active = true;
</script>
```

### Props - w-step-indicator

#### Optional Props

| Name       | Type    | Default | Description                                      |
| ---------- | ------- | ------- | ------------------------------------------------ |
| horizontal | boolean | false   | Display steps horizontally instead of vertically |
| right      | boolean | false   | Align steps to the right (vertical layout only)  |

#### Slots

| Name    | Description                          |
| ------- | ------------------------------------ |
| default | `<w-step>` elements for each step    |

#### Horizontal (`horizontal`)

Display steps in a horizontal layout instead of the default vertical layout.

Type: `boolean`

Default: `false`

```html example
<w-step-indicator horizontal>
  <w-step completed>
    <h4>Step 1</h4>
    <p>Completed</p>
  </w-step>
  <w-step active>
    <h4>Step 2</h4>
    <p>In progress</p>
  </w-step>
  <w-step>
    <h4>Step 3</h4>
    <p>Upcoming</p>
  </w-step>
</w-step-indicator>
```

#### Right (`right`)

Align the step indicator to the right side. This only applies to the vertical layout.

Type: `boolean`

Default: `false`

```html example
<w-step-indicator right>
  <w-step completed>
    <h4>Step one</h4>
    <p>Completed step</p>
  </w-step>
  <w-step active>
    <h4>Step two</h4>
    <p>Current step</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>Next step</p>
  </w-step>
</w-step-indicator>
```

### Props - w-step

#### Optional Props

| Name      | Type    | Default | Description                      |
| --------- | ------- | ------- | -------------------------------- |
| active    | boolean | false   | Whether this step is active      |
| completed | boolean | false   | Whether this step is completed   |

#### Slots

| Name    | Description           |
| ------- | --------------------- |
| default | The step content      |

#### Active (`active`)

Mark a step as the currently active step. The active step displays a filled indicator.

Type: `boolean`

Default: `false`

```html example
<w-step-indicator>
  <w-step>
    <h4>Step one</h4>
    <p>Not active</p>
  </w-step>
  <w-step active>
    <h4>Step two</h4>
    <p>This step is active</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>Not active</p>
  </w-step>
</w-step-indicator>
```

#### Completed (`completed`)

Mark a step as completed. Completed steps display a checkmark icon and a filled indicator.

Type: `boolean`

Default: `false`

```html example
<w-step-indicator>
  <w-step completed>
    <h4>Step one</h4>
    <p>This step is completed</p>
  </w-step>
  <w-step completed>
    <h4>Step two</h4>
    <p>This step is also completed</p>
  </w-step>
  <w-step active>
    <h4>Step three</h4>
    <p>Current step</p>
  </w-step>
</w-step-indicator>
```

### Programmatic control

You can programmatically update step states by setting the `active` and `completed` properties:

```html example
<w-step-indicator id="controlled-steps">
  <w-step>
    <h4>Step one</h4>
    <p>First step</p>
  </w-step>
  <w-step>
    <h4>Step two</h4>
    <p>Second step</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>Third step</p>
  </w-step>
</w-step-indicator>
<script type="module">
  const stepIndicator = document.querySelector('#controlled-steps');
  const steps = stepIndicator.querySelectorAll('w-step');

  // Set initial state: first step completed, second active
  steps[0].completed = true;
  steps[1].active = true;
</script>
```

<component-questions />
