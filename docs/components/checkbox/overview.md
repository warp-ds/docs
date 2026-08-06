# Checkbox - Overview

Checkboxes allow users to select one or more options from a number of choices.

<ComponentsStatus />

Checkboxes allow users to toggle an option on or off, or to select one or more items from a list. It typically combines a input (box) with a label that describes the action or choice. They can be used alone or group provide immediate visual feedback, and enhance accessibility when implemented with proper labels, grouping, and states.

Checkboxes can be used alone or in a list (checkbox group).

Related components: [Radio](../radio/overview.md), [Switch](../switch/overview.md)

## Example
<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="t4">Single Checkbox</h3>
        <w-checkbox name="single" value="yes">Accept terms</w-checkbox>
    </div>
    <div>
        <h3 class="t4">Checkbox Group</h3>
        <w-checkbox-group label="Notification preferences" name="notifications" help-text="Select all that apply">
            <w-checkbox value="email">Email</w-checkbox>
            <w-checkbox value="sms">SMS</w-checkbox>
            <w-checkbox value="push">Push notifications</w-checkbox>
        </w-checkbox-group>
    </div>
    <div>
        <h3 class="t4">Checked by default</h3>
        <w-checkbox checked>Already checked</w-checkbox>
    </div>
    <div>
        <h3 class="t4">Disabled</h3>
        <w-checkbox disabled>Cannot change</w-checkbox>
    </div>
    <div>
        <h3 class="t4">Invalid</h3>
        <w-checkbox invalid>There is a problem</w-checkbox>
    </div>
    <div>
        <h3 class="t4">Indeterminate</h3>
        <w-checkbox indeterminate>Partially selected</w-checkbox>
    </div>
</style-isolate>

## Anatomy

::: image-block
![Diagram of a checkbox component anatomy. The checkbox component is made up of a small square rectangle (the checkbox) and a line of text (the label) paired together horizontally with small padding between them.](/components/checkbox/overview-anatomy.svg)
:::


**1. Input** Indicates the appropriate state. Deselected by default.

**2. Label** Describes the information you want to select or deselect.

<br>

<component-questions />
