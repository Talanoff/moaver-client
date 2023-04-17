<template>
    <div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2">
            <h2 class="font-semibold sm:sm:w-1/2">Category:</h2> {{ category }}
        </div>
        <div v-for="(field,idx) in fields" :key="idx">
            <div v-if="field.name !== 'Pick file'">
                <div v-if="field.name && field.value" class="flex sm:justify-start justify-between border-b-2 pb-2">
                    <h2 class="font-semibold sm:w-1/2">{{ field.name }}:</h2>
                    <p>{{ field.value }}</p></div>
            </div>
            <div v-if="field.name !== 'Pick file'">
                <div v-if="field.name && field.value" class="flex sm:justify-start justify-between border-b-2 pb-2">
                    <h2 class="font-semibold sm:w-1/2">{{ field.name }}:</h2>
                    <p>{{ field.value }}</p></div>
            </div>
            <div v-else>
                <div v-if="field.name && field.url" class="flex sm:justify-start justify-between mt-4 border-b-2 pb-2">
                    <div class="sm:w-1/2 font-semibold">{{ field.name }}:</div>
                    <img :src="field.url" alt=""
                         class="w-32 ">
                </div>
            </div>

        </div>
        <div class="border-b-2 pb-2 sm:flex sm:justify-start">

            <h2 class="font-semibold sm:w-1/2">{{ steps[3].title }}:</h2>
            <div>
                <div v-for="field in additional_wishes" :key="field.id">
                    <div>-{{ field.name }}</div>
                </div>
            </div>
        </div>
        <div class="border-b-2 pb-2 sm:flex sm:justify-start">
            <h2 class="font-semibold sm:w-1/2">{{ steps[2].title }}:</h2>
            <div>
                <div v-for="test in wishes">
                    <div>
                        {{test.name}}

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBooking } from "~/store/booking";
const props = defineProps({
    steps: []
})
const value = ref([])
const fields = ref([])
const additional_wishes = ref([])
const wishes = ref([])
const store = useBooking()
const setValue = () => {
    props.steps.forEach(el => el.fields.forEach((elem) => {
        if (elem.fieldType !== 'services') {
            fields.value.push({ name: elem.attrs?.name, value: elem.value, url: elem.attrs?.url })
        }
    }))
}
const setWishes = ()=>{
    store.form.additional_wishes.forEach((el)=>{
        props.steps[3].fields[0].attrs.options.forEach((field)=>{
            el.forEach((id)=>{
                if(field.id === id){
                    additional_wishes.value.push(field)
                }
            })

        })
    })
    store.form.wishes.forEach((el)=>{
        props.steps[2].fields[0].attrs.options.forEach((field)=>{
            el.forEach((id)=>{
                if(field.id === id){
                    wishes.value.push(field)
                }
            })

        })
    })
}
setWishes()
setValue()

</script>

<style scoped>

</style>
