---
title: About WARP
help:
  - title: FAQ
    text: Answers to the questions we hear most often.
    href: /about/help/faq/
    icon: help
  - title: Support
    text: Who to contact, and where, when you need help.
    href: /about/help/support/
    icon: support
  - title: WARP Docs content guideline
    text: How to write and contribute to these docs.
    href: /about/help/authoring-guide/
    icon: edit
  - title: Request a new component
    text: Propose a component that WARP does not have yet.
    href: /about/help/requests/new-component/
    icon: request
  - title: Request component changes
    text: Suggest a change to an existing component.
    href: /about/help/requests/component-changes/
    icon: sliders
  - title: Report bugs or errors
    text: Tell us about a bug in a component or a mistake in the docs.
    href: /about/help/report-bugs/
    icon: bug
news:
  - title: What's new
    text: Release notes and updates.
    href: /about/whats-new/
    icon: news
  - title: Platform coverage
    text: Which components are documented on Web, iOS and Android.
    href: /about/platform-coverage
    icon: coverage
  - title: Mission and principles
    text: What WARP is and why it exists.
    href: /design-language/about/
    icon: mission
---

# About WARP

Help, contribution and news about the WARP Design System.

## Help and contribution

<NavCards :items="$frontmatter.help" />

## News and status

<NavCards :items="$frontmatter.news" variant="row" :columns="2" />
