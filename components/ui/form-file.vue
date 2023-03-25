<template>
  <div>
    <img :src="url ? url :props.fileUrl" class="max-w-[100px] max-h-[100px]" alt="">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload photo</label>
    <input @change="inputChange"
           class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
           aria-describedby="file_input_help" id="file_input" type="file">
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX.
      800x400px).</p>
  </div>
</template>

<script setup>
const url = ref('')
const emit = defineEmits(['inputEmit'])
const props = defineProps({
  fileUrl: String
})
const inputChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    emit('inputEmit', reader.result)
    url.value = reader.result;
  };

  // emit('inputEmit', {file:file,url:url.value})
  // localStorage.setItem('file', getBa)
  // const a = localStorage.file
  // console.log(a)
}
// if (localStorage.step4){
//   const file = await JSON.parse(localStorage.step4.file)
//   url.value = await (await fetch(file)).blob();
// }


// })
</script>

<style scoped>

</style>