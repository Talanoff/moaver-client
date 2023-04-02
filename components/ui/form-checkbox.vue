<template>
  <div class="flex items-center pl-4 border border-gray-300 text-gray-900 text-sm rounded-lg ">
    <input :id="props.title" type="checkbox" @input="$emit('inputEmit')"
           :checked="props.checked"
           class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label :for="props.title"
           class="w-full  py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">{{
        props.title
      }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  checked: Boolean
})
defineEmits(['inputEmit'])
</script>

<style scoped>

</style>