<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]" @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png" alt=""></button>
    <h2 class="text-3xl font-bold mb-8">second</h2>

      <div class="transform rotate-90 absolute flex items-center justify-center absolute -left-12 top-60"><span class="transform flex justify-center items-center block w-10 h-10 bg-blue-900 rounded-full -rotate-90 text-white font-bold">A</span>---------------------- <span class="transform flex justify-center items-center block w-10 h-10 bg-[#1BEF9B] rounded-full text-blue-900 -rotate-90 font-bold">B</span></div>


<div class="ml-16">
  <h2>Ophaaldatum</h2>
  <div class="flex justify-between mb-8 w-[350px]">
      <form-input :value="form.dateFrom" :type-input="'datetime-local'" class="w-1/2"  :placeholder="'date'" @inputEmit="(value)=>{inputt(value, 'dateFrom')}"/>

  </div>
  <div class="flex justify-between gap-2 mb-4">
    <form-input :type-input="'text'" :value="form.locationFrom" class="w-1/2" :title="'Location from'" :placeholder="'stuks'" @inputEmit="(value)=>{inputt(value,'locationFrom')}"/>
    <form-select :value="form.locationTypeFrom" :options="options" :title="'Location type'" class="w-1/2" @inputEmit="(value)=>{inputt(value,'locationTypeFrom')}"></form-select>
  </div>
  <h2 class="mt-12">Ophaaldatum</h2>
  <div class="flex justify-between mb-8 w-[350px]">
    <form-input :value="form.dateTo" :type-input="'datetime-local'" class="w-1/2"  :placeholder="'date'" @inputEmit="(value)=>{inputt(value, 'dateTo')}"/>
  </div>
  <div class="flex justify-between gap-2 mb-4">
    <form-input :value="form.locationTo" :type-input="'text'" class="w-1/2" :title="'text'" :placeholder="'stuks'" @inputEmit="(value)=>{inputt(value,'locationTo')}"/>
    <form-select :value="form.locationTypeTo" :options="options" :title="'Location type'" class="w-1/2" @inputEmit="(value)=>{inputt(value,'locationTypeTo')}"></form-select>
  </div>
</div>
    <button
        class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-4 py-3 bg-blue-900 rounded-lg text-gray-100"
        @click="store.showModal = false">X
    </button>
    <div class="flex justify-between items-center mt-8">
      <div class="w-1/4">
        <h2>Stap {{store.step}} van {{ store.stepsProgress }}</h2>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-blue-600 h-2.5 rounded-full" :style="{width:width }"></div>
        </div>
      </div>
      <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Next
      </button>
    </div>
  </form>
</template>

<script setup>
import FormInput from "~/components/ui/form-input.vue";
import {useBooking} from "~/store/booking";
import FormSelect from "~/components/ui/form-select.vue";
const store = useBooking()
const options = ref([{name: 'Home'},{name: 'Office'},{name: 'Garage'},{name: 'Magazine'},{name: 'Shop'},])
const form = ref({})
const inputt = (value, type) => {
  form.value[type] = value
}
const submit = () => {
  localStorage.step2 = JSON.stringify(form.value)
  store.step = 3
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})
onMounted(() => {
  if (localStorage.step2) {
    form.value = JSON.parse(localStorage.step2)
  }
})
</script>
