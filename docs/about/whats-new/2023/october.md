---
title: "What's been cooking in Warp lately"
date: 2023-11-10
---

Updated Tori colors, new Figma Component Library in progress, updated icons, and Warp colors for Android and iOS... Read on to discover all the exciting updates and improvements we've made in Warp the past couple of months 🎉

---

# What's been cooking in Warp lately

## Design Updates

We have synced with Tori Marketing to decide on accessible brand colors in the Tori UI. Petroleum will be the primary color. The watermelon color will be used as the secondary color and for front page icons.

In addition, the designers are working on a new Component Library in Figma. This update includes a cleanup of our color tokens, incorporating the new Tori colors, support for DBA colors, and the DBA theme across all our components. Stay tuned for more details on when this Component Library will be ready for use. Plus, we've connected our native apps to our Warp token system, ensuring a consistent look and feel across all platforms.

## Web Updates

All the icons (react, vue and elements) support i18n 🌍 The newest version also includes individual imports for elements icons, SSR fix for elements and an improvement for the elements icon size. We have also added Typescript support.

Based on the feedback from the accessibility team, we have done a lot of a11y improvements in several of our components!

We have Eik support for React, Vue and Elements, check it out [here](/get-started/web/#eik-support).

Make sure you have the newest versions of our packages to get the latest changes:

- [@warp-ds/uno: 1.1.0](https://www.npmjs.com/package/@warp-ds/uno)
- [@warp-ds/css: 1.3.0](https://www.npmjs.com/package/@warp-ds/css)
- [@warp-ds/elements: 1.2.0](https://www.npmjs.com/package/@warp-ds/elements)
- [@warp-ds/react: 1.2.0](https://www.npmjs.com/package/@warp-ds/react)
- [@warp-ds/vue: 1.2.0](https://www.npmjs.com/package/@warp-ds/vue)
- [@warp-ds/icons: 1.1.1](https://www.npmjs.com/package/@warp-ds/icons)

## Native Updates

The Proof of Concept (POC) for both Android and iOS has been a success! We've implemented a button and a textfield component, with styling changes that adapt to the brand. Our next focus is on replacing old colors in the Finniverse kit (used by Finn.no) with Warp colors. We are currently going through the Finn and NMP apps to ensure we replace all the old colors.
