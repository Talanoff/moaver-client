<template>
    <div class="fixed top-0 w-screen h-screen">
        <div
                class="flex bg-gray-600  bg-opacity-50 items-center justify-center absolute inset-0"
                @click="$emit('close')"
        />

        <div class="z-[999] max-w-[800px] w-[90vw] m-auto absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div class="relative sm:p-8 p-5 bg-white rounded-3xl z-20">
                <button
                        type="button"
                        class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-3 py-3 bg-blue-900 rounded-lg text-gray-100"
                        @click="$emit('close')"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor"
                         class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <div class="flex items-center space-x-5">
                    <div v-if="showBackButton">
                        <button
                                type="button"
                                class="border-gray-300 hover:border-blue-600 rounded-md border-2 p-2 transition-colors duration-300"
                                @click.prevent="$emit('back')"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                            </svg>
                        </button>
                    </div>

                    <h2 class="sm:text-3xl text-xl font-bold" v-if="title">
                        {{ $t(`forms.${title}`) }}
                    </h2>
                </div>

                <slot/>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['title', 'showBackButton']);
defineEmits(['back', 'close'])
</script>
