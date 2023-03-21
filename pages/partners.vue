<template>
  <div>
    <div
        class="relative"
    >
      <figure
          class="h-screen max-h-[42rem] -mb-24 rounded-lg overflow-hidden bg-center bg-cover"
          style="background-image: url('images/topBg.png')"
      />

      <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <button class="rounded-lg px-4 py-2 text-2xl border-2 border-blue-500 text-white hover:bg-blue-600 hover:text-blue-100 duration-300">Become a partner</button>
      </div>
    </div>
<!--<text-section class="pt-16"/>-->
  </div>
</template>

<script lang="ts" setup>
import Intro from "~/components/sections/intro.vue";
import TextSection from "~/components/sections/text-section.vue";
import AboutUs from "~/components/sections/about-us.vue";
</script>
