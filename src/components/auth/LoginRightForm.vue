<template>
  <div
    class="right-container flex items-center justify-center bg-white h-full w-3/5 rounded-r-2xl"
  >
    <form
      @submit.prevent="onSubmit"
      id="right-container__form-login"
      class="flex flex-col gap-4 min-w-88"
    >
      <p class="font-bold text-2xl text-[#111827] leading-8">Welcome back</p>

      <p class="font-normal text-[#6B7280] text-[14px] leading-5">
        Sign in to continue to work space.
      </p>

      <SocialLoginButtons />

      <img src="@/assets/Divider.svg" />

      <FormInput
        label="Email"
        id="email"
        name="email"
        placeholder="Your email address"
        autocomplete="email"
        v-model="email"
        :error="errors.email"
        @blur="validateField('email', email)"
        required
      />

      <GroupPassword
        label="Password"
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        autocomplete="current-password"
        v-model="password"
        :error="errors.password"
        @blur="validateField('password', password)"
        required
      />

      <div class="flex items-center justify-between pb-5">
        <div class="flex justify-between gap-2">
          <input type="checkbox" />

          <p>Remember me</p>
        </div>

        <RouterLink
          to="/forgot-password"
          class="font-semibold text-[#5046e5] text-[14px] leading-5 hover:underline hover:decoration-indigo-700"
        >
          Forgot password?
        </RouterLink>
      </div>

      <button
        type="submit"
        :disabled="!isFormValid"
        class="flex h-11 w-full items-center justify-center mb-5 bg-[#5046e5] text-white border rounded-xl border-solid hover:opacity-90 hover:shadow-blue-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
      >
        Sign in
      </button>

      <p class="text-center font-normal text-[#6B7280] text-[14px] leading-5">
        Don't have an account?
        <RouterLink
          to="/register"
          class="font-semibold text-[#5046e5] text-[16px] leading-6 hover:underline hover:decoration-indigo-700"
        >
          Sign up
        </RouterLink>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import SocialLoginButtons from './SocialLoginButtons.vue'
import FormInput from './FormInput.vue'
import GroupPassword from './GroupPassword.vue'
import { useAuthValidation } from '@/composables/useAuthValidation'

const email = ref('')
const password = ref('')

const { errors, validateField } = useAuthValidation()

const validateForm = () => {
  validateField('email', email.value)
  validateField('password', password.value)

  return !errors.email && !errors.password
}

const isFormValid = computed(() => {
  return (
    email.value.trim() !== '' &&
    password.value.trim() !== '' &&
    errors.email === '' &&
    errors.password === ''
  )
})

const onSubmit = () => {
  if (!validateForm()) return
}
</script>
