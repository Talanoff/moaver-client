<template>
    <footer class="flex justify-between items-center mt-8 px-2" v-if="totalSteps  !== currentStep">
        <div class="sm:w-1/3 w-1/2">
            <h2>
                {{ $t('forms.step') }}
                {{ currentStep }}
                {{ $t('forms.of') }}
                {{ totalSteps - 1 }}
            </h2>
            <div class="w-full bg-slate-200 rounded-full h-2.5">
                <div :style="{width}" class="bg-blue-600 h-2.5 rounded-full"/>
            </div>
        </div>
        <x-button :disabled="!transporterStore.nextStepAvailable" theme="primary">
            <loader class="w-5 h-5 mr-2.5" v-if="transporterStore.submitting"/>
            {{ totalSteps - 1 !== currentStep ? $t('forms.next') : $t('forms.submit') }}
        </x-button>
    </footer>
</template>

<script setup>
import {useTransporters} from "~/store/transporters";
import XButton from "~/components/ui/x-button.vue";
import Loader from "~/components/loaders/loader.vue";

const props = defineProps(['totalSteps', 'currentStep']);
const transporterStore = useTransporters();

const width = computed(() => ((props.currentStep / (props.totalSteps - 1)) * 100) + '%');
</script>
