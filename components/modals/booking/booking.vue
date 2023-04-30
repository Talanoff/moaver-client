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
                    type: 'text',
                    number: true,
                    maxlength: '4',
                    name: 'Pieces',
                    placeholder: '1',
                    disabled: false,
                },
                hidden: false,
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'pieces'
            },
            {
                attrs: {
                    label: 'Kg',
                    type: 'text',
                    number: true,
                    maxlength: '5',
                    name: 'Kg',
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
                    maxlength: '400',
                },
                fieldType: 'textarea',
                className: 'w-full',
                controlName: 'message',
            },
        ]
    },
    {
        id: 2,
        title: 'Collection date',
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
                    maxlength: 50,
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
                    maxlength: 50,
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
                    maxlength: 400,
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
                    placeholder: 'Name',
                    maxlength: 16,
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'name'
            },
            {
                attrs: {
                    label: 'Address',
                    type: 'text',
                    maxlength: 100,
                    placeholder: 'Address',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'address'
            },
            {
                attrs: {
                    label: 'Phone number',
                    type: 'text',
                    number: true,
                    maxlength: '15',
                    placeholder: 'Phone number',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'phone_number'
            },
            {
                attrs: {
                    label: 'E-mail address',
                    maxlength: '50',
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
                    type: 'text',
                    maxlength: '34',
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
                controlName: 'registerCheckbox',
                fieldType: 'checkBoxGroup',
                className: 'w-full'
            },
            {
                attrs: {
                    label: 'password',
                    type: 'password',
                    maxlength: '50',
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
                    maxlength: '50',
                    placeholder: 'password',
                },
                hidden: true,
                fieldType: 'input',
                className: 'w-full',
                controlName: 'repeatPassword'
            },
            {
                id: 'wishes', // хз нужен ли
                attrs: {
                    required: false,
                    options: [{name: 'Agree to terms', id: 2}],
                },
                controlName: 'agreeToTerms',
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
        if (currentValue.value.category[0] === "One package") {
            steps.value[0].fields[1].attrs.placeholder = 1
            steps.value[0].fields[1].attrs.disabled = true
        } else {
            steps.value[0].fields[1].attrs.placeholder = ''
            steps.value[0].fields[1].attrs.disabled = false
        }
        if (currentValue.value.category[0] === "Various goods") {
            steps.value[0].fields[2].hidden = true
            form.value.pieces[0] = 1
            form.value.pieces[1] = []
            form.value.kg[0] = null
            form.value.kg[1] = []
            form.value.selectCategory[1] = ['required']
        } else {
            steps.value[0].fields[2].hidden = false
            form.value.pieces[1] = ["required"]
            form.value.kg[1] = ["required"]
            form.value.selectCategory[1] = []
            form.value.selectCategory[0] = null
        }
        if (currentValue.value.registerCheckbox[0][0] !== 1) {
            steps.value[5].fields[6].hidden = true
            steps.value[5].fields[7].hidden = true
            form.value.password[0] = null
            form.value.password[1] = []
            form.value.repeatPassword[0] = null
            form.value.repeatPassword[1] = []
        } else {
            steps.value[5].fields[6].hidden = false
            steps.value[5].fields[7].hidden = false
            form.value.password[1] = ["required"]
            form.value.repeatPassword[1] = ["required"]
        }
    },
    {deep: true}
);
const submit = () => {
    if (steps.value.length !== bookingStore.currentStep) {
        if (bookingStore.currentStep === 6) {
            if (form.value.password[0] === form.value.repeatPassword[0] && form.value.password[0] !== '') {
                bookingStore.currentStep++
            } else {
                form.value.password[0] = '';
                form.value.repeatPassword[0] = '';
                alert('Password mismatch')
            }
        } else {
            const name = steps.value.find(({id}) => id === bookingStore.currentStep + 1)?.title ?? '';
            bookingStore.setCurrentStep(name, 'increment');
        }
    }
}

const back = () => {
    const name = steps.value.find(({id}) => id === bookingStore.currentStep - 1)?.title ?? '';
    bookingStore.setCurrentStep(name, 'decrement');
}
</script>

<style scoped></style>
