<template>
  <div>
    <div class="flex sm:justify-start justify-between border-b-2 pb-2">
      <h2 class="font-semibold sm:sm:w-1/2">Category:</h2> {{ store.category }}
    </div>
    <div v-for="(field,idx) in fields" :key="idx">
      <div v-if="field.name !== 'Pick file'">
        <div v-if="field.name && field.value" class="flex sm:justify-start justify-between border-b-2 pb-2">
          <h2 class="font-semibold sm:w-1/2">{{ field.name }}:</h2>
          <p>{{ field.value }}</p></div>
      </div>
      <div v-if="field.name !== 'Pick file'">
        <div v-if="field.name && field.value" class="flex sm:justify-start justify-between border-b-2 pb-2">
          <h2 class="font-semibold sm:w-1/2">{{ field.name }}:</h2>
          <p>{{ field.value }}</p></div>
      </div>
      <div v-else>
        <div v-if="field.name && field.url" class="flex mt-4 border-b-2 pb-2">
          <div class="sm:w-1/2 font-semibold">{{ field.name }}:</div>
          <img :src="field.url" alt=""
               class="w-32 ">
        </div>
      </div>

    </div>
    <div class="border-b-2 pb-2 flex sm:justify-start">
      <h2 class="font-semibold sm:w-1/2">{{ store.steps[3].title }}:</h2>
      <div>
        <div v-for="test in store.steps[3].fields[0].attr.options">
          <div v-if="test.checked">-{{ test.name }}</div>
        </div>
      </div>
    </div>
    <div class="border-b-2 pb-2 flex sm:justify-start">
      <h2 class="font-semibold sm:w-1/2">{{ store.steps[2].title }}:</h2>
      <div>
        <div v-for="test in store.steps[2].fields[0].attr.options">
          <div v-if="test.checked">-{{ test.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useBooking} from "~/store/booking";

const value = ref([])
const fields = ref([])
const store = useBooking()
const setValue = () => {
  store.steps.forEach(el => el.fields.forEach((elem) => {
    if (elem.fieldType !== 'checkBoxGroup') {
      fields.value.push({name: elem.attr?.name, value: elem.value, url: elem.attr?.url})
    }
  }))
}
setValue()

</script>

<style scoped>

</style>
