> Helper Classes

# Useful Warp Helper Classes

## Page Container

The `.page-container` helper class job is to normalize page behavior across the pages/sites, most pages should be set up with this.

- Sets a max-width for the page ( This is dictated by the banner formats )
- Left aligns the page if there is room for banners on both sides
- Centers the page when there is room for banners on both sides.
- Sets up spacing between content and banners ( Also calculated from banner sizes )

Header/Footer also use the same helper class to follow the same pattern.

<example-container>
  <div class="flex justify-center">
    <img src="/foundations/page-container.png" class="object-cover" alt="example of what page-container does as an overlay on top of finn.no" />
  </div>
</example-container>

```html
<main class="page-container">
  <!-- ... -->
</main>
```