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
                kg: [null, ['kg']],
                message: [null, ['message']],
                dateFrom: [null, ['Date From']],
                locationFrom: [null, ['Location from']],
                selectLocationFrom: [null, ['Location type from']],
                dateTo: [null, ['Date To']],
                locationTo: [null, ['Location to']],
                selectLocationTo: [null, ['Location type to']],
                info: [null, ['info']],
                // ....
                wishes: [[]],
                additional_wishes: [[]],
                additional_wishes_notes:[null, 'Additional wishes notes'],
                additional_wishes_attachment:[null, 'additional_wishes_attachment'],
                name:[null, 'name'],
                address:[null, 'address'],
                phone_number:[null, 'phone_number'],
                mail_address:[null, 'mail_address'],
                iban:[null, 'iban'],
                password:[null, 'password'],
                repeat_password:[null, 'repeat_password'],
                register_checkbox:[[]],
                agree_to_terms:[[]],
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
