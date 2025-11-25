<script setup>
import { computed, onMounted, ref, useSlots } from 'vue';
import Tabs from './Tabs.vue';

const props = defineProps({
  tabsOrder: { type: Array, default: () => [] },
  storageKey: { type: String },
});

const slots = useSlots();

// Only treat real content slots as tabs
const isHelperSlot = (n) => n === 'default' || n.startsWith('tab-head-') || n.startsWith('tab-panel-');

const derived = computed(() => Object.keys(slots).filter((n) => !isHelperSlot(n)));
const tabs = computed(() => (props.tabsOrder?.length ? props.tabsOrder : derived.value));

const formatTabTitle = (tab) => {
  if (tab === 'iOS') return tab;
  const c = tab.charAt(0).toUpperCase() + tab.slice(1);
  return c.replaceAll('_', ' ');
};

const isDisabled = (tab) => {
  const slotContent = slots[tab]?.();
  return !slotContent || slotContent.length === 0;
};

const findFirstAvailableTab = () => tabs.value.find((tab) => !isDisabled(tab)) ?? tabs.value[0] ?? '';

const resolvePersistedTab = () => {
  if (typeof window === 'undefined' || !props.storageKey) return null;
  const urlTab = new URLSearchParams(window.location.search).get(props.storageKey);
  if (urlTab && !isDisabled(urlTab)) return urlTab;
  const storedTab = window.localStorage.getItem(props.storageKey);
  if (storedTab && !isDisabled(storedTab)) return storedTab;
  return null;
};

const initialTab = ref(findFirstAvailableTab());

onMounted(() => {
  const persistedTab = resolvePersistedTab();
  if (persistedTab && persistedTab !== initialTab.value) {
    initialTab.value = persistedTab;
  }
});
</script>

<template>
  <Tabs :tabs="tabs" :initialTab="initialTab" :isDisabled="isDisabled" :storage-key="storageKey">
    <!-- Per-tab head: parent can override with #tab-head-<name> -->
    <template v-for="tab in tabs" #[`tab-head-${tab}`]>
      <slot :name="`tab-head-${tab}`">
        {{ formatTabTitle(tab) }}
      </slot>
    </template>

    <!-- Panels -->
    <template v-for="tab in tabs" #[`tab-panel-${tab}`]>
      <slot :name="tab" />
    </template>
  </Tabs>
</template>
