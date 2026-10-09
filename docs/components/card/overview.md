# Card - Overview

Card groups related information and actions in a distinct surface.

See also [Box](/components/box/overview.md), [Button](/components/button/overview.md), [Radio](/components/radio/overview.md), and [Checkbox](/components/checkbox/overview.md).

<ComponentsStatus />

## General

Use Card when content forms one recognisable item, such as a listing, recommendation, or guide. A collection of cards helps users scan summaries and decide which item to open or act on.

Card supplies the surface and its visual treatment. You supply the content, padding, layout, headings, links, and controls. A Card can contain information without being interactive; a shadow or border does not make it a button.

- **Grouping:** Keep information about one item together.
- **Navigation:** Use a link when users open another page or resource.
- **Selection or action:** Use a labelled control when users choose an item or change something on the current page.

Use [Box](/components/box/overview.md) for a section that does not represent an item. If a choice only needs a short label, such as “Pick up” or “Ship to me”, use [Radio](/components/radio/overview.md) or [Checkbox](/components/checkbox/overview.md) directly. Use Card when each choice needs supporting details, such as a price or delivery terms.

## Visual treatments and states

| Treatment or state | Purpose |
| --- | --- |
| Elevated | The default shadow separates the Card from its background. |
| Flat | A bordered surface gives a quieter treatment. |
| Selected styling | Card has a visual selected property, but in Elements 2.11.0 it introduces an unnamed checked control. For the choice examples below, use labelled radios or checkboxes and leave Card's `selected` property unset. |
| Hover and focus | Help users identify the interactive link or control and its focus indicator. |

Selected and focused mean different things: selection records a choice, while focus shows where the next keyboard action will go. Card has no dedicated loading, error, or disabled property; communicate these conditions through its content and controls. Read the [accessibility guidance](/components/card/accessibility.md) before using `clickable` in Elements.

## Examples

### Elevated and flat

Both cards contain the same content and title link. The elevated treatment adds a shadow; the flat treatment uses a border.

<ThemeSwitcher />

<style-isolate>
    <div class="grid gap-24 sm:grid-cols-2">
        <div>
            <h3 class="h4 mb-16">Elevated</h3>
            <w-card>
                <article class="relative p-24">
                    <h4 class="h3 mb-8"><a class="underline" href="/docs/components/radio/overview">Radio</a></h4>
                    <p class="text-s s-text-subtle mb-8">Form controls</p>
                    <p class="mb-0">Let users choose one option from a short, visible list.</p>
                </article>
            </w-card>
        </div>
        <div>
            <h3 class="h4 mb-16">Flat</h3>
            <w-card :flat.attr="true">
                <article class="relative p-24">
                    <h4 class="h3 mb-8"><a class="underline" href="/docs/components/radio/overview">Radio</a></h4>
                    <p class="text-s s-text-subtle mb-8">Form controls</p>
                    <p class="mb-0">Let users choose one option from a short, visible list.</p>
                </article>
            </w-card>
        </div>
    </div>
</style-isolate>

### Separate interactions

The title opens the Radio documentation. The checkbox independently marks the guide as saved in this example. The surrounding Card has no click action.

<style-isolate>
    <w-card style="max-width: 400px;">
        <article class="relative p-24">
            <h3 class="h3 mb-8"><a class="underline" href="/docs/components/radio/overview">Radio</a></h3>
            <p class="text-s s-text-subtle mb-8">Form controls</p>
            <p class="mb-16">Let users choose one option from a short, visible list.</p>
            <w-checkbox name="saved-guide" value="radio">Save this guide</w-checkbox>
        </article>
    </w-card>
</style-isolate>

### Choice cards

Use a named radio group when people choose one Card, or checkboxes when they may choose several. Keep the controls visible and let each Card's supporting text explain the option.

<style-isolate>
    <div class="grid gap-24 sm:grid-cols-2">
        <div>
            <h3 class="h4 mb-16">Choose one</h3>
            <w-radio-group label="Delivery method" name="card-delivery">
                <div class="grid gap-16">
                    <w-card flat>
                        <div class="p-16">
                            <w-radio value="pickup">Pick up</w-radio>
                            <p class="mt-8 mb-0">Collect your order for free.</p>
                        </div>
                    </w-card>
                    <w-card flat>
                        <div class="p-16">
                            <w-radio value="shipping">Ship to me</w-radio>
                            <p class="mt-8 mb-0">Delivered to your address.</p>
                        </div>
                    </w-card>
                </div>
            </w-radio-group>
        </div>
        <div>
            <h3 class="h4 mb-16">Choose several</h3>
            <fieldset>
                <legend class="mb-16">Guides to save</legend>
                <div class="grid gap-16">
                    <w-card flat>
                        <div class="p-16">
                            <w-checkbox name="card-guides" value="radio">Radio guide</w-checkbox>
                            <p class="mt-8 mb-0">Choosing one option from a group.</p>
                        </div>
                    </w-card>
                    <w-card flat>
                        <div class="p-16">
                            <w-checkbox name="card-guides" value="checkbox">Checkbox guide</w-checkbox>
                            <p class="mt-8 mb-0">Choosing independent options.</p>
                        </div>
                    </w-card>
                </div>
            </fieldset>
        </div>
    </div>
</style-isolate>

## Anatomy

::: image-block
<img src="/components/card/overview-anatomy.png" alt="A Card for an oak dining table, with numbered callouts for its surface, title link, supporting detail, summary, and Save item action." style="max-width: 384px;" />
:::

1. **Surface:** Groups the content with a background, rounded corners, and an elevated or flat boundary.
2. **Title and primary link:** Identifies the item and, in this example, opens its details.
3. **Supporting detail:** Adds short facts that help people compare items, such as price and location.
4. **Summary:** Gives enough context to decide whether to open the item.
5. **Secondary action, optional:** Acts on this item independently of the primary link.

The surface belongs to Card. The other parts are content you compose inside it; they are not fixed slots or required properties. Images and badges are optional too. Include them when they help users identify or compare the item.

<component-questions />
