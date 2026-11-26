# Expandable - Usage

Expandable is a layout component used for creating content that can be expanded and collapsed. A title stays visible at all times; selecting it shows or hides the content underneath.

See also [Box](/components/box/overview.md), [Tabs](/components/tabs/overview.md), [Modal](/components/modal/overview.md), and [Divider](/components/divider/overview.md).

<ComponentsStatus />

## Guidelines

- Write a title that tells users what they will find inside, so they can decide whether to open it without guessing.
- Use one type per group. A list of expandables reads as one set only if every item looks the same.
- Start collapsed unless most users arriving on the page will want the content open.
- Keep the page's primary action outside the expandable. A button users cannot see until they open something is a button most of them will never find.
- On web, set `heading-level` when the titles work as section headings, so screen reader users can jump between them. See [Accessibility](/components/expandable/accessibility.md).

### When to use

- **For secondary detail** that some users want and others do not: specifications, shipping and return terms, the fine print of an offer.
- **For frequently asked questions**, where users scan the questions and open only the one that matches theirs.
- **To shorten a long page on small screens**, so the main content is not pushed below a wall of supporting text.
- **For optional settings or filters** that most users leave alone.

### When not to use

- **To switch between views of equal weight**, such as "Description" and "Reviews". Use [Tabs](/components/tabs/overview.md), which show that the options are alternatives.
- **When the user must respond before continuing.** Use [Modal](/components/modal/overview.md), which blocks the page until they do.
- **To group content that is always visible.** Use [Box](/components/box/overview.md).
- **For navigation.** A list of links to other pages should be links, not expandables that contain links.

## Behaviour

### Opening and closing

Selecting the title row opens or closes the expandable. On web, Enter and Space do the same when the title has keyboard focus. Each expandable is independent: opening one never closes another.

While collapsed, the content is hidden from everyone. It is not visible, keyboard users cannot tab into it, and screen readers do not read it. On web, users also cannot find it with the browser's find-in-page.

### Starting state and control

Every platform starts collapsed by default. What you can do after the first render differs:

| Platform | Set the starting state | Open or close from code later |
| --- | --- | --- |
| Web | `expanded` attribute | Yes — set or remove `expanded`. The attribute also updates when the user toggles it. |
| iOS | `isExpanded: true` | No. `isExpanded` only sets the starting state. |
| Android | `initiallyExpanded = true` | No. `initiallyExpanded` only sets the starting state. |

On web, `w-expandable` does not fire an event when the user opens or closes it. If you need to react to it, watch the `expanded` attribute.

### Animation

| Platform | Default | How to change it |
| --- | --- | --- |
| Web | Not animated | Add `animated` to animate the content opening and closing. |
| iOS | Animated | Set `isAnimated: false` to turn it off. |
| Android | Animated | Always animated; there is no option. |

The chevron rotates between its two positions on every platform.

### States

| State | What changes |
| --- | --- |
| Collapsed | Only the title is visible. The chevron points down. |
| Expanded | The content is visible below the title. The chevron points up. |
| Hover (web) | The title is underlined. In the box types, the surface also darkens. |
| Focus (web) | The title is underlined. There is no focus outline — see [Accessibility](/components/expandable/accessibility.md#known-gaps). |
| Pressed (web) | In the box types, the surface switches to its pressed colour. |

Expandable has no disabled state on any platform. If the content is not available, do not show the expandable.

## Content guidelines

### Title

Name what is inside. The title is the only part of the expandable users see before they decide to open it.

<DoDont>
<Do imgurl="/docs/components/expandable/DoDonts/usage-title-content-do.svg" imgalt="A collapsed expandable titled 'What does shipping cost?' on a product page.">

**"How much does shipping cost?"**

Users know what they will learn before they open it, and can skip it if they already know.

</Do>
<Do not imgurl="/docs/components/expandable/DoDonts/usage-title-content-dont.svg" imgalt="A collapsed expandable titled 'More info' on a product page.">

**"More info"**

Every expandable contains more info. Users have to open it to find out whether it is relevant, and screen reader users listing the page's controls hear a label that says nothing.

</Do>
</DoDont>

- Keep titles to one line on a phone. A title that wraps is harder to scan in a list.
- Write questions for FAQs ("Can I return the item?") and short noun phrases elsewhere ("Specifications", "Shipping and returns").
- Use sentence case and no end punctuation, except the question mark on questions.
- Do not write "Click to expand" or "Show more". The chevron already says the title can be opened.

### Content

- Write content that makes sense on its own. Users who open one expandable in a list may not have read the others.
- Keep it short enough to read without losing sight of the title. If the content runs to several screens, it probably belongs on its own page.
- Put the most important sentence first. Users who open an expandable are looking for one specific answer.

## Placement

- **Default** sits in the flow of your content, aligned with the text around it.
- **Box** works as a single, self-contained block within a page section. Leave space around it so the surface reads as one unit.
- **Box bleed** is for small screens where the expandable runs to the screen edge. On web, it extends 16px past its container on each side below 480px, so place it inside a container with 16px horizontal padding — any other padding leaves a gap or an overhang.
- **Default with divider** is for a stacked list. On web, wrap the group in its own container so the closing line lands under the last item, and do not put other elements between the items.
- Keep related expandables together in one group, in a logical order — most-asked question first, or the order users go through a task.

## Interaction

- **Web**: the title row is a button. In Box, Box bleed and Default with divider it spans the full width; in Default it covers only the title and chevron.
- **iOS**: the whole title row is tappable, including the empty space before the chevron.
- **Android**: only the chevron is tappable. Tapping the title text does nothing, which users may not expect. Keep this in mind when testing.
- Keep touch targets at least 44×44px on web, 44×44pt on iOS, and 48×48dp on Android. The Android chevron meets this; on web and iOS the title row is only as tall as the title text, so check the target size in your layout.
- Do not put another interactive element, such as a link or a button, inside the title. On web the title is already a button, and a control nested inside a button cannot be reached reliably.

## Best practices

<DoDont>
<Do imgurl="/docs/components/expandable/DoDonts/usage-critical-info-do.svg" imgalt="Checkout summary showing 'Total 1 249 kr' in full, with a collapsed 'Price breakdown' expandable below it.">

Show what users need to make a decision, and put the supporting detail in the expandable.

**Why**: Users see the total without doing anything. The breakdown is there for the few who want to check it.

</Do>
<Do not imgurl="/docs/components/expandable/DoDonts/usage-critical-info-dont.svg" imgalt="Checkout summary where the total price is hidden inside a collapsed 'Price details' expandable.">

Hide information users need to decide or act — a price, a deadline, a condition they are agreeing to.

**Why**: Many users never open an expandable. Anything inside it is information a large share of people will not see.

</Do>
</DoDont>
<DoDont>
<Do imgurl="/docs/components/expandable/DoDonts/usage-nesting-do.svg" imgalt="Three expandables at the same level: 'Shipping', 'Returns', and 'Warranty'.">

Keep expandables at one level. Split deep content into separate expandables side by side.

**Why**: Users can see every topic at a glance and open the one they need in a single step.

</Do>
<Do not imgurl="/docs/components/expandable/DoDonts/usage-nesting-dont.svg" imgalt="An expanded 'Help' expandable containing a 'Shipping' expandable, which contains an 'International' expandable.">

Nest an expandable inside another expandable.

**Why**: Content three levels down is hidden twice over. Users lose track of where they are, and screen reader users have to open each level to discover the next exists.

</Do>
</DoDont>

<component-questions />
