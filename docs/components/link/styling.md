# Link

## Layout and spacing

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/link/link-layout-1.svg" alt="A link labeled “Explore” followed by an external link icon. A dashed red measurement line indicates 4px spacing between the text and the icon." />
  </div>

  <div class="py-16">
  Ensure a 4px spacing between the text link and the trailing icon.
  </div>
</div>

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/link/link-layout-2.svg" alt="A long hyperlink reading “Link with a very long link text with icon. Extra long text. Looooooooong.” wraps across multiple lines within a container. The trailing external link icon is vertically centered beside the text block. " />
  </div>

  <div class="py-16">
  When the link text exceeds its container, it should wrap to the next line. The icon remains vertically aligned in the centre of its container.
  </div>
</div>

## Color

Text/Link is the default color token available for links. Alternatively, you can use Text/Default on navigation elements, such as header and footer.

| **Element**               | **Figma token**                               |
|---------------------------|-----------------------------------------------|
| Text                      | Semantic/Typography/Text/Link                 |
| Text (navigation only)    | Semantic/Typography/Text/Default              |
| Icon                      | Semantic/Color/Icon/Primary                   |


## Typography and sizing

There are four sizes available for links: preamble, body, caption and detail. Sizing applies to both standalone and inline links. Inline link sizes should match the type size of the text it is inline with. Standalone link sizes should match the default body copy size of the page.

| **Text style**   | **Figma token**                    | **Font-size** | **Line-height** | **Icon size** | **Example** |
|------------------|------------------------------------|---------------|-----------------|---------------|-------------|
| Preamble Link     | Semantic/Typography/Preamble       | 20px          | 26px            | 24px          | <img src="/components/link/preamble-link.svg" />   |
| Body Link         | Semantic/Typography/Body           | 16px          | 22px            | 16px          | <img src="/components/link/body-link.svg" />      |
| Caption Link      | Semantic/Typography/Caption        | 14px          | 18px            | 16px          | <img src="/components/link/caption-link.svg" />   |
| Detail Link       | Semantic/Typography/Detail         | 12px          | 16px            | –             | <img src="/components/link/detail-link.svg" />        |

