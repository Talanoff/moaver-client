<template>
    <div class="fixed top-0 w-screen h-screen">
        <div
                class="flex bg-gray-600  bg-opacity-50 items-center justify-center absolute inset-0"
                @click="bookingStore.toggleModal()"
        />

        <form
                class="z-[999] max-w-[800px] w-[90vw] m-auto absolute inset-x-0 top-1/2 -translate-y-1/2"
                @submit.prevent="submit"
        >
            <div class="relative sm:p-8 p-5 bg-white rounded-3xl z-20">
                <button
                        type="button"
                        class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-3 py-3 bg-blue-900 rounded-lg text-gray-100"
                        @click="bookingStore.toggleModal()"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor"
                         class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <div class="flex items-center space-x-5" v-if="bookingStore.currentStep > 1">
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

                    <h2 class="sm:text-3xl text-xl font-bold" v-if="bookingStore.currentStepName">
                        {{ bookingStore.currentStepName }}
                    </h2>
                </div>

                <client-form :steps="steps" class="mb-8 mt-5"/>

                <footer-component :steps="steps"/>
            </div>
        </form>
    </div>
</template>

<script setup>
import FooterComponent from "~/components/modals/booking/footer-component.vue";
import { useBooking } from "~/store/booking";
import { useConfig } from "~/store/config";

const bookingStore = useBooking();
const configStore = useConfig();

const wishes = ref(configStore.wishes)

const steps = ref([
    {
        id: 1,
        fields: [
            {
                fieldType: 'card',
                className: 'w-full sm:grid-cols-2 grid-cols-1',
                controlName: 'category'
            },
            {
                attrs: {
                    label: 'Pieces',
                    type: 'number',
                    placeholder: 'Pieces',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'pieces'
            },
            {
                attrs: {
                    required: false,
                    name: 'kg',
                    type: 'number',
                    placeholder: 'kg',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
            {
                value: 'home',
                attrs: {
                    required: false,
                    name: 'What exactly do you want to send',
                    options: ['home', 'office'],
                },
                hidden: true,
                fieldType: 'select',
                className: 'w-full'
            },
            {
                attrs: {
                    required: false,
                    name: 'Message',
                    type: 'text',
                    placeholder: 'Message',
                },
                fieldType: 'textarea',
                className: 'w-full'
            },
        ]
    },
    {
        id: 2,
        title: 'Ophaaldatum',
        fields: [
            {
                attrs: {
                    required: false,
                    name: 'Date From',
                    type: 'datetime-local',
                    placeholder: 'date'
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                attrs: {
                    required: false,
                    name: 'Location from',
                    type: 'text',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
            {
                value: 'home',
                attrs: {
                    required: false,
                    name: 'Location type from',
                    options: ['home', 'office'],
                },
                fieldType: 'select',
                className: 'sm:w-1/2 w-full'
            },
            {
                attrs: {
                    required: false,
                    name: 'Date To',
                    placeholder: 'date',
                    type: 'datetime-local',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                attrs: {
                    required: false,
                    name: 'Location to',
                    type: 'text',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
            {
                value: 'home',
                attrs: {
                    required: false,
                    name: 'Location type to',
                    options: ['home', 'office'],
                },
                fieldType: 'select',
                className: 'sm:w-1/2 w-full'
            },
        ]
    },
    {
        id: 3,
        title: 'Pick-up and delivery wishes/requirements',
        fields: [
            {
                id: 'wishes', // хз нужен ли
                attrs: {
                    required: false,
                    options: wishes.value.common ?? [],
                },
                controlName: 'wishes',
                fieldType: 'checkBoxGroup',
                className: 'w-full'
            },
        ]
    },
    {
        id: 4,
        title: 'Additional wishes',
        fields: [
            {
                id: 'additional_wishes',
                title: 'Additional wishes',
                attrs: {
                    required: false,
                    options: wishes.value.additional ?? [],
                },
                controlName: 'additional_wishes',
                fieldType: 'checkBoxGroup',
                className: 'w-full'
            },
            {
                id: 1,
                attrs: {
                    required: false,
                    name: 'additional wishes',
                    type: 'text',
                    placeholder: 'additional wishes',
                },
                controlName: 'additional_wishes_notes',
                fieldType: 'textarea',
                className: 'w-full m-2.5'
            },
            {
                id: 2,
                attrs: {
                    required: false,
                    name: 'Pick file',
                    url: ''
                },
                controlName: 'additional_wishes_attachment',
                fieldType: 'file',
                className: 'w-full'
            },
        ]
    },
    {
        id: 5,
        title: 'INFO',
        fields: [
            {
                fieldType: 'formInfo',
                className: 'w-full'
            },
        ],
    },
    {
        id: 6,
        title: 'Personal info',
        fields: [
            {
                id: 0,
                attrs: {
                    required: false,
                    name: 'Name',
                    type: 'text',
                    placeholder: 'your name',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 1,
                attrs: {
                    required: false,
                    name: 'Address',
                    type: 'text',
                    placeholder: 'your address',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 2,
                attrs: {
                    required: false,
                    name: 'Phone number',
                    type: 'text',
                    placeholder: 'Phone number',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 3,
                attrs: {
                    required: false,
                    name: 'E-mail address',
                    type: 'email',
                    placeholder: 'E-mail address',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 4,
                attrs: {
                    required: false,
                    name: 'IBAN',
                    type: 'number',
                    placeholder: 'IBAN',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 5,
                attrs: {
                    title: 'do you want to register?',
                    required: false,
                    options: [
                        { name: 'do you want to register' },
                    ],
                },
                fieldType: 'checkBoxGroup',
                className: 'w-full'
            },
            {
                id: 6,
                attrs: {
                    required: false,
                    name: 'password',
                    type: 'password',
                    placeholder: 'password',
                },
                hidden: true,
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 7,
                attrs: {
                    required: false,
                    name: 'repeat password',
                    type: 'repeat password',
                    placeholder: 'password',
                },
                hidden: true,
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 8,
                attrs: {
                    title: 'Agree to terms?',
                    required: false,
                    options: [
                        { name: 'Agree to terms', checked: false, required: true },
                    ],
                },
                fieldType: 'checkBoxGroup',
                className: 'w-full'
            },
        ],


    },
    {
        id: 7,
        title: 'INFO',
        fields: [
            {
                fieldType: 'formInfo',
                className: 'w-full'
            },
        ],

    },
]);

const submit = () => {
    if (steps.value.length !== bookingStore.currentStep) {
        if (bookingStore.currentStep === 6) {
            if (steps[5].fields[6].value === steps[5].fields[7].value && steps[5].fields[6].value !== '' || !steps[5].fields[6].show) {
                bookingStore.currentStep++
            } else {
                steps[5].fields[6].value = '';
                steps[5].fields[7].value = '';
                alert('Password mismatch')
            }
        } else {
            const name = steps.value.find(({ id }) => id === bookingStore.currentStep + 1)?.title ?? '';
            bookingStore.setCurrentStep(name, 'increment');
        }
    } else {
        console.log(steps)
    }

};

const back = () => {
    const name = steps.value.find(({ id }) => id === bookingStore.currentStep - 1)?.title ?? '';
    bookingStore.setCurrentStep(name, 'decrement');
}
</script>

<style scoped></style>
