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
    events: [['onClick', '() => void', '', 'Click handler paired with clear or search']],
  },
  Alert: {
    required: [['type', "'negative' | 'positive' | 'warning' | 'info'", 'undefined', 'Type of Alert']],
    props: [
      ['show', 'boolean', 'undefined', 'Controls when the alert shows'],
      ['role', 'string', 'alert', 'ARIA live region "role" attribute value'],
      ['className', 'string', 'undefined', 'Additional classes to include'],
      ['style', 'string', 'undefined', 'Additional CSS styles for the container'],
    ],
  },
  AlertBeta: {
    required: [
      ['type', "'negative' | 'positive' | 'warning' | 'info'", 'undefined', 'Type of Alert'],
      ['children', 'React.ReactNode', 'undefined', 'Content to render inside the alert'],
    ],
    props: [
      ['show', 'boolean', 'undefined', 'Controls when the alert shows'],
      ['role', 'string', 'alert', 'ARIA live region "role" attribute value'],
      ['className', 'string', 'undefined', 'Additional classes to include'],
      ['style', 'React.CSSProperties', 'undefined', 'Additional CSS styles for the container'],
      [
        'id',
        'string',
        'undefined',
        'Used to uniquely identify the alert — for ARIA attributes or other DOM interactions',
      ],
    ],
  },
  Badge: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored'",
        "'neutral'",
        '',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        'undefined',
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
      ['info', 'boolean', 'false', 'Will style the box with colors for indicating that it has informative content'],
      ['neutral', 'boolean', 'false', 'Will style the box in a neutral fashion'],
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
      ['aria-label', 'string', 'Her er du', 'Defines a string value that labels the affix element.'],
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
    ],
  },
  Button: {
    required: [],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      ['type', '"button"|"submit"|"reset"', 'button', 'Button type, only applied when href is not set.'],
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
      ['quiet', 'boolean', 'false', 'Quieten down the button, can be combined with other button types.'],
      ['small', 'boolean', 'false', 'Set the button to be a small size, can be combined with other button types.'],
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
  ButtonBeta: {
    required: [['children', 'ReactNode', '', 'The contents of the Button']],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      ['type', '"button"|"submit"|"reset"', 'button', 'Button type, only applied when href is not set.'],
      [
        'variant',
        "'primary' | 'secondary' | 'negative' | 'utility' | 'overlay' | 'overlayInverted' |'quiet'| 'negativeQuiet' | 'utilityQuiet'| 'overlayQuiet' | 'overlayInvertedQuiet' | 'link'",
        '',
        'Set the correct variant on the button.',
      ],
      ['size', "'small' | 'default'", 'default', 'Set the button to be either small or default size.'],
      [
        'loading',
        'boolean',
        'false',
        'Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.',
      ],
      [
        'fullWidth',
        'boolean',
        'false',
        "Sets the button's width to its parent's width. Useful especially on mobile when button should take full width.",
      ],
      ['hasIconOnly', 'boolean', '', 'Facilitate a round button for icon.'],
    ],
  },
  Callout: {
    required: [
      [
        'targetEl',
        'MutableRefObject<unknown>',
        '',
        'The reference container to which the Attention component is positioned relative to. Required if `highlight` but optional if `callout`.',
      ],
    ],
    props: [
      ['isShowing', 'boolean', 'false', 'Whether Attention component is shown.'],
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. The arrow will point to the opposite side of this position',
      ],
      ['children', 'Element | Element[]', '', 'Elements inside of the Attention component'],
      ['className', 'string', '', 'Extend the Attention component container styling'],
      [
        'callout',
        'boolean',
        'false',
        'Whether Attention component is rendered as a callout, displayed inline within content.',
      ],
      [
        'highlight',
        'boolean',
        'false',
        'Whether Attention component is rendered as a highlight, elevated above content with shadow.',
      ],
      [
        'role',
        'string',
        'img',
        'Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`). Default role is set to `img`.',
      ],
      [
        'aria-label',
        'string',
        '',
        'Allows the user to override the default aria-label attribute for the Attention component',
      ],
      ['noArrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['canClose', 'boolean', 'false', 'Whether a close button is shown'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally.',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'crossAxis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallbackPlacements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      [
        'onDismiss',
        '() => void',
        '',
        'Called when user clicks the close button or presses Escape when the button is in focus.',
      ],
    ],
  },
  Card: {
    required: [['children', 'Element<br />|Element[]', '', 'The contents of the Card']],
    props: [
      ['className', 'string', '', 'Add your own custom styles to the container element'],
      ['as', 'string<br />|Component', 'div', 'The wrapping container element'],
      ['selected', 'boolean', '', 'If the card is selected'],
      ['flat', 'boolean', '', 'Removes box shadow around card'],
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
      [
        'matchTextSegments',
        'boolean',
        'false',
        'Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override `[data-combobox-text-match]`. This uses the default matching algorithm. Use the `highlightValueMatch` to pass your own matching function.',
      ],
      ['disableStaticFiltering', 'boolean', 'false', 'Disable client-side static filtering'],
      [
        'highlightValueMatch',
        '(optionValue: string, inputValue: string) => ReactNode',
        '',
        'Pass your own function for highlight matching',
      ],
      [
        'invalid',
        'boolean',
        '',
        'Renders the input field in an invalid state. Often paired together with `helpText` to provide feedback about the error',
      ],
      ['helpText', 'ReactNode', '', 'The content to display as the help text'],
      ['className', 'string', '', 'Additional container styling'],
      ['listClassName', 'string', '', 'Additional list styling'],
      [
        'aria-label',
        'number',
        '',
        'Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined. Defines a string value that labels the current element. @see aria-labelledby.',
      ],
      [
        'aria-labelledby',
        'string',
        '',
        'Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined. Identifies the element (or elements) that labels the current element.',
      ],
      ['children', 'ReactNode', '', 'For Affix use'],
      ['optional', 'boolean', '', 'Mark label to indicate that this combobox is optional.'],
    ],
    events: [
      [
        'onSelect',
        '((value: string) => void) & ReactEventHandler<HTMLInputElement>',
        '',
        'Called when the user selects an option',
      ],
      ['onFocus', '(() => void) & FocusEventHandler<HTMLInputElement>', '', 'Called when the input is focus'],
      [
        'onBlur',
        '((value: string) => void) & FocusEventHandler<HTMLInputElement>',
        '',
        'Called when the input loses focus with the current navigation value or input value',
      ],
    ],
  },
  DatePicker: {
    required: [
      ['label', 'string', '', 'Label shown on the input of the datepicker.'],
      [
        'onChange',
        '(day: string) => void',
        '',
        'Called with the date when the user makes a selection from the calendar or a changes the input.',
      ],
    ],
    props: [
      ['value', 'string', '', 'The current selected date.'],
      [
        'isDayDisabled',
        '(day: Date) => boolean',
        'noop',
        'Called with the day of an entry in the calendar to determine if the day is disabled.',
      ],
      [
        'locale',
        'Locale',
        'Norwegian locale',
        'A date-fns locale object. This enables internationalization in the datepicker such as date formatting and which day a week starts on. See [date fns documentation](https://date-fns.org/).',
      ],
      ['phrases', 'Phrases', '', 'An object of translation strings used by the datepicker for accessibility.'],
      [
        'displayFormat',
        'string',
        '',
        'A date-fns format string for the input. See [date fns documentation](https://date-fns.org/).',
      ],
      [
        'monthFormat',
        'string',
        '',
        'A date-fns format string for the month. See [date fns documentation](https://date-fns.org/).',
      ],
      [
        'weekDayFormat',
        'string',
        '',
        'A date-fns format string for the weekday. See [date fns documentation](https://date-fns.org/).',
      ],
      [
        'dayAriaLabelFormat',
        'string',
        '',
        'A date-fns format string for a day. Used for screen readers together with `phrases`. See [date fns documentation](https://date-fns.org/).',
      ],
    ],
    events: [],
  },
  DeadToggle: {
    required: [],
    props: [
      ['radio', 'boolean', '', 'Passes radio type to the underlying toggle'],
      ['checkbox', 'boolean', '', 'Passes checkbox type to the underlying toggle'],
      ['value', 'string', '', 'Value for the input'],
      ['checked', 'boolean', '', 'Whether the toggle is checked'],
      ['className', 'string', '', 'Additional classnames to the toggle wrapper'],
      ['labelClassName', 'string', '', 'Additional classnames to the toggle label'],
    ],
  },
  Expandable: {
    required: [['title', 'string', '', 'The title for the expandable']],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      ['expanded', 'boolean', 'false', 'The state of the component, either true for expanded or false for closed'],
      ['bleed', 'boolean', '', 'Will make the expandable full-width on sm-size'],
      ['box', 'boolean', '', 'Will make the expandable a Box'],
      ['buttonClass', 'string', '', 'Additional CSS classes to include on the button part of the component'],
      ['contentClass', 'string', '', 'Additional CSS classes to include on the content part of the component'],
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
  Icon: {
    required: [
      ['name', 'string', '', 'The name of the icon to render'],
      [
        'size',
        "'small' | 'medium' | 'large' | 'xypx' ",
        'medium',
        'The size of the icon: `small`, `medium`, `large`, or a custom size in pixels like `32px`.',
      ],
      ['locale', 'string', '', 'The locale to use for the icon, e.g. "nb" for Norwegian Bokmål'],
    ],
  },
  Link: {
    required: [['children', 'ReactNode', '', 'The contents of the Link']],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      [
        'onClick',
        '(event: MouseEvent<HTMLAnchorElement>) => void',
        '',
        'Handler that is called when the link is clicked.',
      ],
      ['button', 'boolean', 'false', 'Set the link to look like a button.'],
      [
        'variant',
        "'primary' | 'secondary' | 'negative' | 'utility' | 'overlay' | 'overlayInverted' |'quiet'| 'negativeQuiet' | 'utilityQuiet'| 'overlayQuiet' | 'overlayInvertedQuiet' | 'link'",
        '',
        'Set the correct variant on the link.',
      ],
      ['size', "'small' | 'default'", 'default', 'Set the link to be either small or default size.'],
      [
        'fullWidth',
        'boolean',
        'false',
        "Sets the links width to its parent's width. Useful especially on mobile when link should take full width.",
      ],
      ['href', 'string', '', 'Set the href for the location where clicking the link will take you to.'],
      [
        'target',
        'string',
        '',
        'Anchor target, see [The Anchor element / MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).',
      ],
      ['rel', 'string', '', 'The relationship of the linked URL.'],
    ],
  },
  Modal: {
    required: [
      ['children', 'Element<br />|Element[]', '', 'The modal contents'],
      ['open', 'boolean', '', 'Whether the modal is open or not'],
    ],
    props: [
      ['title', 'string<br />|Element<br />|Element[]', '', 'A string or your own custom elements'],
      [
        'left',
        'boolean<br />|Element<br />|Element[]',
        '',
        'Whether a default back button should render with an onDismiss() callback. It can also be your own custom element(s).',
      ],
      ['right', 'boolean<br />|Element<br />|Element[]', '', 'A default close button or your own custom elements'],
      ['footer', 'Element<br />|Element[]', '', 'Buttons passed to the footer'],
      ['className', 'string', '', 'Additional classes added to the container'],
      [
        'id',
        'string',
        '',
        'An id for the container and ARIA attributes. A random id is generated if none is provided.',
      ],
      [
        'style',
        'CSSProperties',
        '',
        'Additional styles to the container. [More info about CSSProperties](https://legacy.reactjs.org/docs/dom-elements.html#style)',
      ],
      [
        'aria-label',
        'number',
        '',
        'Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,',
      ],
      [
        'aria-labelledby',
        'string',
        '',
        'Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.',
      ],
      [
        'initialFocusRef',
        'RefObject<any>',
        '',
        `A reference to the element that should be focused. By default it'll be the first interactive element. [More info](https://react.dev/learn/manipulating-the-dom-with-refs)`,
      ],
    ],
    events: [
      ['onDismiss', '() => void', '', 'Handler that is called when the user presses esc or clicks outside the modal.'],
      [
        'onLeftClick',
        '() => void',
        '',
        'Handler that is called when the user clicks the default back button. Requires the `left` prop to be `true`.',
      ],
    ],
  },
  PageIndicator: {
    required: [
      ['pageCount', 'number', '', 'The total number of pages.'],
      ['selectedPage', 'number', '', 'Currently selected page.'],
    ],
    props: [['style', 'CSSProperties', '', 'CSS styles to inline on the component container.']],
  },
  Pagination: {
    required: [
      ['createHref', '(page: number) => string', '', 'Function that returns the href for a given page'],
      [
        'currentPage',
        'number',
        '',
        'The current page number. Adjusted so its never below `1`, and never above `lastPage`.',
      ],
      ['lastPage', 'number', '', 'The number of the last page.'],
    ],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component container.'],
      [
        'onChange',
        '(page: number) => void',
        '',
        'Handler that is called with the page number to navigate to. `event.preventDefault` is called for you. Fallbacks to default browser behavior if undefined.',
      ],
      ['numPages', 'number', '', 'The number of pages to show in the pagination.'],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['label', 'string', 'undefined', 'The text content of the pill.'],
      [
        '~~icon~~',
        'ReactNode',
        'undefined',
        'Used to render an icon inside the pill. You can pass any valid HTML. This will override the label property. @deprecated Do not use.',
      ],
      ['canClose', 'boolean', 'false', 'Whether the pill should be removable via a close button.'],
      ['openSRLabel', 'string', '"Open filter"', 'Label read by screen readers when targeting the pill.'],
      [
        'closeSRLabel',
        'string',
        '"Remove filter {label}"',
        'Label read by screen readers when targeting the close button.',
      ],
      ['suggestion', 'boolean', 'false', 'Whether the pill should be rendered as a suggestion.'],
      [
        'className',
        'string',
        'undefined',
        'Additional classes applied to the button element of the pill as long as canClose is set to false.',
      ],
    ],
    events: [
      ['onClick', 'Action to be called when the pill is clicked.'],
      ['onClose', 'Action to be called when the close button is clicked.'],
    ],
  },
  Popover: {
    required: [
      [
        'targetEl',
        'MutableRefObject<unknown>',
        '',
        'The reference container to which the Attention component is positioned relative to.',
      ],
    ],
    props: [
      ['isShowing', 'boolean', 'false', 'Whether Attention component is shown.'],
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. The arrow will point to the opposite side of this position',
      ],
      ['children', 'Element | Element[]', '', 'Elements inside of the Attention component'],
      ['className', 'string', '', 'Extend the Attention component container styling'],
      ['popover', 'boolean', 'false', 'Whether Attention component is rendered as a popover'],
      [
        'role',
        'string',
        'img',
        'Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`). Default role is set to `img`.',
      ],
      [
        'aria-label',
        'string',
        '',
        'Allows the user to override the default aria-label attribute for the Attention component',
      ],
      ['noArrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['canClose', 'boolean', 'false', 'Whether a close button is shown'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally.',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'crossAxis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallbackPlacements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      [
        'onDismiss',
        '() => void',
        '',
        'Called when user clicks the close button or presses Escape when the button is in focus.',
      ],
    ],
  },
  RangeSlider: {
    required: [
      ['label', 'ReactNode', '', 'Label for the range slider'],
      ['value', '[number, number]', '', 'The current values'],
    ],
    props: [
      ['max', 'number', '100', 'The greatest value in the range of permitted values'],
      ['min', 'number', '0', 'The lowest value in the range of permitted values'],
      ['step', 'number', '1', 'Specifies the value granularity'],
      ['showMarks', 'boolean', 'true', 'Whether to show marks on the slider'],
      ['disabled', 'boolean', 'false', 'Whether the slider is disabled'],
      ['className', 'string', '', 'Additional classes to include for the container'],
      ['aria-label', '[string, string]', '', 'String value for aria-label'],
      ['aria-labelledby', '[string, string]', '', 'Identifies the element that labels the slider'],
      ['aria-valuetext', '[string, string]', '', 'Human readable text alternative for the value'],
    ],
    events: [
      [
        'onChange',
        '(value: [number, number]) => void',
        '',
        'Handler that is called when the value of the slider has settled.',
      ],
      [
        'onInput',
        '(value: [number, number]) => void',
        '',
        'Handler that is called every time the value of the slider changes.',
      ],
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
      ['defaultValue', 'string & (string|number|readonly string[])', '', 'The default value (uncontrolled).'],
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
      ['readOnly', 'boolean', '', 'Whether the input can be selected but not changed by the user.'],
      ['required', 'boolean', '', 'Whether user input is required on the input before form submission.'],
      ['children', 'ReactNode', '', 'The `option` elements to populate the select with.'],
      ['className', 'string', '', 'Additional classes to include.'],
      ['style', 'CSSProperties', '', 'Additional CSS styles for the container.'],
      ['autoFocus', 'boolean', '', 'Whether the element should receive focus on render.'],
    ],
  },
  Slider: {
    required: [
      ['step', 'number', '', 'Specifies the value granularity'],
      ['value', 'number', '', 'The current value'],
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
      ['onChange', '(value: number) => void', '', 'Handler that is called when the value of the slider changes'],
    ],
  },
  SliderBeta: {
    required: [
      ['label', 'ReactNode', '', 'Label for the slider'],
      ['value', 'number', '', 'The current value'],
    ],
    props: [
      ['max', 'number', '100', 'The greatest value in the range of permitted values'],
      ['min', 'number', '0', 'The lowest value in the range of permitted values'],
      ['step', 'number', '1', 'Specifies the value granularity'],
      ['showMarks', 'boolean', 'true', 'Whether to show marks on the slider'],
      ['disabled', 'boolean', 'false', 'Whether the slider is disabled'],
      ['className', 'string', '', 'Additional classes to include for the container'],
      ['aria-label', 'string', '', 'String value for aria-label'],
      ['aria-labelledby', 'string', '', 'Identifies the element that labels the slider'],
      ['aria-valuetext', 'string', '', 'Human readable text alternative for the value'],
    ],
    events: [
      ['onChange', '(value: number) => void', '', 'Handler that is called when the value of the slider has settled.'],
      ['onInput', '(value: number) => void', '', 'Handler that is called every time the value of the slider changes.'],
    ],
  },
  Step: {
    required: [['children', 'Element | Element[]', '', 'Contents of Step component']],
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
    required: [['value', 'boolean', '', 'The value of the switch.']],
    props: [
      ['id', 'string', 'false', 'The unique identifier.'],
      [
        'aria-label',
        'string',
        'false',
        'Defines a string value that labels the current element. Must be set if aria-labelledby is not defined.',
      ],
      [
        'aria-labelledby',
        'string',
        '',
        'Identifies the element (or elements) that labels the current element. Must be set if aria-label is not defined.',
      ],
      ['disabled', 'boolean', 'false', 'Whether the switch is disabled.'],
    ],
    events: [['onClick', '() => void', '', 'Handler for when the Switch is clicked.']],
  },
  Tab: {
    required: [
      [
        'name',
        'string',
        '',
        'Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler',
      ],
      ['label', 'any', '', 'The label of the tab item'],
    ],
    props: [
      [
        'isActive',
        'boolean',
        '',
        'Used to set which tab should be active on mount. Defaults to the first tab if not present',
      ],
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
      [
        'name',
        'string',
        '',
        'Tab name identifier - This value should be the same as the `name` prop of the corresponding Tab component.',
      ],
    ],
    props: [['hidden', 'boolean', '', 'Show/hide panel manually (in server-side rendering).']],
  },
  Tabs: {
    required: [['children', 'Element[]', '', 'The Tabs within the container']],
    props: [
      [
        'active',
        'string',
        '',
        'Used to set the name of the Tab that should be active on mount. Defaults to the first tab if not present and isActive is not set on any Tab',
      ],
      ['className', 'string', '', 'Additional CSS class for the container'],
      ['style', 'any', '', 'Additional CSS styles for the container'],
    ],
    events: [['onChange', '(name: string) => void', '', 'Handler that is called when the tab changes']],
  },
  TextArea: {
    required: [],
    props: [
      ['autoFocus', 'boolean', '', 'Whether the element should receive focus on render.'],
      ['className', 'string', '', 'Additional classes to include.'],
      ['style', 'CSSProperties', '', 'Additional CSS styles for the container.'],
      ['defaultValue', 'string & (string|number|readonly string[])', '', 'The default value (uncontrolled).'],
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
      ['maxLength', 'number', '', 'The maximum number of characters supported by the input. See MDN.'],
      ['minLength', 'number', '', 'The minimum number of characters supported by the input. See MDN.'],
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
      ['placeholder', 'string', '', 'Text hint that occupies the text input when it is empty.'],
      ['readOnly', 'boolean', '', 'Whether the input can be selected but not changed by the user.'],
      ['required', 'boolean', '', 'Whether user input is required on the input before form submission.'],
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
      ['autoFocus', 'boolean', '', 'Whether the element should receive focus on render.'],
      ['className', 'string', '', 'Additional classes to include.'],
      ['style', 'CSSProperties', '', 'Additional CSS styles for the container.'],
      ['defaultValue', 'string & (string|number|readonly string[])', '', 'The default value (uncontrolled).'],
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
      ['maxLength', 'number', '', 'The maximum number of characters supported by the input. See MDN.'],
      ['minLength', 'number', '', 'The minimum number of characters supported by the input. See MDN.'],
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
      ['placeholder', 'string', '', 'Text hint that occupies the text input when it is empty.'],
      ['readOnly', 'boolean', '', 'Whether the input can be selected but not changed by the user.'],
      ['required', 'boolean', '', 'Whether user input is required on the input before form submission.'],
      ['children', 'ReactNode', '', 'For affix use.'],
      ['value', 'string', '', 'The current value (controlled).'],
      ['optional', 'boolean', '', 'Indicates that the textfield is not required.'],
    ],
  },
  Toast: {
    required: [
      ['text', 'string', 'undefined', 'The toast message.'],
      ['variant', "'positive' | 'warning' | 'negative'", 'undefined', 'Defines the type of toast.'],
    ],
    props: [
      [
        'duration',
        '5000 | 10000 | 6000000',
        '5000',
        'Sets how long the toast stays visible in the user interface before it dismisses automatically (in milliseconds).',
      ],
      ['dismissible', 'boolean', 'false', 'Adds a close button. Not recommended from an accessibility perspective.'],
    ],
  },
  Toggle: {
    required: [],
    props: [
      ['type', '"radio"<br />|"checkbox"<br />|"radio-button"', '', 'The type of Toggle'],
      ['title', 'string', '', 'The option(s) title'],
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
      [
        'indeterminate',
        'boolean',
        '',
        'Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.',
      ],
      [
        'optional',
        'boolean',
        '',
        'Whether the toggle is optional Appends (optional) to the end of the title for indication',
      ],
      ['className', 'string', '', 'Custom classes applied to the wrapping container'],
      ['equalWidth', 'boolean', '', 'Will make each option equal width, only applied when "radio-button" type is set'],
      ['small', 'boolean', '', 'Whether the elements should be small, only applied when "radio-button" type is set'],
    ],
  },
  Tooltip: {
    required: [
      [
        'targetEl',
        'MutableRefObject<unknown>',
        '',
        'The reference container to which the Attention component is positioned relative to.',
      ],
    ],
    props: [
      ['isShowing', 'boolean', 'false', 'Whether Attention component is shown.'],
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. The arrow will point to the opposite side of this position',
      ],
      ['children', 'Element | Element[]', '', 'Elements inside of the Attention component'],
      ['className', 'string', '', 'Extend the Attention component container styling'],
      ['tooltip', 'boolean', 'false', 'Whether Attention component is rendered as a tooltip'],
      [
        'role',
        'string',
        'tooltip',
        'Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`). Default role is set to `tooltip`.',
      ],
      [
        'aria-label',
        'string',
        '',
        'Allows the user to override the default aria-label attribute for the Attention component',
      ],
      ['noArrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally.',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'crossAxis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallbackPlacements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      [
        'onDismiss',
        '() => void',
        '',
        'Called when user clicks the close button or presses Escape when the button is in focus.',
      ],
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
  Badge: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored'",
        "'neutral'",
        '',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        'undefined',
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
      ['info', 'boolean', 'false', 'Will style the box with colors for indicating that it has informative content'],
      ['neutral', 'boolean', 'false', 'Will style the box in a neutral fashion'],
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
    props: [['aria-label', 'string', 'Her er du', 'Defines a string value that labels the current element.']],
  },
  Callout: {
    required: [
      ['v-model', 'boolean', '', 'Whether Attention component should be visible'],
      [
        'target-el',
        'string',
        '',
        'Selector of element that the Attention component is rendered relatively to. Required if `highlight` but optional if `callout`.',
      ],
    ],
    props: [
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. The arrow will point to the opposite side of this position.',
      ],
      [
        'callout',
        'boolean',
        'false',
        'Whether Attention component is rendered as a callout, displayed inline within content.',
      ],
      [
        'highlight',
        'boolean',
        'false',
        'Whether Attention component is rendered as a highlight, elevated above content with shadow.',
      ],
      [
        'role',
        'string',
        'img',
        'Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`). Default role is set to `img`.',
      ],
      [
        'aria-label',
        'string',
        '',
        'Allows the user to override the default aria-label attribute for the Attention component',
      ],
      ['no-arrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['can-close', 'boolean', 'false', 'Whether a close button is shown'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'cross-axis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallback-placements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      [
        '@dismiss',
        '',
        '',
        'Triggered when user clicks the close button or presses Escape when the button is in focus.',
      ],
    ],
  },
  Card: {
    required: [],
    props: [
      ['selected', 'boolean', '', 'If the card is selected'],
      ['flat', 'boolean', '', 'Removes box shadow around card'],
      ['as', 'string', 'div', 'The DOM element to emit'],
    ],
  },
  Button: {
    required: [],
    props: [
      ['label', 'string', '', 'Interchangeable with the default slot for labelling'],
      [
        'href',
        'string',
        '',
        'When set, an anchor tag will be used instead of a button. Should not be combined with variant `link`',
      ],
      ['type', 'string', 'button', "Controls the button's type, unused when `href` is present"],
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
    ],
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
    props: [['selected', 'boolean', '', 'Used to give the item a selected appearance - e.g. when used with toggles']],
    slots: [['default', 'button content']],
  },
  Clickable: {
    required: [],
    props: [
      ['href', 'string', '', 'When set, an anchor tag will be used instead of a button'],
      ['label', 'boolean', '', 'Will add label-styling to the clickable – for label content, see slots'],
      ['radio', 'boolean', '', 'Will create a radio toggle with label and input elements'],
      ['checkbox', 'boolean', '', 'Will create a checkbox toggle with label and input elements'],
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
      ['bleed', 'boolean', '', 'Will make the expandable full-width on sm-size'],
      ['buttonClass', 'string', '', 'Additional CSS classes to include on the button part of the component'],
      ['contentClass', 'string', '', 'Additional CSS classes to include on the content part of the component'],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
    ],
    slots: [
      ['title', 'string', '', 'The title for the expandable'],
      ['default', 'string', '', 'Content that should be displayed when expanded'],
    ],
    events: [
      [
        'expand',
        'boolean',
        '',
        'Content inside the expandable has been mounted and can be targeted - will fire after any opening animations are complete',
      ],
      ['collapse', 'boolean', '', 'Content inside the expandable has been fully torn down or hidden'],
    ],
  },
  Field: {
    required: [],
    props: [
      ['label', 'string', '', 'The content to display as the label'],
      ['hint', 'string', '', 'The string can contain HTML.'],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired with `hint` to provide feedback about the error.',
      ],
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
      ['valid', 'boolean', '', 'Whether or not to treat the form element as valid'],
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
      ['v-model:completed', 'boolean', '', 'True when all descendants are completed - passing their required rule'],
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
      [
        'left',
        'boolean<br />|object',
        '',
        'When truthy, will show the left button of the header. Object properties will be used as attributes on the button.',
      ],
      [
        'right',
        'boolean<br />|object',
        '',
        'When truthy, will show the right button of the header. Object properties will be used as attributes on the button.',
      ],
      ['title', 'string', '', ''],
      ['titleAttrs', 'object', '', 'Properties will be set as attributes of the title in the header.'],
      ['headerClasses', 'string<br />|object', '', 'Classes here will be set on the wrapper for the header.'],
      ['contentClasses', 'string<br />|object', '', 'Classes here will be set on the wrapper for the content.'],
      ['contentId', 'string', '', 'This id is useful if you need to programmatically scroll content in the modal.'],
    ],
    events: [
      ['dismiss', '', '', 'A user presses ESC or clicks outside the dialog'],
      ['left', '', '', 'The left title-button has been clicked'],
      ['right', '', '', 'The right title-button has been clicked'],
      ['shown', '', '', 'Modal entrance transitions are complete and content has been mounted'],
      ['hidden', '', '', 'Modal exit transitions are complete and content has been torn down or hidden'],
    ],
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
      [
        'close-SR-label',
        'string',
        '"Remove filter {label}"',
        'Label read by screen readers when targeting the close button',
      ],
    ],
    events: [['close', 'the close button is pressed']],
  },
  Popover: {
    required: [
      ['v-model', 'boolean', '', 'Whether Attention component should be visible'],
      ['target-el', 'string', '', 'Selector of element that the Attention component is rendered relatively to.'],
    ],
    props: [
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. The arrow will point to the opposite side of this position.',
      ],
      ['popover', 'boolean', 'false', 'Whether Attention component is rendered as a popover'],
      [
        'role',
        'string',
        'img',
        'Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`). Default role is set to `img`.',
      ],
      [
        'aria-label',
        'string',
        '',
        'Allows the user to override the default aria-label attribute for the Attention component',
      ],
      ['no-arrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['can-close', 'boolean', 'false', 'Whether a close button is shown'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'cross-axis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallback-placements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      [
        '@dismiss',
        '',
        '',
        'Triggered when user clicks the close button or presses Escape when the button is in focus.',
      ],
    ],
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
    required: [['v-model', 'boolean', 'false', 'The value of the switch.']],
    props: [
      ['id', 'string', 'false', 'The unique identifier.'],
      ['disabled', 'boolean', 'false', 'Whether the switch is disabled.'],
    ],
  },
  Tab: {
    required: [
      [
        'name',
        'string',
        '',
        'Tab name identifier. This value will be omitted as the argument to the Tabs setActive handler',
      ],
    ],
    props: [['label', 'string', '', 'Interchangeable with the `label slot` for labelling']],
    slots: [
      ['default', 'Default slot - mainly used for icons'],
      ['label', 'Label for the tab (renders below default slot)'],
    ],
  },
  TabPanel: {
    required: [
      [
        'name',
        'string',
        '',
        'Tab name identifier - This value should be the same as the `name` prop of the corresponding Tab component.',
      ],
    ],
  },
  Tabs: {
    required: [
      ['v-model', 'string', '', 'Name of the active tab (set by the Tab component via the setActive handler)'],
    ],
  },
  TextField: {
    required: [],
    props: [
      [
        'type',
        'string',
        'text',
        'Allowed types are: `text` | `search` | `email` | `password` | `url` | `tel` | `number`',
      ],
      ['autocomplete', 'string', 'off', ''],
      ['mask', 'object', '', 'See the Masking section below for more information'],
    ],
  },
  Toggle: {
    required: [],
    props: [
      ['radio', 'boolean', '', ''],
      ['checkbox', 'boolean', '', ''],
      ['radio-button', 'boolean', '', ''],
      [
        'toggles',
        'array',
        '',
        'An array of objects. Each object must at least have a value and label attribute. Any other attributes will be transferred directly to the individual toggle',
      ],
      ['invalid', 'boolean', '', 'Whether elements should be styled as invalid'],
      ['disabled', 'boolean', '', 'Whether elements should be styled as disabled'],
      [
        'indeterminate',
        'boolean',
        '',
        'Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.',
      ],
      ['equal-width', 'boolean', '', 'Will make each option equal width, only applied when radio-button is set'],
      ['small', 'boolean', '', 'Whether the elements should be small, only applied when radio-button is set'],
    ],
  },
  Tooltip: {
    required: [
      ['v-model', 'boolean', '', 'Whether Attention component should be visible'],
      ['target-el', 'string', '', 'Selector of element that the Attention component is rendered relatively to.'],
    ],
    props: [
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. The arrow will point to the opposite side of this position.',
      ],
      ['tooltip', 'boolean', 'false', 'Whether Attention component is rendered as a tooltip'],
      [
        'role',
        'string',
        'tooltip',
        'Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`). Default role is set to `tooltip`.',
      ],
      [
        'aria-label',
        'string',
        '',
        'Allows the user to override the default aria-label attribute for the Attention component',
      ],
      ['no-arrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'cross-axis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallback-placements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      [
        '@dismiss',
        '',
        '',
        'Triggered when user clicks the close button or presses Escape when the button is in focus.',
      ],
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
    required: [['variant', "'negative' | 'positive' | 'warning' | 'info'", 'undefined', 'Variant of the alert']],
    props: [
      ['show', 'boolean', 'false', 'Controls when the alert shows'],
      ['role', 'string', 'alert', 'ARIA live region "role" attribute value'],
    ],
  },
  Badge: {
    required: [],
    props: [
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored'",
        "'neutral'",
        '',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        'undefined',
        'Used for absolute positioning of the badge within a container',
      ],
    ],
  },
  Box: {
    required: [],
    props: [
      ['bleed', 'boolean', 'false', 'Will make a box full-width on sm-size'],
      ['bordered', 'boolean', 'false', 'Adds a lovely border'],
      ['info', 'boolean', 'false', 'Will style the box with colors for indicating that it has informative content'],
      ['neutral', 'boolean', 'false', 'Will style the box in a neutral fashion'],
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
    props: [['aria-label', 'string', 'Her er du', 'Defines a string value that labels the current element.']],
  },
  Broadcast: {
    required: [['api', 'string', '', 'API endpoint to fetch broadcasts from']],
    props: [
      ['interval', 'number', '300 000', 'Refetch interval. Default is set to 5 minutes'],
      [
        'url',
        'string',
        'window.location.href',
        'Page (identified by its url) to check for registered broadcasts against',
      ],
    ],
  },
  Button: {
    required: [],
    props: [
      ['type', '"button"|"submit"|"reset"', 'button', 'Button type, only applied when href is not set.'],
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
  Callout: {
    required: [
      ['target-selector', 'string', '', 'Selector of element that the Attention component is rendered relatively to'],
    ],
    props: [
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. Arrow would be on the opposite side of this position',
      ],
      ['show', 'boolean', 'false', 'Whether Attention element should be visible'],
      [
        'callout',
        'boolean',
        'false',
        'Whether Attention element is rendered as a callout, displayed inline within content.',
      ],
      [
        'highlight',
        'boolean',
        'false',
        'Whether Attention element is rendered as a highlight, elevated above content with shadow.',
      ],
      ['no-arrow', 'boolean', 'false', 'Render Attention element without an arrow'],
      ['can-close', 'boolean', 'false', 'Render Attention element with a close button'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally.',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'cross-axis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallback-placements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      ['@close', '', '', 'Triggered when user clicks the close button or presses Escape when the button is in focus.'],
    ],
  },
  Card: {
    required: [],
    props: [
      ['selected', 'boolean', '', 'If the card is selected'],
      ['clickable', 'boolean', '', 'Applies styling to indicate click-ability'],
      ['flat', 'boolean', '', 'Removes box shadow around card'],
    ],
  },
  Expandable: {
    required: [],
    props: [
      ['expanded', 'boolean', 'false', "Controls component's expanded state"],
      ['bleed', 'boolean', '', 'Will make the expandable full-width on sm-size'],
      ['box', 'boolean', 'false', 'Will make the expandable a Box'],
      ['animated', 'boolean', 'false', 'Will animate the expansion/collapse'],
      ['no-chevron', 'boolean', 'false', 'Whether to hide the chevron on the button part of the component'],
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
      ['button-class', 'string', '', 'Additional CSS classes to include on the button part of the component'],
      ['content-class', 'string', '', 'Additional CSS classes to include on the content part of the component'],
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['v-model', 'boolean', '', 'Controls the expansion/collapse'],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
    ],
  },
  Icon: {
    required: [
      ['name', 'string', '', 'The name of the icon to render'],
      [
        'size',
        "'small' | 'medium' | 'large' | 'xypx' ",
        'medium',
        'The size of the icon: `small`, `medium`, `large`, or a custom size in pixels like `32px`.',
      ],
      ['locale', 'string', '', 'The locale to use for the icon, e.g. "nb" for Norwegian Bokmål'],
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
    required: [['title', 'string', '', 'A short but descriptive title for the modal']],
    props: [
      ['back', 'boolean', 'false', 'Whether the modal header should have a back button'],
      ['no-close', 'boolean', 'false', 'Whether the modal header should have a close button'],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['open-sr-label', 'string', '"Open filter"', 'Label read by screen readers when targeting the pill'],
      [
        'close-sr-label',
        'string',
        '"Remove filter {label}"',
        'Label read by screen readers when targeting the close button',
      ],
      ['can-close', 'boolean', 'false', 'Whether the pill should be removable via a close button.'],
      ['suggestion', 'boolean', 'false', 'Whether the pill should be rendered as a suggestion.'],
    ],
    events: [
      ['w-pill-click', 'Event to be called when the pill is clicked.'],
      ['w-pill-close', 'Event to be called when the close button is clicked.'],
    ],
  },
  Popover: {
    required: [
      ['target-selector', 'string', '', 'Selector of element that the Attention component is rendered relatively to'],
    ],
    props: [
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. Arrow would be on the opposite side of this position',
      ],
      ['show', 'boolean', 'false', 'Whether Attention element should be visible'],
      ['popover', 'boolean', 'false', 'Whether Attention element is rendered as a popover'],
      ['no-arrow', 'boolean', 'false', 'Render Attention element without an arrow'],
      ['can-close', 'boolean', 'false', 'Render Attention element with a close button'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally.',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'cross-axis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallback-placements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      ['@close', '', '', 'Triggered when user clicks the close button or presses Escape when the button is in focus.'],
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
      ['read-only', 'boolean', '', 'Whether the input can be selected but not changed by the user.'],
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
      ['max-Length', 'number', '', 'The maximum number of characters supported by the input. See MDN.'],
      ['min-Length', 'number', '', 'The minimum number of characters supported by the input. See MDN.'],
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
      ['placeholder', 'string', '', 'Text hint that occupies the text input when it is empty.'],
      ['readOnly', 'boolean', '', 'Whether the input can be selected but not changed by the user.'],
      ['required', 'boolean', '', 'Whether user input is required on the input before form submission.'],
      ['value', 'string', '', 'The current value (controlled).'],
    ],
  },
  Toast: {
    required: [],
    props: [
      ['type', "'success' | 'warning' | 'error'", "'success'", 'Type of toast'],
      ['text', 'string', 'undefined', 'The toast message. Only needed when updating text on existing toast'],
      [
        'duration',
        'number',
        '5000',
        'Duration of toast in milliseconds. For accessibility reasons, toasts should never be interactive and therefore need to auto remove. If you must disable auto remove, set duration to Number.POSITIVE_INFINITY.',
      ],
      [
        'canclose',
        'boolean',
        'false',
        'Adds a close button. WARNING! For accessibility reasons, toasts should not be interactive and canclose should always be false. If the toast absolutely must be dismissible, set this to true.',
      ],
    ],
  },
  Tooltip: {
    required: [
      ['target-selector', 'string', '', 'Selector of element that the Attention component is rendered relatively to'],
    ],
    props: [
      [
        'placement',
        "'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",
        "'bottom'",
        'Placement according to the target element. Arrow would be on the opposite side of this position',
      ],
      ['show', 'boolean', 'false', 'Whether Attention element should be visible'],
      ['tooltip', 'boolean', 'false', 'Whether Attention component is rendered as a tooltip'],
      ['no-arrow', 'boolean', 'false', 'Render Attention element without an arrow'],
      ['distance', 'number', '8', 'Distance from which to offset the Attention component from the targetEl vertically'],
      [
        'skidding',
        'number',
        '0',
        'Distance from which to offset the Attention component along its targetEl horizontally.',
      ],
      ['flip', 'boolean', 'false', 'Whether Attention element should flip its placement in order to keep it in view'],
      [
        'cross-axis',
        'boolean',
        'false',
        'Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true.',
      ],
      [
        'fallback-placements',
        'array',
        'undefined',
        'Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true.',
      ],
    ],
    events: [
      ['@close', '', '', 'Triggered when user clicks the close button or presses Escape when the button is in focus.'],
    ],
  },
};

export const android = {
  Button: {
    required: [
      ['text', 'String', '', 'The text to be displayed on the button'],
      ['onClick', '() -> Unit', '', 'Lambda to be invoked when clicked'],
    ],
    props: [
      [
        'style',
        'WarpButtonStyle.Primary <br />WarpButtonStyle.Secondary <br />WarpButtonStyle.Quiet <br />WarpButtonStyle.Negative <br />WarpButtonStyle.NegativeQuiet <br />WarpButtonStyle.Utility <br />WarpButtonStyle.UtilityQuiet <br />WarpButtonStyle.UtilityOverlay',
        'WarpButtonStyle.Primary',
        'Controls the appearance of the button',
      ],
      ['enabled', 'Boolean', 'true', 'Sets the button in disabled mode'],
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the button'],
      ['maxLines', 'Integer', '1', 'Limits the lines of the text on the button'],
      [
        'loading',
        'Boolean',
        'false',
        'Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type',
      ],
      [
        'leadingIcon',
        'Int or @Composable () -> Unit',
        'null',
        'The id of the icon drawable resource or the WarpIcon component to be displayed in the button before the text',
      ],
      ['leadingIconContentDescr', 'String', 'null', 'The content description of the icon'],
      [
        'trailingIcon',
        'Int or @Composable () -> Unit',
        'null',
        'The id of the icon drawable resource or the WarpIcon component to be displayed in the button after the text',
      ],
      ['trailingIconContentDescr', 'String', 'null', 'The content description of the icon'],
      ['small', 'Boolean', 'false', 'Set to show a smaller slimmed version of the button'],
      ['iconModifier', 'Modifier', 'Modifier', 'Sets the modifier for the icon'],
    ],
  },

  TextField: {
    required: [
      ['value', 'String', '', 'The text displayed currently in the textfield'],
      ['onValueChange', '(String) -> Unit', '', 'Lambda to be invoked when input value changes'],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the textfield'],
      ['label', 'String', 'null', 'The text to display as the label above the textfield'],
      ['enabled', 'Boolean', 'true', 'Sets the textfield in disabled mode'],
      ['readOnly', 'Boolean', 'false', 'Sets the textfield in read-only mode'],
      ['optionalLabel', 'String', 'null', 'The optional text to display next to the label above the textfield'],
      ['placeholderText', 'String', 'null', 'Text hint that occupies the textfield when it is empty'],
      ['helpText', 'String', 'null', 'The text to display as the help text below the textfield'],
      ['prefixText', 'String', 'null', 'The text to display infront of the value inside the textfield'],
      ['suffixText', 'String', 'null', 'The text to display after the value inside the textfield'],
      ['leadingIcon', '@Composable () -> Unit?', 'null', 'Sets the composable in front of the input value'],
      ['trailingIcon', '@Composable () -> Unit?', 'null', 'Sets the composable behind the input value'],
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
        'Interface used for changing visual output of the input field ',
      ],
      [
        'keyboardOptions',
        'KeyboardOptions',
        'KeyboardOptions(capitalization = KeyboardCapitalization.Sentences)',
        'The keyboard configuration options ',
      ],
      [
        'keyboardActions',
        'KeyboardActions',
        'KeyboardActions.Default',
        'The KeyboardActions that specify actions that will be triggered in response to triggering IME action on the software keyboard',
      ],
      ['singleLine', 'Boolean', 'true', 'Sets the textfield to a single line'],
      ['minLines', 'Int', '1', 'Sets the minimum amount of lines'],
      ['maxLines', 'Int', 'Int.MAX_VALUE', 'Sets the maximum amount of lines allowed'],
      [
        'interactionSource',
        'MutableInteractionSource',
        'MutableInteractionSource',
        'MutableInteractionSource represents a stream of Interactions corresponding to events emitted by a component',
      ],
    ],
  },
  Pill: {
    required: [
      ['text', 'String', '', 'The text to be displayed on the pill'],
      ['onClick', '() -> Unit', '', 'Lambda to be invoked when clicked'],
    ],

    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the pill'],
      [
        'style',
        'WarpPillStyle.Filter <br />WarpPillStyle.Suggestion',
        'WarpPillStyle.Filter',
        'Sets the appearance of the pill',
      ],
      ['selected', 'boolean', 'false', 'Whether the pill appears in selected mode or not'],
      [
        'closable',
        'boolean',
        'false',
        'Whether the pill should be removable via a close button. Will override the custom icon',
      ],
      ['icon', 'WarpIconResource?', 'null', 'The icon to be displayed in the pill after the text'],
    ],
  },
  Badge: {
    required: [['text', 'String', '', 'The text to be displayed on the badge']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the badge'],
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
      ['icon', 'WarpIconResource?', 'null', 'Sets the icon for the badge'],
    ],
  },
  Alert: {
    required: [['body', 'String', '', 'The body text to be displayed in the alert']],
    props: [
      ['title', 'String', 'null', 'The title to be displayed in the alert'],
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the alert'],
      [
        'type',
        'WarpAlertType.Info <br />WarpAlertType.Positive <br />WarpAlertType.Critical <br />WarpBadgeStyle.Warning',
        'WarpAlertType.Info',
        'Sets the style and icon of the alert',
      ],
      ['linkText', 'String', 'null', 'The link text to be displayed in the alert'],
      ['linkAction', '() -> Unit', 'null', 'Lambda to be invoked when clicked'],
      ['secondaryButtonText', 'String', 'null', 'The secondary button text to be displayed in the alert'],
      ['secondaryButtonAction', '() -> Unit', 'null', 'Lambda to be invoked when clicked'],
      ['quietButtonText', 'String', 'null', 'The quiet button text to be displayed in the alert'],
      ['quietButtonAction', '() -> Unit', 'null', 'Lambda to be invoked when clicked'],
    ],
  },
  Text: {
    required: [['text', 'String | AnnotatedString', '', 'The text to be displayed']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the text'],
      ['color', 'Color', 'WarpTheme.colors.text.default', 'The color of the text'],
      [
        'style',
        'WarpTextStyle.Display <br />WarpTextStyle.Title1 <br />WarpTextStyle.Title2 <br />WarpTextStyle.Title3 <br />WarpTextStyle.Title4 <br />WarpTextStyle.Title5 <br />WarpTextStyle.Title6 <br />WarpTextStyle.Preamble <br />WarpTextStyle.Body <br />WarpTextStyle.BodyStrong <br />WarpTextStyle.Caption <br />WarpTextStyle.CaptionStrong <br />WarpTextStyle.Detail <br />WarpTextStyle.DetailStrong',
        'WarpTextStyle.Body',
        'Sets the appearance of the text - font and size',
      ],
      ['maxLines', 'Int', 'Int.MAX_VALUE', 'Max lines of text'],
      ['minLines', 'Int', '1', 'Min lines of text'],
      ['textAlign', 'TextAlign', 'null', 'TextAlign controls how text aligns in the space it appears'],
      ['overflow', 'TextOverflow', 'TextOverflow.Ellipsis', 'How overflowing text should be handled'],
      ['softWrap', 'Boolean', 'true', 'If text should wrap or not'],
      [
        'textDecoration',
        'TextDecoration',
        'null',
        'Defines a horizontal line to be drawn on the text. Useful for displaying links',
      ],
      [
        'onTextLayout',
        '(TextLayoutResult) -> Unit',
        '{}',
        'Callback providing paragraph info, text size, baselines, and more',
      ],
    ],
  },
  Box: {
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the box'],
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
      ['heading', 'String', 'null', 'The heading to be displayed in the box'],
      ['text', 'String', 'null', 'The body text to be displayed in the box'],
      ['link', 'String', 'null', 'The link text to be displayed in the box'],
      ['linkAction', '() -> Unit', 'null', 'Lambda to be invoked when clicked on the link'],
      ['buttonText', 'String', 'null', 'The button text to be displayed on the button in the box'],
      ['buttonAction', '() -> Unit', 'null', 'Lambda to be invoked when clicked on the button'],
    ],
  },
  StepIndicator: {
    required: [
      ['steps', 'Int', '', 'The amount of steps in the indicator'],
      [
        'stepContent',
        '@Composable (Int) -> Unit',
        '',
        'The custom content between the steps. Vertical orientation only',
      ],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the step indicator'],
      ['activeStep', 'Int', '0', 'The active step in the step indicator'],
      [
        'onStepClicked',
        '(Int) -> Unit',
        'null',
        'Lambda for the step click action, returns the integer value of the step clicked',
      ],
      [
        'stepContentDescription',
        '@Composable (Int) -> String',
        'null',
        'The content description of the step. Used for accessibility purposes',
      ],
      ['stepTitle', '(Int) -> String', 'null', 'Lambda for the step title, returns the integer value of the step'],
      [
        'stepDescription',
        '(Int) -> String',
        'null',
        'Lambda for the step description, returns the integer value of the step',
      ],
    ],
  },
  Modal: {
    required: [
      ['title', 'String', '', 'The title to be displayed in the modal'],
      ['body', 'String', '', 'The text to be displayed in the modal'],
      ['onDismiss', '() -> Unit', '', 'The lambda to be invoked when closing the modal'],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the modal Card'],
      ['subtitle', 'String', 'null', 'The subtitle to be displayed in the modal'],
      ['primaryButtonText', 'String', 'null', 'The text to be displayed on the positive button.'],
      ['onPrimaryButtonClick', '() -> Unit', 'null', 'The lambda to be invoked on the positive button click.'],
      ['secondaryButtonText', 'String', 'null', 'The text to be displayed on the negative button.'],
      ['onSecondaryButtonClick', '() -> Unit', 'null', 'The lambda to be invoked on the positive button click.'],
      ['showCloseIcon', 'Boolean', 'false', 'Whether the close icon (X) should be displayed in the top right corner.'],
      [
        'dismissOnClickOutside',
        'Boolean',
        'true',
        'Whether the modal should be closed when clicking outside of its layout.',
      ],
      ['dismissOnBackPress', 'Boolean', 'true', 'Whether the modal should be closed when pressing back.'],
    ],
  },
  Checkbox: {
    required: [['text', 'String', '', 'The text to be displayed next to the checkbox']],

    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the checkbox'],
      ['onCheckedChange', '(Boolean) -> Unit', '', 'Lambda to be invoked when checked or unchecked'],
      [
        'style',
        'WarpCheckboxStyle.Neutral <br />WarpCheckboxStyle.Disabled <br />WarpCheckboxStyle.Neutral',
        'WarpCheckboxStyle.Neutral',
        'Sets the appearance of the checkbox',
      ],
      ['enabled', 'boolean', 'true', 'Whether the checkbox is enabled or not'],
      ['checked', 'boolean', 'false', 'Whether the checkbox is checked or not'],
    ],
  },
  CheckboxGroup: {
    required: [
      ['options', 'List<String>', '', 'The list of texts to be displayed next to the checkboxes'],
      [
        'onOptionsSelected',
        '(MutableList<String>) -> Unit',
        '',
        'The lambda to be invoked when clicked on a checkbox.',
      ],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the checkbox group'],
      [
        'orientation',
        'Orientation.Vertical <br /> Orientation.Horizontal',
        'Orientation.Vertical',
        'Sets the orientation for the checkbox group. Class is found in the androidx.compose.foundation.gestures package',
      ],
      ['title', 'String', 'null', 'The title to be displayed on top of the checkbox group'],
      ['selectedOptions', 'List<String>', 'null', 'The selected options in the checkbox group'],
      ['helpText', 'String', 'null', 'The text displayed below the checkbox group'],
      ['enabled', 'boolean', 'true', 'Whether the checkbox group is enabled or not'],
      ['isError', 'boolean', 'false', 'Shows the checkbox group in error state if true'],
    ],
  },
  Switch: {
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the switch'],
      ['onCheckedChange', '(Boolean) -> Unit', '', 'Lambda to be invoked when checked or unchecked'],
      ['enabled', 'boolean', 'true', 'Whether the switch is enabled or not'],
      ['checked', 'boolean', 'false', 'Whether the switch is on or off'],
      ['contentDescr', 'String', 'null', 'The a11y text for screenreaders'],
    ],
  },
  Radio: {
    required: [['label', 'String', '', 'The text to be displayed next to the radio']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the radio'],
      ['selected', 'boolean', 'false', 'Whether the radio is selected or not'],
      ['isError', 'boolean', 'false', 'Shows the radio in error state if true'],
      ['enabled', 'boolean', 'true', 'Whether the radio is enabled or not'],
      ['extraText', 'String?', 'null', 'The optional text to be displayed next to the label'],
      [
        'slot',
        '@Composable (() -> Uni)?',
        'null',
        'The composable that will be displayed next to the label or extraText if provided',
      ],
      ['onClick', '() -> Unit', 'null', 'The lambda to be invoked when clicked.'],
      [
        'interactionSource',
        'MutableInteractionSource',
        'MutableInteractionSource',
        'MutableInteractionSource represents a stream of Interactions corresponding to events emitted by a component',
      ],
    ],
  },
  RadioGroup: {
    required: [
      ['options', 'List<String>', '', 'The list of texts to be displayed next to the radio buttons'],
      ['onOptionSelected', '(String) -> Unit', '', 'The lambda to be invoked when clicked on a radio.'],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the radio group'],
      [
        'orientation',
        'Orientation.Vertical <br /> Orientation.Horizontal',
        'Orientation.Vertical',
        'Sets the orientation for the radio group. Class is found in the androidx.compose.foundation.gestures package',
      ],
      ['title', 'String', 'null', 'The title to be displayed on top of the radio group'],
      ['selectedOption', 'String', 'null', 'The selected option in the radio group'],
      ['helpText', 'String', 'null', 'The text displayed below the radio group'],
      ['enabled', 'boolean', 'true', 'Whether the radio group is enabled or not'],
      ['isError', 'boolean', 'false', 'Shows the radio group in error state if true'],
    ],
  },
  Spinner: {
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the spinner'],
      [
        'size',
        'WarpSpinnerSize.Small <br />WarpSpinnerSize.Default <br />WarpSpinnerSize.Large',
        'WarpSpinnerSize.Default',
        'Size of the spinner',
      ],
    ],
  },
  Callout: {
    required: [
      ['title', 'String', '', 'The text to be displayed in the callout'],
      ['state', 'CalloutState', '', 'The state of the callout. If visible or not'],
      ['onDismiss', '() -> Unit', '', 'The lambda to be invoked when dismissed'],
    ],
    props: [
      ['size', 'CalloutSize.Default <br /> CalloutSize.Small', 'CalloutSize.Default', 'Size of the callout'],
      ['type', 'CalloutSize.Popover <br /> CalloutSize.Inline', 'CalloutSize.Popover', 'Type of the callout'],
      ['inlineModifier', 'Modifier', 'Modifier', 'Modifier only used for the Inline callout type'],
      ['horizontalOffset', 'Dp', '0.dp', 'Horizontal offset used only for the Popover type callout'],
      ['verticalOffset', 'Dp', '0.dp', 'Vertical offset used only for the Popover type callout'],
      [
        'edge',
        'Edge.Top <br /> Edge.Bottom <br /> Edge.Leading <br /> Edge.Trailing',
        'Edge.Top',
        'Edge that determines the direction of the arrow',
      ],
      ['closable', 'Boolean', 'false', 'If should show the close icon'],
      ['dismissPopoverOnClickOutside', 'Boolean', 'true', 'If should dismiss the callout when clicked outside it'],
      [
        'paddingOffset',
        'Dp',
        'null',
        'Padding offset in the parent layout to correctly calculate the arrow position in relation to the anchor',
      ],
      ['anchorView', '@Composable () -> Unit', 'null', 'The anchor which the callout points to'],
    ],
  },
  Expandable: {
    required: [
      ['title', 'String', '', 'The title to be displayed in the expandable'],
      ['expandedContent', '@Composable () -> Unit', '', 'The content to be shown when expanded'],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the expandable'],
      ['initiallyExpanded', 'Boolean', 'false', 'If should show expanded content'],
      [
        'type',
        'WarpExpandableType.Default <br /> WarpExpandableType.Box',
        'WarpExpandableType.Default',
        'Style of the expandable',
      ],
    ],
  },
  TabRow: {
    required: [
      ['tabs', '@Composable () -> Unit', '', '`WarpTab` objects to display as selectable tabs.'],
      ['selectedTabIndex', 'Int', '', 'Index of the currently selected tab.'],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'The modifier for the TabRow.'],
      ['scrollable', 'Boolean', 'false', 'If set to true, tabs can be scrolled horizontally.'],
    ],
  },
  Tab: {
    required: [
      ['text', 'String', '', 'Title of the tab'],
      ['selected', 'Boolean', '', 'If the tab is selected or not'],
    ],
    props: [
      ['icon', 'WarpIconResource', 'null', 'Icon displayed before the title.'],
      ['modifier', 'Modifier', 'Modifier', 'The modifier for the Tab.'],
      ['onClick', '() -> Unit', '{}', 'The function to be invoked when clicked '],
      [
        'interactionSource',
        'MutableInteractionSource',
        'MutableInteractionSource',
        'The interaction source to be used for the tab.',
      ],
    ],
  },
  Toast: {
    required: [['state', 'WarpToastState', '', 'State of the toast used in hide/show logic and to set the text']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'The modifier for the Toast.'],
      [
        'type',
        'WarpToastType.Success <br /> WarpToastType.Warning <br /> WarpToastType.Error',
        'WarpToastType.Success',
        'Style of the toast',
      ],
      [
        'duration',
        'WarpToastDuration.SHORT <br /> WarpToastDuration.LONG <br /> WarpToastDuration.INFINITE',
        'WarpToastDuration.SHORT',
        'Duration the Toast is shown',
      ],
      ['onDismiss', '() -> Unit', '{}', 'The function to be invoked when dismissed '],
    ],
  },
  Tooltip: {
    required: [
      ['text', 'String', '', 'The text to be displayed in the tooltip'],
      ['state', 'WarpTooltipState', '', 'The state of the tooltip. If visible or not'],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Modifier for the tooltip'],
      [
        'edge',
        'Edge.Top <br /> Edge.Bottom <br /> Edge.Leading <br /> Edge.Trailing',
        'Edge.Top',
        'Edge that determines the direction of the arrow',
      ],
      ['horizontalOffset', 'Dp', '0.dp', 'Horizontal offset for the tooltip'],
      ['verticalOffset', 'Dp', '0.dp', 'Vertical offset for the tooltip'],
      ['inline', 'Boolean', 'false', 'Shows the tooltip as a standalone inline view'],
      ['anchorView', '@Composable () -> Unit', 'null', 'The anchor which the tooltip points to'],
    ],
  },

  Link: {
    required: [['text', 'String', '', 'The text to be displayed']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Sets the modifier for the link'],
      ['onClick', '() -> Unit', '{}', 'The function to be invoked when clicked '],
      [
        'style',
        'WarpTextStyle.Display <br />WarpTextStyle.Title1 <br />WarpTextStyle.Title2 <br />WarpTextStyle.Title3 <br />WarpTextStyle.Title4 <br />WarpTextStyle.Title5 <br />WarpTextStyle.Title6 <br />WarpTextStyle.Preamble <br />WarpTextStyle.Body <br />WarpTextStyle.BodyStrong <br />WarpTextStyle.Caption <br />WarpTextStyle.CaptionStrong <br />WarpTextStyle.Detail <br />WarpTextStyle.DetailStrong',
        'WarpTextStyle.Body',
        'Sets the appearance of the link - font and size',
      ],
      ['icon', 'WarpIconResource', 'null', 'Icon displayed after the text.'],
      ['underline', 'Boolean', 'false', 'If text should be underlined or not'],
    ],
  },

  RangeSlider: {
    required: [['items', 'List<Any>', '', 'The list of values']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Modifier for the range slider'],
      ['enabled', 'Boolean', 'true', 'Disables the slider if false'],
      ['initialStartItem', 'Any?', 'null', 'The pre-selected start value'],
      ['initialEndItem', 'Any?', 'null', 'The pre-selected end value'],
      ['onValueChangeFinished', '() -> Unit', '{}', 'The function to be invoked when value selection is done '],
      ['onLeftValueChanged', '(Any) -> Unit', '{}', 'The function to be invoked when start value is selected'],
      ['onRightValueChanged', '(Any) -> Unit', '{}', 'The function to be invoked when end value is selected'],
      ['resetAtStartText', 'String?', 'null', 'The string displayed as reset start value'],
      ['resetAtEndText', 'String?', 'null', 'The string displayed as reset end value'],
      ['blockDrag', 'Boolean', 'false', 'Whether to block the drag gesture'],
      ['showTooltips', 'Boolean', 'true', 'Whether to show tooltips with current value when dragging'],
      ['showRange', 'Boolean', 'false', 'Whether to show range indicators below the slider'],
      [
        'startInteractionSource',
        'MutableInteractionSource',
        'MutableInteractionSource',
        'The interaction source to be used for the start thumb.',
      ],
      [
        'endInteractionSource',
        'MutableInteractionSource',
        'MutableInteractionSource',
        'The interaction source to be used for the end thumb.',
      ],
    ],
  },
  Popover: {
    required: [
      ['title', 'String', '', 'The text to be displayed in the popover'],
      ['body', 'String', '', 'The text to be displayed in the popover'],
      ['state', 'WarpPopoverState', '', 'The state of the popover. If visible or not'],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Modifier for the popover'],
      [
        'edge',
        'Edge.Top <br /> Edge.Bottom <br /> Edge.Leading <br /> Edge.Trailing',
        'Edge.Top',
        'Edge that determines the direction of the arrow',
      ],
      ['horizontalOffset', 'Dp', '0.dp', 'Horizontal offset for the popover'],
      ['verticalOffset', 'Dp', '0.dp', 'Vertical offset for the popover'],
      ['inline', 'Boolean', 'false', 'Shows the popover as a standalone inline view'],
      ['dismissPopoverOnClickOutside', 'Boolean', 'true', 'If should dismiss the popover when clicked outside it'],
      ['onDismiss', '() -> Unit', '{}', 'The lambda to be invoked when dismissed'],
      ['anchorView', '@Composable () -> Unit', 'null', 'The anchor which the popover points to'],
    ],
  },
  Slider: {
    required: [['onValueChange', '(Float) -> Unit', '', 'The function to be invoked when a value is selected']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Modifier for the slider'],
      ['value', 'Float', '0f', 'The pre-selected value'],
      ['valueRange', 'ClosedFloatingPointRange<Float>', '0f..1f', 'The value range'],
      ['enabled', 'Boolean', 'true', 'Disables the slider if false'],
      ['onValueChangeFinished', '(() -> Unit)', 'null', 'The function to be invoked when value selection is done'],
      [
        'rangeStartText',
        'String?',
        'null, but if showRange is true, it will be the first value of the range using its toString() method',
        'The string displayed as starting value',
      ],
      [
        'rangeEndText',
        'String?',
        'null, but if showRange is true, it will be the last value of the range using its toString() method',
        'The string displayed as end value',
      ],
      [
        'formattedTooltipText',
        'String?',
        'null, but if showTooltip is true, it will be the current value of the slider using its toString() method',
        'The string displayed in the tooltip',
      ],
      ['showTooltip', 'Boolean', 'true', 'Whether to show the tooltip with the current value when dragging'],
      ['showRange', 'Boolean', 'false', 'Whether to show range indicators below the slider'],
      ['steps', '@IntRange(from = 0)', '0', 'Amount of steps that the slider can snap to'],
      [
        'interactionSource',
        'MutableInteractionSource',
        'MutableInteractionSource',
        'The interaction source to be used for the start thumb',
      ],
    ],
  },
  Datepicker: {
    required: [['onDateSelected', '(Long) -> Unit', '', 'The function to be invoked when a date is selected']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Modifier for the datepicker'],
      ['onDismiss', '() -> Unit?', 'null', 'The function to be invoked when dismissed '],
      [
        'preselectedDateMillis',
        'Long?',
        'null',
        'When provided the preselected date is shown in the picker, if null then todays date is used',
      ],
      [
        'type',
        'WarpDatePickerType.DIALOG, WarpDatePickerType.INLINE',
        'WarpDatePickerType.DIALOG',
        'The type of picker to be used',
      ],
      [
        'selectableDates',
        'SelectableDates',
        'DatePickerDefaults.AllDates',
        'Determines which dates are eligible for selection',
      ],
    ],
  },
  PageIndicator: {
    required: [['pageCount', 'Int', '', 'Number of dots to be displayed']],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Modifier for the page indicator'],
      ['currentPage', 'Int', '0', 'Current dot to be selected'],
    ],
  },
  Divider: {
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Modifier for the divider'],
      [
        'orientation',
        'Orientation.Horizontal <br /> Orientation.Vertical',
        'Orientation.Horizontal',
        'Orientation of the divider',
      ],
      ['dashed', 'Boolean', 'false', 'Style of the divider, solid if false'],
    ],
  },
  Select: {
    required: [
      ['value', 'String', '', 'The text displayed currently in the select component'],
      ['onValueChange', '(String) -> Unit', '', 'Lambda to be invoked when input value changes'],
    ],
    props: [
      ['modifier', 'Modifier', 'Modifier', 'Modifier for the select component'],
      ['label', 'String', 'null', 'The text to display as the label above the select component'],
      ['optionalLabel', 'String', 'null', 'The text to display next to the label above the select component'],
      ['enabled', 'Boolean', 'true', 'Sets the select component in disabled mode when false'],
      ['readOnly', 'Boolean', 'false', 'Sets the select component in read-only mode'],
      ['placeholderText', 'String', 'null', 'Text hint that occupies the select component when it is empty'],
      ['helpText', 'String', 'null', 'The text to display as the help text below the select component'],
      ['isError', 'Boolean', 'false', 'Renders the select component in an invalid state'],
      ['items', 'List<String>?', 'null', 'The list of strings displayed in the select component menu'],
    ],
  },
};

export const iOS = {
  Alert: {
    required: [
      [
        'style',
        'Warp.AlertStyle',
        '',
        'The visual style of the alert, which dictates its colors, icons, and overall appearance.<br /> Use one of the predefined `AlertStyle` values: `.info`, `.warning`, `.critical`, or `.success`.',
      ],
      [
        'title',
        'String',
        '',
        "The primary text displayed at the top of the alert, used to capture the user's attention.",
      ],
      [
        'subtitle',
        'String',
        '',
        'Additional information displayed below the title, used to provide further context to the alert.',
      ],
    ],
    props: [
      [
        'link',
        '(title: String, action: () -> Void)?',
        'nil',
        'An optional tuple containing the title and action for a clickable link that appears below the subtitle.',
      ],
      [
        'primaryButton',
        '(title: String, action: () -> Void)?',
        'nil',
        'An optional tuple containing the title and action for a primary button.',
      ],
      [
        'secondaryButton',
        '(title: String, action: () -> Void)?',
        'nil',
        'An optional tuple containing the title and action for a secondary button.',
      ],
    ],
  },
  Badge: {
    required: [
      ['text', 'String', '', 'The text to display inside the badge.'],
      [
        'variant',
        'Warp.BadgeVariant',
        '',
        'The style of the badge.<br /> Use one of the predefined `BadgeVariant` values: `.info`, `.success`, `.warning`, `.negative`, `.disabled`, `.sponsored`, `.neutral`, or `.price`',
      ],
    ],
    props: [
      ['icon', 'Warp.Icon?', 'nil', 'The optional icon to display inside the badge.'],
      [
        'position',
        'Warp.BadgePosition',
        '.default',
        'The corner position for the badge.<br /> Use one of the predefined `BadgePosition` values: `.default`, `.topLeft`, `.topRight`, `.bottomLeft`, or `.bottomRight`',
      ],
    ],
  },
  Box: {
    required: [
      [
        'style',
        'Warp.BoxStyle',
        '',
        'Preferred style of box.<br /> Use one of the predefined `BoxStyle` values: `.neutral`, `.info`, `.bordered`',
      ],
      ['title', 'String?', '', "Text that will be shown as box's heading."],
      ['subtitle', 'String', '', 'Text that will be shown after title in the middle of the box.'],
    ],
    props: [
      ['shouldShowToolTipImage', 'Bool', 'true', 'Flag indicating tooltip image should be shown.'],
      [
        'link',
        '(title: String, action: () -> Void)?',
        'nil',
        'Tuple that will provide a title and an action for creating a link view below subtitle. <br />Passing `nil` will skip adding link view.',
      ],
      ['button', 'Warp.Button?', 'nil', 'A button view below link. <br />Passing `nil` will skip adding button view.'],
    ],
  },
  Broadcast: {
    required: [
      ['text', 'String', '', 'Text that will be shown in the broadcast'],
      [
        'broadcastEdge',
        'Warp.BroadcastEdge',
        '',
        'Edge from where the broadcast is presented.<br />Use one of the predefined `BroadcastEdge` values: `.top`, or `.bottom`',
      ],
      ['isPresented', 'Binding Bool', '', 'Binding to a boolean value that allows the broadcast to control dismissal'],
    ],
    props: [
      ['isDismissable', 'Bool', 'true', 'Determines if dismissable by the user or not. Will add a close button.'],
    ],
  },
  Button: {
    required: [
      ['title', 'String', '', 'The text to be displayed on the button'],
      ['action', '@escaping () -> Void', '', 'Action to be invoked when tapped'],
    ],
    props: [
      ['leadingIcon', 'Warp.Icon?', 'nil', 'Sets the button icon leading the title'],
      ['trailingIcon', 'Warp.Icon?', 'nil', 'Sets the button icon trailing the title'],
      [
        'type',
        'Warp.ButtonType',
        '.primary',
        'Controls the appearance of the button.<br />Use one of the predefined `ButtonType` values: `.primary`, `.secondary`, `.quiet`, `.critical`, `.criticalQuiet`, `.utility`, `.utilityQuiet`, or `.utilityOverlay`',
      ],
      [
        'size',
        'Warp.ButtonSize',
        '.big',
        'Sets the size of button.<br />Use one of the predefined `ButtonSize` values: `.big`, or `.small`',
      ],
      ['isEnabled', 'Bool', 'true', 'Indicating that interactions are enabled.'],
      ['fullWidth', 'Bool', 'false', 'Change the width behaviour of the button'],
      ['isLoading', 'Bool', 'false', 'Indicating whether the button is loading.'],
    ],
  },
  ButtonGroup: {
    required: [
      [
        'buttons',
        'Binding<[(title: String, isSelected: Bool)]>',
        '',
        "A binding to an array of tuples representing each button's title and selection state.",
      ],
    ],
    props: [
      [
        'singleSelect',
        'Bool',
        'false',
        'Specifies the selection behavior. If `true`, only one button can be selected at a time. If `false`, multiple buttons can be selected.',
      ],
      [
        'onSelectionChange',
        '(([(String, Bool)]) -> Void)?',
        'nil',
        'An optional closure that receives the updated button array whenever the selection changes.',
      ],
    ],
  },
  ButtonPill: {
    required: [
      ['type', 'Warp.ButtonPillType', '', 'The type of the button (`flat` or `overlay`).'],
      ['selected', 'Binding Bool', '', 'A binding to the selected state of the button.'],
    ],
    props: [],
  },
  Callout: {
    required: [['title', 'String', '', 'The text to be displayed']],
    props: [
      [
        'size',
        'Warp.CalloutSize',
        '.default',
        'The size of the Callout.<br />Use one of the predefined `CalloutSize` values: `.default`, or `.small`.',
      ],
      [
        'type',
        'Warp.CalloutType',
        '.inline',
        'The type of the Callout.<br />Use one of the predefined `CalloutType` values: `.inline`, or `.popover`.<br /> Popover accepts an optional onClose action, which will display a close button.',
      ],
      [
        'arrowEdge',
        'Edge',
        '.top',
        'The direction of the arrow.<br />Use one of the predefined `Edge` values: `.top`, `.leading`, `.bottom`, or `.trailing`',
      ],
    ],
  },
  Checkbox: {
    required: [
      [
        'options',
        'Binding<[Option]>',
        '',
        'The array of options that conform to `CheckboxOption`. This will provide `isSelected`, `label` and optional `extraContent` of `Checkbox`.',
      ],
      [
        'action',
        '@escaping () -> Void',
        '',
        'A closure that is executed when the `checkbox` is tapped. This can be mapped into the `onSelection` on `CheckboxGroup`',
      ],
    ],
    props: [
      ['title', 'String?', 'nil', 'An optional title for the `CheckboxGroup`.'],
      ['helpText', 'String?', 'nil', 'An optional help text displayed below the `CheckboxGroup`.'],
      [
        'style',
        'Warp.CheckboxStyle',
        '.default',
        'The style of the `CheckboxGroup` which will be passed to the style of each `Checkbox`.<br />Use one of the predefined `CheckboxStyle` values: `.default`, `.error`, or `.disabled`',
      ],
      [
        'axis',
        'Axis.Set',
        '.vertical',
        'Determines whether the list of checkboxes is aligned vertically or horizontally.<br />Use one of the predefined `Axis` values: `.horizontal`, or `.vertical`.',
      ],
      [
        'onSelection',
        '((Option, [Option]) -> Void)?',
        'nil',
        'A closure that will be triggered when an option is selected, providing the latest selected option and the updated list of options.',
      ],
      [
        'extraContent',
        'AnyView?',
        'nil',
        'An optional view that will be displayed beside the label. This is only for `Checkbox` and can be passed from the `Options` in `CheckboxGroup`.',
      ],
    ],
  },
  DatePicker: {
    required: [['date', 'Binding<Date>', '', 'A binding to the currently selected date.']],
    props: [
      [
        'range',
        'ClosedRange<Date>|PartialRangeFrom<Date>|PartialRangeThrough<Date>',
        '',
        'The range of selectable dates. If not provided, there is no date range restriction.',
      ],
    ],
  },
  Divider: {
    props: [
      [
        'orientation',
        '"horizontal" | "vertical"',
        '"horizontal"',
        'The orientation of the divider, either horizontal or vertical.',
      ],
      ['style', '"solid" | "dashed"', '"solid"', 'The line style of the divider, either solid or dashed.'],
    ],
  },
  Expandable: {
    required: [
      [
        'style',
        'Warp.ExpandableStyle',
        '',
        'The style of the `Expandable`. <br />Use one of the predefined `ExpandableStyle` values: `.default`, `.box`, or `.boxBleed`',
      ],
      ['title', 'String', '', 'The title for the top sticky part of the `Expandable`'],
    ],
    props: [
      [
        'expandableView',
        'View',
        '',
        'The view for the bottom hidden part of the `Expandable`. Either this or `subtitle` needs to be provided.',
      ],
      [
        'subtitle',
        'String',
        '',
        'The subtitle for the bottom hidden part of the `Expandable`. Either this or `expandableView` needs to be provided.',
      ],
      ['isAnimated', 'Bool', 'true', 'Determines if the `Expandable` will expand and collapse with animation'],
      ['isExpanded', 'Bool', 'false', 'Controls the state of the `Expandable`'],
    ],
  },
  IconView: {
    required: [['icon', 'Warp.Icon', '', 'The `Warp.Icon` to display.']],
    props: [
      ['size', 'Warp.IconSize', '.default', 'The size of the icon (`.small`, `.default`, `.large`, or `.custom`).'],
      ['color', 'Color', 'Warp.Token.icon', 'The color of the icon.'],
    ],
  },
  Modal: {
    required: [
      ['title', 'String', '', 'The main title text to be displayed.'],
      ['bodyText', 'String', '', 'The main body text content of the modal.'],
      ['isPresented', 'Binding Bool', '', 'A binding to control the visibility of the modal.'],
    ],
    props: [
      ['subtitle', 'String?', 'nil', 'An optional subtitle text to provide additional context or information.'],
      [
        'primaryButton',
        '(title: String, action: () -> Void)?',
        'nil',
        'An optional provider for defining the primary button.',
      ],
      [
        'secondaryButton',
        '(title: String, action: () -> Void)?',
        'nil',
        'An optional provider for defining the secondary button.',
      ],
      ['hasCloseButton', 'Bool', 'false', 'A Boolean value indicating whether a close button should be shown.'],
      [
        'dismissOnClickOutside',
        'Bool',
        'true',
        'Determines whether the component should be dismissed when the user clicks outside of it.',
      ],
      [
        'onDismiss',
        '(() -> Void)?',
        'nil',
        'Action to be executed when the Modal is dismissed, either by pressing the Close button or by clicking outside the Modal.',
      ],
    ],
  },
  PageIndicator: {
    required: [
      ['pageCount', 'Int', '', 'The total number of pages.'],
      ['selectedPage', 'Binding Int', '', 'Binding to an integer representing the currently selected page.'],
    ],
    props: [],
  },
  Pill: {
    required: [['text', 'String', '', 'The text to be displayed on the pill']],
    props: [
      [
        'icon',
        'Warp.Icon?',
        'nil',
        'Pill icon. If you provide `onClose` then the Pill will have a close button instead of this icon.',
      ],
      ['onTap', '() -> Void', '{}', 'The action that will trigger on pill tap.'],
      [
        'onClose',
        '(() -> Void)?',
        'nil',
        'If added will show a close button and replace any provided icon, and the action will trigger on pill close.',
      ],
      [
        'iconContentDescription',
        'String?',
        'nil',
        'The content description of the icon. Used for accessibility purposes. If not provided and we have `onClose` the default accessibility text is `Close` and for the `Warp.Icon` it is the accessibility of the icon.',
      ],
      ['style', 'Warp.PillStyle ', '.filter', 'The style of the pill (`.filter`, `.suggestion`)'],
    ],
  },
  Radio: {
    required: [
      [
        'selectedOption',
        'Binding Option',
        '',
        'A binding to the currently selected option. This will provide `isSelected` of `Radio`.',
      ],
      [
        'options',
        '[Option]',
        '',
        'The array of options that conform to `RadioOption`. This will provide `label` and optional `extraContent` of `Radio`.',
      ],
    ],
    props: [
      ['label', 'String?', 'nil', 'An optional text label for the `Radio` button.'],
      [
        'action',
        '@escaping () -> Void',
        '',
        'A optional closure that is executed when the `Radio` is tapped. This can be mapped into the `onSelection` on `RadioGroup`',
      ],
      ['title', 'String?', 'nil', 'An optional title for the `RadioGroup`.'],
      ['helpText', 'String?', 'nil', 'An optional help text displayed below the `RadioGroup`.'],
      [
        'style',
        'Warp.RadioStyle',
        '.default',
        'The style of the `RadioGroup` which will be passed to the style of each `Radio`.<br />Use one of the predefined `RadioStyle` values: `.default`, `.error`, or `.disabled`',
      ],
      [
        'axis',
        'Axis.Set',
        '.vertical',
        'Determines whether the list of radios is aligned vertically or horizontally.<br />Use one of the predefined `Axis` values: `.horizontal`, or `.vertical`.',
      ],
      [
        'onSelection',
        '((Option, Option) -> Void)?',
        'nil',
        'A closure that will be triggered when an option is selected, providing the old and newly selected options.',
      ],
      [
        'extraContent',
        'AnyView?',
        'nil',
        'An optional view that will be displayed beside the label. This is only for `Radio` and can be passed from the `Options` in `RadioGroup`.',
      ],
    ],
  },
  Select: {
    required: [
      ['selectedOption', 'Binding<Warp.Select.SelectorOption?>', '', 'Binding to the currently selected option.'],
      [
        'options',
        '[Warp.Select.SelectorOption]',
        '',
        'Array of options to display in the select dropdown. Should not be empty.',
      ],
    ],
    props: [
      ['placeholder', 'String', '""', 'Placeholder text shown when no option is selected.'],
      ['title', 'String', '""', 'Label text displayed above the select field.'],
      ['additionalInformation', 'String?', 'nil', 'Optional additional information displayed next to the label.'],
      [
        'style',
        'Warp.TextFieldStyle',
        '.default',
        'Visual style of the select field (default, disabled, readOnly, error).',
      ],
      ['helpText', 'String?', 'nil', 'Optional help text displayed below the select field.'],
    ],
  },
  Slider: {
    required: [
      ['value', 'Binding Double', '', 'Binding value to update the slider value'],
      ['range', 'ClosedRange Double', '', 'Defines the range for the slider'],
    ],
    props: [
      ['step', 'Double', '1.0', 'The increment by which the slider value should change.'],
      ['showTooltips', 'Bool', 'true', 'Whether to show tooltips above the thumbs.'],
      ['showRange', 'Bool', 'false', 'Whether to show min/max range indicators.'],
      ['enabled', 'Bool', 'true', 'Whether the slider is enabled or disabled.'],
      [
        'valueFormatter',
        '(Double) -> String',
        'nil',
        'A closure that formats the displayed value. Defaults to a simple string conversion.',
      ],
      [
        'onEditingChanged',
        '((Double) -> Void)?',
        'nil',
        "A closure that is called when the slider's thumb is released, passing the final value as an argument.",
      ],
      [
        'selectedItem',
        'Binding<T> (where T: LosslessStringConvertible & Equatable)',
        '—',
        'For discrete sliders: a binding to the currently selected item from the list.',
      ],
      [
        'items',
        'Array<T> (where T: LosslessStringConvertible & Equatable)',
        '—',
        'For discrete sliders: an array of items to choose from.',
      ],
    ],
  },
  RangeSlider: {
    required: [
      ['range', 'Binding<ClosedRange<Double>>', '', 'A binding to the current selected range of the slider.'],
      ['bounds', 'ClosedRange<Double>', '', 'The minimum and maximum values for the slider.'],
    ],
    props: [
      ['step', 'Double', '1.0', 'The increment by which the slider value should change.'],
      ['showTooltips', 'Bool', 'true', 'Whether to show tooltips above the thumbs.'],
      ['showRange', 'Bool', 'false', 'Whether to show min/max range indicators.'],
      ['enabled', 'Bool', 'true', 'Whether the slider is enabled or disabled.'],
      [
        'selectedItems',
        'Binding<[T]>',
        '',
        'For discrete sliders: a binding to the currently selected items from the list. T must conform to LosslessStringConvertible & Equatable.',
      ],
      [
        'items',
        'Array<T>',
        '',
        'For discrete sliders: an array of items to choose from. T must conform to LosslessStringConvertible & Equatable.',
      ],
      [
        'valueFormat',
        '(T) -> String',
        'nil',
        'For discrete sliders: a closure that formats the displayed value. Defaults to a simple string conversion.',
      ],
    ],
  },
  Spinner: {
    required: [],
    props: [
      [
        'size',
        'Warp.SpinnerSize',
        '.default',
        'Size of the `Spinner`.<br />Use one of the predefined `SpinnerSize` values: `.small`, `.default`, `.large`, or `.custom`.',
      ],
      ['duration', 'CGFloat', '1', 'Duration of Spinner animation'],
      ['lineWidth', 'CGFloat', '3', 'The thickness of the `Spinner`'],
    ],
  },
  StepIndicator: {
    required: [
      [
        'stepModel',
        'Warp.StepIndicatorModel',
        '',
        'An array of `Warp.StepIndicatorItem` objects which contains `title`, `description` and `progress` of the steps, the first two are strings and `progress` can be `incomplete`, `inProgress`, or `complete` with default value as `incomplete`.',
      ],
    ],
    props: [
      [
        'layoutOrientation',
        'LayoutOrientation',
        '.vertical',
        'The orientation of the step indicator. <br />Use one of the predefined `LayoutOrientation` values: `.vertical`, or `.horizontal`.',
      ],
    ],
  },
  Switch: {
    required: [['isOn', 'Binding Bool', '', 'Binding to a Boolean value indicating whether the switch is on or off.']],
    props: [
      [
        'state',
        'Warp.SwitchState',
        '.default',
        'The state of the switch. <br />Use one of the predefined `SwitchState` values: `.default`, or `.disabled`',
      ],
    ],
  },
  Tabs: {
    required: [
      ['tabs', '[Warp.TabItem]', '', 'An array of `Warp.TabItem` objects to display as selectable tabs.'],
      ['selectedIndex', 'Binding Int', '', 'A binding to the index of the currently selected tab.'],
    ],
    props: [],
  },
  Text: {
    required: [
      ['text', 'String', '', 'The text to be displayed'],
      [
        'style',
        'Warp.TextStyle',
        '',
        'Sets the appearance of the text - font and size. <br />Use one of the predefined `TextStyle` values: `.display`, `.title1`, `.title2`, `.title3`, `.title4`, `.title5`, `.title6`, `.preamble`, `.body`, `.bodyStrong`, `.caption`, `.captionStrong`, `.detail`, or `.detailStrong`',
      ],
    ],
    props: [['color', 'Color', 'Warp.Token.text', 'A solid color for the text.']],
  },
  TextArea: {
    required: [['text', 'Binding String', '', 'Binding to the text content.']],
    props: [
      ['title', 'String', 'empty', 'The main title text to display.'],
      ['additionalInformation', 'String?', 'nil', 'Optional text to display after the title.'],
      ['tooltipContent', 'AnyView?', 'nil', 'An optional view to display when the tooltip icon is tapped.'],
      ['placeholder', 'String', 'empty', 'Text to display when the text area is empty.'],
      [
        'style',
        'Warp.TextAreaStyle',
        '.default',
        'The style of the text area. <br />Use one of the predefined `TextAreaStyle` values: `.default`, `.disabled`, `.error`, or `.readOnly`',
      ],
      ['helpText', 'String?', 'nil', 'Optional `String` to display below the text area.'],
      ['minHeight', 'CGFloat', '88', 'Minimum height for the text area.'],
    ],
  },
  TextField: {
    required: [['text', 'Binding String', '', 'Binding to the text content.']],
    props: [
      ['title', 'String', 'empty', 'The main title text to display.'],
      ['additionalInformation', 'String?', 'nil', 'Optional text to display after the title.'],
      ['tooltipContent', 'AnyView?', 'nil', 'An optional view to display when the tooltip icon is tapped.'],
      ['leftIcon', 'Warp.Icon?', 'nil', 'An optional `Warp.Icon` displayed on the left side of the text field.'],
      ['prefix', 'String?', 'nil', 'An optional string displayed before the text input.'],
      ['placeholder', 'String', 'empty', 'Text to display when the text field is empty.'],
      ['suffix', 'String?', 'nil', 'An optional string displayed after the text input.'],
      ['rightIcon', 'Warp.Icon?', 'nil', 'An optional `Warp.Icon` displayed on the right side of the text field.'],
      ['rightIconAction', '() -> Void?', 'nil', 'An optional action for right icon'],
      [
        'style',
        'Warp.TextFieldStyle',
        '.default',
        'The style of the text field. <br />Use one of the predefined `TextFieldStyle` values: `.default`, `.disabled`, `.error`, or `.readOnly`',
      ],
      ['helpText', 'String?', 'nil', 'Optional `String` to display below the text field.'],
    ],
  },
  Toast: {
    required: [
      [
        'style',
        'Warp.ToastStyle',
        '',
        'Sets the style and icon of the `Toast`.  <br />Use one of the predefined `ToastStyle` values: `.error`, `.success`, or `.warning`',
      ],
      ['title', 'String', '', 'The title to be displayed in the `Toast`'],
      [
        'toastEdge',
        'Warp.ToastEdge',
        '',
        'The position of the toast to be displayed. <br />Use one of the predefined `ToastEdge` values: `.top`, or `.bottom`',
      ],
      ['isPresented', 'Binding Bool', '', 'The binding to control the visibility'],
    ],
    props: [
      [
        'duration',
        'Warp.Toast.Duration.short <br /> Warp.Toast.Duration.long <br /> Warp.Toast.Duration.custom(interval:) ',
        '.short',
        'Duration the Toast is shown',
      ],
    ],
  },
  Tooltip: {
    required: [['title', 'String', '', 'The text to be displayed']],
    props: [
      [
        'arrowEdge',
        'Edge',
        '.top',
        'The direction of the arrow. <br />Use one of the predefined `Edge` values: `.top`, `.leading`, `.bottom`, or `.trailing`',
      ],
    ],
  },
};
