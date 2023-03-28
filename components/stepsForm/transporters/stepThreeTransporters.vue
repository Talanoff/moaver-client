<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png"
                                                                                       alt=""></button>
    <h2 class="text-2xl font-bold mb-8 mt-2">Pick-up and delivery wishes/requirements</h2>


    <h2 class="text-xl text-center mb-4">Possibility to check the following options
    </h2>
    <div class="grid gap-2 grid-cols-2 h-1/2 h-[500px] overflow-y-scroll">
      <div v-for="(option, idx) in options" :key="option.name">
        <form-checkbox :checked="option.checked" :id="idx" :title="option.name"
                       @inputEmit="(value)=>{setForm(value,'checked', option.name)}"/>
        <form-input :disabled="!option.checked" :type-input="'number'" :value="option.quantity"
                    :placeholder="'quantity cars'"
                    @inputEmit="(value)=>{setForm(value,'quantity',option.name)}"/>
      </div>
    </div>

    <button
        class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-4 py-3 bg-blue-900 rounded-lg text-gray-100"
        @click="store.showModal = false">X
    </button>
    <div class="flex justify-between items-center mt-8">
      <div class="w-1/4">
        <h2>Stap {{ store.step }} van {{ store.stepsProgress }}</h2>
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
import {useBooking} from "~/store/booking";
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import FormInput from "~/components/ui/form-input.vue";

const store = useBooking()
const options = ref([
  {name: 'Van (fossil fuel)', checked: false, quantity: 0},
  {name: 'Van (electric)', checked: false, quantity: 0},
  {name: 'Large bus (fossil fuel)', checked: false, quantity: 0},
  {name: 'Large bus (electric)', checked: false, quantity: 0},
  {name: 'Truck box truck (fossil fuel)', checked: false, quantity: 0},
  {name: 'Truck box truck (electric)', checked: false, quantity: 0},
  {name: 'Tractor + trailer', checked: false, quantity: 0},
  {name: 'Truck with crane', checked: false, quantity: 0},
  {name: 'Truck with cage monkey', checked: false, quantity: 0},
  {name: 'Concrete pumptrailer', checked: false, quantity: 0},
  {name: 'Sailtrailer of tautliner', checked: false, quantity: 0},
  {name: 'Refrigerated trailers', checked: false, quantity: 0},
  {name: 'Tip trailers', checked: false, quantity: 0},
  {name: 'Walking floor trailers', checked: false, quantity: 0},
  {name: 'Deeploaders', checked: false, quantity: 0},
  {name: 'Open trailers', checked: false, quantity: 0},
  {name: 'Silo trailers', checked: false, quantity: 0},
  {name: 'Closed trailers with hard box', checked: false, quantity: 0},
  {name: 'Tanktrailers', checked: false, quantity: 0},
  {name: 'Taxibus', checked: false, quantity: 0},
  {name: 'Coach ', checked: false, quantity: 0},
])
const form = ref([])
const setForm = (value, type, name) => {
  if (type === 'checked') {
    options.value.forEach((el) => {
      if (el.name === name) {
        el.checked = value
        if(!value){
          el.quantity = 0
        }
      }
    })
  } else {
    options.value.forEach((el) => {
      if (el.name === name && el.checked) {
        el.quantity = value
      }
    })
  }
};
const submit = () => {
  sessionStorage.step3 = JSON.stringify(form.value)
  store.step = 4
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})
if (sessionStorage.step3) {
  form.value = JSON.parse(sessionStorage.step3)

}
</script>
