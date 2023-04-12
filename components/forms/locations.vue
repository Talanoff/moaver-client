<template>
    <div class="flex sm:items-end items-center sm:flex-row flex-col w-full gap-5">
        <div v-for="item in $attrs.items" :key="item.id" class="w-full">
            <form-select
                    v-model="item.value"
                    v-bind="item.attr"
                    :id="item.id"
                    :options="item.options"
            />
        </div>

        <div @click="onRemove(props.id)"
             class="text-red-500 hover:text-red-600 transition-colors duration-300 cursor-pointer sm:w-20 w-10 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
        </div>
    </div>

    <button
        type="button"
        @click.prevent="onAdd()"
        class="m-2.5 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
        Add
    </button>
</template>

<script setup>
import FormSelect from "~/components/ui/form-select.vue";
import {useTransporters} from "~/store/transporters";

const storeTransporters = useTransporters()
const props = defineProps(['id']);

const onRemove = (id) => {
    storeTransporters.steps[storeTransporters.currentStep - 1].fields.forEach((field, idx) => {
        if (field.id === id && storeTransporters.steps[storeTransporters.currentStep - 1].fields.length > 1) {
            storeTransporters.steps[storeTransporters.currentStep - 1].fields.splice(idx, 1)
        }
    })
}

const onAdd = () => {

}
</script>
