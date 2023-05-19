<script setup>
import { useAuth } from "~/store/auth";

defineProps(['position']);
const emits = defineEmits(['close']);

const authStore = useAuth();

const onLogout = () => {
    authStore.logout();
    emits('close');
}
</script>

<template>
    <div class="fixed inset-0 z-[90]">
        <div
                class="flex bg-slate-600  bg-opacity-50 items-center justify-center absolute inset-0"
                @click="$emit('close')"
        />

        <div
            class="absolute bg-white text-slate-800 p-4 w-[200px] rounded-md"
            :style="{ left: position.right - 200 + 'px', top: position.top + 'px' }"
        >
            <div class="w-auto -mx-4 px-4 pb-3 border-b border-slate-200">
                <button class="flex items-center font-semibold w-full" @click.prevent="$emit('close')">
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
            </div>

            <div class="mt-3">
                <button class="text-left" @click.prevent="onLogout">
                    {{ $t('navigation.header.logout') }}
                </button>
            </div>
        </div>
    </div>
</template>
