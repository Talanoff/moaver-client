<template>
    <div class="min-h-screen flex flex-col text-slate-900">
        <app-header/>
        <main role="main" class="flex-1 flex flex-col">
            <slot/>
        </main>
        <app-footer :show-about-us="false"/>
        <login v-if="storeAuth.showModal"/>
    </div>
</template>

<script setup>
import AppHeader from '@/components/layout/header.vue';
import AppFooter from '@/components/layout/footer.vue';
import Login from "~/components/modals/login/login.vue";
import { useAuth } from "~/store/auth";

const storeAuth = useAuth();
</script>
