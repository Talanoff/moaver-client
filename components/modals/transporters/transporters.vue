<template>
    <modal
            :title="transporterStore.currentStepName"
            :show-title="steps.length !== transporterStore.currentStep"
            :show-back-button="transporterStore.currentStep > 1"
            @back="back"
            @close="transporterStore.toggleModal(false)"
    >
        <form @submit.prevent="submit">
            <transporters-form :steps="steps"/>
            <footer-component
                    :total-steps="steps.length"
                    :current-step="transporterStore.currentStep"
                    :loading="loading"
            />
        </form>
    </modal>
</template>

<script setup>
import FooterComponent from "~/components/modals/transporters/footer-component.vue";
import Modal from "~/components/modals/modal.vue";
import TransportersForm from "~/components/transportersForm.vue";
import { useTransporters } from "~/store/transporters";
import { storeToRefs } from 'pinia'

const transporterStore = useTransporters();
const api = useApi()

const { form } = storeToRefs(transporterStore);

const steps = ref([
    {
        id: 1,
        title: 'Company info',
        fields: [
            {
                attrs: {
                    label: 'Name transport company',
                    type: 'text',
                    placeholder: 'Name transport company',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'companyName',
            },
            {
                attrs: {
                    label: 'country',
                    type: 'text',
                    placeholder: 'country',
                    disabled: true,
                    options: transporterStore.countries,
                },
                fieldType: 'select',
                className: 'sm:w-1/2 w-full',
                controlName: 'country',
            },
            {
                attrs: {
                    label: 'location',
                    type: 'text',
                    placeholder: '',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'location'
            },
            {
                attrs: {
                    label: 'address',
                    type: 'text',
                    placeholder: 'address',
                },
                fieldType: 'textarea',
                className: 'w-full',
                controlName: 'address'
            },
            {
                attrs: {
                    label: 'Postcode',
                    type: 'text',
                    placeholder: 'Postcode',
                },
                fieldType: 'input',
                className: 'w-48',
                controlName: 'postCode'
            },
            {
                fieldType: 'delimiter',
                className: 'w-full'
            },
            {
                attrs: {
                    label: 'Phone number',
                    type: 'tel',
                    placeholder: 'Phone number',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'phone'
            },
            {
                attrs: {
                    label: 'E-mail address',
                    type: 'email',
                    placeholder: 'E-mail address',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'email'
            },
        ]
    },
    {
        id: 2,
        title: 'What types of transports do they provide',
        fields: [
            {
                id: 0,
                attrs: {
                    required: false,
                },
                fieldType: 'services',
                className: 'w-full',
                controlName: "services"
            },
        ]
    },
    {
        id: 3,
        title: 'What types of transports do they provide',
        fields: [
            {
                id: 0,

                fieldType: 'vehicles',
                className: 'w-full',
                controlName: "vehicles"
            },
        ]
    },
    // {
    //     id: 4,
    //     title: 'How big is the fleet.',
    //     fields: [
    //         {
    //             id: 0,
    //             attrs: {
    //                 options: [
    //                     {id: 0, name: 'Van (fossil fuel)'},
    //                     {id: 1, name: 'Van (electric)'},
    //                     {id: 2, name: 'Large bus (fossil fuel'},
    //                     {id: 3, name: 'Large bus (electric)'},
    //                     {id: 4, name: 'Truck box truck (fossil fuel)'},
    //                     {id: 5, name: 'Truck box truck (electric)'},
    //                     {id: 6, name: 'Tractor + trailer'},
    //                     {id: 7, name: 'Truck with crane'},
    //                     {id: 8, name: 'Truck with cage monkey'},
    //                     {id: 9, name: 'Concrete pumptrailer'},
    //                     {id: 10, name: 'Sailtrailer of tautliner'},
    //                     {id: 11, name: 'Refrigerated trailers'},
    //                     {id: 12, name: 'Tip trailers'},
    //                     {id: 13, name: 'Walking floor trailers'},
    //                     {id: 14, name: 'Deeploaders'},
    //                     {id: 15, name: 'Open trailers'},
    //                     {id: 16, name: 'Silo trailers'},
    //                     {id: 17, name: 'Closed trailers with hard box'},
    //                     {id: 18, name: 'Tanktrailers'},
    //                     {id: 19, name: 'Taxibus'},
    //                     {id: 20, name: 'Coach'},
    //                 ],
    //             },
    //             fieldType: 'checkBoxGroup',
    //             className: 'w-full',
    //             controlName: "quantities"
    //         },
    //     ]
    // },
    {
        id: 4,
        title: 'In which countries active and which regions of those countries',
        fields: [
            {
                id: 1,
                attrs: {
                    items: [
                        {
                            id: 1,
                            attrs: {
                                del: true,
                                required: false,
                                name: 'country',
                            },
                            options: transporterStore.countries,
                        },

                    ]
                },
                fieldType: 'locations',
                className: 'w-full',
                controlName: 'locations'
            },
        ]
    },
    {
        id: 5,
        title: 'INFO',
        fields: [
            {
                id: 1,
                attrs: {
                    label: 'Chamber of Commerce number',
                    type: 'text',
                    placeholder: 'Chamber of Commerce number',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'commerceNumber'
            },
            {
                id: 2,
                attrs: {
                    label: 'IBAN',
                    type: 'text',
                    placeholder: 'IBAN',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'iban'
            },
            {
                id: 3,
                attrs: {
                    label: 'VAT number',
                    type: 'text',
                    placeholder: 'VAT number',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'vat'
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
                    label: 'Name',
                    type: 'text',
                    placeholder: '',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'name'
            },
            {
                id: 1,
                attrs: {
                    label: 'Phone number',
                    type: 'text',
                    number: true,
                    placeholder: '+',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'personalPhone'
            },
            {
                id: 2,
                attrs: {
                    label: 'E-mail address',
                    type: 'email',
                    placeholder: 'E-mail address',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'personalEmail'
            },
            {
                id: 3,
                attrs: {
                    label: 'password',
                    type: 'password',
                    placeholder: '******',
                },
                fieldType: 'password',
                className: 'w-full',
                controlName: 'password'
            },
            {
                id: 4,
                attrs: {
                    label: 'repeatPassword',
                    type: 'password',
                    placeholder: '******',
                },
                fieldType: 'password',
                className: 'w-full',
                controlName: 'confirmPassword'
            },
            {
                id: 5,
                attrs: {
                    id: 'agree_to_terms',
                    label: 'Agree to terms?',
                },
                fieldType: 'checkbox',
                className: 'w-full',
                controlName: 'agreeToTerms'
            },
        ],
    },
    {
        id: 7,
        fields: [
            {
                fieldType: 'formInfo',
                className: 'w-full'
            },
        ],
    },
]);
const loading = ref(false);

if (transporterStore.currentStep === 1) {
    transporterStore.currentStepName = steps.value.find(({ id }) => id === 1)?.title ?? '';
}

const submit = () => {
    if (steps.value.length - 1 !== transporterStore.currentStep) {
        const name = steps.value.find(({ id }) => id === transporterStore.currentStep + 1)?.title ?? '';
        transporterStore.setCurrentStep(name, 'increment');
    } else {
        loading.value = true;
        const { confirmPassword, ...formData } = Object.keys(transporterStore.form).reduce((acc, it) => ({
            ...acc,
            [it]: transporterStore.form[it][0] ?? null
        }), {});

        formData.password_confirmation = confirmPassword;

        api.post('questionnaire/vendor', formData).then(() => {
            // TODO notify about success. clear form.
        }).catch((reason) => {
            // TODO notify about error. show validation errors.
        }).finally(() => {
            loading.value = false;
        });
    }
}

const back = () => {
    const name = steps.value.find(({ id }) => id === transporterStore.currentStep - 1)?.title ?? '';
    transporterStore.setCurrentStep(name, 'decrement');
}
</script>
