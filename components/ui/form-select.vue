<template>
<div class="">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{props.title}}</label>
  <select id="countries" :value="value"  @change="inputChange($event)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option :value="option.name" v-for="option  in props.options">{{ option.name }}</option>
  </select>
</div>
</template>

<script setup>
const emit = defineEmits(['inputEmit'])
const inputChange = (event) => {
  emit('inputEmit', event.target.value)
}
const props = defineProps({
  title: String,
  options: Array,
  value: String,
})
</script>

<style scoped>

</style>