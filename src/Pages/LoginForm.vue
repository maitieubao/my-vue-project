<script setup lang="ts">
import LeftPanel from '@/components/auth/LeftPanel.vue'
import NavBar from '@/components/auth/NavBar.vue'
import RightForm from '@/components/auth/RightForm.vue'
</script>

<template>
  <div class="min-w-screen min-h-screen">
    <div class="h-12.25 flex items-center justify-start bg-slate-50 px-5">
      <NavBar />
    </div>

    <div class="flex items-center justify-center min-h-[calc(100vh-49px)]">
      <div class="flex">
        <div class="flex items-center justify-center w-4xl h-173.75 bg-white rounded-2xl">
          <LeftPanel />

          <RightForm />
        </div>
      </div>
    </div>
  </div>
</template>
