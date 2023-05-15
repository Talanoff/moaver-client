<template>
    <no-ssr>
        <file-pond
                ref="pond"
                label-idle="Drop files here..."
                :allow-multiple="true"
                accepted-file-types="image/jpeg, image/png"
                server="/api"
                :files="filesRef"
        />
    </no-ssr>
</template>

<script setup>
import vueFilePond from "vue-filepond";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);

const filesRef = ref([]);
</script>
