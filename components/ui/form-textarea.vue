<template>
  <label for="formTextarea" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your message</label>
  <textarea id="formTextarea" :value="props.value" @input="inputChange($event)" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."></textarea>
</template>
<script setup>
const emit = defineEmits(['inputEmit'])
const props = defineProps({
  value: String
})
const inputChange = (event) => {
  emit('inputEmit', event.target.value)
}
</script>