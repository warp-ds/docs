<template>
  <div class="component">
    <div>
      <w-button id="dynamic-button" variant="utility" aria-labelledby="dynamic-tooltip">Hover me to trigger this dynamic tooltip!</w-button>
      <w-tooltip id="dynamic-tooltip" for="dynamic-button" placement="right">Tooltip flips and shifts automatically</w-tooltip>
    </div>
  </div>
</template>
