# Steps - Accessibility

Steps show a user's position in a linear, multi-part process. Each step carries a label, the indicator marks which steps are done, which one the user is on, and how many remain.

<ComponentsStatus />

## General

Steps is a status display built almost entirely out of visual signals: a filled dot, a checkmark, a connecting line, a colour change. None of those survive on their own for someone who cannot see them. What carries the meaning instead is the **step label** and the semantics the component attaches to each indicator.

Three things decide whether Steps works for assistive technology:

1. **Structure** — whether the steps are exposed as a list, so a screen reader user can tell how many there are and where they are in the set.
2. **State** — whether "complete", "current", and "incomplete" reach the accessibility tree at all, rather than living only in colour.
3. **Your labels** — because the component supplies the state and you supply everything else.

The component is not interactive on web, React, Vue, or iOS: no step takes focus and no step can be activated. On Android steps become tappable when you pass `onStepClicked`, which changes the accessibility picture significantly — see the platform sections.

## Keyboard interaction

**Steps has no keyboard interaction on web, React, Vue, or iOS.** No part of the indicator is in the tab order, none of it is focusable, and there are no shortcuts. This is correct for a status display, and it is the behaviour to preserve.

| Key | Behaviour |
| --- | --- |
| <kbd>Tab</kbd> | Skips the indicator entirely and moves to the next focusable element on the page |
| Any other key | No effect |

What this means when you build:

- **Do not add `tabindex` to a step.** A focusable element with no action strands keyboard users on something they cannot use.
- **Do not attach a click handler to a step** on web. It would be reachable by mouse only — a keyboard user could not trigger it, and there would be no focus indicator to show it was interactive.
- **Put the real navigation in buttons.** Back and Next controls below the indicator are focusable, have visible focus rings, and announce themselves properly.
- On Android, steps made tappable with `onStepClicked` do enter the focus order and are operable with a keyboard or switch device. Everything in this section applies to the other platforms only.

## Screen reader considerations

### What is announced on web

Each `<w-step>` contains a small indicator element with `role="img"` and a localised `aria-label` describing its state. That label is announced along with the step's content:

| State | Announced (English) |
| --- | --- |
| Complete | "Step indicator completed circle" |
| Active | "Step indicator active circle" |
| Incomplete | "Empty circle" |

The strings are translated for Norwegian, Swedish, Danish, and Finnish, and the locale is picked up from the page. React and Vue use the same set of strings.

The active step additionally carries `aria-current="step"`, which is set on that indicator element.

So a three-step flow announces roughly as: *"list, 3 items — Step indicator completed circle, Your details — Step indicator active circle, current step, Payment — Empty circle, Confirmation"*.

### Writing for that announcement

- **The label must make sense on its own.** It is read immediately after a phrase about a circle, with no other context.
- **Do not put the step number in the label.** The list role already announces "3 items" and the position within it. "Step 2: Payment" makes the announcement say the position twice.
- **Do not describe the state in the label.** "Payment (done)" collides with the "completed circle" the component already announced.
- **Keep descriptions short.** In vertical layouts the description is read straight after the title, as part of the same step.

### Structure

- On web, `<w-step-indicator>` renders a container with `role="list"` and each `<w-step>` takes `role="listitem"` through `ElementInternals`. React and Vue render native `<ul>` and `<li>` elements, which give the same semantics.
- Because the steps are a list, screen reader users get the count and the position for free. Do not build your own numbering on top of it.
- **The list has no accessible name.** Give the region one — put a heading immediately before the indicator, or wrap it in a `<nav aria-label="Checkout progress">`. Without this, a user navigating by landmarks or lists finds an anonymous list of three items.

## Visual accessibility

### Colour and contrast

- Step labels and descriptions must meet at least **4.5:1** against the page background, or **3:1** for large text (18.66px bold, or 24px and above).
- The indicator dots and the connecting lines are non-text graphics that carry meaning, so they need at least **3:1** against the background, and complete and incomplete states need to be distinguishable from each other.
- Use the Warp tokens as they come. The dot and line colours resolve per brand and per theme, so a value that passes in one brand can fail in another — check each brand you ship to, in both light and dark mode.

### Colour independence

This is the component's main visual risk. Complete, active, and incomplete are distinguished by fill colour and by the connecting line's colour.

- The **checkmark on complete steps is the only non-colour difference** between complete and active. Both dots are filled with the same primary colour. Never remove or restyle the checkmark.
- **Active and complete are not distinguishable in greyscale** except by that checkmark. Test in greyscale, not just with a contrast checker.
- The connecting line differs only by colour between reached and unreached steps.
- Because of this, the **surrounding page must also say where the user is** — a heading like "Step 2 of 3: Payment" above the form does more for accessibility than anything in the indicator itself.

### Text resizing and reflow

- Labels must stay readable at 200% zoom with no clipping and no loss of content.
- Never set a fixed height on a step. In horizontal layouts the labels sit in equal-width columns and wrap, so a longer translation makes the whole band taller — let it.
- Horizontal layouts are the ones that break first at large text sizes. If your labels are long, or you support many locales, prefer vertical.
- On iOS support Dynamic Type; on Android use scalable text units (sp).

## Platform-specific accessibility

### Web, React, and Vue

- The container exposes `role="list"`; each step exposes `role="listitem"`.
- The indicator is `role="img"` with a localised `aria-label`; the active one also carries `aria-current="step"`.
- Nothing is focusable and there is no keyboard interaction.
- The indicator is 20px. Since it is not interactive, minimum touch target sizes do not apply — but they do apply to any Back and Next buttons you place near it, which need at least 44×44px.
- `right` only affects the vertical layout. It does not change reading or DOM order, only which side the labels sit on.

### iOS

`Warp.StepIndicator` treats each step as two accessibility elements: the progress circle, and the title and description combined.

- The circle carries an accessibility label of **"Incomplete"**, **"In Progress"**, or **"Complete"**.
- The title and description are merged with `.accessibilityElement(children: .combine)`, so VoiceOver reads them as one continuous announcement rather than two separate stops.
- In the vertical layout the circle comes before the text, so VoiceOver reads the state, then the step.
- Nothing is focusable or activatable. There is no way for a VoiceOver user to move between steps by swiping on the indicator, and that is expected.
- The horizontal layout is inside a horizontal `ScrollView`. VoiceOver will scroll to reach steps that are off screen, but a user cannot see how many are left.
- `Warp.StepIndicatorModel(from:)` throws if the step order is invalid, so an incoherent indicator fails at build time rather than confusing a user.

### Android

Android's behaviour depends entirely on whether you make the steps clickable.

- **`stepContentDescription` is only applied when `onStepClicked` is non-null.** The indicators are drawn on a `Canvas`, which has no semantics of its own, so a non-clickable Android step indicator exposes **no state information at all** to TalkBack. The dots are invisible to it; only your `stepTitle` and `stepDescription` text is read.
- When steps are clickable, each indicator becomes a clickable node with the content description you supply. Write the state into it yourself — "Payment, completed" — because nothing else carries it.
- `stepTitle` and `stepDescription` render as two separate `WarpText` nodes, so TalkBack stops on each one separately. They are not merged the way iOS merges them, and neither is exposed as a heading.
- The indicator is **24dp**, below the 48×48dp minimum touch target. When you enable `onStepClicked`, add padding around the indicator or keep the real navigation in buttons.
- Use `highestEnabledStep` on the horizontal indicator to stop users activating steps they have not reached.
- The component requires more than one step and throws otherwise.

## Motion and animation

- On web the dot and line colours change over a 300ms transition when a step's state changes. This transition does **not** check `prefers-reduced-motion`. It is a colour fade rather than movement, so the risk is low, but suppress it yourself if your surface has a strict reduced-motion policy.
- On Android the connecting line animates its fill as `activeStep` changes, using `animateFloatAsState`. This does not check the system animation scale either.
- Never animate the indicator to draw attention. Content that flashes more than three times per second is a WCAG failure.

## Known gaps

These are limitations in the component today, not things you have done wrong. Each has a workaround you can apply in your own code.

| Gap | Platforms | Workaround |
| --- | --- | --- |
| The step list has no accessible name | Web, React, Vue | Wrap the indicator in `<nav aria-label="…">`, or put a heading directly before it |
| No "step 2 of 3" is announced | All | Put it in a visible heading above the indicator — this helps sighted users too |
| Complete and active dots differ only by the checkmark | All | Make sure labels and the surrounding page state where the user is |
| Indicator state is not exposed to TalkBack unless steps are clickable | Android | Write the state into `stepTitle`, or supply `onStepClicked` plus `stepContentDescription` |
| Indicator labels are hardcoded English | iOS | None in-component. Keep your own titles localised so the meaningful text is translated |
| Tappable indicator is 24dp, under the 48dp minimum | Android | Pad the indicator, or put navigation in buttons below |
| Colour transitions ignore reduced-motion preferences | Web, Android | Suppress the transition on surfaces with a strict reduced-motion policy |

## Testing

- **Screen readers**: test with VoiceOver on macOS and iOS, TalkBack on Android, and NVDA or JAWS on Windows. Move through the whole indicator and confirm you can tell how many steps there are, which is current, and which are done.
- **Listen to the full announcement**, not just your label. On web the circle is announced before your text, so the real announcement is longer than the copy you wrote.
- **Check the count.** Navigate by lists on web and confirm the list reports the right number of items, and that it has a name.
- **Android specifically**: test the indicator both with and without `onStepClicked`. The non-clickable version exposes nothing about state — confirm your titles still tell the user where they are.
- **Keyboard only**: tab through the page. Focus must skip the indicator entirely on web, React, Vue, and iOS, and must land on your Back and Next buttons with a visible ring.
- **Greyscale**: view the page with colour removed. Complete, active, and incomplete must still be distinguishable — if only the checkmark separates them, your labels need to carry more.
- **Zoom and text size**: check at 200% browser zoom, and at the largest Dynamic Type and Android font-size settings. Horizontal layouts are where clipping and overlap appear first.
- **Contrast**: check the dots, the connecting lines, and the label text for every brand you ship, in both light and dark mode.
- **Automated checks**: run axe or Lighthouse to catch missing names and contrast failures. They will not catch a missing list name that is technically valid, or a label that reads badly, so do not stop there.

<component-questions />
