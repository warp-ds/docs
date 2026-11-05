# Illustrations
Warp currently doesn't provide illustrations. If you need to use them in your work, use the brand-specific illustration libraries linked below.

## Branded illustrations libraries in Figma

| Brand    | Figma link                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bilbasen | Doesn't exist                                                                                                                                                |
| Blocket  | [DNA Foundations](https://www.figma.com/file/bDcLjM64U0iNxe6Dgyar8P/DNA-Foundations?type=design&node-id=2%3A15&mode=design&t=AxU5V7b479PnGFIF-1)              |
| DBA      | [DBA - Illustrations](https://www.figma.com/design/JKlnespoX4gCYRGiACgX7W/02.-DBA-%E2%80%93-Elements?node-id=2501-59)                                         |
| FINN     | [Fabric Illustrations](https://www.figma.com/file/2jehmKMFWckMaFmHSmNmuQ/Fabric---Illustrations?type=design&node-id=267%3A0&mode=design&t=cGjyU2U1T6RPqCID-1) |
| Tori     | [Illustration library](https://www.figma.com/file/nDbO5kGd5zvZnGzTM963iO/Tori-illustration?type=design&t=xKTuQxkk6SRaeI0e-6)                                  |
| Oikotie  | Doesn't exist                                                                                                                                                |

### Light/dark mode considerations

When using illustrations, make sure they look good both in light or dark mode. If you’re unsure, consult a visual designer working with that brand for further help.

![An illustration of a bicyclist in light mode and dark mode](/foundations/illustrations_light-dark-mode.svg)

## Using illustrations in Warp components (Figma)

Some Warp components support the use of illustrations. These components often include an **illustration placeholder**, which you can replace with a brand-specific illustration.

Here's a step-by-step guide on using illustrations:

### Add the branded illustration libraries to your file

1. Open the **Assets** panel in Figma (left sidebar).
2. Click on the **book icon** at the top of the sidebar, or scroll down to **Add more libraries** (Mac: ⌥3 / Win: Alt+3).
3. In the Manage libraries view, enable the illustration libraries you need to use.
4. The libraries and their illustrations will now appear in your Assets panel.

<div style="display: flex; justify-content: center;">
  <iframe 
    src="https://www.youtube.com/embed/O3CZ8NxYVS0"
    style="aspect-ratio: 16 / 9; width: 100%;"
    title="Warp - Add library to working file"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Keep correct aspect ratio

Brand illustrations won't always match the component placeholder's aspect ratio. If this happens:

1. Copy an instance of the illustration to your working file.
2. Place it inside of a new frame sized correctly for the component. Center it and apply correct constraints.
3. Select the frame and **Create component** (Mac: ⌥⌘K / Win: Ctrl+Alt+K).
4. Select the component and use **Instance swap** to replace the placeholder with your adjusted illustration.

<div style="display: flex; justify-content: center;">
  <iframe 
    src="https://www.youtube.com/embed/JUpMin6Axgg"
    style="aspect-ratio: 16 / 9; width: 100%;"
    title="Warp - Keep illustration's correct aspect ratio"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Use Instance swap on Warp components

If a Warp component includes an illustration placeholder, you can replace it using Instance swap, without detaching the component.

1. Select the component you want to use.
2. In the right side bar, look for the illustration-related property.
3. Choose the right illustration library (Figma may default to “Created in this file”).
4. Browse and select the illustration you want to use. And it’s done!

[Read more about the instance swap feature in Figma](https://help.figma.com/hc/en-us/articles/360039150413-Swap-components-and-instances).

<br>
<div style="display: flex; justify-content: center;">
  <iframe 
    src="https://www.youtube.com/embed/KwGIfqLbMo8"
    style="aspect-ratio: 16 / 9; width: 100%;"
    title="Warp - Use Instance swap on Warp components"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>