<template>
  <div>
    <img :src="$attrs.url ? $attrs.url :''" class="max-w-[100px] max-h-[100px]" alt="">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload photo</label>
    <input @change="setFile($event)"
           class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
           aria-describedby="file_input_help" id="file_input" type="file">
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX.
      800x400px).</p>
  </div>
</template>

<script setup>
import {useBooking} from "~/store/booking";

const props = defineProps(['id']);
const store = useBooking()
const setFile = (event) => {
  if (event) {
    console.log(store.steps[store.currentStep - 1].fields[props.id].value)
    store.steps[store.currentStep - 1].fields[props.id].value = event.target.files[0]
    store.steps[store.currentStep - 1].fields[props.id].attr.url = URL.createObjectURL(event.target.files[0])
  }
}
setFile()

</script>

<style scoped>

</style>