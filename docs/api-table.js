export const react = {
  Affix: {
    title: 'Affix props',
    props: [
      ['aria-label', 'string', '', 'Defines a string value that labels the affix element'],
      ['prefix', 'boolean', '', 'Affix added at the beginning of input'],
      ['suffix', 'boolean', '', 'Affix added at the end of input'],
      ['clear', 'boolean', '', 'Displays a clear icon'],
      ['search', 'boolean', '', 'Displays a search icon'],
      ['label', 'string', '', 'Displays a string'],
    ],
    events: [
      ['onClick', '() => void', '', 'Click handler paired with clear or search'],
    ]
  },
  Alert: {
    required: [
      [
        'type',
        "'negative' | 'positive' | 'warning' | 'info'",
        'undefined',
        `Type of Alert`,
      ],
    ],
    props: [
      ['show', 'boolean', 'undefined', 'Controls when the alert shows'],
      ['role', 'string', 'alert', 'ARIA live region "role" attribute value'],
      ['className', 'string', 'undefined', 'Additional classes to include'],
      [
        'style',
        'string',
        'undefined',
        `Additional CSS styles for the container`,
      ],
    ],
  },
  Attention: {
    required: [
      ['targetEl', 'MutableRefObject<unknown>', '', 'The reference container to which the Attention component is positioned relative to. Optional if `callout`.'],
    ],
    props: [
      ['isShowing', 'boolean', 'false', 'Whether Attention component is shown Used for tooltip'],
      [
        'placement', "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'", "'bottom'", 'Placement according to the target element. The arrow will point to the opposite side of this position',
      ],
      ['children', 'Element | Element[]', '', 'Elements inside of the Attention component'],
      ['className', 'string', '', 'Extend the Attention component container styling'],
      ['tooltip', 'boolean', 'false', 'Whether Attention component is rendered as a tooltip'],
      ['callout', 'boolean', 'false', 'Whether Attention component is rendered as a callout'],
      ['popover', 'boolean', 'false', 'Whether Attention component is rendered as a popover'],
      ['highlight', 'boolean', 'false', 'Whether Attention component is rendered as a highlight'],
      ['role', 'string', '', 'Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`).'],
      ['aria-label', 'string', '', 'Allows the user to override the default aria-label attribute for the Attention component'],
      ['noArrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['canClose', 'boolean', 'false', 'Whether a close button is shown'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      ['skidding', 'number', '0', 'Distance from which to offset the Attention component along its targetEl horizontally.'],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      ['crossAxis', 'boolean', 'false', 'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.'],
      ['fallbackPlacements', 'array', 'undefined', 'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.'],
    ],
    events: [
      ['onDismiss', '() => void', '', 'Called when user clicks the close button or presses Escape when the button is in focus.'],
    ],
  },
  Badge: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price'",
        "'neutral'",
        '',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        "undefined",
        'Used for absolute positioning of the badge within a container',
      ],
      ['children', 'Element | Element[] | string', '', 'Content of the Badge component'],
      ['className', 'string', '', 'Additional CSS classes to apply to the component'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
    ],
  },
  Box: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['bleed', 'boolean', 'false', 'Will make a box full-width on sm-size'],
      ['bordered', 'boolean', 'false', 'Adds a lovely border'],
      [
        'info',
        'boolean',
        'false',
        'Will style the box with colors for indicating that it has informative content',
      ],
      [
        'neutral',
        'boolean',
        'false',
        'Will style the box in a neutral fashion',
      ],
      [
        'role',
        'string',
        'region',
        'Sets the ARIA `role` attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (`role=""`).',
      ],
    ],
  },
  Breadcrumbs: {
    required: [],
    props: [
      [
        'aria-label',
        'string',
        'Her er du',
        'Defines a string value that labels the affix element.',
      ],
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
    ],
  },
  Button: {
    required: [],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      [
        'type',
        '"button"|"submit"|"reset"',
        'button',
        'Button type, only applied when href is not set.',
      ],
      [
        'primary',
        'boolean',
        'false',
        'Set the button to be a primary, call to action button. Can be combined with `small`.',
      ],
      [
        'secondary',
        'boolean',
        'false',
        'Set the button to be a secondary button. Can be combined with `quiet` and `small`.',
      ],
      [
        'negative',
        'boolean',
        'false',
        'Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.',
      ],
      [
        'utility',
        'boolean',
        'false',
        'Set the button to be a utility style button. Can be combined with `small` and `quiet`.',
      ],
      [
        'quiet',
        'boolean',
        'false',
        'Quieten down the button, can be combined with other button types.',
      ],
      [
        'small',
        'boolean',
        'false',
        'Set the button to be a small size, can be combined with other button types.',
      ],
      [
        'link',
        'boolean',
        'false',
        'Set the button to look like a link. Can be combined with `small`. Should not be combined with `href`',
      ],
      [
        '~~pill~~',
        'boolean',
        'false',
        'Set the button to look like a pill style button. @deprecated use `utility` together with `quiet` instead.',
      ],
      [
        'loading',
        'boolean',
        'false',
        'Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.',
      ],
      [
        'href',
        'string',
        '',
        'Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation. Should not be combined with `link`',
      ],
      [
        'target',
        'string',
        '',
        'Anchor target, see [The Anchor element / MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).',
      ],
      ['rel', 'string', '', 'The relationship of the linked URL.'],
      [
        'fullWidth',
        'boolean',
        '',
        "Sets the button's width to its parent's width. Useful especially on mobile when button should take full width.",
      ],
    ],
  },
  Card: {
    required: [['children', 'Element<br />|Element[]', '', 'The contents of the Card']],
    props: [
      ['className', 'string', '', 'Add your own custom styles to the container element'],
      ['as', 'string<br />|Component', 'div', 'The wrapping container element'],
      ['selected', 'boolean', '', 'If the card is selected'],
      [
        'flat',
        'boolean',
        '',
        'Removes box shadow around card',
      ],
    ],
  },
  Combobox: {
    required: [
      ['options', 'ComboboxOption[]', '', 'The available options to select from'],
      ['value', 'string', '', 'The TextField input value'],
      ['onChange', '(value: string) => void', '', 'Called when the value of the input changes'],
    ],
    props: [
      ['id', 'string', '', 'Unique identifier for the input field'],
      ['label', 'string', '', 'Label above input'],
      ['placeholder', 'string', '', 'Input placeholder'],
      ['openOnFocus', 'boolean', 'false', 'Whether the popover opens when focus is on the text field'],
      ['selectOnBlur', 'boolean', 'true', 'Select active option on blur'],
      ['matchTextSegments', 'boolean', 'false', 'Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override `[data-combobox-text-match]`. This uses the default matching algorithm. Use the `highlightValueMatch` to pass your own matching function.'],
      ['disableStaticFiltering', 'boolean', 'false', 'Disable client-side static filtering'],
      ['highlightValueMatch', '(optionValue: string, inputValue: string) => ReactNode', '', 'Pass your own function for highlight matching'],
      ['invalid', 'boolean', '', 'Renders the input field in an invalid state. Often paired together with `helpText` to provide feedback about the error'],
      ['helpText', 'ReactNode', '', 'The content to display as the help text'],
      ['className', 'string', '', 'Additional container styling'],
      ['listClassName', 'string', '', 'Additional list styling'],
      ['aria-label', 'number', '', 'Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined. Defines a string value that labels the current element. @see aria-labelledby.'],
      ['aria-labelledby', 'string', '', 'Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined. Identifies the element (or elements) that labels the current element.'],
      ['children', 'ReactNode', '', 'For Affix use'],
      [
        'optional',
        'boolean',
        '',
        'Mark label to indicate that this combobox is optional.',
      ],
    ],
    events: [
      ['onSelect', '((value: string) => void) & ReactEventHandler<HTMLInputElement>', '', 'Called when the user selects an option'],
      ['onFocus', '(() => void) & FocusEventHandler<HTMLInputElement>', '', 'Called when the input is focus'],
      ['onBlur', '((value: string) => void) & FocusEventHandler<HTMLInputElement>', '', 'Called when the input loses focus with the current navigation value or input value'],
    ],
  },
  DeadToggle: {
    required: [],
    props: [
      [
        'radio',
        'boolean',
        '',
        'Passes radio type to the underlying toggle',
      ],
      [
        'checkbox',
        'boolean',
        '',
        'Passes checkbox type to the underlying toggle',
      ],
      [
        'value',
        'string',
        '',
        'Value for the input',
      ],
      [
        'checked',
        'boolean',
        '',
        'Whether the toggle is checked',
      ],
      ['className', 'string', '', 'Additional classnames to the toggle wrapper'],
      ['labelClassName', 'string', '', 'Additional classnames to the toggle label'],
    ],
  },
  Expandable: {
    required: [['title', 'string', '', 'The title for the expandable']],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      [
        'expanded',
        'boolean',
        'false',
        'The state of the component, either true for expanded or false for closed',
      ],
      [
        'bleed',
        'boolean',
        '',
        'Will make the expandable full-width on sm-size',
      ],
      ['box', 'boolean', '', 'Will make the expandable a Box'],
      [
        'buttonClass',
        'string',
        '',
        'Additional CSS classes to include on the button part of the component',
      ],
      [
        'contentClass',
        'string',
        '',
        'Additional CSS classes to include on the content part of the component',
      ],
      ['animated', 'boolean', '', 'Will animate the expansion/collapse'],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
      [
        'headingLevel',
        'HeadingLevel',
        '',
        'Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element',
      ],
    ],
    events: [
      [
        'onChange',
        '(state: boolean) => void',
        '',
        'Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.',
      ],
    ],
  },
  Modal: {
    required: [
      ['children', 'Element<br />|Element[]', '', 'The modal contents'],
      ['open', 'boolean', '', 'Whether the modal is open or not'],
    ],
    props: [
      ['title', 'string<br />|Element<br />|Element[]', '', 'A string or your own custom elements'],
      ['left', 'boolean<br />|Element<br />|Element[]', '', 'Whether a default back button should render with an onDismiss() callback. It can also be your own custom element(s).'],
      ['right', 'boolean<br />|Element<br />|Element[]', '', 'A default close button or your own custom elements'],
      ['footer', 'Element<br />|Element[]', '', 'Buttons passed to the footer'],
      ['className', 'string', '', 'Additional classes added to the container'],
      ['id', 'string', '', 'An id for the container and ARIA attributes. A random id is generated if none is provided.'],
      ['style', 'CSSProperties', '', 'Additional styles to the container. [More info about CSSProperties](https://legacy.reactjs.org/docs/dom-elements.html#style)'],
      ['aria-label', 'number', '', 'Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,'],
      ['aria-labelledby', 'string', '', 'Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.'],
      ['initialFocusRef', 'RefObject<any>', '', `A reference to the element that should be focused. By default it'll be the first interactive element. [More info](https://react.dev/learn/manipulating-the-dom-with-refs)`],
    ],
    events: [
      [ 'onDismiss', '() => void', '', 'Handler that is called when the user presses esc or clicks outside the modal.'],
      [ 'onLeftClick', '() => void', '', 'Handler that is called when the user clicks the default back button. Requires the `left` prop to be `true`.'],
    ],
  },
  Pagination: {
    required: [
      ['createHref', '(page: number) => string', '', 'Function that returns the href for a given page'],
      ['currentPage', 'number', '', 'The current page number. Adjusted so its never below `1`, and never above `lastPage`.'],
      ['lastPage', 'number', '', 'The number of the last page.'],
    ],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component container.'],
      ['onChange', '(page: number) => void', '', 'Handler that is called with the page number to navigate to. `event.preventDefault` is called for you. Fallbacks to default browser behavior if undefined.'],
      ['numPages', 'number', '', 'The number of pages to show in the pagination.'],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['label', 'string', 'undefined', 'The text content of the pill.'],
      ['~~icon~~', 'ReactNode', 'undefined', 'Used to render an icon inside the pill. You can pass any valid HTML. This will override the label property. @deprecated Do not use.'],
      ['canClose', 'boolean', 'false', 'Whether the pill should be removable via a close button.'],
      ['openSRLabel', 'string', '"Open filter"', 'Label read by screen readers when targeting the pill.'],
      ['closeSRLabel', 'string', '"Remove filter {label}"', 'Label read by screen readers when targeting the close button.'],
      ['suggestion', 'boolean', 'false', 'Whether the pill should be rendered as a suggestion.'],
      ['className', 'string', 'undefined', 'Additional classes applied to the button element of the pill as long as canClose is set to false.'],
    ],
    events: [
        ['onClick', 'Action to be called when the pill is clicked.'],
        ['onClose', 'Action to be called when the close button is clicked.'],
    ],
  },
  Select: {
    required: [],
    props: [
      [
        'id',
        'string',
        '',
        `The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).`,
      ],
      [
        'name',
        'string',
        '',
        'The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).',
      ],
      [
        'defaultValue',
        'string & (string|number|readonly string[])',
        '',
        'The default value (uncontrolled).',
      ],
      ['value', 'string', '', 'The current value (controlled).'],
      ['label', 'ReactNode', '', 'The content to display as the label.'],
      ['optional', 'boolean', '', 'Mark label to indicate that this select is optional.'],
      ['hint', 'ReactNode', '', 'The content to display as the hint.'],
      ['always', 'boolean', '', 'Whether to always show hint.'],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `hint` to provide feedback about the error.',
      ],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        'readOnly',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
      [
        'required',
        'boolean',
        '',
        'Whether user input is required on the input before form submission.',
      ],
      [
        'children',
        'ReactNode',
        '',
        'The `option` elements to populate the select with.',
      ],
      ['className', 'string', '', 'Additional classes to include.'],
      [
        'style',
        'CSSProperties',
        '',
        'Additional CSS styles for the container.',
      ],
      [
        'autoFocus',
        'boolean',
        '',
        'Whether the element should receive focus on render.',
      ],
    ],
  },
  Slider: {
    required: [
      ['step', 'number', '', 'Specifies the value granularity'],
      ['value', 'number', '', `The current value`],
    ],
    props: [
      ['max', 'number', '100', 'The greatest value in the range of permitted values'],
      ['min', 'number', '', 'The lowest value in the range of permitted values'],
      ['disabled', 'boolean', '', 'Whether the slider is disabled'],
      ['aria-label', 'number', '', 'String value for aria-label'],
      ['aria-labelledby', 'string', '', 'Identifies the element that labels the slider'],
      ['aria-valuetext', 'string', '', 'Human readable text alternative for the value'],
    ],
    events: [
      [ 'onChange', '(value: number) => void', '', 'Handler that is called when the value of the slider changes'],
    ]
  },
  Step: {
    required: [
      ['children', 'Element | Element[]', '', 'Contents of Step component'],
    ],
    props: [
      ['active', 'boolean', 'false', 'Step is active'],
      ['completed', 'boolean', 'false', 'Step is completed'],
    ],
  },
  Steps: {
    required: [['children', 'Element[]', '', 'Two or more Step components']],
    props: [
      ['horizontal', 'boolean', 'false', 'Direction of steps'],
      ['right', 'boolean', 'false', 'Align steps to the right'],
      ['className', 'string', '', 'Additional CSS class for the container'],
    ],
  },
  Switch: {
    required: [
        ['value', 'boolean', '', 'The value of the switch.'],
    ],
    props: [
      ['id', 'string', 'false', 'The unique identifier.'],
      ['aria-label', 'string', 'false', 'Defines a string value that labels the current element. Must be set if aria-labelledby is not defined.'],
      ['aria-labelledby', 'string', '', 'Identifies the element (or elements) that labels the current element. Must be set if aria-label is not defined.'],
      ['disabled', 'boolean', 'false', 'Whether the switch is disabled.'],

    ],
    events: [
      ['onClick', '() => void', '', 'Handler for when the Switch is clicked.'],
    ]
  },
  Tab: {
    required: [
      ['name', 'string', '', 'Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler'],
      ['label', 'any', '', 'The label of the tab item'],
    ],
    props: [
      ['isActive', 'boolean', '', 'Used to set which tab should be active on mount. Defaults to the first tab if not present'],
      ['over', 'boolean', 'false', 'Set the over prop to true if you need to move icons to above the tab label'],
      ['className', 'string', '', 'Additional CSS class for the container'],
      ['style', 'any', '', 'Additional CSS styles for the Tab'],
    ],
    events: [
      ['setActive', '(name: string)', 'false', ''],
      ['onChange', '(name: string) => void', '', 'Action to be called when the component is clicked'],
    ],
  },
  TabPanel: {
    required: [
      ['children', 'ReactNode', '', 'The content of the tab panel.'],
      ['name', 'string', '', 'Tab name identifier - This value should be the same as the `name` prop of the corresponding Tab component.'],
    ],
    props: [
      ['hidden', 'boolean', '', 'Show/hide panel manually (in server-side rendering).'],
    ],
  },
  Tabs: {
    required: [['children', 'Element[]', '', 'The Tabs within the container']],
    props: [
      ['active', 'string', '', 'Used to set the name of the Tab that should be active on mount. Defaults to the first tab if not present and isActive is not set on any Tab'],
      ['className', 'string', '', 'Additional CSS class for the container'],
      ['style', 'any', '', 'Additional CSS styles for the container'],
    ],
    events: [
      ['onChange', '(name: string) => void', '', 'Handler that is called when the tab changes'],
    ],
  },
  TextArea: {
    required: [],
    props: [
      [
        'autoFocus',
        'boolean',
        '',
        'Whether the element should receive focus on render.',
      ],
      ['className', 'string', '', 'Additional classes to include.'],
      [
        'style',
        'CSSProperties',
        '',
        'Additional CSS styles for the container.',
      ],
      [
        'defaultValue',
        'string & (string|number|readonly string[])',
        '',
        'The default value (uncontrolled).',
      ],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        '~~error~~',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error. @deprecated use `invalid` instead.',
      ],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.',
      ],
      ['helpText', 'ReactNode', '', 'The content to display as the help text.'],
      [
        'id',
        'string',
        '',
        `The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).`,
      ],
      ['label', 'ReactNode', '', 'The content to display as the label.'],
      [
        'max',
        'string|number',
        '',
        'Standard `input` max attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).',
      ],
      [
        'min',
        'string|number',
        '',
        'Standard `input` min attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).',
      ],
      [
        'maxLength',
        'number',
        '',
        'The maximum number of characters supported by the input. See MDN.',
      ],
      [
        'minLength',
        'number',
        '',
        'The minimum number of characters supported by the input. See MDN.',
      ],
      [
        'name',
        'string',
        '',
        'The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).',
      ],
      [
        'pattern',
        'string',
        '',
        'Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).',
      ],
      [
        'placeholder',
        'string',
        '',
        'Text hint that occupies the text input when it is empty.',
      ],
      [
        'readOnly',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
      [
        'required',
        'boolean',
        '',
        'Whether user input is required on the input before form submission.',
      ],
      ['children', 'ReactNode', '', 'For affix use.'],
      ['value', 'string', '', 'The current value (controlled).'],
      ['optional', 'boolean', '', 'Indicates that the textarea is not required.'],
    ],
  },
  TextField: {
    required: [],
    props: [
      [
        'type',
        '"number"<br />|"text"<br />|"search"<br />|"email"<br />|"password"<br />|"url"<br />|"tel"',
        '',
        'The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).',
      ],
      [
        'autoFocus',
        'boolean',
        '',
        'Whether the element should receive focus on render.',
      ],
      ['className', 'string', '', 'Additional classes to include.'],
      [
        'style',
        'CSSProperties',
        '',
        'Additional CSS styles for the container.',
      ],
      [
        'defaultValue',
        'string & (string|number|readonly string[])',
        '',
        'The default value (uncontrolled).',
      ],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        '~~error~~',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error. @deprecated use `invalid` instead.',
      ],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.',
      ],
      ['helpText', 'ReactNode', '', 'The content to display as the help text.'],
      [
        'id',
        'string',
        '',
        `The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).`,
      ],
      ['label', 'ReactNode', '', 'The content to display as the label.'],
      [
        'max',
        'string|number',
        '',
        'Standard `input` max attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).',
      ],
      [
        'min',
        'string|number',
        '',
        'Standard `input` min attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).',
      ],
      [
        'maxLength',
        'number',
        '',
        'The maximum number of characters supported by the input. See MDN.',
      ],
      [
        'minLength',
        'number',
        '',
        'The minimum number of characters supported by the input. See MDN.',
      ],
      [
        'name',
        'string',
        '',
        'The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).',
      ],
      [
        'pattern',
        'string',
        '',
        'Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).',
      ],
      [
        'placeholder',
        'string',
        '',
        'Text hint that occupies the text input when it is empty.',
      ],
      [
        'readOnly',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
      [
        'required',
        'boolean',
        '',
        'Whether user input is required on the input before form submission.',
      ],
      ['children', 'ReactNode', '', 'For affix use.'],
      ['value', 'string', '', 'The current value (controlled).'],
      ['optional', 'boolean', '', 'Indicates that the textfield is not required.'],
    ],
  },
  Toggle: {
    required: [],
    props: [
      [
        'type',
        '"radio"<br />|"checkbox"<br />|"radio-button"',
        '',
        'The type of Toggle',
      ],
      [
        'title',
        'string',
        '',
        'The option(s) title',
      ],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.',
      ],
      ['helpText', 'string', '', 'Help text beneath options'],
      ['options', 'ToggleEntry[]', '', 'An array of options to render'],
      ['selected', 'ToggleEntry[]', '', 'An array of options to be selected / checked (controlled)'],
      ['defaultSelected', 'ToggleEntry[]', '', 'An array of options to be selected / checked on mount (uncontrolled)'],
      ['label', 'string', '', 'If you only need to render a single option, use this prop instead'],
      ['noVisibleLabel', 'boolean', '', 'Whether label should be invisible'],
      ['checked', 'boolean', '', 'Whether the single option should be checked (controlled)'],
      ['defaultChecked', 'boolean', '', 'Whether the single option should be checked on mount (uncontrolled)'],
      ['indeterminate', 'boolean', '', 'Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.'],
      ['optional', 'boolean', '', 'Whether the toggle is optional Appends (optional) to the end of the title for indication'],
      ['className', 'string', '', 'Custom classes applied to the wrapping container'],
      ['equalWidth', 'boolean', '', 'Will make each option equal width, only applied when "radio-button" type is set'],
      ['small', 'boolean', '', 'Whether the elements should be small, only applied when "radio-button" type is set'],
    ],
  },
};

export const vue = {
  Alert: {
    required: [],
    props: [
      ['v-model', 'boolean', 'undefined', 'Controls when the alert shows'],
      ['title', 'string', 'undefined', 'The title for the alert'],
      ['role', 'string', 'alert', 'The aria role for the alert'],
      ['negative', 'boolean', 'undefined', 'Creates a negative alert'],
      ['positive', 'boolean', 'undefined', 'Creates a positive alert'],
      ['warning', 'boolean', 'undefined', 'Creates a warning alert'],
      ['info', 'boolean', 'undefined', 'Creates an info alert'],
    ],
  },
  Attention: {
    required: [
      ['v-model', 'boolean', '', 'Whether Attention component should be visible'],
      ['target-el', 'string', '', 'Selector of element that the Attention component is rendered relatively to. Optional if `callout`.'],
    ],
    props: [
      [
        'placement', "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'", "'bottom'", 'Placement according to the target element. The arrow will point to the opposite side of this position.',
      ],
      ['tooltip', 'boolean', 'false', 'Render tooltip'],
      ['callout', 'boolean', 'false', 'Whether Attention component is rendered as an inline callout'],
      ['popover', 'boolean', 'false', 'Whether Attention component is rendered as a popover'],
      ['highlight', 'boolean', 'false', 'Whether Attention component is rendered as a highlight'],
      ['role', 'string', '', 'Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`).'],
      ['aria-label', 'string', '', 'Allows the user to override the default aria-label attribute for the Attention component'],
      ['no-arrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['can-close', 'boolean', 'false', 'Whether a close button is shown'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      ['skidding', 'number', '0', 'Distance from which to offset the Attention component along its targetEl horizontally'],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      ['cross-axis', 'boolean', 'false', 'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.'],
      ['fallback-placements', 'array', 'undefined', 'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.'],
    ],
    events: [
      ['@dismiss', '', '', 'Triggered when user clicks the close button or presses Escape when the button is in focus.'],
    ],
  },
  Badge: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price'",
        "'neutral'",
        '',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        "undefined",
        'Used for absolute positioning of the badge within a container',
      ],
    ],
  },
  Box: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['bleed', 'boolean', 'false', 'Will make a box full-width on sm-size'],
      ['bordered', 'boolean', 'false', 'Adds a lovely border'],
      [
        'info',
        'boolean',
        'false',
        'Will style the box with colors for indicating that it has informative content',
      ],
      [
        'neutral',
        'boolean',
        'false',
        'Will style the box in a neutral fashion',
      ],
      [
        'role',
        'string',
        'region',
        'Sets the ARIA `role` attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (`role=""`).',
      ],
    ],
  },
  Breadcrumbs: {
    required: [],
    props: [
      [
        'aria-label',
        'string',
        'Her er du',
        'Defines a string value that labels the current element.',
      ],
    ],
  },
  Card: {
    required: [],
    props: [
      ['selected', 'boolean', '', 'If the card is selected'],
      ['flat', 'boolean', '', 'Removes box shadow around card'],
      ['as', 'string', 'div', 'The DOM element to emit'],
    ]
  },
  Button: {
    required: [],
    props: [
      [
        'label',
        'string',
        '',
        'Interchangeable with the default slot for labelling',
      ],
      [
        'href',
        'string',
        '',
        'When set, an anchor tag will be used instead of a button. Should not be combined with variant `link`',
      ],
      [
        'type',
        'string',
        'button',
        "Controls the button's type, unused when `href` is present",
      ],
      [
        'fullWidth',
        'boolean',
        '',
        "Sets the button's width to its parent's width. Useful especially on mobile when button should take full width.",
      ],
    ],
    variants: [
      ['primary', 'quiet, small, loading', ''],
      ['secondary', 'quiet, small, loading', ''],
      ['negative', 'quiet, small, loading', ''],
      ['link', 'small', ''],
      ['utility', 'small, loading, quiet', ''],
      ['~~pill~~', '', '@deprecated use `utility` together with `quiet` instead.'],
    ]
  },
  ButtonGroup: {
    required: [],
    props: [
      ['outlined', 'boolean', '', 'Outlines the button-group'],
      ['raised', 'boolean', '', 'Adds shadow to the button-group'],
      ['vertical', 'boolean', '', 'Changes the orientation to vertical'],
    ],
    slots: [['default', 'where all the buttons go']],
  },
  ButtonGroupItem: {
    required: [],
    props: [
      [
        'selected',
        'boolean',
        '',
        'Used to give the item a selected appearance - e.g. when used with toggles',
      ],
    ],
    slots: [['default', 'button content']],
  },
  Clickable: {
    required: [],
    props: [
      [
        'href',
        'string',
        '',
        'When set, an anchor tag will be used instead of a button',
      ],
      [
        'label',
        'boolean',
        '',
        'Will add label-styling to the clickable – for label content, see slots',
      ],
      [
        'radio',
        'boolean',
        '',
        'Will create a radio toggle with label and input elements',
      ],
      [
        'checkbox',
        'boolean',
        '',
        'Will create a checkbox toggle with label and input elements',
      ],
    ],
  },
  Expandable: {
    props: [
      [
        'v-model',
        'boolean',
        'false',
        "If not provided, the component will use an internal value that starts the expandable 'closed'",
      ],
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['box', 'boolean', '', 'Will make the expandable a Box'],
      [
        'bleed',
        'boolean',
        '',
        'Will make the expandable full-width on sm-size',
      ],
      [
        'buttonClass',
        'string',
        '',
        'Additional CSS classes to include on the button part of the component',
      ],
      [
        'contentClass',
        'string',
        '',
        'Additional CSS classes to include on the content part of the component',
      ],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
    ],
    slots: [
      ['title', 'string', '', 'The title for the expandable'],
      [
        'default',
        'string',
        '',
        'Content that should be displayed when expanded',
      ],
    ],
    events: [
      [
        'expand',
        'boolean',
        '',
        'Content inside the expandable has been mounted and can be targeted - will fire after any opening animations are complete',
      ],
      [
        'collapse',
        'boolean',
        '',
        'Content inside the expandable has been fully torn down or hidden',
      ],
    ],
  },
  Field: {
    required: [],
    props: [

      ['label', 'string', '', 'The content to display as the label'],
      ['hint', 'string', '', 'The string can contain HTML.'],
      ['invalid', 'boolean', '', 'Renders the field in an invalid state. Often paired with `hint` to provide feedback about the error.'],
      [
        'label-level',
        'number',
        '',
        'Usable on toggles, will make the emitted legend element into a heading for accessibility.',
      ],
      ['optional', 'string', '', 'Mark label to indicate that this input is optional.'],
      ['read-only', 'string', '', 'Whether the input can be selected but not changed by the user.'],
      
      
    ],
  },
  InputAttributes: {
    titles: ['attribute', 'type', 'notes'],
    rows: [
      [
        'valid',
        'boolean',
        '',
        'Whether or not to treat the form element as valid',
      ],
      ['hint', 'string', '', 'The hint to show when this result is triggered'],
      [
        'always',
        'boolean',
        '',
        `If true, will show the status/hint even if the form element hasn't been touched yet - normally validation is only shown after blur`,
      ],
    ],
  },
  InputValidation: {
    titles: ['prop', 'type', 'default', 'notes'],
    rows: [
      ['v-model', 'boolean', '', 'True when all descendants are valid'],
      [
        'v-model:completed',
        'boolean',
        '',
        'True when all descendants are completed - passing their required rule',
      ],
      [
        'should-validate',
        'boolean',
        '',
        'Can be used to instruct all descendants to immediately validate. Note that this will not update if the should-validate logic is updated elsewhere.',
      ],
      ['as', 'string', 'form', 'The DOM element to emit for the wrapper'],
    ],
  },
  Modal: {
    required: [],
    props: [
      ['v-model', 'boolean', '', 'Whether or not to show the modal'],
      ['left', 'boolean<br />|object', '', 'When truthy, will show the left button of the header. Object properties will be used as attributes on the button.'],
      ['right', 'boolean<br />|object', '', 'When truthy, will show the right button of the header. Object properties will be used as attributes on the button.'],
      ['title', 'string', '', ''],
      ['titleAttrs', 'object', '', 'Properties will be set as attributes of the title in the header.'],
      ['headerClasses', 'string<br />|object', '', 'Classes here will be set on the wrapper for the header.'],
      ['contentClasses', 'string<br />|object', '', 'Classes here will be set on the wrapper for the content.'],
      ['contentId', 'string', '', 'This id is useful if you need to programmatically scroll content in the modal.'],
    ],
    events: [
      [ 'dismiss', '', '', 'A user presses ESC or clicks outside the dialog'],
      [ 'left', '', '', 'The left title-button has been clicked'],
      [ 'right', '', '', 'The right title-button has been clicked'],
      [ 'shown', '', '', 'Modal entrance transitions are complete and content has been mounted'],
      [ 'hidden', '', '', 'Modal exit transitions are complete and content has been torn down or hidden'],
    ]
  },
  ModalSlots: {
    required: [],
    slots: [
      ['default', 'Content for the modal'],
      ['footer', 'Footer (button drawer) for the modal - the footer is sticky'],
      ['left', 'Overrides the default icon (a back arrow)'],
      ['right', 'Overrides the default icon (an X symbol)'],
    ],
  },
  ModalCustomProperties: {
    titles: ['name', 'notes'],
    rows: [
      ['--w-modal-max-height', 'The max-height of the modal dialog'],
      ['--w-modal-height', 'The height of the modal dialog'],
      ['--w-modal-width', 'The max-width of the modal dialog'],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['label', 'string', 'undefined', 'The text content of the pill.'],
      ['can-close', 'boolean', 'false', 'Whether the pill should be removable via a close button.'],
      ['suggestion', 'boolean', 'false', 'Whether the pill should be rendered as a suggestion.'],
      ['open-SR-label', 'string', '"Open filter"', 'Label read by screen readers when targeting the pill'],
      ['close-SR-label', 'string', '"Remove filter {label}"', 'Label read by screen readers when targeting the close button'],
    ],
    events: [['close', 'the close button is pressed']],
  },
  Slider: {
    required: [],
    props: [
      ['max', 'number', '100', 'The greatest value in the range of permitted values'],
      ['min', 'number', '0', 'The lowest value in the range of permitted values'],
      ['step', 'number', '', 'Specifies the value granularity'],
      ['label', 'string', '', 'String value for aria-label'],
      ['labelled-by', 'string', '', 'Identifies the element that labels the slider'],
    ],
  },
  Step: {
    required: [],
    props: [
      ['active', 'boolean', 'false', 'Step is active'],
      ['completed', 'boolean', 'false', 'Step is completed'],
    ],
  },
  Steps: {
    required: [],
    props: [
      ['horizontal', 'boolean', 'false', 'Direction of steps'],
      ['right', 'boolean', 'false', 'Align steps to the right'],
    ],
  },
  Switch: {
    required: [
      [
        'v-model',
        'boolean',
        'false',
        "The value of the switch.",
      ],
    ],
    props: [
      ['id', 'string', 'false', 'The unique identifier.'],
      ['disabled', 'boolean', 'false', 'Whether the switch is disabled.'],
    ],
  },
  Tab: {
    required: [
      ['name', 'string', '', 'Tab name identifier. This value will be omitted as the argument to the Tabs setActive handler'],
    ],
    props: [
      ['label', 'string', '', 'Interchangeable with the `label slot` for labelling'],
    ],
    slots: [
      ['default', 'Default slot - mainly used for icons'],
      ['label', 'Label for the tab (renders below default slot)'],
    ],
  },
  TabPanel: {
    required: [
      ['name', 'string', '', 'Tab name identifier - This value should be the same as the `name` prop of the corresponding Tab component.'],
    ],
  },
  Tabs: {
    required: [['v-model', 'string', '', 'Name of the active tab (set by the Tab component via the setActive handler)']],
  },
  TextField: {
    required: [],
    props: [
      ['type', 'string', 'text', 'Allowed types are: `text` | `search` | `email` | `password` | `url` | `tel` | `number`'],
      ['autocomplete', 'string', 'off', ''],
      [
        'mask',
        'object',
        '',
        'See the Masking section below for more information',
      ],
    ],
  },
  Toggle: {
    required: [],
    props: [
      [
        'radio',
        'boolean',
        '',
        '',
      ],
      [
        'checkbox',
        'boolean',
        '',
        '',
      ],
      [
        'radio-button',
        'boolean',
        '',
        '',
      ],
      ['toggles', 'array', '', 'An array of objects. Each object must at least have a value and label attribute. Any other attributes will be transferred directly to the individual toggle'],
      ['invalid', 'boolean', '', 'Whether elements should be styled as invalid',],
      ['disabled', 'boolean', '', 'Whether elements should be styled as disabled',],
      ['indeterminate', 'boolean', '', 'Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.'],
      ['equal-width', 'boolean', '', 'Will make each option equal width, only applied when radio-button is set'],
      ['small', 'boolean', '', 'Whether the elements should be small, only applied when radio-button is set'],
    ],
  },
};

export const elements = {
  Affix: {
    title: 'Affix props',
    props: [
      ['aria-label', 'string', '', 'Defines a string value that labels the affix element'],
      ['clear', 'boolean', '', 'Displays a clear icon'],
      ['search', 'boolean', '', 'Displays a search icon'],
      ['label', 'string', '', 'Displays a string'],
    ],
  },
  Alert: {
    required: [
      [
        'variant',
        "'negative' | 'positive' | 'warning' | 'info'",
        'undefined',
        'Variant of the alert',
      ],
    ],
    props: [
      ['show', 'boolean', 'false', 'Controls when the alert shows'],
      ['role', 'string', 'alert', 'ARIA live region "role" attribute value'],
    ],
  },
  Attention: {
    required: [
      ['target-selector', 'string', '', 'Selector of element that the Attention component is rendered relatively to'],
    ],
    props: [
      ['placement', "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'", "'bottom'", 'Placement according to the target element. Arrow would be on the opposite side of this position'],
      ['show', 'boolean', 'false', 'Whether Attention element should be visible'],
      ['tooltip', 'boolean', 'false', 'Render tooltip'],
      ['callout', 'boolean', 'false', 'Whether Attention element is rendered as an inline callout'],
      ['popover', 'boolean', 'false', 'Whether Attention element is rendered as a popover'],
      ['highlight', 'boolean', 'false', 'Whether Attention element is rendered as a highlight'],
      ['no-arrow', 'boolean', 'false', 'Render Attention element without an arrow'],
      ['can-close', 'boolean', 'false', 'Render Attention element with a close button'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      ['skidding', 'number', '0', 'Distance from which to offset the Attention component along its targetEl horizontally.'],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      ['cross-axis', 'boolean', 'false', 'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.'],
      ['fallback-placements', 'array', 'undefined', 'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.'],
    ],
    events: [
      ['@close', '', '', 'Triggered when user clicks the close button or presses Escape when the button is in focus.']
    ],
  },
  Badge: {
    required: [],
    props: [
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price'",
        "'neutral'",
        '',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        "undefined",
        'Used for absolute positioning of the badge within a container',
      ],
    ],
  },
  Box: {
    required: [],
    props: [
      ['bleed', 'boolean', 'false', 'Will make a box full-width on sm-size'],
      ['bordered', 'boolean', 'false', 'Adds a lovely border'],
      [
        'info',
        'boolean',
        'false',
        'Will style the box with colors for indicating that it has informative content',
      ],
      [
        'neutral',
        'boolean',
        'false',
        'Will style the box in a neutral fashion',
      ],
      [
        'role',
        'string',
        'region',
        'Sets the ARIA `role` attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (`role=""`).',
      ],
    ],
  },
  Breadcrumbs: {
    required: [],
    props: [
      [
        'aria-label',
        'string',
        'Her er du',
        'Defines a string value that labels the current element.',
      ],
    ],
  },
  Broadcast: {
    required: [[ 'api', 'string', '', 'API endpoint to fetch broadcasts from']],
    props: [
      [ 'interval', 'number', '300 000', 'Refetch interval. Default is set to 5 minutes'],
      [ 'url', 'string', 'window.location.href', 'Page (identified by its url) to check for registered broadcasts against'],
    ],
  },
  Button: {
    required: [],
    props: [
      [
        'type',
        '"button"|"submit"|"reset"',
        'button',
        'Button type, only applied when href is not set.',
      ],
      [
        'variant',
        '"primary" | "secondary" | "negative" | "utility" | "link" | "~~pill~~"',
        'secondary',
        'Variant of button. `pill` has been @deprecated.  Use `utility` together with `quiet` instead.',
      ],
      ['quiet', 'boolean', 'false', ''],
      ['small', 'boolean', 'false', ''],
      ['loading', 'boolean', 'false', ''],
      [
        'href',
        'string',
        '',
        'Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation. Should not be combined with variant `link`',
      ],
      [
        'target',
        'string',
        '',
        'Anchor target, see [The Anchor element / MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).',
      ],
      ['rel', 'string', '', 'The relationship of the linked URL.'],
      [
        'fullWidth',
        'boolean',
        '',
        "Sets the button's width to its parent's width. Useful especially on mobile when button should take full width.",
      ],
    ],
  },
  Card: {
    required: [],
    props: [
      ['selected', 'boolean', '', 'If the card is selected'],
      ['clickable', 'boolean', '', 'Applies styling to indicate click-ability'],
      ['flat', 'boolean', '', 'Removes box shadow around card'],
    ]
  },
  Expandable: {
    required: [],
    props: [
      ['expanded', 'boolean', 'false', "Controls component's expanded state"],
      [
        'bleed',
        'boolean',
        '',
        'Will make the expandable full-width on sm-size',
      ],
      ['box', 'boolean', 'false', 'Will make the expandable a Box'],
      ['animated', 'boolean', 'false', 'Will animate the expansion/collapse'],
      [
        'no-chevron',
        'boolean',
        'false',
        'Whether to hide the chevron on the button part of the component',
      ],
      [
        'title',
        'string',
        '',
        'Component title. Used to display the title value which is always present regardless of whether the component is open or closed.',
      ],
      [
        'heading-level',
        'number',
        '',
        'Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element',
      ],
      [
        'button-class',
        'string',
        '',
        'Additional CSS classes to include on the button part of the component',
      ],
      [
        'content-class',
        'string',
        '',
        'Additional CSS classes to include on the content part of the component',
      ],
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['v-model', 'boolean', '', 'Controls the expansion/collapse'],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
    ],
  },
  Modal: {
    required: [],
    props: [
      ['show', 'boolean', 'false', 'Controls if the modal should show or hide'],
      ['ignore-backdrop-clicks', 'boolean', 'false', 'Ignores clicks to the backdrop when true'],
    ],
  },
  ModalHeader: {
    required: [
      ['title', 'string', '', 'A short but descriptive title for the modal']
    ],
    props: [
      ['back', 'boolean', 'false', 'Whether the modal header should have a back button'],
      ['no-close', 'boolean', 'false', 'Whether the modal header should have a close button'],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['open-sr-label', 'string', '"Open filter"', 'Label read by screen readers when targeting the pill'],
      ['close-sr-label', 'string', '"Remove filter {label}"', 'Label read by screen readers when targeting the close button'],
      ['can-close', 'boolean', 'false', 'Whether the pill should be removable via a close button.'],
      ['suggestion', 'boolean', 'false', 'Whether the pill should be rendered as a suggestion.'],
    ],
    events: [
      ['w-pill-click', 'Event to be called when the pill is clicked.'],
      ['w-pill-close', 'Event to be called when the close button is clicked.']
    ],
  },

  Select: {
    required: [],
    props: [
      ['auto-focus', 'boolean', 'false', 'Whether the element should receive focus on render.'],
      [
        'invalid',
        'boolean',
        'false',
        'Renders the field in an invalid state. Often paired together with `hint` to provide feedback about the error.',
      ],
      ['always', 'boolean', '', 'Whether to always show hint.'],
      ['hint', 'string', '', 'The content to display as the hint.'],
      ['label', 'string', '', 'The content to display as the label.'],
      ['name', 'string', '', 'The name of the select element, used when submitting an HTML form.'],
      ['optional', 'boolean', '', 'Mark label to indicate that this input is optional.'],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        'read-only',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
    ],
  },

  TextField: {
    required: [],
    props: [
      [
        'type',
        '"number"<br />|"text"<br />|"search"<br />|"email"<br />|"password"<br />|"url"<br />|"tel"',
        '',
        'The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).',
      ],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.',
      ],
      ['help-text', 'string', '', 'The content to display as the help text.'],
      ['label', 'string', '', 'The content to display as the label.'],
      [
        'max',
        'number',
        '',
        'Standard `input` max attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).',
      ],
      [
        'min',
        'number',
        '',
        'Standard `input` min attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).',
      ],
      [
        'max-Length',
        'number',
        '',
        'The maximum number of characters supported by the input. See MDN.',
      ],
      [
        'min-Length',
        'number',
        '',
        'The minimum number of characters supported by the input. See MDN.',
      ],
      [
        'name',
        'string',
        '',
        'The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).',
      ],
      [
        'pattern',
        'string',
        '',
        'Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).',
      ],
      [
        'placeholder',
        'string',
        '',
        'Text hint that occupies the text input when it is empty.',
      ],
      [
        'readOnly',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
      [
        'required',
        'boolean',
        '',
        'Whether user input is required on the input before form submission.',
      ],
      ['value', 'string', '', 'The current value (controlled).'],
    ],
  },
  Toast: {
    required: [],
    props: [
      ['type', "'success' | 'warning' | 'error'", "'success'", 'Type of toast'],
      ['text', 'string', 'undefined', 'The toast message. Only needed when updating text on existing toast'],
      ['duration', 'number', '5000', 'Duration of toast in milliseconds. For accessibility reasons, toasts should never be interactive and therefore need to auto remove. If you must disable auto remove, set duration to Number.POSITIVE_INFINITY.'],
      ['canclose', 'boolean', 'false', 'Adds a close button. WARNING! For accessibility reasons, toasts should not be interactive and canclose should always be false. If the toast absolutely must be dismissible, set this to true.'],
    ]
  },
};

export const android = {
  Button: {
    required: [
      [
        'text', 
        'String', 
        '', 
        'The text to be displayed on the button'
      ],
      [
        'onClick',
        '() -> Unit',
        '',
        'Lambda to be invoked when clicked',
      ],
      
    ],
    props: [
      [
        'style',
        'WarpButtonStyle.Primary <br />WarpButtonStyle.Secondary <br />WarpButtonStyle.Quiet <br />WarpButtonStyle.Negative <br />WarpButtonStyle.NegativeQuiet <br />WarpButtonStyle.Utility <br />WarpButtonStyle.UtilityQuiet <br />WarpButtonStyle.UtilityOverlay',
        'WarpButtonStyle.Primary',
        'Controls the appearance of the button',
      ],
      [
        'enabled',
        'Boolean',
        'true',
        'Sets the button in disabled mode',
      ],
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the button',
      ],
      [
        'maxLines',
        'Integer',
        '1',
        'Limits the lines of the text on the button',
      ],
      [
        'loading',
        'Boolean',
        'false',
        'Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type',
      ],
      [
        'leadingIcon', 
        'Int', 
        'null', 
        'The id of the icon drawable resource to be displayed in the button before the text'
      ],
      [
        'leadingIconContentDescr', 
        'String', 
        'null', 
        'The content description of the icon'
      ],
      [
        'trailingIcon', 
        'Int', 
        'null', 
        'The id of the icon drawable resource to be displayed in the button after the text'
      ],
      [
        'trailingIconContentDescr', 
        'String', 
        'null', 
        'The content description of the icon'
      ],
    ],
  },

  TextField: {
    required: [
      [
        'value',
        'String',
        '',
        'The text displayed currently in the textfield',
      ],
      [
        'onValueChange',
        '(String) -> Unit',
        '',
        'Lambda to be invoked when input value changes',
      ],
    ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the textfield',
      ],
      [
        'label', 
        'String', 
        'null', 
        'The text to display as the label above the textfield'
      ],
      [
        'enabled',
        'Boolean',
        'true',
        'Sets the textfield in disabled mode',
      ],
      [
        'readOnly',
        'Boolean',
        'false',
        'Sets the textfield in read-only mode',
      ],
      [
        'optionalLabel', 
        'String', 
        'null', 
        'The optional text to display next to the label above the textfield'
      ],
      [
        'placeholderText',
        'String',
        'null',
        'Text hint that occupies the textfield when it is empty',
      ],
      [
        'helpText', 
        'String', 
        'null', 
        'The text to display as the help text below the textfield'
      ],
      [
        'prefixText', 
        'String', 
        'null', 
        'The text to display infront of the value inside the textfield'
      ],
      [
        'suffixText', 
        'String', 
        'null', 
        'The text to display after the value inside the textfield'
      ],
      [
        'leadingIcon',
        '@Composable () -> Unit?',
        'null',
        'Sets the composable in front of the input value',
      ],
      [
        'trailingIcon',
        '@Composable () -> Unit?',
        'null',
        'Sets the composable behind the input value',
      ],
      [
        'isError',
        'Boolean',
        'false',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error',
      ],
      [
        'visualTransformation', 
        'VisualTransformation', 
        'VisualTransformation.None', 
        'Interface used for changing visual output of the input field '
      ],
      [
        'keyboardOptions', 
        'KeyboardOptions', 
        'KeyboardOptions(capitalization = KeyboardCapitalization.Sentences)', 
        'The keyboard configuration options '
      ],
      [
        'keyboardActions', 
        'KeyboardActions', 
        'KeyboardActions.Default', 
        'The KeyboardActions that specify actions that will be triggered in response to triggering IME action on the software keyboard'
      ],
      [
        'singleLine', 
        'Boolean', 
        'true', 
        'Sets the textfield to a single line'
      ],
      [
        'maxLines', 
        'Int', 
        'Int.MAX_VALUE', 
        'Sets the maximum amount of lines allowed'
      ],
      [
        'interactionSource', 
        'MutableInteractionSource', 
        'MutableInteractionSource', 
        'MutableInteractionSource represents a stream of Interactions corresponding to events emitted by a component'
      ],
    ],
  },
  Pill: {
    required: [
    [
      'text', 
      'String', 
      '', 
      'The text to be displayed on the pill'
    ],
    [
      'onClick',
        '() -> Unit',
        '',
        'Lambda to be invoked when clicked',
    ],
  ],

    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the pill',
      ],
      [
        'style',
        'WarpPillStyle.Filter <br />WarpPillStyle.Suggestion',
        'WarpPillStyle.Filter',
        'Sets the appearance of the pill',
      ],
      [
        'selected', 
        'boolean', 
        'false', 
        'Whether the pill appears in selected mode or not'
      ],
      [
        'closable', 
        'boolean', 
        'false', 
        'Whether the pill should be removable via a close button. Will override the custom icon'
      ],
      [
        'icon', 
        'Int', 
        'null', 
        'The id of the icon drawable resource to be displayed in the pill after the text'
      ],
      [
        'iconContentDescription', 
        'String', 
        'null', 
        'The content description of the close icon. Used for accessibility purposes'
      ],
    ],
  },
  Badge: {
    required: [
    [
      'text', 
      'String', 
      '', 
      'The text to be displayed on the badge'
    ],
  ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the badge',
      ],
      [
        'style',
        'WarpBadgeStyle.Neutral <br />WarpBadgeStyle.Info <br />WarpBadgeStyle.Success <br />WarpBadgeStyle.Warning <br />WarpBadgeStyle.Error <br />WarpBadgeStyle.Disabled <br />WarpBadgeStyle.Sponsored <br />WarpBadgeStyle.Price',
        'WarpBadgeStyle.Neutral',
        'Sets the appearance of the badge',
      ],
      [
        'alignmentStyle',
        'WarpBadgeAlignment.None <br />WarpBadgeAlignment.TopStart <br />WarpBadgeAlignment.TopEnd <br />WarpBadgeAlignment.BottomStart <br />WarpBadgeAlignment.BottomEnd',
        'WarpBadgeAlignment.None',
        'Sets the alignment style for the badge',
      ],
    ],
  },
  Alert: {
    required: [
    [
      'body', 
      'String', 
      '', 
      'The body text to be displayed in the alert'
    ],
  ],
    props: [
      [
        'title', 
        'String', 
        'null', 
        'The title to be displayed in the alert'
      ],
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the alert',
      ],
      [
        'type',
        'WarpAlertType.Info <br />WarpAlertType.Positive <br />WarpAlertType.Critical <br />WarpBadgeStyle.Warning',
        'WarpAlertType.Info',
        'Sets the style and icon of the alert',
      ],
      [
        'linkText', 
        'String', 
        'null', 
        'The link text to be displayed in the alert'
      ],
      [
        'linkAction', 
        '() -> Unit', 
        'null', 
        'Lambda to be invoked when clicked'
      ],
      [
        'secondaryButtonText', 
        'String', 
        'null', 
        'The secondary button text to be displayed in the alert'
      ],
      [
        'secondaryButtonAction', 
        '() -> Unit', 
        'null', 
        'Lambda to be invoked when clicked'
      ],
      [
        'quietButtonText', 
        'String', 
        'null', 
        'The quiet button text to be displayed in the alert'
      ],
      [
        'quietButtonAction', 
        '() -> Unit', 
        'null', 
        'Lambda to be invoked when clicked'
      ],
    ],
  },
  Text: {
    required: [
    [
      'text', 
      'String | AnnotatedString', 
      '', 
      'The text to be displayed'
    ],
  ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the text',
      ],
      [
        'color', 
        'Color', 
        'WarpTheme.colors.text.default', 
        'The color of the text'
      ],
      [
        'style',
        'WarpTextStyle.Display <br />WarpTextStyle.Title1 <br />WarpTextStyle.Title2 <br />WarpTextStyle.Title3 <br />WarpTextStyle.Title4 <br />WarpTextStyle.Title5 <br />WarpTextStyle.Title6 <br />WarpTextStyle.Preamble <br />WarpTextStyle.Body <br />WarpTextStyle.BodyStrong <br />WarpTextStyle.Caption <br />WarpTextStyle.CaptionStrong <br />WarpTextStyle.Detail <br />WarpTextStyle.DetailStrong',
        'WarpTextStyle.Body',
        'Sets the appearance of the text - font and size',
      ],
      [
        'maxLines', 
        'Int', 
        'Int.MAX_VALUE', 
        'Max lines of text'
      ],
      [
        'textAlign', 
        'TextAlign', 
        'null', 
        'TextAlign controls how text aligns in the space it appears'
      ],
      [
        'overflow', 
        'TextOverflow', 
        'TextOverflow.Ellipsis', 
        'How overflowing text should be handled'
      ],
      [
        'softWrap', 
        'Boolean', 
        'true', 
        'If text should wrap or not'
      ],
      [
        'textDecoration', 
        'TextDecoration', 
        'null', 
        'Defines a horizontal line to be drawn on the text. Useful for displaying links'
      ],
    ],
  },
  Box: {
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the box',
      ],
      [
        'boxStyle',
        'WarpBoxStyle.Neutral <br />WarpBoxStyle.Info <br />WarpBoxStyle.Bordered',
        'WarpBoxStyle.Neutral',
        'Sets the style of the box',
      ],
      [
        'icon',
        '@Composable () -> Unit?',
        'null',
        'Sets the icon for the box. Please always include contentDescription text for accessibility.',
      ],
      [
        'heading', 
        'String', 
        'null', 
        'The heading to be displayed in the box'
      ],
      [
        'text', 
        'String', 
        'null', 
        'The body text to be displayed in the box'
      ],
      [
        'link', 
        'String', 
        'null', 
        'The link text to be displayed in the box'
      ],
      [
        'linkAction', 
        '() -> Unit', 
        'null', 
        'Lambda to be invoked when clicked on the link'
      ],
      [
        'buttonText', 
        'String', 
        'null', 
        'The button text to be displayed on the button in the box'
      ],
      [
        'buttonAction', 
        '() -> Unit', 
        'null', 
        'Lambda to be invoked when clicked on the button'
      ],
    ],
  },
  StepIndicator: {
    required: [
    [
      'steps', 
      'Int', 
      '', 
      'The amount of steps in the indicator'
    ],
    [
      'stepContent',
      '@Composable (Int) -> Unit',
      '',
      'The custom content between the steps. Vertical orientation only',
    ],
  ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the step indicator',
      ],
      [
        'activeStep', 
        'Int', 
        '0', 
        'The active step in the step indicator'
      ],
      [
        'onStepClicked', 
        '(Int) -> Unit', 
        'null', 
        'Lambda for the step click action, returns the integer value of the step clicked'
      ],
      [
        'stepContentDescription', 
        '@Composable (Int) -> String', 
        'null', 
        'The content description of the step. Used for accessibility purposes'
      ],
      [
        'stepTitle', 
        '(Int) -> String', 
        'null', 
        'Lambda for the step title, returns the integer value of the step'
      ],
      [
        'stepDescription', 
        '(Int) -> String', 
        'null', 
        'Lambda for the step description, returns the integer value of the step'
      ],
    ],
  },
  Modal: {
    required: [
    [
      'title', 
      'String', 
      '', 
      'The title to be displayed in the modal'
    ],
    [
      'body', 
      'String', 
      '', 
      'The text to be displayed in the modal'
    ],
    [
      'onDismiss', 
      '() -> Unit', 
      '', 
      'The lambda to be invoked when closing the modal'
    ],
  ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the modal Card',
      ],
      [
        'subtitle', 
        'String', 
        'null', 
        'The subtitle to be displayed in the modal'
      ],
      [
        'primaryButtonText', 
        'String', 
        'null', 
        'The text to be displayed on the positive button.'
      ],
      [
        'onPrimaryButtonClick', 
        '() -> Unit', 
        'null', 
        'The lambda to be invoked on the positive button click.'
      ],
      [
        'secondaryButtonText', 
        'String', 
        'null', 
        'The text to be displayed on the negative button.'
      ],
      [
        'onSecondaryButtonClick', 
        '() -> Unit', 
        'null', 
        'The lambda to be invoked on the positive button click.'
      ],
      [
        'showCloseIcon', 
        'Boolean', 
        'false', 
        'Whether the close icon (X) should be displayed in the top right corner.'
      ],
      [
        'closeIconContentDescription', 
        'String', 
        'null', 
        'The text to be used by accessibility tools.'
      ],
      [
        'dismissOnClickOutside', 
        'Boolean', 
        'true', 
        'Whether the modal should be closed when clicking outside of its layout.'
      ],
      [
        'dismissOnBackPress', 
        'Boolean', 
        'true', 
        'Whether the modal should be closed when pressing back.'
      ],
    ],
  },
  Checkbox: {
    required: [
    [
      'text', 
      'String', 
      '', 
      'The text to be displayed next to the checkbox'
    ],
  ],

    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the checkbox',
      ],
      [
        'onCheckedChange',
          '(Boolean) -> Unit',
          '',
          'Lambda to be invoked when checked or unchecked',
      ],
      [
        'style',
        'WarpCheckboxStyle.Neutral <br />WarpCheckboxStyle.Disabled <br />WarpCheckboxStyle.Neutral',
        'WarpCheckboxStyle.Neutral',
        'Sets the appearance of the checkbox',
      ],
      [
        'enabled', 
        'boolean', 
        'true', 
        'Whether the checkbox is enabled or not'
      ],
      [
        'checked', 
        'boolean', 
        'false', 
        'Whether the checkbox is checked or not'
      ],
    ],
  },
  CheckboxGroup: {
    required: [
      [
        'options',
        'List<String>',
        '',
        'The list of texts to be displayed next to the checkboxes'
      ],
      [
        'onOptionsSelected',
        '(MutableList<String>) -> Unit',
        '',
        'The lambda to be invoked when clicked on a checkbox.'
      ],
    ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the checkbox group',
      ],
      [
        'orientation',
        'Orientation.Vertical <br /> Orientation.Horizontal',
        'Orientation.Vertical',
        'Sets the orientation for the checkbox group. Class is found in the androidx.compose.foundation.gestures package',
      ],
      [
        'title',
        'String',
        'null',
        'The title to be displayed on top of the checkbox group'
      ],
      [
        'selectedOptions',
        'List<String>',
        'null',
        'The selected options in the checkbox group'
      ],
      [
        'helpText',
        'String',
        'null',
        'The text displayed below the checkbox group'
      ],
      [
        'enabled',
        'boolean',
        'true',
        'Whether the checkbox group is enabled or not'
      ],
      [
        'isError',
        'boolean',
        'false',
        'Shows the checkbox group in error state if true'
      ],
    ],
  },
  Switch: {
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the switch',
      ],
      [
        'onCheckedChange',
          '(Boolean) -> Unit',
          '',
          'Lambda to be invoked when checked or unchecked',
      ],
      [
        'enabled',
        'boolean',
        'true',
        'Whether the switch is enabled or not'
      ],
      [
        'checked',
        'boolean',
        'false',
        'Whether the switch is on or off'
      ],
    ],
  },
  Radio: {
    required: [
      [
        'label',
        'String',
        '',
        'The text to be displayed next to the radio'
      ]
    ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the radio',
      ],
      [
        'selected',
        'boolean',
        'false',
        'Whether the radio is selected or not'
      ],
      [
        'isError',
        'boolean',
        'false',
        'Shows the radio in error state if true'
      ],
      [
        'enabled',
        'boolean',
        'true',
        'Whether the radio is enabled or not'
      ],
      [
        'extraText',
        'String?',
        'null',
        'The optional text to be displayed next to the label'
      ],
      [
        'slot',
        '@Composable (() -> Uni)?',
        'null',
        'The composable that will be displayed next to the label or extraText if provided'
      ],
      [
        'onClick',
        '() -> Unit',
        'null',
        'The lambda to be invoked when clicked.'
      ],
      [
        'interactionSource',
        'MutableInteractionSource',
        'MutableInteractionSource',
        'MutableInteractionSource represents a stream of Interactions corresponding to events emitted by a component'
      ],
    ],
  },
  RadioGroup: {
    required: [
      [
        'options',
        'List<String>',
        '',
        'The list of texts to be displayed next to the radio buttons'
      ],
      [
        'onOptionSelected',
        '(String) -> Unit',
        '',
        'The lambda to be invoked when clicked on a radio.'
      ],
    ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the radio group',
      ],
      [
        'orientation',
        'Orientation.Vertical <br /> Orientation.Horizontal',
        'Orientation.Vertical',
        'Sets the orientation for the radio group. Class is found in the androidx.compose.foundation.gestures package',
      ],
      [
        'title',
        'String',
        'null',
        'The title to be displayed on top of the radio group'
      ],
      [
        'selectedOption',
        'String',
        'null',
        'The selected option in the radio group'
      ],
      [
        'helpText',
        'String',
        'null',
        'The text displayed below the radio group'
      ],
      [
        'enabled',
        'boolean',
        'true',
        'Whether the radio group is enabled or not'
      ],
      [
        'isError',
        'boolean',
        'false',
        'Shows the radio group in error state if true'
      ],
    ],
  },
  Spinner: {
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the spinner',
      ],
      [
        'size',
        'WarpSpinnerSize.Small <br />WarpSpinnerSize.Default <br />WarpSpinnerSize.Large',
        'WarpSpinnerSize.Default',
        'Size of the spinner'
      ],
    ]
  },
  Callout: {
    required: [
      [
        'title', 
        'String', 
        '', 
        'The text to be displayed in the callout'
      ],
      [
        'state', 
        'CalloutState', 
        '', 
        'The state of the callout. If visible or not'
      ],
      [
        'onDismiss', 
        '() -> Unit', 
        '', 
        'The lambda to be invoked when dismissed'
      ],
    ],
    props: [
      [
        'size',
        'CalloutSize.Default <br /> CalloutSize.Small',
        'CalloutSize.Default',
        'Size of the callout',
      ],
      [
        'type',
        'CalloutSize.Popover <br /> CalloutSize.Inline',
        'CalloutSize.Popover',
        'Type of the callout',
      ],
      [
        'inlineModifier',
        'Modifier',
        'Modifier',
        'Modifier only used for the Inline callout type',
      ],
      [
        'horizontalOffset',
        'Dp',
        '0.dp',
        'Horizontal offset used only for the Popover type callout',
      ],
      [
        'verticalOffset',
        'Dp',
        '0.dp',
        'Vertical offset used only for the Popover type callout',
      ],
      [
        'edge',
        'Edge.Top <br /> Edge.Bottom <br /> Edge.Leading <br /> Edge.Trailing',
        'Edge.Top',
        'Edge that determines the direction of the arrow',
      ],
      [
        'closable',
        'Boolean',
        'false',
        'If should show the close icon',
      ],
      [
        'anchorView', 
        '@Composable () -> Unit', 
        'null', 
        'The anchor which the callout points to'
      ],
    ]
  },
};

export const iOS = {
  Button: {
    required: [
      [
        'title',
        'String',
        '',
        'The text to be displayed on the button'
      ],
      [
        'action',
        '() -> Void',
        '',
        'Action to be invoked when clicked',
      ],
      [
        'buttonType',
        'Warp.ButtonType.primary <br />Warp.ButtonType.secondary <br />Warp.ButtonType.tertiary <br />Warp.ButtonType.critical <br />Warp.ButtonType.criticalTertiary <br />Warp.ButtonType.utility <br />Warp.ButtonType.utilityTertiary <br />Warp.ButtonType.utilityOverlay',
        '',
        'Controls the appearance of the button',
      ]
    ],
    props: [
      [
        'leadingIcon',
        'Image?',
        'nil',
        'Sets the button image leading the title',
      ],
      [
        'trailingIcon',
        'Image?',
        'nil',
        'Sets the button image trailing the title',
      ],
      [
        'size',
        'Warp.ButtonSize.big <br />Warp.ButtonSize.small',
        'Warp.ButtonSize.big',
        'Sets the size of button',
      ],
      [
        'isEnabled',
        'Bool',
        'true',
        'Sets the button in disabled mode',
      ],
      [
        'fullWidth',
        'Bool',
        'false',
        'Change the width behaviour of the button',
      ],
    ],
  },

  TextField: {
    required: [
      [
        'text',
        'String',
        '',
        'The text displayed currently in the textfield',
      ],
      [
        'state',
        'Binding<Warp.TextFieldState.normal> <br />Binding<Warp.TextFieldState.active> <br />Binding<Warp.TextFieldState.disabled> <br />Binding<Warp.TextFieldState.error> <br />Binding<Warp.TextFieldState.readOnly>',
        '',
        'The state the TextField is in',
      ],
    ],
    props: [
      [
        'placeholder',
        'String',
        'empty',
        'Text hint that occupies the textfield when it is empty',
      ],
      [
        'title',
        'String?',
        'nil',
        'The title to display above the textfield',
      ],
      [
        'additionalInformation',
        'String?',
        'nil',
        'Additional information to display above the textfield',
      ],
      [
        'infoToolTipView',
        'AnyView?',
        'nil',
        'The view to display when additionalInformation is tapped',
      ],
      [
        'leftView',
        'AnyView?',
        'nil',
        'The view on the left side of the textfield',
      ],
      [
        'rightView',
        'AnyView?',
        'nil',
        'The view on the right side of the textfield',
      ],
      [
        'errorMessage',
        'String?',
        'nil',
        'The error message to show when in Warp.TextFieldState.error',
      ],
      [
        'helpMessage',
        'String?',
        'nil',
        'The content to display as the help text below the textfield',
      ],
      [
        'isAnimated',
        'Bool',
        'true',
        'If the changes support animation',
      ],
    ],
  },
  Badge: {
    required: [
    [
      'text', 
      'String', 
      '', 
      'The text to be displayed on the badge'
    ],
    [
      'variant',
      'Warp.Badge.Variant.info <br />Warp.Badge.Variant.success <br />Warp.Badge.Variant.warning <br />Warp.Badge.Variant.error <br />Warp.Badge.Variant.disabled <br />Warp.Badge.Variant.sponsored <br />Warp.Badge.Variant.neutral',
      '',
      'Sets the appearance of the badge',
    ],
  ],
    props: [
      [
        'position',
        'Warp.Badge.Position.default <br />Warp.Badge.Position.topLeft <br />Warp.Badge.Position.topRight <br />Warp.Badge.Position.bottomLeft <br />Warp.Badge.Position.bottomRight',
        'Warp.Badge.Position.default',
        'Sets the corners that need radius',
      ],
    ],
  },
  Alert: {
    required: [
    [
      'style',
      'Warp.AlertStyle.info <br />Warp.AlertStyle.warning <br />Warp.AlertStyle.critical <br />Warp.AlertStyle.success',
      '',
      'Sets the style and icon of the alert',
    ],
    [
      'title', 
      'String', 
      '', 
      'The title to be displayed in the alert'
    ],
    [
      'subtitle', 
      'String', 
      '', 
      'The subtitle text to be displayed in the alert'
    ],
  ],
    props: [
      [
        'link', 
        '(title: String, action: () -> Void)?', 
        'nil', 
        'The link text and action in the alert'
      ],
      [
        'primaryButton', 
        '(title: String, action: () -> Void)?', 
        'nil', 
        'The primary button text and action in the alert'
      ],
      [
        'secondaryButton', 
        '(title: String, action: () -> Void)?', 
        'nil', 
        'The secondary button text and action in the alert'
      ],
    ],
  },
  Toast: {
    required: [
    [
      'style',
      'Warp.ToastStyle.error <br />Warp.ToastStyle.success <br />Warp.ToastStyle.warning',
      '',
      'Sets the style and icon of the toast',
    ],
    [
      'title', 
      'String', 
      '', 
      'The title to be displayed in the toast'
    ],
    [
      'toastEdge', 
      'Warp.ToastEdge.top <br />Warp.ToastEdge.bottom',
      '', 
      'The position of the toast to be displayed'
    ],
    [
      'isPresented', 
      'Binding Bool', 
      '', 
      'The binding to control the visibility'
    ],
  ],
    props: [
    ],
  },
  Pill: {
    required: [
    [
      'text',
      'String', 
      '',
      'The text to be displayed on the pill',
    ],
    [
      'onTap', 
      '() -> Void',
      '{}', 
      'The action that will trigger on pill tap'
    ],
    [
      'style', 
      'Warp.PillStyle.filter <br />Warp.PillStyle.suggestion ',
      '.filter', 
      'The style of the pill'
    ],
  ],
    props: [
      [
        'icon', 
        'Image?',
        'nil', 
        'Pill icon. If you provide onClose then the Pill will have a close button instead of this icon.'
      ],
      [
        'onClose', 
        '(() -> Void)?',
        'nil', 
        'If added will show a close button and replace any provided icon, and the action will trigger on pill close.'
      ],
      [
        'iconContentDescription', 
        'String?',
        'nil', 
        'The a11y text for the icon'
      ],
    ],
  },
  Text: {
    required: [
    [
      'text', 
      'String', 
      '', 
      'The text to be displayed'
    ],
    [
      'style', 
      'Warp.TextStyle.display <br />Warp.TextStyle.title1 <br />Warp.TextStyle.title2 <br />Warp.TextStyle.title3 <br />Warp.TextStyle.title4 <br />Warp.TextStyle.title5 <br />Warp.TextStyle.title6 <br />Warp.TextStyle.preamble <br />Warp.TextStyle.body <br />Warp.TextStyle.bodyStrong <br />Warp.TextStyle.caption <br />Warp.TextStyle.captionStrong <br />Warp.TextStyle.detail <br />Warp.TextStyle.detailStrong',
      '', 
      'Sets the appearance of the text - font and size',
    ],
  ],
    props: [  
    ],
  },
  Callout: {
    required: [
    [
      'size', 
      'Warp.CalloutSize.default <br />Warp.CalloutSize.small',
      'Warp.CalloutSize.default', 
      'The size of the Callout'
    ],
    [
      'type', 
      'Warp.CalloutType.inline <br />Warp.CalloutType.popover',
      'Warp.CalloutType.inline', 
      'The type of the Callout, popover accepts a onClose action'
    ],
    [
      'title', 
      'String', 
      '', 
      'The text to be displayed'
    ],
    [
      'arrowEdge', 
      'Edge.top <br />Edge.leading <br />Edge.bottom <br />Edge.trailing ',
      'Edge.top', 
      'The direction of the arrow'
    ],
  ],
    props: [  
    ],
  },
  Tooltip: {
    required: [
      [
        'title', 
        'String', 
        '', 
        'The text to be displayed'
      ],
    ],
    props: [
      [
        'arrowEdge', 
        'Edge.top <br />Edge.leading <br />Edge.bottom <br />Edge.trailing ',
        'Edge.top', 
        'The direction of the arrow'
      ],  
    ],
  },
  Box: {
    required: [
    [
      'style', 
      'Warp.BoxStyle.neutral <br />Warp.BoxStyle.info <br />Warp.BoxStyle.bordered',
      '', 
      'Preferred style of box.'
    ],
    [
      'subtitle', 
      'String',
      '', 
      'Text that will be shown after title in the middle of the box.'
    ],
  ],
    props: [
      [
        'title', 
        'String?', 
        '', 
        'Text that will be shown as box heading. <br />If there is no title the icon would be hidden too.'
      ],
      [
        'shouldShowToolTipImage', 
        'Bool',
        'true', 
        'Flag indicating tooltip image should be shown.'
      ],
      [
        'link', 
        '(title: String, action: () -> Void)?', 
        'nil', 
        'Tuple that will provide a title and an action for creating a link view below subtitle. <br />Passing `nil` will skip adding link view.'
      ],
      [
        'button', 
        '(title: String, action: () -> Void)?', 
        'nil', 
        'Tuple that will provide a title and an action for creating a button view below link. <br />Passing `nil` will skip adding button view.'
      ],
    ],
  },
  Broadcast: {
    required: [
    [
      'text', 
      'String',
      '', 
      'Text that will be shown in the broadcast'
    ],
    [
      'broadcastEdge', 
      'Warp.BroadcastEdge.top <br />Warp.BroadcastEdge.bottom',
      '', 
      'Edge from where the broadcast is presented'
    ],
    [
      'isPresented', 
      'Binding Bool', 
      '', 
      'Binding to a boolean value that allows the broadcast to control dismissal'
    ],
  ],
    props: [  
    ],
  },
  Spinner: {
    required: [
    [
      'size', 
      'Warp.SpinnerSize.small <br />Warp.SpinnerSize.default <br />Warp.SpinnerSize.large <br />Warp.SpinnerSize.custom',
      'Warp.SpinnerSize.default', 
      'Size of the spinner'
    ],
    [
      'duration', 
      'CGFloat',
      '1', 
      'Duration of Spinner animation'
    ],
    [
      'lineWidth', 
      'CGFloat', 
      '3', 
      'The thickness of Spinner'
    ],
  ],
    props: [  
    ],
  },
  Modal: {
    required: [
    [
      'title', 
      'String',
      '', 
      'The main title text to be displayed.'
    ],
    [
      'bodyText', 
      'String',
      '', 
      'The main body text content of the component.'
    ],
    [
      'isPresented', 
      'Binding Bool', 
      '', 
      'A binding to a Boolean value that controls the visibility of the component.'
    ],
  ],
    props: [
      [
        'subtitle', 
        'String?', 
        'nil', 
        'An optional subtitle text to provide additional context or information.'
      ],
      [
        'primaryButton', 
        '(title: String, action: () -> Void)?',
        'nil', 
        'An optional primary button constructor for defining the primary action.'
      ],
      [
        'secondaryButton', 
        '(title: String, action: () -> Void)?',  
        'nil', 
        'An optional secondary button constructor for defining a secondary action.'
      ],
      [
        'hasCloseButton', 
        'Bool', 
        'false', 
        'A Boolean value indicating whether a close button should be shown.'
      ],
      [
        'onDismiss', 
        '(() -> Void)?', 
        'nil', 
        'Action to be executed when the Modal is dismissed, either by pressing the Close button or by clicking outside the Modal.'
      ]  
    ],
  },
  StepIndicator: {
    required: [
    [
      'stepModel', 
      'Warp.StepIndicatorModel',
      '', 
      'An array of Warp.StepIndicatorItems wich contains title, description and progress of the steps, progress can be incomplete, inProgress, complete.'
    ]
  ],
    props: [  
      [
        'layoutOrientation', 
        'LayoutOrientation.vertical <br />LayoutOrientation.horizontal',
        '.vertical', 
        'The orientation of the step indicator'
      ]
    ],
  },
  Expandable: {
    required: [
      [
        'style', 
        'Warp.ExpandableStyle.default <br />Warp.ExpandableStyle.box <br />Warp.ExpandableStyle.boxBleed',
        '', 
        'The style of the Expandable'
      ],
      [
        'title', 
        'String',
        '', 
        'The title for the top sticky part of the Expandable'
      ],
      [
        'expandableView', 
        'View',
        '', 
        'The view for the bottom hidden part of the Expandable. Either this or subtitle needs to be provided.'
      ],
      [
        'subtitle', 
        'String',
        '', 
        'The subtitle for the bottom hidden part of the Expandable. Either this or expandableView needs to be provided.'
      ],
      [
        'isAnimated', 
        'Bool',
        'true', 
        'Determines if the Expandable will expand and collapse with animation'
      ],
      [
        'isExpanded', 
        'Bool',
        'false', 
        'The initial state of the Expandable'
      ],
    ],
    props: [  
    ],
  },
};
