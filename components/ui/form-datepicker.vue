<template>
    <div class="relative">
        <label class="block mb-2 text-sm text-gray-900 font-bold" v-if="$attrs.label">
            {{ $t(`forms.${$attrs.label}`) }}
        </label>
        <VueDatePicker
                :month-change-on-scroll="false"
                position="left"
                :model-value="date"
                v-bind="$attrs"
                @update:model-value="setDate"
                :min-date="$attrs.min"
        />
    </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();
const setDate = (value) => date.value = value;

defineProps([
    'modelValue',
    'disabled',
    'required',
]);
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
