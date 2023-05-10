<template>
    <div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2">
            <h2 class="font-semibold sm:sm:w-1/2">Category:</h2> {{ $t(`categories.${store.form.category[0]}`) }}

        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2">
            <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.Pieces`) }}:</h2>
            <p>{{ store.form.pieces[0] }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2" v-if="store.form.selectCategory[0] !== null">
            <h2 class="font-semibold sm:w-1/2">Dispatch type:</h2>
            <p>{{ store.form.selectCategory[0] }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2" v-if="store.form.kg[0] !== null">
            <h2 class="font-semibold sm:w-1/2">Kg:</h2>
            <p>{{ store.form.kg[0] }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2" v-if="store.form.message[0] !== null">
            <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.Message`) }}:</h2>
            <p>{{ store.form.message[0] }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2" v-if="store.form.dateFrom[0] !== null">
            <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.Date From`) }}:</h2>
            <p>{{ dateFrom() }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2" v-if="store.form.locationFrom[0] !== null">
            <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.Location from`) }}</h2>
            <p>{{ store.form.locationFrom[0] }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2"
             v-if="store.form.selectLocationFrom[0] !== null">
            <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.Location type from`) }}</h2>
            <p>{{ store.form.selectLocationFrom[0] }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2"
             v-if="store.form.dateTo[0] !== null">
            <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.Date To`) }}:</h2>
            <p>{{ dateTo() }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2"
             v-if="store.form.locationTo[0] !== null">
            <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.Location to`) }}:</h2>
            <p>{{ store.form.locationTo[0] }}</p>
        </div>
        <div class="flex sm:justify-start justify-between border-b-2 pb-2"
             v-if="store.form.selectLocationTo[0] !== null">
            <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.Location type to`) }}:</h2>
            <p>{{ store.form.selectLocationTo[0] }}</p>
        </div>
    </div>

    <div class="border-b-2 pb-2 sm:flex sm:justify-start" v-if="wishes.length > 0">
        <h2 class="font-semibold sm:w-1/2">{{ $t('forms.Pick-up and delivery wishes/requirements') }}:</h2>
        <div class="w-1/2">
            <div v-for="item in wishes" :key="item.id">
                <div>
                    {{ item.name }}

                </div>
            </div>
        </div>
    </div>
    <div class="border-b-2 pb-2 sm:flex sm:justify-start"
         v-if="additional_wishes.length>0 || store.form.additional_wishes_notes[0] !== null ">

        <h2 class="font-semibold sm:w-1/2">{{ $t(`forms.${steps[3].title}`) }}:</h2>
        <div class="w-1/2">
            <div v-for="field in additional_wishes" :key="field.name">
                <div>{{ $t(`forms.${field.name}`) }}</div>
            </div>

        </div>
    </div>
    <div class="sm:flex sm:justify-start justify-between border-b-2 pb-2"
         v-if="store.form.additional_wishes_notes[0] !== null">
        <h2 class="font-semibold sm:w-1/2">Additional wishes notes:</h2>
        <p>{{ store.form.additional_wishes_notes[0] }}</p>
    </div>
    <div class="sm:flex sm:justify-start justify-between border-b-2 pb-2"
         v-if=" store.form.additional_wishes_attachment[0] !== null ? store.form.additional_wishes_attachment[0][0].url: false">
        <h2 class="font-semibold sm:w-1/2">Sending photo</h2>
        <img class="sm:w-[20rem]" :src="store.form.additional_wishes_attachment[0][0].url" alt="">
    </div>

</template>

<script setup>
import {useBooking} from "~/store/booking";

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
            fields.value.push({name: elem.attrs?.name, value: elem.value, url: elem.attrs?.url})
        }
    }))
}
const dateFrom = () => {
    let date = ''
    let parse = Date.parse(store.form.dateFrom[0])
    let year = new Date(parse).getFullYear()
    let month = String(new Date(parse).getUTCMonth() + 1)
    let day = new Date(parse).getUTCDate()
    let hours = new Date(parse).getHours()
    let minutes = new Date(parse).getMinutes()
    date = year + '/' + (month.length === 1 ? '0' + month : month) + "/" + day + " " + hours + ":" + minutes
    console.log(parse)
    return date
}
const dateTo = () => {
    let date = ''
    let parse = Date.parse(store.form.dateTo[0])
    let year = new Date(parse).getFullYear()
    let month = String(new Date(parse).getMonth() + 1)
    let day = new Date(parse).getUTCDate()
    let hours = new Date(parse).getHours()
    let minutes = new Date(parse).getMinutes()
    date = year + '/' + (month.length === 1 ? '0' + month : month) + "/" + day + " " + hours + ":" + minutes
    return date
}
const setWishes = () => {
    store.form.additional_wishes.forEach((el) => {
        props.steps[3].fields[0].attrs.options.forEach((field) => {
            el.forEach((id) => {
                if (field.id === id) {
                    additional_wishes.value.push(field)
                }
            })

        })
    })
    store.form.wishes.forEach((el) => {
        props.steps[2].fields[0].attrs.options.forEach((field) => {
            el.forEach((id) => {
                if (field.id === id) {
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
