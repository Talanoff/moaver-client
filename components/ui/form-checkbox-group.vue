<template>
    <div v-for="(option,idx) in $attrs.options" :key="option.name">
        <div>
            <form-checkbox
                    v-if="!option.type"
                    :required="option.required"
                    :checked="option.checked"
                    :title="option.name"
                    @inputEmit="setCheckbox(idx)"
            />
        </div>
    </div>
</template>
<script setup>
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import { useBooking } from "~/store/booking";

const props = defineProps(['id']);
const store = useBooking();

const setCheckbox = (idx) => {
    store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked = !store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked;

    if (store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].name === 'do you want to register') {
        store.steps[store.currentStep - 1].fields[6].show = store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked
        store.steps[store.currentStep - 1].fields[7].show = store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked
    }
}
</script>
