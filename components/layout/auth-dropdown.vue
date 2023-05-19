<script setup lang="ts">
import { useAuth } from "~/store/auth";
import AuthProfile from "~/components/layout/auth-profile.vue";

const authStore = useAuth();
authStore.checkMe();

const profileRef = ref<boolean>(false);
const dropdownPositionRef = ref<{
    right: number;
    top: number;
}>({ right: 0, top: 0 });
const buttonRef = ref<HTMLButtonElement | null>(null)

const calculateBoundingBox = () => {
    if (buttonRef.value) {
        const { right, top } = buttonRef.value.getBoundingClientRect();
        dropdownPositionRef.value = { right, top };
    }
}

const onToggleDropdown = () => {
    if (!profileRef.value && buttonRef.value) {
        calculateBoundingBox();
        window.addEventListener('resize', calculateBoundingBox);
    } else {
        window.removeEventListener('resize', calculateBoundingBox);
    }

    profileRef.value = !profileRef.value;
}
</script>

<template>
    <section class="w-32 flex flex-col justify-center items-end">
        <button
                class="flex items-center font-semibold"
                @click.prevent="authStore.onModalToggle()"
                v-if="!authStore.isLoggedIn"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
            </svg>
            {{ $t('navigation.header.login') }}
        </button>

        <div class="max-w-full" v-else>
            <button ref="buttonRef" class="flex items-center font-semibold max-w-full"
                    @click.prevent="onToggleDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex-none w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"/>
                </svg>
                <span class="truncate flex-1 mx-2">{{ authStore.user?.name }}</span>
                <span class="flex-none w-3 h-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                         stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                    </svg>
                </span>
            </button>

            <auth-profile
                    @close="onToggleDropdown"
                    v-if="profileRef"
                    :position="dropdownPositionRef"
            />
        </div>
    </section>
</template>
