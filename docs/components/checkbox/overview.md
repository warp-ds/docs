# Checkbox - Overview
Checkboxes allow users to select one or more options from a number of choices.

<ComponentsStatus />

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

<component-questions />