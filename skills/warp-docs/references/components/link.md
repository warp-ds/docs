# Link

Link component to use when creating links that look like buttons.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/link/overview), [Usage](https://warp-ds.github.io/docs/components/link/usage), [Styling](https://warp-ds.github.io/docs/components/link/styling), [Accessibility](https://warp-ds.github.io/docs/components/link/accessibility), [React 19](https://warp-ds.github.io/docs/components/link/frameworks/react-19), [Elements](https://warp-ds.github.io/docs/components/link/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/link/frameworks/android)

**Framework support:** Android, Elements, React 19

## Overview

Link component to use when creating links that look like buttons.

A link is interactive text that serves as a lightweight navigational element. It directs users to another location, such as a different website, a specific section on the same page, or an external resource.

See the component in Figma: [Warp - Components / Link](https://www.figma.com/design/pLorEdyAMCZXoxkaCSgREO/Warp-Portal---Documentation?node-id=2436-1497&m=dev)

Related components: [Button](https://www.figma.com/design/pLorEdyAMCZXoxkaCSgREO/Warp-Portal---Documentation?node-id=2392-6379&m=dev)

![Text link example](https://warp-ds.github.io/docs/components/link/link-text-styled.svg)

This is the default and recommended link variant. It renders as hyperlinked text and can be used either as a standalone element or inline within a block of text.

![Button styled link example](https://warp-ds.github.io/docs/components/link/link-button-styled.svg)

Alternative variant in which the link is visually styled as a button (web only). This variant is not recommended, but it is still available in Warp for legacy support.

![A visual diagram of a text link with two labeled parts. The link reads "This is a link" and has a trailing external link icon. Label 1 points to the underlined blue hyperlink text, while Label 2 points to the trailing icon. Below the diagram, a legend explains: Hyperlinked text/text link: Communicates what is being linked to. Trailing icon: Visual indicator that reinforces the purpose of the text link (optional).](https://warp-ds.github.io/docs/components/link/link-anatomy.svg)

1.  **Hyperlinked text/text link:** Communicates what is being linked to.
2.  **Trailing icon:** Visual indicator that reinforces the purpose of the text link (optional).

## Inline Demo Markup

```html
<div class="flex flex-wrap gap-16">
        <w-link variant="primary" href="https://example.com">Primary</w-link>
        <w-link variant="secondary" href="https://example.com">Secondary</w-link>
        <w-link variant="negative" href="https://example.com">Negative</w-link>
        <w-link variant="utility" href="https://example.com">Utility</w-link>
        <w-link variant="utilityQuiet" href="https://example.com">Utility Quiet</w-link>
        <w-link variant="quiet" href="https://example.com">Quiet</w-link>
        <w-link small href="https://example.com">Small</w-link>
    </div>
```

## Usage

Link component to use when creating links that look like buttons.

-   Always underline inline links to help users easily identify the interactive portion of the text.
-   When using standalone links within a list, underlining isn’t required—as long as it’s visually obvious that the items are links (e.g., by grouping them under a clear heading or using consistent link styling).
-   Links offer a lightweight navigation method, but like other interactive elements, overusing them can clutter the page and hinder users from identifying their next steps. This is particularly important with inline links, which should be used sparingly to maintain readability and reduce cognitive load.
-   Links should be concise and not exceed more than a few words.
-   Do not hyperlink the full stop in a sentence.
-   An icon can be added to the link when it enhances clarity about the destination (e.g. indicating that the link opens an external site or downloads a file. Do not underline the icon to signal interaction.
-   In web development, it’s possible to style links to look like buttons. However, we do not recommend intentionally using links styled as buttons.

Use links when you want users to:

-   Navigate to a different page within the application.
-   Navigate to an entirely different site.
-   Jump to a section or element on a page (anchor link).
-   Link to emails or phone numbers.

-   Do not use links for actions that will change data or manipulate how it is displayed, change a state, or trigger an action. Instead, use [Buttons](https://warp-ds.github.io/docs/components/button/overview) to guide users to specific actions.
-   Do not use disabled links.
-   Do not use links without destination.

-   Supports internal and external links.
-   Supports different interactive states to signal interactivity.
-   Links receive Warp’s global focus indicator styling when navigating with a keyboard.

| State | Web | Native |
| --- | --- | --- |
| Default | Default colour with optional underline based on use case. | No underline; styled with default color. |
| Hover | Pointer cursor appears and text link underline toggles depending on use case. | Pointer cursor appears and underline disappear to indicate interactivity. |
| Focus | Warp focus indicator appears and text link underline toggles depending on use case. | System-native focus indicator (if applicable). |
| Active | Maintains Hover state behavior. | Maintains Hover state behavior. Haptic feedback (if applicable). |
| Visited | Same as Default state behavior. | N/A |
| Disabled | N/A | N/A |

Users can open a link by clicking anywhere on the link text.

Users can open a link by pressing Enter while the link has focus. For additional keyboard interactions, see the Accessibility section.

On web platforms, the underline behavior is based on the default styling configuration:

-   If shown by default, the underline is removed on Hover and Active states for interaction contrast.
-   If not shown by default (subtle), the underline appears on Hover and Active states to signal interaction.

On native platforms (iOS, Android, desktop apps):

-   Underlines are typically not shown for links by default.
-   Interactivity is communicated via color, touch feedback, and sometimes icons.
-   This aligns with native platform conventions and avoids introducing unfamiliar patterns.

![Example of interaction](https://warp-ds.github.io/docs/components/link/link-interaction.svg)

Inline links usually sit within a sentence or paragraph, while standalone links can sit on their own, separated from other text. Consider reducing the number of inline links in a single sentence to simplify the message.

![A light blue alert box labeled “Complete your profile” with a short description: “Add 2FA to your account for an extra layer of security.” The sentence includes two inline hyperlinks: “Update your profile” and “how we keep your account secure.” A small info icon precedes the title. Below the box is a caption: “Example of inline links on a paragraph.”](https://warp-ds.github.io/docs/components/link/link-placement-1.svg)

![A carousel-style card section titled “About the neighbourhood,” with an “Explore” link in the top right corner. Two cards are visible: the first card shows walking times to public transport (bus, train, tram) and includes a link labeled “More about transportation.” The second card shows school distances and ends with a link labeled “More about schools.” A yellow bus icon appears at the bottom of the first card. Below the module is a caption: “Example of subtle links.”](https://warp-ds.github.io/docs/components/link/link-placement-2.svg)  
![A section titled “Saved searches” containing a vertical list of hyperlinked saved items: “pwbtbs,” “HAY C44 table,” “Robin IKEA, Furniture and interior,” and “Lucie Kaas.” At the bottom is a link in bold: “All saved searches.” Below the list is a caption: “Example of a list of links.”](https://warp-ds.github.io/docs/components/link/link-placement-3.svg)  
![A footer layout from the FINN.no website featuring the FINN logo and the tagline “Mulighetenes marked.” It includes four main link categories: - For businesses (e.g., “Become a business customer”), - About FINN (e.g., “Work at FINN”), - Privacy (e.g., “Privacy policy,” “Cookies”), - Get help (e.g., “Customer support,” “Terms of use”). At the bottom, social media icons for Facebook, X (formerly Twitter), Instagram, and YouTube are displayed. Below that is a copyright notice and a legal disclaimer. Caption reads: “Example of subtle links in a footer.”](https://warp-ds.github.io/docs/components/link/link-placement-4.svg)

“Hyperlinks are the magical portals of the internet that teleport you from one website to another with a simple click.” [Read more about hyperlinks and writing best practices.](https://www.astro-contentguide.com/05b2d7be6/p/370a5d-hyperlinks)

## Styling

Link component to use when creating links that look like buttons.

![A link labeled “Explore” followed by an external link icon. A dashed red measurement line indicates 4px spacing between the text and the icon.](https://warp-ds.github.io/docs/components/link/link-layout-1.svg)

Ensure a 4px spacing between the text link and the trailing icon.

![A long hyperlink reading “Link with a very long link text with icon. Extra long text. Looooooooong.” wraps across multiple lines within a container. The trailing external link icon is vertically centered beside the text block. ](https://warp-ds.github.io/docs/components/link/link-layout-2.svg)

When the link text exceeds its container, it should wrap to the next line. The icon remains vertically aligned in the centre of its container.

Text/Link is the default color token available for links. Alternatively, you can use Text/Default on navigation elements, such as header and footer.

| Element | Figma token |
| --- | --- |
| Text | Semantic/Typography/Text/Link |
| Text (navigation only) | Semantic/Typography/Text/Default |
| Icon | Semantic/Color/Icon/Primary |

There are four sizes available for links: preamble, body, caption and detail. Sizing applies to both standalone and inline links. Inline link sizes should match the type size of the text it is inline with. Standalone link sizes should match the default body copy size of the page.

| Text style | Figma token | Font-size | Line-height | Icon size | Example |
| --- | --- | --- | --- | --- | --- |
| Preamble Link | Semantic/Typography/Preamble | 20px | 26px | 24px |  |
| Body Link | Semantic/Typography/Body | 16px | 22px | 16px |  |
| Caption Link | Semantic/Typography/Caption | 14px | 18px | 16px |  |
| Detail Link | Semantic/Typography/Detail | 12px | 16px | – |  |

## Accessibility

Link component to use when creating links that look like buttons.

For accessibility guidelines related to code, refer to the Code section.

-   Cursor change and underline on hover on web.

-   Ensure links receive Warp’s global focus indicator styling when navigating with a keyboard.

-   Screen readers expect links and buttons to behave differently. Misusing them can be disorienting.
-   Screen reader users often navigate via link lists, so avoid vague labels like "read more" or "click here".
-   Links must have appropriate link text that is sufficiently descriptive, giving users enough information to understand where the link will take them.

## Frameworks

### React 19

Link component to use when creating links that look like buttons.

[Android](https://warp-ds.github.io/docs/components/link/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/link/frameworks/elements)[React 19](https://warp-ds.github.io/docs/components/link/frameworks/react-19)

You can import the component like so:

```js
import { Link } from "@warp-ds/components/react/link";
```

This is same as an html anchor tag

```jsx
<Link href="https://google.com">Link</Link>
```

You should ideally use this when you need a Link styled as a button. Check the visual options below.

#### Primary 

The primary button link is a call to action. As a general rule, there should only be one of them on the screen. This guides the user towards the happy path.

```jsx
<Link button variant="primary" href="https://google.com/" target="_blank">
  Link as button primary
</Link>
```

#### Negative 

Used for destructive actions, like deletion. Shouldn't be used on the same screen as a primary button link.

```jsx
<Link button variant="negative" href="https://google.com/" target="_blank">
  Link as button negative
</Link>
```

#### Secondary 

Secondary button links are without background, and are often used for secondary actions.

```jsx
<Link button variant="secondary" href="https://google.com/" target="_blank">
  Link as button secondary
</Link>
```

#### Utility 

The `utility` button link.

```jsx
<Link button variant="utility" href="https://google.com/" target="_blank">
  Link as button utility
</Link>
```

#### Negative Quiet 

The `negativeQuiet` button link.

```jsx
<Link button variant="negativeQuiet" href="https://google.com/" target="_blank">
  Link as button negative quiet
</Link>
```

#### Utility Quiet 

The `utilityQuiet` button link.

```jsx
<Link button variant="utilityQuiet" href="https://google.com/" target="_blank">
  Link as button utility quiet
</Link>
```

#### Small 

```jsx
<Link button size="small" href="https://google.com/" target="_blank">
  Link as button
</Link>
```

#### Full width 

The fullWidth prop sets the links width to its parent's width.

```jsx
<Link button fullWidth variant="primary" href="https://google.com/">
  Go to google.com
</Link>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode |  | The contents of the Link |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |
| onClick | (event: MouseEvent) => void |  | Handler that is called when the link is clicked. |
| button | boolean | false | Set the link to look like a button. |
| variant | 'primary' \| 'secondary' \| 'negative' \| 'utility' \| 'overlay' \| 'overlayInverted' \|'quiet'\| 'negativeQuiet' \| 'utilityQuiet'\| 'overlayQuiet' \| 'overlayInvertedQuiet' \| 'link' |  | Set the correct variant on the link. |
| size | 'small' \| 'default' | default | Set the link to be either small or default size. |
| fullWidth | boolean | false | Sets the links width to its parent's width. Useful especially on mobile when link should take full width. |
| href | string |  | Set the href for the location where clicking the link will take you to. |
| target | string |  | Anchor target, see The Anchor element / MDN Web Docs. |
| rel | string |  | The relationship of the linked URL. |

### Elements

Link component to use when creating links that look like buttons.

[Android](https://warp-ds.github.io/docs/components/link/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/link/frameworks/elements)[React 19](https://warp-ds.github.io/docs/components/link/frameworks/react-19)

**Do:**

-   Use the `<w-link>` component when you need a link that looks like a button.

**Do Not:**

-   Use the `<w-link>` component when you need a link that looks like a link. In that case, use the native `<a>`tag.
-   Use the `<w-link>` component when you need a button that looks like a button. In that case, use the native `<w-button>`tag.
-   Use the `<w-link>` component when you need a button that looks like a link. In that case, use the native `<w-button>`tag.

The following table illustrates use cases and which element to use for the purpose.

| if desired behaviour is | and desired styling is | then use |
| --- | --- | --- |
| link | button | w-link |
| button | button | w-button |
| link | link | a |
| button | link | w-button |

```html
<w-link href="https://example.com">Go to example.com</w-link>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| autofocus | boolean | false | Focus the link after it is rendered. |
| variant | 'primary' \| 'secondary' \| 'negative' \| 'negativeQuiet' \| 'utility' \| 'utilityQuiet' \| 'overlay' \| 'quiet' \| 'overlayInverted' \| 'overlayQuiet' \| 'overlayInvertedQuiet' | 'secondary' | Visual style for the link/button. Throws an error if an unsupported value is provided. |
| small | boolean | false | Render a smaller version. |
| href | string |  | The URL the link points to. |
| disabled | boolean | false | Disables interaction and applies disabled styling. |
| target | string |  | Where to display the linked URL (e.g. _blank). |
| rel | string |  | Relationship of the linked URL. If target="_blank" and rel is not provided, the component uses noopener. |
| full-width | boolean | false | Makes the link take up the full width of its parent. |

#### Slots 

| Name | Description |
| --- | --- |
| default | Link text / content. |

#### Href (`href`) 

The URL the link points to.

```html
<w-link href="https://example.com">Go to example.com</w-link>
```

#### Variant (`variant`) 

Controls the visual style.

Default: `secondary`

Supported values (validated at runtime):

-   `primary`
-   `secondary`
-   `negative`
-   `negativeQuiet`
-   `utility`
-   `utilityQuiet`
-   `quiet`
-   `overlay`
-   `overlayInverted`
-   `overlayQuiet`
-   `overlayInvertedQuiet`

If you provide an unsupported value, the component throws an error when it connects.

```html
<w-link variant="primary" href="https://example.com">Primary</w-link>
<w-link variant="secondary" href="https://example.com">Secondary</w-link>
<w-link variant="negative" href="https://example.com">Negative</w-link>
<w-link variant="utility" href="https://example.com">Utility</w-link>
<w-link variant="utilityQuiet" href="https://example.com">Utility</w-link>
<w-link variant="quiet" href="https://example.com">Quiet</w-link>
<w-link variant="overlay" href="https://example.com">Overlay</w-link>
<w-link variant="overlayInverted" href="https://example.com">Overlay Inverted</w-link>
<w-link variant="overlayQuiet" href="https://example.com">Overlay Quiet</w-link>
<w-link variant="overlayInvertedQuiet" href="https://example.com">Overlay Inverted Quiet</w-link>
```

#### Small (`small`) 

Renders a smaller version.

```html
<w-link small href="https://example.com">Small link</w-link>
```

#### Full width (`full-width`) 

Makes the link take up the full width of its parent.

```html
<w-link full-width href="https://example.com">Full width</w-link>
```

#### Disabled (`disabled`) 

Applies disabled styling.

Note: the component renders an `<a>` element; `disabled` affects styling, but does not inherently prevent navigation. If you need to fully disable interaction, omit `href` and/or prevent default click behavior.

```html
<w-link disabled href="https://example.com">Disabled (styled)</w-link>
```

#### Target (`target`) and rel (`rel`) 

-   Use `target` to control where to open the link (e.g. `_blank`).
-   When `target="_blank"`, the component sets `rel` to `noopener` if you don't provide a `rel` value.

```html
<w-link target="_blank" href="https://example.com">Opens in new tab (noopener)</w-link>
<w-link target="_blank" rel="noopener noreferrer" href="https://example.com">Custom rel</w-link>
```

#### Autofocus (`autofocus`) 

Focuses the component after it is rendered.

```html
<w-link autofocus href="https://example.com">Autofocused link</w-link>
```

`w-link` does not dispatch custom events.

You can listen to native events on the rendered anchor element (for example `click`) as usual.

```html
<w-link id="link-events" href="https://example.com">Click me</w-link>
<script>
  const el = document.querySelector('#link-events');
  el.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
  });
</script>
```

#### Button-like variants 

```html
<w-link variant="primary" href="https://example.com">Primary</w-link>
<w-link variant="secondary" href="https://example.com">Secondary</w-link>
<w-link variant="negative" href="https://example.com">Negative</w-link>
<w-link variant="utility" href="https://example.com">Utility</w-link>
```

#### Full width 

```html
<div style="max-width: 360px">
  <w-link full-width href="https://example.com">Full width link</w-link>
</div>
```

If the button doesn't have visible text content, such as when used with only an icon, an aria-label prop must be provided for accessibility.

### Android

Link component to use when creating links that look like buttons.

[Android](https://warp-ds.github.io/docs/components/link/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/link/frameworks/elements)[React 19](https://warp-ds.github.io/docs/components/link/frameworks/react-19)

```kotlin
@Composable
fun WarpLink(
    modifier: Modifier = Modifier,
    text: String,
    onClick: () -> Unit,
    style: WarpTextStyle = WarpTextStyle.Body,
    icon: WarpIconResource? = null,
    underline: Boolean = false
)
```

The default style for the link is WarpTextStyle.Body and the text color is always WarpTheme.colors.text.link.

```kotlin
WarpLink(
    text = "Warp link",
    onClick = { /* link click action */ }
)
```

Can display an icon and be underlined

```kotlin
WarpLink(
    text = "Warp link with icon",
    onClick = { /* link click action */ },
    icon = icons.linkExternal
)

WarpLink(
    text = "Warp link with underline",
    onClick = { /* link click action */ },
    icon = icons.link,
    underline = true
)
```

There are a variety of styles supported for the link component and they are the same as the text component:

```kotlin
WarpTextStyle {
    Display,
    Title1,
    Title2,
    Title3,
    Title4,
    Title5,
    Title6,
    Preamble,
    Body,
    BodyStrong,
    Caption,
    CaptionStrong,
    Detail,
    DetailStrong
}
```

Not supported

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the link |
| onClick | () -> Unit | {} | The function to be invoked when clicked |
| style | WarpTextStyle.Display WarpTextStyle.Title1 WarpTextStyle.Title2 WarpTextStyle.Title3 WarpTextStyle.Title4 WarpTextStyle.Title5 WarpTextStyle.Title6 WarpTextStyle.Preamble WarpTextStyle.Body WarpTextStyle.BodyStrong WarpTextStyle.Caption WarpTextStyle.CaptionStrong WarpTextStyle.Detail WarpTextStyle.DetailStrong | WarpTextStyle.Body | Sets the appearance of the link - font and size |
| icon | WarpIconResource | null | Icon displayed after the text. |
| underline | Boolean | false | If text should be underlined or not |
