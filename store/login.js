import {defineStore} from "pinia";

export const useLogin = defineStore("login", {
        state: () => ({
            login: false,
            email: '',
            password: '',
        }),
        getters: {},
        watch: {},
        actions: {},
    }
);