<template>
    <div>
        <img :src="store.form.additionalWishesAttachment[0] ? store.form.additionalWishesAttachment[0][0].url  :''"
             class="max-w-[20rem] max-h-[20rem]" alt="">
        <label class="block mb-2 text-sm font-medium text-slate-900 " for="file_input">
            {{ $t(`forms.upload_photo`) }}</label>
        <input @change="setFile($event)"
               class="block w-full text-sm text-slate-900 border border-slate-300 rounded-lg cursor-pointer bg-slate-100 focus:outline-none"
               aria-describedby="file_input_help" id="file_input" type="file">
        <p class="mt-1 text-sm text-slate-1000 " id="file_input_help">SVG, PNG, JPG or GIF (MAX.
            800x400px).</p>
    </div>
</template>

<script setup>
import {useBooking} from "~/store/booking";

const store = useBooking()
const setFile = (event) => {
    if (event) {
        store.form.additionalWishesAttachment[0] = [{
            file: event.target.files[0],
            url: URL.createObjectURL(event.target.files[0])
        }]
    }
}
setFile()

</script>

<style scoped>

</style>
