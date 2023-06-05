<template>
    <client-only>
        <file-pond
                ref="filesRef"
                :label-idle="$attrs.label ?? 'Drop files here...'"
                :allow-multiple="true"
                accepted-file-types="image/jpeg, image/png"
                @addfile="handleUpload"
        />
    </client-only>
</template>

<script setup>
import vueFilePond from "vue-filepond";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFileEncode
);

const filesRef = ref(null);

const emits = defineEmits(['update:modelValue']);

const handleUpload =  () => {
    const files = filesRef.value.getFiles();
    const value = files.map(it => it.getFileEncodeDataURL());

    emits('update:modelValue', value);
}
</script>
