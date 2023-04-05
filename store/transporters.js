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
                    title: 'How big is the fleet.',
                    fields: [
                        {
                            id: 0,
                            value: '',
                            attr: {
                                required: false,
                                options: [
                                    {name: 'Van (fossil fuel)', checked: false, type: 'number', value: ''},
                                    {name: 'Van (electric)', checked: false, type: 'number', value: ''},
                                    {name: 'Large bus (fossil fuel', checked: false, type: 'number', value: ''},
                                    {name: 'Large bus (electric)', checked: false, type: 'number', value: ''},
                                    {name: 'Truck box truck (fossil fuel)', checked: false, type: 'number', value: ''},
                                    {name: 'Truck box truck (electric)', checked: false, type: 'number', value: ''},
                                    {name: 'Tractor + trailer', checked: false, type: 'number', value: ''},
                                    {name: 'Truck with crane', checked: false, type: 'number', value: ''},
                                    {name: 'Truck with cage monkey', checked: false, type: 'number', value: ''},
                                    {name: 'Concrete pumptrailer', checked: false, type: 'number', value: ''},
                                    {name: 'Sailtrailer of tautliner', checked: false, type: 'number', value: ''},
                                    {name: 'Refrigerated trailers', checked: false, type: 'number', value: ''},
                                    {name: 'Tip trailers', checked: false, type: 'number', value: ''},
                                    {name: 'Walking floor trailers', checked: false, type: 'number', value: ''},
                                    {name: 'Deeploaders', checked: false, type: 'number', value: ''},
                                    {name: 'Open trailers', checked: false, type: 'number', value: ''},
                                    {name: 'Silo trailers', checked: false, type: 'number', value: ''},
                                    {name: 'Closed trailers with hard box', checked: false, type: 'number', value: ''},
                                    {name: 'Tanktrailers', checked: false, type: 'number', value: ''},
                                    {name: 'Taxibus', checked: false, type: 'number', value: ''},
                                    {name: 'Coach', checked: false, type: 'number', value: ''},

                                ],
                            },
                            fieldType: 'checkBoxGroup',
                            className: 'w-full'
                        },
                    ]
                },
                {
                    id: 4,
                    title: 'In which countries active and which regions of those countries',
                    add: true,

                    fields: [
                        {
                            id: 1,
                            attr: {
                                items: [
                                    {
                                        id: 1,
                                        value: 'home',
                                        attr: {
                                            del: true,
                                            required: false,
                                            name: 'country',
                                            options: ['home', 'office'],
                                        }
                                    },
                                    {
                                        id: 2,
                                        value: 'home',
                                        attr: {
                                            del: true,
                                            required: false,
                                            name: 'country',
                                            options: ['home', 'office'],
                                        }
                                    },
                                ]

                            },
                            fieldType: 'selectGroup',
                            className: 'w-full'
                        },
                    ]
                },

                {
                    id: 5,
                    title: 'INFO',
                    fields: [
                        {
                            id: 1,
                            value: '',
                            attr: {
                                required: false,
                                name: 'Chamber of Commerce number',
                                type: 'number',
                                placeholder: 'Chamber of Commerce number',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 2,
                            value: '',
                            attr: {
                                required: false,
                                name: 'IBAN',
                                type: 'text',
                                placeholder: 'IBAN',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 3,
                            value: '',
                            attr: {
                                required: false,
                                name: 'VAT number',
                                type: 'number',
                                placeholder: 'VAT number',
                            },
                            fieldType: 'input',
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
                                name: 'password',
                                type: 'password',
                                placeholder: 'password',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 5,
                            value: '',
                            attr: {
                                required: false,
                                name: 'repeat password',
                                type: 'repeat password',
                                placeholder: 'password',
                            },
                            fieldType: 'input',
                            className: 'w-full'
                        },
                        {
                            id: 6,
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
