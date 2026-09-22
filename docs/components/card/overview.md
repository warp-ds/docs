# Card - Overview

Card groups related information and actions in a distinct surface.

See also [Box](/components/box/overview.md), [Button](/components/button/overview.md), [Radio](/components/radio/overview.md), and [Checkbox](/components/checkbox/overview.md).

<ComponentsStatus />

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

## General

Use Card when the content forms one recognisable item, such as a listing, a recommendation, or a guide. A collection of cards helps users scan summaries and decide which item to open or act on.

The component supplies the surface and its visual treatment. You supply the content, padding, layout, headings, links, and controls. A card can contain information without being interactive; a shadow or border does not make it a button.

Keep three decisions separate:

- **Grouping:** Decide which information belongs to the same item.
- **Navigation:** Use a link when users open another page or resource.
- **Selection or action:** Use a labelled control when users choose an item or change something on the current page.

For a simple section of related content, [Box](/components/box/overview.md) may be enough. For choices that need only a short label, use [Radio](/components/radio/overview.md) or [Checkbox](/components/checkbox/overview.md) directly.

## Visual treatments and states

| Treatment or state | Purpose |
| --- | --- |
| Elevated | The default shadow separates the card from its background. Use it when individual items need a clear boundary. |
| Flat | A bordered surface gives a quieter treatment. Keep enough separation between neighbouring cards. |
| Selected | Highlights a chosen item. Keep it synchronised with the actual selection control and application state. |
| Hover and focus | Help users identify an interactive target. Preserve the focus indicator on the link or control that receives focus. |

Selected and focused mean different things: selection records a choice, while focus shows where the next keyboard action will go. A selected appearance alone does not establish an accessible selection control. Read the [implementation limits](/components/card/accessibility.md#elements) before using the Elements `selected` or `clickable` properties.

Card has no dedicated loading, error, or disabled property. Communicate these conditions through the content and the relevant controls, for example by explaining why a listing is unavailable.

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

## Design and implementation

The [Figma Card](https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf?node-id=1379-39480) includes editable heading, detail, body, and link text, with optional image, badge, and button content. The Web Card APIs accept composed content rather than these named text properties.

<div class="table-container" role="region" aria-label="Card implementation comparison" tabindex="0">

| Concept | Elements | React and Vue |
| --- | --- | --- |
| Flat surface | `flat` | `flat` |
| Selected appearance | `selected` | `selected` |
| Content | Slotted HTML | Children in React; slot content in Vue |
| Interaction | Links and controls inside the card; `clickable` has accessibility limits | Links, controls, or the framework's `Clickable` helper |

</div>

The examples use Elements 2.11.0. Framework interaction differs; consult [Accessibility](/components/card/accessibility.md) and the [Elements](/components/card/frameworks/elements.md), [React](/components/card/frameworks/react.md), or [Vue](/components/card/frameworks/vue.md) documentation for the implementation you use.

<component-questions />
