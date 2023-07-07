<script setup lang="ts">
import useEdge from "~/composables/use-edge";

const props = defineProps<{
  name: string;
}>()

const isEdge = useEdge();

const extension = ref<string>(isEdge ? 'jpg' : 'avif');
const srcset = ref<string>(`/images/hero/${props.name}-hero-400w.${extension.value} 400w, /images/hero/${props.name}-hero-600w.${extension.value} 600w, /images/hero/${props.name}-hero-800w.${extension.value} 800w, /images/hero/${props.name}-hero-1000w.${extension.value} 1000w, /images/hero/${props.name}-hero-1200w.${extension.value} 1200w, /images/hero/${props.name}-hero-1600w.${extension.value} 1600w, /images/hero/${props.name}-hero-2000w.${extension.value} 2000w`);
const src = ref<string>(`/images/hero/${props.name}-hero.png`);
</script>

<template>
  <client-only>
    <nuxt-img
        sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
        :srcset="srcset"
        :src="src"
        class="relative z-0 min-h-full min-w-full object-fit"
        alt=""
    />
  </client-only>
</template>
