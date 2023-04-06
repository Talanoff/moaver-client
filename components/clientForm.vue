<template>
  <div>
    <div v-if=" store.currentStep !== store.steps.length">
      <div v-for="step in store.steps">
        <div v-if="step.id === store.currentStep" :key="step.id">
          <h2 class="sm:text-3xl text-xl font-bold sm:mb-8 mb-2">{{ step.id === 0 ? store.category : step.title }}</h2>
          <div class="flex flex-wrap -m-2.5 sm:max-h-[450px] max-h-[350px] overflow-y-auto">
            <div v-for="field in step.fields" :key="field.id" :class="field.className">
              <component
                  class="p-2.5"
                  :is="getFieldName(field.fieldType)"
                  :id="field.id"
                  v-model="field.value"
                  v-bind="field.attr"
                  v-if="field.show === true || field.show === undefined"
              />

            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-xl font-bold mt-4" v-else>
      Thank you for your assignment! We'll get to work for you right away.
    </h2>
  </div>
</template>

<script setup>
import {getFieldName} from "~/helpers/field-type";
import {useBooking} from "~/store/booking";

const store = useBooking()
</script>

<style scoped>

</style>
