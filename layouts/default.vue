<template>
  <div class="min-h-screen flex flex-col">
    <app-header/>
    <main role="main" class="flex-1">
      <slot/>
      <booking v-if="store.booking"/>
      <transporters v-if="store.transporters"/>
      <login v-if="store.login"/>
    </main>
    <app-footer/>
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/header.vue';
import AppFooter from '@/components/layout/footer.vue';
import {useBooking} from "~/store/booking";
import Booking from "~/components/modals/booking/booking.vue";
import Transporters from "~/components/modals/transporters/transporters.vue";
import Login from "~/components/modals/login/login.vue";


const store = useBooking()
</script>
