---
title: 'WARP Figma updates'
date: 2025-10-07
---
October 2025

---

## Warp Figma Component Library updates

We've made several updates to the Warp Component Library in Figma to better align with implementation and improve usability.

### Neutral mode updates
- **Blue primitives updated:** Replaced the former Oikotie Blue with Blocket Blue.
- **Token changes:** `Semantic/Colour/Background/Primary`, `Semantic/Colour/Background/Selected` and `Semantic/Color/Text/Link` tokens updated to Blue (previously Gray) to better support Backoffice systems.
- **Figma library updates:** Neutral theme added to Typography overview, Component overview (light/dark), and as example variations across all component pages.

![Comparison of Warp components in the Neutral theme before and after the updates, illustrating new blue tokens.](/whats-new/2025/design-10-07-1.svg)


### Accessible border tokens
- **New tokens added:** `Semantic/Color/Border/Strong` and `Semantic/Color/Border/Strong-Hover` to improve accessibility and ensure consistent contrast for interactive components.
- **Updates to components:** Tokens applied to Default and Hover states of Checkbox, Radio, Text Area, Text Field, and Select.
- **Important:** Buttons intentionally continue using `Semantic/Color/Border/Default` tokens (`Secondary` and `Utility` variants).

![Visual overview showing how the new border strong tokens appear in each brand theme, including variations for light and dark modes.](/whats-new/2025/design-10-07-2.svg)

![Comparison of Warp components using the new border strong tokens versus the old ones, highlighting improved contrast and consistency across light and dark themes for Radio, Checkbox, Text Field, Text Area, and Select components.](/whats-new/2025/design-10-07-3.svg)


### Text area

**Component updates:**
- General layer optimisation.
- Changes to properties settings for proper behaviour and alignment with implementation.
- Added Error Hover and Error Active states.
- Renamed elements labeling for consistency with Text field and Select components. 
- Applied `Semantic/Color/Border/Strong` tokens to Default and Hover states.

**Updated documentation:** [Text area - Warp Portal documentation](https://warp-ds.github.io/docs/components/textarea/)


### Text field

**Component updates:**
- Fixed layout settings for proper behaviour and alignment with implementation.
- Changes to icon properties settings naming for alignment with other components.
- Added Error Hover and Error Active states.
- Renamed elements labeling for consistency with Text area and Select components.
- Removed the icon sizing property.
- Applied `Semantic/Color/Border/Strong` tokens to Default and Hover states.

**Updated documentation:** [Text field - Warp Portal documentation](https://warp-ds.github.io/docs/components/textfield/)


### Select

**Component updates:**
- Fixed layout settings for proper behaviour and alignment with implementation.
- Changes to icon properties settings naming for alignment with other components.
- Added Error Hover state.
- Renamed elements labeling for consistency with Text area and Text field components.
- Added truncation effect for when Placeholder and Option text is too long.
- Applied `Semantic/Color/Border/Strong` tokens to Default and Hover states.


### Checkbox

**Component updates:**
- Fixes to background tokens for alignment with implementation.
- Applied `Semantic/Color/Border/Strong` tokens to Default and Hover states.


### Radio

**Component updates:**
- Fixes to background tokens for alignment with implementation.
- Applied `Semantic/Color/Border/Strong` tokens to Default and Hover states.


### Step indicator

**Component updates:**
- Applied `Semantic/Color/Border/Default` token to Track and Dot atoms in Incomplete state.


## Warp Figma Icon Library updates

All regular icons and "taxonomy icons" are now proportionally scalable in both stroke width and size. The full set of 259 icons is now consolidated under Regular icons. We've also expanded Figma keywords to make icons easier to find—for example, the Bin icon is now searchable with "Trash, Remove, Recycle, Delete."

**Update highlights:**
- 27 new icons (included product team requests, like `Shrink`, `Confetti`, `BriefcaseUser`, `CalendarPlus` and refreshed taxonomy icons such as `Guitar`, `Sofa` and `Drill`).
- 38 outdated taxonomy icons removed (the old 42x28px style that wasn't scalable). All icons in use were redrawn in the square and proportionally scalable style.
- 17 duplicate/near-identical icons removed to streamline the library and reduce confusion.
- 18 icons visually updated with minor tweaks for design coherence (e.g. `AnimalPaw`, `Tractor`, `Phone`, `PlaneTakeOff`).
- 13 icons renamed for clarity, based on what they visually represent, rather than product-specific terms (e.g. "AgriculturalMachine" = `Tractor`, "Service" = `Wrench`).

**Updated documentation:** [Icons - Warp Portal documentation](https://warp-ds.github.io/docs/components/icons/)

![Overview of newly added Warp icons displayed in both light and dark modes, showing all new additions introduced in this release.](/whats-new/2025/design-10-07-4.svg)

<br><br>

---

As always, let us know if anything looks off or if you have feedback. Thanks!

[#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV)
