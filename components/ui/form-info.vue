<template>
  <div>
    Category: {{ store.category }}
    <div v-for="(field,idx) in fields" :key="idx">
      <div v-if="field.name !== 'Pick file'">
        <div v-if=" field.name && field.value">{{ field.name }}: {{ field.value }}</div>
      </div>
      <div v-else>
        <div v-if="field.name && field.url">{{ field.name }}: <img :src="field.url" alt=""></div>
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
