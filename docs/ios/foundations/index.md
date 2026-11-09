---
pendingReview: true
title: iOS foundation
cards:
  - title: Theming
    text: Choosing a brand, how the theme reaches your views, and light and dark mode.
    href: /ios/foundations/theming
    icon: theme
  - title: Tokens
    text: Semantic colour tokens, component colours and data visualisation colours, for SwiftUI and UIKit.
    href: /ios/foundations/tokens
    icon: tokens
  - title: Typography
    text: The Warp text styles, how to apply them and how they scale with Dynamic Type.
    href: /ios/foundations/typography
    icon: type
  - title: Spacing
    text: The spacing scale and semantic layout values.
    href: /ios/foundations/spacing
    icon: spacing
  - title: Shape
    text: Corner radius and border width values.
    href: /ios/foundations/shape
    icon: shape
  - title: Elevation
    text: Shadows and elevated surface colours.
    href: /ios/foundations/elevation
    icon: elevation
related:
  - title: Icons
    text: Warp.Icon, Warp.TaxonomyIcon, Warp.BrandIcon and Warp.BrandLogo.
    href: /ios/components/icons/overview
    icon: icons
  - title: Text
    text: The Warp.Text component.
    href: /ios/components/text/code
    icon: text
---

# iOS foundation

How the Warp foundations are exposed in the Warp iOS package: themes, colour tokens, typography, spacing, shape and elevation. For the design guidance behind them, which applies to every platform, see the [Design Language](/design-language/).

To add the package to your app, follow [Get started on iOS](/get-started/ios/). The package supports iOS 18 and later, and its default branch is `main` ([warp-ds/warp-ios](https://github.com/warp-ds/warp-ios)).

## Topics

<NavCards :items="$frontmatter.cards" />

## Related

<NavCards :items="$frontmatter.related" variant="row" />
