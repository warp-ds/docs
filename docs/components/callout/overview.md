# Callout - Overview

Callouts are snippets of information, drawing attention to important content. A callout is anchored to something on screen — a button, a field, a piece of copy — and points at it with an arrow.

See also [Tooltip](/components/tooltip/overview.md), [Popover](/components/popover/overview.md), [Alert](/components/alert/overview.md), and [Box](/components/box/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="t4">Inline type</h3>
        <w-attention callout placement="right" show class="flex items-center">
            <div slot="target" class="mr-8">
                <w-box neutral>I am a box full of info</w-box>
            </div>
            <span slot="message">Callout message</span>
        </w-attention>
    </div>
    <div>
        <h3 class="t4">Inline type, pointing down at its target</h3>
        <w-attention callout placement="top" show class="inline-flex flex-col items-center">
            <span slot="message">Boosted ads get 3x more views</span>
            <div slot="target" class="mt-8">
                <w-button variant="secondary">Boost ad</w-button>
            </div>
        </w-attention>
    </div>
    <div>
        <h3 class="t4">Popover type (highlight)</h3>
        <w-attention highlight placement="right" distance="16" can-close show>
            <w-button slot="target" variant="utility">Target element</w-button>
            <span slot="message">Highlight message that is dismissable</span>
        </w-attention>
    </div>
</style-isolate>

## General

A callout is a small speech bubble that names one thing. It carries a short message, an arrow pointing at the element the message is about, and optionally a close button. It has no icon, no heading, no status colour and no action button — everything it has to say fits in a sentence.

Callout is not a status component. It does not turn red for an error or green for success, and it is not tied to something that just happened. Its job is to draw the eye to an element that is already on screen and explain why that element matters.

Callout is a **manually controlled** component on every platform: it is hidden until you show it, and it stays visible until you hide it. It has no timer, and closing it is your application's job — see [Behaviour](/components/callout/usage.md#behaviour) in Usage.

### Naming across platforms

The same two types go by different names in Figma, on web, and on the native platforms. Use this map when moving between a design and an implementation.

| Concept | Figma | Web (Elements) | iOS | Android |
| --- | --- | --- | --- | --- |
| Inline type | `Type=Inline` | `callout` | `.inline` | `CalloutType.Inline` |
| Popover type | `Type=Popover` | `highlight` | `.popover(onTapped:)` | `CalloutType.Popover` |
| Size | `Size=Default` / `Small` | not available | `.default` / `.small` | `CalloutSize.Default` / `Small` |
| Pointer direction | `Pointer` | `placement` | `arrowEdge` | `edge` |
| Dismissible | `Dismissble` | `can-close` | close icon appears when `onTapped` is set | `closable` |

The web property for the popover type is called `highlight`, not `popover`. On `w-attention` the `popover` property is a different, neutral-surfaced style documented under [Popover](/components/popover/overview.md).

## Types

### Inline

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/callout/callout-variants-inline.svg" alt="Inline callout reading 'Callout' with an arrow on its top edge, flat against the surface." />
  </div>
  <div class="py-16">

Use the inline type when the callout is part of the page layout and can take up space of its own.

The inline callout sits in the normal content flow and pushes surrounding content aside. It has no shadow, so it reads as part of the page rather than as something floating above it. Because it takes up layout space, it never covers anything.

Choose inline for messages that stay on screen for a while — a hint under a form field, a note next to a price, a tip attached to a setting.

  </div>
</div>

### Popover

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/callout/callout-variants-popover.svg" alt="Popover callout reading 'Callout' with a close button and a drop shadow, floating above the surface." />
  </div>
  <div class="py-16">

Use the popover type when the callout should float above the page without disturbing the layout.

The popover callout is lifted off the surface with a drop shadow and positioned relative to its anchor. It overlaps whatever is behind it, so it suits short-lived messages: an onboarding hint, a "new feature" pointer, a one-time nudge.

Pair the popover type with a close button so users can get it out of the way.

  </div>
</div>

## Sizes

Two sizes are available in Figma, on iOS, and on Android. The difference is the text style and the padding — the small size uses caption text, the default size uses body text. Web has no size property and always renders the default size.

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/callout/callout-sizes.svg" alt="Small callout reading 'Callout', shorter and with caption-sized text." />
  </div>
  <div class="py-16">

Use **default** in most places. It matches body text and stays readable at arm's length.

Use **small** only when the callout sits next to already-small content, such as a caption or a dense list row. A small callout attached to full-size content looks like a mistake rather than a deliberate step down.

  </div>
</div>

## Pointer direction

The pointer sits on the edge of the bubble that faces the anchor, so a callout below its anchor points up, and a callout to the left of its anchor points right.

Figma, iOS, and Android offer four directions: top, bottom, leading (left), and trailing (right). Web offers twelve, adding `-start` and `-end` alignments to each side — for example `bottom-start` keeps the bubble aligned to the left edge of its anchor. Anything beyond the four basic directions has no equivalent in the native components, so avoid it in a design that ships on all platforms.

## Anatomy

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/callout/overview-anatomy.svg" alt="Callout anatomy showing the container, the pointer on the top edge, the message text, and the close button." />
  </div>
  <div class="py-16">

1. **Container**: The bubble. Carries the callout background, a 2px border, and the corner radius — 8px at the default size, 6px at the small size. The popover type adds a medium drop shadow.
2. **Pointer**: The arrow on the edge facing the anchor. It is what makes a callout a callout — without it the component is just a coloured box.
3. **Message**: A single line of text. Callout takes plain text only on iOS and Android; web accepts markup, but the layout is built for one short sentence.
4. **Close button (optional)**: Dismisses the callout. Only shown when the callout is dismissible.

  </div>
</div>

<component-questions />
