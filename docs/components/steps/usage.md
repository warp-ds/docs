# Steps - Usage

Steps show a user's position in a linear, multi-part process. Each step carries a label, the indicator marks which steps are done, which one the user is on, and how many remain.

See also [Page indicator](/components/page-indicator/overview.md), [Tabs](/components/tabs/overview.md), and [Pagination](/components/pagination/overview.md).

<ComponentsStatus />

## Guidelines

- Use Steps only when the process is genuinely linear. The connecting line is a promise about order.
- Show the whole set from the start. The value of the component is that the user can see the end.
- Keep the set short — three to five steps. Beyond that the indicator becomes the thing to scroll past.
- Name each step after the task it covers, not its position. The dots already carry the numbering.
- Keep the number of steps fixed for the duration of the flow. A count that grows as the user progresses is worse than no indicator.
- Never let the state contradict reality. A checkmark on a step the user has not finished destroys trust in the whole indicator.
- Pair the indicator with its own navigation. Steps is a status display, not a Back and Next control.
- Do not use Steps for a process with an unknown length, or one the user can complete in any order.

### When to use

- **For a multi-screen task with a fixed sequence** — a checkout, an identity verification, a listing wizard.
- **To help the user focus on one meaningful task at a time.** Breaking a long form into named steps keeps a single, coherent job on screen without hiding how much is left to do.
- **When the length of the process is the reason people abandon it.** Seeing "three steps" up front is what gets someone to start.
- **When each stage is meaningfully different** and worth naming — "Your details", "Payment", "Confirmation".
- **To show progress through a process that spans sessions**, so a returning user can see what they already finished.

### When not to use

- **For sections a user can visit in any order.** Use [Tabs](/components/tabs/overview.md), which switch between peer views without claiming a sequence.
- **For position within a set of equal items**, such as a carousel or an image gallery. Use [Page indicator](/components/page-indicator/overview.md).
- **For moving through pages of results.** Use [Pagination](/components/pagination/overview.md).
- **For a two-step process.** Two steps is a page and a confirmation; a heading does the job with less furniture. On Android the component throws outright if you give it fewer than two steps.
- **For an indeterminate wait**, such as a file upload or a server round trip. Use a [Spinner](/components/spinner/overview.md).
- **As a table of contents** for a long article. Steps implies you must finish one part to reach the next.

## Behaviour

### States

Each step is in exactly one of three states.

| State | Appearance | When |
| --- | --- | --- |
| Complete | Filled indicator with a checkmark; the connecting line to the next step is filled | The user has finished this step |
| Active | Filled indicator, no checkmark | The step the user is on right now |
| Incomplete | Outlined empty indicator; the connecting line is muted | Not yet reached |

Exactly one step is active at a time. Complete steps come first, then the active step, then the incomplete ones — no gaps and no reordering. iOS rejects an invalid sequence when you build the model; on the other platforms it will render, wrongly, so you have to enforce it yourself.

The indicator itself has no hover, focus, pressed, or disabled state on web, because nothing in it is interactive. Android is the exception: passing `onStepClicked` makes each indicator tappable.

### Moving between steps

- Advance the active step only when the user has actually completed the current one. The indicator reflects state; it does not lead it.
- When a user edits an earlier step, mark only later steps whose completed work is invalidated as incomplete. Simply navigating back does not undo completed steps.
- On Android, `onStepClicked` lets the user jump between steps, and `highestEnabledStep` caps how far forward they can go. Use it to allow backward navigation without letting anyone skip ahead.
- Keep the primary Back and Next controls outside the indicator on every platform. Web, React, Vue, and iOS give the user no way to activate a step.

## Layout

The two orientations are not interchangeable. The choice is driven by how much text each step carries and how much width you have for it. See [Orientation](/components/steps/overview.md#orientation) for what each layout looks like.

### Horizontal

- **Use it when every step fits on one line without wrapping.** This is the deciding test. If the set needs a second line or a scroll to be read, the layout is wrong for the content.
- **Keep labels to one or two words.** Each step gets an equal share of the width, so a long label wraps inside a narrow column and the whole band grows taller than the content it introduces.
- **Left-align the indicator.** It reads more easily than a centred one, because the first step starts where the eye already is.
- **Beyond that, alignment is your call** — as long as the component stays on one line and inside the viewport, with no horizontal scrolling.
- **Put it at the top of the page** when the flow occupies the full screen.
- **Do not add descriptions.** They squeeze into the same narrow column as the label. If steps need descriptions, use vertical.
- **Do not rely on all steps being visible on iOS.** The layout scrolls horizontally there, so anything past the edge is simply out of view.

### Vertical

- **Use it when steps carry descriptions**, or when the content of each step belongs under its label. The full line width is available for both.
- **Use it on mobile.** It avoids the horizontal scrolling the other layout causes on a narrow screen, and keeps the whole set inside the viewport.
- **Place it to the left of on-page content**, so the sequence is read before the task in a natural left-to-right order.
- **Or place it above the form** when the layout is already a single narrow column.

## Content guidelines

The label is the only text a step gets. On horizontal layouts it may be all the user reads.

### Step labels

Name the task. The indicator already communicates the position.

<DoDont>
<Do imgurl="/docs/components/steps/DoDonts/usage-labels-task-do.svg" imgalt="Vertical steps labelled Your details, Payment and Confirmation, each label naming the task.">

**"Your details" · "Payment" · "Confirmation"**

**Why**: The label tells the user what the step will ask of them, so they can judge how long it will take and pick up where they left off.

</Do>
<Do not imgurl="/docs/components/steps/DoDonts/usage-labels-task-dont.svg" imgalt="Vertical steps labelled Step 1, Step 2 and Step 3, repeating the position the dots already show.">

**"Step 1" · "Step 2" · "Step 3"**

**Why**: The dots, their order, and the connecting line already say this. The one piece of text per step is spent restating the layout.

</Do>
</DoDont>

- Use two or three words. On horizontal layouts, one or two.
- Use nouns for what the step is about — "Payment", not "Pay now". The step is a place, not a button.
- Keep labels parallel: all nouns, or all verb phrases. Do not mix.
- Add a description only in vertical layouts, and only when the label genuinely needs it. A description that restates the label is noise on every screen it appears on.

## Placement

- Put the indicator **above the content of the current step**, so it is read before the task rather than discovered after it.
- Keep it in the **same position on every step** of the flow. An indicator that moves is one the user has to re-find each time.
- Do not fix the indicator to the viewport. It is page content and should scroll with the page.
- Do not place it inside a [Modal](/components/modal/overview.md) unless the whole flow happens in that modal.

## Interaction

On web, React, Vue, and iOS the component is inert: no step is focusable, clickable, or reachable by keyboard. Everything the user does is in the content below it. Do not attach your own click handler to a step — it will be invisible to keyboard and screen reader users. See [Accessibility](/components/steps/accessibility.md).

On Android, steps become tappable when you pass `onStepClicked`. If you use it:

- Provide `stepContentDescription` as well. Without it the indicators have no accessible name at all.
- Set `highestEnabledStep` so users cannot jump to a step they have not earned.
- Note that the indicator itself is 24dp, below the 48dp minimum touch target. Add padding around it, or keep the real navigation in buttons below.

## Best practices

<DoDont>
<Do imgurl="/docs/components/steps/DoDonts/usage-step-order-do.svg" imgalt="Three horizontal steps progressing left to right with no gaps: Your details complete with a checkmark, Payment active with a solid blue dot, and Confirmation incomplete with an empty circle.">

Keep the states in order: complete, then active, then incomplete.

**Why**: The component's whole claim is "this is how far you have come". A contiguous run of checkmarks is what makes that claim readable at a glance.

</Do>
<Do not imgurl="/docs/components/steps/DoDonts/usage-step-order-dont.svg" imgalt="Three horizontal steps with a checkmark on Confirmation, the last one, while Your details and Payment before it are still empty circles.">

Mark a later step complete while an earlier one is still open.

**Why**: The user cannot tell whether they missed something or the indicator is broken. On iOS you cannot ship it at all — `StepIndicatorModel` throws when you construct it.

</Do>
</DoDont>

<DoDont>
<Do imgurl="/docs/components/steps/DoDonts/usage-step-count-do.svg" imgalt="Three horizontal steps labelled Choose, Pay and Review, all fitting comfortably inside a narrow mobile frame.">

Keep the set to three to five steps, all visible at once.

**Why**: A user decides whether to start based on how long it looks. A set they can count at a glance is an invitation; a row that runs off the screen is a warning.

</Do>
<Do not imgurl="/docs/components/steps/DoDonts/usage-step-count-dont.svg" imgalt="Four horizontal steps on the same mobile frame, where the fourth label is cut off at the right edge.">

Give every screen in a long flow its own step.

**Why**: On iOS the horizontal layout scrolls, so the remaining steps are simply gone from view — the indicator now hides the length instead of showing it. Group related screens under one named step.

</Do>
</DoDont>

<DoDont>
<Do imgurl="/docs/components/steps/DoDonts/usage-orientation-do.svg" imgalt="Three completed vertical steps — Freight, Delivery and Payment — each with a bold title and a description of one to three full-width lines, all left aligned.">

Use the vertical layout when steps carry descriptions.

**Why**: Vertical gives each label a full-width line beside its dot, so a title and a supporting sentence both fit and stay left aligned for easy scanning.

</Do>
<Do not imgurl="/docs/components/steps/DoDonts/usage-orientation-dont.svg" imgalt="The same content in a horizontal layout: two steps, Delivery and Payment, with their descriptions centred above the dots in narrow columns, one of them truncated with an ellipsis.">

Put descriptions under a horizontal indicator on mobile.

**Why**: Horizontal splits the width equally between steps and centres the text. Five steps on a phone gives each description a column a few words wide, and the indicator grows taller than the form it introduces.

</Do>
</DoDont>

<component-questions />
