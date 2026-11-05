---
title: 'WARP releases'
date: 2024-05-21
---

Lots of bug fixes and features in Warp Elements and React and 1 tiny breaking change in Warp Vue

---

# Week 21

## @warp-ds/css@1.9.7

### Bug Fixes

* **cc-input:** avoid style overriding ([#198](https://github.com/warp-ds/css/issues/198)) ([d7b5092](https://github.com/warp-ds/css/commit/d7b509289afa4878e9275330ca3f12eedbc5bfd0))
* **tokens** Fixed list-checked icon token name for Finn ([#209](https://github.com/warp-ds/css/issues/209)) ([89c0c59](https://github.com/warp-ds/css/commit/89c0c59993cf26b97eb611b6aef784a7a6d4c636))
* **tokens:** Grayscale modifications ([#196](https://github.com/warp-ds/css/issues/196)) ([4f72ac4](https://github.com/warp-ds/css/commit/4f72ac4df1dd3ef5a8691cb9718b7f2ef5b4ac0a))
* **tokens:** Add icon tokens for list-checked ([#194](https://github.com/warp-ds/css/issues/194)) ([258e332](https://github.com/warp-ds/css/commit/258e3324ab8e9b72ebb6657700a0caa65b35db90))
* **tokens:** New semantic icon colors for hover and active states in Tori ([#192](https://github.com/warp-ds/css/issues/192)) ([2a9107c](https://github.com/warp-ds/css/commit/2a9107c4cd2e8a310b37c2182e8b2f1b4932b224))
* **cc-card/expandable:** Updates for Card (and Expandable box) component classes ([#191](https://github.com/warp-ds/css/issues/191)) ([3f9c63c](https://github.com/warp-ds/css/commit/3f9c63cbcab7ab473d98af4d4b033e0bbda52a3c))
* **cc-button:** Resolved underline issues in Button component ([#187](https://github.com/warp-ds/css/issues/187)) ([4812cfd](https://github.com/warp-ds/css/commit/4812cfd224de2709f7b26faab6293f5dc18efc43))
* **cc-box/card:** Update Box and Card to use new surface concept ([#186](https://github.com/warp-ds/css/issues/186)) ([215d8cf](https://github.com/warp-ds/css/commit/215d8cf37287f146da4c66a38725fe1a80b6c17f))

[Changelog](https://github.com/warp-ds/css/releases)

## @warp-ds/elements@1.4.0

### Bug Fixes

* **card:** Styling fixes for Card component ([#147](https://github.com/warp-ds/elements/issues/147)) ([53c1249](https://github.com/warp-ds/elements/commit/53c12490ada84eb4e4d30e7707c37ee6f446c1c8))
* **textfield:** clean up classes ([#150](https://github.com/warp-ds/elements/issues/150)) ([da25199](https://github.com/warp-ds/elements/commit/da251996fe38f77fddf6290c675f399b04236f10))


### Features

* **attention:** Add more features on how attention component is positioned ([#135](https://github.com/warp-ds/elements/issues/135)) ([e15dc54](https://github.com/warp-ds/elements/commit/e15dc545187717476d7418af0ca47f6eb734a488))
* **attention:** add more functionality to attention component ([#149](https://github.com/warp-ds/elements/issues/149)) ([daaf385](https://github.com/warp-ds/elements/commit/daaf3853a2c71c6dd70148cc4a7d53498dd5b497))

[Changelog](https://github.com/warp-ds/elements/releases)

## @warp-ds/react@1.5.0

### Bug Fixes

* **card:** Styling fixes for Card component ([#229](https://github.com/warp-ds/react/issues/229)) ([a99dc9c](https://github.com/warp-ds/react/commit/a99dc9c24cd31857e3efe26da91e4e90aa118627))
* **textfield/textarea:** clean up classes ([#239](https://github.com/warp-ds/react/issues/239)) ([4372285](https://github.com/warp-ds/react/commit/4372285b33e51a1688c7cd7f3ab263b1d7120cdc))


### Features

* **pagination:** Add an optional prop to enable nofollow for pagination component ([#231](https://github.com/warp-ds/react/issues/231)) ([9534ae3](https://github.com/warp-ds/react/commit/9534ae3295e041b1143d5ba2c9c827df082959b2))
* **attention:** Add more features on how attention component is positioned ([#215](https://github.com/warp-ds/react/issues/215)) ([5bf7883](https://github.com/warp-ds/react/commit/5bf7883833ded3cbc05b046fd82330b3062aebc9))
* **attention:** add more functionality to attention component ([#233](https://github.com/warp-ds/react/issues/233)) ([95c20b3](https://github.com/warp-ds/react/commit/95c20b3da5d6b361724011171393b0b749317b0e))
* Individual imports ([#212](https://github.com/warp-ds/react/issues/212)) ([766282c](https://github.com/warp-ds/react/commit/766282c068d0fb04bb37a657f6ab1ebe7f156a90))


[Changelog](https://github.com/warp-ds/react/releases)

## @warp-ds/vue@2.0.0

### Bug Fixes

* **card:** Styling fixes for Card component ([#157](https://github.com/warp-ds/vue/issues/157)) ([646fcc4](https://github.com/warp-ds/vue/commit/646fcc4d756900c1c06dd67a62bb7b4415392441))
* **textfield/textarea:** clean up classes  ([#163](https://github.com/warp-ds/vue/issues/163)) ([2babe15](https://github.com/warp-ds/vue/commit/2babe1537ac826d1f00681a7912f91106f9b7667))


### Features

* **attention:** add more functionality to attention component ([#161](https://github.com/warp-ds/vue/issues/161)) ([a8ed8ab](https://github.com/warp-ds/vue/commit/a8ed8ab2ed01bd44b3bdb35d510e29b785a0d2d0))
* Individual imports ([#162](https://github.com/warp-ds/vue/issues/162)) ([42c72d5](https://github.com/warp-ds/vue/commit/42c72d5bb15319c32c9661ca2ef581311d655bd4))


### BREAKING CHANGES

* **attention:** Props `top`, `right`, `left`, `bottom` have been replaced by a new prop called `placement`. [#141](https://github.com/warp-ds/vue/commit/03daa2cd9ad0d1325aea60e6c4f0992a84faa8e6)
* **attention:** `attentionEl` prop has been replaced with a `ref` that is being used internally in the Attention component. [#141](https://github.com/warp-ds/vue/commit/03daa2cd9ad0d1325aea60e6c4f0992a84faa8e6)

[Changelog](https://github.com/warp-ds/vue/releases)
