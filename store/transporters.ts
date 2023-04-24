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
            // selectCategory: [null, ['selectCategory']],
            // pieces: [null, ['required']],
            // kg: [null, ['kg']],
            // message: [null, ['message']],
            // dateFrom: [null, ['Date From']],
            // locationFrom: [null, ['Location from']],
            // selectLocationFrom: [null, ['Location type from']],
            // dateTo: [null, ['Date To']],
            // locationTo: [null, ['Location to']],
            // selectLocationTo: [null, ['Location type to']],
            // info: [null, ['info']],
            // // ....
            // wishes: [[]],
            // additional_wishes: [[]],
            // additional_wishes_notes: [null, 'Additional wishes notes'],
            // additional_wishes_attachment: ['', 'additional_wishes_attachment'],
            // name: [null, 'name'],
            // address: [null, 'address'],
            // phone_number: [null, 'phone_number'],
            // mail_address: [null, 'mail_address'],
            // iban: [null, 'iban'],
            // password: [null, 'password'],
            // repeat_password: [null, 'repeat_password'],
            // register_checkbox: [[]],
            // agree_to_terms: [[]],
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
