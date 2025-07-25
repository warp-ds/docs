<script setup>
import { computed } from 'vue';

const props = defineProps({
  react: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  },
  reactBeta: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  },
  vue: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  },
  elements: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  },
  android: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  },
  ios: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  }
});

const frameworkStatus = computed(() => [
  { name: 'React', status: props.react },
  { name: 'React-beta', status: props.reactBeta },
  { name: 'Vue', status: props.vue },
  { name: 'Elements', status: props.elements },
  { name: 'Android', status: props.android },
  { name: 'iOS', status: props.ios }
]);
</script>

<template>
  <div class="component-status">
    <div v-for="framework in frameworkStatus" :key="framework.name" class="framework">
      <div :class="`circle circle--${framework.status}`"></div>
      <div>
        <h4 class="title">{{ framework.name }}</h4>
        <span class="status">{{ framework.status }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-status {
  display: flex;
  flex-flow: row wrap;
  margin-top: 24px;
  column-gap: 24px;
  row-gap: 24px;

  @media (min-width: 990px) and (max-width: 1103px), (min-width: 1280px) and (max-width: 1365px) {
    column-gap: 32px;
  }
  @media (min-width: 721px) and (max-width: 959px), (min-width: 1080px) and (max-width: 1279px), (min-width: 1366px) {
    column-gap: 48px;
  }
}

.framework {
  display: flex;
}

.title {
  margin: 0;
}

.circle {
  border-radius: 50%;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  margin-top: 6px;

  &--released {
    background-color: #67eeb8
  }

  &--planned {
    background-color: #66e0ff
  }

  &--developing {
    background-color:  #fae76b;
  }

  &--unsupported {
    background-color: #f99
  }
}

.status {
  text-transform: capitalize;
  font-size: 14px;
}
</style>
