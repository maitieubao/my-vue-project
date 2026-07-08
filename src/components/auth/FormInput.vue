<template>
  <div class="w-full">
    <label :for="id" class="block mb-1 text-sm font-semibold text-[#111827]">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      :class="[
        'w-full rounded-xl px-3 h-10.5 leading-none border border-solid border-[#e5e7eb] placeholder-gray-400 focus:outline-none focus:ring-2',
        error ? 'border-red-500 ring-red-100' : 'border-[#E5E7EB] focus:ring-indigo-200',
      ]"
    />
    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: String, default: '' },
  type: { type: String, default: 'text' },
  id: { type: String, required: true },
  name: { type: String, required: true },
  placeholder: { type: String, default: '' },
  autocomplete: { type: String, default: 'off' },
  required: { type: Boolean, default: false },
  error: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'blur'])
</script>
