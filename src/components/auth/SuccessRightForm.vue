<template>
  <div class="right-container flex items-center justify-center bg-white h-full w-full lg:w-3/5">
    <form
      id="right-container__form-forgot-password"
      class="flex flex-col gap-4 w-full max-w-88 px-6 lg:px-0"
    >
      <div class="flex flex-col items-center justify-between gap-2">
        <img src="@/assets/Login/Complete.svg" class="size-16" />
        <p class="font-bold text-2xl text-[#111827] leading-8">You're all set!</p>
      </div>

      <p class="font-normal text-[#6B7280] text-[14px] leading-5">
        Your email has been verified and your account is ready. Welcome to Northwind — let's get you
        to your workspace.
      </p>

      <button
        type="submit"
        class="flex h-11 w-full items-center justify-center mt-2 mb-5 bg-[#5046e5] text-white border rounded-xl border-solid hover:opacity-90 hover:shadow-blue-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
      >
        Continue to dashboard
      </button>

      <p class="text-center font-normal text-[#6B7280] text-[14px] leading-5">
        Redirecting you automatically in 1 second…
      </p>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
