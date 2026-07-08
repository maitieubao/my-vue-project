<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'

const menuItems = [
  { name: '1 · Login', path: '/login' },
  { name: '2 · Register', path: '/register' },
  { name: '3 · Forgot password', path: '/forgot-password' },
  { name: '4 · Reset password', path: '/reset-password' },
  { name: '5 · Verify email', path: '/verify-email' },
  { name: '6 · Success', path: '../SuccessForm/successform.html' },
]

const route = useRoute()

const getNavItemClass = (path: string) => {
  const isActive = route.path === path
  return isActive
    ? 'bg-indigo-600 font-semibold text-white text-[12px] px-4 py-1.5 rounded-full shadow-sm'
    : 'px-4 py-1.5 text-slate-600 font-semibold text-[12px] hover:bg-indigo-50 focus:outline-none'
}
</script>

<template>
  <nav>
    <ul id="navbar__menu" class="flex items-center flex-nowrap">
      <li v-for="item in menuItems" :key="item.name">
        <RouterLink :to="item.path" :class="getNavItemClass(item.path)">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
