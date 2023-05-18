<template>
    <div>
        <label :for="$attrs.controlName" class="block mb-2 text-sm font-bold">
            {{ $attrs.label }}
        </label>
        <textarea
                :id="$attrs.controlName"
                v-bind="$attrs"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :rows="rows ?? 4"
                class="appearance-none resize-none block w-full px-3.5 py-2.5 bg-slate-100 border-none text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                :placeholder="$attrs.placeholder ?? ' '"
        ></textarea>
    </div>
</template>

<script setup>
defineProps([
    'modelValue',
    'rows'
])
</script>
