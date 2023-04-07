<template>
  <div class="">
    <label for="countries"
           class="block mb-2 text-sm font-medium text-gray-900">{{ $attrs.name }}</label>
    <select id="countries" required
            @input="test($event.target.value);$emit('update:modelValue', $event.target.value)"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      <option v-for="(option,idx)  in $attrs.options" :key="idx">{{ option }}</option>
    </select>
  </div>
</template>

<script setup>
const test = (event) => {
  console.log(event)
}

defineProps({
  modelValue: String,
})
</script>

<style scoped>

</style>