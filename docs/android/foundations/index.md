---
pendingReview: true
title: Android foundation
cards:
  - title: Theming
    text: Wrap your UI in a brand theme, choose the brand, and control light and dark mode.
    href: /android/foundations/theming
    icon: theme
  - title: Tokens
    text: Colour, spacing, border, size and shape tokens, and how to read them from WarpTheme.
    href: /android/foundations/tokens
    icon: tokens
  - title: Typography
    text: The 14 WARP text styles, the font each brand uses, and how to apply them.
    href: /android/foundations/typography
    icon: type
  - title: Elevation
    text: Shadow tokens, shadow modifiers and elevated surface colours.
    href: /android/foundations/elevation
    icon: elevation
related:
  - title: Icons
    text: The WARP icon set in Compose.
    href: /android/components/icons/code
    icon: icons
---

# Android foundation

How the WARP foundations work in Jetpack Compose. For colour, typography, elevation, tokens and other design-language topics that apply to every platform, see the [Design Language](/design-language/).

To add WARP to your app, start with [Get started on Android](/get-started/android/).

## Topics

<NavCards :items="$frontmatter.cards" />

## Related

<NavCards :items="$frontmatter.related" variant="row" />

## Source

Everything in this section comes from the [warp-android](https://github.com/warp-ds/warp-android) repository. The theme lives in [`warp/src/main/java/com/schibsted/nmp/warp/theme/`](https://github.com/warp-ds/warp-android/tree/develop/warp/src/main/java/com/schibsted/nmp/warp/theme), and each brand has its own module (`warp-finn`, `warp-tori`, `warp-dba`, `warp-blocket`, `warp-vend`, `warp-neutral`).
