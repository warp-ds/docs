<template>
  <span class="framework-tabs-marker" hidden />
</template>

<script>
// The Framework control (Elements + legacy React / React 19 / Vue) is rendered in the page header by
// ComponentsStatus.vue, so it never moves between Code pages. This marker stays in the markdown so the
// framework H2 right before it ("## React", kept for search and the outline) is visually hidden with CSS
// (custom.css: `h2:has(+ .framework-tabs-marker)`) — no hiding after mount, so no layout shift.
export default {};
</script>
