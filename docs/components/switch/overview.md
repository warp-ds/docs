# Switch - Overview

A switch turns a single setting on or off. It applies the change immediately, with no separate confirmation step, and it always shows the current state rather than a pending one.

See also [Checkbox](/components/checkbox/overview.md), [Radio buttons](/components/radio-buttons/overview.md), [Select](/components/select/overview.md), and [Button](/components/button/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">Off</h3>
        <div class="flex items-center gap-8">
            <span id="switch-off-label">Email notifications</span>
            <w-switch aria-labelledby="switch-off-label" name="notifications" value="on"></w-switch>
        </div>
    </div>
    <div>
        <h3 class="h4">On</h3>
        <div class="flex items-center gap-8">
            <span id="switch-on-label">Email notifications</span>
            <w-switch checked aria-labelledby="switch-on-label" name="notifications" value="on"></w-switch>
        </div>
    </div>
    <div>
        <h3 class="h4">Disabled, off</h3>
        <div class="flex items-center gap-8">
            <span id="switch-disabled-off-label">Email notifications</span>
            <w-switch disabled aria-labelledby="switch-disabled-off-label"></w-switch>
        </div>
    </div>
    <div>
        <h3 class="h4">Disabled, on</h3>
        <div class="flex items-center gap-8">
            <span id="switch-disabled-on-label">Email notifications</span>
            <w-switch checked disabled aria-labelledby="switch-disabled-on-label"></w-switch>
        </div>
    </div>
</style-isolate>

## General

A switch is the interface equivalent of a light switch: it has two positions, the position *is* the current state, and flipping it takes effect at once.

Three properties define the component:

- **Binary**: on or off. A switch never represents a choice between two alternatives, and never a third state.
- **Immediate**: the change applies the moment the user flips it. A switch that needs a **Save** button to take effect is the wrong component — use a [Checkbox](/components/checkbox/overview.md).
- **Stateful**: the switch shows what is true right now, not what the user is about to do. Read the position, not the label, to know the current setting.

The component ships **no label of its own** on any platform. On web the control is a bare `<w-switch>`; on iOS `Warp.Switch` calls `.labelsHidden()`; on Android `WarpSwitch` renders only the track and handle. You always supply the label yourself, both visually and for assistive technology. See [Accessibility](/components/switch/accessibility.md) — an unlabelled switch is the single most common way to ship a broken one.

Switch has no variants. It has two states the user controls — off and on — each of which can additionally be hovered or disabled. The control measures **44×24** on every platform (px on web, pt on iOS, dp on Android).

### Names per platform

The four implementations disagree about almost every name, including the sense of the enabled/disabled flag. Use this mapping when moving a design or a prop between platforms:

| Concept | Figma | Web (Elements) | iOS | Android |
| --- | --- | --- | --- | --- |
| On / off | `Selected=Yes` / `Selected=No` | `checked` | `isOn` | `checked` |
| Unavailable | `State=Disabled` | `disabled` | `state: .disabled` | `enabled = false` |
| Change handler | — | `change` event | `Binding<Bool>` | `onCheckedChange` |
| Accessible name | — | `aria-label` / `aria-labelledby` | `.accessibilityLabel` | `contentDescr` |

Two traps in that table:

- **Android inverts the flag.** Every other platform disables with a positive `disabled`; Android enables with `enabled = true` and disables with `enabled = false`. A mechanical port will produce switches that are live when they should be dead.
- **iOS uses an enum, not a boolean.** `Warp.SwitchState` has exactly two cases, `.default` and `.disabled`, so there is no `isDisabled` to set.

The `Hover` state exists in Figma and on web only. iOS and Android have no hover, and the Figma `Hover` variants are there to specify the web appearance.

## Anatomy

::: image-block
![Two switches with four numbered callouts. The upper switch is off: callout 1 points to the handle at the left end, callout 2 to the unfilled track. The lower switch is on: callout 3 points to the filled track, callout 4 to the handle at the right end.](/components/switch/overview-anatomy.svg)
:::

1. **Handle, not selected** — the circle resting at the left end of the track, drawn in the same colour as the track border. Its position is the primary signal that the setting is off.
2. **Track, not selected** — the rounded container. Unfilled, with a border that carries the shape against the page background.
3. **Track, selected** — the same container filled with the primary colour. The fill and the handle position change together; neither one moves on its own.
4. **Handle, selected** — the circle at the right end, now white so it reads against the filled track.

There are only these two parts. The switch has no label, no icon, and no text of its own on any platform — everything else in a settings row is yours to build and position around it.

## Options

### Label

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/switch/switch-options-label.svg" alt="Switch in the on position with a label to the left that reads 'Push notifications'." />
  </div>
  <div>

Switches should always have labels. When the label is not defined, a switch becomes standalone. Standalone switches should only be used when their connection to other components is clear and they give sufficient context — for example, in application panels.

  </div>
</div>

### Off

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/switch/switch-options-state-off.svg" alt="Switch in the off position: a white track with a grey border and a grey handle on the left." />
  </div>
  <div>

The default. The handle sits left, the track is unfilled with a strong border.

Off must mean the setting is genuinely inactive. Do not use the off position to mean "not yet chosen" — a switch has no unset state, and users will read a fresh form of off switches as a set of deliberate decisions.

  </div>
</div>

### On

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/switch/switch-options-state-on.svg" alt="Switch in the on position: a filled blue track with a white handle on the right." />
  </div>
  <div>

The handle moves right and the track fills with the primary colour.

On web the position animates: the track transitions its colour and the handle its transform. On Android the move is a 200 ms tween; on iOS it is an ease-in-out animation. None of the three currently respects a reduced-motion preference — see [Accessibility](/components/switch/accessibility.md).

  </div>
</div>

### Hover

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/switch/switch-options-state-hover.svg" alt="Two switches showing the hover treatment with a pointer cursor over each. The upper switch is off, with a light grey fill in the track and a darkened border and handle. The lower switch is on, with a darkened blue track." />
  </div>
  <div>

Web only, and pointer only. Hover is a treatment laid over whichever position the switch is already in — both are shown here — and it never says anything about whether the setting is on.

Off gains a light fill in the track, and the border and handle darken with it. On darkens the filled track. In both cases the handle stays where it is: hover changes colour, never position.

There is no hover on iOS or Android. Never make hover the only way to discover that a switch is interactive.

  </div>
</div>

### Disabled

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/switch/switch-options-state-disabled.svg" alt="Two disabled switches drawn in muted grey tokens: the upper one off, the lower one on. Only a slight difference in fill separates them." />
  </div>
  <div>

The switch keeps showing its real position while unavailable, so a disabled switch can be either off or on. Both are shown here, and the pair makes the problem plain: the same muted tokens do all the work, and the only difference is a slight change in fill.

Because the two are so hard to tell apart, never rely on a disabled switch alone to communicate a current setting. Say it in text as well.

On web, disabling also removes the control from the tab order and blocks pointer events. Always explain nearby why a switch is unavailable and what would make it available — a dead control with no explanation is a dead end.

  </div>
</div>

<component-questions />
