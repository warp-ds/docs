# Switch - Accessibility

A switch turns a single setting on or off. It applies the change immediately, with no separate confirmation step, and it always shows the current state rather than a pending one.

<ComponentsStatus />

## General

The switch is a small control carrying a large amount of meaning: what it controls, and whether that thing is currently true. It communicates both through position and colour, neither of which is available to a screen reader.

Two things decide whether a switch works for assistive technology:

1. **The name**, which you always supply. No Warp platform gives the switch a label of its own.
2. **The role and state**, which the component supplies. All three platforms expose a switch role and its on/off value correctly, so this is the part you do not have to build.

The failure mode is almost always the first one. A switch with a perfect role and no name is announced as "switch, on" — the user hears the state of something, with no way to learn what.

The platforms differ in how the name is attached, and Android differs in a way that fails silently. Read the platform section for the platform you are building on.

## Naming the switch

The component renders only the track and the handle. There is no label slot on web, iOS, or Android.

| Platform | How to name it | If you skip it |
| --- | --- | --- |
| Web | `aria-label`, or `aria-labelledby` pointing at your visible label | Announced with no name |
| iOS | `.accessibilityLabel(_:)` on the switch | Announced with no name |
| Android | the `contentDescr` parameter | `contentDescription` is set to an empty string, which suppresses the name |

Prefer a **visible** label that is also the accessible name. On web that means `aria-labelledby` pointing at the text you already show, rather than an `aria-label` that duplicates it:

```html
<span id="notifications-label">Email notifications</span>
<w-switch aria-labelledby="notifications-label" name="notifications" value="on"></w-switch>
```

Two rules for the name itself:

- **Name the setting, not the state.** The role already carries on/off. A name of "Notifications on" is announced as "Notifications on, switch, on".
- **Name the setting, not the action.** "Turn on notifications, switch, off" asks the user to resolve a double negative before they can answer.

On web, `aria-label` is copied into the accessibility tree **once, when the element is first connected**. Changing the attribute afterwards does not update what is announced. If the name has to change at runtime, use `aria-labelledby` and change the referenced text instead.

## Keyboard interaction

Web only — iOS and Android have no keyboard interaction for this component.

| Key | Result |
| --- | --- |
| <kbd>Tab</kbd> | Moves focus to the switch |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous element |
| <kbd>Space</kbd> | Toggles the switch |
| <kbd>Enter</kbd> | Toggles the switch |

Both <kbd>Space</kbd> and <kbd>Enter</kbd> work, which is deliberately more permissive than the ARIA switch pattern's <kbd>Space</kbd>-only requirement. The component calls `preventDefault()` on both, so <kbd>Space</kbd> does not also scroll the page.

Any modifier key cancels the toggle. <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Alt</kbd>, and <kbd>Cmd</kbd> combinations are ignored, so browser and screen reader shortcuts pass through instead of flipping the setting.

Focus behaviour:

- The switch delegates focus into the button inside its shadow root, so it behaves as one stop in the tab order. You do not add `tabindex` to it.
- The focus ring is a 2px outline drawn on **`:focus-visible` only**. It appears for keyboard users and not for mouse users. Do not remove or override it.
- **A disabled switch is removed from the tab order entirely.** Do not disable a switch while a request is in flight — focus is dropped mid-interaction and the keyboard user is returned to the top of the document.

## Screen reader considerations

All three platforms expose the correct role and state. What they announce is roughly "*your label*, switch, on" — the name you supply, the role, and the current position.

- **Web** sets `role="switch"` plus `aria-checked` through `ElementInternals`, and keeps `aria-checked` in sync on every toggle. The inner `<button>` is explicitly marked `role="none"` so it does not appear as a second control.
- **iOS** is a SwiftUI `Toggle`, so VoiceOver gets the native switch trait and reads the value as "on" or "off" without any work from you.
- **Android** applies `Role.Switch` through `toggleable`, so TalkBack announces it as a switch, reads the checked state, and offers the usual double-tap to toggle.

Things to get right around the component:

- **Announce the consequence, not just the state.** If flipping the switch reveals a new section of the page, that section's appearance is silent. Move focus into it, or announce it through a live region.
- **Do not announce the change yourself.** The role already reports the new state on toggle. An extra live-region message means the user hears it twice.
- **Disabled is announced.** On web `aria-disabled` is set alongside the role, and on iOS the SwiftUI `.disabled()` modifier marks the element as not enabled. The *reason* is not announced — put it in text near the switch, inside the label's own region if it is short.
- **Group switches under a real heading**, so users can navigate a settings screen by headings rather than tabbing through every row.

## Visual accessibility

### Colour and contrast

- The track, its border, and the handle are user interface components, so each needs at least **3:1** against what sits behind it, per WCAG 1.4.11 Non-text Contrast.
- The off state carries its meaning through the track border. Verify that border against the page background, not against the track fill.
- Use the Warp switch tokens unchanged. Surfaces are defined per brand and per theme, so a hard-coded colour that passes in one brand or in light mode can fail in another. Check every brand you ship, in both themes.

### Colour independence

The only difference between on and off is **colour and handle position**. There is no icon, no text, and no shape change.

- Handle position is the carrier that survives greyscale, so never reduce the travel or centre the handle.
- The two **disabled** positions are the weakest pair in the set: both use muted tokens and the fill difference is slight. Never let a disabled switch be the only statement of a current setting — write it in text too.
- Do not add your own colour to signal meaning. A green "good" switch and a red "bad" switch teach users that colour means quality here, which no other Warp switch honours.

### Text resizing and reflow

- The control is a fixed 44×24 and does not scale with text size. As the label grows, the gap between label and switch grows with it — check that the pairing still reads as one unit at 200% zoom and at the largest Dynamic Type and Android font-size settings.
- Let the label wrap. Do not truncate it to keep the switch on one line; the label is the only thing naming the control.
- On iOS support Dynamic Type in your label; on Android use scalable units (sp).

## Touch targets

The drawn control is **44×24** on every platform. That clears WCAG 2.2 SC 2.5.8 Target Size (Minimum), which asks for 24×24 CSS pixels, but it is shorter than both platform guidelines: 44×44pt on iOS and 48×48dp on Android.

The component does not add padding to reach those minimums. You have to:

- Extend the tappable area vertically around the switch, or
- Make the whole settings row the target, so the label and the control activate together.

Keep at least 8px between adjacent switches so a slightly off tap does not flip the wrong setting.

## Platform-specific accessibility

### Web

- `role="switch"`, `aria-checked`, and `aria-disabled` are all applied through `ElementInternals`, not as attributes on the element. They work with real assistive technology, but you will not see them in the DOM inspector — check the browser's accessibility tree instead.
- `aria-label` is read once at connect time; `aria-labelledby` stays live. Prefer the latter.
- The component is form-associated. Screen readers that announce a form control's name from a `<label>` will find one if you associate it, but the pattern verified by the component's own tests is `aria-labelledby`.
- Do not add `role` or `aria-checked` yourself. You will be fighting `ElementInternals`, and the two can disagree.

### iOS

- `Warp.Switch` wraps a SwiftUI `Toggle` and calls `.labelsHidden()`, so the built-in label slot is empty by design. Supply `.accessibilityLabel(_:)`.
- `state: .disabled` applies SwiftUI's `.disabled()`, which VoiceOver reports as dimmed.
- The frame is fixed at 44×24pt via `.frame(width: 44, height: 24)`, so the control itself cannot satisfy the 44×44pt target minimum. Add padding around it.
- Support Dynamic Type in the surrounding label; the control does not scale.

### Android

- `WarpSwitch` sets `contentDescription = contentDescr ?: ""`. The fallback is an **empty string, not null**, so omitting `contentDescr` does not fall through to some other source of a name — it sets an empty one. This is the most common way to ship an unlabelled Warp switch.
- `Role.Switch` is applied through `toggleable`, which also makes the control focusable and gives TalkBack its double-tap.
- The `enabled` parameter is inverted relative to every other platform: `enabled = false` is the disabled state.
- The control is 44×24dp against a 48×48dp minimum. Expand the touch target through the `modifier` or make the row clickable.
- Use scalable units (sp) for the label.

## Motion and animation

All three platforms animate the handle, and **none of them checks a reduced-motion preference**:

| Platform | Animation |
| --- | --- |
| Web | CSS transitions on the track colour and the handle transform |
| iOS | `.easeInOut` on the track colour and the handle offset |
| Android | A 200 ms `tween` driving colour and offset together |

The movement is small and local, so it is unlikely to cause discomfort on its own. It becomes a problem when a toggle also animates a large region of the page — that part is yours to gate behind `prefers-reduced-motion` (web), `UIAccessibility.isReduceMotionEnabled` (iOS), or the `ANIMATOR_DURATION_SCALE` setting (Android).

Never make a switch flash or pulse to draw attention. Content flashing more than three times per second is a WCAG failure.

## Known gaps

Verified against the component source. Each of these is something the component does not do for you:

| Gap | Platforms | What to do |
| --- | --- | --- |
| No label of any kind | All | Always supply a name, and prefer a visible one |
| `contentDescr` defaults to an empty string | Android | Always pass `contentDescr` |
| Touch target is 24 tall, under the 44pt / 48dp minimums | All | Extend the target around the control or make the row tappable |
| `aria-label` is captured only at connect time | Web | Use `aria-labelledby` if the name changes |
| Animations ignore reduced-motion settings | All | Gate any larger motion the toggle triggers |
| No loading, error, or indeterminate state | All | Handle failure in the surrounding UI; see [Usage](/components/switch/usage.md) |

## Testing

- **Screen readers**: test with VoiceOver on macOS and iOS, TalkBack on Android, and NVDA or JAWS on Windows. Confirm you hear a meaningful name, the word "switch", and the correct state — all three, every time.
- **Test the unlabelled case deliberately.** Render the switch without a name and listen. On Android especially, an empty `contentDescription` produces a switch that announces its state and nothing else, which is easy to miss if you only ever test the happy path.
- **Automated checks will not catch the ARIA on web.** axe-core cannot read attributes set through `ElementInternals`, and the component's own test suite disables `aria-required-attr` and `aria-prohibited-attr` for exactly this reason. A clean axe report says nothing about this component's role or state — verify in the browser's accessibility tree instead.
- **Keyboard only**: tab to the switch, toggle with <kbd>Space</kbd> and with <kbd>Enter</kbd>, and confirm the focus ring is visible. Then check that modifier combinations do not toggle it, and that a disabled switch is skipped entirely.
- **Touch targets**: measure the real tappable area, not the drawn control. Test one-handed on the largest phone you support.
- **Colour**: check the track, border, and handle at 3:1 in every brand and both themes. Then view the screen in greyscale and confirm you can still tell on from off — and, separately, that you can tell disabled-on from disabled-off.
- **Zoom and text size**: check at 200% browser zoom and at the largest Dynamic Type and Android font settings. The label must still be beside the switch it names.

<component-questions />
