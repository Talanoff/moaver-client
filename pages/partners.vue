<template>
  <section class="container sm:mb-56 mb-12">
    <div
        class="relative"
    >
      <figure
          class="sm:h-screen h-[120vw] max-h-[32rem] -mb-24 rounded-lg overflow-hidden bg-center bg-cover"
          style="background-image: url('images/topBg.png')"
      />

      <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 class="sm:text-left text-center text-white font-bold text-3xl sm:text-6xl mb-4">Wat wil je vervoeren?</h1>
        <p class="sm:text-left text-center text-white sm:text-2xl text-xl">Vind jouw vervoere, zonder omwegen</p>
      </div>
    </div>
    <div
        class="max-w-[90%] xl:max-w-[64rem] bg-white shadow-2xl shadow-slate-200/75 p-5 lg:p-8 rounded-md mx-auto relative z-1">
      <button
          type="button"
          class="block w-full group text-center"
      >
        <div
            @click="showFrom"
            class="flex justify-center items-center p-5 lg:p-8 border-2 border-slate-200 rounded-md group-hover:border-blue-600 group-hover:bg-slate-50 transition-colors duration-300">
          join now
        </div>
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {useBooking} from "~/store/booking";
import {useTransporters} from "~/store/transporters";

const store = useBooking()
const storeTransporters = useTransporters()
const showFrom = () => {
  store.transporters = true
  storeTransporters.currentStep = 1
}
</script>
