<template>
  <header class="px-10 py-10 container">
    <nav class="flex justify-between">
      <ul class="flex w-1/2">
        <li class="mr-16">
          <nuxt-link to="/" class="text-2xl font-bold text-blue-600"
          >Moaver</nuxt-link
          >
        </li>
        <li class="mr-6 mt-1">
          <nuxt-link to="/" class="text-xl font-bold">Home</nuxt-link>
        </li>
        <li class="mr-6 mt-1">
          <nuxt-link to="/partners" class="text-xl font-bold"
          >Become a partner</nuxt-link
          >
        </li>
      </ul>
      <div class="flex items-center"><img src="images/user.png" alt="" class="mr-1 w-6"><nuxt-link to="/" class="cursor-pointer  text-xl ">Login</nuxt-link></div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped></style>
