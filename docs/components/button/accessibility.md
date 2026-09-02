# Button - Accessibility

An accessible Button communicates its name, role, state, and result, and works with keyboard, touch, screen reader, voice control, and enlarged text.

<ComponentsStatus />

## General

- Use the Warp Button component instead of recreating Button behaviour with a generic element.
- Give every Button a concise, unique accessible name. Visible text is the most reliable name and also supports voice control and magnification users.
- Use Button for actions and [Link](/components/link/overview.md) for navigation so the announced role matches the behaviour.
- Express disabled and loading states programmatically as well as visually. Do not rely on colour, opacity, or an animation alone.
- Keep the focus indicator visible. Do not remove it unless an equally clear replacement is provided.
- Ensure activation has a perceivable result. Announce asynchronous success or failure when the result does not move focus or update the Button label.

## Keyboard

| Key | Expected behaviour |
| --- | --- |
| `Tab` | Moves focus to an enabled Button. The focus indicator remains visible. |
| `Shift` + `Tab` | Moves focus to the previous enabled control. |
| `Enter` | Activates the focused Button. |
| `Space` | Activates the focused Button. |

Do not add custom arrow-key behaviour to an individual Button. When Buttons form a conventional action group, each enabled Button remains in the normal tab order.

Loading should prevent duplicate activation without unexpectedly moving focus. If the action replaces or removes the focused Button, move focus to the next logical task or announce the result from a status region.

## Screen reader

The accessible name should describe the result, such as “Save changes”, rather than the visual shape or a generic label such as “OK”.

- Let visible text provide the accessible name whenever possible.
- If the Button has only an icon, add visually hidden text or an equivalent platform label. Do not depend on the icon filename or a tooltip.
- Mark supporting icons as decorative so the icon and text are not announced twice.
- Announce loading as progress. Warp Elements exposes a localized progressbar announcement while `loading` is set; the application still needs to expose the final success or error result.
- Do not include unavailable actions in a way that confuses the task. If a disabled Button must remain discoverable, make its reason available in nearby text and verify how the platform exposes it.

## Visual

- Maintain at least 4.5:1 contrast for normal-size text and 3:1 for large text. Visible focus indicators and meaningful component boundaries need at least 3:1 contrast against adjacent colours.
- Do not use colour alone to distinguish Primary, Negative, loading, or disabled meaning. A clear label and surrounding context must carry the same information.
- Aim for a minimum 44×44 CSS-pixel touch target on Web and 44×44pt on iOS; use at least 48×48dp on Android. Preserve spacing around small Buttons when the visible control is smaller.
- Allow labels to reflow at 200% browser zoom and at large system text sizes. Do not truncate the words that distinguish one action from another.
- Check overlay variants against every image and media state they can cover. The background can change the effective contrast.
- Respect reduced-motion preferences. Warp Elements removes the loading-stripe animation when `prefers-reduced-motion: reduce` is active.

## Platform-specific accessibility

### Web

`w-button` renders a native HTML `button` and delegates focus to it. Its default type is `button`; set `type="submit"` or `type="reset"` only when that form behaviour is intended. When `loading` is set, the component exposes localized progress text with `role="progressbar"`.

- Use visible slotted text as the accessible name. For an icon-only action, include visually hidden text inside the component.
- Do not use `href` on `w-button` for new navigation. Use `w-link` so the element and announced role match the destination behaviour.
- Keep application-side guards against duplicate activation while loading or disabled. In Warp Elements 2.11.0, these attributes block pointer interaction on the host but are not forwarded to the inner native Button's `disabled` property, so keyboard and programmatic activation require explicit verification.
- Do not override the component's focus delegation or native keyboard behaviour.

These details were verified against Warp Elements 2.11.0, the version used by this documentation site.

### iOS

`Warp.Button` uses the native SwiftUI `Button`. Its loading state disables activation, and visible title text provides the standard accessible name and Button trait.

- Keep a text title for most actions. If surrounding code creates an icon-only action, provide an explicit accessibility label and retain at least a 44×44pt target.
- Verify loading with VoiceOver. The visual loading pattern does not by itself communicate progress or the final result.
- Test labels at large Dynamic Type sizes and avoid placing fixed-width constraints around the Button.
- Set the type explicitly in shared specifications because iOS defaults to Primary while Web defaults to Secondary.

### Android

`WarpButton` is built on the Material 3 Compose `Button`, which supplies standard Button semantics and keyboard or switch-access activation. Visible label text is exposed as the content description.

- Keep the target at least 48×48dp and do not remove the Material minimum interactive size.
- Verify loading with TalkBack. The loading state replaces the click action and shows a visual pattern, but the application must communicate ongoing progress and the result.
- Provide meaningful content descriptions for icons when they convey information; avoid repeating the visible Button label.
- Test long and translated labels because the component defaults to one line with ellipsis.
- Set the style explicitly in shared specifications because Android defaults to Primary while Web defaults to Secondary.

## Testing

- **Keyboard**: Tab forward and backward through every enabled Button. Activate with Enter and Space, and confirm loading or disabled actions cannot run twice.
- **Screen readers**: Test VoiceOver on macOS and iOS, TalkBack on Android, and NVDA or JAWS on Windows. Confirm the name, Button role, disabled state, loading feedback, and result are understandable.
- **Forms**: Verify `button`, `submit`, and `reset` behaviour. Confirm pressing Enter in a form triggers only the intended action and errors are announced.
- **Icon-only actions**: Navigate by controls and with voice input. Confirm the accessible name describes the outcome and is not duplicated by the icon.
- **Zoom and text size**: Check at 200% browser zoom and the largest practical Dynamic Type and Android font settings. Labels must remain complete and targets must not overlap.
- **Contrast and themes**: Test every used variant, interaction state, and overlay background in all supported brands and themes.
- **Motion**: Enable reduced-motion settings and confirm loading remains understandable without animation.
- **Automated checks**: Run axe or an equivalent scanner for names, roles, states, and contrast, then complete manual input and announcement testing. Automated checks cannot prove that an action is understandable or safe.

<component-questions />
