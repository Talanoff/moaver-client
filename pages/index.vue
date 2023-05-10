<template>
    <intro/>
    <about-us/>
    <booking/>
</template>
<script setup>
import Intro from "~/components/sections/intro.vue";
import AboutUs from "~/components/sections/about-us.vue";
import Booking from "~/components/modals/booking/booking.vue";
import { useConfig } from "~/store/config";

await useConfig().getWishes();
</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
