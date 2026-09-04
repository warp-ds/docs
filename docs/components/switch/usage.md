# Switch - Usage

A switch turns a single setting on or off. It applies the change immediately, with no separate confirmation step, and it always shows the current state rather than a pending one.

See also [Checkbox](/components/checkbox/overview.md), [Radio buttons](/components/radio-buttons/overview.md), [Select](/components/select/overview.md), and [Button](/components/button/overview.md).

<ComponentsStatus />

## Guidelines

- Use a switch only when the change takes effect immediately. If the user has to press **Save**, use a [Checkbox](/components/checkbox/overview.md).
- Always give the switch a visible label. The component supplies none, and a switch on its own says nothing about what it controls.
- Label the setting, not the action. "Email notifications", not "Turn on email notifications".
- Never change the label when the switch is toggled. The position carries the state; a label that moves with it produces sentences like "Turn off notifications" sitting in the off position.
- Use a switch for one setting. Two mutually exclusive options are [Radio buttons](/components/radio-buttons/overview.md); more than two are a [Select](/components/select/overview.md).
- Keep the effect reversible. A switch that triggers something permanent should be a [Button](/components/button/overview.md), which lets you confirm first.
- Explain any disabled switch. Say why it is unavailable and what would change that.
- Do not put a switch inside a list row that is itself tappable. The user cannot tell which target they hit.

### When to use

- **For a setting that applies at once** — notifications, dark mode, visibility of a profile, marketing consent.
- **For a preference the user will revisit**, where seeing the current state at a glance matters more than seeing the options.
- **In a settings list**, one switch per row, where each row is independent of the others.
- **To reveal or hide a section of the interface**, when hiding it is harmless and instantly reversible.

### When not to use

- **In a form that is submitted with a button.** Use [Checkbox](/components/checkbox/overview.md), which is designed for a value that is staged and then saved together with the rest of the form.
- **To accept terms and conditions.** A checkbox is the established pattern, and the switch's on position reads as a preference rather than a declaration.
- **To choose between two named alternatives** such as Celsius and Fahrenheit. Neither one is "off". Use [Radio buttons](/components/radio-buttons/overview.md).
- **To pick from three or more options.** Use [Select](/components/select/overview.md).
- **To perform an action** such as deleting or publishing. Use [Button](/components/button/overview.md), so the action can be named, confirmed, and given a loading state.
- **To display a read-only state.** A switch invites interaction. If the user cannot change it, show text or a [Badge](/components/badge/overview.md) instead of a disabled switch.

## Behaviour

### Toggling

The switch moves to the new position as soon as it is activated, and the component reports the change.

- On web the component dispatches a bubbling, composed `change` event carrying `{ checked, value }`. `value` is `null` when the `value` attribute is empty, so read `checked` for the state and treat `value` as the form payload.
- A disabled switch does not toggle and dispatches nothing.
- Keyboard activation is identical to pointer activation. See [Accessibility](/components/switch/accessibility.md).

### Saving the change

The switch has no loading, pending, or error state on any platform. It has exactly two positions, so the interface around it has to carry everything else.

- **Apply the change optimistically** and keep the switch responsive. Blocking the control while a request runs leaves the user with no feedback at all.
- **If the request fails, return the switch to its previous position** and say what happened next to it. A switch left in the position the user chose, while the server holds the opposite value, is a lie the user has no way to detect.
- **Do not disable the switch during the request.** Disabling removes it from the tab order on web, which throws keyboard focus to the top of the page mid-interaction.
- For a setting that genuinely cannot be applied immediately, the component is a [Checkbox](/components/checkbox/overview.md), not a switch.

### In a form

On web, `<w-switch>` is a form-associated element, so it participates in a native `<form>` without extra wiring.

- Set `name` and `value`. The control submits `value` **only when the switch is on**; when it is off it submits nothing, in the same way as a native checkbox.
- Form reset restores the switch to the state it had when it was first connected, not to off.
- A disabled switch contributes no value.

### States

| State | What it means | Platforms |
| --- | --- | --- |
| Off | The setting is inactive. The default. | All |
| On | The setting is active. | All |
| Hover | Pointer is over the control. Visual only. | Web |
| Focus | The control has keyboard focus, shown as a focus ring. | Web |
| Disabled | Temporarily unavailable. Keeps showing its real position. | All |

There is no loading, error, indeterminate, or read-only state. A switch that needs one of those needs a different component.

## Content guidelines

The label does the work. The switch itself communicates only a position.

### Label

Name the thing being controlled, as a noun phrase. The user reads the label to learn *what*, and the position to learn *whether*.

<DoDont>
<Do imgurl="/docs/components/switch/DoDonts/usage-label-state-do.svg" imgalt="A switch labelled 'Email notifications', shown in the on position.">

**"Email notifications"**

**Why**: The label stays true in both positions. On means you get them, off means you do not, and nothing has to be re-read when the switch moves.

</Do>
<Do not imgurl="/docs/components/switch/DoDonts/usage-label-state-dont.svg" imgalt="A switch labelled 'Turn off email notifications', shown in the on position, so the label contradicts the position.">

**"Turn off email notifications"**

**Why**: The label describes an action, so the on position now means "turn-off is on". Users have to work out a double negative to answer a yes/no question.

</Do>
</DoDont>

- Keep labels to a few words. They sit on one line beside the control on narrow screens.
- Avoid "Enable", "Disable", "Activate", and "Turn on" — all of them are verbs that fight the position.
- Do not put the state in the label. "Notifications: on" duplicates what the switch already shows, and the two will drift apart.
- Add a short description below the label when the consequence is not obvious. Do not stretch the label to carry it.

## Placement

- **Label on the left, switch on the right** in settings lists. The labels form a scannable column and the switches form a column of states.
- **One switch per row.** Two switches in a row make it ambiguous which label belongs to which control.
- **Group related switches under a heading** rather than interleaving them with other input types.
- **Keep the switch beside its label**, close enough that they read as one unit and the pairing survives at 200% zoom.
- **Do not centre a switch** in a wide row. A long gap between label and control breaks the association for everyone, and badly for users with low vision.
- **Do not place a switch inside a row that is also a link**. Give the row either a navigation target or a switch, never both.

## Interaction

- Activating anywhere on the control toggles it — track or handle, tap or click.
- The switch is not draggable on any platform. Users tap or click; do not build a swipe gesture on top of it.
- Touch targets: the drawn control is 44×24, which is shorter than the 44×44pt iOS and 48×48dp Android minimums. Extend the tappable area around it, or make the whole settings row the target. See [Accessibility](/components/switch/accessibility.md).
- On web the switch is reachable with <kbd>Tab</kbd> and toggled with <kbd>Space</kbd> or <kbd>Enter</kbd>.
- Do not attach a confirmation dialog to a switch. If the change needs confirming, it is an action — use a [Button](/components/button/overview.md).

## Best practices

<DoDont>
<Do imgurl="/docs/components/switch/DoDonts/usage-immediate-effect-do.svg" imgalt="A settings row reading 'Public profile' with a switch, and a caption confirming the change has already saved.">

Use a switch where the change applies the moment it is flipped.

**Why**: The position is the state. With nothing staged and nothing to submit, the user can leave the screen at any point and be confident about what they set.

</Do>
<Do not imgurl="/docs/components/switch/DoDonts/usage-immediate-effect-dont.svg" imgalt="A form of four switches above a 'Save changes' button, so none of the settings apply until the button is pressed.">

Collect switches in a form behind a **Save changes** button.

**Why**: Every switch now shows a state that is not yet true. Users who leave without saving believe they changed something they did not. Checkboxes say "staged"; switches say "done".

</Do>
</DoDont>

<DoDont>
<Do imgurl="/docs/components/switch/DoDonts/usage-binary-choice-do.svg" imgalt="A switch labelled 'Show prices including VAT', in the on position.">

Use a switch for one setting that is either on or off.

**Why**: Off is a real, meaningful value — prices without VAT. The control matches the decision.

</Do>
<Do not imgurl="/docs/components/switch/DoDonts/usage-binary-choice-dont.svg" imgalt="A switch placed between the two labels 'Celsius' and 'Fahrenheit', where neither position reads as off.">

Use a switch to choose between two named alternatives.

**Why**: Neither Celsius nor Fahrenheit is "off", so the position carries no meaning and the user has to guess which side is selected. Two radio buttons name both options and mark one.

</Do>
</DoDont>

<DoDont>
<Do imgurl="/docs/components/switch/DoDonts/usage-async-failure-do.svg" imgalt="A switch that has returned to the off position, with an inline message reading 'Could not update. Try again.'">

Put the switch back if the change did not save, and say so beside it.

**Why**: The switch has no error state of its own, so the position is the only thing the user can read. It must always match the value on the server.

</Do>
<Do not imgurl="/docs/components/switch/DoDonts/usage-async-failure-dont.svg" imgalt="A switch left in the on position after the save request failed, with no message shown anywhere.">

Leave the switch where the user put it after the request failed.

**Why**: The user sees a setting they never got. They will discover it only when the feature they enabled does not happen — long after they can connect the two.

</Do>
</DoDont>

<component-questions />
