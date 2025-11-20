<script setup>
import { ref } from 'vue';

const props = defineProps({
  initialTab: String,
  tabs: Array,
  isDisabled: Function,
  storageKey: String,
  variant: {
    type: String,
    default: 'default',
  },
});
const activeTab = ref(props.initialTab);
const switchTab = (tab) => {
  activeTab.value = tab;
  localStorage.setItem(props.storageKey, tab);
  const params = new URLSearchParams(window.location.search);
  params.set(props.storageKey, tab);
  const url = new URL(window.location);
  url.search = params.toString();
  history.pushState(null, null, url.toString());
};
</script>

<template>
  <div :class="['tablist', `tab--${props.variant}`]" role="tablist">
    <button
      v-for="tab in tabs"
      :key="tab" role="tab"
      :id="`tab-${tab}`"
      :href="`#panel-${tab}`"
      :class="{
        tab: true,
        'tab-head--active': activeTab === tab,
        'tab-head--disabled': props.isDisabled(tab),
      }"
      :aria-selected="`${activeTab === tab}`"
      @click="switchTab(tab);"
    >
      <slot :name="`tab-head-${tab}`"></slot>
    </button>
  </div>
  <div class="tab-body">
    <section role="tabpanel" :id="`panel-${activeTab}`" :aria-labelledby="`tab-${activeTab}`" class="tab-panel">
      <slot :name="`tab-panel-${activeTab}`"></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.tablist {
  display: flex;
  margin: 48px 0 0;
  list-style: none;
  position: relative;
}

.tab {
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 32px 8px 0;
  position: relative;
}

.tab:focus-visible {
  border-radius: 2px;
  outline: 0.2em solid royalblue;
}

.tab[aria-selected="true"] {
  color: var(--vp-c-brand-1);
}

.tab-head--disabled {
  opacity: .6;
  pointer-events: none;
}
.tablist.tab--main{
  margin: 16px 0 0;
  width:100%;
  .tab {
    border-bottom: 3px solid transparent;
    padding: 8px 16px 5px;

    &[aria-selected="true"] {
      color: var(--vp-c-brand-1);
      border-color: var(--vp-c-brand-1);
    }

    &.tab-head--disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }

}
.tablist.tab--main::before {
  display: block;
  position: absolute;
  bottom: 0px;
  height: 1px;
  width: 100%;
  border-bottom: 1px solid var(--vp-c-divider);
  content: '';
}
</style>
