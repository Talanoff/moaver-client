<template>
  <button
      type="button"
      class="block group text-center"
  >
    <div
        :class="{'borderActive': store.category === props.card.name}" class="flex justify-center items-center p-5 lg:p-8 border-2 border-slate-200 rounded-md group-hover:border-blue-600 group-hover:bg-slate-50 transition-colors duration-300">
      <svg class="h-16">
        <use :xlink:href="`/icons/categories.svg#${props.card.icon}`"/>
      </svg>
    </div>

    <div class="mt-1.5 group-hover:text-slate-700">
      {{ props.card.name }}
    </div>
  </button>
</template>

<script setup>
import {useBooking} from "~/store/booking";
const store = useBooking()
const props = defineProps({
  card: Object
})
</script>
<style>
.borderActive{
  border-color: rgb(37 99 235);
}
</style>
