<template>
    <div>
        <form-checkbox
                v-for="option in $attrs.options" :key="option.id"
                :id="`id-${option.id}`"
                :title="option.name"
                :value="option.id"
                :checked="modelValue.includes(option.id)"
                @change="setCheckbox($event, option.id)"
        />
    </div>
</template>
<script setup>
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import { useBooking } from "~/store/booking";

const props = defineProps({
    id: String,
    modelValue: Array
});

const emits = defineEmits(['update:modelValue']);

const store = useBooking();

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
