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
import Modal from "~/components/modals/modal.vue";
import TransportersForm from "~/components/transportersForm.vue";
import {useTransporters} from "~/store/transporters";
import {useConfig} from "~/store/config";
import {storeToRefs} from 'pinia'

const storeTransporters = useTransporters();
const configStore = useConfig()

const {form: form} = storeToRefs(storeTransporters)
const countries = ref(configStore.countries)

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
                    type: 'number',
                    placeholder: 'house number',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'houseNumber'
            },
            {
                attrs: {
                    label: 'postcode',
                    type: 'number',
                    placeholder: 'postcode',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'postcode'
            },
            {
                attrs: {
                    label: 'country',
                    type: 'text',
                    placeholder: 'country',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'country'

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
                    type: 'number',
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
        title: 'What types of transports do they provide ',
        fields: [
            {
                id: 0,
                attrs: {
                    required: false,
                    options: [
                        {name: 'Waste materials transport', checked: false},
                        {name: 'Agricultural transport', checked: false},
                        {name: 'Car transport', checked: false},
                        {name: 'Construction materials transport', checked: false},
                        {name: 'Distribution transport', checked: false},
                        {name: 'Exceptional transport', checked: false},
                        {name: 'Intermodal freight transportInternational transport', checked: false},
                        {name: 'Tip-truck Courier transport', checked: false},
                        {name: 'Foodstuffs transport', checked: false},
                        {name: 'Passenger transport', checked: false},
                        {name: 'Floriculture transport', checked: false},
                        {name: 'Rail transport Tank and silo transport', checked: false},
                        {name: 'Movers Stores', checked: false},
                        {name: 'Distribution Sea container transport', checked: false},
                    ],
                },
                fieldType: 'services',
                className: 'w-full',
                controlName: "services"
            },

        ]
    },
    {
        id: 3,
        title: 'What types of transports do they provide ',
        fields: [
            {
                id: 0,
                attrs: {
                    required: false,
                    options: [
                        {name: 'Waste materials transport', checked: false},
                        {name: 'Agricultural transport', checked: false},
                        {name: 'Car transport', checked: false},
                        {name: 'Construction materials transport', checked: false},
                        {name: 'Distribution transport', checked: false},
                        {name: 'Exceptional transport', checked: false},
                        {name: 'Intermodal freight transportInternational transport', checked: false},
                        {name: 'Tip-truck Courier transport', checked: false},
                        {name: 'Foodstuffs transport', checked: false},
                        {name: 'Passenger transport', checked: false},
                        {name: 'Floriculture transport', checked: false},
                        {name: 'Rail transport Tank and silo transport', checked: false},
                        {name: 'Movers Stores', checked: false},
                        {name: 'Distribution Sea container transport', checked: false},
                    ],
                },
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
                            options: countries,
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
                    type: 'number',
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
                controlName: 'IBAN'
            },
            {
                id: 3,
                attrs: {
                    label: 'VAT number',
                    type: 'number',
                    placeholder: 'VAT number',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'VAT'
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
                    placeholder: 'Phone number',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'phoneNumber'
            },
            {
                id: 3,
                attrs: {
                    label: 'E-mail address',
                    type: 'email',
                    placeholder: 'E-mail address',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'email'
            },
            {
                id: 4,
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
                id: 5,
                attrs: {
                    label: 'repeat password',
                    type: 'repeat password',
                    placeholder: 'password',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'repeat_password'
            },
            {
                id: 6,
                attrs: {
                    title: 'Agree to terms?',
                    options: [

                        {name: 'Agree to terms', id: 1,},
                    ],
                },
                fieldType: 'checkBoxGroup',
                className: 'w-full',
                controlName: 'agree_to_terms'
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
        if (storeTransporters.currentStep === 7) {
            if (form.value.password[0] === form.value.repeat_password[0] && form.value.password[0] !== '') {
                storeTransporters.currentStep++
            } else {
                form.value.password[0] = '';
                form.value.repeat_password[0] = '';
                alert('Password mismatch')
            }
        } else {
            const name = steps.value.find(({id}) => id === storeTransporters.currentStep + 1)?.title ?? '';
            storeTransporters.setCurrentStep(name, 'increment');
        }
    } else {
        console.log(steps)
    }
}

const back = () => {
    const name = steps.value.find(({id}) => id === storeTransporters.currentStep - 1)?.title ?? '';
    storeTransporters.setCurrentStep(name, 'decrement');
}
</script>

<style scoped></style>
