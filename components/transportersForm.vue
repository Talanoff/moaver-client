<template>
  <div>
    <div v-if="store.currentStep !== store.steps.length">
      <div v-for="step in store.steps">
        <div v-if="step.id === store.currentStep"
             class="sm:h-[450px] h-[350px] overflow-y-auto overflow-x-hidden" :key="step.id">

          <h2 class="sm:text-3xl text-xl font-bold sm:mb-8 mb-2">{{ step.id === 0 ? store.category : step.title }}</h2>
          <div class="flex flex-wrap -m-2.5  ">
            <div v-for="(field) in step.fields" :key="field.id" class="p-2.5"
                 :class="field.className">
              <component :is="getFieldName(field.fieldType)" :id="field.id" v-model="field.value"
                         :value="field.value"
                         v-bind="field.attr"
                         v-if="field.show === true || field.show === undefined"
              />
            </div>
            <div v-if="step.add" @click="addField(step)"
                 class="m-2.5 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add
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
  step.fields.push({
    id: Math.random(),
    attr: {
      items: [
        {
          id: 1,
          value: 'home',
          attr: {
            del: true,
            required: false,
            name: 'country',
            options: ['home', 'office'],
          }
        },
        {
          id: 2,
          value: 'home',
          attr: {
            del: true,
            required: false,
            name: 'country',
            options: ['home', 'office'],
          }
        },
      ]

    },
    fieldType: 'selectGroup',
    className: 'w-full'
  },)
}
const store = useTransporters()

</script>

<style scoped>

</style>