<template>
  <div class="w-full">
    <label for="full-name" class="block mb-1 text-sm text-[#6B7280]">Full name</label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :value="modelValue"
      class="w-full border border-[#E5E7EB] rounded-xl px-3 h-10.5 leading-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
    />
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
})
</script>
