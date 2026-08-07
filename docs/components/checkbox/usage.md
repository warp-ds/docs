# Checkbox - Usage

<ComponentsStatus />

## Guidelines

### Use Checkbox when
- toggling an option on/off.
- selecting multiple values from several options.
- a collection of options share context.

### Avoid Checkboxes when

- you need to restrict selection to a single option. Use a Radio button, Switch or Select instead. 
- a checkbox requires a submission step (e.g., clicking "Save" or "Submit"), instead use Switch to trigger immediate state change (no save required). 

## Options

### Selection states

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/checkbox/usage-options-selectionstate.svg" alt="A list of three checkboxes showing selection states: not selected, selected, indeterminate" />
  </div>

  <div>
  Checkboxes have three states of selection: Not selected (the default state), Selected and Indeterminate.
  Indeterminate is used when there are nested levels of checkboxes, and indicates that there are some checkboxes selected at the level below. Clicking this subsequently selects all of those checkboxes.
    
  </div>
</div>

### Label

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/checkbox/usage-options-label.svg" alt="A list of two checkboxes, one with, and one without a label" />
  </div>

  <div>
  Checkboxes should always have a label. When the label is not defined, a checkbox becomes standalone. Standalone checkboxes are only used when their connection to other content is clear and they give sufficient context — for example, in application panels.
    
  </div>
</div>

### Error

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/checkbox/usage-options-error.svg" alt="A list of three error checkboxes shown in the interactive states: not selected, selected, indeterminate" />
  </div>

  <div>
  Checkboxes can be marked as having an error to show that a selection needs to be made in order to move forward, or that a selection that was made is invalid. For example, in a form that requires a user to acknowledge legal terms before proceeding, the checkbox would show an unchecked error to communicate that it needs to be selected.
    
  </div>
</div>

### Disabled

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/checkbox/usage-options-disabled.svg" alt="A list of three disabled checkboxes shown in the interactive states: not selected, selected, indeterminate" />
  </div>

  <div>
  A checkbox in a disabled state shows that a selection exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.
    
  </div>
</div>

### Checkbox group

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/checkbox/usage-checkboxgroup.svg" alt="A list of three checkboxes in a list with a label above them" />
  </div>

  <div>
  Checkboxes can be used alone or in a list (checkbox group). When used in a group they must include a label to describe what the choices are related to.
    
  </div>
</div>

## Behaviour

### Interactive label

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/checkbox/usage-behaviour-interactivelabel.svg" alt="A checkbox with a hand cursor icon pointing at the label to visualise the hover state" />
  </div>

  <div>
  The label is included in the interactive click/touch area of the checkbox. Clicking/tapping on the checkbox or label will select/deselect the checkbox.
    
  </div>
</div>

### Keyboard focus

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/checkbox/usage-behaviour-keyboardfocus.svg" alt="A list of three focused checkboxes shown in the interactive states: not selected, selected, indeterminate" />
  </div>

  <div>
  Checkboxes has a visible focus ring when in focus. This only becomes visible when landing on a checkbox when using a keyboard to navigate through page elements.
    
  </div>
</div>

### Text overflow

<div class="grid grid-cols-2 gap-24 py-16">
  <div>
    <img src="/components/checkbox/usage-behaviour-textoverflow.svg" alt="A checkboxes with long label text that wraps over two lines" />
  </div>

  <div>
  When the label is too long for the horizontal space available, it wraps to form another line.
    
  </div>
</div>

### Checkbox or radio?

<DoDont>
<Do imgurl="/docs/components/checkbox/usage-behaviour-checkboxorradio-do.svg">

Checkboxes and radio buttons are not interchangeable. A set of checkboxes should be used to select as many options as desired (or none). 

</Do>
<Do not imgurl="/docs/components/checkbox/usage-behaviour-checkboxorradio-dont.svg">

A set of radio buttons should be used to select only a single option from a list of mutually exclusive options.

</Do>
</DoDont>
    
  </div>
</div>

### Label groups of related checkboxes

<DoDont>
<Do imgurl="/docs/components/checkbox/usage-behaviour-labelgroups-do.svg">

Always have a clear label that describes what the list of options represents and guides users what to do. This is important for accessibility, since a screen reader will read the label before each option. 

</Do>
<Do not imgurl="/docs/components/checkbox/usage-behaviour-labelgroups-dont.svg">

Don’t make the user have to guess or assume what the information means. 

</Do>
</DoDont>

### Representing mixed values

<DoDont>
<Do imgurl="/docs/components/checkbox/usage-behaviour-labelgroups-do.svg">

When a checkbox presents multiple values that are not identical, the checkbox should appear as indeterminate. Any subsequent click or tap should select the checkbox, and update all values. Another click or tap after that should deselect the checkbox, and update all values to be not selected.
 
</Do>
<Do not imgurl="/docs/components/checkbox/usage-behaviour-labelgroups-dont.svg">

Don’t forget to make sure that nested checkbox lists have a connection between the parent checkbox and the child options.  

</Do>
</DoDont>


<component-questions />
