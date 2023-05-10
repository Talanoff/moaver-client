<template>
    <div class="flex items-center">
        <input
            :id="id"
            type="checkbox"
            :checked="isChecked"
            :value="value"
            @change="updateInput"
            class="appearance-none w-4 h-4 bg-gray-100 border-gray-300 rounded checked:bg-blue-500 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
        >
        <label
                :for="id"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 cursor-pointer"
        >
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: String },
        value: { type: String },
        modelValue: { default: "" },
        label: { type: String, required: true },
        trueValue: { default: true },
        falseValue: { default: false }
    },
    computed: {
        isChecked() {
            if (this.modelValue instanceof Array) {
                return this.modelValue.includes(this.value)
            }
            return this.modelValue === this.trueValue
        }
    },
    methods: {
        updateInput(event) {
            let isChecked = event.target.checked
            if (this.modelValue instanceof Array) {
                let newValue = [...this.modelValue]
                if (isChecked) {
                    newValue.push(this.value)
                } else {
                    newValue.splice(newValue.indexOf(this.value), 1)
                }
                this.$emit('update:modelValue', newValue)
            } else {
                this.$emit('update:modelValue', isChecked ? this.trueValue : this.falseValue)
            }
        }
    }
}
</script>

<style scoped>
[type='checkbox']:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
</style>
