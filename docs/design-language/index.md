---
title: Design Language
cards:
  - title: Tokens
    text: Warp tokens, their structure, supported brands and a token overview.
    href: /design-language/tokens/intro/
    icon: tokens
  - title: Typography
    text: UX writing guidelines, font styles and the brand fonts.
    href: /design-language/typography/
    icon: type
  - title: Accessibility
    text: Requirements, the accessibility playbook and useful Figma plugins.
    href: /design-language/accessibility/
    icon: accessibility
  - title: Brands
    text: Supported brands and brand guidelines.
    href: /design-language/brands/
    icon: brands
  - title: Illustrations
    text: Figma links to each brand's illustration library.
    href: /design-language/illustrations/
    icon: image
  - title: Data visualization
    text: Getting started, chart types, colour usage and success criteria.
    href: /design-language/data-visualization/introduction/
    icon: chart
  - title: Elevation
    text: Elevation as a concept, the basics and the surface types.
    href: /design-language/elevation/
    icon: elevation
  - title: Dark mode
    text: Dark mode support in Warp and switching modes in Figma.
    href: /design-language/dark-mode/
    icon: moon
  - title: Motion
    text: Guidelines for motion.
    href: /design-language/motion/
    icon: motion
  - title: About the design system
    text: Mission, values and principles.
    href: /design-language/about/
    icon: mission
platforms:
  - title: Web foundation
    href: /web/foundations/
    logo: webcomponentsdotorg
  - title: iOS foundation
    href: /ios/foundations/
    logo: apple
  - title: Android foundation
    href: /android/foundations/
    logo: android
---

# Design Language

The shared foundation of Warp: the principles, colour, typography, elevation, motion and other visual decisions that every platform builds on. Pages here are platform-agnostic; where a platform implements a topic in its own way, the page links to the platform-specific details.

<NavCards :items="$frontmatter.cards" />

## Platform foundations

How each platform implements the Design Language.

<NavCards :items="$frontmatter.platforms" :columns="3" variant="row" />
