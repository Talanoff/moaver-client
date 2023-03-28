<template>
  <div class="flex items-center pl-4 border border-gray-300 text-gray-900 text-sm rounded-lg ">
    <input :id="props.id" type="checkbox" v-model="checked" @input="inputChange()"
           name="bordered-checkbox"
           class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label :for="props.id"
           class="w-full  py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">{{
        props.title
      }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  title: String,
  checked: Boolean
})
const checked = ref(props.checked);
const emit = defineEmits(['inputEmit'])

const inputChange = () => {
  if (!checked.value) {
    emit('inputEmit', true)
  } else {
    emit('inputEmit', false)
  }
}
</script>

<style scoped>

</style>