import {defineStore} from "pinia";

export const useBooking = defineStore("booking", {
        state: () => ({
            transporters: false,
            login: false,
            category: '',
            showModal: false,
            currentStep: 0,
            steps: [
                {
                    id: 1,
                    fields: [
                        {
                            fieldType: 'card',
                            className: 'w-full',
                        },
                        {
                            value: '',
                            attr: {
                                required: true,
                                name: 'stuks',
                                type: 'number',
                                placeholder: 'stuks',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: '',
                            attr: {
                                required: true,
                                name: 'kg',
                                type: 'number',
                                placeholder: 'kg',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: 'home',
                            attr: {
                                required: true,
                                name: 'home',
                                options: ['home', 'office'],
                            },
                            show: false,
                            fieldType: 'select',
                            className: 'w-full'
                        },
                        {
                            value: '',
                            attr: {
                                required: true,
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
                                required: true,
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
                                required: true,
                                name: 'Location from',
                                type: 'text',
                            },
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: 'home',
                            attr: {
                                required: true,
                                name: 'Location type',
                                type: 'text',
                                options: ['home', 'office'],
                            },
                            fieldType: 'select',
                            className: 'w-1/2'
                        },
                        {
                            value: '',
                            attr: {
                                required: true,
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
                                required: true,
                                name: 'location to',
                                type: 'text',
                            },
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: 'home',
                            attr: {
                                required: true,
                                name: 'stuks',
                                type: 'text',
                                options: ['home', 'office'],
                            },
                            fieldType: 'select',
                            className: 'w-1/2'
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
                                required: true,
                                options: [
                                    {name: 'Tail lift at pick-up', checked: false},
                                    {name: 'Tail lift for delivery', checked: false},
                                    {name: 'TIndoor charging', checked: false},
                                    {name: 'Unloading inside', checked: false},
                                    {name: 'Call before pick-up', checked: false},
                                    {name: 'Call before delivery', checked: false},
                                    {name: 'Appointment needed for delivery', checked: false},
                                    {name: 'Urgent/Rush', checked: false},
                                    {name: 'Forklift needed', checked: false},
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                    ]
                },
                {
                    id: 4,
                    title: 'Additional wishes:',
                    fields: [
                        {
                            id: 0,
                            value: '',
                            attr: {
                                required: true,
                                options: [
                                    {name: 'Part load', checked: false},
                                    {name: 'Refrigerated transport', checked: false},
                                    {name: 'Frozen transport', checked: false},
                                    {name: 'Electric vehicle', checked: false},
                                    {name: 'Call before pick-up', checked: false},
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                        {
                            id: 1,
                            value: '',
                            attr: {
                                required: true,
                                name: 'kg',
                                type: 'text',
                                placeholder: 'kg',
                            },
                            fieldType: 'textarea',
                            className: 'w-full'
                        },
                        {
                            id: 2,
                            value: '',
                            attr: {
                                required: true,
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
                                required: true,
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
                                required: true,
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
                                required: true,
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
                                required: true,
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
                                required: true,
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
                                required: true,
                                options: [
                                    {name: 'do you want to register', checked: false},
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                        {
                            id: 6,
                            value: '',
                            attr: {
                                required: true,
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
                                required: true,
                                name: 'password',
                                type: 'password',
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
                                required: true,
                                options: [
                                    {name: 'Agree to terms', checked: false},
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                    ],

                }
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
            showInput() {

            }
        },
        watch: {},
        actions: {},
    }
);
