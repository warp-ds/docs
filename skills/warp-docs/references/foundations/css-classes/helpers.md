# Useful Warp Helper Classes

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/helpers

> Helper Classes

The `.page-container` helper class job is to normalize page behavior across the pages/sites, most pages should be set up with this.

-   Sets a max-width for the page ( This is dictated by the banner formats )
-   Left aligns the page if there is room for banners on both sides
-   Centers the page when there is room for banners on both sides.
-   Sets up spacing between content and banners ( Also calculated from banner sizes )

Header/Footer also use the same helper class to follow the same pattern.

```html
<main class="page-container">
  <!-- ... -->
</main>
```
