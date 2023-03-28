<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png"
                                                                                       alt=""></button>
    <h2 class="text-2xl font-bold mb-8 mt-2">What modes of transport do you provide</h2>


        <div class="grid gap-2 grid-cols-2 h-1/2 h-[500px] overflow-y-scroll">
          <form-checkbox v-for="(option, idx) in options" :checked="option.checked" :key="option.name" :id="idx" :title="option.name"
                         @inputEmit="(value)=>{setForm(value, option.name)}"/>
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

const store = useBooking()
const options = ref([
  {name: 'Waste materials transport', checked: false},
  {name: 'Agricultural transport', checked: false},
  {name: 'Car transport', checked: false},
  {name: 'Construction materials transport', checked: false},
  {name: 'Distribution transport', checked: false},
  {name: 'Exceptional transport', checked: false},
  {name: 'Conditioned transport', checked: false},
  {name: 'Intermodal freight transport', checked: false},
  {name: 'Tip-truck', checked: false},
  {name: 'Courier transport', checked: false},
  {name: 'Foodstuffs transport', checked: false},
  {name: 'Passenger transport', checked: false},
  {name: 'Floriculture transport', checked: false},
  {name: 'Rail transport', checked: false},
  {name: 'Tank and silo transport', checked: false},
  {name: 'Movers', checked: false},
  {name: 'Stores Distribution', checked: false},
  {name: 'Sea container transport', checked: false},
])
const setForm = (value, name) => {
  options.value.forEach((el) => {
    if (el.name === name) {
      el.checked = value
    }
  })
}
const submit = () => {
  sessionStorage.transportersStep2 = JSON.stringify(options.value)
  store.step = 3
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})

if (sessionStorage.transportersStep2) {
  options.value = JSON.parse(sessionStorage.transportersStep2)
}
</script>
