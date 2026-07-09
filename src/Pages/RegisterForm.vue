<script setup lang="ts">
import LeftPanel from '@/components/auth/LeftPanel.vue'
import RegisterRightForm from '@/components/auth/RegisterRightForm.vue'
import Layout from '@/layouts/Layout.vue'
</script>

<template>
  <Layout heightClass="h-[714px]">
    <LeftPanel />
    <RegisterRightForm />
  </Layout>
</template>
