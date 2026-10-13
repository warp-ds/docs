# Badge - Usage

Badges label a small piece of metadata—such as a status, category, price, or sponsorship—so people can scan nearby content quickly.

<ComponentsStatus />

## Guidelines

- Use a badge only when its label supports nearby content.
- Give the same label and variant the same meaning throughout your product.
- Make the text carry the meaning. Colour and icons should reinforce the label, not replace it.

## When to use

- To show a status, category, count, role, or other compact metadata.
- To identify price or sponsored content on a card or image.
- To highlight a small but important update in a list, card, or dashboard.

## When not to use

- For critical feedback or a message that needs a response. Use an [Alert](../alert/overview.md).
- For descriptions, instructions, or other long-form content. Use regular page content or a [Box](../box/overview.md).

## Behaviour

<DoDont>
<Do imgurl="/docs/components/badge/DoDonts/usage-non-interactive-do.png" imgalt="A listing card uses an Available badge for status and a blue View listing button for the action.">

Use a badge for metadata and a Button or Link for the action.

**Why**: Interactive controls provide the expected focus, hover, pressed, and assistive-technology behaviour.

</Do>
<Do not imgurl="/docs/components/badge/DoDonts/usage-non-interactive-dont.png" imgalt="A listing card incorrectly presents View listing as a pale blue badge.">

Use a badge as the action itself.

**Why**: Badges provide no interaction states or control semantics, so people can miss the action.

</Do>
</DoDont>

## Placement

Badges can stand alone or sit inside a parent container such as a card. When you place a badge in a corner, set the appropriate position so its border radius aligns with the container.

:::image-block
![Mobile app screen showing a list of items for sale, each with a standalone badge indicating status such as "Active", "Draft", "Sold", or "Expired".](/components/badge/badge-placement-1.svg)
<br />
![Card component displaying a job listing with a "Deadline" badge positioned at the top left of the card.](/components/badge/badge-placement-2.svg)

:::

## Content guidelines

<DoDont>
<Do imgurl="/docs/components/badge/DoDonts/usage-concise-labels-do.png" imgalt="A listing uses the concise badge label Sold.">

Use a short, descriptive label such as "Sold".

**Why**: A compact label stays scannable and leaves room for the content it describes.

</Do>
<Do not imgurl="/docs/components/badge/DoDonts/usage-concise-labels-dont.png" imgalt="A listing uses the sentence This item is no longer available as a badge, crowding the price.">

Write a sentence such as "This item is no longer available" inside a badge.

**Why**: Long labels make the badge compete with or cover nearby content.

</Do>
</DoDont>

## Best practices

<DoDont>
<Do imgurl="/docs/components/badge/DoDonts/usage-semantic-colour-do.png" imgalt="A rejected listing uses the negative red badge variant.">

Match the variant to the meaning. Use the negative variant for "Rejected".

**Why**: The colour supports the label and helps people recognise the outcome quickly.

</Do>
<Do not imgurl="/docs/components/badge/DoDonts/usage-semantic-colour-dont.png" imgalt="A rejected listing incorrectly uses the positive green badge variant.">

Choose a variant for decoration. A positive "Rejected" badge contradicts its label.

**Why**: Inconsistent colour meanings make every badge harder to interpret.

</Do>
</DoDont>

<DoDont>
<Do imgurl="/docs/components/badge/DoDonts/usage-one-badge-do.png" imgalt="A car listing uses one Sponsored badge and presents dealer and delivery details as regular text.">

Show one badge with the most important distinction and leave supporting details as regular text.

**Why**: A single badge preserves a clear visual priority.

</Do>
<Do not imgurl="/docs/components/badge/DoDonts/usage-one-badge-dont.png" imgalt="A car listing is crowded with Sponsored, Dealer, Delivery, and EV badges.">

Turn every attribute into a badge.

**Why**: When every detail is highlighted, none of them stands out.

</Do>
</DoDont>

<component-questions />
