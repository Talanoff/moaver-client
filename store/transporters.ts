import {defineStore} from "pinia";
import {useConfig} from "~/store/config";
import {KeyValue} from "~/types/forms";

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
            postCode: [null, ['required']],
            country: [null, ['required']],
            street: [null, ['required']],
            phone: [null, ['required']],
            email: [null, ['required']],
            services: [[], ['required']],
            serviceQuantity: [null, ['required']],
            quantities: [[]],
            commerceNumber: [null, ['required']],
            iban: [null, ['required']],
            vat: [null, ['required']],
            locations: [[], ['required']],
            name: [null, ['required']],
            address: [null, ['required']],
            phoneNumber: [null, ['required']], // ???
            password: [null, ['required']],
            repeatPassword: [null, ['required', 'password']],
            agreeToTerms: [[], ['required']],
        }
    }),

    getters: {
        countries(): KeyValue[] {
            const config = useConfig();

            return config.countries.map((it: { id: number; name: string; }): KeyValue => ({
                key: it.id,
                value: it.name
            }));
        },

        nextStepAvailable(): boolean {
            const {
                companyName,
                houseNumber,
                postCode,
                country,
                street,
                phone,
                email,
                services,
                serviceQuantity,
                commerceNumber,
                iban,
                vat,
                name,
                address,
                phoneNumber,
                password,
                repeatPassword,
                agreeToTerms,
                locations

            } = this.form;

            switch (this.currentStep) {
                case 1:
                    return [
                        companyName,
                        houseNumber,
                        postCode,
                        country,
                        street,
                        phone,
                        email
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => !!it[0]);
                case 2:
                    return [
                        services
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => it[0].length > 0);
                case 3:
                    return [
                        serviceQuantity
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => {
                            return it[0] !== null ? Object.values(it[0][0]).every((item) => typeof item === "string") : ''
                        });
                case 4:
                    return [
                        locations
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => {
                            console.log(it)
                            return it[0].length > 0 ? it[0].every((element: any) => {
                                if (element.country !== '' && element.city !== '') {
                                    console.log(element)
                                    return true
                                } else {
                                    return false
                                }

                            }) : ''
                        });
                case 5:
                    return [
                        commerceNumber,
                        iban,
                        vat
                    ]
                        .filter((it: any[]) => it[1].includes('required'))
                        .every((it) => !!it[0]);
                case 6:
                    return [
                        name,
                        address,
                        phoneNumber,
                        password,
                        repeatPassword,
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
