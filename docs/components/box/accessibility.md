# Box - Accessibility

Box is a layout component used for separating content areas on a page. It groups related information inside a subtle surface so users can tell where one block of content ends and the next begins.

<ComponentsStatus />

## General

The grouping a Box creates is **visual**. A subtle background or a border tells sighted users "these things belong together", but it communicates nothing to a screen reader, and nothing to someone who cannot distinguish the surface from the page background.

If the grouping carries meaning, express it in the content — with a heading, a list, or a sentence — and not in the surface alone.

Box is never interactive. It takes no focus and has no states. Accessibility work therefore concentrates on two things: the semantics of the container, and the accessibility of the content you put inside it.

## Role and semantics

On web, Box applies `role="region"` by default. You can override it with the `role` property, or remove it entirely by passing an empty string (`role=""`).

The default is worth thinking about rather than accepting:

- **An unnamed region is not useful.** ARIA requires every `region` to have an accessible name, and screen readers generally do not expose an unnamed region as a landmark. A default `role="region"` with no name adds a semantic wrapper that most users never perceive.
- **Too many regions create noise.** Landmarks are a navigation aid. A page with eight region landmarks is harder to navigate than a page with two meaningful ones.

**Recommendation**: if the box is purely visual grouping, set `role=""` and structure the content with a heading instead. Reserve `role="region"` for a genuinely significant, named section of the page, and pick a more specific role from the [MDN WAI-ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types) reference when one fits better.

### Naming the region

How you name the region depends on the framework, because the two implementations put the role in different places:

- **React and Vue** render a single element (`div` by default, configurable with the `as` property) and place `role` on it. An `aria-label` or `aria-labelledby` you pass lands on the same element, so the region is named correctly.
- **Elements** renders `w-box` as a web component and places `role` on a `div` inside its shadow root. An `aria-label` set on the `<w-box>` host is therefore **not** associated with that role. If you need a named landmark with the Elements version, set `role=""` on the box and wrap it in your own labelled element.

Prefer `aria-labelledby` pointing at a visible heading inside the box over `aria-label`. A visible name helps everyone, not just screen reader users.

## Heading structure

- Use a real heading element inside the box when the content needs a name. Do not fake it with bold text — bold is not announced as a heading and cannot be navigated to.
- Keep the heading level correct for the surrounding page outline. The box does not create a new document section, so do not restart at `h2` inside a page that is already several levels deep.
- Do not skip levels to get a smaller heading. Use the Warp typography classes to control size instead.

## Keyboard interaction

Box adds nothing to the tab order — it is not focusable, and it should not be.

| Key | Result |
| --- | --- |
| <kbd>Tab</kbd> | Moves to the next focusable element inside or after the box. The box itself is skipped. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves to the previous focusable element. |

- Interactive elements inside the box follow normal DOM order. Keep the visual order and the DOM order the same.
- Every link and button inside the box must show a visible focus indicator. Warp components handle this — do not remove the outline with custom CSS.
- Do not add `tabindex` to the box. A focusable element with no role and no action is a dead stop for keyboard users.
- Do not attach a click handler to the box. A click target that is not a button or link cannot be reached by keyboard at all.

## Screen reader considerations

- With `role=""`, the box is transparent to assistive technology: users hear the content, in order, with no wrapper. For purely visual grouping this is the correct outcome.
- With a **named** region, screen reader users can jump to the box via the landmarks list and hear its name on entry.
- With an **unnamed** region, most screen readers announce nothing extra, so the box neither helps nor hurts — it is just an unused wrapper.
- Box has no live region behaviour and announces nothing on its own. If content inside the box updates and users need to know, use [Alert](/components/alert/overview.md) or [Toast](/components/toast/overview.md), which are built for that.
- An icon inside the box is decorative in most cases. If it carries meaning that the text does not, give it a text alternative; otherwise hide it from assistive technology so it is not announced as a stray graphic.

## Visual accessibility

### Colour and contrast

- Text inside the box must meet at least **4.5:1** against the box surface, or **3:1** for large text (18.66px bold, or 24px and above).
- Interactive elements and meaningful graphics inside the box need at least **3:1** against the surface.
- Use the Warp surface and text tokens together and do not override them. The neutral, info, and bordered surfaces are defined per brand and per theme, so a hard-coded text colour that passes in one brand or in light mode can fail in another.
- The border on the bordered variant is a visual aid, not information. Do not rely on it to convey meaning, and do not treat it as a substitute for a heading.

### Colour independence

Neutral and info differ only by surface colour. Users with low vision or colour vision deficiency may not distinguish them at all, and neither variant carries a status. Never use the choice between them to communicate anything — say it in the text.

### Text resizing and reflow

- Content must remain readable and usable at 200% zoom, and no content may be lost when text is enlarged.
- The box grows with its content. Do not set a fixed height — text that outgrows a fixed box gets clipped, which is a WCAG failure.
- Long words and URLs wrap inside the box rather than overflowing horizontally.

## Platform-specific accessibility

### Web

- Default `role="region"`; opt out with `role=""`.
- Interactive elements inside the box should be at least 44×44px.

### iOS

- VoiceOver reads the box contents in visual order: heading, then body text, then link, then button.
- Support Dynamic Type. Do not constrain the box height, so text can grow with the user's preferred size.
- Interactive elements need a minimum touch target of 44×44pt.
- The tooltip image shown by `shouldShowToolTipImage` is decorative. Make sure the meaning it suggests is also in the text.

### Android

- TalkBack reads the box contents in visual order.
- When you supply an icon, always supply a content description with it — both in Compose and in the legacy `WarpBoxView`, which exposes `boxIconContentDescr` for this purpose. If the icon is decorative, pass a null content description rather than an empty description string.
- Support scalable text (sp units) and avoid fixed heights.
- Interactive elements need a minimum touch target of 48×48dp.

## Motion and animation

Box has no animation and no transitions, so there is nothing to reduce. If you animate content inside the box, respect `prefers-reduced-motion` on web and the equivalent Reduce Motion setting on iOS and Android.

<component-questions />
