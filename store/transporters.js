import {defineStore} from "pinia";

export const useTransporters = defineStore("transporters", {
        state: () => ({
            currentStep: 0,
            steps: [
                {
                    id: 1,
                    fields: [
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'Name transport company',
                                type: 'text',
                                placeholder: 'Name transport company',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'house number',
                                type: 'number',
                                placeholder: 'house number',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'postcode',
                                type: 'number',
                                placeholder: 'postcode',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'country',
                                type: 'text',
                                placeholder: 'country',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'street',
                                type: 'text',
                                placeholder: 'street',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'Telephone number',
                                type: 'number',
                                placeholder: 'Telephone number',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                        {
                            value: '',
                            attr: {
                                required: false,
                                name: 'E-mail address',
                                type: 'email',
                                placeholder: 'E-mail address',
                            },
                            show: true,
                            fieldType: 'input',
                            className: 'w-1/2'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'What types of transports do they provide ',
                    fields: [
                        {
                            id: 0,
                            value: '',
                            attr: {
                                required: false,
                                options: [
                                    {name: 'Waste materials transport', checked: false},
                                    {name: 'Agricultural transport', checked: false},
                                    {name: 'Car transport', checked: false},
                                    {name: 'Construction materials transport', checked: false},
                                    {name: 'Distribution transport', checked: false},
                                    {name: 'Exceptional transport', checked: false},
                                    {name: 'Intermodal freight transportInternational transport', checked: false},
                                    {name: 'Tip-truck Courier transport', checked: false},
                                    {name: 'Foodstuffs transport', checked: false},
                                    {name: 'Passenger transport', checked: false},
                                    {name: 'Floriculture transport', checked: false},
                                    {name: 'Rail transport Tank and silo transport', checked: false},
                                    {name: 'Movers Stores', checked: false},
                                    {name: 'Distribution Sea container transport', checked: false},
                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                    ]
                },
                {
                    id: 3,
                    title: 'test',
                    fields: [
                        {
                            id: 0,
                            value: '',
                            attr: {
                                required: false,
                                options: [
                                    {name: 'Tail lift at pick-up', checked: false, type: 'number', value: ''},
                                    {name: 'Tail lift for delivery', checked: false, type: 'number', value: ''},
                                    {name: 'TIndoor charging', checked: false, type: 'number', value: ''},
                                    {name: 'Unloading inside', checked: false, type: 'number', value: ''},
                                    {name: 'Call before pick-up', checked: false, type: 'number', value: ''},
                                    {name: 'Call before delivery', checked: false, type: 'number', value: ''},
                                    {name: 'Appointment needed for delivery', checked: false, type: 'number', value: ''},
                                    {name: 'Urgent/Rush', checked: false, type: 'number', value: ''},
                                    {name: 'Forklift needed', checked: false, type: 'number', value: ''},
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
                                required: false,
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
                                required: false,
                                name: 'additional wishes',
                                type: 'text',
                                placeholder: 'additional wishes',
                            },
                            fieldType: 'textarea',
                            className: 'w-full'
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
                                    {name: 'Agree to terms', checked: false},
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
            showInput() {

            }
        },
        watch: {},
        actions: {},
    }
);
