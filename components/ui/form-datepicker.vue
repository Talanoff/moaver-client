<template>
    <div class="relative">
        <label class="block mb-2 text-sm text-slate-900 font-bold" v-if="$attrs.label">
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
