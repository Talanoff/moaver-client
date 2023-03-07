<template>
  <div class="min-h-screen flex flex-col">
    <app-header/>
    <main role="main" class="flex-1">
      <slot/>
    </main>
    <app-footer/>
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/header.vue';
import AppFooter from '@/components/layout/footer.vue';
</script>
