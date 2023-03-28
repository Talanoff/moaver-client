<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <h2 class="text-3xl font-bold mb-8">Transporters form</h2>
    <div class="flex gap-2 mb-4">
      <form-input :type-input="'text'" class="w-full" :value="form.TransportCompanyName" :title="'\n'+
'Transport company name'" :placeholder="'Name'"
                  @inputEmit="(value)=>{inputt(value,'TransportCompanyName')}"/>
    </div>
    <h2 class="text-xl font-semibold mt-8 mb-4">Main pitch address</h2>
    <div class="flex gap-2 mb-4" v-if="store.category !== store.categories[3].name">
      <form-input :type-input="'text'" class="w-1/2" :value="form.street" :title="'\n'+
'street'" :placeholder="'street'"
                  @inputEmit="(value)=>{inputt(value,'street')}"/>
      <form-input :type-input="'number'" class="w-1/2" :value="form.houseNumber" :title="'\n'+
'house number'" :placeholder="'house number'"
                  @inputEmit="(value)=>{inputt(value,'houseNumber')}"/>
    </div>
    <div class="flex gap-2 mb-4" v-if="store.category !== store.categories[3].name">
      <form-input :type-input="'number'" class="w-1/2" :value="form.postcode" :title="'\n'+
'postcode'" :placeholder="'postcode'"
                  @inputEmit="(value)=>{inputt(value,'postcode')}"/>
      <form-input class="w-1/2" :type-input="'text'" :value="form.country" :title="'country'" :placeholder="'country'"
                  @inputEmit="(value)=>{inputt(value, 'country')}"/>
    </div>
    <div class="flex gap-2 mb-4" v-if="store.category !== store.categories[3].name">
      <form-input :type-input="'number'" class="w-1/2" :value="form.phone" :title="'\n'+
'Telephone number'" :placeholder="'Telephone number'"
                  @inputEmit="(value)=>{inputt(value,'phone')}"/>
      <form-input class="w-1/2" :type-input="'email'" :value="form.email" :title="'E-mail address'" :placeholder="'E-mail address'"
                  @inputEmit="(value)=>{inputt(value, 'email')}"/>
    </div>
    <div></div>
    <button
        class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-4 py-3 bg-blue-900 rounded-lg text-gray-100"
        @click="store.showModal = false">X
    </button>
    <div class="flex justify-between items-center mt-8">
      <div class="w-1/4">
        <h2>Step {{ store.step }} van {{ store.stepsProgress }} </h2>
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

const store = useBooking()
const options = ref([{name: 'Home'}, {name: 'Office'}, {name: 'Garage'},])
const form = ref({})
const setCategory = (name) => {
  store.showModal = true
  store.category = name
}
const inputt = (value, type) => {
  form.value[type] = value
}
const submit = () => {
  store.step = 2
  localStorage.transportersStep1 = JSON.stringify(form.value)
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})
onMounted(() => {
  if (localStorage.transportersStep1) {
    form.value = JSON.parse(localStorage.transportersStep1)
  }
})
</script>
