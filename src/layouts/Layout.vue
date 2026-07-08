<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

defineProps({
  heightClass: {
    type: String,
    default: 'h-173.75',
  },
})
</script>

<template>
  <div class="min-w-screen min-h-screen">
    <div class="h-12.25 flex items-center justify-start bg-slate-50 px-5">
      <NavBar />
    </div>

    <div class="flex items-center justify-center min-h-[calc(100vh-49px)]">
      <div class="flex">
        <div :class="['flex items-center justify-center w-4xl bg-white rounded-2xl', heightClass]">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
