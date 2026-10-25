# Steps - Overview

Steps show a user's position in a linear, multi-part process. Each step carries a label, the indicator marks which steps are done, which one the user is on, and how many remain.

See also [Page indicator](/components/page-indicator/overview.md), [Tabs](/components/tabs/overview.md), and [Pagination](/components/pagination/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <h3 class="h4">Horizontal Steps</h3>
    <w-step-indicator horizontal class="mb-32">
        <w-step completed>
            <strong>Your details</strong>
            <p>Name and address</p>
        </w-step>
        <w-step active>
            <strong>Payment</strong>
            <p>Card or invoice</p>
        </w-step>
        <w-step>
            <strong>Confirmation</strong>
            <p>Review and send</p>
        </w-step>
    </w-step-indicator>
    <h3 class="h4 pt-12">Vertical Steps</h3>
    <w-step-indicator class="mb-32">
        <w-step completed>
            <strong>Your details</strong>
            <p>Name and address</p>
        </w-step>
        <w-step active>
            <strong>Payment</strong>
            <p>Card or invoice</p>
        </w-step>
        <w-step>
            <strong>Confirmation</strong>
            <p>Review and send</p>
        </w-step>
    </w-step-indicator>
    <h3 class="h4 pt-12">Vertical Steps (Right aligned)</h3>
    <w-step-indicator right>
        <w-step completed>
            <strong>Your details</strong>
            <p>Name and address</p>
        </w-step>
        <w-step active>
            <strong>Payment</strong>
            <p>Card or invoice</p>
        </w-step>
        <w-step>
            <strong>Confirmation</strong>
            <p>Review and send</p>
        </w-step>
    </w-step-indicator>
</style-isolate>

## General

Steps answer three questions at once: **where am I, what have I finished, and how much is left**. That makes the component useful when a task is long enough that a user might otherwise abandon it — a checkout, an onboarding flow, a multi-page listing form.

Three properties define the component:

- **Linear**: steps run in one order, and progress moves forward through them. The component draws a connecting line precisely because it is claiming a sequence.
- **Bounded**: the whole set is visible from the start, so the user can see the end before they begin. A process with an unknown number of stages is not a Steps process.
- **Reflective, not navigational on web**: on web the indicator reports state, it does not change it. Nothing in it is focusable or clickable. On Android steps can be made tappable; see the platform table below.

Each step is in one of three states — **complete**, **active** (the one the user is on), and **incomplete**. The states are mutually exclusive and strictly ordered: every complete step comes before the active step, and every incomplete step comes after it. iOS rejects an invalid order when you construct the model; the other platforms trust you to get it right.

## Anatomy

::: image-block
![A vertical three-step indicator with four numbered callouts marking the indicator dot, the connecting track, the step title, and the step description.](/components/steps/overview-anatomy.svg)
:::

1. **Indicator** — the dot that carries the step's state. 20px on web and iOS, 24dp on Android. It is the only part that changes appearance as the user progresses.
2. **Track** — the 2px line joining one indicator to the next. It is what makes the set read as a sequence rather than a list. The last step's track is hidden but still occupies its space, so the spacing stays even.
3. **Title** — the name of the step. The only text a step is guaranteed to have.
4. **Description** — an optional supporting line under the title. Use it in vertical layouts only; in horizontal layouts it squeezes into a narrow column. See [Usage](/components/steps/usage.md).

In Figma the dot and the track are separate atoms (`Dot` and `Track`), and the title and description are one text block. On web, React, and Vue the title and description are slotted content — you supply the markup — while iOS and Android take them as `title` and `description` parameters.

## States

Each indicator is in exactly one of three states, and the track below it is coloured by whether the step is finished.

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/steps/steps-state-complete.svg" alt="A completed step: a blue filled dot with a white checkmark, a blue track running down from it, and the title Your details." />
  </div>
  <div>

**Complete** — the dot fills with primary blue and shows a white checkmark, and the track below it fills blue. The checkmark is the only thing distinguishing a complete dot from an active one, so it must never be removed or restyled.

  </div>
</div>

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/steps/steps-state-in-progress.svg" alt="A step in progress: a solid blue dot with no checkmark, a muted grey track below it, and the title Payment." />
  </div>
  <div>

**Active** — the dot fills with primary blue and carries no checkmark. The track below it stays muted, because the step it leads to has not been reached. Exactly one step is active at a time. Figma and iOS call this state **In progress**.

  </div>
</div>

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/steps/steps-state-incomplete.svg" alt="An incomplete step: an empty circle with a muted grey border, a muted track below it, and the title Confirmation in grey." />
  </div>
  <div>

**Incomplete** — the dot is an empty circle with a 2px muted border, and the track below it is muted. This is the default state: a step is incomplete unless you mark it otherwise.

  </div>
</div>

The design library also drops the title and description of an incomplete step to a muted ink. **Web, React, and Vue do not do this** — the label is slotted content and the component applies no colour to it, so it keeps whatever the surrounding page gives it. If you want the muted treatment on web, style your own label.

There is no hover, focus, pressed, or disabled state on web, React, Vue, or iOS, because nothing in the indicator is interactive. Android is the exception: passing `onStepClicked` makes each indicator tappable, and it then takes the platform's own pressed and focus treatment. See [Accessibility](/components/steps/accessibility.md).

## Orientation

The component has two layouts. This section describes what each one is; for help choosing between them, see [Layout](/components/steps/usage.md#layout) in Usage.

### Horizontal

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/steps/steps-orientation-horizontal.svg" alt="Two steps side by side, labelled Step 1 and Step 2 with a description under each title, joined by a grey track running between two empty indicator dots." />
  </div>
  <div>

Steps run across the page in a single row, with the label centred above its dot. Each step takes an equal fraction of the available width, so labels are short by necessity — a long one wraps inside its narrow column and makes the whole set taller.

On iOS the horizontal layout sits inside a horizontal scroll view. Steps that do not fit scroll out of view rather than compressing, so you cannot assume the whole set is visible.

  </div>
</div>

### Vertical

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/steps/steps-orientation-vertical.svg" alt="Three steps stacked down the page: Your details complete with a checkmark, Payment active with a solid blue dot, and Confirmation incomplete with an empty circle, each with a description under its title." />
  </div>
  <div>

Steps stack down the page with the label beside each dot. There is room for a title plus a description, and the full width of the line for both. This is the default on web, React, Vue, and iOS.

On Android the vertical layout can also hold arbitrary content between steps, so a form section can sit inside the sequence rather than beside it.

Vertical supports **right alignment** on web, React, and Vue, flipping the labels to the other side of the line. It has no effect in horizontal layout and does not exist on iOS or Android.

  </div>
</div>

## Cross-platform naming

The concept is the same everywhere, but almost every name differs. Use this mapping when moving a design between platforms.

| Concept | Figma | Web (Elements) | React | Vue | iOS | Android |
| --- | --- | --- | --- | --- | --- | --- |
| Component | Step indicator | `<w-step-indicator>` + `<w-step>` | `<Steps>` + `<Step>` | `<w-steps>` + `<w-step>` | `Warp.StepIndicator` | `VerticalWarpStepIndicator` / `HorizontalWarpStepIndicator` |
| Horizontal layout | Orientation = Horizontal | `horizontal` | `horizontal` | `horizontal` | `layoutOrientation: .horizontal` | `HorizontalWarpStepIndicator` |
| Vertical layout | Orientation = Vertical | default | default | default | `.vertical` (default) | `VerticalWarpStepIndicator` |
| Completed step | Complete | `completed` | `completed` | `complete` | `progress: .complete` | index `< activeStep` |
| Current step | In progress | `active` | `active` | `active` | `progress: .inProgress` | `activeStep` |
| Upcoming step | Incomplete | neither attribute | neither prop | neither prop | `progress: .incomplete` | index `> activeStep` |
| Right alignment | — | `right` | `right` | `right` | — | — |

Four differences are worth calling out because they change how you build:

- **Android splits the orientations into two separate composables** rather than taking a flag, and it derives each step's state from a single `activeStep` integer instead of per-step properties.
- **Vue names the completed property `complete`**, where every other web implementation uses `completed`.
- **Right alignment is a web-only property.** It has no equivalent in the design library, on iOS, or on Android, so a right-aligned vertical indicator cannot be reproduced outside the web platforms.
- **iOS is the only platform that validates step order.** `Warp.StepIndicatorModel(from:)` is a throwing initialiser that rejects a complete step after an incomplete one, a complete step after an in-progress one, an in-progress step after an incomplete one, and more than one in-progress step.

The defaults also disagree: the design library defaults **Orientation** to horizontal, while web, React, Vue, and iOS all default to vertical. Set the orientation explicitly rather than relying on either default.

<component-questions />
