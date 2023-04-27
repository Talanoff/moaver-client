<template>
    <button
            :type="type"
            :disabled="disabled"
            class="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center transition-colors duration-300"
            :class="color"
    >
        <slot/>
    </button>
</template>

<script setup lang="ts">
type Theme = 'primary' | 'secondary'

const props = defineProps<{
    type: 'submit' | 'button' | 'cancel';
    disabled: boolean;
    theme: Theme
}>();

const color = computed(() => {
    switch (props.theme) {
        case 'primary':
            return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 disabled:bg-gray-400';
        default:
            return 'text-gray-800 bg-gray-200 hover:bg-gray-100 focus:ring-gray-50/50 disabled:bg-gray-100';
    }
})
</script>
