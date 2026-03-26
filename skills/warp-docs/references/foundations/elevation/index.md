# Elevation

**Full documentation:** https://warp-ds.github.io/docs/foundations/elevation

Elevation is a concept used to visually differentiate the height between different elements. In light mode this is easy with the use of shadows but in dark mode we can’t rely as much on shadows to show the height difference.

Elevation is the distance between different surfaces on the z-axis.

Think of dark mode as a dark room with a small light source on the ceiling: the closer an object is to the light, the lighter its surface appears. In light mode, we can use shadows to make this clear. However, in dark mode shadows are less effective for showing differences in height.

![Illustration a plain interface with one half in light mode and the other in dark mode](https://warp-ds.github.io/docs/foundations/elevation.png)

In light mode, elevation tokens can be used to create subtle shadows beneath UI elements, giving them a sense of elevation and depth. For example, cards can appear to float above the background.

In dark mode, elevation tokens can be inverted to create highlights instead of shadows, providing depth without compromising the overall dark aesthetic. This helps maintain consistency in design across different modes.

By adjusting the elevation of elements such as boxes, popovers or tooltips, designers can ensure that important content stands out against the background, improving readability and user experience.

By defining elevation tokens as part of a design system, consistency can be maintained across different components and screens of an application.

Designers can easily switch between light and dark modes without needing to redefine elevation values, streamlining the design process and ensuring a cohesive user experience.

![A card component where the semantic tokens "Surface/Default" and "Surface/Elevated-200" are visualised in both light and dark mode](https://warp-ds.github.io/docs/foundations/why-use-elevation.png)

In WARP there are five surfaces that all represent a different elevation value. The ones elevated above “Default” have a shadow as well.

All Vend brands use the same grayscale to make accessibility easier to maintain.

![An overview of WARP's different available surfaces: 1 "Surface/Sunken", 2 "Surface/Default", 3 "Surface/Elevated-100", 4 "Surface/Elevated-200" and 5 "Surface/Elevated-300"](https://warp-ds.github.io/docs/foundations/surface-overview.png)

(Semantic/Surface/Sunken) The lowest elevation used as a backdrop for other content. Use only below the default elevation and never on any of the elevated surfaces.

(Semantic/Surface/Default) The baseline flat surface.

(Semantic/Surface/Elevated-100) Used for modals and drawers. Uses the medium shadow.

(Semantic/Surface/Elevated-200) Used for cards. Uses the small shadow.

(Semantic/Surface/Elevated-300) The highest elevation, used for popover, menu and dropdowns. Uses the large shadow
