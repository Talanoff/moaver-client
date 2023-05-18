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
import { useConfig } from "~/store/config";

const api = useApi();
const router = useRouter();
const { $toast, $i18n } = useNuxtApp();
const transporterStore = useTransporters();
const configStore = useConfig();

await configStore.getCountries();
configStore.getServices();

const { form, currentStep, currentStepName } = storeToRefs(transporterStore);

const steps = ref([
    {
        id: 1,
        title: $i18n.t('modals.transporter.companyInfo'),
        fields: [
            {
                attrs: {
                    label: $i18n.t('forms.companyName'),
                    type: 'text',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'companyName',
            },
            {
                attrs: {
                    label: $i18n.t('forms.country'),
                    type: 'text',
                    placeholder: $i18n.t('forms.country'),
                    disabled: true,
                    options: transporterStore.countries,
                },
                fieldType: 'select',
                className: 'sm:w-1/2 w-full',
                controlName: 'country',
            },
            {
                attrs: {
                    label: $i18n.t('forms.location'),
                    type: 'text',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'location'
            },
            {
                attrs: {
                    label: $i18n.t('forms.address'),
                    type: 'text',
                },
                fieldType: 'textarea',
                className: 'w-full',
                controlName: 'address'
            },
            {
                attrs: {
                    label: $i18n.t('forms.postcode'),
                    type: 'text',
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
                    label: $i18n.t('forms.phoneNumber'),
                    type: 'tel',
                    placeholder: '+31',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'phone'
            },
            {
                attrs: {
                    label: $i18n.t('forms.email'),
                    type: 'email',
                    placeholder: 'example@mail.com',
                },
                fieldType: 'input',
                className: 'sm:w-1/2 w-full',
                controlName: 'email'
            },
        ]
    },
    {
        id: 2,
        title: $i18n.t('modals.transporter.transports'),
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
        title: $i18n.t('modals.transporter.transports'),
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
        title: $i18n.t('modals.transporter.countries'),
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
        title: $i18n.t('modals.transporter.info'),
        fields: [
            {
                id: 1,
                attrs: {
                    label: $i18n.t('forms.commerceNumber'),
                    type: 'text',
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
                    label: $i18n.t('forms.vat'),
                    type: 'number',
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
        title: $i18n.t('modals.transporter.personal'),
        fields: [
            {
                id: 0,
                attrs: {
                    label: $i18n.t('forms.name'),
                    type: 'text',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'name'
            },
            {
                id: 1,
                attrs: {
                    label: $i18n.t('forms.phoneNumber'),
                    type: 'tel',
                    number: true,
                    placeholder: '+31',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'personalPhone'
            },
            {
                id: 2,
                attrs: {
                    label: $i18n.t('forms.email'),
                    type: 'email',
                    placeholder: 'personal@mail.com',
                },
                fieldType: 'input',
                className: 'w-full',
                controlName: 'personalEmail'
            },
            {
                id: 3,
                attrs: {
                    label: $i18n.t('forms.password'),
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
                    label: $i18n.t('forms.confirmPassword'),
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
                    label: $i18n.t('forms.agreeToTerms'),
                },
                fieldType: 'checkbox',
                className: 'w-full',
                controlName: 'agreeToTerms'
            },
        ],
    }
]);

const onClose = () => {
    transporterStore.toggleModal(false);
    transporterStore.clearForm();
}

const onSubmit = () => {
    if (steps.value.length !== currentStep.value) {
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
    const name = steps.value.find(({ id }) => id === currentStep.value)?.title ?? '';
    transporterStore.setCurrentStep(name, 'decrement');
}
</script>
