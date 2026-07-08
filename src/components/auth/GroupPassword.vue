<template>
  <div class="w-full">
    <label :for="id" class="block mb-1 text-sm font-semibold text-[#111827]">{{ label }}</label>
    <div class="relative">
      <input
        :type="inputType"
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
          type === 'password' ? 'pr-10' : '',
        ]"
      />

      <button
        v-if="type === 'password'"
        type="button"
        id="togglePassword"
        @click="togglePassword"
        class="absolute inset-y-0 right-2 flex items-center justify-center text-[#6B7280]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          width="20"
          height="20"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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
const showPassword = ref(false)

const inputType = computed(() => {
  if (props.type !== 'password') return props.type
  return showPassword.value ? 'text' : 'password'
})

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>
