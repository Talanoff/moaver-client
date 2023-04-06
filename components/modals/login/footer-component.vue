<template>
  <footer class="flex justify-between items-center mt-8">
    <div class="w-1/3">
      <h2>Step {{ store.currentStep }} van {{ store.steps.length }} </h2>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div :style="{width:width }" class="bg-blue-600 h-2.5 rounded-full"></div>
      </div>
    </div>
    <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit">
      <slot/>
    </button>
  </footer>
</template>

<script setup>
import {useTransporters} from "~/store/transporters";

const store = useTransporters()
defineEmits(['submit'])
const width = computed(() => {
  return ((store.currentStep / store.steps.length) * 100) + '%'
})

</script>

<style scoped>

</style>