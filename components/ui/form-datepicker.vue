<template>
    <div class="relative">
        <label class="block mb-2 text-sm text-slate-900 font-bold" v-if="$attrs.label">
            {{ $attrs.label }}
        </label>
        <VueDatePicker
                :month-change-on-scroll="false"
                :enable-time-picker="false"
                :close-on-auto-apply="true"
                auto-apply
                position="left"
                model-type="yyyy-MM-dd"
                v-bind="$attrs"
                v-model="date"
                :min-date="$attrs.min"
                :teleport="true"
        />
    </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();
</script>
