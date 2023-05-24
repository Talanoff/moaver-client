<template>
    <button
            :type="type ?? 'submit'"
            :disabled="disabled"
            class="inline-flex items-center uppercase focus:ring-4 focus:outline-none rounded-lg tracking-widest font-semibold text-sm w-auto px-5 py-2.5 text-center transition-colors duration-300 disabled:bg-slate-300 disabled:text-slate-50"
            :class="color"
    >
        <slot/>
    </button>
</template>

<script setup lang="ts">
type Theme = 'primary' | 'secondary'

const props = defineProps<{
    type?: 'submit' | 'button' | 'cancel';
    disabled: boolean;
    theme: Theme
}>();

const color = computed(() => {
    switch (props.theme) {
        case 'primary':
            return 'text-slate-900 bg-emerald-400 hover:bg-emerald-500 focus:ring-emerald-300';
        default:
            return 'text-slate-800 bg-slate-200 hover:bg-slate-100 focus:ring-slate-100/50';
    }
})
</script>
