<script setup lang="ts">
import LeftPanel from '@/components/auth/LeftPanel.vue'
import NavBar from '@/components/NavBar.vue'
import RightForm from '@/components/auth/RightForm.vue'
import Layout from '@/layouts/Layout.vue'
</script>

<template>
  <Layout>
    <LeftPanel />
    <RightForm />
  </Layout>
</template>
