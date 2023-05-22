<template>
    <div class="space-y-2.5">
        <div
            class="rounded-lg border border-slate-100 p-3.5"
            v-for="option in $attrs.options"
            :key="option.key"
        >
            <form-checkbox
                :id="`id-${option.key}`"
                :label="option.value"
                :value="option.key"
                :wishes="$attrs.wishes"
                :checked="modelValue.includes(option.key)"
                @change="setCheckbox($event, option.key)"
            />
        </div>
    </div>
</template>
<script setup>
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import {useBooking} from "~/store/booking";

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
