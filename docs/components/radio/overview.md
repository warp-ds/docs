# Radio - Overview
Radios allow users to select a single option from a list.

<ComponentsStatus />

## Example
<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="t4">Default</h3>
        <w-radio-group label="Radio Group" name="default-radio">
            <w-radio value="1">One</w-radio>
            <w-radio value="2">Two</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="t4">With selection</h3>
        <w-radio-group label="Radio Group" name="selected-radio">
            <w-radio value="1" checked>One (selected)</w-radio>
            <w-radio value="2">Two</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="t4">Disabled</h3>
        <w-radio-group label="Disabled Radio Group" name="disabled-radio">
            <w-radio value="1" disabled>One</w-radio>
            <w-radio value="2" disabled checked>Two (selected)</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="t4">Invalid</h3>
        <w-radio-group label="Invalid Radio Group" name="invalid-radio" invalid>
            <w-radio value="1" checked>One</w-radio>
            <w-radio value="2">Two</w-radio>
        </w-radio-group>
    </div>
</style-isolate>

<component-questions />