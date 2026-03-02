# Button - Overview
Buttons initiate events or actions within a page, informing users of what to expect next.

<ComponentsStatus />

## Example
<ThemeSwitcher />
<button-example />

<style-isolate>
    <div class="flex flex-wrap gap-16">
        <w-button variant="primary">Primary</w-button>
        <w-button variant="primary" loading>Loading</w-button>
        <w-button variant="utility">Utility</w-button>
        <w-button variant="secondary">Secondary</w-button>
        <w-button variant="secondary" quiet>Secondary Quiet</w-button>
        <w-button variant="negative">Negative</w-button>
        <w-button variant="negative" quiet>Negative Quiet</w-button>
        <w-button variant="utility" quiet><w-icon name="Share" size="small"></w-icon></w-button>
        <w-button variant="link">Link</w-button>
        <w-button full-width variant="primary">Primary full width</w-button>
    </div>
</style-isolate>

<component-questions />