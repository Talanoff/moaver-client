<template>
    <div class="flex items-center pl-4 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2">
        <input
                :id="title"
                type="checkbox"
                :checked="checked"
                :value="value"
                :required="required"
                class="appearance-none w-4 h-4 bg-gray-100 border-gray-300 rounded checked:bg-blue-500 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
                @change="$emit('change', $event.target.value)"
        >
        <label
                :for="title"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 cursor-pointer"
        >
            {{ $t(`forms.${title}`) }}
        </label>
    </div>
</template>

<script setup>
defineProps({
    value: String | Number,
    title: String,
    checked: Boolean,
    required: Boolean,
});
</script>

<style scoped>
[type='checkbox']:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
</style>
