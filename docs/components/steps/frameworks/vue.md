### Import

> Use in entire app

```js
import { Steps } from '@warp-ds/vue';
app.use(Steps);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wSteps, wStep } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wSteps, wStep } from '@warp-ds/vue/steps';

```

### Syntax

```vue
<w-steps>
  <w-step complete>Step 1</w-step>
  <w-step active>Step 2</w-step>
  <w-step>Step 3</w-step>
</w-steps>
```

#### Interactive usage

```vue
<script setup>
import { computed, reactive, ref } from 'vue';
import { wButton, wSteps, wStep } from '@warp-ds/vue';

const steps = [
  { name: 'Step 1', desc: 'The first step' },
  { name: 'Step 2', desc: 'The second step' },
  { name: 'Step 3', desc: 'The last step' },
];

const currentStep = ref(0);

const stepControlButtonText = computed(() => {
  switch(currentStep.value) {
    case steps.length:
      return 'Start over';
    case (steps.length - 1):
      return 'Finish'
    default:
      return 'Next step';
  }
});

const nextStep = () => {
  if (++currentStep.value > steps.length) currentStep.value = 0;
};
</script>
<template>
  <w-steps horizontal>
    <w-step v-for="(step, stepIndex) in steps" :key="step.name" :active="currentStep === stepIndex" :complete="currentStep > stepIndex">
      <strong>{{ step.name }}</strong>
      <p>{{ step.desc }}</p>
    </w-step>
  </w-steps>
  <w-button @click="nextStep">{{ stepControlButtonText }}</w-button>
</template>
```

### Props

#### Steps

<api-table type="vue" component="Steps" />

#### Step

<api-table type="vue" component="Step" />