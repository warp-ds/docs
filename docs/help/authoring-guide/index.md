# Markdown Cheat Sheet for Warp Docs

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

---

### Full Examples

#### Headings
```md
# Heading lvl 1
## Heading lvl 2
### Heading lvl3
```

---

#### Bullet list
- Apple
- Banana
- Cherry

```md
- Apple
- Banana
- Cherry
```

#### Numbered list
1. First step
2. Second step
3. Final step

```md
1. First step
2. Second step
3. Final step
```

---

#### Links
[Visit Warp DS](https://warp-ds.dev)

```md
[Visit Warp DS](https://warp-ds.dev)
```

---

#### Images

![THE Warp](/images/la01.jpg)

```md
![THE Warp](/images/la01.jpg)
```

---

#### Inline Code

To declare a variable: `const x = 10;`

```md
To declare a variable: `const x = 10;`
```

---

#### Code Block
```js
function greet(name) {
  return `Hello, ${name}!`;
}
```
<pre><code>```js
function greet(name) {
  return `Hello, ${name}!`;
}
```</code></pre>

---

#### Tables

| Feature | Status |
|---------|--------|
| Tabs    | ✅     |
| Cards   | ✅     |
| Alerts  | ❌     |

```md
| Feature | Status |
|---------|--------|
| Tabs    | ✅     |
| Cards   | ✅     |
| Alerts  | ❌     |
```

---

#### Blockquote

> Always write semantic markup.

```md
> Always write semantic markup.
```

---

#### Custom Markdown Blocks
Each container styles the block with matching color and icon. Use them for notes, cautions, warnings, and callouts.

##### ::: tip (blue)

::: tip
Use consistent spacing in UI.
:::

```md
::: tip
Use consistent spacing in UI.
:::
```

##### ::: warning (yellow)

::: warning
Avoid mixing multiple icon styles.
:::

```md
::: warning
Avoid mixing multiple icon styles.
:::
```

##### ::: danger (red)

::: danger
Never override token values directly.
:::

```md
::: danger
Never override token values directly.
:::
```


##### ::: image-block

::: image-block
![THE Warp](/images/la01.jpg)
:::

```md
::: image-block
![THE Warp](/images/la01.jpg)
:::
```
___

### Keyboard Keys with `<kbd>`
<kbd>Tab</kbd> key opens field

<kbd aria-label="Arrow Down">↓</kbd>

Hit the <kbd>W</kbd> Key to move forewards



```md
<kbd>Tab</kbd> key opens field
<kbd aria-label="Arrow Down">↓</kbd>
Hit the <kbd>W</kbd> Key to move forewards
```

| Key         | Syntax                                  |
| ----------- | --------------------------------------- |
| Enter       | `<kbd>Enter</kbd>`                      |
| Arrow Up    | `<kbd aria-label="Arrow Up">↑</kbd>`    |
| Arrow Down  | `<kbd aria-label="Arrow Down">↓</kbd>`  |
| Arrow Left  | `<kbd aria-label="Arrow Left">←</kbd>`  |
| Arrow Right | `<kbd aria-label="Arrow Right">→</kbd>` |

> Always use `aria-label` for arrows and other cryptic letters to help screen readers

---


## (⌐■_■) Advanced features
### Frontmatter Options

This is the main configuration for each main page (typically a index.md in the structure). If you are making a new page from an excisting structure its probably easier to copy a already excisting page as a startingpoint.
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

### `<card>` and `<cards>`

```md
<cards>
  <card>Text content</card>
  <card imgurl="/images/la01.jpg" imgalt="An image">With image</card>
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

Need help? Reach out to a developer or maintainer for guidance on using these features in Markdown.
