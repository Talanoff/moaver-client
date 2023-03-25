<template>
<div>
<div v-if="!store.transporters">
  <step-first v-if="store.step === 1"/>
  <step-second v-if="store.step === 2"/>
  <step-three v-if="store.step === 3"/>
  <step-four v-if="store.step === 4"/>
  <step-five v-if="store.step === 5"/>
  <step-six v-if="store.step === 6"/>
  <step-seven v-if="store.step === 7"/>
</div>
  <div v-else>
  <step-first-tranporters v-if="store.step === 1"/>
  <step-second-transporters v-if="store.step === 2"/>
  <step-three v-if="store.step === 3"/>
  <step-four v-if="store.step === 4"/>
  <step-five v-if="store.step === 5"/>
  <step-six v-if="store.step === 6"/>
  <step-seven v-if="store.step === 7"/>
</div>
</div>
</template>
<script setup lang="ts">
import StepFirst from "~/components/stepsForm/stepFirst.vue";
import {useStoreIndex} from "~/store";
import StepSecond from "~/components/stepsForm/stepSecond.vue";
import StepThree from "~/components/stepsForm/stepThree.vue";
import StepFour from "~/components/stepsForm/stepFour.vue";
import StepFive from "~/components/stepsForm/stepFive.vue";
import StepSix from "~/components/stepsForm/stepSix.vue";
import StepSeven from "~/components/stepsForm/stepSeven.vue";
import StepFirstTranporters from "~/components/stepsForm/transportersSteps/stepFirstTranporters.vue";
import StepSecondTransporters from "~/components/stepsForm/transportersSteps/stepSecondTransporters.vue";

const store = useStoreIndex()
</script>