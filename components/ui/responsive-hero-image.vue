<script setup lang="ts">
const props = defineProps<{
  name: string;
}>()

const srcset = ref<string>(`/images/hero/${props.name}-hero-400w.jpg 400w, /images/hero/${props.name}-hero-600w.jpg 600w, /images/hero/${props.name}-hero-800w.jpg 800w, /images/hero/${props.name}-hero-1000w.jpg 1000w, /images/hero/${props.name}-hero-1200w.jpg 1200w, /images/hero/${props.name}-hero-1600w.jpg 1600w, /images/hero/${props.name}-hero-2000w.jpg 2000w`);
const src = ref<string>(`/images/hero/${props.name}-hero.png`);
</script>

<template>
  <img
      sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
      :srcset="srcset"
      :src="src"
      class="relative z-0 min-h-full min-w-full object-cover object-center"
      alt=""
  />
</template>
