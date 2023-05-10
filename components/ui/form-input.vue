<template>
    <div class="relative">
        <label class="block mb-2 text-sm text-gray-900 font-bold" v-if="$attrs.label">
            {{ $t(`forms.${$attrs.label}`) }}
        </label>
        <div class="relative flex items-center">
            <input
                    v-bind="$attrs"
                    :value="modelValue"
                    :disabled="disabled"
                    :required="required"
                    @keypress="$attrs.number ? onlyNumber($event) : ''"
                    class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    @input="$emit('update:modelValue', $event.target.value)"
            >

            <div class="absolute right-6 text-color-gray" v-if="$attrs.name">
                {{ $t(`forms.${$attrs.name}`) }}
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
const onlyNumber = ($event) => {
    let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 43 && keyCode !== 40 && keyCode !== 41) {
        $event.preventDefault();
    }
}
</script>
<style scoped>
input[type="datetime-local"] {
    position: relative;
}

input[type="datetime-local"]::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
}

input[type="datetime-local"]::-webkit-inner-spin-button,
input[type="datetime-local"]::-webkit-clear-button {
    z-index: 1;
}
</style>
