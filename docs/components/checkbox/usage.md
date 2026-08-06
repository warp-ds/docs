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
    <img src="/components/checkbox/usage-options-selectionstate.svg" alt="A list of three selects showing selection states: not selected, selected, indeterminate" />
  </div>

  <div>
  Checkboxes have three states of selection: Not selected (the default state), Selected and Indeterminate.
  Indeterminate is used when there are nested levels of checkboxes, and indicates that there are some checkboxes selected at the level below. Clicking this subsequently selects all of those checkboxes.
    
  </div>
</div>

<component-questions />
