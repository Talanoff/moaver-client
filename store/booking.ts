import { defineStore } from "pinia";

type CurrentState = {
    showModal: boolean;
    currentStep: number;
    currentStepName: string;
    categories: {
        id: string;
        icon: string;
        name: string;
    }[],
    form: Partial<{ [p: string]: any }>
}

export const useBooking = defineStore("booking", {
        state: (): CurrentState => ({
            showModal: false,
            currentStep: 1,
            currentStepName: '',
            categories: [
                {
                    id: 'one',
                    icon: 'package',
                    name: 'One package'
                },
                {
                    id: 'many',
                    icon: 'trolley',
                    name: 'Many packages'
                },
                {
                    id: 'pallets',
                    icon: 'pallet',
                    name: 'Pallet(s)'
                },
                {
                    id: 'various',
                    icon: 'warehouse',
                    name: 'Various goods'
                }
            ],
            form: {
                category: [null],
                pieces: [null, ['required']],
                // ....
                wishes: [[]],
                additional_wishes: [[]],
            }
        }),

        actions: {
            toggleModal(toState: boolean | undefined = undefined) {
                if (toState !== undefined) {
                    this.showModal = toState;
                } else {
                    this.showModal = !this.showModal;
                }

                if (!this.showModal) {
                    this.form.category[0] = null;
                }

                this.currentStep = 1;
            },

            setCategory(name: string) {
                this.form.category[0] = name;
            },

            setCurrentStep(name: string, direction: 'increment' | 'decrement') {
                this.currentStepName = name;

                if (direction === 'increment') {
                    this.currentStep++;
                } else {
                    this.currentStep--;
                }
            }
        }
    }
);
