<template>
    <div class="fixed top-0 w-screen h-screen z-20">
        <div class="flex justify-center items-center z-[100] w-screen h-screen">
            <div
                    class="flex bg-slate-600  bg-opacity-50 items-center justify-center absolute h-screen w-screen top-0 left-0"
                    @click="authStore.onModalToggle()"
            />
            <div class="lg:w-1/2 sm:w-3/4 w-[90%] m-auto absolute inset-x-0 mx-auto p-10 bg-white rounded-3xl z-20 max-w-[600px]">
                <div>
                    <button
                            class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-3 py-3 bg-blue-900 rounded-lg text-slate-100"
                            @click="authStore.onModalToggle()"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <form @submit.prevent="submit">
                    <h2 class="text-xl font-bold mt-4 mb-4">
                        {{ $t(`navigation.header.sign_in`) }}
                    </h2>

                    <div class="mb-4">
                        <form-input
                                type="email"
                                placeholder="example@mail.com"
                                v-model="form.email"
                                :required="true"
                        />
                    </div>

                    <div>
                        <form-input
                                type="password"
                                v-model="form.password"
                                placeholder="********"
                                :required="true"
                        />
                    </div>

                    <footer class="mt-8">
                        <x-button type="submit" theme="primary">
                            <loader class="w-5 h-5 mr-2.5" v-if="loadingRef"/>
                            {{ $t('navigation.header.sign_in') }}
                        </x-button>
                    </footer>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import FormInput from "~/components/ui/form-input.vue";
import XButton from "~/components/ui/x-button.vue";
import Loader from "~/components/loaders/loader.vue";
import { useAuth } from "~/store/auth";

const authStore = useAuth();
const loadingRef = ref(false);
const form = ref({
    email: '',
    password: '',
});

const submit = () => {
    loadingRef.value = true;
    authStore.login(form.value)
        .then(() => authStore.onModalToggle())
        .finally(() => loadingRef.value = false);
}
</script>

<style scoped></style>
