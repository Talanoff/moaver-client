import { useToast } from "vue-toast-notification/src/js/api";
const toast = useToast();

export default defineNuxtPlugin(() => {
    return {
        provide: {
            toast,
        }
    }
});
