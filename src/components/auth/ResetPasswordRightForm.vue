<template>
  <div class="right-container flex items-center justify-center bg-white h-full w-3/5 rounded-r-2xl">
    <form
      @submit.prevent="onSubmit"
      id="right-container__form-forgot-password"
      class="flex flex-col gap-4 w-88"
    >
      <img src="@/assets/Login/Lock.svg" class="size-[48px]" />

      <p class="font-bold text-2xl text-[#111827] leading-8">Forgot password?</p>

      <p class="font-normal text-[#6B7280] text-[14px] leading-5">
        Choose a strong password you haven't used before. It must be at least 8 characters.
      </p>

      <FormInput
        label="New password"
        id="email"
        name="email"
        placeholder="Create a new password"
        autocomplete="email"
        v-model="password"
        :error="errors.password"
        @blur="validateField('password', password)"
        required
      />

      <FormInput
        label="Confirm new Password"
        id="confirm-password"
        name="confirm-password"
        placeholder="Re-enter your new password"
        autocomplete="confirm-password"
        v-model="password"
        :error="errors.password"
        @blur="validateField('password', password)"
        required
      />

      <button
        type="submit"
        :disabled="!isFormValid"
        class="flex h-11 w-full items-center justify-center mt-2 mb-5 bg-[#5046e5] text-white border rounded-xl border-solid hover:opacity-90 hover:shadow-blue-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
      >
        Update password
      </button>

      <p class="text-center font-normal text-[#6B7280] text-[14px] leading-5">
        <RouterLink
          to="/login"
          class="font-semibold text-[#5046e5] text-[14px] leading-5 hover:underline hover:decoration-indigo-700 inline-flex items-center gap-1.5 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to sign in
        </RouterLink>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import FormInput from './FormInput.vue'
import { useAuthValidation } from '@/composables/useAuthValidation'

const password = ref('')
const { errors, validateField } = useAuthValidation()

const validateForm = () => {
  validateField('email', password.value)
  return !errors.email
}

const isFormValid = computed(() => {
  return password.value.trim() !== '' && errors.email === ''
})

const onSubmit = () => {
  if (!validateForm()) return
  console.log('Reset link requested for:', password.value)
}
</script>
