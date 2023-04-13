<template>
    <intro/>
    <about-us/>
    <booking v-if="bookingStore.showModal"/>
</template>
<script setup lang="ts">
import Intro from "~/components/sections/intro.vue";
import AboutUs from "~/components/sections/about-us.vue";
import Booking from "~/components/modals/booking/booking.vue";
import { useBooking } from "~/store/booking";
import { useConfig } from "~/store/config";

const bookingStore = useBooking();
const configStore = useConfig();

configStore.getWishes();
</script>
