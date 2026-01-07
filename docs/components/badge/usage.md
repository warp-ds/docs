# Badge - Usage

Badges are small, contextual elements used to display concise, informative labels. They highlight relevant information such as statuses, categories, counts, roles, or activity indicators, helping users quickly identify and differentiate items at a glance.

Visually styled and colour-coded to indicate contextual metadata.

Related components: [Pill](../pill/index.md)

## Guidelines

- Badges are used to display small but yet important pieces of information in list views, cards, or dashboards.
- They should contain clear, easy-to-understand, and descriptive text, paired with intentional colour choices that reinforce their meaning.
- Use badges in a consistent way across your product to help users become familiar with their meaning.
- Use badges consistently across your product to help users quickly recognise and understand their purpose.

## When to use

- Use badges to highlight statuses, categories, or important updates.

## When not to use

- Don't use badges for large amounts of text, such as long descriptions, or critical information that users must engage with directly.
- Avoid using multiple badges in one place, which can clutter the UI and overwhelm users.
- Don't use badges for actions. They should be non-interactive.

## Behaviour

- Badges are non-interactive UI elements, meaning that no state changes are expected when users hover or tap/click on them.
- A badge's width automatically adjusts to fit its content, so it's important to keep the text concise. Overly long text can break the layout or require fallback behaviours such as truncation or text wrapping.

## Placement

Badges can be used as standalone elements or placed within a parent container, such as a card. When placing a badge inside a container, make sure to set the appropriate position prop so that the badge renders with the correct border radius. This ensures the badge visually aligns with the container's corner radius and overall style.

Although possible, avoid placing more than one badge per container.

:::image-block
![Mobile app screen showing a list of items for sale, each with a standalone badge indicating status such as "Active", "Draft", "Sold", or "Expired".](/components/badge/badge-placement-1.svg)
<br />
![Card component displaying a job listing with a "Deadline" badge positioned at the top left of the card.](/components/badge/badge-placement-2.svg)

:::

## Content guidelines

- Use descriptive text (use adjectives and avoid verbs).
- Avoid using multiple words.

<br>