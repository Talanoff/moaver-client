import { defineStore } from "pinia";
import { useConfig } from "~/store/config";

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
        form: {}
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
