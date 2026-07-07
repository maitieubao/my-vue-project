<script setup lang="ts">
import { ref } from 'vue'

const menuItems = [
  { name: '1 · Login', path: '/login' },
  { name: '2 · Register', path: '/register' },
  { name: '3 · Forgot password', path: '/forgot-password' },
  { name: '4 · Reset password', path: '/reset-password' },
  { name: '5 · Verify email', path: '/verify-email' },
  { name: '6 · Success', path: '../SuccessForm/successform.html' },
]

const activeIndex = ref(0)

// Thay thế computed bằng hàm để nhận tham số index
const getNavItemClass = (index: number) => {
  return index === activeIndex.value
    ? 'bg-indigo-600 font-semibold text-white text-[12px] px-4 py-1.5 rounded-full shadow-sm'
    : 'px-4 py-1.5 text-slate-600 font-semibold text-[12px] hover:bg-indigo-50 focus:outline-none'
}
</script>

<template>
  <nav>
    <ul id="navbar__menu" class="flex items-center flex-nowrap">
      <!-- Đã thêm (item, index) để lấy biến index -->
      <li v-for="(item, index) in menuItems" :key="item.name">
        <a :href="item.path" :class="getNavItemClass(index)">{{ item.name }}</a>
      </li>
    </ul>
    <!-- <button id="navbar__menu-button"><img src="/Assets/menu.svg" alt="Menu" width="24" height="24" /></button> -->
  </nav>
</template>
