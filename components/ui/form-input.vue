<template>
  <div>
    <label class="block mb-2 text-sm  text-gray-900 dark:text-white font-bold">{{
        props.title
      }}</label>
    <input :disabled="disabled" :type="props.typeInput" @input="inputChange($event)" v-model="value"
           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           :placeholder="props.placeholder" required>
  </div>

</template>
<script setup>
import {useBooking} from "~/store/booking";

const store = useBooking()
const props = defineProps({
  placeholder: String,
  typeInput: String,
  disabled: Boolean,
  title: String,
  value: [Number, String],
})
const value = ref(props.value || '')
const emit = defineEmits(['inputEmit'])
watch(() => props.disabled, (newValue) => {
  if (newValue) {
    value.value = 0
  }
})
const inputChange = (event) => {
  emit('inputEmit', event.target.value)
}
</script>
