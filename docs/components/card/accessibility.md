# Card - Accessibility

Card groups content about one item and its available actions. The content and controls inside it must explain what the item is, what users can do, and whether a choice is selected.

<ComponentsStatus />

## Structure and interaction

Give each Card a meaningful heading, such as the listing title. Choose its heading level from the surrounding page structure. Use a list for a collection of results, and keep the reading order consistent with the visual order.

Use the control that matches the task: a link for navigation, a [Button](/components/button/overview.md) for an action, a [Checkbox](/components/checkbox/overview.md) for an independent choice, or [Radio](/components/radio/overview.md) for one choice from a group. Card styling does not replace these semantics.

Keep separate actions independently reachable. A title link and a “Save listing” button need separate names, focus indicators, and activation targets. Do not nest buttons or form controls inside a link, or place them inside an Elements Card with `clickable`. The whole-card handler can receive keyboard events from its children.

## Keyboard

A Card containing native controls follows those controls' keyboard behaviour. The Card wrapper should not add an extra tab stop for the same action.

| Key | Behaviour with native controls inside a Card |
| --- | --- |
| `Tab` / `Shift` + `Tab` | Moves between available controls in document order, then out of the Card. A radio group normally has one tab stop. |
| `Enter` | Follows a focused link or activates a focused button. |
| `Space` | Activates a focused button or changes a focused checkbox. Selects a focused radio option. |
| Arrow keys | Move between options in a native radio group. They do not navigate a collection of ordinary Cards. |

These interactions follow the [link](https://www.w3.org/WAI/ARIA/apg/patterns/link/), [button](https://www.w3.org/WAI/ARIA/apg/patterns/button/), [checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/), and [radio group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) patterns. Radio focus entry can vary between browsers when no option is selected; test the group in your supported browsers.

Card does not manage focus after an action. Keep focus on the active control when saving an item in place. If an action opens a dialog or removes the focused Card, the application must move focus to an appropriate destination. Disable an unavailable action through its actual control; changing the Card's appearance does not prevent activation.

### Elements `clickable`

In Elements 2.11.0, `clickable` adds a tab stop to an internal container. `Enter` or `Space` dispatches a click on the Card; the application supplies the action and updates `selected`. This does not provide radio-group arrow navigation or mutual exclusion. The implementation also has naming and state limitations described below, so prefer a named native control inside a non-clickable Card.

## Names, roles, and selected state

The primary control's accessible name should identify its destination or action. Use “Apartment in Grünerløkka” as the listing link rather than repeated “Read more” links. Give icon buttons names such as “Save apartment in Grünerløkka”, and include the visible wording in any expanded accessible name so voice control users can refer to it. See [Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

Use a visible group label for related choices and associate it with the group. Each radio or checkbox needs its own label and programmatic checked state. Keep that state synchronised with the application's stored selection and any Card highlight. Supporting descriptions should remain readable; associate essential help with the relevant control when it is needed to make a choice.

Describe images that add information. Use an empty text alternative for a decorative image that adds nothing to the adjacent content. Avoid repeating the listing title through an image, a heading link, and another equivalent link. See the [WAI image guidance](https://www.w3.org/WAI/tutorials/images/decorative/).

A screen reader should expose each control's name, role, and applicable state. A coloured border alone cannot supply these details. The [Name, Role, Value requirement](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) applies to the interactive controls, and actual announcements depend on the browser and screen reader.

## Framework differences and limitations

The details below were checked in Elements 2.11.0, Vue 2.3.0, and React 2.3.0. Card’s support matrix lists these Web implementations; it does not list a native iOS or Android Card.

### Elements

A plain `w-card` supplies a visual container and a slot. You supply headings, links, controls, and any list or article structure.

The current implementation separates keyboard focus from the hidden control that carries its state:

- With `clickable`, the focusable internal container has no explicit control role or accessible name. A separate visually hidden button has the translated name “Select” and `aria-pressed`, but is removed from the Tab sequence. The visible Card title is not connected to that button's name.
- With `selected` and without `clickable`, Card inserts an unnamed, visually hidden checkbox marked checked and disabled. This does not name or implement the actual choice, and can duplicate a checkbox or radio supplied in the content.
- Card has no disabled property or selection-group behaviour. Setting `aria-disabled` on the host does not stop its click handler or keyboard handler.

For navigation and actions, leave `clickable` and `selected` unset and use a named link or button inside the Card. For choices, use a labelled radio or checkbox and keep `selected` unset in this version to avoid the additional unnamed control. Adding `aria-label` to the Card host does not label the separate internal button. These limitations are visible in the [Elements Card source](https://github.com/warp-ds/elements/blob/1e9c469c2e6b2a0d4a82417967d696ade7e2235b/packages/card/card.ts).

### React and Vue

React and Vue Card render a `div` by default. Their `selected` property changes styling; it does not add checked or pressed semantics or keyboard handling. Changing the wrapper through `as` does not supply a missing control label or selection model.

Their Clickable helpers render a native link when given `href`, a button for an action, or a native radio or checkbox for selection. A decorative toggle indicator does not replace the interactive input. See the [React Card source](https://github.com/warp-ds/react/blob/1a5d50b1752c2c6a3cff7aecb6c7b9e12aca49b7/packages/card/src/component.tsx) and the [Vue Card source](https://github.com/warp-ds/vue/blob/e4c3675a4fd241e9ed1092f89d5afe5ba4126e04/components/card/w-card.vue).

React's Clickable selection branch uses an uncontrolled input and does not pass through `checked` or `defaultChecked`. Use a controlled radio or checkbox when the choice must reflect initial selection, form resets, or updates elsewhere in the application. Keep the actual input state and the Card's `selected` styling consistent. See the [React Clickable source](https://github.com/warp-ds/react/blob/1a5d50b1752c2c6a3cff7aecb6c7b9e12aca49b7/packages/_helpers/clickable.tsx).

## Visual accessibility

Keep focus visible on the control users are operating. Card content is clipped at the rounded boundary, so leave room for focus outlines and test controls near the edges. Hover and selected styling must not be the only indication of keyboard focus. See [Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html).

- **Text and state:** Use at least 4.5:1 contrast for content text, or 3:1 for large text as defined by WCAG. Indicators needed to identify a control or its state need 3:1 contrast against adjacent colours. A purely decorative Card shadow is not subject to the same requirement. See [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).
- **Colour:** Show selection through a checked control or visible text as well as colour. Keep prices, availability, and other essential information readable in every state. See [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).
- **Resizing:** Let titles and supporting content wrap at 200% text enlargement. Reflow the collection at a width of 320 CSS pixels without requiring horizontal scrolling to read each Card. Avoid fixed heights that crop content. See [Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) and [Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
- **Targets:** Check every action, including small icon buttons. WCAG 2.2 AA requires targets of at least 24×24 CSS pixels, subject to its spacing and other exceptions. A large Card does not enlarge a separate icon button's target. See [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- **Motion:** If you add scaling, movement, or animated rearrangement, respect the user's reduced-motion preference. Card does not manage application animations. See [Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html), a WCAG AAA criterion.

## Testing

Test the composed Card in its actual page, with realistic content and every available action.

- **Keyboard:** Tab through the collection in both directions. Activate each link, button, and choice using its expected keys. Check that an action runs once, selection remains consistent, and focus stays visible after saving, navigation, or removal.
- **Screen reader:** Test with the browser and screen reader combinations your product supports, for example NVDA with Chrome and VoiceOver with Safari. Read the collection, then navigate by headings and controls. Confirm distinct names, correct roles and selection states, meaningful group labels, and no unexplained “Select” or unnamed checked controls.
- **Pointer and touch:** Activate each target and the space around it. Confirm that the primary target does not cover another action, and saving an item does not follow its link.
- **Visual settings:** Check long titles, 200% text enlargement, a 320 CSS-pixel viewport, light and dark themes, and forced colours. Verify focus, selected indicators, wrapping, and the contrast of any custom colours.
- **State changes:** Check initial selection, external updates, form reset, unavailable actions, and removal of a focused item. The control state, visible state, and stored value must agree.
- **Automated checks:** Run an accessibility scanner for missing names, invalid roles, and contrast issues, then complete the manual checks. A scan cannot establish understandable announcements or correct action and focus behaviour.

<component-questions />
