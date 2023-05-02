<template>
    <footer class="flex justify-between items-center mt-8 px-2">
        <div class="sm:w-1/3 w-1/2">
            <h2>
                {{ $t('forms.step') }}
                {{ currentStep }}
                {{ $t('forms.of') }}
                {{ totalSteps }}
            </h2>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div :style="{width}" class="bg-blue-600 h-2.5 rounded-full"></div>
            </div>
        </div>
        <x-button :disabled="! bookingStore.nextStepAvailable" theme="primary">
            {{ totalSteps - 1 !== currentStep ? $t('forms.next') : $t('forms.submit') }}
        </x-button>
    </footer>
</template>

<script setup>
import XButton from "~/components/ui/x-button.vue";
import {useBooking} from "~/store/booking";

const props = defineProps(['totalSteps', 'currentStep']);
const bookingStore = useBooking()
const width = computed(() => {
    return ((props.currentStep / props.totalSteps) * 100) + '%'
});
</script>
