<template>
    <modal
            v-if="showModal"
            :title="currentStepName"
            :show-title="steps.length !== currentStep"
            :show-back-button="currentStep > 1"
            @close="bookingStore.toggleModal(false)"
            @back="back"
    >
        <form @submit.prevent="submit">
            <booking-form :steps="steps"/>
            <modal-footer
                    :total-steps="steps.length"
                    :current-step="currentStep"
            />
        </form>
    </modal>
</template>

<script setup>
import ModalFooter from "~/components/modals/booking/footer.vue";
import BookingForm from './form.vue'
import Modal from "~/components/modals/modal.vue";
import { useBooking } from "~/store/booking";
import { useConfig } from "~/store/config";
import { storeToRefs } from "pinia";

const bookingStore = useBooking();
const configStore = useConfig();

const { form, showModal, currentStepName, currentStep } = storeToRefs(bookingStore);
const wishes = ref(configStore.wishes);

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
                controlName: 'weight'
            },
            {
                attrs: {
                    required: false,
                    name: 'What exactly do you want to send',
                    options: [
                        { key: 'home', value: 'home' },
                        { key: 'ofice', value: 'ofice' },
                        { key: 'test', value: 'test' },
                    ],
                },
                hidden: false,
                fieldType: 'select',
                controlName: 'goods',
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
                    min: new Date(),
                    placeholder: 'date'
                },
                fieldType: 'dateTime',
                className: 'w-full ',
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
                        { key: 'home', value: 'home' },
                        { key: 'ofice', value: 'ofice' },
                        { key: 'test', value: 'test' },
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
                    min: form.value.dateTo[0],
                    placeholder: 'date'
                },
                fieldType: 'dateTime',
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
                        { key: 'home', value: 'home' },
                        { key: 'ofice', value: 'ofice' },
                        { key: 'test', value: 'test' },
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
                    wishes: true,
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
                id: 'additionalWishes',
                title: 'Additional wishes',
                attrs: {
                    required: false,
                    options: wishes.value.additional ?? [],
                },
                controlName: 'additionalWishes',
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
                controlName: 'additionalWishesNotes',
                fieldType: 'textarea',
                className: 'w-full m-2.5'
            },
            {
                id: 2,
                attrs: {
                    label: 'Pick file',
                    url: ''
                },
                controlName: 'additionalWishesAttachment',
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
                    maxlength: '16',
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
                controlName: 'personalPhone'
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
                controlName: 'personalEmail'
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
                    options: [{ name: 'do you want to register', id: 1 }],
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
                controlName: 'confirmPassword'
            },
            {
                attrs: {
                    required: false,
                    options: [{ name: 'Agree to terms', id: 2 }],
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
const api = useApi();

watch(() => form.value.category[0], () => {
        steps.value[0].fields[3].hidden = form.value.category[0] !== "various"

        if (form.value.category[0] === "one") {
            steps.value[0].fields[1].attrs.placeholder = 1
            steps.value[0].fields[1].attrs.disabled = true
            steps.value[0].fields[1].attrs.name = 'Piece'
            steps.value[0].fields[1].attrs.label = 'Piece'
        } else if (form.value.category[0] === "pallets") {
            steps.value[0].fields[1].attrs.name = 'Pallets'
            steps.value[0].fields[1].attrs.label = 'Pallets'
        } else {
            steps.value[0].fields[1].attrs.name = 'Pieces'
            steps.value[0].fields[1].attrs.label = 'Pieces'
            steps.value[0].fields[1].attrs.placeholder = ''
            steps.value[0].fields[1].attrs.disabled = false
        }

        if (form.value.category[0] === "various") {
            // steps.value[0].fields[2].hidden = true
            form.value.pieces[0] = 1
            form.value.pieces[1] = []
            form.value.weight[0] = null
            form.value.weight[1] = []
            form.value.goods[1] = ['required']
        } else {
            steps.value[0].fields[2].hidden = false
            form.value.pieces[1] = ["required"]
            form.value.weight[1] = ["required"]
            form.value.goods[1] = []
            form.value.goods[0] = null
        }
    },
);

watch(() => form.value.registerCheckbox[0][0], () => {
        if (form.value.registerCheckbox[0][0] !== 1) {
            steps.value[5].fields[6].hidden = true
            steps.value[5].fields[7].hidden = true
            form.value.password[0] = null
            form.value.password[1] = []
            form.value.confirmPassword[0] = null
            form.value.confirmPassword[1] = []
        } else {
            steps.value[5].fields[6].hidden = false
            steps.value[5].fields[7].hidden = false
            form.value.password[1] = ["required"]
            form.value.confirmPassword[1] = ["required"]
        }
    },
);

watch(() => form.value.dateFrom[0], () => steps.value[1].fields[3].attrs.min = form.value.dateFrom[0]);

const submit = () => {
    if (steps.value.length - 1 !== bookingStore.currentStep) {
        const name = steps.value.find(({ id }) => id === bookingStore.currentStep + 1)?.title ?? '';
        bookingStore.setCurrentStep(name, 'increment');
    } else {
        const { confirmPassword, ...formData } = Object.keys(bookingStore.form).reduce((acc, it) => ({
            ...acc,
            [it]: bookingStore.form[it][0] ?? null
        }), {});

        formData.password_confirmation = confirmPassword;

        api.post('questionnaire/vendor', formData).then(() => {
            // TODO notify about success. clear form.
        }).catch((reason) => {
            // TODO notify about error. show validation errors.
        }).finally(() => {
        });
    }
}

const back = () => {
    const name = steps.value.find(({ id }) => id === bookingStore.currentStep - 1)?.title ?? '';
    bookingStore.setCurrentStep(name, 'decrement');
}
</script>
