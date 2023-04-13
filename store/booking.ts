import { defineStore } from "pinia";

export const useBooking = defineStore("booking", {
        state: () => ({
            category: '',
            showModal: false,
            currentStep: 0,
            steps: [
                {
                    id: 1,
                    fields: [
                        {
                            fieldType: 'card',
                            className: 'w-full sm:grid-cols-2 grid-cols-1',
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'stuks',
                                type: 'number',
                                placeholder: 'stuks',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'sm:w-1/2 w-full'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'kg',
                                type: 'number',
                                placeholder: 'kg',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'sm:w-1/2 w-full'
                        },
                        {
                            value: 'home',
                            attr: {
                                required: false,
                                name: 'What exactly do you want to send',
                                options: ['home', 'office'],
                            },
                            show: false,
                            fieldType: 'select',
                            className: 'w-full'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'Message',
                                type: 'text',
                                placeholder: 'Message',
                            },
                            fieldType: 'textarea',
                            className: 'w-full'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Ophaaldatum',
                    fields: [
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'Date From',
                                type: 'datetime-local',
                                placeholder: 'date'
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'Location from',
                                type: 'text',
                            },
                            fieldType: 'input',
                            className: 'sm:w-1/2 w-full'
                        },
                        {
                            value: 'home',
                            attr: {
                                required: false,
                                name: 'Location type from',
                                options: ['home', 'office'],
                            },
                            fieldType: 'select',
                            className: 'sm:w-1/2 w-full'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'Date To',
                                placeholder: 'date',
                                type: 'datetime-local',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'Location to',
                                type: 'text',
                            },
                            fieldType: 'input',
                            className: 'sm:w-1/2 w-full'
                        },
                        {
                            value: 'home',
                            attr: {
                                required: false,
                                name: 'Location type to',
                                options: ['home', 'office'],
                            },
                            fieldType: 'select',
                            className: 'sm:w-1/2 w-full'
                        },
                    ]
                },
                {
                    id: 3,
                    title: 'Pick-up and delivery wishes/requirements',
                    fields: [
                        {
                            id: 0,
                            value: '',
                            attr: {
                                required: false,
                                options: [
                                    { name: 'Tail lift at pick-up', checked: false },
                                    { name: 'Tail lift for delivery', checked: false },
                                    { name: 'TIndoor charging', checked: false },
                                    { name: 'Unloading inside', checked: false },
                                    { name: 'Call before pick-up', checked: false },
                                    { name: 'Call before delivery', checked: false },
                                    { name: 'Appointment needed for delivery', checked: false },
                                    { name: 'Urgent/Rush', checked: false },
                                    { name: 'Forklift needed', checked: false },
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                    ]
                },
                {
                    id: 4,
                    title: 'Additional wishes',
                    fields: [
                        {
                            id: 0,
                            title: 'Additional wishes',
                            value: '',
                            attr: {
                                required: false,
                                options: [
                                    { name: 'Part load', checked: false },
                                    { name: 'Refrigerated transport', checked: false },
                                    { name: 'Frozen transport', checked: false },
                                    { name: 'Electric vehicle', checked: false },
                                    { name: 'Call before pick-up', checked: false },
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                        {
                            id: 1,
                            value: '',
                            attr: {
                                required: false,
                                name: 'additional wishes',
                                type: 'text',
                                placeholder: 'additional wishes',
                            },
                            fieldType: 'textarea',
                            className: 'w-full m-2.5'
                        },
                        {
                            id: 2,
                            value: '',
                            attr: {
                                required: false,
                                name: 'Pick file',
                                url: ''
                            },
                            fieldType: 'file',
                            className: 'w-full'
                        },
                    ]
                },
                {
                    id: 5,
                    title: 'INFO',
                    fields: [
                        {
                            fieldType: 'formInfo',
                            className: 'w-full'
                        },
                    ],
                },
                {
                    id: 6,
                    title: 'Personal info',
                    fields: [
                        {
                            id: 0,
                            value: '',
                            attr: {
                                required: false,
                                name: 'Name',
                                type: 'text',
                                placeholder: 'your name',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 1,
                            value: '',
                            attr: {
                                required: false,
                                name: 'Address',
                                type: 'text',
                                placeholder: 'your address',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 2,
                            value: '',
                            attr: {
                                required: false,
                                name: 'Phone number',
                                type: 'text',
                                placeholder: 'Phone number',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 3,
                            value: '',
                            attr: {
                                required: false,
                                name: 'E-mail address',
                                type: 'email',
                                placeholder: 'E-mail address',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 4,
                            value: '',
                            attr: {
                                required: false,
                                name: 'IBAN',
                                type: 'number',
                                placeholder: 'IBAN',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 5,
                            attr: {
                                title: 'do you want to register?',
                                required: false,
                                options: [
                                    { name: 'do you want to register', checked: false },
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                        {
                            id: 6,
                            value: '',
                            attr: {
                                required: false,
                                name: 'password',
                                type: 'password',
                                placeholder: 'password',
                            },
                            show: false,
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 7,
                            value: '',
                            attr: {
                                required: false,
                                name: 'repeat password',
                                type: 'repeat password',
                                placeholder: 'password',
                            },
                            show: false,
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 8,
                            attr: {
                                title: 'Agree to terms?',
                                required: false,
                                options: [
                                    { name: 'Agree to terms', checked: false, required: true },
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                    ],


                },
                {
                    id: 7,
                    title: 'INFO',
                    fields: [
                        {
                            fieldType: 'formInfo',
                            className: 'w-full'
                        },
                    ],

                },
            ],
            categories: [
                {
                    id: 1,
                    icon: 'package',
                    name: 'One package'
                },
                {
                    id: 2,
                    icon: 'trolley',
                    name: 'Many packages'
                },
                {
                    id: 3,
                    icon: 'pallet',
                    name: 'Pallet(s)'
                },
                {
                    id: 4,
                    icon: 'warehouse',
                    name: 'Various goods'
                }
            ],

            // stepsProgress: 7,

        }),

        getters: {
            stepName: (state) => state.steps.find((it: {
                id: number;
                title?: string;
            }) => it.id === state.currentStep)?.title ?? ''
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

            setCategory(name: string) {
                this.category = name;
            }
        }
    }
);
