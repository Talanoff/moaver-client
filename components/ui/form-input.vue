<template>
  <div>
    <label for="formInput" class="block mb-2 text-sm  text-gray-900 dark:text-white font-bold">Unique visitors (per month)</label>
    <input :type="props.typeInput" @input="emit($event.target.value)"  id="formInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="props.placeholder" required></div>

</template>
<script setup>
import {useStoreIndex} from "~/store";
const store = useStoreIndex()
const props = defineProps({
  placeholder: String,
  typeInput: String
})
const emit = defineEmits(['value'])
</script>