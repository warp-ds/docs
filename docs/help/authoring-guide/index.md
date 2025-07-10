# 💾 Markdown Cheat Sheet for Warp Docs

This guide is for designers, content editors, and anyone writing documentation in Warp's VitePress-based system. It shows what you can do in Markdown, with optional Vue components and styling extensions.

---

## 📝 Basic Markdown Syntax

| Feature       | Syntax Example                                      | Notes                                               |
| ------------- | --------------------------------------------------- | --------------------------------------------------- |
| Headings      | `# H1`, `## H2`, `### H3`                           | Use for structure                                   |
| Lists         | `- item`, `1. item`                                 | Ordered & unordered                                 |
| Links         | `[Warp](https://warp-ds.dev)`                       |                                                     |
| Images        | `![alt text](https://example.com/image.jpg)`        | Local or remote                                     |
| Code (inline) | `` `const x = 5;` ``                                | Inline code                                         |
| Code block    | `js\nconst hello = 'world';\nconsole.log(hello);\n` | Syntax highlighting                                 |
| Tables        |                                                     | Create simple data tables, SEE Example further down |
| Blockquote    | `> This is a tip or note`                           | Use for callouts or tips                            |


### Full Examples

#### Headings

```md
# Heading 1
## Heading 2
### Heading 3
```

#### Lists

```md
- Apple
- Banana
- Cherry

1. First step
2. Second step
3. Final step
```

#### Links

```md
[Visit Warp DS](https://warp-ds.dev)
```

#### Images

```md
![Warp Logo](https://warp-ds.dev/logo.png)
```

#### Inline Code

```md
To declare a variable: `const x = 10;`
```

#### Code Block

<pre><code>```js
function greet(name) {
  return `Hello, ${name}!`;
}
```</code></pre>

#### Tables

```md
| Feature | Status |
|---------|--------|
| Tabs    | ✅     |
| Cards   | ✅     |
| Alerts  | ❌     |
```

#### Blockquote

```md
> Always write semantic markup.
```

---

#### 🔣 Custom Markdown Blocks
These are VitePress-native containers, enabled by default:

### ✅ ::: tip (green)

::: tip
Use consistent spacing in UI.
:::

### ⚠️ ::: warning (yellow)

::: warning
Avoid mixing multiple icon styles.
:::

### 🚫 ::: danger (red)

::: danger
Never override token values directly.
:::

### ℹ️ ::: info (blue)

::: info
You can contribute to the design system documentation.
:::

Each container styles the block with matching color and icon. Use them for notes, cautions, warnings, and callouts.

___

## 💠 Frontmatter Options

Add these at the top of any new `.md` file:

```yaml
---
title: My Page Title
description: Short SEO text
layout: doc
aside: true
outline: [2, 3]
---
```

---

## 📦 Custom Components

### `<card>` and `<cards>`

```md
<cards>
  <card>Text content</card>
  <card imgurl="/img.jpg" imgalt="An image">With image</card>
</cards>
```

* Use `<cards>` to lay out multiple `<card>` items
* Props: `imgurl`, `imgalt`

---

### `<ComponentStatus>`

```md
<ComponentStatus
  react="released"
  vue="developing"
  elements="planned"
  android="unsupported"
  ios="unsupported"
/>
```

| Status      | Color  |
| ----------- | ------ |
| released    | green  |
| developing  | yellow |
| planned     | blue   |
| unsupported | red    |

---

### `<do>`, `<do not>`, `<dodonts>`

```md
<dodonts>
  <do imgurl="/right.png" imgalt="Right">Do this</do>
  <do not imgurl="/wrong.png" imgalt="Wrong">Avoid this</do not>
</dodonts>
```

* Props: `imgurl`, `imgalt`, `darkmode`
* Use `<dodonts>` to automatically layout left/right pairs

---

### `<tabs-content>`

```md
<tabs-content variant="main">
  <template #Overview>
    Overview content
  </template>
  <template #Code>
    Code snippet here
  </template>
</tabs-content>
```

* Tabs auto-generated from slot names
* Props: `variant="main"` (or other styling), slots like `#Overview`, `#Usage`, etc.

---

## 🔣 Custom Markdown Blocks

```md
::: image-block
  <img src="/img.jpg" alt="Decorative" />
:::
```

* Renders a styled `<div class="styled-image-block">` block
* Used for grouping or spotlighting content

---

## ⌘️ Keyboard Keys with `<kbd>`

```md
<kbd>Tab</kbd> key opens field
<kbd aria-label="Arrow Down">↓</kbd>
```

| Key         | Syntax                                  |
| ----------- | --------------------------------------- |
| Enter       | `<kbd>Enter</kbd>`                      |
| Arrow Up    | `<kbd aria-label="Arrow Up">↑</kbd>`    |
| Arrow Down  | `<kbd aria-label="Arrow Down">↓</kbd>`  |
| Arrow Left  | `<kbd aria-label="Arrow Left">←</kbd>`  |
| Arrow Right | `<kbd aria-label="Arrow Right">→</kbd>` |

> Always use `aria-label` for arrows to help screen readers

---

## 🎨 Styling with UnoCSS

Warp Docs uses `@warp-ds/uno` and `@warp-ds/preset-docs`:

* Utility classes like `pd-text-sm`, `bg-[--vp-c-bg-soft]`, `text-[--vp-c-text-1]`
* Shortcuts like `ex-box`, `ex-font`, `ex-pic-no`
* Many layout helpers are safelisted and available directly

---

## 🧐 Tips for Contributors

* You can use all HTML inside Markdown if needed
* Component names and props are case-sensitive
* Keep slot names simple: `#Overview`, `#Usage`, etc.
* Ask a dev if a component isn’t rendering — it may need safelisting or registration

---

## ✅ Summary Table

| Feature           | Syntax / Component             | Notes                              |
| ----------------- | ------------------------------ | ---------------------------------- |
| Tabbed content    | `<tabs-content>` + named slots | Dynamic tab views                  |
| Do/Don’t layout   | `<dodonts>`, `<do>`            | Side-by-side visual guidance       |
| Status display    | `<ComponentStatus>`            | Platform availability by framework |
| Cards             | `<card>`, `<cards>`            | Reusable UI content blocks         |
| Keyboard keys     | `<kbd>`                        | Document key inputs                |
| Custom containers | `::: image-block`              | Highlight visuals/content          |
| Styling utilities | UnoCSS classes                 | Utility-first styling              |

---

Need help? Reach out to a developer or maintainer for guidance on using these features in Markdown.
