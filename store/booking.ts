import {defineStore} from "pinia";
import {KeyValue} from "~/types/forms";
import {useConfig} from "~/store/config";

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
                category: [null, ['required']],
                selectCategory: [null, []],
                pieces: [1, ['required']],
                kg: [null, ['required']],
                message: [null, []],
                dateFrom: [null, ['required']],
                locationFrom: [null, ['required']],
                selectLocationFrom: [null, ['required']],
                dateTo: [null, ['required']],
                locationTo: [null, ['required']],
                selectLocationTo: [null, ['required']],
                info: [null, ['info']],
                // ....
                wishes: [[], ['required']],
                additional_wishes: [[], []],
                additional_wishes_notes: [null, []],
                additional_wishes_attachment: [null, []],
                name: [null, 'required'],
                address: [null, 'required'],
                phone_number: [null, 'required'],
                mail_address: [null, 'required'],
                iban: [null, 'required'],
                password: [null, []],
                repeatPassword: [null, ['password']],
                registerCheckbox: [[], []],
                agreeToTerms: [[], ['required']],
            }
        }),
        getters: {
            nextStepAvailable(): boolean {
                const {
                    category,
                    selectCategory,
                    pieces,
                    kg,
                    message,
                    dateFrom,
                    locationFrom,
                    selectLocationFrom,
                    dateTo,
                    locationTo,
                    selectLocationTo,
                    wishes,
                    additional_wishes,
                    additional_wishes_notes,
                    additional_wishes_attachment,
                    name,
                    address,
                    phone_number,
                    mail_address,
                    iban,
                    password,
                    repeatPassword,
                    registerCheckbox,
                    agreeToTerms
                } = this.form;

                switch (this.currentStep) {
                    case 1:
                        /////////////ПОД ВОПРОСОМ
                        return [
                            category,
                            selectCategory,
                            pieces,
                            kg,
                            message
                        ]
                            .filter((it: any[]) => it[1].includes('required'))
                            .every((it) => !!it[0]);
                    case 2:
                        return [
                            dateFrom,
                            locationFrom,
                            selectLocationFrom,
                            dateTo,
                            locationTo,
                            selectLocationTo,
                        ]
                            .filter((it: any[]) => it[1].includes('required'))
                            .every((it) => !!it[0]);
                    case 3:
                        return [
                            wishes
                        ]
                            .filter((it: any[]) => it[1].includes('required'))
                            .every((it) => it[0].length > 0);
                    case 4:
                        return [
                            additional_wishes,
                            additional_wishes_notes,
                            additional_wishes_attachment
                        ]
                            .filter((it: any[]) => it[1].includes('required'))
                            .every((it) => !!it[0] || it[0] !== null ? it[0].length > 0 : false);
                    case 5:
                        return true
                    case 6:
                        return [
                            name,
                            address,
                            phone_number,
                            mail_address,
                            iban,
                            password,
                            repeatPassword,
                            registerCheckbox,
                            agreeToTerms
                        ]
                            .filter((it: any[]) => it[1].includes('required'))
                            .every((it) => !!it[0] || it[0] !== null ? it[0].length > 0 : false);
                    default:
                        return true;
                }
            }
        },

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
