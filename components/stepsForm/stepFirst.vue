<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px] "
        @submit.prevent="submit">
    <h2 class="text-3xl font-bold mb-8">{{ store.category }}</h2>
    <div class="mb-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 text-sm font-semibold">
        <form-radio @click="setCategory(card.name); setForm(card.name,'category')" :card="card"
                    v-for="(card,idx)  in store.categories" :key="idx"/>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-5 mb-4" v-if="store.category !== store.categories[3].name">
      <form-input :type-input="'number'" :value="form.stuks" :title="'stuks'" :placeholder="'stuks'"
                  @inputEmit="(value)=>{setForm(value,'stuks')}"/>
      <form-input :type-input="'number'" :value="form.kg" :title="'kg'" :placeholder="'kg'"
                  @inputEmit="(value)=>{setForm(value, 'kg')}"/>
    </div>
    <div v-else class="mb-4">
      <form-select :options="options" :value="form.variousGoods" @inputEmit="(value)=>{setForm(value, 'variousGoods')}"/>
    </div>
    <form-textarea :value="form.message" @inputEmit="(value)=>{setForm(value, 'message')}"/>
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
import FormRadio from "~/components/ui/form-radio.vue";
import {useBooking} from "~/store/booking";
import FormTextarea from "~/components/ui/form-textarea.vue";
import FormSelect from "~/components/ui/form-select.vue";

const store = useBooking()
const options = ref([{name: 'Home'}, {name: 'Office'}, {name: 'Garage'},])
const form = ref({
  category: store.category,
  stuks: '',
  kg: '',
  variousGoods: '',
  message: ''
})
const setCategory = (name) => {
  store.showModal = true
  store.category = name
}
const setForm = (value, type) => {
  if(type === 'variousGoods'){
    form.value.stuks = ''
    form.value.kg = ''
  }
  form.value[type] = value
}
const submit = () => {
  if(store.category === 'Various goods'){
    const sendingForm = { variousGoods: form.value.variousGoods, message: form.value.message,  category: store.category,}
    sessionStorage.step1 = JSON.stringify(sendingForm)
  }else {
    const sendingForm = { stuks: form.value.stuks,kg: form.value.kg, message: form.value.message,  category: store.category,}
    sessionStorage.step1 = JSON.stringify(sendingForm)
  }
  store.step = 2
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})
if (sessionStorage.step1) {
  form.value = JSON.parse(sessionStorage.step1)
}
</script>
