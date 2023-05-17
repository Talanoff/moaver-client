<template>
    <modal
            :title="currentStepName"
            :show-title="steps.length !== currentStep"
            :show-back-button="currentStep > 1"
            @back="onBack"
            @close="onClose"
    >
        <form @submit.prevent="onSubmit">
            <register-form :steps="steps"/>
            <modal-footer
                    :total-steps="steps.length"
                    :current-step="currentStep"
            />
        </form>
    </modal>
</template>

<script setup>
import ModalFooter from "~/components/modals/transporters/footer.vue";
import RegisterForm from "~/components/modals/transporters/form.vue";
import Modal from "~/components/modals/modal.vue";
import { useTransporters } from "~/store/transporters";
import { storeToRefs } from "pinia";

const router = useRouter();
const transporterStore = useTransporters();
const api = useApi();
const { $toast } = useNuxtApp();
const { form, currentStep, currentStepName } = storeToRefs(transporterStore);

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
                    maxlength: 33,
                    class: 'uppercase'
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'iban'
            },
            {
                id: 3,
                attrs: {
                    label: 'VAT number',
                    type: 'number',
                    placeholder: 'VAT number',
                    min: 0,
                    step: 0.1
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
                    type: 'tel',
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
                    label: 'confirmPassword',
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

const onClose = () => {
    transporterStore.toggleModal(false);
    transporterStore.clearForm();
}

const onSubmit = () => {
    if (steps.value.length - 1 !== currentStep.value) {
        const name = steps.value.find(({ id }) => id === currentStep.value + 1)?.title ?? '';
        transporterStore.setCurrentStep(name, 'increment');
    } else {
        transporterStore.submitting = true;
        const { confirmPassword, ...formData } = Object.keys(form.value).reduce((acc, it) => ({
            ...acc,
            [it]: form.value[it][0] ?? null
        }), {});

        formData.password_confirmation = confirmPassword;

        api.post('questionnaire/vendor', formData).then(() => {
            transporterStore.showModal = false;
            transporterStore.clearForm();
            router.push({
                path: '/thank-you',
                query: { action: 'register' }
            });
        }).catch((reason) => {
            Object.values(reason.response.data.errors).forEach(errors => {
                errors.forEach((error) => $toast.error(error));
            });
        }).finally(() => {
            transporterStore.submitting = false;
        });
    }
}

const onBack = () => {
    const name = steps.value.find(({ id }) => id === currentStep.value - 1)?.title ?? '';
    transporterStore.setCurrentStep(name, 'decrement');
}
</script>
