<template>
    <intro/>
    <about-us/>
    <booking v-if="storeBooking.showModal"/>
</template>
<script setup lang="ts">
import Intro from "~/components/sections/intro.vue";
import AboutUs from "~/components/sections/about-us.vue";
import Booking from "~/components/modals/booking/booking.vue";
import { useBooking } from "~/store/booking";

const storeBooking = useBooking();
</script>
