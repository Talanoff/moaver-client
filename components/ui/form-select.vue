<template>
  <div class="">
    <label :for="index"
           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $attrs.name }}</label>
    <select :id="index" required v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option v-for="(option,idx)  in $attrs.options" :key="idx">{{ option }}</option>
    </select>
  </div>
</template>

<script setup>


defineProps([
  'modelValue',
  'index'
])
</script>

<style scoped>

</style>