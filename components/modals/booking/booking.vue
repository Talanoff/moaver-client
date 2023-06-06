<template>
    <modal
            v-if="showModal"
            :title="currentStepName"
            :show-title="steps.length !== 1"
            :show-back-button="currentStep > 1"
            @close="onClose"
            @back="onBack"
    >
        <form @submit.prevent="onSubmit">
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
import { useAuth } from "~/store/auth";
import { storeToRefs } from "pinia";

const api = useApi();
const router = useRouter();
const { $toast, $i18n } = useNuxtApp();
const authStore = useAuth();
const bookingStore = useBooking();
const configStore = useConfig();

const { form, showModal, currentStepName, currentStep } = storeToRefs(bookingStore);
const { wishes, locationTypes, goodsTypes, recurringShippingTypes } = storeToRefs(configStore);

const steps = computed(() => {
    const steps = [
        {
            id: 1,
            fields: [
                {
                    fieldType: 'categories',
                    className: 'w-full sm:grid-cols-2 grid-cols-1',
                    controlName: 'category'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.pieces'),
                        type: 'text',
                        number: true,
                        maxlength: '4',
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
                        label: $i18n.t('forms.weight'),
                        type: 'text',
                        number: true,
                        maxlength: '5',
                        name: $i18n.t('forms.kg'),
                    },
                    fieldType: 'input',
                    className: 'sm:w-1/2 w-full',
                    controlName: 'weight'
                },
                {
                    attrs: {
                        required: false,
                        label: $i18n.t('forms.variousGoods'),
                        options: goodsTypes.value,
                    },
                    hidden: false,
                    fieldType: 'select',
                    controlName: 'goods',
                    className: 'w-full'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.bulk'),
                        type: 'text',
                    },
                    hidden: true,
                    fieldType: 'textarea',
                    className: 'w-full',
                    controlName: 'bulk'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.message'),
                        type: 'text',
                        placeholder: '',
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
            title: $i18n.t('modals.booking.collectionDate'),
            fields: [
                {
                    attrs: {
                        label: $i18n.t('forms.dateFrom'),
                        type: 'datetime-local',
                        min: new Date(),
                        format: 'yyyy-MM-dd HH:mm',
                        withTime: true
                    },
                    fieldType: 'dateTime',
                    className: 'w-full ',
                    controlName: 'dateFrom'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.locationFrom'),
                        rows: 2
                    },
                    fieldType: 'textarea',
                    className: 'w-full',
                    controlName: 'locationFrom'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.locationType'),
                        options: locationTypes.value,
                    },
                    fieldType: 'select',
                    className: 'w-full',
                    controlName: 'selectLocationFrom'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.dateTo'),
                        type: 'datetime-local',
                        min: form.value.dateTo[0] ?? new Date(),
                        format: 'yyyy-MM-dd HH:mm',
                        withTime: true
                    },
                    fieldType: 'dateTime',
                    className: 'w-full',
                    controlName: 'dateTo'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.locationTo'),
                        rows: 2
                    },
                    fieldType: 'textarea',
                    className: 'w-full',
                    controlName: 'locationTo'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.locationType'),
                        options: locationTypes.value,
                    },
                    fieldType: 'select',
                    className: 'w-full',
                    controlName: 'selectLocationTo'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.recurringShipping'),
                    },
                    fieldType: 'checkbox',
                    className: 'w-full',
                    controlName: 'recurringShipping'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.recurringShippingType'),
                        options: recurringShippingTypes.value
                    },
                    hidden: true,
                    fieldType: 'select',
                    className: 'w-full',
                    controlName: 'recurringShippingType'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.recurringShippingInterval'),
                    },
                    hidden: true,
                    fieldType: 'textarea',
                    className: 'w-full',
                    controlName: 'recurringShippingCustom'
                }
            ]
        },
        {
            id: 3,
            title: $i18n.t('modals.booking.wishes'),
            fields: [
                {
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
            title: $i18n.t('forms.additionalWishes'),
            fields: [
                {
                    id: 'additionalWishes',
                    title: $i18n.t('forms.additionalWishes'),
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
                        label: $i18n.t('forms.additionalWishes'),
                        type: 'text',
                        placeholder: '',
                        maxlength: 400,
                    },
                    controlName: 'additionalWishesNotes',
                    fieldType: 'textarea',
                    className: 'w-full'
                },
                {
                    id: 2,
                    attrs: {
                        label: $i18n.t('forms.uploadPhotos'),
                        storeAsFile: false,
                    },
                    controlName: 'additionalWishesAttachment',
                    fieldType: 'file',
                    className: 'w-full'
                },
            ]
        },
        {
            id: 5,
            title: $i18n.t('modals.booking.info'),
            fields: [
                {
                    fieldType: 'formInfo',
                    controlName: 'info',
                    className: 'w-full'
                },
            ],
        },
    ];

    if (!authStore.isLoggedIn) {
        steps.push({
            id: 6,
            title: $i18n.t('modals.booking.personal'),
            fields: [
                {
                    attrs: {
                        label: $i18n.t('forms.name'),
                        type: 'text',
                    },
                    fieldType: 'input',
                    className: 'w-full',
                    controlName: 'name'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.phoneNumber'),
                        type: 'text',
                        number: true,
                        maxlength: 19,
                        placeholder: '+31',
                    },
                    fieldType: 'input',
                    className: 'w-full',
                    controlName: 'phone'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.email'),
                        maxlength: '50',
                        type: 'email',
                        placeholder: 'example@mail.com',
                    },
                    fieldType: 'input',
                    className: 'w-full',
                    controlName: 'email'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.registration'),
                        translatable: true
                    },
                    controlName: 'registrationRequired',
                    fieldType: 'checkbox',
                    className: 'w-full'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.password'),
                        type: 'password',
                        maxlength: '50',
                        placeholder: '******',
                    },
                    hidden: true,
                    fieldType: 'input',
                    className: 'w-full',
                    controlName: 'password'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.confirmPassword'),
                        type: 'password',
                        maxlength: '50',
                        placeholder: '******',
                    },
                    hidden: true,
                    fieldType: 'input',
                    className: 'w-full',
                    controlName: 'confirmPassword'
                },
                {
                    attrs: {
                        label: $i18n.t('forms.agreeToTerms'),
                        translatable: true
                    },
                    controlName: 'agreeToTerms',
                    fieldType: 'checkbox',
                    className: 'w-full'
                },
            ],
        });
    }

    return steps;
});

watch(() => form.value.registrationRequired[0], (value) => {
    const step = steps.value.find(it => it.id === 6);
    const [password, confirmPassword] = step.fields.filter(it => it.controlName === 'password' || it.controlName === 'confirmPassword');

    password.hidden = !value;
    confirmPassword.hidden = !value;

    if (!value) {
        form.value.password[0] = null
        form.value.password[1] = []
        form.value.confirmPassword[0] = null
        form.value.confirmPassword[1] = []
    } else {
        form.value.password[1] = ["required"]
        form.value.confirmPassword[1] = ["required"]
    }
});

watch(() => form.value.category[0], (value) => {
    const piecesControl = steps.value[0].fields.find(it => it.controlName === 'pieces');
    const goodsControl = steps.value[0].fields.find(it => it.controlName === 'goods');

    if (goodsControl) {
        goodsControl.hidden = value !== "various";
    }

    if (piecesControl) {
        if (value === "one") {
            piecesControl.attrs.placeholder = 1
            piecesControl.attrs.disabled = true
            piecesControl.attrs.label = $i18n.t('forms.piece')
        } else if (value === "pallets") {
            piecesControl.attrs.name = $i18n.t('forms.pallets')
            piecesControl.attrs.label = $i18n.t('forms.pallets')
        } else {
            piecesControl.attrs.name = $i18n.t('forms.pieces')
            piecesControl.attrs.label = $i18n.t('forms.pieces')
            piecesControl.attrs.placeholder = ''
            piecesControl.attrs.disabled = false
        }

        if (value === 'various' || value === 'one') {
            form.value.pieces[0] = 1;
        }

        if (value === "various") {
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
    }
});

watch(() => form.value.goods[0], (value) => {
    const bulkControl = steps.value[0].fields.find(it => it.controlName === 'bulk');

    if (bulkControl) {
        const conditionBulk = value === 11;

        bulkControl.hidden = !conditionBulk;
        bulkControl.attrs.required = conditionBulk;
        form.value.bulk[1] = conditionBulk ? ['required'] : [];
    }
});

const recurringShippingCallback = (value) => {
    const intervalSelectControl = steps.value[1].fields.find(it => it.controlName === 'recurringShippingType');

    if (intervalSelectControl) {
        intervalSelectControl.hidden = !value;
        intervalSelectControl.attrs.required = value;
        form.value.recurringShippingType[1] = value ? ['required'] : [];
    }
}

const recurringShippingTypeCallback = (value) => {
    const intervalInputControl = steps.value[1].fields.find(it => it.controlName === 'recurringShippingCustom');

    if (intervalInputControl) {
        const conditionInterval = value === 6;

        intervalInputControl.hidden = !conditionInterval;
        intervalInputControl.attrs.required = conditionInterval;
        form.value.recurringShippingType[1] = conditionInterval ? ['required'] : [];
    }
}

watch(() => form.value.recurringShipping[0], recurringShippingCallback);

watch(() => form.value.recurringShippingType[0], recurringShippingTypeCallback);

watch(() => form.value.dateTo[0], (value) => {
    const dateToControl = steps.value[1].fields.find(it => it.controlName === 'dateFrom');

    if (dateToControl) {
        dateToControl.attrs.max = value;
    }

    recurringShippingCallback(form.value.recurringShipping[0]);
    recurringShippingTypeCallback(form.value.recurringShippingType[0]);
});

watch(() => form.value.dateFrom[0], (value) => {
    const dateToControl = steps.value[1].fields.find(it => it.controlName === 'dateTo');

    if (dateToControl) {
        dateToControl.attrs.min = value;
    }

    recurringShippingCallback(form.value.recurringShipping[0]);
    recurringShippingTypeCallback(form.value.recurringShippingType[0]);
});

const onClose = () => {
    bookingStore.toggleModal(false);
    bookingStore.clearForm();
}

const onSubmit = () => {
    if (steps.value.length !== bookingStore.currentStep) {
        const name = steps.value.find(({ id }) => id === bookingStore.currentStep + 1)?.title ?? '';
        bookingStore.setCurrentStep(name, 'increment');
    } else {
        bookingStore.submitting = true;
        const { confirmPassword, ...formData } = Object.keys(bookingStore.form).reduce((acc, it) => ({
            ...acc,
            [it]: bookingStore.form[it][0] ?? null
        }), {});

        formData.password_confirmation = confirmPassword;

        api.post('questionnaire/order', formData).then(({ data }) => {
            authStore.assign(data);
            bookingStore.showModal = false;
            bookingStore.clearForm();
            router.push({
                path: '/thank-you',
                query: { action: 'booking' }
            });
        }).catch((reason) => {
            if (reason.response?.data?.errors) {
                Object.values(reason.response.data.errors).forEach(errors => {
                    errors.forEach((error) => $toast.error(error));
                });
            } else {
                $toast.error($i18n.t('errors.server'))
            }
        }).finally(() => {
            bookingStore.submitting = false;
        });
    }
}

const onBack = () => {
    const name = steps.value.find(({ id }) => id === bookingStore.currentStep - 1)?.title ?? '';
    bookingStore.setCurrentStep(name, 'decrement');
}
</script>
