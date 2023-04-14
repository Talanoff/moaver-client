<template>
    <div class="container">
        <h1 class="text-center sm:mt-16 sm:mb-16 mt-0 mb-8 text-blue-950 font-bold sm:text-5xl text-xl">
            {{ title ?? '' }}
        </h1>
        <section class="text-gray-600 space-y-5" v-html="content ?? ''"/>
    </div>
</template>

<script setup>
defineProps(['title', 'content']);
</script>
