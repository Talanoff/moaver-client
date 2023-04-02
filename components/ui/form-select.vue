<template>
  <div class="">
    <label for="countries"
           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $attrs.name }}</label>
    <select id="countries" required v-bind="$attrs"
            @input="test($event.target.value);$emit('update:modelValue', $event.target.value)"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option v-for="(option,idx)  in $attrs.options" :key="idx">{{ option }}</option>
    </select>
  </div>
</template>

<script setup>
const test = (event) => {
  console.log(event)
}

defineProps([
  'modelValue',
])
</script>

<style scoped>

</style>