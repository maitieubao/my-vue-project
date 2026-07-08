<template>
  <div
    class="left-container relative flex flex-col justify-between p-10 bg-linear-to-b from-[#6c63ff] via-[#4f46e5] to-[#7c6af7] h-full w-2/5 rounded-l-2xl"
  >
    <div class="absolute -right-12 top-8 size-70 rounded-full bg-[rgba(255,255,255,0.05)]"></div>
    <div class="absolute right-12.5 top-24 size-45 rounded-full bg-[rgba(255,255,255,0.07)]"></div>
    <a href="#" class="flex items-center h-9">
      <img src="@/assets/Logo copy.svg" alt="Logo" />
      <span class="text-[18px] font-semibold leading-7 tracking-[-0.45px] text-white px-3 py-1"
        >Northwind</span
      >
    </a>

    <div>
      <p class="text-white font-bold text-[30px] leading-[37.5px] tracking-normal">
        One account for everything your team ships.
      </p>
      <p class="font-normal text-white text-[14px] leading-[22.75px] tracking-normal pt-3">
        Secure sign-in, instant onboarding, and a verified inbox — all in a few clicks.
      </p>
    </div>

    <div class="flex flex-col gap-2">
      <p class="flex items-center font-normal text-white text-[14px] leading-5 gap-2">
        <img src="@/assets/CircleTick.svg" alt="Icon" /> Encrypted credentials
      </p>
      <p class="flex items-center font-normal text-white text-[14px] leading-5 gap-2">
        <img src="@/assets/CircleTick.svg" alt="Icon" /> Email verification built-in
      </p>
      <p class="flex items-center font-normal text-white text-[14px] leading-5 gap-2">
        <img src="@/assets/CircleTick.svg" alt="Icon" /> Password recovery flow
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
