<template>
    <label for="formTextarea" class="block mb-2 text-sm font-bold text-gray-900">{{$t(`forms.${$attrs.label}`)}}</label>
    <textarea id="formTextarea"
              v-bind="$attrs"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)" rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              :placeholder="$t('forms.' + $attrs.placeholder)">

  </textarea>
</template>
<script setup>
defineProps([
    'modelValue'
])
</script>
