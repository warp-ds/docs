<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Tooltip on hover/focus</h3>
      <w-button id="right-button" variant="utility" aria-labelledby="right-tooltip">Hover or focus me</w-button>
      <w-tooltip id="right-tooltip" for="right-button" placement="right">I'm a tooltip on right</w-tooltip>
    </div>
    <div>
      <h3 class="t4">Tooltip on bottom</h3>
      <w-button id="bottom-button" variant="utility" aria-labelledby="bottom-tooltip">Hover or focus me</w-button>
      <w-tooltip id="bottom-tooltip" for="bottom-button" placement="bottom">I'm a tooltip on bottom</w-tooltip>
    </div>
  </div>
</template>
