# Border (dataviz)

The dataviz `border` colors are typically used around a `background-subtle` color. For line charts, use `line` colors. For design guidelines, see [Color Guidelines > Bars & Areas](/foundations/data-visualization/color/bars-areas/).

::: details Visual overview
Since the `border` colors are used with a subtle background color, the (see [background tokens](/foundations/data-visualization/tokens/background/) ), the subtle background colors are included in the illustration. 

![Preview of Primary, Secondary, Category and Evaluation colors for light mode and dark mode](/foundations/dataviz/token-overview-border-with-subtle.png)
:::

## Naming pattern for border colors

| Method | Pattern | Example | 
| ----- | ------ | ------ | 
| Figma | `../Border/[semantic-color])` | `../Border/Primary` | 
| CSS variable | `var(--w-dv-s-color-border-[semantic-color])` | `var(--w-dv-s-color-border-primary)` | 
| HTML class | `dv-s-border-[semantic-color]` | `dv-s-border-primary` | 
| SVG fill class* | `dv-s-fill-border-[semantic-color]` | `dv-s-fill-border-primary` | 
| SVG stroke class | `dv-s-stroke-border-[semantic-color]` | `dv-s-stroke-border-primary` | 
| iOS | `border[semantic-color]` | `borderPrimary` | 

\* Yes, it is a bit strange to apply a `border` color as `fill`, but it is possible.

## Primary Border (dataviz)

| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Primary` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #1087de; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-primary` | `dv-s-border-primary` | `dv-s-fill-border-primary` | `dv-s-stroke-border-primary` |
| `Border/Primary-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #0e6cac; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-primary-highlight` | `dv-s-border-primary-highlight` | `dv-s-fill-border-primary-highlight` | `dv-s-stroke-border-primary-highlight` |

\* Light mode and dark mode preview

## Secondary Border (dataviz)

| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Secondary` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #919499; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-secondary` | `dv-s-border-secondary` | `dv-s-fill-border-secondary` | `dv-s-stroke-border-secondary` |
| `Border/Secondary-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #73767c; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-secondary-highlight` | `dv-s-border-secondary-highlight` | `dv-s-fill-border-secondary-highlight` | `dv-s-stroke-border-secondary-highlight` |

## Category Border (dataviz)

### Category1: Indigo

| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Category1` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #795af4; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category1` | `dv-s-border-category1` | `dv-s-fill-border-category1` | `dv-s-stroke-border-category1` |
| `Border/Category1-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #5834c6; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category1-highlight` | `dv-s-border-category1-highlight` | `dv-s-fill-border-category1-highlight` | `dv-s-stroke-border-category1-highlight` |

### Category2: Yellow

| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Category2` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c88800; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category2` | `dv-s-border-category2` | `dv-s-fill-border-category2` | `dv-s-stroke-border-category2` |
| `Border/Category2-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #a26a00; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category2-highlight` | `dv-s-border-category2-highlight` | `dv-s-fill-border-category2-highlight` | `dv-s-stroke-border-category2-highlight` |

### Category3: Pink

| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Category3` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #eb5ec7; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category3` | `dv-s-border-category3` | `dv-s-fill-border-category3` | `dv-s-stroke-border-category3` |
| `Border/Category3-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #ce30a7; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category3-highlight` | `dv-s-border-category3-highlight` | `dv-s-fill-border-category3-highlight` | `dv-s-stroke-border-category3-highlight` |

### Category4: Green

| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Category4` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00a881; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category4` | `dv-s-border-category4` | `dv-s-fill-border-category4` | `dv-s-stroke-border-category4` |
| `Border/Category4-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00865f; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category4-highlight` | `dv-s-border-category4-highlight` | `dv-s-fill-border-category4-highlight` | `dv-s-stroke-border-category4-highlight` |

### Category5: Orange

| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Category5` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #e84c23; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category5` | `dv-s-border-category5` | `dv-s-fill-border-category5` | `dv-s-stroke-border-category5` |
| `Border/Category5-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c42c00; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category5-highlight` | `dv-s-border-category5-highlight` | `dv-s-fill-border-category5-highlight` | `dv-s-stroke-border-category5-highlight` |

### Category6: Teal

| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Category6` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #19818f; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category6` | `dv-s-border-category6` | `dv-s-fill-border-category6` | `dv-s-stroke-border-category6` |
| `Border/Category6-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #1e5d69; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category6-highlight` | `dv-s-border-category6-highlight` | `dv-s-fill-border-category6-highlight` | `dv-s-stroke-border-category6-highlight` |

### Category7: Blue
| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Category7` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #2b97ef; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category7` | `dv-s-border-category7` | `dv-s-fill-border-category7` | `dv-s-stroke-border-category7` |
| `Border/Category7-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #007ac8; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category7-highlight` | `dv-s-border-category7-highlight` | `dv-s-fill-border-category7-highlight` | `dv-s-stroke-border-category7-highlight` |

### Category8: Gray
| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Category8` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #919499; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category8` | `dv-s-border-category8` | `dv-s-fill-border-category8` | `dv-s-stroke-border-category8` |
| `Border/Category8-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #73767c; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-category8-highlight` | `dv-s-border-category8-highlight` | `dv-s-fill-border-category8-highlight` | `dv-s-stroke-border-category8-highlight` |

## Evaluation Border (dataviz)

### Negative: Red
| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Negative` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #f2334e; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-negative` | `dv-s-border-negative` | `dv-s-fill-border-negative` | `dv-s-stroke-border-negative` |
| `Border/Negative-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c81f3e; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-negative-highlight` | `dv-s-border-negative-highlight` | `dv-s-fill-border-negative-highlight` | `dv-s-stroke-border-negative-highlight` |

### Neutral: Gray
| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Neutral` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #81858c; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-neutral` | `dv-s-border-neutral` | `dv-s-fill-border-neutral` | `dv-s-stroke-border-neutral` |
| `Border/Neutral-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #65686d; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-neutral-highlight` | `dv-s-border-neutral-highlight` | `dv-s-fill-border-neutral-highlight` | `dv-s-stroke-border-neutral-highlight` |

### Positive: Green
| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Positive` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00a881; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-positive` | `dv-s-border-positive` | `dv-s-fill-border-positive` | `dv-s-stroke-border-positive` |
| `Border/Positive-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #00865f; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-positive-highlight` | `dv-s-border-positive-highlight` | `dv-s-fill-border-positive-highlight` | `dv-s-stroke-border-positive-highlight` |

### Warning: Yellow
| Figma | Color | CSS variable | HTML class | SVG Fill class| SVG Stroke class |
| ----- | :----: | ------------ | ---------- | ------------- | ---------------- | 
| `Border/Warning` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #c88800; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-warning` | `dv-s-border-warning` | `dv-s-fill-border-warning` | `dv-s-stroke-border-warning` |
| `Border/Warning-highlight` | <span style="display: inline-block; width: 32px; height: 32px; background-color: #a26a00; border: 1px solid #D4D9E3; border-radius: 4px;"></span> | `--w-dv-s-color-border-warning-highlight` | `dv-s-border-warning-highlight` | `dv-s-fill-border-warning-highlight` | `dv-s-stroke-border-warning-highlight` |