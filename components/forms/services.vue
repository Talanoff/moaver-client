<template>
    <div>
        <div v-for="(option,idx) in configStore.services" :key="option.id">
            <div class="flex justify-center flex-wrap sm:mb-2">
                <form-checkbox
                        :checked="option.checked"
                        class="sm:w-1/2 mb-4 sm:mb-0 w-full h-12"
                        :required="option.required"
                        :title="option.name"
                        @inputEmit="setCheckbox(idx)"
                />

                <form-input
                        :type="option.type"
                        v-model="option.value"
                        :required="option.checked"
                        :disabled="!option.checked"
                        class="flex items-center sm:pl-4 mb-4 text-gray-900 text-sm rounded-lg sm:mb-0 h-12 sm:w-auto w-full"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import FormInput from "~/components/ui/form-input.vue";
import { useTransporters } from "~/store/transporters";
import { useConfig } from "~/store/config";

const transportersStore = useTransporters();
const configStore = useConfig();
const props = defineProps(['id']);

const setCheckbox = (idx) => {
    const currentField = transportersStore.steps[transportersStore.currentStep - 1].fields[props.id].attr.options[idx];

    currentField.checked = !currentField.checked
}
</script>
<style scoped>

</style>
