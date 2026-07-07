<template>
  <div
    class="right-container flex items-center justify-center bg-white h-173.75 w-3/5 rounded-r-2xl"
  >
    <div id="right-container__form-login" class="flex flex-col gap-4 min-w-88">
      <p class="font-bold text-2xl text-[#111827] leading-8">Welcome back</p>

      <p class="font-normal text-[#6B7280] text-[14px] leading-5">
        Sign in to continue to work space.
      </p>

      <SocialLoginButtons />

      <img src="@/assets/Divider.svg" />

      <div class="w-full">
        <label for="full-name" class="block mb-1 text-sm text-[#6B7280]">Full name</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Your full name"
          autocomplete="name"
          required
          class="w-full border border-[#E5E7EB] rounded-xl px-3 h-10.5 leading-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div class="w-full pb-5">
        <label for="password" class="block mb-1 text-sm text-[#6B7280]">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          autocomplete="current-password"
          required
          class="w-full border border-[#E5E7EB] rounded-md px-3 h-10.5 leading-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div class="flex items-center justify-between pb-5">
        <div class="flex justify-between gap-2">
          <input type="checkbox" />

          <p>Remember me</p>
        </div>

        <p
          class="font-semibold text-[#5046e5] text-[14px] leading-5 hover:underline hover:decoration-indigo-700"
        >
          Forgot password?
        </p>
      </div>

      <button
        class="flex h-11 w-full items-center justify-center mb-5 bg-[#5046e5] text-white cursor-pointer border rounded-xl border-solid hover:opacity-90 hover:shadow-blue-800 transition"
      >
        Sign in
      </button>

      <p class="text-center font-normal text-[#6B7280] text-[14px] leading-5">
        Don't have an account?
        <span
          class="font-semibold text-[#5046e5] text-[16px] leading-6 hover:underline hover:decoration-indigo-700"
          >Sign up</span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import SocialLoginButtons from './SocialLoginButtons.vue'
</script>
