---
title: Android foundation
---

# Android foundation

How the Warp foundations work in Jetpack Compose. For colour, typography, elevation, tokens and other design-language topics that apply to every platform, see [Foundation (Design Language)](/design-language/).

To add Warp to your app, start with [Get started on Android](/get-started/android/).

- [Theming](/android/foundations/theming) — wrap your UI in a brand theme, choose the brand, and control light and dark mode.
- [Tokens](/android/foundations/tokens) — colour, spacing, border, size and shape tokens, and how to read them from `WarpTheme`.
- [Typography](/android/foundations/typography) — the 14 Warp text styles, the font each brand uses, and how to apply them.
- [Elevation](/android/foundations/elevation) — shadow tokens, shadow modifiers and elevated surface colours.

Icons are documented on the [Android icons page](/android/components/icons/code).

## Source

Everything in this section comes from the [warp-android](https://github.com/warp-ds/warp-android) repository. The theme lives in [`warp/src/main/java/com/schibsted/nmp/warp/theme/`](https://github.com/warp-ds/warp-android/tree/develop/warp/src/main/java/com/schibsted/nmp/warp/theme), and each brand has its own module (`warp-finn`, `warp-tori`, `warp-dba`, `warp-blocket`, `warp-vend`, `warp-neutral`).
