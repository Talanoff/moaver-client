<template>
    <modal
        v-if="storeTransporters.showModal"
        :title="storeTransporters.currentStepName"
        :show-back-button="storeTransporters.currentStep > 1"
        @back="back"
        @close="storeTransporters.toggleModal(false)"
    >
        <form @submit.prevent="submit">
        <transporters-form :steps="steps"/>
        <footer-component
            :total-steps="steps.length"
            :current-step="storeTransporters.currentStep"
        />
        </form>
    </modal>
</template>

<script setup>
import FooterComponent from "~/components/modals/transporters/footer-component.vue";
import TransportersForm from "~/components/transportersForm.vue";
import { useTransporters } from "~/store/transporters";
import Modal from "~/components/modals/modal.vue";

const storeTransporters = useTransporters();

const steps = ref([
    {
        id: 1,
        title: 'Company info',
        fields: [
            {
                value: '',
                attr: {
                    required: false,
                    name: 'Name transport company',
                    type: 'text',
                    placeholder: 'Name transport company',
                },
                show: true,
                fieldType: 'input',
                className: 'w-full'
            },
            {
                value: '',
                attr: {
                    required: false,
                    name: 'house number',
                    type: 'number',
                    placeholder: 'house number',
                },
                show: true,
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
            {
                value: '',
                attr: {
                    required: false,
                    name: 'postcode',
                    type: 'number',
                    placeholder: 'postcode',
                },
                show: true,
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
            {
                value: '',
                attr: {
                    required: false,
                    name: 'country',
                    type: 'text',
                    placeholder: 'country',
                },
                show: true,
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
            {
                value: '',
                attr: {
                    required: false,
                    name: 'street',
                    type: 'text',
                    placeholder: 'street',
                },
                show: true,
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
            {
                value: '',
                attr: {
                    required: false,
                    name: 'Telephone number',
                    type: 'number',
                    placeholder: 'Telephone number',
                },
                show: true,
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
            {
                value: '',
                attr: {
                    required: false,
                    name: 'E-mail address',
                    type: 'email',
                    placeholder: 'E-mail address',
                },
                show: true,
                fieldType: 'input',
                className: 'sm:w-1/2 w-full'
            },
        ]
    },
    {
        id: 2,
        title: 'What types of transports do they provide ',
        fields: [
            {
                id: 0,
                value: '',
                attr: {
                    required: false,
                    options: [
                        { name: 'Waste materials transport', checked: false },
                        { name: 'Agricultural transport', checked: false },
                        { name: 'Car transport', checked: false },
                        { name: 'Construction materials transport', checked: false },
                        { name: 'Distribution transport', checked: false },
                        { name: 'Exceptional transport', checked: false },
                        { name: 'Intermodal freight transportInternational transport', checked: false },
                        { name: 'Tip-truck Courier transport', checked: false },
                        { name: 'Foodstuffs transport', checked: false },
                        { name: 'Passenger transport', checked: false },
                        { name: 'Floriculture transport', checked: false },
                        { name: 'Rail transport Tank and silo transport', checked: false },
                        { name: 'Movers Stores', checked: false },
                        { name: 'Distribution Sea container transport', checked: false },
                    ],
                },
                fieldType: 'services',
                className: 'w-full'
            },
        ]
    },
    {
        id: 3,
        title: 'How big is the fleet.',
        fields: [
            {
                id: 0,
                attr: {
                    required: false,
                    options: [
                        { name: 'Van (fossil fuel)', checked: false, type: 'number', value: '' },
                        { name: 'Van (electric)', checked: false, type: 'number', value: '' },
                        { name: 'Large bus (fossil fuel', checked: false, type: 'number', value: '' },
                        { name: 'Large bus (electric)', checked: false, type: 'number', value: '' },
                        { name: 'Truck box truck (fossil fuel)', checked: false, type: 'number', value: '' },
                        { name: 'Truck box truck (electric)', checked: false, type: 'number', value: '' },
                        { name: 'Tractor + trailer', checked: false, type: 'number', value: '' },
                        { name: 'Truck with crane', checked: false, type: 'number', value: '' },
                        { name: 'Truck with cage monkey', checked: false, type: 'number', value: '' },
                        { name: 'Concrete pumptrailer', checked: false, type: 'number', value: '' },
                        { name: 'Sailtrailer of tautliner', checked: false, type: 'number', value: '' },
                        { name: 'Refrigerated trailers', checked: false, type: 'number', value: '' },
                        { name: 'Tip trailers', checked: false, type: 'number', value: '' },
                        { name: 'Walking floor trailers', checked: false, type: 'number', value: '' },
                        { name: 'Deeploaders', checked: false, type: 'number', value: '' },
                        { name: 'Open trailers', checked: false, type: 'number', value: '' },
                        { name: 'Silo trailers', checked: false, type: 'number', value: '' },
                        { name: 'Closed trailers with hard box', checked: false, type: 'number', value: '' },
                        { name: 'Tanktrailers', checked: false, type: 'number', value: '' },
                        { name: 'Taxibus', checked: false, type: 'number', value: '' },
                        { name: 'Coach', checked: false, type: 'number', value: '' },

                    ],
                },
                fieldType: 'checkBoxGroup',
                className: 'w-full'
            },
        ]
    },
    {
        id: 4,
        title: 'In which countries active and which regions of those countries',
        fields: [
            {
                id: 1,
                attr: {
                    items: [
                        {
                            id: 1,
                            value: '',
                            attr: {
                                del: true,
                                required: false,
                                name: 'country',
                            },
                            options: [],
                        },
                        {
                            id: 2,
                            value: '',
                            attr: {
                                del: true,
                                required: false,
                                name: 'country',
                            },
                            options: [],
                        },
                    ]
                },
                fieldType: 'locations',
                className: 'w-full'
            },
        ]
    },
    {
        id: 5,
        title: 'INFO',
        fields: [
            {
                id: 1,
                value: '',
                attr: {
                    required: false,
                    name: 'Chamber of Commerce number',
                    type: 'number',
                    placeholder: 'Chamber of Commerce number',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 2,
                value: '',
                attr: {
                    required: false,
                    name: 'IBAN',
                    type: 'text',
                    placeholder: 'IBAN',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 3,
                value: '',
                attr: {
                    required: false,
                    name: 'VAT number',
                    type: 'number',
                    placeholder: 'VAT number',
                },
                fieldType: 'input',
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
                value: '',
                attr: {
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
                value: '',
                attr: {
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
                value: '',
                attr: {
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
                value: '',
                attr: {
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
                value: '',
                attr: {
                    required: false,
                    name: 'password',
                    type: 'password',
                    placeholder: 'password',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 5,
                value: '',
                attr: {
                    required: false,
                    name: 'repeat password',
                    type: 'repeat password',
                    placeholder: 'password',
                },
                fieldType: 'input',
                className: 'w-full'
            },
            {
                id: 6,
                attr: {
                    title: 'Agree to terms?',
                    options: [
                        { name: 'Agree to terms', checked: false, required: true, },
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
    if (steps.value.length !== storeTransporters.currentStep) {
        if (storeTransporters.currentStep === 6) {
            if (steps[5].fields[6].value === steps[5].fields[7].value && steps[5].fields[6].value !== '' || !steps[5].fields[6].show) {
                storeTransporters.currentStep++
            } else {
                steps[5].fields[6].value = '';
                steps[5].fields[7].value = '';
                alert('Password mismatch')
            }
        } else {
            const name = steps.value.find(({ id }) => id === storeTransporters.currentStep + 1)?.title ?? '';
            storeTransporters.setCurrentStep(name, 'increment');
        }
    } else {
        console.log(steps)
    }
}

const back = () => {
    const name = steps.value.find(({ id }) => id === storeTransporters.currentStep - 1)?.title ?? '';
    storeTransporters.setCurrentStep(name, 'decrement');
}
</script>

<style scoped></style>
