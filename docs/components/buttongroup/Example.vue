<script setup>
import { wButtonGroup, wButtonGroupItem, wClickable } from '@warp-ds/vue';
import { reactive, ref } from 'vue';

const checkbox = true;
const radio = true;
const useIsActive = (state) => (name) => state.active === name;
const buildCheckboxState = ({ controls, active }) =>
  controls.reduce((acc, e) => ((acc[e.name] = e.name === active), acc), {});

const radioModel = ref('foo');
const alert = () => window.alert('Hello Warp!');

const type = reactive({ active: 'Radio' });
const active = useIsActive(type);
const typeControls = [
  { name: 'Radio', radio },
  { name: 'Button', radio },
];

const modifierControls = [
  { name: 'Outlined', checkbox },
  { name: 'Raised', checkbox },
  { name: 'Vertical', checkbox },
];
const modifiers = reactive(buildCheckboxState({ controls: modifierControls }));
</script>

<template>
  <div class="component">
    <w-button-group :outlined="modifiers.Outlined" :raised="modifiers.Raised" :vertical="modifiers.Vertical" class="mb-32">
      <w-button-group-item :selected="active('Radio') && radioModel === 'foo'">
        <w-clickable v-if="active('Radio')" label radio v-model="radioModel" value="foo">Foo</w-clickable>
        <w-clickable v-else label @click="alert">Foo</w-clickable>
      </w-button-group-item>
      <w-button-group-item :selected="active('Radio') && radioModel === 'bar'">
        <w-clickable v-if="active('Radio')" label radio v-model="radioModel" value="bar">Bar</w-clickable>
        <w-clickable v-else label @click="alert">Bar</w-clickable>
      </w-button-group-item>
      <w-button-group-item :selected="active('Radio') && radioModel === 'baz'">
        <w-clickable v-if="active('Radio')" label radio v-model="radioModel" value="baz">Baz</w-clickable>
        <w-clickable v-else label @click="alert">Baz</w-clickable>
      </w-button-group-item>
    </w-button-group>

    <demo-controls y>
      <demo-control label="Type" :controls="typeControls" :state="type" />
      <demo-control label="Modifiers" :controls="modifierControls" :state="modifiers" />
    </demo-controls>
  </div>
</template>
