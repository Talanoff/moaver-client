<template>
  <div>
    <div class="flex border-b-2 pb-2">
      <h2 class="font-semibold w-64">Category:</h2> {{ store.category }}
    </div>
    <div v-for="(field,idx) in fields" :key="idx">
      <div v-if="field.name !== 'Pick file'">
        <div v-if="field.name && field.value" class="flex border-b-2 pb-2">
          <h2 class="font-semibold w-64">{{ field.name }}:</h2>
          <p>{{ field.value }}</p></div>
      </div>
      <div v-else>
        <div v-if="field.name && field.url" class="flex mt-4 ">
          <div class="w-64 font-semibold">{{ field.name }}:</div>
          <img :src="field.url" alt=""
               class="w-32 ">
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
const title = ''
const setValue = () => {

  store.steps.forEach(el => el.fields.forEach((elem) => {
    if (elem.fieldType !== 'checkBoxGroup') {
      fields.value.push({name: elem.attr?.name, value: elem.value, url: elem.attr?.url})
    } else {
      elem.attr.options.forEach((option) => {
        if (option.checked) {
          fields.value.push({name: el.title, value: option.name})
          console.log(fields.value)
        }
      })
    }
  }))
}
setValue()

</script>

<style scoped>

</style>
