<template>
    <div>
        <label class="block mb-2 text-sm  text-gray-900  font-bold" v-if="$attrs.label">
            {{ $t(`forms.${$attrs.label}`) }}
        </label>
        <div class="relative flex items-center">
            <input
                    :value="modelValue"
                    :disabled="disabled"
                    :required="required"
                    :type="$attrs.type"
                    :placeholder="$attrs.placeholder ? $t('forms.' + $attrs.placeholder): ''"
                    class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    @input="$emit('update:modelValue', $event.target.value)"
            >

            <div class="absolute right-6 text-color-gray">
                {{ $attrs.name }}
            </div>
        </div>
    </div>

</template>
<script setup>
defineProps([
    'modelValue',
    'disabled',
    'required',
]);
</script>
