import {defineStore} from "pinia";
import {useConfig} from "~/store/config";

type CurrentState = {
    showModal: boolean;
    currentStep: number;
    currentStepName: string;
    form: Partial<{ [p: string]: any }>
}

export const useTransporters = defineStore("transporters", {
    state: (): CurrentState => ({
        showModal: false,
        currentStep: 1,
        currentStepName: '',
        form: {
            companyName: [null, ['required']],
            houseNumber: [null, ['required']],
            postcode: [null, ['required']],
            country: [null, ['required']],
            street: [null, ['required']],
            phone: [null, ['required']],
            email: [null, ['required']],
            services: [[]],
            serviceQuantity: [],
            quantities: [[]],
            commerceNumber: [null, ['required']],
            IBAN: [null, ['required']],
            VAT: [null, ['required']],
            locations: [null, ['required']],
            name: [null, ['required']],
            address: [null, ['required']],
            phoneNumber: [null, ['required']],
            email: [null, ['required']],
            password: [null, ['required']],
            repeat_password: [null, 'repeat_password'],
            agree_to_terms: [[]],
        }
    }),

    getters: {
        countries() {
            const config = useConfig();

            return config.countries.map((it: { id: number; name: string; }) => ({
                key: it.id,
                value: it.name
            }));
        }
    },

    actions: {
        toggleModal(toState: boolean | undefined = undefined) {
            if (toState !== undefined) {
                this.showModal = toState;
            } else {
                this.showModal = !this.showModal;
            }

            this.currentStep = 1;
        },

        setCurrentStep(name: string, direction: 'increment' | 'decrement') {
            this.currentStepName = name;

            if (direction === 'increment') {
                this.currentStep++;
            } else {
                this.currentStep--;
            }
        }
    },
});
