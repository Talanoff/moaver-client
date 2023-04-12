import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
    state: () => ({
        showModal: false,
        isLoggedIn: false,
    }),
    actions: {
        onModalToggle() {
            this.showModal = !this.showModal;
        }
    }
});
