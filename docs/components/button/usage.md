# Button - Usage

Buttons let users trigger an action, such as saving a form, publishing an ad, or deleting an item.

See also [Button group](/components/button-group/overview.md), [Button pill](/components/button-pill/overview.md), and [Link](/components/link/overview.md).

<ComponentsStatus />

## Guidelines

### When to use

- Use Button for an action in the current page, view, dialog, or flow.
- Use a primary Button for the main action within a local decision area.
- Use loading when an action takes long enough that users need confirmation that it started.
- Use full width when the layout is narrow and the larger target improves scanning and activation.

### When not to use

- For navigation to another page or location, use [Link](/components/link/overview.md). Do not style a navigation link as a Button just to make it prominent.
- For several related actions that need consistent spacing and wrapping, use [Button group](/components/button-group/overview.md).
- For an icon-only utility action, use [Button pill](/components/button-pill/overview.md).
- Do not use a Button as an on/off setting. Use [Switch](/components/switch/overview.md) or [Checkbox](/components/checkbox/overview.md), depending on when the change takes effect.

## Action hierarchy

Make the most likely next action easiest to find without hiding reasonable alternatives.

- Use one primary Button within a local action group. A page may contain several sections, but each decision area should have a clear hierarchy.
- Use Secondary for an alternative action and Quiet for a low-emphasis action.
- Use Utility variants for tools such as filtering, sorting, or changing the view, not for the main task completion action.
- Reserve Negative or Negative quiet for destructive or difficult-to-reverse outcomes.
- Keep the visual order stable while loading, validating, or displaying an error. Do not move the primary action after users have located it.

### Give actions a clear hierarchy

<DoDont>
<Do imgurl="/docs/components/button/DoDonts/usage-action-hierarchy-do.png" imgalt="A secondary Save draft Button followed by one primary Publish ad Button.">

Use one primary Button and give alternative actions less emphasis.

**Why**: A clear hierarchy helps users find the intended next step while keeping the alternative available.

</Do>
<Do not imgurl="/docs/components/button/DoDonts/usage-action-hierarchy-dont.png" imgalt="Save draft and Publish ad both shown as primary Buttons.">

Give adjacent actions equal primary emphasis.

**Why**: Competing primary Buttons make the next step harder to identify.

</Do>
</DoDont>

## Behaviour

An activation should have one predictable result. Use the correct form behaviour on Web: `type="submit"` submits the form, `type="reset"` resets it, and the default `type="button"` performs no form action by itself.

When an asynchronous action starts:

- Set loading immediately and keep a specific label, such as “Publishing ad”.
- Prevent duplicate work in the event handler or form submission logic as well as in the visual component state.
- Keep the Button in place so the layout does not jump.
- End loading with an understandable success or error result. Move focus only when the next task requires it.
- Preserve user input when the action fails.

Avoid disabling an action before users understand the requirement. For form validation, allow submission and show specific errors whenever that is safe. If an action truly cannot be used, explain the reason near it.

## Size and layout

Use the default size in most flows and the small size only in dense interfaces where the surrounding targets have a similar scale. Keep enough spacing around a small Button to preserve a comfortable touch target.

- Let labels fit without truncation. At narrow widths or large text sizes, allow a Button group to wrap or stack.
- Use full width consistently within a narrow action area. Avoid mixing full-width and content-width Buttons without a clear hierarchy.
- Keep related actions close together and separate them from unrelated controls.
- Test layouts with translated labels. A short English label is not evidence that the Button will fit in every language.

## Icons

Icons can improve recognition, but the label should still carry the meaning.

- Use an icon that directly supports the action, such as a share icon with “Share ad”.
- Use either a leading or trailing icon when possible. Several icons make the action harder to scan.
- Treat a supporting icon as decorative so it is not announced separately from the label.
- For an icon-only action, use Button pill and provide an accessible name that describes the result, not the icon's shape.

## Content guidelines

Start with a specific verb and describe the result of activation.

- Prefer “Save changes”, “Publish ad”, or “Delete ad” over “OK”, “Yes”, or “Submit”.
- Keep labels concise, but do not remove the words that distinguish adjacent actions.
- Use sentence case and omit punctuation for short labels.
- Match the label to the result. If the action opens a confirmation step rather than deleting immediately, label it for the next step.
- Keep the label stable while users decide. During loading, a closely related progress label is acceptable.

### Use a specific action label

<DoDont>
<Do imgurl="/docs/components/button/DoDonts/usage-clear-label-do.png" imgalt="A Button labelled Save changes.">

Describe the result with a specific verb phrase.

**Why**: Users can predict what activation will do without relying on surrounding context.

</Do>
<Do not imgurl="/docs/components/button/DoDonts/usage-clear-label-dont.png" imgalt="A Button labelled OK.">

Use a vague confirmation label such as “OK”.

**Why**: Generic labels become ambiguous when users scan, navigate by controls, or revisit a confirmation.

</Do>
</DoDont>

## Destructive actions

Use Negative or Negative quiet when an action deletes data, removes access, or otherwise has a harmful outcome. Explain the effect before activation and add confirmation when the outcome is difficult to reverse.

- Name the object in the label when space allows, such as “Delete ad”.
- Pair a destructive action with a safer alternative, such as Cancel, when asking for confirmation.
- Do not use a destructive variant for a non-destructive action merely to attract attention.
- Do not use Primary for an action whose meaning is destructive.

### Match destructive meaning and appearance

<DoDont>
<Do imgurl="/docs/components/button/DoDonts/usage-destructive-action-do.png" imgalt="A secondary Cancel Button followed by a negative Delete ad Button.">

Use the destructive variant for the destructive action and keep a safe alternative available.

**Why**: The treatment warns users and matches the consequence of the action.

</Do>
<Do not imgurl="/docs/components/button/DoDonts/usage-destructive-action-dont.png" imgalt="A secondary Cancel Button followed by a primary Delete ad Button.">

Present a destructive action as a normal primary action.

**Why**: Primary styling hides the risk and can make an irreversible choice look routine.

</Do>
</DoDont>

<component-questions />
