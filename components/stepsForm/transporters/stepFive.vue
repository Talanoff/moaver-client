<template>
  <form
      class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
      @submit.prevent="submit"
  >
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--">
      <img src="/icons/arrow-left.png" alt="">
    </button>

    <h2 class="text-2xl font-bold mb-8 mt-2">Summary of the assignment:</h2>

    <ul>
      <li>You category: {{ form[0].category }}</li>
      <li>You stuks: {{ form[0].stuks }}</li>
      <li>You weight: {{ form[0].kg }} kg</li>
      <li>You message: {{ form[0].message }}</li>
      <li>You location from: {{ form[1].locationFrom }}</li>
      <li>You location type from: {{ form[1].locationTypeFrom }}</li>
      <li>You date from: {{ form[1].dateFrom }}</li>
      <li>You location To: {{ form[1].locationTo }}</li>
      <li>You location type to: {{ form[1].locationTypeTo }}</li>
      <li>You date to: {{ form[1].dateTo }}</li>
      <li class="border-blue-600 border-2">Pick-up and delivery wishes/requirements:
        <div v-for="el in form[2]" :key="el">{{ el }}</div>
      </li>
      <li class="border-blue-600 border-2">Additional wishes:
        <div v-for="el in form[3].checked" :key="el">{{ el }}</div>
        <div>
          message
          {{ form[3].text }}
        </div>
      </li>
    </ul>

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
      <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { useBooking } from "~/store/booking";

const store = useBooking()
const form = ref([])
const submit = () => {
  store.step = 6
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})
onBeforeMount(() => {
  form.value.push(JSON.parse(localStorage.step1))
  form.value.push(JSON.parse(localStorage.step2))
  form.value.push(JSON.parse(localStorage.step3))
  form.value.push(JSON.parse(localStorage.step4))
})
</script>
