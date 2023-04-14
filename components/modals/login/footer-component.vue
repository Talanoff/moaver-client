<template>
    <footer class="flex justify-between items-center mt-8">
        <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
                type="submit">
            <slot/>
        </button>
    </footer>
</template>

<script setup>
import { useTransporters } from "~/store/transporters";

const store = useTransporters()
defineEmits(['submit'])
const width = computed(() => {
    return ((store.currentStep / store.steps.length) * 100) + '%'
})

</script>

<style scoped>

</style>
