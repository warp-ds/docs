<script setup>
import decamelize from "decamelize";
import * as icons from "@warp-ds/icons/vue";
import * as reactIcons from "@warp-ds/icons/react";
import { wModal } from "@warp-ds/vue";
import { computed, ref } from "vue";

// When an existing icon is deprecated, add { old: "IconOldName16", new: "IconNewName16" } to the deprecatedIcons list.
// This will display a deprecation message with a suggested replacement.
const deprecatedIcons = [];

const isDeprecated = (iconName) => deprecatedIcons.some((icon) => iconName === icon.old);

const getDeprecationMessage = (iconName) => {
  const deprecatedIcon = deprecatedIcons.find((icon) => iconName === icon.old);
  if (deprecatedIcon) {
    return 'DEPRECATED' + (deprecatedIcon.new ? ` - use ${deprecatedIcon.new } icon instead` : '');
  }
};

const showModal = ref(false);
const modalData = ref(null);

const mappedIconsBySize = Object.keys(icons).reduce((acc, current) => {
  const matches = current.match(/\d+$/g);

  acc[matches[0]] = acc[matches[0]]
    ? { ...acc[matches[0]], ...{ [current]: icons[current] } }
    : { [current]: icons[current] };

  return acc;
}, {});

const getIconName = (icon) => icon.replace(/Icon|\d+/g, '');

const setIconData = (icon, fullName) => {
  const reactIconName = Object.keys(reactIcons)
    .find((icon) => icon === fullName)
    .replace("Icon", "");

  const outputString = decamelize(reactIconName, { separator: "-" }).replace(
    /([a-zA-Z])(\d+)/,
    "$1-$2"
  );

  modalData.value = {
    iconName: fullName,
    icon: icon,
    react: `import ${fullName} from '@warp-ds/icons/react/${outputString}';`,
    reactSyntax: `<${fullName} />`,
    vue: `import ${fullName} from '@warp-ds/icons/vue/${outputString}';`,
    vueSyntax: `<icon-${outputString} />`,
    elements: `import '@warp-ds/icons/elements/${outputString}';`,
    elementsSyntax: `<w-icon-${outputString}></w-icon-${outputString}>`,
    deprecationMessage: getDeprecationMessage(fullName),
  };
};

const showIconModal = (icon, fullName) => {
  setIconData(icon, fullName);
  showModal.value = true;
}
const dismissIconModal = () => {
  showModal.value = false;
  modalData.value = null;
}

const copyCode = (code) => {
  try {
    navigator.clipboard.writeText(code);
    console.log('Code copied to clipboard: ', code);
  } catch (err) {
    console.error('Failed to copy code: ', err);
  }
}

const getIconExampleStatesClasses = (deprecated, dark) => ({
  'ex-deprecated': deprecated,
  's-bg-inverted': dark,
  [deprecated ? 's-bg-warning-subtle' : 's-bg']: !dark,
});

const getListIconExampleClasses = (fullName) => {
  const iconName = getIconName(fullName);
  const dark = iconName.match(/Dark$/);
  const deprecated = isDeprecated(fullName);
  return [
    'h-56 mb-8 flex flex-col items-center justify-center rounded-4',
    getIconExampleStatesClasses(deprecated, dark),
  ];
};

const modalIconExampleClasses = computed(() => {
  const dark = modalData.value?.iconName.match(/Dark\d*$/) ?? false;
  const deprecated = !!modalData.value?.deprecationMessage;
  console.log(modalIconExampleClasses, dark, deprecated, modalData.value);
  return [
    'min-h-56 flex items-center justify-center mx-auto mb-16 p-16 border rounded-4',
    getIconExampleStatesClasses(deprecated, dark),
  ]
});
</script>

<template>
  <w-modal
    v-if="modalData"
    v-model="showModal"
    :title="modalData.iconName"
    :right="{ 'aria-label': 'Close' }"
    @dismiss="dismissIconModal"
    @right="dismissIconModal"
    class="docs-modal"
  >
    <p v-if="modalData.deprecationMessage" class="mb-8 text-center p-8 rounded s-bg-warning-subtle s-text-negative">
      {{ modalData.deprecationMessage }}
    </p>
    <div :class="modalIconExampleClasses">
      <component :is="modalData.icon" class="s-icon" />
    </div>

    <h2 class="t5 mt-32">Usage for React:</h2>
    <p><code @click="copyCode(modalData.react)">{{ modalData.react }}</code></p>
    <p><code @click="copyCode(modalData.reactSyntax)">{{ modalData.reactSyntax}}</code></p>

    <h2 class="t5 mt-16">Usage for Vue:</h2>
    <p><code @click="copyCode(modalData.vue)">{{ modalData.vue }}</code></p>
    <p><code @click="copyCode(modalData.vueSyntax)">{{ modalData.vueSyntax}}</code></p>

    <h2 class="t5 mt-16">Usage for Elements:</h2>
    <p><code @click="copyCode(modalData.elements)">{{ modalData.elements }}</code></p>
    <p><code @click="copyCode(modalData.elementsSyntax)">{{ modalData.elementsSyntax}}</code></p>
  </w-modal>

  <section
    v-for="size in Object.keys(mappedIconsBySize)"
    :key="size"
    class="rounded-8 p-24 mb-24 bg-[--vp-c-bg-alt]"
  >
    <h3 class="t2 text-[--vp-c-text-1]">{{ size }}</h3>
    <div class="grid gap-24 grid-cols-minmax-100px">
      <button
        v-for="(icon, fullName) in mappedIconsBySize[size]"
        :key="fullName"
        class="bg-transparent"
        @click="showIconModal(icon, fullName)"
      >
        <span :class="getListIconExampleClasses(fullName)">
          <component :is="icon" class="s-icon" />
        </span>
        <span class="text-detail text-[--vp-c-text-1]">
          {{ getIconName(fullName) }} <span v-if="isDeprecated(fullName)">(DEPRECATED)</span>
        </span>
      </button>
    </div>
  </section>
</template>
