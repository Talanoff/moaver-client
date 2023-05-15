import vClickOutside from "click-outside-vue3";

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vClickOutside);
});
