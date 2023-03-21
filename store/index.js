import {defineStore} from "pinia";

export const useStoreIndex = defineStore("home", {
            state: () => ({
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
                showModal: false,
                steps: {
                    first: {
                        title: 'title'
                    }
                }
            }),
            getters: {},
            watch: {},
            actions: {},
        }
    )
;
