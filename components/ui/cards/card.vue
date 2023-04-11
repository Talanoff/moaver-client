<template>
  <button
      type="button"
      class="block group text-center"
      v-for="category of store.categories"
      :key="category.icon"
      @click="setCategory(category.name)"
  >
    <div
        :class="{'border-[#2563EB]': store.category === category.name}"
        class="flex justify-center items-center p-5 lg:p-8 border-4 border-slate-200 rounded-md group-hover:border-blue-600 group-hover:bg-slate-50 transition-colors duration-300"
    >
      <svg class="h-16">
        <use :xlink:href="`/icons/categories.svg#${category.icon}`"/>
      </svg>
    </div>

    <div class="mt-1.5 w-full h-[50px] group-hover:text-slate-700 text-md">
      {{ category.name }}
    </div>
  </button>
</template>

<script setup>
import {useBooking} from "~/store/booking";

const store = useBooking()
const setCategory = (name) => {
  store.booking = true
  if (!store.transporters) {
    const isVarious = name === 'Various goods'
    store.category = name
    store.steps[0].fields[3].show = isVarious
    store.steps[0].fields[2].show = !isVarious
    store.steps[0].fields[1].show = !isVarious
    store.steps[0].fields.forEach((el) => {
      if (!el.show) {
        el.value = ''
      }
    })
  }
  store.currentStep = 1
}
</script>
