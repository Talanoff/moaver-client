<template>
    <div class=" flex flex-wrap sm:items-end items-center sm:flex-row flex-col w-full gap-5">
        <div v-for="(item,idx) in items" :key="item.id" class="w-full flex items-center gap-5">
            <form-select
                    v-model="item.country"
                    :id="item.country"
                    :options="options"
                    class="w-1/2"
            />
            <form-input class="w-1/2" v-model="item.city"/>
            <div @click="onRemove(idx)"
                 class="text-red-500 hover:text-red-600 transition-colors duration-300 cursor-pointer sm:w-20 w-10 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
            </div>
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
import {useConfig} from "~/store/config";
import FormInput from "~/components/ui/form-input.vue";

const storeTransporters = useTransporters()
const configStore = useConfig();
const items = ref([{
    country: '',
    city: '',
}])
const options = ref([])
const onRemove = (idx) => {
    items.value.splice(idx, 1)
}
configStore.countries.forEach((el) => {
    options.value.push({key: el.id, value: el.name})
})
const onAdd = () => {
    items.value.push({
        country: '',
        city: '',
    })
}
onUnmounted(() => {
    storeTransporters.form.locations = items.value
    console.log(storeTransporters.form)
})
</script>
