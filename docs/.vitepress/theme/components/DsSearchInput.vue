<script setup>
const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Search…' },
  ariaLabel: { type: String, default: 'Search' }
})
const emit = defineEmits(['update:modelValue','clear'])

function onInput(e){ emit('update:modelValue', e.target.value) }
function clear(){ emit('update:modelValue',''); emit('clear') }
</script>

<template>
  <div class="ds-search">
    <span class="ds-search__icon" aria-hidden="true">
      <!-- magnifier -->
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.49 21.49 20 15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    </span>
    <input
      class="ds-search__input"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
    />
    <button
      v-if="modelValue"
      class="ds-search__clear"
      type="button"
      @click="clear"
      aria-label="Clear search"
      title="Clear"
    >
      ×
    </button>
  </div>
</template>

<style scoped>
.ds-search {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
.ds-search__icon {
  position: absolute;
  left: 10px;
  color: var(--vp-c-text-2);
  display: inline-flex;
}
.ds-search__input {
  width: 100%;
  height: 40px;
  padding: 8px 36px 8px 36px; /* room for icon + clear */
  border-radius: var(--vp-input-radius, 4px);
  border: 1px solid var(--vp-c-input-border);
  background: var(--vp-c-input-bg);
  color: var(--vp-c-input-text);
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
  font: inherit;
}
.ds-search__input::placeholder {
  color: var(--vp-c-text-2);
}
.ds-search__input:focus {
  border-color: var(--vp-c-input-border-focus, var(--vp-c-brand-1));
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--vp-c-brand-1) 24%, transparent);
  background: var(--vp-c-input-bg);
}
.ds-search__clear {
  position: absolute;
  right: 8px;
  height: 24px;
  min-width: 24px;
  padding: 0 6px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.ds-search__clear:hover {
  filter: brightness(0.98);
}
</style>
