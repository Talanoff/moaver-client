<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png"
                                                                                       alt=""></button>
    <h2 class="text-2xl font-bold mb-8 mt-2">What modes of transport do you provide</h2>

    <div>
      <div>
        <div class="grid gap-2 grid-cols-2 h-1/2 h-[500px] overflow-y-scroll">
          <form-checkbox :form="form" v-for="(option, idx) in options" :key="option" :id="idx" :title="option"
                         @inputEmit="(value)=>{inputt(value)}" />

        </div>
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
import FormInput from "~/components/ui/form-input.vue";
import FormRadio from "~/components/ui/form-radio.vue";
import {useStoreIndex} from "~/store";
import FormTextarea from "~/components/ui/form-textarea.vue";
import FormSelect from "~/components/ui/form-select.vue";
import FormCheckbox from "~/components/ui/form-checkbox.vue";

const store = useStoreIndex()
const options = ref([
    'Waste materials transport',
    'Agricultural transport',
    'Car transport',
    'Construction materials transport',
    'Distribution transport',
    'Exceptional transport',
    'Conditioned transport',
    'Intermodal freight transport',
    'International transport',
    'Tip-truck',
    'Courier transport',
    'Foodstuffs transport',
    'Passenger transport',
    'Floriculture transport',
    'Rail transport',
    'Tank and silo transport',
    'Movers',
    'Stores Distribution',
    'Sea container transport'
])
const form = ref([])
const inputt = (value) => {
  if (form.value.length === 0) {
    form.value.push(value)
  } else {
    const index = form.value.indexOf(value);
    if (index === -1) {
      form.value.push(value);
    } else {
      form.value.splice(index, 1);

    }
  }
}
const submit = () => {
  localStorage.transportersStep2 = JSON.stringify(form.value)
  store.step = 3
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})
onBeforeMount(()=>{
  if (localStorage.transportersStep2) {
    form.value =  JSON.parse(localStorage.transportersStep2)

  }
})
</script>
