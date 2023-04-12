<template>
    <div class="min-h-screen flex flex-col">
        <app-header/>
        <main role="main" class="flex-1">
            <slot/>
        </main>
        <app-footer/>
        <login v-if="storeAuth.showModal"/>
    </div>
</template>

<script setup>
import AppHeader from '@/components/layout/header.vue';
import AppFooter from '@/components/layout/footer.vue';
import Login from "~/components/modals/login/login.vue";
import {useAuth} from "~/store/auth";

const storeAuth = useAuth();
</script>
