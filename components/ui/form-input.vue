<template>
  <div>
    <label class="block mb-2 text-sm  text-gray-900 dark:text-white font-bold">
      {{ $attrs.name }}
    </label>
    <input
        :value="modelValue"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>

</template>
<script setup>
defineProps([
  'modelValue',
])
</script>
