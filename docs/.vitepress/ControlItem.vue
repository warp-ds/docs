<script>
export default { inheritAttrs: false };
</script>

<script setup>
import { wButtonGroupItem, wClickable } from '@warp-ds/vue';
import { computed } from 'vue';

const props = defineProps({
  state: null,
  name: String,
  radio: Boolean,
  checkbox: Boolean,
  button: Boolean
});

const stateLocation = computed(() => props.radio ? 'active' : props.name);
const model = props.button ? null : computed({
  get: () => props.state[stateLocation.value],
  set: v => props.state[stateLocation.value] = v
})
const selected = props.button ? null : computed(() => props.radio ? model.value === props.name : model.value);
</script>

<template>
  <w-button-group-item :selected="selected">
    <w-clickable v-if="button" label v-bind="$attrs">{{ name }}</w-clickable>
    <w-clickable v-else label v-bind="$props" v-model="model" :value="name">{{ name }}</w-clickable>
  </w-button-group-item>
</template>
