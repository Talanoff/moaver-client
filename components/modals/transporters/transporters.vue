<template>
    <modal
            :title="transporterStore.currentStepName"
            :show-back-button="transporterStore.currentStep > 1"
            @back="back"
            @close="transporterStore.toggleModal(false)"
    >
        <form @submit.prevent="submit">
            <transporters-form :steps="steps"/>
            <footer-component
                    :total-steps="steps.length"
                    :current-step="transporterStore.currentStep"
                    :loading="loading.value"
            />
        </form>
    </modal>
</template>

<script setup>
import FooterComponent from "~/components/modals/transporters/footer-component.vue";
import Modal from "~/components/modals/modal.vue";
import TransportersForm from "~/components/transportersForm.vue";
import {useTransporters} from "~/store/transporters";
import {storeToRefs} from 'pinia'

const transporterStore = useTransporters();
const api = useApi()

const {form} = storeToRefs(transporterStore);

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
                controlName: 'companyName'
            },
            {
                attrs: {
                    label: 'house number',
                    type: 'text',
                    placeholder: 'house number',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'houseNumber'
            },
            {
                attrs: {
                    label: 'postcode',
                    type: 'text',
                    number: true,
                    placeholder: 'postcode',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'postCode'
            },
            {
                attrs: {
                    label: 'country',
                    type: 'text',
                    placeholder: 'country',
                    options: transporterStore.countries,
                },
                fieldType: 'select',
                className: 'sm:w-1/2 w-full',
                controlName: 'country',
            },
            {
                attrs: {
                    label: 'street',
                    type: 'text',
                    placeholder: 'street',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'street'
            },
            {
                attrs: {
                    label: 'Telephone number',
                    type: 'text',
                    number: true,
                    placeholder: 'Telephone number',
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

                fieldType: 'serviceQuantity',
                className: 'w-full',
                controlName: "serviceQuantity"
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
                    placeholder: 'Name',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'name'
            },
            {
                id: 1,
                attrs: {
                    label: 'Address',
                    type: 'text',
                    placeholder: 'Address',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: "address",
            },
            {
                id: 2,
                attrs: {
                    label: 'Phone number',
                    type: 'text',
                    number: true,
                    placeholder: 'Phone number',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'phoneNumber'
            },
            // {
            //     id: 3,
            //     attrs: {
            //         label: 'E-mail address',
            //         type: 'email',
            //         placeholder: 'E-mail address',
            //     },
            //     fieldType: 'input',
            //     className: 'w-full',
            //     controlName: 'email'
            // },
            {
                id: 3,
                attrs: {
                    label: 'password',
                    type: 'password',
                    placeholder: 'password',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'password'
            },
            {
                id: 4,
                attrs: {
                    label: 'repeat password',
                    type: 'repeat password',
                    placeholder: 'password',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'repeatPassword'
            },
            {
                id: 5,
                attrs: {
                    title: 'Agree to terms?',
                    options: [
                        {name: 'Agree to terms', id: 1,},
                    ],
                },
                fieldType: 'checkBoxGroup',
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
    const name = steps.value.find(({id}) => id === 1)?.title ?? '';
    transporterStore.currentStepName = name;
}

const submit = () => {
    if (steps.value.length !== transporterStore.currentStep) {
        if (transporterStore.currentStep === 6) {
            if (form.value.password[0] === form.value.repeatPassword[0] && form.value.password[0] !== '') {
                transporterStore.currentStep++
            } else {
                form.value.password[0] = '';
                form.value.repeatPassword[0] = '';
                alert('Password mismatch')
            }
        } else {
            const name = steps.value.find(({id}) => id === transporterStore.currentStep + 1)?.title ?? '';
            transporterStore.setCurrentStep(name, 'increment');
        }
    } else {
        loading.value = true;
        const formData = transporterStore.form;

        api.post('questionnaire/vendor', Object.keys(formData).reduce((acc, it) => ({
            ...acc,
            [it]: formData[it][0] ?? null
        }), {})).then(() => {
            // TODO notify about success. clear form.
        }).catch((reason) => {
            // TODO notify about error. show validation errors.
        }).finally(() => {
            loading.value = false;
        });
    }
}

const back = () => {
    const name = steps.value.find(({id}) => id === transporterStore.currentStep - 1)?.title ?? '';
    transporterStore.setCurrentStep(name, 'decrement');
}
</script>

<style scoped></style>
