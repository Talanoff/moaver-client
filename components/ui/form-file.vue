<template>
    <div>
        <img :src="store.form.additional_wishes_attachment[0].url ? store.form.additional_wishes_attachment[0].url :''" class="max-w-[100px] max-h-[100px]" alt="">
        <label class="block mb-2 text-sm font-medium text-gray-900 " for="file_input">    {{$t(`forms.upload_photo`)}}</label>
        <input @change="setFile($event)"
               class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
               aria-describedby="file_input_help" id="file_input" type="file">
        <p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX.
            800x400px).</p>
    </div>
</template>

<script setup>
import { useBooking } from "~/store/booking";

const store = useBooking()
const setFile = (event) => {
    if (event) {
        store.form.additional_wishes_attachment[0] = {file:event.target.files[0], url:URL.createObjectURL(event.target.files[0])}
    }
}
setFile()

</script>

<style scoped>

</style>
