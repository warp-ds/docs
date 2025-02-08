<!-- Table content copied from https://docs.google.com/spreadsheets/d/1IYOaUoXbvGa80xMgqdAKf6OBBRRlRpDCtmE0jaoM1Lw/edit?gid=1018133285#gid=1018133285 -->

# Background (dataviz)

The dataviz `background` colours are used as fill/background colour in areas, bars and columns. For design guidelines, see [Colour Guidelines > Bars & Areas](/foundations/data-visualization/colour/bars-areas/).

::: details Visual overview
The `-subtle` colours need a 3px border to achieve good contrast against the background (see [border tokens](/foundations/data-visualization/tokens/border/) ). Therefore, the border is included in the illustration. 

![Preview of Primary, Secondary, Category and Evaluation colours for light mode and dark mode](/foundations/dataviz/token-overview-background-with-border.png)
:::

**On this page:**
[[toc]]

## Naming pattern for background colours

| Method | Pattern | Example | 
| ----- | ------ | ------ | 
| Figma | `../Background/[semantic colour])` | `../Background/Primary` | 
| CSS variable | `var(--w-dv-s-color-background-[semantic colour])` | `var(--w-dv-s-color-background-primary)` | 
| HTML class | `dv-s-bg-[semantic colour]` | `dv-s-bg-primary` | 
| SVG fill class | `dv-s-fill-bg-[semantic colour]` | `dv-s-fill-bg-primary` | 
| SVG stroke class* | `dv-s-stroke-bg-[semantic colour]` | `dv-s-stroke-bg-primary` | 
| iOS | `background[Semantic colour]` | `backgroundPrimary` | 

\* Yes, it is a bit strange to apply a `background` colour as `stroke`, but it is possible.

## Primary DV Background

| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Background/Primary` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #1087de; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-primary)` | `dv-s-bg-primary` | `dv-s-fill-bg-primary` | `dv-s-stroke-bg-primary` |
| `Background/Primary-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #0e6cac; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-primary-highlight)` | `dv-s-bg-primary-highlight` | `dv-s-fill-bg-primary-highlight` | `dv-s-stroke-bg-primary-highlight` |
| `Background/Primary-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #b4defd; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-primary-subtle)` | `dv-s-bg-primary-subtle` | `dv-s-fill-bg-primary-subtle` | `dv-s-stroke-bg-primary-subtle` |
| `Background/Primary-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #6eb9fe; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-primary-subtle-highlight)` | `dv-s-bg-primary-subtle-highlight` | `dv-s-fill-bg-primary-subtle-highlight` | `dv-s-stroke-bg-primary-subtle-highlight` |

## Secondary DV Background

| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Secondary` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #919499; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-secondary)` | `dv-s-bg-secondary` | `dv-s-fill-bg-secondary` | `dv-s-stroke-bg-secondary` |
| `Background/Secondary-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #73767c; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-secondary-highlight)` | `dv-s-bg-secondary-highlight` | `dv-s-fill-bg-secondary-highlight` | `dv-s-stroke-bg-secondary-highlight` |
| `Background/Secondary-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #d6d9db; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-secondary-subtle)` | `dv-s-bg-secondary-subtle` | `dv-s-fill-bg-secondary-subtle` | `dv-s-stroke-bg-secondary-subtle` |
| `Background/Secondary-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #b4b4b4; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-secondary-subtle-highlight)` | `dv-s-bg-secondary-subtle-highlight` | `dv-s-fill-bg-secondary-subtle-highlight` | `dv-s-stroke-bg-secondary-subtle-highlight` |

## Category DV Background

### Category1: Indigo

| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Category1` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #795af4; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category1)` | `dv-s-bg-category1` | `dv-s-fill-bg-category1` | `dv-s-stroke-bg-category1` |
| `Background/Category1-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #5834c6; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category1-highlight)` | `dv-s-bg-category1-highlight` | `dv-s-fill-bg-category1-highlight` | `dv-s-stroke-bg-category1-highlight` |
| `Background/Category1-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c6bffc; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category1-subtle)` | `dv-s-bg-category1-subtle` | `dv-s-fill-bg-category1-subtle` | `dv-s-stroke-bg-category1-subtle` |
| `Background/Category1-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #a396f0; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category1-subtle-highlight)` | `dv-s-bg-category1-subtle-highlight` | `dv-s-fill-bg-category1-subtle-highlight` | `dv-s-stroke-bg-category1-subtle-highlight` |

### Category2: Yellow

| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Category2` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c88800; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category2)` | `dv-s-bg-category2` | `dv-s-fill-bg-category2` | `dv-s-stroke-bg-category2` |
| `Background/Category2-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #a26a00; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category2-highlight)` | `dv-s-bg-category2-highlight` | `dv-s-fill-bg-category2-highlight` | `dv-s-stroke-bg-category2-highlight` |
| `Background/Category2-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #fdd28c; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category2-subtle)` | `dv-s-bg-category2-subtle` | `dv-s-fill-bg-category2-subtle` | `dv-s-stroke-bg-category2-subtle` |
| `Background/Category2-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #eba51b; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category2-subtle-highlight)` | `dv-s-bg-category2-subtle-highlight` | `dv-s-fill-bg-category2-subtle-highlight` | `dv-s-stroke-bg-category2-subtle-highlight` |

### Category3: Pink

| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Category3` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #eb5ec7; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category3)` | `dv-s-bg-category3` | `dv-s-fill-bg-category3` | `dv-s-stroke-bg-category3` |
| `Background/Category3-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #ce30a7; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category3-highlight)` | `dv-s-bg-category3-highlight` | `dv-s-fill-bg-category3-highlight` | `dv-s-stroke-bg-category3-highlight` |
| `Background/Category3-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #fdcbee; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category3-subtle)` | `dv-s-bg-category3-subtle` | `dv-s-fill-bg-category3-subtle` | `dv-s-stroke-bg-category3-subtle` |
| `Background/Category3-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #f98edc; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category3-subtle-highlight)` | `dv-s-bg-category3-subtle-highlight` | `dv-s-fill-bg-category3-subtle-highlight` | `dv-s-stroke-bg-category3-subtle-highlight` |

### Category4: Green

| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Category4` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00a881; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category4)` | `dv-s-bg-category4` | `dv-s-fill-bg-category4` | `dv-s-stroke-bg-category4` |
| `Background/Category4-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00865f; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category4-highlight)` | `dv-s-bg-category4-highlight` | `dv-s-fill-bg-category4-highlight` | `dv-s-stroke-bg-category4-highlight` |
| `Background/Category4-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #92e9d4; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category4-subtle)` | `dv-s-bg-category4-subtle` | `dv-s-fill-bg-category4-subtle` | `dv-s-stroke-bg-category4-subtle` |
| `Background/Category4-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #3ac8a5; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category4-subtle-highlight)` | `dv-s-bg-category4-subtle-highlight` | `dv-s-fill-bg-category4-subtle-highlight` | `dv-s-stroke-bg-category4-subtle-highlight` |

### Category5: Orange

| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Category5` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #e84c23; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category5)` | `dv-s-bg-category5` | `dv-s-fill-bg-category5` | `dv-s-stroke-bg-category5` |
| `Background/Category5-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c42c00; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category5-highlight)` | `dv-s-bg-category5-highlight` | `dv-s-fill-bg-category5-highlight` | `dv-s-stroke-bg-category5-highlight` |
| `Background/Category5-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #f9b4a3; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category5-subtle)` | `dv-s-bg-category5-subtle` | `dv-s-fill-bg-category5-subtle` | `dv-s-stroke-bg-category5-subtle` |
| `Background/Category5-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #f38167; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category5-subtle-highlight)` | `dv-s-bg-category5-subtle-highlight` | `dv-s-fill-bg-category5-subtle-highlight` | `dv-s-stroke-bg-category5-subtle-highlight` |

### Category6: Teal

| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Category6` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #19818f; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category6)` | `dv-s-bg-category6` | `dv-s-fill-bg-category6` | `dv-s-stroke-bg-category6` |
| `Background/Category6-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #1e5d69; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category6-highlight)` | `dv-s-bg-category6-highlight` | `dv-s-fill-bg-category6-highlight` | `dv-s-stroke-bg-category6-highlight` |
| `Background/Category6-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #3ad7e0; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category6-subtle)` | `dv-s-bg-category6-subtle` | `dv-s-fill-bg-category6-subtle` | `dv-s-stroke-bg-category6-subtle` |
| `Background/Category6-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00b1c1; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category6-subtle-highlight)` | `dv-s-bg-category6-subtle-highlight` | `dv-s-fill-bg-category6-subtle-highlight` | `dv-s-stroke-bg-category6-subtle-highlight` |

### Category7: Blue
| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Category7` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #2b97ef; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category7)` | `dv-s-bg-category7` | `dv-s-fill-bg-category7` | `dv-s-stroke-bg-category7` |
| `Background/Category7-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #007ac8; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category7-highlight)` | `dv-s-bg-category7-highlight` | `dv-s-fill-bg-category7-highlight` | `dv-s-stroke-bg-category7-highlight` |
| `Background/Category7-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #b4defd; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category7-subtle)` | `dv-s-bg-category7-subtle` | `dv-s-fill-bg-category7-subtle` | `dv-s-stroke-bg-category7-subtle` |
| `Background/Category7-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #6eb9fe; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category7-subtle-highlight)` | `dv-s-bg-category7-subtle-highlight` | `dv-s-fill-bg-category7-subtle-highlight` | `dv-s-stroke-bg-category7-subtle-highlight` |

### Category8: Gray
| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Category8` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #919499; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category8)` | `dv-s-bg-category8` | `dv-s-fill-bg-category8` | `dv-s-stroke-bg-category8` |
| `Background/Category8-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #73767c; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category8-highlight)` | `dv-s-bg-category8-highlight` | `dv-s-fill-bg-category8-highlight` | `dv-s-stroke-bg-category8-highlight` |
| `Background/Category8-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c3c6c9; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category8-subtle)` | `dv-s-bg-category8-subtle` | `dv-s-fill-bg-category8-subtle` | `dv-s-stroke-bg-category8-subtle` |
| `Background/Category8-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #a1a1a1; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-category8-subtle-highlight)` | `dv-s-bg-category8-subtle-highlight` | `dv-s-fill-bg-category8-subtle-highlight` | `dv-s-stroke-bg-category8-subtle-highlight` |

## Evaluation DV Background

### Negative: Red
| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Negative` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #f2334e; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-negative)` | `dv-s-bg-negative` | `dv-s-fill-bg-negative` | `dv-s-stroke-bg-negative` |
| `Background/Negative-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c81f3e; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-negative-highlight)` | `dv-s-bg-negative-highlight` | `dv-s-fill-bg-negative-highlight` | `dv-s-stroke-bg-negative-highlight` |
| `Background/Negative-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #ffb0ba; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-negative-subtle)` | `dv-s-bg-negative-subtle` | `dv-s-fill-bg-negative-subtle` | `dv-s-stroke-bg-negative-subtle` |
| `Background/Negative-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #f27c90; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-negative-subtle-highlight)` | `dv-s-bg-negative-subtle-highlight` | `dv-s-fill-bg-negative-subtle-highlight` | `dv-s-stroke-bg-negative-subtle-highlight` |

### Neutral: Gray
| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Neutral` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #81858c; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-neutral)` | `dv-s-bg-neutral` | `dv-s-fill-bg-neutral` | `dv-s-stroke-bg-neutral` |
| `Background/Neutral-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #65686d; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-neutral-highlight)` | `dv-s-bg-neutral-highlight` | `dv-s-fill-bg-neutral-highlight` | `dv-s-stroke-bg-neutral-highlight` |
| `Background/Neutral-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c3c6c9; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-neutral-subtle)` | `dv-s-bg-neutral-subtle` | `dv-s-fill-bg-neutral-subtle` | `dv-s-stroke-bg-neutral-subtle` |
| `Background/Neutral-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #a1a1a1; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-neutral-subtle-highlight)` | `dv-s-bg-neutral-subtle-highlight` | `dv-s-fill-bg-neutral-subtle-highlight` | `dv-s-stroke-bg-neutral-subtle-highlight` |

### Positive: Green
| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Positive` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00a881; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-positive)` | `dv-s-bg-positive` | `dv-s-fill-bg-positive` | `dv-s-stroke-bg-positive` |
| `Background/Positive-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00865f; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-positive-highlight)` | `highlight` | `dv-s-fill-bg-positive-highlight` | `dv-s-stroke-bg-positive-highlight` |
| `Background/Positive-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #92e9d4; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-positive-subtle)` | `highlight` | `dv-s-fill-bg-positive-subtle` | `dv-s-stroke-bg-positive-subtle` |
| `Background/Positive-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #3ac8a5; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-positive-subtle-highlight)` | `dv-s-bg-positive-subtle-highlight` | `dv-s-fill-bg-positive-subtle-highlight` | `dv-s-stroke-bg-positive-subtle-highlight` |

### Warning: Yellow
| Figma | Colour | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :------: | --- | ---------- | -------- | ---------- | 
| `Background/Warning` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c88800; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-warning)` | `dv-s-bg-warning` | `dv-s-fill-bg-warning` | `dv-s-stroke-bg-warning` |
| `Background/Warning-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #a26a00; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-warning-highlight)` | `dv-s-bg-warning-highlight` | `dv-s-fill-bg-warning-highlight` | `dv-s-stroke-bg-warning-highlight` |
| `Background/Warning-Subtle` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #fdd28c; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-warning-subtle)` | `dv-s-bg-warning-subtle` | `dv-s-fill-bg-warning-subtle` | `dv-s-stroke-bg-warning-subtle` |
| `Background/Warning-Subtle-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #eba51b; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `var(--w-dv-s-color-background-warning-subtle-highlight)` | `dv-s-bg-warning-subtle-highlight` | `dv-s-fill-bg-warning-subtle-highlight` | `dv-s-stroke-bg-warning-subtle-highlight` |


