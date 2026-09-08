# Card - Usage

Card groups related information and actions in a distinct surface.

See also [Box](/components/box/overview.md), [Button](/components/button/overview.md), [Radio](/components/radio/overview.md), and [Checkbox](/components/checkbox/overview.md).

<ComponentsStatus />

## When to use

- Present a collection of distinct items, such as listings, saved searches, or guides.
- Give each item enough context for users to compare it with its neighbours before opening it.
- Keep information and actions for one item together when their relationship would otherwise be unclear.

## When another component fits better

- Use [Box](/components/box/overview.md) to group a section of content that does not represent a separate item.
- Use a simple list when a title and a small amount of text give users everything they need. Adding a surface to every row can make the list harder to scan.
- Use [Radio](/components/radio/overview.md) for one choice from a short set, or [Checkbox](/components/checkbox/overview.md) for independent selections. Add a card layout only when the choices need richer supporting content.
- Use [Alert](/components/alert/overview.md) for a message that needs attention, rather than relying on a card's appearance to communicate status.

## Choose the interaction

Decide whether the item opens a destination, performs an action, or represents a choice. Make that purpose apparent in its content and controls.

| User intent | Recommended interaction |
| --- | --- |
| Open the item | Make its title a descriptive link to the destination. |
| Act on the item | Provide a labelled button, such as “Save item” or “Contact seller”. |
| Choose one option | Use a labelled radio control within a named group. |
| Choose any number of items | Use a labelled checkbox for each item. |
| Read a summary | Keep the card as a noninteractive container. |

### Primary and secondary actions

Give the card a clear primary destination or action. Additional actions should have distinct labels and remain independently reachable. For example, the title can open a listing while “Save item” saves it.

Do not wrap a card containing buttons or form controls in a link. Keep those controls separate from the title link so saving an item does not also open it.

If you extend a primary link's pointer target across a card, preserve ordinary link behaviour and the separate targets of any secondary actions. Test opening in a new tab, selecting text, and reaching each control by keyboard. This behaviour depends on the implementation; Card does not supply the same click handling in every framework.

In Elements 2.11.0, `clickable` makes the card surface focusable and forwards Enter or Space to a click handler, but it does not give the focused surface an appropriate role and item name. Use a Card with real links and controls for the patterns above. The [accessibility guidance](/components/card/accessibility.md#elements) explains the limitations.

### Selection

Show whether users may choose one item or several before they interact. Keep the actual radio or checkbox visible, labelled, and synchronised with the application state. Selecting an item should not unexpectedly navigate away.

Do not rely on the selected border or colour to communicate the choice. In Elements 2.11.0, setting `selected` on a non-clickable card also adds an unnamed checked checkbox to the accessibility tree. For a composition with its own selection control, leave Card's `selected` unset and let that control communicate the state.

## Content and layout

Start with the information users need to recognise the item: a specific title, its distinguishing facts, and a short summary when needed. Put detailed descriptions on the destination page. Avoid repeating the title in the summary.

- Use the same information order across comparable cards. Keep price, location, and other key facts in predictable positions.
- Let titles and essential details wrap. Check long names, translated content, and missing optional information before choosing fixed dimensions.
- Keep images relevant to the item. Use alternative text when an image adds information; avoid repeating nearby text for a purely decorative image.
- Use badges for meaningful status, such as “Sold”. Keep that status understandable in text and explain any resulting change to the available actions.
- Give content and controls enough space inside the card. Card does not add inner padding for you.

Choose the collection layout according to the available space. Reduce columns as cards become too narrow to read or operate. Preserve a logical reading order when the layout changes, and avoid nesting one card inside another when a heading or divider can show the relationship.

## Best practices

### Identify the destination

<div class="card-guidance">
<DoDont>
<Do imgurl="/docs/components/card/DoDonts/usage-specific-title-do.png" imgalt="An oak dining table Card with the descriptive title link Oak dining table, followed by its price and collection details.">

Make the title identify the item, such as “Oak dining table”.

**Why**: Users can recognise the destination when scanning the cards or listening to a list of links.

</Do>
<Do not imgurl="/docs/components/card/DoDonts/usage-specific-title-dont.png" imgalt="The same dining table Card uses More details as its title link, leaving the item unidentified in the link text.">

Replace the title with a generic link such as “More details”.

</Do>
</DoDont>
</div>

### Keep comparable information in order

<div class="card-guidance">
<DoDont>
<Do imgurl="/docs/components/card/DoDonts/usage-consistent-order-do.png" imgalt="Dining table and reading chair Cards both show their title first, price second, and location third.">

Present the same types of detail in the same order across a collection.

**Why**: A stable structure helps users find and compare the information they need.

</Do>
<Do not imgurl="/docs/components/card/DoDonts/usage-consistent-order-dont.png" imgalt="The dining table Card shows title, price, then location, while the reading chair Card changes that order.">

Reorder the details independently on each card.

</Do>
</DoDont>
</div>

<component-questions />

<style scoped>
.card-guidance {
  container-type: inline-size;
}

.card-guidance :deep(.do-dont-grid) {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

@container (max-width: 620px) {
  .card-guidance :deep(.do-dont-grid) {
    grid-template-areas:
      'do-figure do-figure'
      'do-pill do-pill'
      'do-caption do-caption'
      'dont-figure dont-figure'
      'dont-pill dont-pill'
      'dont-caption dont-caption';
  }
}
</style>
