<script setup>
import { inject } from 'vue';

const { current: currentTheme, themes: warpThemes, updateTheme } = inject('warpThemeSwitcher');
</script>

<template>
  <div class="theme-switcher-container">
    <div class="theme-switcher">
      <label class="label" for="themeSelect">Example theme:</label>
      <div class="select" title="Select theme to be applied to examples">
        <select id="themeSelect" :value="currentTheme" @change="(e) => updateTheme(e.target.value)">
          <option v-for="[name, value] in Object.entries(warpThemes)" :key="name" :value="value">{{ name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}
.label {
  font-size: 12px;
  margin-right: 8px;
}
@media (min-width: 768px) {
  .label {
    font-size: 14px;
  }
}

.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  width: 150px;
  padding: 1px 8px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-text-2);
  border-radius: 5px;
  transition: border-color 0.25s;

  &:last-child {
    margin-bottom: 0;
  }

  select {
    grid-area: select;
    background-color: transparent;
    cursor: pointer;
  }

  &::after {
    grid-area: select;
    content: "";
    justify-self: end;
    width: 8px;
    height: 5px;
    background-color: var(--vp-c-text-1);
    clip-path: polygon(100% 0%, 0 0, 50% 100%);
  }

  &:focus-within {
    outline: 4px auto -webkit-focus-ring-color;
  }

  &:hover {
    border: 2px solid var(--vp-c-brand-1);
    padding: 0 7px;
  }
}
</style>