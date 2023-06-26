<script setup>
import Intro from "~/components/sections/intro.vue";
import AboutUs from "~/components/sections/about-us.vue";
import Booking from "~/components/modals/booking/booking.vue";

const { $i18n } = useNuxtApp();
import { useConfig } from "~/store/config";

const configStore = useConfig();
configStore.getBookingItems();

$i18n.onLanguageSwitched = () => configStore.getBookingItems();

useHead({
    title: $i18n.t('home.description')
})
</script>

<template>
    <intro/>
    <about-us/>
    <booking/>
</template>
