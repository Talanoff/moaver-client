import { useToast } from "vue-toast-notification/src/js/api";
const toast = useToast();
// @ts-ignore
export default defineNuxtPlugin(() => {
    return {
        provide: {
            toast,
        }
    }
});
