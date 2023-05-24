<template>
    <modal
        :title="$t(`navigation.header.sign_in`)"
        @close="authStore.onModalToggle()"
        container-max-width="tight"
    >
        <form @submit.prevent="submit">
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
    </modal>
</template>

<script setup>
import FormInput from "~/components/ui/form-input.vue";
import XButton from "~/components/ui/x-button.vue";
import Loader from "~/components/loaders/loader.vue";
import Modal from "~/components/modals/modal.vue";
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
