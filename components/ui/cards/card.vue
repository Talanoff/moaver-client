<template>
    <button
            type="button"
            class="block group text-center"
            v-for="category of categories"
            :key="category.id"
            @click="setCategory(category.id)"
    >
        <div
                :class="{'!border-blue-500': form.category[0] === category.id}"
                class="flex justify-center items-center p-5 lg:p-8 border-4 border-slate-200 rounded-md group-hover:border-blue-600 group-hover:bg-slate-100 transition-colors duration-300"
        >
            <svg class="h-16">
                <use :xlink:href="`/icons/categories.svg#${category.icon}`"/>
            </svg>
        </div>

        <div
                class="mt-1.5 w-full flex justify-center items-center group-hover:text-slate-700 text-md"
                :class="{'!text-blue-500': form.category[0] === category.id}"
        >
            <svg v-if="form.category[0] === category.id" class="h-5 w-5 mr-1.5 text-blue-500"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            <span>{{ $t(`categories.${category.name}`) }}</span>
        </div>
    </button>
</template>

<script setup>
import { useBooking } from "~/store/booking";
import { storeToRefs } from "pinia";

const bookingStore = useBooking();
const {form, categories} = storeToRefs(bookingStore);

const setCategory = (name) => {
    bookingStore.toggleModal(true);
    bookingStore.setCategory(name);
}
</script>
