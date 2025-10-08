<script setup>
import { wButton, wStep, wSteps } from '@warp-ds/vue';
import { computed, reactive, ref } from 'vue';
import DemoControls from '../../.vitepress/Controls.vue';

const steps = [
  { name: 'Step 1', desc: 'The first step' },
  { name: 'Step 2', desc: 'The second step' },
  { name: 'Step 3', desc: 'The last step' },
];

const currentStep = ref(0);

const stepControlButtonText = computed(() => {
  switch (currentStep.value) {
    case steps.length:
      return 'Start over';
    case steps.length - 1:
      return 'Finish';
    default:
      return 'Next step';
  }
});

const nextStep = () => {
  if (++currentStep.value > steps.length) currentStep.value = 0;
};

const alignments = {
  vertical: 'Vertical',
  horizontal: 'Horizontal',
};

const positions = {
  left: 'Left',
  right: 'Right',
};

const useIsActive = (state) => (name) => state.active === name;
const radio = true;

const alignmentState = reactive({ active: alignments.horizontal });
const isActiveAlignment = useIsActive(alignmentState);
const alignmentControls = Object.entries(alignments).map(([, name]) => ({ name, radio }));

const positionState = reactive({ active: positions.left });
const isActivePosition = useIsActive(positionState);
const positionControls = Object.entries(positions).map(([, name]) => ({ name, radio }));
</script>

<template>
  <div class="component">
    <w-steps
      :horizontal="isActiveAlignment(alignments.horizontal)"
      :right="isActivePosition(positions.right)"
      class="mb-32"
    >
      <w-step v-for="(step, stepIndex) in steps" :key="step.name" :active="currentStep === stepIndex" :complete="currentStep > stepIndex">
        <strong>{{ step.name }}</strong>
        <p>{{ step.desc }}</p>
      </w-step>
    </w-steps>

    <demo-controls x class="flex items-center">
      <demo-control label="Alignment" :controls="alignmentControls" :state="alignmentState" />
      <demo-control v-if="isActiveAlignment(alignments.vertical)" label="Position" :controls="positionControls" :state="positionState" />
      <w-button primary @click="nextStep" class="last:mb-32 last-child:mb-32 mb-32 last:ml-auto!">{{ stepControlButtonText }}</w-button>
    </demo-controls>
  </div>
</template>
