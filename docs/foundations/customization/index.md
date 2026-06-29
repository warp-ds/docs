---
title: Component Customization Philosophy
editLink: true
---

# Component Customization Philosophy

## The Ideal: Use Variants As-Is

The design system provides variants (primary, secondary, etc.) that should cover most use cases. These maintain consistency and require no customization.

## The Reality: Preventing Component Forks

However, teams will occasionally encounter edge cases where existing variants don't match their design mockup (e.g., a primary button with a custom border color for a brand campaign).

When the design system can't accommodate this, teams historically:
1. Fork the component
2. Create their own variant
3. Stop using the design system
4. Break design consistency

## Controlled Escape Hatches

To prevent forks while maintaining consistency, Warp components provide **three levels of customization** - documented ways to handle edge cases:

### Level 1: Component Tokens (Recommended)

Component tokens (`--w-c-*`) are **documented customization points** for colors, spacing, sizing, and other common needs.

```css
/* Customize button colors while keeping all other behavior */
w-button {
  --w-c-button-border-color: pink;
}
```

✅ Works across all states (hover, active, focus)  
✅ Documented in each component's styling-api.md  
✅ Designed escape hatch

### Level 2: Parts (Advanced)

Parts (`::part()`) expose shadow DOM elements for **edge cases that tokens don't cover**.

```css
/* Advanced styling for unique needs */
w-button::part(base) {
  text-transform: uppercase;
}
```

✅ Can do **anything** CSS can do  
✅ For one-off customizations  
✅ Documented in styling-api.md

### Level 3: Combined

```css
/* Combine tokens and parts for rare complex needs */
w-button {
  --w-c-button-bg: linear-gradient(45deg, blue, purple);
}

w-button::part(base) {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
```

## Expected Usage Distribution

The goal is to minimize customization:

```
┌────────────────────────────────────────────┐
│ 90% → Use variants as-is                  │ ✅ The goal
├────────────────────────────────────────────┤
│  9% → Edge case tweaks with tokens        │ ⚠️  When necessary
├────────────────────────────────────────────┤
│  1% → Rare advanced styling with parts    │ ⚠️  Exception only
├────────────────────────────────────────────┤
│  0% → Need to fork components             │ 🎯 What we're preventing
└────────────────────────────────────────────┘
```

## Design Philosophy

### Figma is the Source of Truth

- Designers control the defaults via **semantic tokens**
- Components provide sensible **variant presets**
- Teams can **customize when needed**

### We Provide

✅ Good defaults (semantic tokens)  
✅ Variant presets (primary, secondary, etc.)  
⚠️ Documented escape hatches when variants aren't enough (component tokens)  
⚠️ Advanced overrides for rare exceptions (parts)

### The Trade-off

✅ Variants provide design system compliance by default  
⚠️ Escape hatches prevent teams from forking components  
📋 Documentation makes necessary customization supportable (vs undocumented hacks)  
🎯 Goal: Keep teams in the design system, even for edge cases

## Real-world Examples

### Example 1: Brand Campaign Colors

**Need:** Primary button behavior with campaign-specific colors.

```html
<style>
.campaign-button {
  --w-c-button-bg: #ff6b35;
  --w-c-button-bg-hover: #ff5722;
  --w-c-button-color: white;
}
</style>

<w-button variant="primary" class="campaign-button">
  Join Campaign
</w-button>
```

### Example 2: Context-Specific Spacing

**Need:** Smaller padding for buttons in a compact toolbar.

```css
.toolbar w-button {
  --w-c-button-padding-x: 8px;
  --w-c-button-padding-y: 4px;
  --w-c-button-font-size: var(--w-font-size-xs);
}
```

### Example 3: Matching Figma Exactly

**Need:** Designer specified exact border radius for this context.

```css
.card w-button {
  --w-c-button-radius: 12px;
  --w-c-button-border-width: 2px;
}
```

## Guidelines for Customization

### ✅ Do
- Use component tokens for most customizations
- Use parts for one-off, unique styling needs
- Document your customizations in your project
- Test across all component states (hover, focus, disabled)
- Be aware of introducing specificity issues
- Consider proposing popular customizations as new variants

### ❌ Don't

- Fork components unless absolutely necessary
- Override internal implementation details
- Rely on undocumented internals
- Break accessibility (color contrast, focus indicators, keyboard navigation)
- Make customizations that violate brand guidelines without design approval

## Finding Customization Options

Each component documents its customization API in two places:

### 1. Component Token Reference

Component documentation includes a Styling API section with:
- All available component tokens (`--w-c-*`)
- Available parts (`::part()`)
- Usage examples
- Default values

Example: [Checkbox Styling API](/components/checkbox/frameworks/elements#styling-api)

### 2. Live Examples

Component documentation pages show common customization patterns with working examples.

## Proposing New Variants

If you find yourself:
- Repeating the same customization across multiple projects
- Other teams asking for similar customizations
- The customization aligns with brand guidelines

Consider [requesting a new variant](/collaborate/request-component-changes/) so it becomes an official, maintained option.

## Key Principle

> Better to give teams **documented escape hatches** than force them to create **undocumented workarounds** or fork components entirely.

The design system succeeds when teams can accomplish their goals while staying within the system.
