<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png"
                                                                                       alt=""></button>
    <h2 class="text-2xl font-bold mb-8 mt-2">Thank you for your assignment! We'll get to work for you right away.</h2>


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
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import {useBooking} from "~/store/booking";
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import FormTextarea from "~/components/ui/form-textarea.vue";
import FormFile from "~/components/ui/form-file.vue";
import FormInput from "~/components/ui/form-input.vue";

const store = useBooking()
const submit = () => {
  const form = [
    {step1: JSON.parse(sessionStorage.step1)},
    {step2: JSON.parse(sessionStorage.step2)},
    {step3: JSON.parse(sessionStorage.step3)},
    {step4: JSON.parse(sessionStorage.step4)},
    {step6: JSON.parse(sessionStorage.step6)}
  ]
  console.log(form)
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})
</script>
