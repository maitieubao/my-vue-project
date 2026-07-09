<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const menuItems = [
  { name: '1 · Login', path: '/login' },
  { name: '2 · Register', path: '/register' },
  { name: '3 · Forgot password', path: '/forgot-password' },
  { name: '4 · Reset password', path: '/reset-password' },
  { name: '5 · Verify email', path: '/verify-email' },
  { name: '6 · Success', path: '/success' },
]

const route = useRoute()
const isOpen = ref(false)

const getNavItemClass = (path: string) => {
  const isActive = route.path === path
  return isActive
    ? 'bg-indigo-600 font-semibold text-white text-[12px] px-4 py-1.5 rounded-full shadow-sm'
    : 'px-4 py-1.5 text-slate-600 font-semibold text-[12px] hover:bg-indigo-50 focus:outline-none'
}

const getMobileNavItemClass = (path: string) => {
  const isActive = route.path === path
  return isActive
    ? 'bg-indigo-600 font-semibold text-white text-[13px] px-4 py-2.5 rounded-lg shadow-sm w-full block text-left'
    : 'px-4 py-2.5 text-slate-600 font-semibold text-[13px] hover:bg-indigo-50 rounded-lg w-full block text-left focus:outline-none'
}
</script>

<template>
  <nav class="relative flex justify-between items-center w-full h-full">
    <div class="flex items-center justify-between md:hidden w-full md:w-auto">
      <span class="text-indigo-600 font-bold text-[14px] md:hidden tracking-wider uppercase"
        >Northwind</span
      >

      <button
        @click="isOpen = !isOpen"
        class="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-indigo-50/50 transition duration-150 cursor-pointer focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-5 h-5 transition-transform duration-200"
          :class="{ 'rotate-90': isOpen }"
        >
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <ul id="navbar__menu" class="hidden md:flex items-center gap-1 flex-nowrap">
      <li v-for="item in menuItems" :key="item.name">
        <RouterLink :to="item.path" :class="getNavItemClass(item.path)">{{ item.name }}</RouterLink>
      </li>
    </ul>

    <div
      v-if="isOpen"
      class="absolute top-10 right-0 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl p-2 flex flex-col gap-1 z-50"
    >
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
        :class="getMobileNavItemClass(item.path)"
        @click="isOpen = false"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>
