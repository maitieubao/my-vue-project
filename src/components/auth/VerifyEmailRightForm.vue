<template>
  <div class="right-container flex items-center justify-center bg-white h-full w-3/5 rounded-r-2xl">
    <form
      @submit.prevent="onSubmit"
      id="right-container__form-verify-email"
      class="flex flex-col gap-6 w-88"
    >
      <div class="flex flex-col gap-2">
        <img src="@/assets/Login/Email.svg" class="size-[48px] self-start mb-2" />

        <p class="font-bold text-2xl text-[#111827] leading-8">Verify your email</p>

        <p class="font-normal text-[#6B7280] text-[14px] leading-5">
          We sent a 6-digit code to your email. Enter it below to confirm your address.
        </p>
      </div>

      <div class="flex flex-row justify-between items-center gap-2">
        <input
          v-for="(digit, index) in code"
          :key="index"
          ref="inputs"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          maxlength="1"
          v-model="code[index]"
          @input="handleInput(index, $event)"
          @keydown.delete="handleDelete(index, $event)"
          @paste="handlePaste($event)"
          class="size-12 border border-[#e5e7eb] rounded-xl text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        :disabled="!isFormValid"
        class="flex h-11 w-full items-center justify-center mt-2 mb-2 bg-[#5046e5] text-white border rounded-xl border-solid hover:opacity-90 hover:shadow-blue-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
      >
        Verify Code
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
import { ref, computed, nextTick } from 'vue'
import { RouterLink } from 'vue-router'

const code = ref(['', '', '', '', '', ''])
const inputs = ref<HTMLInputElement[]>([])

const handleInput = (index: number, event: Event) => {
  const target = event.target as HTMLInputElement
  const val = target.value.replace(/[^0-9]/g, '')
  code.value[index] = val

  if (val && index < 5) {
    nextTick(() => {
      inputs.value[index + 1]?.focus()
    })
  }
}

const handleDelete = (index: number, event: KeyboardEvent) => {
  if (!code.value[index] && index > 0) {
    nextTick(() => {
      inputs.value[index - 1]?.focus()
    })
  }
}

const handlePaste = (event: ClipboardEvent) => {
  const pasteData = event.clipboardData?.getData('text') || ''
  const digits = pasteData
    .replace(/[^0-9]/g, '')
    .slice(0, 6)
    .split('')
  for (let i = 0; i < 6; i++) {
    code.value[i] = digits[i] || ''
  }
  nextTick(() => {
    const nextFocusIndex = Math.min(digits.length, 5)
    inputs.value[nextFocusIndex]?.focus()
  })
}

const isFormValid = computed(() => {
  return code.value.every((digit) => digit !== '')
})

const onSubmit = () => {
  if (!isFormValid.value) return
  console.log('Verifying code:', code.value.join(''))
}
</script>
