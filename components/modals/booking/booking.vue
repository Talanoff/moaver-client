<template>
    <modal
            v-if="bookingStore.showModal"
            :title="bookingStore.currentStepName"
            :show-back-button="bookingStore.currentStep > 1"
            @back="back"
            @close="bookingStore.toggleModal(false)"
    >
        <form @submit.prevent="submit">
            <client-form :steps="steps"/>
            <footer-component
                    :total-steps="steps.length"
                    :current-step="bookingStore.currentStep"
            />
        </form>
    </modal>
</template>

<script setup>
import FooterComponent from "~/components/modals/booking/footer-component.vue";
import Modal from "~/components/modals/modal.vue";
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
                    label: 'Kg',
                    type: 'number',
                    placeholder: 'Kg',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'kg'
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
            // TODO: -add logic for select
            {
                attrs: {
                    label: 'Message',
                    type: 'text',
                    placeholder: 'Message',
                },
                fieldType: 'textarea',
                className: 'w-full',
                controlName: 'message',
            },
        ]
    },
    {
        id: 2,
        title: 'Ophaaldatum',
        fields: [
            {
                attrs: {
                    label: 'Date From',
                    type: 'datetime-local',
                    placeholder: 'date'
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'dateFrom'
            },
            {
                attrs: {
                    label: 'Location from',
                    type: 'text',
                    placeholder: 'Location from'
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'locationFrom'
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
}

const back = () => {
    const name = steps.value.find(({ id }) => id === bookingStore.currentStep - 1)?.title ?? '';
    bookingStore.setCurrentStep(name, 'decrement');
}
</script>

<style scoped></style>
