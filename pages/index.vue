<template>
    <intro/>
    <about-us/>
    <booking/>
</template>
<script setup lang="ts">
import Intro from "~/components/sections/intro.vue";
import AboutUs from "~/components/sections/about-us.vue";
import Booking from "~/components/modals/booking/booking.vue";
import {useConfig} from "~/store/config";

const configStore = useConfig();

await configStore.getWishes();
</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>