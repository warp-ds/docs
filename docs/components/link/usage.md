# Link - Usage
Link component to use when creating links that look like buttons.

<ComponentsStatus />

## Best practices / usage guidelines

- Always underline inline links to help users easily identify the interactive portion of the text.
- When using standalone links within a list, underlining isn’t required—as long as it’s visually obvious that the items are links (e.g., by grouping them under a clear heading or using consistent link styling).
- Links offer a lightweight navigation method, but like other interactive elements, overusing them can clutter the page and hinder users from identifying their next steps. This is particularly important with inline links, which should be used sparingly to maintain readability and reduce cognitive load.
- Links should be concise and not exceed more than a few words.
- Do not hyperlink the full stop in a sentence.
- An icon can be added to the link when it enhances clarity about the destination (e.g. indicating that the link opens an external site or downloads a file. Do not underline the icon to signal interaction.
- In web development, it’s possible to style links to look like buttons. However, we do not recommend intentionally using links styled as buttons.

### When to use

Use links when you want users to:

- Navigate to a different page within the application.
- Navigate to an entirely different site.
- Jump to a section or element on a page (anchor link).
- Link to emails or phone numbers.

### When not to use

- Do not use links for actions that will change data or manipulate how it is displayed, change a state, or trigger an action. Instead, use [Buttons](../button/index.md) to guide users to specific actions.
- Do not use disabled links.
- Do not use links without destination.

## Behavior

- Supports internal and external links.
- Supports different interactive states to signal interactivity.
- Links receive Warp’s global focus indicator styling when navigating with a keyboard.

## Interaction

### States

| **State**    | **Web**                                                                             | **Native**                                                                |
| ------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Default**  | Default colour with optional underline based on use case.                           | No underline; styled with default color.                                  |
| **Hover**    | Pointer cursor appears and text link underline toggles depending on use case.       | Pointer cursor appears and underline disappear to indicate interactivity. |
| **Focus**    | Warp focus indicator appears and text link underline toggles depending on use case. | System-native focus indicator (if applicable).                            |
| **Active**   | Maintains Hover state behavior.                                                     | Maintains Hover state behavior. Haptic feedback (if applicable).          |
| **Visited**  | Same as Default state behavior.                                                     | N/A                                                                       |
| **Disabled** | N/A                                                                                 | N/A                                                                       |

### Mouse

Users can open a link by clicking anywhere on the link text.

### Keyboard

Users can open a link by pressing Enter while the link has focus. For additional keyboard interactions, see the Accessibility section.

### Underline behavior

On web platforms, the underline behavior is based on the default styling configuration:

- If shown by default, the underline is removed on Hover and Active states for interaction contrast.
- If not shown by default (subtle), the underline appears on Hover and Active states to signal interaction.

On native platforms (iOS, Android, desktop apps):

- Underlines are typically not shown for links by default.
- Interactivity is communicated via color, touch feedback, and sometimes icons.
- This aligns with native platform conventions and avoids introducing unfamiliar patterns.

::: image-block
![Example of interaction](/components/link/link-interaction.svg)
:::

## Placement

Inline links usually sit within a sentence or paragraph, while standalone links can sit on their own, separated from other text. Consider reducing the number of inline links in a single sentence to simplify the message.

::: image-block
![A light blue alert box labeled “Complete your profile” with a short description: “Add 2FA to your account for an extra layer of security.” The sentence includes two inline hyperlinks: “Update your profile” and “how we keep your account secure.” A small info icon precedes the title. Below the box is a caption: “Example of inline links on a paragraph.”](/components/link/link-placement-1.svg) 
:::

::: image-block
![A carousel-style card section titled “About the neighbourhood,” with an “Explore” link in the top right corner. Two cards are visible: the first card shows walking times to public transport (bus, train, tram) and includes a link labeled “More about transportation.” The second card shows school distances and ends with a link labeled “More about schools.” A yellow bus icon appears at the bottom of the first card. Below the module is a caption: “Example of subtle links.”](/components/link/link-placement-2.svg) 
<br />
![A section titled “Saved searches” containing a vertical list of hyperlinked saved items: “pwbtbs,” “HAY C44 table,” “Robin IKEA, Furniture and interior,” and “Lucie Kaas.” At the bottom is a link in bold: “All saved searches.” Below the list is a caption: “Example of a list of links.”](/components/link/link-placement-3.svg) 
<br />
![A footer layout from the FINN.no website featuring the FINN logo and the tagline “Mulighetenes marked.” It includes four main link categories: - For businesses (e.g., “Become a business customer”), - About FINN (e.g., “Work at FINN”), - Privacy (e.g., “Privacy policy,” “Cookies”), - Get help (e.g., “Customer support,” “Terms of use”). At the bottom, social media icons for Facebook, X (formerly Twitter), Instagram, and YouTube are displayed. Below that is a copyright notice and a legal disclaimer. Caption reads: “Example of subtle links in a footer.”](/components/link/link-placement-4.svg)
:::

### Content guidelines
“Hyperlinks are the magical portals of the internet that teleport you from one website to another with a simple click.” [Read more about hyperlinks and writing best practices.](https://www.astro-contentguide.com/05b2d7be6/p/370a5d-hyperlinks)

<component-questions />
