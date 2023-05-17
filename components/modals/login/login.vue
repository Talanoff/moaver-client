<template>
    <div class="fixed top-0 w-screen h-screen z-20">
        <div class="flex justify-center items-center w-full z-[999] w-screen h-screen">
            <div
                    class="flex bg-slate-600  bg-opacity-50 items-center justify-center absolute h-screen w-screen top-0 left-0"
                    @click="store.login = false"
            />
            <div
                    class="relative lg:w-1/2 sm:w-3/4 w-[90%] m-auto absolute  left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]">
                <div>
                    <button
                            class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-3 py-3 bg-blue-900 rounded-lg text-slate-100"
                            @click="storeAuth.onModalToggle()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor"
                             class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <form @submit.prevent="submit">
                    <h2 class="text-xl font-bold mt-4 mb-4">
                        {{ $t(`navigation.header.sign_in`) }}
                    </h2>
                    <div class="mb-4">
                        <form-input v-model="form.email"
                                    v-bind="{type: 'email', placeholder:'email', required:true, name:'email'}"/>
                    </div>
                    <form-input
                        v-model="form.password"
                        v-bind="{type: 'password', placeholder:'password', required:true, name:'password'}"
                    />
                    <footer-component>
                        {{ $t('navigation.header.sign_in') }}
                    </footer-component>
                </form>

            </div>

        </div>
    </div>
</template>

<script setup>
import FooterComponent from "~/components/modals/login/footer-component.vue";
import FormInput from "~/components/ui/form-input.vue";
import {useAuth} from "~/store/auth";

const {$sanctumAuth, $apiFetch} = useNuxtApp();
const storeAuth = useAuth();
const form = ref({
    email: '',
    password: '',
})
const submit = async () => {
    try {
        await $sanctumAuth.login(form.value, () => {
            // do something
        })
    } catch (e) {
        errors.value = e.errors
    }
};
const me = async () => {
    try {
        return await useAsyncData(() => $apiFetch('api/user'));
    } catch (e) {
        errors.value = e.errors
    }
}
const logout = async () => {
    await $sanctumAuth.logout(
        (data) => {
            console.log(data)
            // router.push('/account')
        }
    )
}
</script>

<style scoped></style>
