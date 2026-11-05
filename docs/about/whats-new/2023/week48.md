---
title: 'WARP releases'
date: 2023-12-01
---

We have now released new versions of our Warp packages:
- [@warp-ds/elements: 1.2.1](https://www.npmjs.com/package/@warp-ds/elements)
- [@warp-ds/react: 1.2.1](https://www.npmjs.com/package/@warp-ds/react)
- [@warp-ds/vue: 1.2.2](https://www.npmjs.com/package/@warp-ds/vue)
- [@warp-ds/uno: 1.3.0](https://www.npmjs.com/package/@warp-ds/uno)

---

# Week 48

These past few weeks we have worked hard to fix reported issues, as well as bring you new stuff in our Warp packages. Below is an overview of the latest changes.


## @warp-ds/elements@1.2.1

### Bug Fixes

* **textfield:** allow styling input's left padding when prefix is wider than 40px ([#116](https://github.com/warp-ds/elements/issues/116)) ([ac890c7](https://github.com/warp-ds/elements/commit/ac890c79d877a851fe536436aa598ef5e18308ec))
* publish individual web components to eik ([#111](https://github.com/warp-ds/elements/issues/111)) ([0915221](https://github.com/warp-ds/elements/commit/09152215ec3ccf40643403c2d64edb6b9f76ea89))
* **expandable** use Warp chevron icons instead of inline svgs ([#107](https://github.com/warp-ds/elements/issues/107)) ([87faf60](https://github.com/warp-ds/elements/commit/87faf60be3ac5d5460b04add6f5b408844b31bd7))
* **expandable:** fix long titles overflowing chevron
* **expandable** only show focus indicator in on focus-visible 
* **tabs:** left align all tabs instead of stretch

[Changelog](https://github.com/warp-ds/elements/releases/tag/v1.2.1)

## @warp-ds/react@1.2.1

### Bug Fixes

* **combobox:** don't open on modifier key press and fix aria-expanded ([#152](https://github.com/warp-ds/react/issues/152)) ([71e42f6](https://github.com/warp-ds/react/commit/71e42f6ddd224c9b76cbf8d4db21fecf33b4e91e))
* **textfield:** allow styling input's left padding when prefix is wider than 40px ([#173](https://github.com/warp-ds/react/issues/173)) ([89e5a27](https://github.com/warp-ds/react/commit/89e5a278edf5095e80d5aca24f0c4aa5d3c9fd9e))
* **textfield:** render prefix before input ([#161](https://github.com/warp-ds/react/issues/161)) ([2017cff](https://github.com/warp-ds/react/commit/2017cff7a67be1b0cac958cf0e85907591d8e3e8))
* Import icons in the correct way ([#169](https://github.com/warp-ds/react/issues/169)) ([f279db9](https://github.com/warp-ds/react/commit/f279db9165bfb673dcf55507e3e3880618cc23b3))
* **expandable:** fix long titles overflowing chevron
* **expandable** only show focus indicator in on focus-visible
* **tabs:** left align all tabs instead of stretch
* **modal** set z-index of Modal backdrop to 30

[Changelog](https://github.com/warp-ds/react/releases/tag/v1.2.1)


## @warp-ds/vue@1.2.2

### Bug Fixes

* **Slider** misc a11y fixes ([#108](https://github.com/warp-ds/vue/issues/108)) ([3716178](https://github.com/warp-ds/vue/commit/371617868f24def93d49ffc4a7eb01b48276c134))
* **textfield:** allow styling input's left padding if prefix is wider than 40px ([#115](https://github.com/warp-ds/vue/issues/115)) ([0799864](https://github.com/warp-ds/vue/commit/0799864895a8909c9aa80b21519a47a429a473db))
* **textfield** reintroduce placeholder ([#119](https://github.com/warp-ds/vue/issues/119)) ([9783d3a](https://github.com/warp-ds/vue/commit/9783d3ab232eab5ab341132903e81364623a69f1))
* use new icons export to drop bundle size ([#110](https://github.com/warp-ds/vue/issues/110)) ([9d95858](https://github.com/warp-ds/vue/commit/9d95858ee60fc691b4493c67f6f6cddd3bd035a5))
* **expandable:** fix long titles overflowing chevron
* **expandable** only show focus indicator in on focus-visible
* **tabs:** left align all tabs instead of stretch
* **modal** set z-index of Modal backdrop to 30

[Changelog](https://github.com/warp-ds/vue/releases/tag/v1.2.2)

## @warp-ds/uno 1.3.0

### Features

* **rules:** add support for outline color classes ([#173](https://github.com/warp-ds/drive/issues/173)) ([da3aec9](https://github.com/warp-ds/drive/commit/da3aec9789d425cbea2c3dbb399d85c64344dff3))

[Changelog](https://github.com/warp-ds/drive/releases/tag/v1.3.0)