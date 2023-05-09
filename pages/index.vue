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

.dp__action_select {
    padding: 1.25rem !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dp__action_cancel {
    padding: 1.25rem !important;
    display: flex;
    justify-content: center;
    align-items: center;

}

.dp__action_buttons {
    justify-content: space-between;
    margin-left: 0;
    width: 100%;
    flex: none;
}

.customScroll::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
    border-radius: 15px;
}

.customScroll::-webkit-scrollbar {
    width: 3px;
    background-color: #F5F5F5;
}

.customScroll::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-image: -webkit-gradient(linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(26 96 255 / 1)),
    color-stop(0.72, rgb(26 96 255 / 1)),
    color-stop(0.86, rgb(26 96 255 / 1)));
}
</style>
