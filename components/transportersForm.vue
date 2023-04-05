<template>
  <div>
    <div v-if="store.currentStep !== store.steps.length">
      <div v-for="step in store.steps">
        <div v-if="step.id === store.currentStep" :key="step.id">

          <h2 class="text-3xl font-bold mb-8">{{ step.id === 0 ? store.category : step.title }}</h2>
          <div class="flex flex-wrap -m-2.5 max-h-[450px] overflow-y-auto">
            <div v-for="(field,idx) in step.fields" :key="field.id" class="p-2.5"
                 :class="field.className">
              <component :is="getFieldName(field.fieldType)" :id="field.id" :index="idx" v-model="field.value"
                         :value="field.value"
                         v-bind="field.attr"
                         v-if="field.show === true || field.show === undefined"
              />
            </div>
            <div v-if="step.add" @click="addField(step)"
                 class="m-2.5 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add
            </div>
            <div v-if="step.del" @click="delField(step)"
                 class="m-2.5 cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="text-xl font-bold mt-4">Thank you for your assignment! We'll get to work for you right away.</h2>
    </div>

  </div>
</template>

<script setup>
import {getFieldName} from "~/helpers/field-type";
import {useTransporters} from "~/store/transporters";

const addField = (step) => {
  step.fields.push(step.fields[0])
  step.fields.push(step.fields[1])
}
const delField = (step) => {
  if (step.fields.length > 2) {
    step.fields.splice(step.fields.length - 2, 2)
  }
}
const store = useTransporters()

</script>

<style scoped>

</style>