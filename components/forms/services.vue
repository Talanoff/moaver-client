<template>
    <div class="space-y-2.5">
        <div
            v-for="(option) in configStore.services"
            class="rounded-lg border border-slate-100 p-3.5"
            :key="option.key">
            <form-checkbox
                :id="`service-${option.key}`"
                :label="option.value"
                :value="option.key"
                :model-value="modelValue.includes(option.key)"
                @change="setCheckbox($event, option.key)"
            />
        </div>
    </div>
</template>

<script setup>
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import { useConfig } from "~/store/config";

const configStore = useConfig();

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
    id: String,
    modelValue: Array
});

const setCheckbox = (event, id) => {
    if (event.target) {
        let currentValue = [...props.modelValue];

        if (!event.target.checked) {
            currentValue = currentValue.filter(it => it !== id);
        } else {
            currentValue.push(id);
        }

        emits('update:modelValue', currentValue);
    }
}
</script>

