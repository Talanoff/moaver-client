<template>
    <div v-for="(option) in configStore.services" :key="option.id">
        <div class="pl-4 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2">
            <form-checkbox
                    :id="`service-${option.id}`"
                    :label="option.name"
                    :value="option.id"
                    :checked="modelValue.includes(option.id)"
                    @change="setCheckbox($event, option.id)"
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
<style scoped>

</style>
