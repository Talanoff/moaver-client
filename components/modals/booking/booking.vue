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
import {useBooking} from "~/store/booking";
import {useConfig} from "~/store/config";
import {storeToRefs} from 'pinia'

const bookingStore = useBooking();
const configStore = useConfig();

const {form: form} = storeToRefs(bookingStore)
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
                hidden: false,
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
                    options: [
                        {key: 'home', value: 'home'},
                        {key: 'ofice', value: 'ofice'},
                        {key: 'test', value: 'test'},
                    ],
                },
                hidden: false,
                fieldType: 'select',
                controlName: 'selectCategory',
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
                attrs: {
                    label: 'Location type from',
                    options: [
                        {key: 'home', value: 'home'},
                        {key: 'ofice', value: 'ofice'},
                        {key: 'test', value: 'test'},
                    ],
                },
                fieldType: 'select',
                className: 'w-full',
                controlName: 'selectLocationFrom'
            },
            {
                attrs: {
                    label: 'Date To',
                    type: 'datetime-local',
                    placeholder: 'date'
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'dateTo'
            },
            {
                attrs: {
                    label: 'Location to',
                    type: 'text',
                    placeholder: 'Location to'
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'locationTo'
            },
            {
                attrs: {
                    label: 'Location type to',
                    options: [
                        {key: 'home', value: 'home'},
                        {key: 'ofice', value: 'ofice'},
                        {key: 'test', value: 'test'},
                    ],
                },
                fieldType: 'select',
                className: 'w-full',
                controlName: 'selectLocationTo'
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
                    label: 'additional wishes',
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
                    label: 'Pick file',
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
                controlName: 'info',
                className: 'w-full'
            },
        ],
    },
    {
        id: 6,
        title: 'Personal info',
        fields: [
            {
                attrs: {
                    label: 'Name',
                    type: 'text',
                    placeholder: 'Your name',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'name'
            },
            {
                attrs: {
                    label: 'Address',
                    type: 'text',
                    placeholder: 'Your address',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'address'
            },
            {
                attrs: {
                    label: 'Phone number',
                    type: 'number',
                    placeholder: 'Phone number',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'phone_number'
            },
            {
                attrs: {
                    label: 'E-mail address',
                    type: 'email',
                    placeholder: 'E-mail address',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'mail_address'
            },
            {
                attrs: {
                    label: 'IBAN',
                    type: 'number',
                    placeholder: 'IBAN',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'iban'
            },
            {
                id: 'wishes', // хз нужен ли
                attrs: {
                    required: false,
                    options: [{name: 'do you want to register', id: 1}],
                },
                controlName: 'register_checkbox',
                fieldType: 'checkBoxGroup',
                className: 'w-full'
            },
            {
                attrs: {
                    label: 'password',
                    type: 'password',
                    placeholder: 'password',
                },
                hidden: true,
                fieldType: 'input',
                className: 'w-full',
                controlName: 'password'
            },
            {
                attrs: {
                    label: 'repeat password',
                    type: 'repeat password',
                    placeholder: 'password',
                },
                hidden: true,
                fieldType: 'input',
                className: 'w-full',
                controlName: 'repeat_password'
            },
            {
                id: 'wishes', // хз нужен ли
                attrs: {
                    required: false,
                    options: [{name: 'Agree to terms', id: 2}],
                },
                controlName: 'agree_to_terms',
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
watch(() => form, (currentValue) => {
        steps.value[0].fields[3].hidden = currentValue.value.category[0] !== "Various goods"
        steps.value[0].fields[1].hidden = currentValue.value.category[0] === "Various goods"
        steps.value[0].fields[2].hidden = currentValue.value.category[0] === "Various goods"
        steps.value[5].fields[6].hidden = currentValue.value.register_checkbox[0][0] !== 1
        steps.value[5].fields[7].hidden = currentValue.value.register_checkbox[0][0] !== 1
    },
    {deep: true}
);
const submit = () => {
    if (steps.value.length !== bookingStore.currentStep) {
        if (bookingStore.currentStep === 6) {
            if (form.value.password[0] === form.value.repeat_password[0] && form.value.password[0] !== '') {
                bookingStore.currentStep++
            } else {
                form.value.password[0] = '';
                form.value.repeat_password[0] = '';
                alert('Password mismatch')
            }
        } else {
            const name = steps.value.find(({id}) => id === bookingStore.currentStep + 1)?.title ?? '';
            bookingStore.setCurrentStep(name, 'increment');
        }
    } else {
        console.log(steps)
    }
}

const back = () => {
    const name = steps.value.find(({id}) => id === bookingStore.currentStep - 1)?.title ?? '';
    bookingStore.setCurrentStep(name, 'decrement');
}
</script>

<style scoped></style>
