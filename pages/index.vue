<template>
    <intro/>
    <about-us/>
    <booking/>
</template>
<script setup lang="ts">
import Intro from "~/components/sections/intro.vue";
import AboutUs from "~/components/sections/about-us.vue";
import Booking from "~/components/modals/booking/booking.vue";
import { useConfig } from "~/store/config";

const configStore = useConfig();

configStore.getWishes();
</script>
