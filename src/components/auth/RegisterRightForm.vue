<template>
  <div class="right-container flex items-center justify-center bg-white h-full w-3/5 rounded-r-2xl">
    <form
      @submit.prevent="onSubmit"
      id="right-container__form-register"
      class="flex flex-col gap-4 min-w-88"
    >
      <p class="font-bold text-2xl text-[#111827] leading-8">Create an account</p>

      <p class="font-normal text-[#6B7280] text-[14px] leading-5">
        Start your 14-day free trial. No card required.
      </p>

      <SocialLoginButtons iconSize="big" />

      <img class="pb-[-10px]" src="@/assets/Container.svg" />

      <FormInput
        label="Full Name"
        id="name"
        name="name"
        placeholder="Your full name"
        v-model="name"
        :error="errors.name"
        @blur="validateField('name', name)"
        required
      />

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
        placeholder="Create a password"
        autocomplete="new-password"
        v-model="password"
        :error="errors.password"
        @blur="handlePasswordBlur"
        required
      />

      <GroupPassword
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm your password"
        autocomplete="new-password"
        v-model="confirmPassword"
        :error="errors.confirmPassword"
        @blur="validateField('confirmPassword', confirmPassword, password)"
        required
      />

      <div class="flex items-center gap-2 pb-2">
        <input type="checkbox" id="terms" v-model="termsAccepted" required />
        <label for="terms" class="text-[14px] text-[#6B7280]">
          I agree to the
          <span
            class="text-[#5046e5] text-[16px] font-semibold leading-6 cursor-pointer hover:underline"
            >Terms</span
          >
          and
          <span
            class="text-[#5046e5] text-[16px] font-semibold leading-6 cursor-pointer hover:underline"
            >Privacy Policy</span
          >.
        </label>
      </div>

      <button
        type="submit"
        :disabled="!isFormValid"
        class="flex h-11 w-full items-center justify-center mb-3 bg-[#5046e5] text-white border rounded-xl border-solid hover:opacity-90 hover:shadow-blue-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
      >
        Sign up
      </button>

      <p class="text-center font-normal text-[#6B7280] text-[14px] leading-5">
        Already have an account?
        <RouterLink
          to="/login"
          class="font-semibold text-[#5046e5] text-[16px] leading-6 hover:underline hover:decoration-indigo-700"
        >
          Sign in
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

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const termsAccepted = ref(false)

const { errors, validateField } = useAuthValidation()

const handlePasswordBlur = () => {
  validateField('password', password.value)
  if (confirmPassword.value) {
    validateField('confirmPassword', confirmPassword.value, password.value)
  }
}

const validateForm = () => {
  validateField('name', name.value)
  validateField('email', email.value)
  validateField('password', password.value)
  validateField('confirmPassword', confirmPassword.value, password.value)

  return (
    !errors.name &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    termsAccepted.value
  )
}

const isFormValid = computed(() => {
  return (
    name.value.trim() !== '' &&
    email.value.trim() !== '' &&
    password.value.length >= 6 &&
    confirmPassword.value === password.value &&
    termsAccepted.value &&
    errors.name === '' &&
    errors.email === '' &&
    errors.password === '' &&
    errors.confirmPassword === ''
  )
})

const onSubmit = () => {
  if (!validateForm()) return
  console.log('Registration submitted:', {
    name: name.value,
    email: email.value,
    password: password.value,
  })
}
</script>
