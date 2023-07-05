<script setup lang="ts">
defineProps<{
    title: string;
    description?: string|undefined;
}>()
</script>

<template>
    <div class="relative">
        <picture class="block sm:h-screen h-[120vw] min-h-[20rem] max-h-[65vh] rounded-lg overflow-hidden relative z-10">
            <div class="absolute inset-0 bg-slate-900/20 z-10"/>
            <slot name="picture"/>
        </picture>

        <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
            <h1 class="px-5 md:px-10 text-center text-white font-bold text-3xl sm:text-[5rem] leading-tight mb-4 max-w-[90%] mx-auto">
                {{ title }}
            </h1>
            <p class="sm:text-left text-center text-white sm:text-2xl text-xl" v-if="description">
                {{ description }}
            </p>
        </div>
    </div>

    <div
        class="max-w-[90%] xl:max-w-[64rem] bg-white shadow-2xl p-5 lg:p-8 rounded-md mx-auto -mt-24 relative z-20"
        v-if="$slots['default']"
    >
        <slot/>
    </div>
</template>
