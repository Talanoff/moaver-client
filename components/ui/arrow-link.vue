<script setup lang="ts">
defineProps<{
    to: string;
}>()
</script>

<template>
    <nuxt-link :to="to" class="inline-flex items-center group transition-colors duration-300">
        <slot/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
             stroke="currentColor" class="ml-2.5 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </svg>
    </nuxt-link>
</template>
