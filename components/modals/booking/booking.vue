<template>
    <div class="fixed top-0 w-screen h-screen">
        <div
            class="flex bg-gray-600  bg-opacity-50 items-center justify-center absolute inset-0"
            @click="store.toggleModal()"
        />

        <form class="z-[999] max-w-[800px] w-[90vw] m-auto absolute inset-x-0 top-1/2 -translate-y-1/2" @submit.prevent="submit">
            <div class="relative sm:p-8 p-5 bg-white rounded-3xl z-20">
                <button
                    type="button"
                    class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-3 py-3 bg-blue-900 rounded-lg text-gray-100"
                    @click="store.toggleModal()"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor"
                         class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <div class="flex items-center space-x-5" v-if="store.currentStep > 1">
                    <div>
                        <button
                            type="button"
                            class="border-blue-600 rounded-md border-2 p-2 cursor-pointer"
                            @click="back()"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                            </svg>
                        </button>
                    </div>

                    <h2 class="sm:text-3xl text-xl font-bold" v-if="store.stepName">
                        {{ store.stepName }}
                    </h2>
                </div>

                <client-form class="mb-8 mt-5"/>

                <footer-component>
                    {{ store.steps.length !== store.currentStep ? 'Next' : 'Submit' }}
                </footer-component>
            </div>
        </form>
    </div>
</template>

<script setup>
import {useBooking} from "~/store/booking";
import FooterComponent from "~/components/modals/booking/footer-component.vue";

const store = useBooking();
const submit = () => {
    if (store.steps.length !== store.currentStep) {
        if (store.currentStep === 6) {
            if (store.steps[5].fields[6].value === store.steps[5].fields[7].value && store.steps[5].fields[6].value !== '' || !store.steps[5].fields[6].show) {
                store.currentStep++
            } else {
                store.steps[5].fields[6].value = '';
                store.steps[5].fields[7].value = '';
                alert('Password mismatch')
            }
        } else {
            store.currentStep++
        }
    } else {
        console.log(store.steps)
    }

};
const back = () => {
    store.currentStep = store.currentStep - 1
    console.log(store.currentStep)
}
</script>

<style scoped></style>
