<template>
    <footer class="flex justify-between items-center mt-8 px-2">
        <div class="sm:w-1/3 w-1/2">
            <h2>
                {{ $t('forms.step') }}
                {{ store.currentStep }}
                {{ $t('forms.of') }}
                {{ steps.length }}
            </h2>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div :style="{width}" class="bg-blue-600 h-2.5 rounded-full"></div>
            </div>
        </div>
        <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
                type="submit"
        >
            {{ steps.length !== store.currentStep ? 'Next' : 'Submit' }}
        </button>
    </footer>
</template>

<script setup>
import { useBooking } from "~/store/booking";

const store = useBooking();

const props = defineProps(['steps']);

defineEmits(['submit']);

const width = computed(() => {
    return ((store.currentStep / props.steps.length) * 100) + '%'
});
</script>

<style scoped>

</style>
