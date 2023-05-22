import { defineStore } from "pinia";

type CurrentState = {
    submitting: boolean;
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

const formDefaults = {
    category: [null, ['required']],
    goods: [null, []],
    pieces: [1, ['required']],
    weight: [null, ['required']],
    message: [null, []],
    dateFrom: [null, ['required']],
    locationFrom: [null, ['required']],
    selectLocationFrom: [null, ['required']],
    dateTo: [null, ['required']],
    locationTo: [null, ['required']],
    selectLocationTo: [null, ['required']],
    info: [null, []],
    wishes: [[], []],
    additionalWishes: [[], []],
    additionalWishesNotes: [null, []],
    additionalWishesAttachment: [[], []],
    name: [null, 'required'],
    // address: [null, 'required'],
    phone: [null, 'required'],
    email: [null, 'required'],
    iban: [null, 'required'],
    password: [null, []],
    confirmPassword: [null, ['password']],
    registrationRequired: [false, []],
    agreeToTerms: [false, ['required']],
};

export const useBooking = defineStore("booking", {
    state: (): CurrentState => ({
        submitting: false,
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
        form: JSON.parse(JSON.stringify(formDefaults))
    }),
    getters: {
        nextStepAvailable(): boolean {
            const {
                category,
                goods,
                pieces,
                weight,
                message,
                dateFrom,
                locationFrom,
                selectLocationFrom,
                dateTo,
                locationTo,
                selectLocationTo,
                wishes,
                additionalWishes,
                additionalWishesNotes,
                additionalWishesAttachment,
                name,
                // address,
                phone,
                email,
                // iban,
                password,
                confirmPassword,
                agreeToTerms
            } = this.form;

            switch (this.currentStep) {
                case 1:
                    return [
                        category,
                        goods,
                        pieces,
                        weight,
                        message
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => it[0] !== null);
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
                        .every((it) => it[0] !== null);
                case 3:
                    return [
                        wishes
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => it[0].length > 0);
                case 4:
                    return [
                        additionalWishes,
                        additionalWishesNotes,
                        additionalWishesAttachment
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => it[0] !== null ? it[0].length > 0 : false);
                case 5:
                    return true
                case 6:
                    return [
                        name,
                        // address,
                        phone,
                        email,
                        // iban,
                        password,
                        confirmPassword,
                        agreeToTerms
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => !!it[0] && it[0]);
                default:
                    return true;
            }
        },
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
        },

        clearForm(): void {
            this.currentStep = 1;
            this.currentStepName = '';
            this.form = JSON.parse(JSON.stringify(formDefaults));
        }
    }
});
